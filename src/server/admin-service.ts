import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { TRUST_DETAILS } from "../lib/trust-details";

// ── CONFIGURATION & CREDENTIALS ──────────────────────────────
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@vedashramam.org";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "VedaAshramam@2026";
const STATIC_FALLBACK_TOKEN = "vedabhavan_secret_admin_token_2026";

function sbUrl() {
  const u = process.env.SUPABASE_URL || "";
  return u.replace(/\/(rest|storage)\/v1\/?.*$/, "").replace(/\/$/, "");
}
function sbAnon() {
  return process.env.SUPABASE_ANON || "";
}
function sbService() {
  return process.env.SUPABASE_SERVICE || "";
}
function isSupabaseConfigured() {
  return Boolean(sbUrl() && (sbService() || sbAnon()));
}

// Persistent signed token registry
const activeTokens = new Set<string>([STATIC_FALLBACK_TOKEN]);
const TOKEN_SECRET = process.env.ADMIN_TOKEN_SECRET || "vedabhavan_hmac_secret_2026";

export function generateAdminToken(email: string): string {
  const timestamp = Date.now().toString();
  const signature = crypto
    .createHmac("sha256", TOKEN_SECRET)
    .update(`${email}:${timestamp}:${ADMIN_PASSWORD}`)
    .digest("hex");
  const token = `vedatoken.${timestamp}.${signature}`;
  activeTokens.add(token);
  return token;
}

export function verifyAdminToken(authHeader: string | null | undefined): boolean {
  if (!authHeader) return false;
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (token === STATIC_FALLBACK_TOKEN) return true;
  if (activeTokens.has(token)) return true;

  // Verify HMAC signature across server restarts
  const parts = token.split(".");
  if (parts.length === 3 && parts[0] === "vedatoken") {
    const [, timestamp, signature] = parts;
    const expected = crypto
      .createHmac("sha256", TOKEN_SECRET)
      .update(`${ADMIN_EMAIL}:${timestamp}:${ADMIN_PASSWORD}`)
      .digest("hex");
    if (signature === expected) {
      const ageMs = Date.now() - Number(timestamp);
      // Valid for 7 days
      if (ageMs > 0 && ageMs < 7 * 24 * 60 * 60 * 1000) {
        activeTokens.add(token);
        return true;
      }
    }
  }

  return false;
}

// ── LOCAL JSON FALLBACK STORE ────────────────────────────────
interface DbStore {
  contacts: Array<{
    id: string;
    name: string;
    contact: string;
    interest: string;
    message: string;
    status: "new" | "in_progress" | "resolved";
    created_at: string;
  }>;
  donations: Array<{
    id: string;
    donor_name: string;
    donor_phone: string;
    donor_pan: string;
    amount: number;
    purpose: string;
    payment_method: string;
    status: "pending_verification" | "verified" | "receipt_sent";
    notes: string;
    created_at: string;
  }>;
  activities: Array<{
    id: string;
    title: string;
    category: string;
    description: string;
    event_date: string;
    photos: string[];
    videos: string[];
    is_published: boolean;
    sort_order: number;
    created_at: string;
  }>;
  gallery: Array<{
    id: string;
    title: string;
    image_url: string;
    category: string;
    sort_order: number;
    is_published: boolean;
    created_at: string;
  }>;
  settings: {
    id: string;
    trust_name: string;
    phone: string;
    email: string;
    address: string;
    upi_id: string;
    bank_name: string;
    bank_branch: string;
    bank_account: string;
    bank_ifsc: string;
    pan: string;
    reg_80g: string;
    updated_at: string;
  };
}

const CORE_ACTIVITIES: DbStore["activities"] = [
  {
    id: "act-sankara-jayanthi",
    title: "Sankara Jayanthi",
    category: "Veda Parayanam & Sadas",
    description:
      "Grand celebrations dedicated to Jagadguru Sri Adi Shankaracharya with multi-day Veda Parayanam, Shankara Bhashya Pathanam, Mahanyasa Purvaka Rudrabhishekam, and Deeparadhana by resident vidyarthis and learned acharyas.",
    event_date: "Annual Vaisakha Masam",
    photos: [
      "/src/assets/Sankara Jayanthi/sankara_jayanthi01.jpeg",
      "/src/assets/Sankara Jayanthi/sankara_jayanthi02.jpeg",
      "/src/assets/Sankara Jayanthi/sankara_jayanthi03.jpeg",
      "/src/assets/Sankara Jayanthi/sankara_jayanthi04.jpeg",
      "/src/assets/Sankara Jayanthi/sankara_jayanthi05.jpeg",
      "/src/assets/Sankara Jayanthi/sankara_jayanthi06.jpeg",
      "/src/assets/Sankara Jayanthi/sankara_jayanthi07.jpeg",
      "/src/assets/Sankara Jayanthi/sankara_jayanthi08.jpeg",
    ],
    videos: ["/src/assets/Sankara Jayanthi/sankara_jayanthi_video.mp4"],
    is_published: true,
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "act-sankaranti",
    title: "Sankaranti",
    category: "Festival & Go Pooja",
    description:
      "Auspicious Makara Sankranti and Pongal festival celebrated with Surya Namaskara mantram recitation, traditional Pongal naivedyam, special Veda Parayanam, and Go Pooja at the Gurukulam Goshala.",
    event_date: "Makara Sankranti / Thai Pongal",
    photos: [
      "/src/assets/Sankaranti/sankaranti01.jpg",
      "/src/assets/Sankaranti/sankaranti02.jpg",
      "/src/assets/Sankaranti/sankaranti03.jpg",
      "/src/assets/Sankaranti/sankaranti04.jpg",
      "/src/assets/Sankaranti/sankaranti05.jpg",
      "/src/assets/Sankaranti/sankaranti06.jpg",
      "/src/assets/Sankaranti/sankaranti07.jpg",
      "/src/assets/Sankaranti/sankaranti08.jpg",
      "/src/assets/Sankaranti/sankaranti09.jpg",
    ],
    videos: [],
    is_published: true,
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "act-krishna-jayanthi",
    title: "Krishna Jayanthi",
    category: "Utsavam & Parayanam",
    description:
      "Sri Krishna Jayanthi (Gokulashtami) celebrations featuring Srimad Bhagavatam recital, floral alankaram, midnight Sri Krishna Janma Pooja, special aradhana, and devotional chanting by our Vidyarthis.",
    event_date: "Gokulashtami / Rohini",
    photos: [
      "/src/assets/Krishna_Jayanthi/krishna_jayanthi01.jpeg",
      "/src/assets/Krishna_Jayanthi/krishna_jayanthi02.jpeg",
      "/src/assets/Krishna_Jayanthi/krishna_jayanthi03.jpeg",
    ],
    videos: [],
    is_published: true,
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: "act-annadanam",
    title: "Annadanam",
    category: "Daily Seva",
    description:
      "The sacred practice of Nithya Annadanam, offering wholesome satvik meals daily to resident Vidyarthis, adhyapakas, visiting sadhus, and devotees across all festivals, ceremonies, and Samaradhana occasions.",
    event_date: "Nithya Annadanam / Daily",
    photos: [
      "/src/assets/Annadanam/annadanam01.jpeg",
      "/src/assets/Annadanam/annadanam02.jpeg",
      "/src/assets/Annadanam/annadanam03.jpeg",
    ],
    videos: [],
    is_published: true,
    sort_order: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: "act-ammavasai-tharpanam",
    title: "Ammavasai Tharpanam",
    category: "Monthly Anushtanam",
    description:
      "Monthly Amavasya sacred rituals, Pitru Tharpanam guidance, and Tila Homam conducted by Patasala Sastrigals for pitru preethi and ancestral blessings for devotees and their families.",
    event_date: "Every Amavasya (New Moon Day)",
    photos: ["/src/assets/Ammavasai Tharpanam/ammavasai_tharpanam01.jpeg"],
    videos: [],
    is_published: true,
    sort_order: 5,
    created_at: new Date().toISOString(),
  },
  {
    id: "act-singeri-madam-swamigal",
    title: "Singeri Madam Swamigal",
    category: "Guru Krupa & Anugraha Bhashanam",
    description:
      "Reverent observances, Paduka Poojas, and benedictions associated with the Jagadgurus of Dakshinamnaya Sri Sringeri Sharada Peetham, inspiring the students through sacred Anugraha Bhashanam and spiritual guidance.",
    event_date: "Sacred Guru Darshanam & Vijaya Yatra",
    photos: ["/src/assets/Singeri Madam Swamigal/singeri_swamigal01.jpeg"],
    videos: ["/src/assets/Singeri Madam Swamigal/Singeri Swamigal video01.mp4"],
    is_published: true,
    sort_order: 6,
    created_at: new Date().toISOString(),
  },
];

const CORE_GALLERY: DbStore["gallery"] = Array.from({ length: 23 }, (_, idx) => {
  const num = String(idx + 1).padStart(2, "0");
  return {
    id: `gal-${num}`,
    title: `Patasala & Sabha Photo ${idx + 1}`,
    image_url: `/src/assets/Gallery/image${num}.jpg`,
    category: "Gurukulam Life",
    sort_order: idx + 1,
    is_published: true,
    created_at: new Date().toISOString(),
  };
});

const DEFAULT_STORE: DbStore = {
  contacts: [],
  donations: [],
  activities: CORE_ACTIVITIES,
  gallery: CORE_GALLERY,
  settings: {
    id: "general",
    trust_name: TRUST_DETAILS.trustName || TRUST_DETAILS.name || "",
    phone: TRUST_DETAILS.officialPhone || TRUST_DETAILS.contact?.phone || "",
    email: TRUST_DETAILS.officialEmail || TRUST_DETAILS.contact?.email || "",
    address: TRUST_DETAILS.registeredAddress || TRUST_DETAILS.address?.full || "",
    upi_id: TRUST_DETAILS.banking?.upiId || TRUST_DETAILS.upi?.id || "",
    bank_name: TRUST_DETAILS.banking?.bankName || TRUST_DETAILS.bank?.bankName || "",
    bank_branch: TRUST_DETAILS.banking?.branch || TRUST_DETAILS.bank?.branch || "",
    bank_account: TRUST_DETAILS.banking?.accountNumber || TRUST_DETAILS.bank?.accountNumber || "",
    bank_ifsc: TRUST_DETAILS.banking?.ifscCode || TRUST_DETAILS.bank?.ifscCode || "",
    pan: TRUST_DETAILS.pan || "",
    reg_80g: TRUST_DETAILS.registration80G || TRUST_DETAILS.approval80G?.uniqueRegistrationNumber || "",
    updated_at: new Date().toISOString(),
  },
};

const DB_FILE_PATH = path.resolve(process.cwd(), "data", "admin-store.json");

function readLocalStore(): DbStore {
  try {
    if (fs.existsSync(DB_FILE_PATH)) {
      const raw = fs.readFileSync(DB_FILE_PATH, "utf-8");
      const parsed = JSON.parse(raw);
      let needsSave = false;
      if (!Array.isArray(parsed.activities) || parsed.activities.length === 0) {
        parsed.activities = CORE_ACTIVITIES;
        needsSave = true;
      }
      if (!Array.isArray(parsed.gallery) || parsed.gallery.length === 0) {
        parsed.gallery = CORE_GALLERY;
        needsSave = true;
      }
      if (!parsed.settings) {
        parsed.settings = DEFAULT_STORE.settings;
        needsSave = true;
      }
      if (needsSave) {
        writeLocalStore(parsed);
      }
      return parsed;
    }
  } catch (err) {
    console.warn("Failed to read local DB store file, using in-memory defaults:", err);
  }
  const initial: DbStore = {
    contacts: [],
    donations: [],
    activities: CORE_ACTIVITIES,
    gallery: CORE_GALLERY,
    settings: DEFAULT_STORE.settings,
  };
  writeLocalStore(initial);
  return initial;
}

function writeLocalStore(store: DbStore): void {
  try {
    const dir = path.dirname(DB_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(store, null, 2), "utf-8");
  } catch (err) {
    console.warn("Failed to write to local DB store file:", err);
  }
}

// ── SUPABASE REST HELPER ─────────────────────────────────────
async function sbFetch(table: string, method = "GET", body: unknown = null, qs = "") {
  const url = `${sbUrl()}/rest/v1/${table}${qs ? `?${qs}` : ""}`;
  const headers: Record<string, string> = {
    apikey: sbAnon(),
    "content-type": "application/json",
  };
  if (method !== "GET") {
    headers.authorization = `Bearer ${sbService() || sbAnon()}`;
    headers.prefer = "return=representation";
  }
  const opts: RequestInit = { method, headers };
  if (body !== null && body !== undefined) {
    opts.body = JSON.stringify(body);
  }
  const res = await fetch(url, opts);
  if (res.status === 204) return null;
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Supabase ${res.status}: ${errText}`);
  }
  return res.json();
}

// ── MAIN API DISPATCHER ──────────────────────────────────────
export async function handleAdminApi(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const action = url.searchParams.get("action") || "";
  const id = url.searchParams.get("id") || "";
  const method = request.method.toUpperCase();

  const jsonResponse = (data: unknown, status = 200) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { "Content-Type": "application/json" },
    });

  const errorResponse = (message: string, status = 400) =>
    jsonResponse({ error: message }, status);

  try {
    // 1. LOGIN (Public)
    if (action === "login" && method === "POST") {
      const body = (await request.json().catch(() => ({}))) as {
        email?: string;
        password?: string;
      };
      if (body.email === ADMIN_EMAIL && body.password === ADMIN_PASSWORD) {
        const token = generateAdminToken(ADMIN_EMAIL);
        return jsonResponse({ token, email: ADMIN_EMAIL, success: true });
      }
      return errorResponse("Invalid email or password", 401);
    }

    // 2. CONTACT SUBMISSION (Public POST)
    if (action === "contact" && method === "POST") {
      const body = (await request.json().catch(() => ({}))) as {
        name?: string;
        contact?: string;
        interest?: string;
        message?: string;
      };
      if (!body.name || !body.contact || !body.message) {
        return errorResponse("Missing required fields (name, contact, message)");
      }

      const newRecord = {
        id: "c-" + crypto.randomUUID().slice(0, 8),
        name: body.name.trim(),
        contact: body.contact.trim(),
        interest: body.interest ? body.interest.trim() : "General Enquiry",
        message: body.message.trim(),
        status: "new" as const,
        created_at: new Date().toISOString(),
      };

      // Always save to local store
      const store = readLocalStore();
      store.contacts.unshift(newRecord);
      writeLocalStore(store);

      // Also persist to Supabase if configured
      if (isSupabaseConfigured()) {
        try {
          await sbFetch("vedabhavan_contacts", "POST", newRecord);
        } catch (e) {
          console.warn("Supabase contact write failed, cached in local store:", e);
        }
      }

      return jsonResponse({ success: true, id: newRecord.id });
    }

    // 3. DONATE SANKALPAM SUBMISSION (Public POST)
    if (action === "donate" && method === "POST") {
      const body = (await request.json().catch(() => ({}))) as {
        donor_name?: string;
        donor_phone?: string;
        donor_pan?: string;
        amount?: number | string;
        purpose?: string;
        payment_method?: string;
        notes?: string;
      };

      if (!body.donor_name || !body.donor_phone) {
        return errorResponse("Missing required fields (donor_name, donor_phone)");
      }

      const newRecord = {
        id: "d-" + crypto.randomUUID().slice(0, 8),
        donor_name: body.donor_name.trim(),
        donor_phone: body.donor_phone.trim(),
        donor_pan: body.donor_pan ? body.donor_pan.trim().toUpperCase() : "",
        amount: Number(body.amount) || 0,
        purpose: body.purpose ? body.purpose.trim() : "General Donation",
        payment_method: body.payment_method ? body.payment_method.trim() : "Bank Transfer / UPI",
        status: "pending_verification" as const,
        notes: body.notes ? body.notes.trim() : "",
        created_at: new Date().toISOString(),
      };

      // Always save to local store
      const store = readLocalStore();
      store.donations.unshift(newRecord);
      writeLocalStore(store);

      // Also persist to Supabase if configured
      if (isSupabaseConfigured()) {
        try {
          await sbFetch("vedabhavan_donations", "POST", newRecord);
        } catch (e) {
          console.warn("Supabase donation write failed, cached in local store:", e);
        }
      }

      return jsonResponse({ success: true, id: newRecord.id });
    }

    // 4. PUBLIC ACTIVITIES (Public GET)
    if (action === "activities" && method === "GET") {
      if (isSupabaseConfigured()) {
        try {
          const res = await sbFetch("vedabhavan_activities", "GET", null, "order=sort_order.asc,created_at.desc");
          if (Array.isArray(res)) return jsonResponse(res);
        } catch (e) {
          console.warn("Supabase activities get failed, using local store:", e);
        }
      }
      const store = readLocalStore();
      return jsonResponse(store.activities);
    }

    // 5. PUBLIC GALLERY (Public GET)
    if (action === "gallery" && method === "GET") {
      if (isSupabaseConfigured()) {
        try {
          const res = await sbFetch("vedabhavan_gallery", "GET", null, "order=sort_order.asc,created_at.desc");
          if (Array.isArray(res)) return jsonResponse(res);
        } catch (e) {
          console.warn("Supabase gallery get failed, using local store:", e);
        }
      }
      const store = readLocalStore();
      return jsonResponse(store.gallery);
    }

    // 6. PUBLIC SETTINGS (Public GET)
    if (action === "settings" && method === "GET") {
      if (isSupabaseConfigured()) {
        try {
          const res = await sbFetch("vedabhavan_settings", "GET", null, "id=eq.general");
          if (Array.isArray(res) && res.length > 0) return jsonResponse(res[0]);
        } catch (e) {
          console.warn("Supabase settings get failed, using local store:", e);
        }
      }
      const store = readLocalStore();
      return jsonResponse(store.settings);
    }

    // ── AUTHENTICATED ENDPOINTS REQUIRE BEARER TOKEN ──────────────
    const authHeader = request.headers.get("authorization");
    if (!verifyAdminToken(authHeader)) {
      return errorResponse("Unauthorized. Valid admin session token required.", 401);
    }

    // 7. STATS OVERVIEW (Authenticated GET)
    if (action === "stats" && method === "GET") {
      const store = readLocalStore();
      const totalDonations = store.donations.reduce((sum, d) => sum + (Number(d.amount) || 0), 0);
      return jsonResponse({
        donationsCount: store.donations.length,
        donationsTotalAmount: totalDonations,
        pendingDonations: store.donations.filter((d) => d.status === "pending_verification").length,
        contactsCount: store.contacts.length,
        pendingContacts: store.contacts.filter((c) => c.status === "new").length,
        activitiesCount: store.activities.length,
        galleryCount: store.gallery.length,
      });
    }

    // 8. CONTACTS MANAGEMENT (Authenticated GET, PATCH, DELETE)
    if (action === "contacts") {
      if (method === "GET") {
        if (isSupabaseConfigured()) {
          try {
            const res = await sbFetch("vedabhavan_contacts", "GET", null, "order=created_at.desc");
            if (Array.isArray(res)) return jsonResponse(res);
          } catch (e) {
            console.warn("Supabase contacts fetch failed, using local store:", e);
          }
        }
        const store = readLocalStore();
        return jsonResponse(store.contacts);
      }
      if (method === "PATCH") {
        const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
        if (isSupabaseConfigured()) {
          try {
            await sbFetch("vedabhavan_contacts", "PATCH", body, `id=eq.${id}`);
          } catch (e) {
            console.warn("Supabase contact patch failed:", e);
          }
        }
        const store = readLocalStore();
        const target = store.contacts.find((c) => c.id === id);
        if (!target) return errorResponse("Contact entry not found", 404);
        Object.assign(target, body);
        writeLocalStore(store);
        return jsonResponse(target);
      }
      if (method === "DELETE") {
        if (isSupabaseConfigured()) {
          try {
            await sbFetch("vedabhavan_contacts", "DELETE", null, `id=eq.${id}`);
          } catch (e) {
            console.warn("Supabase contact delete failed:", e);
          }
        }
        const store = readLocalStore();
        store.contacts = store.contacts.filter((c) => c.id !== id);
        writeLocalStore(store);
        return jsonResponse({ success: true });
      }
    }

    // 9. DONATIONS MANAGEMENT (Authenticated GET, PATCH, DELETE)
    if (action === "donations") {
      if (method === "GET") {
        if (isSupabaseConfigured()) {
          try {
            const res = await sbFetch("vedabhavan_donations", "GET", null, "order=created_at.desc");
            if (Array.isArray(res)) return jsonResponse(res);
          } catch (e) {
            console.warn("Supabase donations fetch failed, using local store:", e);
          }
        }
        const store = readLocalStore();
        return jsonResponse(store.donations);
      }
      if (method === "PATCH") {
        const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
        if (isSupabaseConfigured()) {
          try {
            await sbFetch("vedabhavan_donations", "PATCH", body, `id=eq.${id}`);
          } catch (e) {
            console.warn("Supabase donation patch failed:", e);
          }
        }
        const store = readLocalStore();
        const target = store.donations.find((d) => d.id === id);
        if (!target) return errorResponse("Donation entry not found", 404);
        Object.assign(target, body);
        writeLocalStore(store);
        return jsonResponse(target);
      }
      if (method === "DELETE") {
        if (isSupabaseConfigured()) {
          try {
            await sbFetch("vedabhavan_donations", "DELETE", null, `id=eq.${id}`);
          } catch (e) {
            console.warn("Supabase donation delete failed:", e);
          }
        }
        const store = readLocalStore();
        store.donations = store.donations.filter((d) => d.id !== id);
        writeLocalStore(store);
        return jsonResponse({ success: true });
      }
    }

    // 10. ACTIVITIES CRUD (Authenticated POST, PATCH, DELETE)
    if (action === "activities") {
      const store = readLocalStore();
      if (method === "POST") {
        const body = (await request.json().catch(() => ({}))) as {
          title: string;
          category?: string;
          description?: string;
          event_date?: string;
          photos?: string[];
          videos?: string[];
          is_published?: boolean;
          sort_order?: number;
        };
        if (!body.title) return errorResponse("Title is required");
        const newAct = {
          id: "act-" + crypto.randomUUID().slice(0, 8),
          title: body.title.trim(),
          category: body.category?.trim() || "Event",
          description: body.description?.trim() || "",
          event_date: body.event_date?.trim() || "",
          photos: Array.isArray(body.photos) ? body.photos : [],
          videos: Array.isArray(body.videos) ? body.videos : [],
          is_published: body.is_published !== false,
          sort_order: body.sort_order || store.activities.length + 1,
          created_at: new Date().toISOString(),
        };
        store.activities.push(newAct);
        writeLocalStore(store);
        return jsonResponse(newAct, 201);
      }
      if (method === "PATCH") {
        const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
        const target = store.activities.find((a) => a.id === id);
        if (!target) return errorResponse("Activity not found", 404);
        Object.assign(target, body);
        writeLocalStore(store);
        return jsonResponse(target);
      }
      if (method === "DELETE") {
        store.activities = store.activities.filter((a) => a.id !== id);
        writeLocalStore(store);
        return jsonResponse({ success: true });
      }
    }

    // 11. GALLERY CRUD (Authenticated POST, DELETE)
    if (action === "gallery") {
      const store = readLocalStore();
      if (method === "POST") {
        const body = (await request.json().catch(() => ({}))) as {
          title?: string;
          image_url: string;
          category?: string;
          sort_order?: number;
          is_published?: boolean;
        };
        if (!body.image_url) return errorResponse("Image URL is required");
        const newItem = {
          id: "gal-" + crypto.randomUUID().slice(0, 8),
          title: body.title?.trim() || "",
          image_url: body.image_url.trim(),
          category: body.category?.trim() || "General",
          sort_order: body.sort_order || store.gallery.length + 1,
          is_published: body.is_published !== false,
          created_at: new Date().toISOString(),
        };
        store.gallery.push(newItem);
        writeLocalStore(store);
        return jsonResponse(newItem, 201);
      }
      if (method === "DELETE") {
        store.gallery = store.gallery.filter((g) => g.id !== id);
        writeLocalStore(store);
        return jsonResponse({ success: true });
      }
    }

    // 12. SETTINGS UPDATE (Authenticated POST/PATCH)
    if (action === "settings" && (method === "POST" || method === "PATCH")) {
      const body = (await request.json().catch(() => ({}))) as Partial<DbStore["settings"]>;
      const store = readLocalStore();
      store.settings = {
        ...store.settings,
        ...body,
        updated_at: new Date().toISOString(),
      };
      writeLocalStore(store);
      return jsonResponse(store.settings);
    }

    // 13. FILE UPLOAD (Authenticated POST)
    if (action === "upload" && method === "POST") {
      const body = (await request.json().catch(() => ({}))) as {
        filename?: string;
        data?: string; // base64
        type?: string;
      };
      if (!body.filename || !body.data) {
        return errorResponse("Missing filename or base64 data");
      }
      // Return data URI or saved URL
      const dataUri = body.data.startsWith("data:")
        ? body.data
        : `data:${body.type || "image/jpeg"};base64,${body.data}`;
      return jsonResponse({ url: dataUri, filename: body.filename, success: true });
    }

    return errorResponse(`Unhandled action '${action}' or method '${method}'`, 404);
  } catch (err: unknown) {
    console.error("Admin API Error:", err);
    return errorResponse(err instanceof Error ? err.message : "Internal server error", 500);
  }
}
