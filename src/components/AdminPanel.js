// AdminPanel.jsx

import React, { useState } from "react";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders";
import AdminStats from "./AdminStats";
import AdminProductsAdvanced from "./AdminProductsAdvanced";
import AdminOrdersAdvanced from "./AdminOrdersAdvanced";
import AdminStatsAdvanced from "./AdminStatsAdvanced";

export default function AdminPanel() {
  const [tab, setTab] = useState("products");
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 30 }}>
      <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 25, color: "#202d3b" }}>Paneli i Adminit</h2>
      <div style={{ display: "flex", gap: 15, marginBottom: 25 }}>
        <button onClick={() => setTab("products")} style={tab === "products" ? activeTab : tabBtn}>Produktet</button>
        <button onClick={() => setTab("orders")} style={tab === "orders" ? activeTab : tabBtn}>Porositë</button>
        <button onClick={() => setTab("stats")} style={tab === "stats" ? activeTab : tabBtn}>Statistika</button>
      </div>
      <div>
      {tab === "products" && <AdminProductsAdvanced />}
{tab === "orders" && <AdminOrdersAdvanced />}
{tab === "stats" && <AdminStatsAdvanced />}
      </div>
    </div>
  );
}

const tabBtn = {
  padding: "11px 26px",
  background: "#eee",
  color: "#223",
  border: "none",
  borderRadius: 6,
  fontWeight: 600,
  fontSize: 16,
  cursor: "pointer"
};
const activeTab = {
  ...tabBtn,
  background: "#ff8000",
  color: "#fff",
  boxShadow: "0 2px 9px #ff800017"
};
