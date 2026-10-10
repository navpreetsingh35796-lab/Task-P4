import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import bcrypt from "bcryptjs";
import { db } from "../firebase.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email.trim().toLowerCase()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setErrorMessage("Invalid credentials. Please try again or create an account.");
        setLoading(false);
        return;
      }

      const userData = querySnapshot.docs[0].data();
      const isPasswordMatch = await bcrypt.compare(password, userData.passwordHash);

      if (isPasswordMatch) {
        navigate("/");
      } else {
        setErrorMessage("Invalid credentials. Please try again or create an account.");
      }
    } catch (err) {
      setErrorMessage("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-top-action">
        <Link to="/signup" className="action-link-btn">Sign up</Link>
      </div>
      <form onSubmit={handleLogin} className="auth-form">
        <label>Your email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Your password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && (
          <div className="auth-error">
            {errorMessage}{" "}
            <Link to="/signup">Sign up here</Link>
          </div>
        )}

        <button type="submit" className="primary-btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}