// pages/NoAccess.js
import React from "react";
import { Link } from "react-router-dom";

function NoAccess() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2 style={{ color: "#f89500ff" }}>🚫 Qasja e ndaluar</h2>
      <p>Nuk keni autorizim për të hyrë në këtë faqe.</p>
      <Link to="/" style={{ textDecoration: "underline" }}>
        Kthehu në faqen kryesore
      </Link>
    </div>
  );
}

export default NoAccess;
