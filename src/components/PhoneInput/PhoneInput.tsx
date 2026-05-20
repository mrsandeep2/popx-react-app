import { useEffect, useMemo, useRef, useState } from "react";
import { COUNTRIES, type Country } from "@/utils/countries";
import styles from "./PhoneInput.module.css";

interface PhoneInputProps {
  label: string;
  required?: boolean;
  country: Country;
  onCountryChange: (c: Country) => void;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export function PhoneInput({
  label,
  required,
  country,
  onCountryChange,
  value,
  onChange,
  placeholder,
  inputRef,
}: PhoneInputProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.iso.toLowerCase().includes(q),
    );
  }, [query]);

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value.replace(/\D/g, "").slice(0, 15));
  };

  return (
    <div className={styles.wrapper} ref={wrapRef}>
      <span className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </span>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.codeBtn}
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span>{country.flag}</span>
          <span>{country.code}</span>
          <span className={styles.caret}>▼</span>
        </button>
        <input
          ref={inputRef}
          type="tel"
          inputMode="numeric"
          className={styles.input}
          value={value}
          onChange={handlePhone}
          placeholder={placeholder}
        />
      </div>

      {open && (
        <div className={styles.dropdown} role="listbox">
          <input
            autoFocus
            type="text"
            className={styles.search}
            placeholder="Search country or code"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className={styles.list}>
            {filtered.length === 0 && (
              <div className={styles.empty}>No matches</div>
            )}
            {filtered.map((c) => (
              <button
                key={c.iso}
                type="button"
                role="option"
                aria-selected={c.iso === country.iso}
                className={`${styles.item} ${c.iso === country.iso ? styles.active : ""}`}
                onClick={() => {
                  onCountryChange(c);
                  setOpen(false);
                  setQuery("");
                }}
              >
                <span>{c.flag}</span>
                <span className={styles.itemName}>{c.name}</span>
                <span className={styles.itemCode}>{c.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
