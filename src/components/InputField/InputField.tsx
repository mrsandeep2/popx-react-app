import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";
import styles from "./InputField.module.css";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField({ label, required, id, type = "text", ...rest }, ref) {
    const inputId = id ?? label.replace(/\s+/g, "-").toLowerCase();
    const isPassword = type === "password";
    const [show, setShow] = useState(false);
    const inputType = isPassword ? (show ? "text" : "password") : type;

    return (
      <div className={styles.wrapper}>
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          type={inputType}
          className={`${styles.input} ${isPassword ? styles.hasToggle : ""}`}
          {...rest}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    );
  },
);
