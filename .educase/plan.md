## PopX Mobile Clone — 4 Screens

### Note on stack
The Lovable template is **React + Vite + TanStack Router** (not react-router-dom). The routing API is equivalent and type-safe — I'll use it instead of react-router-dom. Everything else (plain CSS modules, reusable components, mobile-centered layout) matches your spec exactly.

### Routes (file-based in `src/routes/`)
- `/` → Landing
- `/login` → Login
- `/register` → Register
- `/account` → Account Settings

### Folder structure
```text
src/
  components/
    Button/           Button.tsx + Button.module.css
    InputField/       InputField.tsx + InputField.module.css (floating purple label)
    MobileLayout/     MobileLayout.tsx + MobileLayout.module.css (375px centered card)
  routes/
    __root.tsx        (existing — keep shell)
    index.tsx         (Landing)
    login.tsx
    register.tsx
    account.tsx
  assets/
    profile.jpg       (avatar for Account Settings)
  styles.css          (global tokens: purple #6C25FF, bg #f7f8fa, fonts)
```

### Screen details (matching the screenshots)

**1. Landing (`/`)** — content bottom-aligned
- H1 "Welcome to PopX" (bold, ~28px)
- Subtitle lorem line (gray)
- Solid purple "Create Account" → `/register`
- Light purple "Already Registered? Login" → `/login`

**2. Login (`/login`)**
- H1 "Signin to your PopX account"
- Subtitle
- InputField: Email Address
- InputField: Password
- Disabled-look gray "Login" button (enables when both filled) → `/account`

**3. Register (`/register`)**
- H1 "Create your PopX account"
- InputFields: Full Name*, Phone number*, Email address*, Password*, Company name
- "Are you an Agency?*" with Yes/No radio (purple)
- Purple "Create Account" pinned near bottom → `/account`

**4. Account Settings (`/account`)**
- Top bar "Account Settings" with bottom border
- Circular avatar with small purple camera badge overlay
- Name "Marry Doe" + email
- Multi-line lorem description
- Dashed separators as shown

### Reusable components
- **`MobileLayout`**: full-viewport gray bg, centers a 375px white card with subtle border; children render inside with padding.
- **`Button`**: variants `primary` (purple), `secondary` (light purple), `disabled` (gray). Full-width.
- **`InputField`**: bordered rounded input with floating purple label (notched border style from XD), optional required asterisk.

### Design tokens (plain CSS, in `styles.css`)
- Primary purple: `#6C25FF`
- Secondary purple bg: `#CEBAFB`
- Page bg: `#EBEDF0`
- Card bg: `#FFFFFF`
- Text: `#1F1F1F` / muted `#7A7A7A`
- Border radius: 6px inputs, 6px buttons
- Font: system sans (Rubik-like via system stack)

### Out of scope
No animations, no backend, no form validation beyond enabling Login button when fields are non-empty.
