import type { ReactNode } from "react";
import styles from "./MobileLayout.module.css";

interface MobileLayoutProps {
  children: ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className={styles.page}>
      <div className={styles.frame}>{children}</div>
    </div>
  );
}
