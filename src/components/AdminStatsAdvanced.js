import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const API_URL = process.env.REACT_APP_API_URL || "https://backendd-t-production-f7ae.up.railway.app";
const TOKEN = localStorage.getItem("token");

export default function AdminStatsAdvanced() {
  const [stats, setStats] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/admin/stats`, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then(r => r.json())
      .then(setStats);

    // Shembull për monthly sales - duhet ta kesh API /api/admin/sales/monthly ose diçka të ngjashme
    fetch(`${API_URL}/api/admin/sales/monthly`, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then(r => r.json())
      .then(setChartData);
  }, []);

  if (!stats) return <div>Duke ngarkuar statistikat...</div>;

  return (
    <div>
      <h3>Dashboard i Shitjeve & Statistika</h3>
      <div style={{ display: "flex", gap: 28, flexWrap: "wrap", margin: "18px 0 34px 0" }}>
        <StatCard label="Totali i Produkteve" value={stats.totalProducts} />
        <StatCard label="Totali i Porosive" value={stats.totalOrders} />
        <StatCard label="Totali i Shitjeve (€)" value={stats.totalSales?.toFixed(2)} />
        <StatCard label="Përdorues aktivë" value={stats.totalUsers} />
      </div>
      <Card sx={{ p: 2, mt: 4, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <h4 style={{ marginBottom: 14 }}>Shitjet Mujore (€)</h4>
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={chartData} margin={{ top: 16, right: 16, left: 0, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#ff8000" name="Shitjet (€)" />
              <Bar dataKey="orders" fill="#008cff" name="Porositë" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
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
