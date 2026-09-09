/**
 * Official Veda Ashramam / Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust
 * Verified financial, tax, bank, and statutory registration details from Form No. 10AC.
 */

export const TRUST_DETAILS = {
  trustName: "Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust",
  shortName: "Veda Ashrama Gurukulam & Sabha",
  
  // Tax & Legal Disclosures (Form No. 10AC)
  pan: "AAMTS6931L",
  registration80G: "AAMTS6931LF20221",
  approvalDate80G: "03-08-2022",
  approvalPeriod80G: "03-08-2022 to AY 2025-2026",
  
  // Official Registered Address (Form No. 10AC)
  address: {
    street: "151, Edayanchavadi Road, OM Sakthi Nagar",
    locality: "Lawspet S.O",
    city: "Puducherry",
    country: "India",
    pinCode: "605008",
    full: "151, Edayanchavadi Road, OM Sakthi Nagar, Lawspet S.O, Puducherry, India - 605008",
  },
  
  // Verified Banking Particulars
  bank: {
    accountName: "Sri sai Sankara baktha sabha",
    bankName: "Indian Overseas Bank",
    branch: "Lawspet Branch, Puducherry - 605 008",
    branchCode: "2121",
    accountNumber: "212101000031000",
    ifscCode: "IOBA0002121",
  },
  
  // Official UPI
  upi: {
    id: "9842327791@IOB",
    phone: "+91 98423 27791",
  },
  
  contact: {
    phone: "+91 98423 27791",
    email: "info@vedaashramam.example", // Marked placeholder until custom domain mailbox configured
  },
} as const;
