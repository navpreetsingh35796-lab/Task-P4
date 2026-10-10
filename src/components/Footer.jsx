import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div>
          <h4>Explore</h4>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        <div>
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h4>Stay Connected</h4>
          <p>DEV@Deakin Community</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>DEV@Deakin 2026 | Privacy Policy | Terms of Use</p>
      </div>
    </footer>
  );
}