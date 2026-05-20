import { useNavigate } from "@tanstack/react-router";
import { MobileLayout } from "@/components/MobileLayout/MobileLayout";
import { Button } from "@/components/Button/Button";
import styles from "./Landing.module.css";

export function LandingPage() {
  const navigate = useNavigate();
  return (
    <MobileLayout>
      <div className={styles.screen}>
        <h1 className={styles.title}>Welcome to PopX</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
        <div className={styles.actions}>
          <Button variant="primary" onClick={() => navigate({ to: "/register" })}>
            Create Account
          </Button>
          <Button variant="secondary" onClick={() => navigate({ to: "/login" })}>
            Already Registered? Login
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
