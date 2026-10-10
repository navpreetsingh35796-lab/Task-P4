# DEV@Deakin - Authentication & Routing Web Platform

A React single-page application built for the DEV@Deakin platform featuring persistent navigation, client-side routing, Firebase Cloud Firestore integration, and secure password hashing using bcrypt.

---

## Features

- **Client-Side Routing (`react-router-dom`):** Seamless page navigation across Home (`/`), Login (`/login`), and Sign-up (`/signup`) routes.
- **Shared Layout Shell:** A persistent header navigation bar and multi-column footer wrapping child route outlets.
- **Secure Registration:** Form validation enforcing email standards, minimum password length, and password matching before storage.
- **Password Encryption (`bcryptjs`):** Passwords are salted and hashed on the client before saving to ensure plain text passwords are never stored in the database.
- **Database Persistence (Cloud Firestore):** User credentials and registration timestamps stored securely under the `users` collection.
- **Credential Verification & Error Handling:** Compares submitted passwords against stored bcrypt hashes, displaying contextual error messages when records do not match or accounts are missing.
- **Environment Variable Protection:** Firebase configuration stored in `.env` and kept untracked via `.gitignore`.

---

## Tech Stack

- **Frontend:** React 18, Vite, React Router v6, CSS3
- **Database:** Google Firebase (Cloud Firestore)
- **Security:** `bcryptjs`
- **Version Control:** Git, GitLab / GitHub

---

## Project Structure

```text
task-p4/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── firebase.js
│   ├── index.css
│   └── main.jsx
├── .env                  # (Untracked) Firebase credentials
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
