import { useRef, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MobileLayout } from "@/components/MobileLayout/MobileLayout";
import { Button } from "@/components/Button/Button";
import { InputField } from "@/components/InputField/InputField";
import { findUser, setSession, isValidEmail } from "@/utils/auth";
import styles from "./Login.module.css";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const canSubmit = email.trim() !== "" && password.trim() !== "" && !loading;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      emailRef.current?.focus();
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      emailRef.current?.focus();
      return;
    }
    if (!password) {
      setError("Password is required");
      passwordRef.current?.focus();
      return;
    }

    setLoading(true);
    const user = findUser(email, password);
    if (!user) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    setSession(user.email);
    navigate({ to: "/account" });
  };

  return (
    <MobileLayout>
      <form className={styles.screen} onSubmit={handleSubmit} noValidate>
        <h1 className={styles.title}>
          Sign in to your
          <br />
          PopX account
        </h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <div className={styles.form}>
          <InputField
            ref={emailRef}
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            ref={passwordRef}
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.submit}>
          <Button type="submit" disabled={!canSubmit}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </div>
      </form>
    </MobileLayout>
  );
}
