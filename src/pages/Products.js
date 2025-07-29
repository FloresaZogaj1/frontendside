import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../CartContext";
import  "./Products.css";
// Mund të përdorësh një url tëndin ose një foto default në projektin tënd
const DEFAULT_IMAGE = "/default-product.jpg";
const API_URL = process.env.REACT_APP_API_URL || "https://backendd-t-production-f7ae.up.railway.app";

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

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: 40 }}>Loading...</div>
    );
  if (!products.length)
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        S’ka produkte në sistem.
      </div>
    );

  return (
    <div className="tm-products-root">
      <h2 className="tm-products-title">Produktet</h2>
      <div className="tm-products-grid">
        {products.map((prod) => (
          <div className="tm-product-card" key={prod.id}>
            <div className="tm-product-imgwrap">
              <img
                src={prod.image ? prod.image : DEFAULT_IMAGE}
                alt={prod.name}
                className="tm-product-img"
                onError={e => { e.target.onerror = null; e.target.src = DEFAULT_IMAGE; }}
              />
            </div>
            <div className="tm-product-content">
              <div className="tm-product-name">{prod.name}</div>
              <div className="tm-product-desc">{prod.description}</div>
              <div className="tm-product-price-row">
                {prod.oldPrice && (
                  <span className="tm-old-price">€{prod.oldPrice}</span>
                )}
                <span className="tm-new-price">€{Number(prod.price).toFixed(2)}</span>
              </div>
              <button
                className="tm-add-cart-btn"
                onClick={() => addToCart(prod)}
              >
                Shto në Shportë <ShoppingCartIcon style={{ fontSize: 21, marginLeft: 7, marginBottom: -3 }} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
