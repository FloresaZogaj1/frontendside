import React, { useEffect, useState } from "react";
const API_URL = process.env.REACT_APP_API_URL || "https://backendd-t-production-f7ae.up.railway.app";
const TOKEN = localStorage.getItem("token"); // ndreq nëse e ruan ndryshe

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  function fetchOrders() {
    setLoading(true);
    fetch(`${API_URL}/api/admin/orders`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    })
      .then(r => r.json())
      .then(setOrders)
      .finally(() => setLoading(false));
  }

  useEffect(() => { fetchOrders(); }, []);

  // ndërrimi statusit të porosisë (optional)
  function updateStatus(orderId, status) {
    fetch(`${API_URL}/api/admin/orders/${orderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}` },
      body: JSON.stringify({ status })
    }).then(fetchOrders);
  }

  return (
    <div>
      <h3>Lista e Porosive</h3>
      {loading ? <div>Duke ngarkuar...</div> : (
        <table style={{ width: "100%", background: "#fff", borderRadius: 7, boxShadow: "0 1px 6px #112f4b10", overflow: "hidden" }}>
          <thead>
            <tr style={{ background: "#f8f8f8" }}>
              <th>ID</th>
              <th>Përdoruesi</th>
              <th>Produkte</th>
              <th>Totali (€)</th>
              <th>Statusi</th>
              <th>Veprime</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 && <tr><td colSpan={6}>S’ka porosi!</td></tr>}
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.user?.email || o.user?.name || "Anonim"}</td>
                <td>
                  {o.products.map(p => (
                    <div key={p.id}>
                      {p.name} × {p.quantity}
                    </div>
                  ))}
                </td>
                <td><b>€{o.totalAmount?.toFixed(2) || o.total || "?"}</b></td>
                <td>{o.status}</td>
                <td>
                  <button onClick={() => updateStatus(o.id, "delivered")} style={btnStyle}>Shëno si dorëzuar</button>
                  <button onClick={() => updateStatus(o.id, "cancelled")} style={btnStyleDel}>Anulo</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
const btnStyle = { padding: "6px 12px", margin: 3, background: "#ff8000", color: "#fff", border: "none", borderRadius: 5, fontWeight: 600, cursor: "pointer" };
const btnStyleDel = { ...btnStyle, background: "#ccc", color: "#a00" };
