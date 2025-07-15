import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart, total } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div style={{
        padding: 36,
        maxWidth: 450,
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
  }

  return (
    <div style={{
      maxWidth: 530,
      margin: "48px auto",
      background: "#fff",
      borderRadius: 18,
      boxShadow: "0 2px 18px #0002",
      padding: "32px 28px",
      border: "2.5px solid #FF800033",
    }}>
      <h2 style={{
        fontWeight: 800,
        marginBottom: 28,
        fontSize: 28,
        letterSpacing: 1,
        color: "#FF8000"
      }}>🛒 Shporta juaj</h2>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {cart.map((item) => (
          <li key={item.id} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#FFF7F0",
            borderRadius: 12,
            marginBottom: 18,
            boxShadow: "0 1px 8px #FF800011",
            padding: "18px 20px",
            border: "1.5px solid #FF800055"
          }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18, color: "#222" }}>{item.name}</div>
              <div style={{ fontSize: 15, color: "#6f6f6f", marginTop: 3 }}>
                <span style={{ color: "#FF8000", fontWeight: 600 }}>{item.price} €</span>
                <span style={{ color: "#222", fontWeight: 500 }}> x {item.quantity}</span>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "#222",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "7px 18px",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: 15,
                transition: ".14s",
                boxShadow: "0 2px 8px #22222217",
                marginLeft: 8
              }}
            >
              Largojeni
            </button>
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

      <div style={{ display: "flex", gap: 12, marginTop: 18, justifyContent: "flex-end" }}>
        <button
          onClick={clearCart}
          style={{
            background: "#fff",
            color: "#FF8000",
            border: "2px solid #FF8000",
            borderRadius: 9,
            padding: "9px 18px",
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            boxShadow: "0 1px 8px #FF800033",
            transition: ".14s"
          }}
        >
          Pastro Shportën
        </button>
        <button
          onClick={() => navigate("/checkout")}
          style={{
            background: "#FF8000",
            color: "#fff",
            border: "none",
            borderRadius: 9,
            padding: "9px 26px",
            fontWeight: 800,
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "0 2px 8px #FF800033",
            transition: ".14s"
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
