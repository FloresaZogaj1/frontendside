import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../CartContext";

// Mund të përdorësh një url tëndin ose një foto default në projektin tënd
const DEFAULT_IMAGE = "/default-product.jpg"; // vendose një foto reale në public folder

const API_URL = process.env.REACT_APP_API_URL;

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ textAlign: "center", padding: 40 }}>Loading...</div>;
  if (!products.length) return <div style={{ textAlign: "center", padding: 40 }}>S’ka produkte në sistem.</div>;

  return (
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "30px 0" }}>
      <h2 style={{
        fontWeight: 700,
        fontSize: 28,
        marginBottom: 35,
        letterSpacing: "-1px",
        color: "#202d3b"
      }}>
        Produktet
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "32px 18px"
      }}>
        {products.map((prod) => (
          <div
            key={prod.id}
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 3px 16px #112f4b0d",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: 370,
              height: "100%",
              justifyContent: "flex-start",
              position: "relative"
            }}
          >
            <div style={{
              width: 145,
              height: 145,
              marginBottom: 16,
              background: "#f5f7fa",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img
                src={prod.image ? prod.image : DEFAULT_IMAGE}
                alt={prod.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: 14,
                  background: "#f9fafc",
                  display: "block"
                }}
                onError={e => { e.target.onerror = null; e.target.src = DEFAULT_IMAGE; }}
              />
            </div>
            <div style={{
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 2,
              color: "#13273d",
              textAlign: "center"
            }}>
              {prod.name}
            </div>
            <div style={{
              fontSize: 14,
              color: "#6b7a90",
              minHeight: 38,
              marginBottom: 12,
              textAlign: "center"
            }}>
              {prod.description}
            </div>
            <div style={{ marginBottom: 14, marginTop: 2 }}>
              {prod.oldPrice && (
                <span style={{
                  color: "#b6b6b6",
                  textDecoration: "line-through",
                  fontSize: 17,
                  marginRight: 6,
                  fontWeight: 500
                }}>
                  €{prod.oldPrice}
                </span>
              )}
              <span style={{
                color: "#ff8000",
                fontWeight: 700,
                fontSize: 22,
                letterSpacing: "-1px"
              }}>
                €{Number(prod.price).toFixed(2)}
              </span>
            </div>
            <button
              style={{
                background: "#002a3b",
                color: "#fff",
                padding: "11px 0",
                width: "100%",
                border: "none",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 9,
                transition: "background 0.2s",
                cursor: "pointer"
              }}
              onClick={() => addToCart(prod)}
            >
              Shto në Shportë <ShoppingCartIcon style={{ fontSize: 21, marginLeft: 2 }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
