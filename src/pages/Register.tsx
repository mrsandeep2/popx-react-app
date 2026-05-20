import { useRef, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MobileLayout } from "@/components/MobileLayout/MobileLayout";
import { Button } from "@/components/Button/Button";
import { InputField } from "@/components/InputField/InputField";
import { PhoneInput } from "@/components/PhoneInput/PhoneInput";
import { DEFAULT_COUNTRY, type Country } from "@/utils/countries";
import {
  emailExists,
  isValidEmail,
  saveUser,
  setSession,
} from "@/utils/auth";
import styles from "./Register.module.css";

export function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [isAgency, setIsAgency] = useState<"yes" | "no">("yes");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.fullName.trim()) {
      setError("Full name is required");
      nameRef.current?.focus();
      return;
    }
    if (!form.phone.trim() || form.phone.length < 6) {
      setError("Please enter a valid phone number");
      phoneRef.current?.focus();
      return;
    }
    if (!form.email.trim() || !isValidEmail(form.email)) {
      setError("Please enter a valid email address");
      emailRef.current?.focus();
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      passwordRef.current?.focus();
      return;
    }
    if (emailExists(form.email)) {
      setError("Account already exists with this email");
      emailRef.current?.focus();
      return;
    }

    setLoading(true);
    saveUser({
      fullName: form.fullName.trim(),
      countryCode: country.code,
      phoneNumber: form.phone.trim(),
      email: form.email.trim(),
      password: form.password,
      companyName: form.company.trim(),
      agency: isAgency,
    });
    setSession(form.email.trim());
    navigate({ to: "/account" });
  };

  return (
    <MobileLayout>
      <form className={styles.screen} onSubmit={handleSubmit} noValidate>
        <h1 className={styles.title}>
          Create your
          <br />
          PopX account
        </h1>

        <div className={styles.form}>
          <InputField
            ref={nameRef}
            label="Full Name"
            required
            placeholder="Enter full name"
            value={form.fullName}
            onChange={update("fullName")}
          />
          <PhoneInput
            label="Phone number"
            required
            country={country}
            onCountryChange={setCountry}
            value={form.phone}
            onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
            placeholder="Enter phone number"
            inputRef={phoneRef}
          />
          <InputField
            ref={emailRef}
            label="Email address"
            required
            type="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={update("email")}
          />
          <InputField
            ref={passwordRef}
            label="Password"
            required
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={update("password")}
          />
          <InputField
            label="Company name"
            placeholder="Enter company name"
            value={form.company}
            onChange={update("company")}
          />
        </div>

        <div className={styles.radioGroup}>
          <div className={styles.radioLabel}>
            Are you an Agency?<span className={styles.radioRequired}>*</span>
          </div>
          <div className={styles.options}>
            <label className={styles.option}>
              <input
                type="radio"
                name="agency"
                value="yes"
                className={styles.radio}
                checked={isAgency === "yes"}
                onChange={() => setIsAgency("yes")}
              />
              Yes
            </label>
            <label className={styles.option}>
              <input
                type="radio"
                name="agency"
                value="no"
                className={styles.radio}
                checked={isAgency === "no"}
                onChange={() => setIsAgency("no")}
              />
              No
            </label>
          </div>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.footer}>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </div>
      </form>
    </MobileLayout>
  );
}
