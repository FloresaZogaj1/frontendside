// src/pages/Checkout.js
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

  if (!cart.length) return <div>Shporta është bosh!</div>;

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <b>{item.name}</b> - {item.price} € x {item.quantity}
          </li>
        ))}
      </ul>
      <h4>Total: {total} €</h4>
      <button onClick={handleCheckout}>Konfirmo Porosinë</button>
    </div>
  );
}
export default Checkout;
