import React, { useEffect, useState } from "react";
const API_URL = process.env.REACT_APP_API_URL || "https://backendd-t-production-f7ae.up.railway.app";
const TOKEN = localStorage.getItem("token");

export default function AdminStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/admin/stats`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    })
      .then(r => r.json())
      .then(setStats);
  }, []);

  if (!stats) return <div>Duke ngarkuar statistikat...</div>;

  return (
    <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginTop: 18 }}>
      <StatCard label="Totali i Produkteve" value={stats.totalProducts} />
      <StatCard label="Totali i Porosive" value={stats.totalOrders} />
      <StatCard label="Totali i Shitjeve (€)" value={stats.totalSales?.toFixed(2)} />
      <StatCard label="Përdorues aktivë" value={stats.totalUsers} />
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div style={{
      minWidth: 180,
      background: "#fff7e8",
      borderRadius: 14,
      padding: "28px 18px",
      textAlign: "center",
      boxShadow: "0 1px 8px #ffb26b19"
    }}>
      <div style={{ color: "#ff8000", fontWeight: 800, fontSize: 30, marginBottom: 9 }}>
        {value}
      </div>
      <div style={{ color: "#111", fontWeight: 600, fontSize: 17, letterSpacing: "-.5px" }}>
        {label}
      </div>
    </div>
  );
}
