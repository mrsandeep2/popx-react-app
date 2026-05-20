export interface StoredUser {
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  password: string;
  companyName: string;
  agency: "yes" | "no";
}

const USERS_KEY = "popx_users";
const SESSION_KEY = "popx_session";

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try { return JSON.parse(raw) as T; } catch { return fallback; }
}

export function getUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  return safeParse<StoredUser[]>(localStorage.getItem(USERS_KEY), []);
}

export function emailExists(email: string): boolean {
  const e = email.trim().toLowerCase();
  return getUsers().some((u) => u.email.toLowerCase() === e);
}

export function saveUser(user: StoredUser): void {
  const users = getUsers().filter(
    (u) => u.email.toLowerCase() !== user.email.toLowerCase(),
  );
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function findUser(email: string, password: string): StoredUser | null {
  return (
    getUsers().find(
      (u) =>
        u.email.toLowerCase() === email.trim().toLowerCase() &&
        u.password === password,
    ) ?? null
  );
}

export function setSession(email: string): void {
  localStorage.setItem(SESSION_KEY, email);
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_KEY);
}

export function getCurrentUser(): StoredUser | null {
  if (typeof window === "undefined") return null;
  const email = localStorage.getItem(SESSION_KEY);
  if (!email) return null;
  return getUsers().find((u) => u.email === email) ?? null;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "U";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
