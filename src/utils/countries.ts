export interface Country {
  name: string;
  code: string; // dial code with +
  iso: string;
  flag: string;
}

export const COUNTRIES: Country[] = [
  { name: "India", code: "+91", iso: "IN", flag: "🇮🇳" },
  { name: "United States", code: "+1", iso: "US", flag: "🇺🇸" },
  { name: "Canada", code: "+1", iso: "CA", flag: "🇨🇦" },
  { name: "United Kingdom", code: "+44", iso: "GB", flag: "🇬🇧" },
  { name: "Australia", code: "+61", iso: "AU", flag: "🇦🇺" },
  { name: "Germany", code: "+49", iso: "DE", flag: "🇩🇪" },
  { name: "France", code: "+33", iso: "FR", flag: "🇫🇷" },
  { name: "Italy", code: "+39", iso: "IT", flag: "🇮🇹" },
  { name: "Spain", code: "+34", iso: "ES", flag: "🇪🇸" },
  { name: "Netherlands", code: "+31", iso: "NL", flag: "🇳🇱" },
  { name: "United Arab Emirates", code: "+971", iso: "AE", flag: "🇦🇪" },
  { name: "Saudi Arabia", code: "+966", iso: "SA", flag: "🇸🇦" },
  { name: "Singapore", code: "+65", iso: "SG", flag: "🇸🇬" },
  { name: "Japan", code: "+81", iso: "JP", flag: "🇯🇵" },
  { name: "China", code: "+86", iso: "CN", flag: "🇨🇳" },
  { name: "South Korea", code: "+82", iso: "KR", flag: "🇰🇷" },
  { name: "Brazil", code: "+55", iso: "BR", flag: "🇧🇷" },
  { name: "Mexico", code: "+52", iso: "MX", flag: "🇲🇽" },
  { name: "South Africa", code: "+27", iso: "ZA", flag: "🇿🇦" },
  { name: "Nigeria", code: "+234", iso: "NG", flag: "🇳🇬" },
  { name: "Pakistan", code: "+92", iso: "PK", flag: "🇵🇰" },
  { name: "Bangladesh", code: "+880", iso: "BD", flag: "🇧🇩" },
  { name: "Sri Lanka", code: "+94", iso: "LK", flag: "🇱🇰" },
  { name: "Nepal", code: "+977", iso: "NP", flag: "🇳🇵" },
  { name: "Russia", code: "+7", iso: "RU", flag: "🇷🇺" },
  { name: "Turkey", code: "+90", iso: "TR", flag: "🇹🇷" },
  { name: "Indonesia", code: "+62", iso: "ID", flag: "🇮🇩" },
  { name: "Malaysia", code: "+60", iso: "MY", flag: "🇲🇾" },
  { name: "Philippines", code: "+63", iso: "PH", flag: "🇵🇭" },
  { name: "Thailand", code: "+66", iso: "TH", flag: "🇹🇭" },
];

export const DEFAULT_COUNTRY = COUNTRIES[0];
