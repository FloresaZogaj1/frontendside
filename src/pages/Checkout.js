import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Duhet të kyçeni!");
      navigate("/login");
      return;
    }
    const items = cart.map(item => ({
      id: item.id,
      quantity: item.quantity,
      price: item.price,
    }));

    const res = await fetch(`${API_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ items, total }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Porosia u krye me sukses!");
      clearCart();
      navigate("/");
    } else {
      alert("Gabim: " + (data.message || "Checkout dështoi"));
    }
  };

  if (!cart.length) return (
    <div style={{
      padding: 36,
      maxWidth: 440,
      margin: "48px auto",
      fontSize: 18,
      textAlign: "center",
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 18px #0002",
      color: "#FF8000"
    }}>
      <span style={{ fontSize: 22, fontWeight: 700 }}>Shporta është bosh!</span>
    </div>
  );

  return (
    <div style={{
      maxWidth: 530,
      margin: "48px auto",
      background: "#fff",
      borderRadius: 18,
      boxShadow: "0 2px 18px #0002",
      padding: "32px 28px",
      border: "2.5px solid #FF800033"
    }}>
      <h2 style={{
        fontWeight: 800,
        marginBottom: 28,
        fontSize: 28,
        letterSpacing: 1,
        color: "#FF8000"
      }}>Checkout</h2>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {cart.map(item => (
          <li key={item.id} style={{
            background: "#FFF7F0",
            borderRadius: 12,
            marginBottom: 18,
            boxShadow: "0 1px 8px #FF800011",
            padding: "18px 20px",
            border: "1.5px solid #FF800055",
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18, color: "#222" }}>{item.name}</div>
              <div style={{ fontSize: 15, color: "#6f6f6f", marginTop: 3 }}>
                <span style={{ color: "#FF8000", fontWeight: 600 }}>{item.price} €</span>
                <span style={{ color: "#222", fontWeight: 500 }}> x {item.quantity}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div style={{
        margin: "18px 0 10px 0",
        textAlign: "right",
        fontSize: 19,
        fontWeight: 800,
        color: "#FF8000"
      }}>
        Total: <span style={{ color: "#222" }}>{total} €</span>
      </div>

      <button
        onClick={handleCheckout}
        style={{
          background: "#FF8000",
          color: "#fff",
          border: "none",
          borderRadius: 9,
          padding: "13px 0",
          fontWeight: 800,
          fontSize: 18,
          cursor: "pointer",
          width: "100%",
          marginTop: 18,
          boxShadow: "0 2px 8px #FF800033",
          transition: ".14s"
        }}
      >
        Konfirmo Porosinë
      </button>
    </div>
  );
}

export default Checkout;
