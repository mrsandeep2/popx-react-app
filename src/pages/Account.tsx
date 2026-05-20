import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MobileLayout } from "@/components/MobileLayout/MobileLayout";
import {
  clearSession,
  getCurrentUser,
  getInitials,
  type StoredUser,
} from "@/utils/auth";
import styles from "./Account.module.css";

export function AccountPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<StoredUser | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const current = getCurrentUser();
    if (!current) {
      navigate({ to: "/login" });
      return;
    }
    setUser(current);
  }, [navigate]);

  if (!user) return null;

  const handleLogout = () => {
    setLoggingOut(true);
    clearSession();
    navigate({ to: "/" });
  };

  return (
    <MobileLayout>
      <div className={styles.header}>
        <span>Account Settings</span>
        <button
          type="button"
          onClick={handleLogout}
          className={styles.logout}
          disabled={loggingOut}
        >
          {loggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.profileRow}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar} aria-label={user.fullName}>
              {getInitials(user.fullName)}
            </div>
            <span className={styles.badge} aria-hidden>
              ◉
            </span>
          </div>
          <div>
            <div className={styles.name}>{user.fullName}</div>
            <div className={styles.email}>{user.email}</div>
          </div>
        </div>
        <p className={styles.description}>
          Welcome to your PopX profile. Manage your personal information and
          account settings easily from this dashboard.
        </p>
        <div className={styles.spacer} />
      </div>
    </MobileLayout>
  );
}
