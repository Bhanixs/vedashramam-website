import { useState, useEffect } from "react";
import { TRUST_DETAILS } from "./trust-details";

export interface TrustSettingsState {
  trustName: string;
  phone: string;
  email: string;
  address: string;
  upiId: string;
  bankName: string;
  bankBranch: string;
  accountNumber: string;
  ifscCode: string;
  pan: string;
  reg80g: string;
}

const DEFAULT_SETTINGS: TrustSettingsState = {
  trustName: TRUST_DETAILS.trustName || TRUST_DETAILS.name,
  phone: TRUST_DETAILS.officialPhone || TRUST_DETAILS.contact.phone,
  email: TRUST_DETAILS.officialEmail || TRUST_DETAILS.contact.email,
  address: TRUST_DETAILS.registeredAddress || TRUST_DETAILS.address.full,
  upiId: TRUST_DETAILS.banking?.upiId || TRUST_DETAILS.upi.id,
  bankName: TRUST_DETAILS.banking?.bankName || TRUST_DETAILS.bank.bankName,
  bankBranch: TRUST_DETAILS.banking?.branch || TRUST_DETAILS.bank.branch,
  accountNumber: TRUST_DETAILS.banking?.accountNumber || TRUST_DETAILS.bank.accountNumber,
  ifscCode: TRUST_DETAILS.banking?.ifscCode || TRUST_DETAILS.bank.ifscCode,
  pan: TRUST_DETAILS.pan,
  reg80g: TRUST_DETAILS.registration80G,
};

const LOCAL_STORAGE_KEY = "vedashramam_trust_settings_cache";

function getInitialSettings(): TrustSettingsState {
  if (typeof window !== "undefined") {
    try {
      const stored =
        localStorage.getItem(LOCAL_STORAGE_KEY) ||
        localStorage.getItem("vedabhavan_trust_settings_cache");
      if (stored) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
      }
    } catch {}
  }
  return DEFAULT_SETTINGS;
}

let cachedSettings: TrustSettingsState | null = null;
const listeners = new Set<(s: TrustSettingsState) => void>();

export function updateTrustSettingsCache(newSettings: Partial<TrustSettingsState> | Record<string, any>) {
  const current = cachedSettings || getInitialSettings();
  const updated: TrustSettingsState = {
    trustName: newSettings.trustName || newSettings.trust_name || current.trustName,
    phone: newSettings.phone || current.phone,
    email: newSettings.email || current.email,
    address: newSettings.address || current.address,
    upiId: newSettings.upiId || newSettings.upi_id || current.upiId,
    bankName: newSettings.bankName || newSettings.bank_name || current.bankName,
    bankBranch: newSettings.bankBranch || newSettings.bank_branch || current.bankBranch,
    accountNumber: newSettings.accountNumber || newSettings.bank_account || current.accountNumber,
    ifscCode: newSettings.ifscCode || newSettings.bank_ifsc || current.ifscCode,
    pan: newSettings.pan || current.pan,
    reg80g: newSettings.reg80g || newSettings.reg_80g || current.reg80g,
  };

  cachedSettings = updated;
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  }
  listeners.forEach((listener) => listener(updated));
}

export function useTrustSettings(): TrustSettingsState {
  const [settings, setSettings] = useState<TrustSettingsState>(() => {
    if (!cachedSettings) {
      cachedSettings = getInitialSettings();
    }
    return cachedSettings;
  });

  useEffect(() => {
    listeners.add(setSettings);

    // Fetch live settings from /api/admin?action=settings
    fetch("/api/admin?action=settings")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && typeof data === "object") {
          updateTrustSettingsCache(data);
        }
      })
      .catch(() => {});

    return () => {
      listeners.delete(setSettings);
    };
  }, []);

  return settings;
}
