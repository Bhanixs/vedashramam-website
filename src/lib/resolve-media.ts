// Dynamic asset resolver for Vedashramam
// Resolves Vite bundled assets (/src/assets/...), public static assets (/assets/...),
// external Supabase Storage URLs (https://...), base64 data URLs, and handles expired blob: URLs gracefully.

// Eagerly import all assets from src/assets so Vite hashes and bundles them into the build
const assetModules = import.meta.glob<string>(
  "/src/assets/**/*.{jpg,jpeg,png,webp,mp4,JPG,JPEG,PNG}",
  { eager: true, import: "default" }
);

// Build normalized key map for ultra-resilient matching
// Keys normalized:
// 1. Lowercased
// 2. Decoded ("%20" -> " ")
// 3. Stripped of leading "/src/assets/", "src/assets/", "/assets/", "assets/", "/"
const NORMALIZED_ASSET_MAP = new Map<string, string>();

for (const [rawPath, resolvedUrl] of Object.entries(assetModules)) {
  // rawPath is like "/src/assets/Gallery/image01.jpg"
  NORMALIZED_ASSET_MAP.set(rawPath, resolvedUrl);

  const clean = rawPath.replace(/^\/?(src\/)?assets\//i, "");
  const decoded = decodeURIComponent(clean).toLowerCase();

  NORMALIZED_ASSET_MAP.set(decoded, resolvedUrl);

  // Also index by basename (e.g. "image01.jpg")
  const basename = decoded.split("/").pop();
  if (basename && !NORMALIZED_ASSET_MAP.has(basename)) {
    NORMALIZED_ASSET_MAP.set(basename, resolvedUrl);
  }
}

/**
 * Checks if a given URL is an invalid / expired browser blob URL (e.g. from WhatsApp Web)
 */
export function isTemporaryBlobUrl(url?: string | null): boolean {
  if (!url) return false;
  return url.trim().toLowerCase().startsWith("blob:");
}

/**
 * Resolves any image or video reference (from Supabase, local state, or admin input)
 * into a valid browser-loadable URL.
 */
export function resolveMediaUrl(url?: string | null, fallback = ""): string {
  if (!url || typeof url !== "string") return fallback;

  const trimmed = url.trim();
  if (!trimmed) return fallback;

  // 1. Block expired temporary browser memory blob URLs
  if (isTemporaryBlobUrl(trimmed)) {
    return fallback;
  }

  // 2. Return data URLs and remote HTTPS/HTTP URLs directly
  if (
    trimmed.startsWith("data:") ||
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://")
  ) {
    return trimmed;
  }

  // 3. Exact match in raw module paths
  if (NORMALIZED_ASSET_MAP.has(trimmed)) {
    return NORMALIZED_ASSET_MAP.get(trimmed)!;
  }

  // 4. Normalized path match
  const clean = trimmed.replace(/^\/?(src\/)?assets\//i, "");
  const decoded = decodeURIComponent(clean).toLowerCase();

  if (NORMALIZED_ASSET_MAP.has(decoded)) {
    return NORMALIZED_ASSET_MAP.get(decoded)!;
  }

  // 5. Basename match
  const basename = decoded.split("/").pop();
  if (basename && NORMALIZED_ASSET_MAP.has(basename)) {
    return NORMALIZED_ASSET_MAP.get(basename)!;
  }

  // 6. If it already starts with a root slash or asset path, return it as a last resort
  return trimmed;
}
