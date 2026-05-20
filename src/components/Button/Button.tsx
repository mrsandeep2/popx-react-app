import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({
  variant = "primary",
  disabled,
  className,
  ...rest
}: ButtonProps) {
  const variantClass = disabled ? styles.disabled : styles[variant];
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`${styles.button} ${variantClass} ${className ?? ""}`}
    />
  );
}
