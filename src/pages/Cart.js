import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart, total } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <div>Shporta është bosh!</div>;
  }

  return (
    <div>
      <h2>Shporta juaj</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <b>{item.name}</b> - {item.price} € x {item.quantity}
            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: 10 }}>
              Largojeni
            </button>
          </li>
        ))}
      </ul>
      <h4>Total: {total} €</h4>
      <button onClick={clearCart}>Pastro Shportën</button>
      {/* Butoni për Checkout brenda div-it */}
      <button onClick={() => navigate("/checkout")} style={{ marginLeft: 10 }}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
