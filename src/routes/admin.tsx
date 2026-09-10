import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  LogOut,
  LayoutDashboard,
  HeartHandshake,
  Mail,
  Calendar,
  Image as ImageIcon,
  Settings,
  Plus,
  Trash2,
  Edit2,
  ExternalLink,
  Download,
  Search,
  CheckCircle,
  Clock,
  Video,
  X,
  Eye,
  Save,
  Users,
  RefreshCw,
  Copy,
  Database,
  Cloud,
  AlertTriangle,
  FileJson,
  Check,
  Upload,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { TRUST_DETAILS } from "@/lib/trust-details";
import { updateTrustSettingsCache } from "@/lib/use-trust-settings";
import { resolveMediaUrl, isTemporaryBlobUrl } from "@/lib/resolve-media";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Portal — Veda Ashrama Gurukulam & Sabha Trust" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPortalPage,
});

type Tab = "overview" | "donations" | "contacts" | "activities" | "gallery" | "settings";

interface Donation {
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
}

interface Contact {
  id: string;
  name: string;
  contact: string;
  interest: string;
  message: string;
  status: "new" | "in_progress" | "resolved";
  created_at: string;
}

interface Activity {
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
}

interface GalleryItem {
  id: string;
  title: string;
  image_url: string;
  category: string;
  sort_order: number;
  is_published: boolean;
  created_at: string;
}

interface SiteSettings {
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
}

const STORAGE_KEY = "vedashramam_admin_token";

function AdminPortalPage() {
  const [token, setToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Active tab
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  // Data states
  const [stats, setStats] = useState<any>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [settings, setSettings] = useState<SiteSettings>({
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
  });

  const [loadingData, setLoadingData] = useState(false);

  // Search & Filter
  const [donationSearch, setDonationSearch] = useState("");
  const [donationFilter, setDonationFilter] = useState("all");
  const [contactSearch, setContactSearch] = useState("");
  const [contactFilter, setContactFilter] = useState("all");

  // Modals
  const [activityModalOpen, setActivityModalOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [actTitle, setActTitle] = useState("");
  const [actCategory, setActCategory] = useState("Pooja & Utsavam");
  const [actDate, setActDate] = useState("");
  const [actDescription, setActDescription] = useState("");
  const [actPhotos, setActPhotos] = useState<string[]>([]);
  const [actVideos, setActVideos] = useState<string[]>([]);
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const [newVideoUrl, setNewVideoUrl] = useState("");

  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [newGalUrl, setNewGalUrl] = useState("");
  const [newGalTitle, setNewGalTitle] = useState("");
  const [newGalCategory, setNewGalCategory] = useState("Veda Patasala");

  // Backup & Cloud Deployment
  const [backupLoading, setBackupLoading] = useState(false);
  const [isSupabaseConfigured, setIsSupabaseConfigured] = useState<boolean | null>(null);
  const [copiedEnv, setCopiedEnv] = useState(false);

  // File uploads
  const [uploadingGal, setUploadingGal] = useState(false);
  const [uploadingActPhoto, setUploadingActPhoto] = useState(false);

  const processAndUploadFile = async (file: File): Promise<string | null> => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file (JPG, PNG, WebP)");
      return null;
    }
    if (file.size > 25 * 1024 * 1024) {
      toast.error("File is too large (max 25MB)");
      return null;
    }

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = async () => {
          try {
            const canvas = document.createElement("canvas");
            let { width, height } = img;
            const maxDim = 1600;
            if (width > maxDim || height > maxDim) {
              if (width > height) {
                height = Math.round((height * maxDim) / width);
                width = maxDim;
              } else {
                width = Math.round((width * maxDim) / height);
                height = maxDim;
              }
            }
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
              resolve(event.target?.result as string);
              return;
            }
            ctx.drawImage(img, 0, 0, width, height);
            const dataUrl = canvas.toDataURL("image/jpeg", 0.85);

            const res = await apiFetch("/api/admin?action=upload", {
              method: "POST",
              body: JSON.stringify({
                filename: file.name,
                type: "image/jpeg",
                data: dataUrl,
              }),
            });
            if (res.ok) {
              const data = await res.json();
              resolve(data.url || dataUrl);
            } else {
              resolve(dataUrl);
            }
          } catch {
            resolve(event.target?.result as string);
          }
        };
        img.onerror = () => {
          toast.error("Could not load image");
          resolve(null);
        };
        img.src = event.target?.result as string;
      };
      reader.onerror = () => {
        toast.error("Could not read image file");
        resolve(null);
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    const saved =
      sessionStorage.getItem(STORAGE_KEY) ||
      sessionStorage.getItem("vedabhavan_admin_token");
    if (saved) {
      setToken(saved);
    }
    setIsReady(true);
  }, []);

  const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
    const headers = new Headers(options.headers || {});
    headers.set("Content-Type", "application/json");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    const res = await fetch(endpoint, { ...options, headers });
    if (res.status === 401) {
      sessionStorage.removeItem(STORAGE_KEY);
      setToken(null);
      toast.error("Session expired. Please log in again.");
    }
    return res;
  };

  const fetchBackupData = async () => {
    setBackupLoading(true);
    try {
      const res = await apiFetch("/api/admin?action=backup");
      if (!res.ok) throw new Error("Failed to fetch backup data");
      const data = await res.json();
      setIsSupabaseConfigured(Boolean(data.isSupabaseConfigured));
      return data;
    } catch {
      toast.error("Could not fetch backup data");
      return null;
    } finally {
      setBackupLoading(false);
    }
  };

  const copyVercelEnvVar = async () => {
    const data = await fetchBackupData();
    if (!data?.jsonString) return;
    try {
      await navigator.clipboard.writeText(data.jsonString);
      setCopiedEnv(true);
      setTimeout(() => setCopiedEnv(false), 3000);
      toast.success("Copied ADMIN_STORE_JSON! Paste into Vercel Project Settings > Environment Variables.");
    } catch {
      toast.error("Clipboard permission denied. Please use the download option.");
    }
  };

  const downloadBackupJson = async () => {
    const data = await fetchBackupData();
    if (!data?.store) return;
    const blob = new Blob([JSON.stringify(data.store, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vedashramam-admin-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded complete admin store backup JSON!");
  };

  const fetchAllData = async (silent = false) => {
    if (!token) return;
    if (!silent) setLoadingData(true);
    try {
      const [resStats, resDonations, resContacts, resActs, resGal, resSettings, resBackup] = await Promise.all([
        apiFetch("/api/admin?action=stats").then((r) => (r.ok ? r.json() : null)).catch(() => null),
        apiFetch("/api/admin?action=donations").then((r) => (r.ok ? r.json() : [])).catch(() => []),
        apiFetch("/api/admin?action=contacts").then((r) => (r.ok ? r.json() : [])).catch(() => []),
        apiFetch("/api/admin?action=activities").then((r) => (r.ok ? r.json() : [])).catch(() => []),
        apiFetch("/api/admin?action=gallery").then((r) => (r.ok ? r.json() : [])).catch(() => []),
        apiFetch("/api/admin?action=settings").then((r) => (r.ok ? r.json() : null)).catch(() => null),
        apiFetch("/api/admin?action=backup").then((r) => (r.ok ? r.json() : null)).catch(() => null),
      ]);

      if (resStats && !resStats.error) setStats(resStats);
      if (Array.isArray(resDonations)) setDonations(resDonations);
      if (Array.isArray(resContacts)) setContacts(resContacts);
      if (Array.isArray(resActs)) setActivities(resActs);
      if (Array.isArray(resGal)) setGallery(resGal);
      if (resSettings && resSettings.trust_name) setSettings(resSettings);
      if (resBackup) setIsSupabaseConfigured(Boolean(resBackup.isSupabaseConfigured));
    } catch {
      if (!silent) toast.error("Failed to load some dashboard data");
    } finally {
      if (!silent) setLoadingData(false);
    }
  };

  useEffect(() => {
    if (!token) return;

    fetchAllData();

    // Auto-refresh when switching back to this tab
    const onFocus = () => {
      fetchAllData(true);
    };
    window.addEventListener("focus", onFocus);

    // Periodic poll every 15s so new submissions appear in real-time
    const interval = setInterval(() => {
      fetchAllData(true);
    }, 15000);

    return () => {
      window.removeEventListener("focus", onFocus);
      clearInterval(interval);
    };
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const res = await fetch("/api/admin?action=login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        sessionStorage.setItem(STORAGE_KEY, data.token);
        setToken(data.token);
        toast.success("Welcome, Administrator!");
      } else {
        toast.error(data.error || "Invalid email or password");
      }
    } catch {
      toast.error("Network error during login");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setToken(null);
    toast.info("Logged out successfully");
  };

  // Status updates
  const updateDonationStatus = async (id: string, newStatus: Donation["status"]) => {
    try {
      const res = await apiFetch(`/api/admin?action=donations&id=${encodeURIComponent(id)}`, {
        method: "PATCH",
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setDonations((prev) => prev.map((d) => (d.id === id ? { ...d, status: newStatus } : d)));
        toast.success("Donation status updated");
      }
    } catch {
      toast.error("Failed to update donation status");
    }
  };

  const updateContactStatus = async (id: string, newStatus: Contact["status"]) => {
    try {
      const res = await apiFetch(`/api/admin?action=contacts&id=${encodeURIComponent(id)}`, {
        method: "PATCH",
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c)));
        toast.success("Contact status updated");
      }
    } catch {
      toast.error("Failed to update contact status");
    }
  };

  const deleteDonation = async (id: string) => {
    if (!confirm("Are you sure you want to delete this donation entry?")) return;
    try {
      const res = await apiFetch(`/api/admin?action=donations&id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setDonations((prev) => prev.filter((d) => d.id !== id));
        toast.success("Donation record removed");
      }
    } catch {
      toast.error("Failed to delete record");
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    try {
      const res = await apiFetch(`/api/admin?action=contacts&id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setContacts((prev) => prev.filter((c) => c.id !== id));
        toast.success("Contact enquiry deleted");
      }
    } catch {
      toast.error("Failed to delete enquiry");
    }
  };

  // Activities CRUD
  const openNewActivityModal = () => {
    setEditingActivity(null);
    setActTitle("");
    setActCategory("Festival & Seva");
    setActDate("");
    setActDescription("");
    setActPhotos([]);
    setActVideos([]);
    setActivityModalOpen(true);
  };

  const openEditActivityModal = (act: Activity) => {
    setEditingActivity(act);
    setActTitle(act.title);
    setActCategory(act.category || "Event");
    setActDate(act.event_date || "");
    setActDescription(act.description || "");
    setActPhotos(act.photos || []);
    setActVideos(act.videos || []);
    setActivityModalOpen(true);
  };

  const saveActivity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actTitle.trim()) {
      toast.error("Title is required");
      return;
    }

    const payload = {
      title: actTitle.trim(),
      category: actCategory.trim(),
      event_date: actDate.trim(),
      description: actDescription.trim(),
      photos: actPhotos,
      videos: actVideos,
      is_published: true,
    };

    try {
      if (editingActivity) {
        const res = await apiFetch(
          `/api/admin?action=activities&id=${encodeURIComponent(editingActivity.id)}`,
          {
            method: "PATCH",
            body: JSON.stringify(payload),
          }
        );
        if (res.ok) {
          const updated = await res.json();
          setActivities((prev) => prev.map((a) => (a.id === editingActivity.id ? updated : a)));
          toast.success("Activity updated successfully");
          setActivityModalOpen(false);
        }
      } else {
        const res = await apiFetch("/api/admin?action=activities", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          const created = await res.json();
          setActivities((prev) => [...prev, created]);
          toast.success("New activity created");
          setActivityModalOpen(false);
        }
      }
    } catch {
      toast.error("Failed to save activity");
    }
  };

  const deleteActivity = async (id: string) => {
    if (!confirm("Are you sure you want to delete this activity?")) return;
    try {
      const res = await apiFetch(`/api/admin?action=activities&id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setActivities((prev) => prev.filter((a) => a.id !== id));
        toast.success("Activity deleted");
      }
    } catch {
      toast.error("Failed to delete activity");
    }
  };

  // Gallery CRUD
  const saveGalleryPhoto = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGalUrl.trim()) {
      toast.error("Photo URL is required");
      return;
    }
    if (newGalUrl.trim().startsWith("blob:")) {
      toast.error("WhatsApp blob URLs cannot be saved. Please save the picture to your device and click 'Upload Image from Device'.");
      return;
    }
    try {
      const res = await apiFetch("/api/admin?action=gallery", {
        method: "POST",
        body: JSON.stringify({
          image_url: newGalUrl.trim(),
          title: newGalTitle.trim(),
          category: newGalCategory.trim(),
          is_published: true,
        }),
      });
      if (res.ok) {
        const item = await res.json();
        setGallery((prev) => [...prev, item]);
        toast.success("Gallery photo added");
        setGalleryModalOpen(false);
        setNewGalUrl("");
        setNewGalTitle("");
      }
    } catch {
      toast.error("Failed to add gallery photo");
    }
  };

  const deleteGalleryPhoto = async (id: string) => {
    if (!confirm("Delete this photo from gallery?")) return;
    try {
      const res = await apiFetch(`/api/admin?action=gallery&id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setGallery((prev) => prev.filter((g) => g.id !== id));
        toast.success("Photo removed");
      }
    } catch {
      toast.error("Failed to delete photo");
    }
  };

  // Settings Save
  const saveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await apiFetch("/api/admin?action=settings", {
        method: "POST",
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        const saved = await res.json();
        updateTrustSettingsCache(saved);
        toast.success("Trust and Contact details saved successfully");
      }
    } catch {
      toast.error("Failed to save settings");
    }
  };

  // Export to CSV
  const exportDonationsCSV = () => {
    const headers = ["Date", "Name", "Phone", "PAN", "Amount", "Purpose", "Status", "Notes"];
    const rows = donations.map((d) => [
      new Date(d.created_at).toLocaleDateString("en-IN"),
      `"${d.donor_name}"`,
      `"${d.donor_phone}"`,
      `"${d.donor_pan}"`,
      d.amount,
      `"${d.purpose}"`,
      `"${d.status}"`,
      `"${d.notes.replace(/"/g, '""')}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `vedashramam_donations_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const exportContactsCSV = () => {
    const headers = ["Date", "Name", "Contact", "Interest", "Message", "Status"];
    const rows = contacts.map((c) => [
      new Date(c.created_at).toLocaleDateString("en-IN"),
      `"${c.name}"`,
      `"${c.contact}"`,
      `"${c.interest}"`,
      `"${c.message.replace(/"/g, '""')}"`,
      `"${c.status}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `vedashramam_contacts_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-maroon border-t-transparent" />
      </div>
    );
  }

  // ── RENDER LOGIN SCREEN IF NOT AUTHENTICATED ──────────────
  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100 p-4">
        <div className="w-full max-w-md rounded-3xl border border-stone-300 bg-white p-8 shadow-xl">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-900">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h1 className="mt-4 font-display text-2xl font-bold text-stone-900">Veda Ashramam Admin Portal</h1>
            <p className="mt-1 text-xs uppercase tracking-widest text-amber-800">
              Sri Sai Sankara Bhaktha Sabha Trust
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">Admin Email</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="your@gmail.com"
                required
                className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm text-stone-900 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm text-stone-900 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-amber-900 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-md transition hover:bg-amber-950 disabled:opacity-50"
            >
              {loginLoading ? "Verifying..." : "Sign In to Admin Panel"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="text-xs font-medium text-stone-500 hover:text-stone-900">
              ← Return to public website
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Filtered lists
  const filteredDonations = donations.filter((d) => {
    const matchesFilter = donationFilter === "all" || d.status === donationFilter;
    const matchesSearch =
      d.donor_name.toLowerCase().includes(donationSearch.toLowerCase()) ||
      d.donor_phone.includes(donationSearch) ||
      d.donor_pan.toLowerCase().includes(donationSearch.toLowerCase()) ||
      d.purpose.toLowerCase().includes(donationSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filteredContacts = contacts.filter((c) => {
    const matchesFilter = contactFilter === "all" || c.status === contactFilter;
    const matchesSearch =
      c.name.toLowerCase().includes(contactSearch.toLowerCase()) ||
      c.contact.toLowerCase().includes(contactSearch.toLowerCase()) ||
      c.interest.toLowerCase().includes(contactSearch.toLowerCase()) ||
      c.message.toLowerCase().includes(contactSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // ── RENDER AUTHENTICATED ADMIN DASHBOARD ──────────────────
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      {/* Top Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-stone-200 bg-white px-6 py-3.5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-900">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-display text-lg font-bold leading-none text-stone-900">Veda Ashramam Admin Portal</h1>
            <p className="mt-0.5 text-xs text-stone-500">Sri Sai Sankara Bhaktha Sabha Trust Management</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => fetchAllData()}
            disabled={loadingData}
            title="Refresh dashboard data"
            className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-50 disabled:opacity-50 transition"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loadingData ? "animate-spin text-amber-800" : ""}`} />
            <span>Refresh</span>
          </button>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-50"
          >
            <Eye className="h-3.5 w-3.5" /> View Public Site <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 rounded-lg bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-800 transition hover:bg-red-100 hover:text-red-700"
          >
            <LogOut className="h-3.5 w-3.5" /> Logout
          </button>
        </div>
      </header>

      {/* Main Workspace with Sidebar Tabs */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-65px)]">
        {/* Navigation Sidebar */}
        <nav className="w-full md:w-64 shrink-0 border-r border-stone-200 bg-white p-4 space-y-1">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              activeTab === "overview" ? "bg-amber-900 text-white shadow" : "text-stone-700 hover:bg-stone-100"
            }`}
          >
            <LayoutDashboard className="h-4 w-4" /> Overview &amp; Stats
          </button>

          <button
            onClick={() => setActiveTab("donations")}
            className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              activeTab === "donations" ? "bg-amber-900 text-white shadow" : "text-stone-700 hover:bg-stone-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-4 w-4" /> Donations
            </div>
            {donations.filter((d) => d.status === "pending_verification").length > 0 && (
              <span className="rounded-full bg-amber-500 px-2 py-0.5 text-xs font-bold text-white">
                {donations.filter((d) => d.status === "pending_verification").length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("contacts")}
            className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              activeTab === "contacts" ? "bg-amber-900 text-white shadow" : "text-stone-700 hover:bg-stone-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4" /> Enquiries
            </div>
            {contacts.filter((c) => c.status === "new").length > 0 && (
              <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-bold text-white">
                {contacts.filter((c) => c.status === "new").length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("activities")}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              activeTab === "activities" ? "bg-amber-900 text-white shadow" : "text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Calendar className="h-4 w-4" /> Activities &amp; Events
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              activeTab === "gallery" ? "bg-amber-900 text-white shadow" : "text-stone-700 hover:bg-stone-100"
            }`}
          >
            <ImageIcon className="h-4 w-4" /> Gallery Media
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              activeTab === "settings" ? "bg-amber-900 text-white shadow" : "text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Settings className="h-4 w-4" /> Trust &amp; Contact Info
          </button>
        </nav>

        {/* Tab Content Area */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-stone-900">Dashboard Overview</h2>
                <p className="text-sm text-stone-500">Live summary of Gurukulam submissions, donations and content</p>
              </div>

              {/* KPI Cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase text-stone-500">Total Donations</span>
                    <HeartHandshake className="h-5 w-5 text-amber-800" />
                  </div>
                  <p className="mt-3 text-2xl font-bold text-stone-900">
                    ₹{donations.reduce((sum, d) => sum + (Number(d.amount) || 0), 0).toLocaleString("en-IN")}
                  </p>
                  <p className="mt-1 text-xs text-stone-500">{donations.length} registered donors</p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase text-stone-500">Pending Verification</span>
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <p className="mt-3 text-2xl font-bold text-amber-700">
                    {donations.filter((d) => d.status === "pending_verification").length}
                  </p>
                  <p className="mt-1 text-xs text-stone-500">Donations awaiting check</p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase text-stone-500">Contact Enquiries</span>
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="mt-3 text-2xl font-bold text-stone-900">{contacts.length}</p>
                  <p className="mt-1 text-xs text-blue-700 font-medium">
                    {contacts.filter((c) => c.status === "new").length} unread / new
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase text-stone-500">Active Events</span>
                    <Calendar className="h-5 w-5 text-emerald-700" />
                  </div>
                  <p className="mt-3 text-2xl font-bold text-stone-900">{activities.length}</p>
                  <p className="mt-1 text-xs text-stone-500">{gallery.length} photos in gallery</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-stone-900">Quick Actions</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setActiveTab("activities");
                      openNewActivityModal();
                    }}
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-amber-950"
                  >
                    <Plus className="h-4 w-4" /> Add New Event / Activity
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("gallery");
                      setGalleryModalOpen(true);
                    }}
                    className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-stone-50 px-4 py-2.5 text-xs font-semibold text-stone-800 hover:bg-stone-100"
                  >
                    <ImageIcon className="h-4 w-4" /> Add Photo to Gallery
                  </button>
                  <button
                    onClick={exportDonationsCSV}
                    className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-stone-50 px-4 py-2.5 text-xs font-semibold text-stone-800 hover:bg-stone-100"
                  >
                    <Download className="h-4 w-4" /> Export Donations CSV
                  </button>
                </div>
              </div>

              {/* Recent Enquiries & Donations Preview */}
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-stone-900">Recent Contact Enquiries</h3>
                    <button onClick={() => setActiveTab("contacts")} className="text-xs text-amber-800 hover:underline">
                      View all ({contacts.length})
                    </button>
                  </div>
                  {contacts.length === 0 ? (
                    <p className="text-xs text-stone-400 py-4 text-center">No enquiries received yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {contacts.slice(0, 4).map((c) => (
                        <div key={c.id} className="rounded-xl border border-stone-200 p-3 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-stone-900">{c.name}</span>
                            <span
                              className={`rounded px-2 py-0.5 font-medium uppercase text-[10px] ${
                                c.status === "new" ? "bg-blue-100 text-blue-800" : "bg-stone-100 text-stone-600"
                              }`}
                            >
                              {c.status}
                            </span>
                          </div>
                          <p className="mt-1 text-stone-600 truncate">{c.message}</p>
                          <p className="mt-1 text-[11px] text-stone-400">{new Date(c.created_at).toLocaleString("en-IN")}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-stone-900">Recent Donation Intents</h3>
                    <button onClick={() => setActiveTab("donations")} className="text-xs text-amber-800 hover:underline">
                      View all ({donations.length})
                    </button>
                  </div>
                  {donations.length === 0 ? (
                    <p className="text-xs text-stone-400 py-4 text-center">No donations registered yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {donations.slice(0, 4).map((d) => (
                        <div key={d.id} className="rounded-xl border border-stone-200 p-3 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-stone-900">{d.donor_name}</span>
                            <span className="font-bold text-amber-900">₹{d.amount}</span>
                          </div>
                          <p className="mt-1 text-stone-600">{d.purpose}</p>
                          <div className="mt-1 flex items-center justify-between text-[11px] text-stone-400">
                            <span>Phone: {d.donor_phone}</span>
                            <span className="capitalize text-stone-500">{d.status.replace("_", " ")}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DONATIONS */}
          {activeTab === "donations" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">Donation Submissions</h2>
                  <p className="text-sm text-stone-500">
                    Track donor pledges, Sankalpam details, PAN numbers, and 80G receipts
                  </p>
                </div>
                <button
                  onClick={exportDonationsCSV}
                  className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-semibold text-white shadow hover:bg-black"
                >
                  <Download className="h-4 w-4" /> Download Excel / CSV
                </button>
              </div>

              {/* Filters & Search */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-3 h-4 w-4 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search by donor name, phone, PAN or purpose..."
                    value={donationSearch}
                    onChange={(e) => setDonationSearch(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white pl-10 pr-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>
                <select
                  value={donationFilter}
                  onChange={(e) => setDonationFilter(e.target.value)}
                  className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs sm:text-sm text-stone-700 focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending_verification">Pending Verification</option>
                  <option value="verified">Verified</option>
                  <option value="receipt_sent">Receipt Sent</option>
                </select>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="border-b border-stone-200 bg-stone-50 text-[11px] font-bold uppercase tracking-wider text-stone-500">
                    <tr>
                      <th className="p-4">Date</th>
                      <th className="p-4">Donor Name</th>
                      <th className="p-4">Phone / Contact</th>
                      <th className="p-4">PAN (80G)</th>
                      <th className="p-4">Purpose</th>
                      <th className="p-4">Amount</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {filteredDonations.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="p-8 text-center text-stone-400">
                          No donation entries match the current filter.
                        </td>
                      </tr>
                    ) : (
                      filteredDonations.map((d) => (
                        <tr key={d.id} className="hover:bg-stone-50/60">
                          <td className="p-4 text-stone-500 whitespace-nowrap">
                            {new Date(d.created_at).toLocaleDateString("en-IN")}
                          </td>
                          <td className="p-4 font-semibold text-stone-900">{d.donor_name}</td>
                          <td className="p-4 text-stone-700">
                            <a href={`tel:${d.donor_phone}`} className="hover:underline">
                              {d.donor_phone}
                            </a>
                          </td>
                          <td className="p-4 font-mono font-medium text-stone-700">
                            {d.donor_pan || "—"}
                          </td>
                          <td className="p-4 text-stone-800">{d.purpose}</td>
                          <td className="p-4 font-bold text-amber-900 whitespace-nowrap">
                            ₹{Number(d.amount).toLocaleString("en-IN")}
                          </td>
                          <td className="p-4">
                            <select
                              value={d.status}
                              onChange={(e) => updateDonationStatus(d.id, e.target.value as Donation["status"])}
                              className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                                d.status === "verified"
                                  ? "bg-green-100 text-green-800"
                                  : d.status === "receipt_sent"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              <option value="pending_verification">Pending Check</option>
                              <option value="verified">Verified</option>
                              <option value="receipt_sent">80G Sent</option>
                            </select>
                          </td>
                          <td className="p-4 text-right">
                            <button
                              onClick={() => deleteDonation(d.id)}
                              className="rounded-lg p-1.5 text-stone-400 hover:bg-red-50 hover:text-red-600"
                              title="Delete record"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: CONTACT ENQUIRIES */}
          {activeTab === "contacts" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">Contact Enquiries</h2>
                  <p className="text-sm text-stone-500">Messages and enquiry submissions from the public website</p>
                </div>
                <button
                  onClick={exportContactsCSV}
                  className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-semibold text-white shadow hover:bg-black"
                >
                  <Download className="h-4 w-4" /> Export Contacts CSV
                </button>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-3 h-4 w-4 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search by name, contact or message..."
                    value={contactSearch}
                    onChange={(e) => setContactSearch(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white pl-10 pr-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none"
                  />
                </div>
                <select
                  value={contactFilter}
                  onChange={(e) => setContactFilter(e.target.value)}
                  className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs sm:text-sm text-stone-700 focus:outline-none"
                >
                  <option value="all">All Enquiries</option>
                  <option value="new">New / Unread</option>
                  <option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>

              {/* Cards Grid / Table */}
              <div className="space-y-3">
                {filteredContacts.length === 0 ? (
                  <div className="rounded-2xl border border-stone-200 bg-white p-12 text-center text-stone-400">
                    No contact enquiries found.
                  </div>
                ) : (
                  filteredContacts.map((c) => (
                    <div
                      key={c.id}
                      className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-stone-100 pb-3">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-stone-900 text-base">{c.name}</span>
                          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
                            {c.interest}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <select
                            value={c.status}
                            onChange={(e) => updateContactStatus(c.id, e.target.value as Contact["status"])}
                            className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                              c.status === "new"
                                ? "bg-blue-100 text-blue-800"
                                : c.status === "in_progress"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            <option value="new">New</option>
                            <option value="in_progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                          </select>
                          <button
                            onClick={() => deleteContact(c.id)}
                            className="rounded-lg p-1.5 text-stone-400 hover:bg-red-50 hover:text-red-600"
                            title="Delete enquiry"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-stone-800 whitespace-pre-wrap leading-relaxed">{c.message}</p>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 pt-2 border-t border-stone-50">
                        <div className="flex items-center gap-4">
                          <span>
                            Contact:{" "}
                            <strong className="text-stone-900">{c.contact}</strong>
                          </span>
                          <a
                            href={c.contact.includes("@") ? `mailto:${c.contact}` : `tel:${c.contact}`}
                            className="text-amber-800 hover:underline font-semibold"
                          >
                            Reply Directly
                          </a>
                        </div>
                        <span>Submitted: {new Date(c.created_at).toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 4: ACTIVITIES & EVENTS */}
          {activeTab === "activities" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">Activities &amp; Events</h2>
                  <p className="text-sm text-stone-500">
                    Add, edit, or remove events displayed on the public Activities page
                  </p>
                </div>
                <button
                  onClick={openNewActivityModal}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-900 px-4 py-2.5 text-xs font-semibold text-white shadow hover:bg-amber-950"
                >
                  <Plus className="h-4 w-4" /> Add New Event
                </button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {activities.map((act) => {
                  const coverUrl = act.photos?.[0] ? resolveMediaUrl(act.photos[0]) : null;
                  return (
                    <div
                      key={act.id}
                      className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm transition hover:shadow-md"
                    >
                      {coverUrl && (
                        <div className="h-36 w-full overflow-hidden bg-stone-100 border-b border-stone-100">
                          <img
                            src={coverUrl}
                            alt={act.title}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = "none";
                            }}
                          />
                        </div>
                      )}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
                              {act.category}
                            </span>
                            <span className="text-xs text-stone-400 font-medium">{act.event_date}</span>
                          </div>
                          <h3 className="mt-3 font-display text-lg font-bold text-stone-900">{act.title}</h3>
                          <p className="mt-2 text-xs text-stone-600 line-clamp-3 leading-relaxed">{act.description}</p>

                          <div className="mt-4 flex items-center gap-3 text-xs text-stone-500">
                            <span className="inline-flex items-center gap-1">
                              <ImageIcon className="h-3.5 w-3.5 text-amber-800" /> {act.photos?.length || 0} Photos
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Video className="h-3.5 w-3.5 text-amber-800" /> {act.videos?.length || 0} Videos
                            </span>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-2 border-t border-stone-100 pt-3">
                          <button
                            onClick={() => openEditActivityModal(act)}
                            className="inline-flex items-center gap-1 rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                          >
                            <Edit2 className="h-3.5 w-3.5" /> Edit
                          </button>
                          <button
                            onClick={() => deleteActivity(act.id)}
                            className="inline-flex items-center gap-1 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-3.5 w-3.5" /> Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: GALLERY */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">Gallery Media</h2>
                  <p className="text-sm text-stone-500">Manage photographs shown in the public Gallery section</p>
                </div>
                <button
                  onClick={() => setGalleryModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-900 px-4 py-2.5 text-xs font-semibold text-white shadow hover:bg-amber-950"
                >
                  <Plus className="h-4 w-4" /> Add Photo
                </button>
              </div>

              {gallery.length === 0 ? (
                <div className="rounded-2xl border border-stone-200 bg-white p-12 text-center text-stone-500">
                  <ImageIcon className="mx-auto h-12 w-12 text-stone-300" />
                  <p className="mt-3 font-medium">The public gallery currently displays 23 authentic Patasala photos from local assets.</p>
                  <p className="mt-1 text-xs text-stone-400">
                    Click "Add Photo" above to upload or link additional photos to the live gallery.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                  {gallery.map((g) => {
                    const isBlob = isTemporaryBlobUrl(g.image_url);
                    const resolved = resolveMediaUrl(g.image_url);
                    return (
                      <div key={g.id} className="group relative aspect-square overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
                        {isBlob ? (
                          <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center bg-amber-50">
                            <AlertTriangle className="h-6 w-6 text-amber-600 mb-1" />
                            <span className="text-xs font-semibold text-amber-800">Temporary Link Expired</span>
                            <span className="text-[10px] text-stone-500 mt-1">WhatsApp blob URL</span>
                          </div>
                        ) : (
                          <img
                            src={resolved || g.image_url}
                            alt={g.title}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/favicon.png";
                            }}
                          />
                        )}
                        <div className="absolute inset-0 bg-black/50 opacity-0 transition group-hover:opacity-100 flex flex-col justify-between p-3 text-white">
                          <span className="text-xs font-semibold">{g.category}</span>
                          <div className="flex items-center justify-between">
                            <span className="text-xs truncate max-w-[120px]">{g.title || "Untitled"}</span>
                            <button
                              onClick={() => deleteGalleryPhoto(g.id)}
                              className="rounded-lg bg-red-600 p-1.5 text-white hover:bg-red-700"
                              title="Delete photo"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 6: SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <h2 className="text-2xl font-bold text-stone-900">Trust &amp; Contact Information</h2>
                <p className="text-sm text-stone-500">
                  Update verified trust identity, phone, address, and banking transfer details
                </p>
              </div>

              <form onSubmit={saveSettings} className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                    Official Trust Name
                  </label>
                  <input
                    type="text"
                    value={settings.trust_name}
                    onChange={(e) => setSettings({ ...settings, trust_name: e.target.value })}
                    required
                    className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm text-stone-900 focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">Official Phone</label>
                    <input
                      type="text"
                      value={settings.phone}
                      onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                      required
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm text-stone-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">Official Email</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                      required
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm text-stone-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">Registered Office Address</label>
                  <textarea
                    rows={2}
                    value={settings.address}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                    required
                    className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2 text-sm text-stone-900 focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">UPI Handle</label>
                    <input
                      type="text"
                      value={settings.upi_id}
                      onChange={(e) => setSettings({ ...settings, upi_id: e.target.value })}
                      required
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm text-stone-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">PAN Number</label>
                    <input
                      type="text"
                      value={settings.pan}
                      onChange={(e) => setSettings({ ...settings, pan: e.target.value.toUpperCase() })}
                      required
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm uppercase text-stone-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">80G Regn Number</label>
                    <input
                      type="text"
                      value={settings.reg_80g}
                      onChange={(e) => setSettings({ ...settings, reg_80g: e.target.value.toUpperCase() })}
                      required
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm uppercase text-stone-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">Bank Name</label>
                    <input
                      type="text"
                      value={settings.bank_name}
                      onChange={(e) => setSettings({ ...settings, bank_name: e.target.value })}
                      required
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm text-stone-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">Branch Name &amp; Code</label>
                    <input
                      type="text"
                      value={settings.bank_branch}
                      onChange={(e) => setSettings({ ...settings, bank_branch: e.target.value })}
                      required
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm text-stone-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">Account Number</label>
                    <input
                      type="text"
                      value={settings.bank_account}
                      onChange={(e) => setSettings({ ...settings, bank_account: e.target.value })}
                      required
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm font-mono text-stone-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600">IFSC Code</label>
                    <input
                      type="text"
                      value={settings.bank_ifsc}
                      onChange={(e) => setSettings({ ...settings, bank_ifsc: e.target.value.toUpperCase() })}
                      required
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm font-mono uppercase text-stone-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow hover:bg-amber-950"
                  >
                    <Save className="h-4 w-4" /> Save Settings
                  </button>
                </div>
              </form>

              {/* CLOUD DEPLOYMENT & PRIVACY BACKUP CENTER */}
              <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-amber-800" />
                    <h3 className="font-bold text-stone-900 text-lg">Cloud Deployment &amp; Privacy Backup</h3>
                  </div>
                  <p className="mt-1 text-xs text-stone-500">
                    Manage environment variable backups, Git security protection, and Supabase cloud persistence.
                  </p>
                </div>

                {/* Status Banners */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className={`rounded-xl border p-4 ${isSupabaseConfigured ? "border-emerald-200 bg-emerald-50/60" : "border-amber-200 bg-amber-50/60"}`}>
                    <div className="flex items-center gap-2">
                      <Database className={`h-4 w-4 ${isSupabaseConfigured ? "text-emerald-700" : "text-amber-700"}`} />
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                        Supabase Database Status
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-medium text-stone-700">
                      {isSupabaseConfigured ? (
                        <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                          <CheckCircle className="h-3.5 w-3.5 inline" /> Connected &amp; Persistent
                        </span>
                      ) : (
                        <span className="text-amber-800 flex items-center gap-1 font-semibold">
                          <AlertTriangle className="h-3.5 w-3.5 inline" /> Not Connected (Local / Env Fallback Mode)
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[11px] text-stone-500 leading-relaxed">
                      {isSupabaseConfigured
                        ? "Incoming donations & enquiries are securely written to your Supabase PostgreSQL cloud database, persisting across all Vercel restarts."
                        : "For production on Vercel, connect Supabase so donor submissions are never lost when serverless lambdas spin down. Run supabase-setup.sql."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-stone-700" />
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                        GitHub Privacy Protection
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5 inline" /> Protected by .gitignore
                    </div>
                    <p className="mt-1 text-[11px] text-stone-500 leading-relaxed">
                      Your local <code className="font-mono text-[10px] bg-stone-200 px-1 py-0.5 rounded">data/admin-store.json</code> containing donor PAN numbers, phones, and messages is untracked and will NEVER be pushed to GitHub.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={copyVercelEnvVar}
                    disabled={backupLoading}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-stone-50 px-4 py-2.5 text-xs font-semibold text-stone-800 hover:bg-stone-100 transition disabled:opacity-50"
                  >
                    {copiedEnv ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied ADMIN_STORE_JSON!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-stone-600" />
                        <span>Copy Vercel Env Var (ADMIN_STORE_JSON)</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={downloadBackupJson}
                    disabled={backupLoading}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5 text-xs font-semibold text-amber-900 hover:bg-amber-100 transition disabled:opacity-50"
                  >
                    <Download className="h-4 w-4 text-amber-800" />
                    Download Backup JSON File
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MODAL: ADD / EDIT ACTIVITY */}
      {activityModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <h3 className="font-display text-xl font-bold text-stone-900">
                {editingActivity ? "Edit Activity / Event" : "Create New Activity / Event"}
              </h3>
              <button
                onClick={() => setActivityModalOpen(false)}
                className="rounded-full p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={saveActivity} className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase text-stone-600">Event Title</label>
                <input
                  type="text"
                  required
                  value={actTitle}
                  onChange={(e) => setActTitle(e.target.value)}
                  placeholder="e.g. Navaratri Mahotsavam & Chandi Homam"
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2 text-sm text-stone-900 focus:outline-none"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase text-stone-600">Category</label>
                  <input
                    type="text"
                    value={actCategory}
                    onChange={(e) => setActCategory(e.target.value)}
                    placeholder="e.g. Festival & Seva"
                    className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2 text-sm text-stone-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase text-stone-600">Date / Season</label>
                  <input
                    type="text"
                    value={actDate}
                    onChange={(e) => setActDate(e.target.value)}
                    placeholder="e.g. October 2026 / Annual Seva"
                    className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2 text-sm text-stone-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-stone-600">Description</label>
                <textarea
                  rows={3}
                  value={actDescription}
                  onChange={(e) => setActDescription(e.target.value)}
                  placeholder="Describe the Vedic observance, participants, and spiritual significance..."
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2 text-sm text-stone-900 focus:outline-none"
                />
              </div>

              {/* Photos manager */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="text-xs font-bold uppercase text-stone-700">Photos (Event Images)</span>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <label className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-100 cursor-pointer shrink-0 transition">
                    {uploadingActPhoto ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin text-amber-800" />
                        <span>Uploading...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="h-3.5 w-3.5 text-amber-800" />
                        <span>Upload from Device</span>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      disabled={uploadingActPhoto}
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        setUploadingActPhoto(true);
                        try {
                          const url = await processAndUploadFile(file);
                          if (url) {
                            setActPhotos([...actPhotos, url]);
                            toast.success("Photo uploaded and added to event!");
                          }
                        } finally {
                          setUploadingActPhoto(false);
                          e.target.value = "";
                        }
                      }}
                      className="hidden"
                    />
                  </label>

                  <div className="flex flex-1 gap-2">
                    <input
                      type="text"
                      value={newPhotoUrl}
                      onChange={(e) => setNewPhotoUrl(e.target.value)}
                      placeholder="Or paste public image URL"
                      className="flex-1 rounded-xl border border-stone-300 bg-white px-3 py-1.5 text-xs text-stone-900 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (!newPhotoUrl.trim()) return;
                        if (newPhotoUrl.trim().startsWith("blob:")) {
                          toast.error("WhatsApp blob URLs cannot be used. Please save the image to your device and click 'Upload from Device'.");
                          return;
                        }
                        setActPhotos([...actPhotos, newPhotoUrl.trim()]);
                        setNewPhotoUrl("");
                      }}
                      className="rounded-xl bg-amber-900 px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      Add
                    </button>
                  </div>
                </div>
                {actPhotos.length > 0 && (
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {actPhotos.map((p, idx) => {
                      const thumb = resolveMediaUrl(p);
                      return (
                        <div key={idx} className="relative group rounded-xl border border-stone-200 overflow-hidden bg-white">
                          <div className="h-20 w-full overflow-hidden bg-stone-100 flex items-center justify-center">
                            {thumb ? (
                              <img
                                src={thumb}
                                alt={`Photo ${idx + 1}`}
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = "none";
                                }}
                              />
                            ) : (
                              <ImageIcon className="h-6 w-6 text-stone-300" />
                            )}
                          </div>
                          <div className="p-1.5 flex items-center justify-between bg-stone-50 text-[10px] border-t border-stone-100">
                            <span className="truncate max-w-[80px] text-stone-600 font-medium">
                              {p.split("/").pop()}
                            </span>
                            <button
                              type="button"
                              onClick={() => setActPhotos(actPhotos.filter((_, i) => i !== idx))}
                              className="text-red-500 hover:text-red-700 p-0.5 rounded"
                              title="Remove photo"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Videos manager */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="text-xs font-bold uppercase text-stone-700">Videos (Video MP4 URLs)</span>
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={newVideoUrl}
                    onChange={(e) => setNewVideoUrl(e.target.value)}
                    placeholder="Paste video URL (https://...mp4 or /assets/...)"
                    className="flex-1 rounded-xl border border-stone-300 bg-white px-3 py-1.5 text-xs text-stone-900 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (newVideoUrl.trim()) {
                        setActVideos([...actVideos, newVideoUrl.trim()]);
                        setNewVideoUrl("");
                      }
                    }}
                    className="rounded-xl bg-amber-900 px-3 py-1.5 text-xs font-semibold text-white"
                  >
                    Add
                  </button>
                </div>
                {actVideos.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {actVideos.map((v, idx) => (
                      <div key={idx} className="flex items-center gap-1 rounded-lg border border-stone-200 bg-white px-2 py-1 text-xs">
                        <span className="max-w-[150px] truncate">{v}</span>
                        <button
                          type="button"
                          onClick={() => setActVideos(actVideos.filter((_, i) => i !== idx))}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setActivityModalOpen(false)}
                  className="rounded-xl border border-stone-300 px-4 py-2 text-xs font-semibold text-stone-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-amber-900 px-5 py-2 text-xs font-semibold text-white shadow"
                >
                  {editingActivity ? "Update Activity" : "Create Activity"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD GALLERY PHOTO */}
      {galleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <h3 className="font-display text-xl font-bold text-stone-900">Add Photo to Gallery</h3>
              <button
                onClick={() => setGalleryModalOpen(false)}
                className="rounded-full p-1.5 text-stone-400 hover:bg-stone-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={saveGalleryPhoto} className="mt-6 space-y-4">
              {/* File upload from device */}
              <div>
                <label className="text-xs font-semibold uppercase text-stone-600 block mb-1.5">
                  Upload Photo from Device
                </label>
                <label className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50 p-4 text-center hover:bg-stone-100 cursor-pointer transition">
                  {uploadingGal ? (
                    <>
                      <Loader2 className="h-6 w-6 animate-spin text-amber-800" />
                      <span className="text-xs font-semibold text-stone-700">Processing &amp; uploading image...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="h-6 w-6 text-amber-800" />
                      <span className="text-xs font-semibold text-stone-800">
                        Choose photo from your computer / phone
                      </span>
                      <span className="text-[11px] text-stone-500">
                        JPG, PNG, WebP (auto-optimized for fast loading)
                      </span>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    disabled={uploadingGal}
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      setUploadingGal(true);
                      try {
                        const url = await processAndUploadFile(file);
                        if (url) {
                          setNewGalUrl(url);
                          if (!newGalTitle) {
                            setNewGalTitle(
                              file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")
                            );
                          }
                          toast.success("Image uploaded successfully!");
                        }
                      } finally {
                        setUploadingGal(false);
                        e.target.value = "";
                      }
                    }}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="relative flex py-0.5 items-center">
                <div className="flex-grow border-t border-stone-200"></div>
                <span className="flex-shrink mx-2 text-[10px] uppercase font-bold text-stone-400">OR ENTER IMAGE URL</span>
                <div className="flex-grow border-t border-stone-200"></div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-stone-600">Photo Image URL</label>
                <input
                  type="text"
                  required
                  value={newGalUrl}
                  onChange={(e) => setNewGalUrl(e.target.value)}
                  placeholder="https://example.com/photo.jpg or uploaded image"
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2 text-sm text-stone-900 focus:outline-none"
                />
                {newGalUrl.trim().startsWith("blob:") && (
                  <div className="mt-2 flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 p-2.5 text-xs text-red-700">
                    <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-red-600" />
                    <div>
                      <strong className="block">WhatsApp Web blob URLs cannot be used</strong>
                      WhatsApp <code className="font-mono bg-red-100 px-1 rounded">blob:...</code> links are temporary browser memory pointers that expire and cannot be seen by other visitors. Please right-click the image in WhatsApp, choose <em>"Save image as..."</em>, and click the <strong>Upload Photo from Device</strong> button above.
                    </div>
                  </div>
                )}
                {newGalUrl && !newGalUrl.trim().startsWith("blob:") && (
                  <div className="mt-2 flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 p-2">
                    <img
                      src={resolveMediaUrl(newGalUrl) || newGalUrl}
                      alt="Preview"
                      className="h-14 w-14 object-cover rounded-lg border border-stone-200 bg-white"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="text-xs overflow-hidden">
                      <span className="font-semibold text-emerald-700 flex items-center gap-1">
                        <CheckCircle className="h-3.5 w-3.5 shrink-0" /> Image Ready
                      </span>
                      <span className="text-[11px] text-stone-500 truncate block max-w-[240px]">
                        {newGalUrl.startsWith("data:") ? "Direct device upload" : newGalUrl}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-stone-600">Title / Caption</label>
                <input
                  type="text"
                  value={newGalTitle}
                  onChange={(e) => setNewGalTitle(e.target.value)}
                  placeholder="e.g. Vidyarthis Veda Parayanam"
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2 text-sm text-stone-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-stone-600">Category</label>
                <input
                  type="text"
                  value={newGalCategory}
                  onChange={(e) => setNewGalCategory(e.target.value)}
                  placeholder="e.g. Veda Patasala, Utsavam, Homam"
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2 text-sm text-stone-900 focus:outline-none"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setGalleryModalOpen(false)}
                  className="rounded-xl border border-stone-300 px-4 py-2 text-xs font-semibold text-stone-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-amber-900 px-5 py-2 text-xs font-semibold text-white shadow"
                >
                  Add Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
