import React from "react";
import { useParams, Link } from "react-router-dom";
import ALL_PRODUCTS from "../data/allProducts";
import { useCart } from "../CartContext"; // <- Shto këtë

// Përkthimet e kategorive për breadcrumb
const categoryNames = {
  phone: "Telefona",
  accessory: "Aksesorë",
  case: "Mbrojtëse",
  giftcard: "Gift Card",
  samsung: "Samsung",
  iphone: "iPhone"
  // Shto më shumë nëse ke kategori të tjera
};

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // <- Shto këtë

  // Gjej produktin sipas id-së (pa dallim të madhësisë së shkronjave)
  const product = ALL_PRODUCTS.find(
    (p) => p.id && p.id.toLowerCase() === id.toLowerCase()
  );

  if (!product)
    return (
      <div style={{ padding: 40, fontSize: 22, color: "#c00" }}>
        Produkt jo i gjetur
      </div>
    );

  return (
    <div style={{ maxWidth: 1300, margin: "auto", padding: 40 }}>
      {/* -------- Breadcrumb --------- */}
      <div style={{ color: "#8b98ad", marginBottom: 18, fontSize: 15 }}>
        <Link to="/" style={{ color: "#b5bfd2", textDecoration: "none" }}>
          Home
        </Link>
        {" > "}
        <Link
          to={`/${product.category}`}
          style={{ color: "#b5bfd2", textDecoration: "none" }}
        >
          {categoryNames[product.category] ||
            product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
        </Link>
        {" > "}
        <span style={{ color: "#415077" }}>{product.name}</span>
      </div>

      <div style={{ display: "flex", gap: 54, flexWrap: "wrap" }}>
        {/* ------- Galeri imazhesh ------- */}
        <div>
          <img
            src={
              Array.isArray(product.images) ? product.images[0] : product.images
            }
            alt={product.name}
            style={{
              width: 360,
              maxWidth: "98vw",
              borderRadius: 16,
              marginBottom: 14
            }}
          />
          <div style={{ display: "flex", gap: 10 }}>
            {product.images &&
              product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  style={{
                    width: 65,
                    height: 65,
                    objectFit: "cover",
                    borderRadius: 10,
                    border: "1px solid #eee",
                    cursor: "pointer"
                  }}
                />
              ))}
          </div>
        </div>
        {/* -------- Info & blerje -------- */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              color: "#434a62",
              fontWeight: 700,
              margin: 0,
              fontSize: 38
            }}
          >
            {product.name}
          </h1>
          <div style={{ margin: "8px 0 22px 0", fontSize: 18, color: "#6c7a92" }}>
            {product.description}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 14
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: 32,
                color: "#ff8000"
              }}
            >
              €{product.price}
            </span>
            {product.oldPrice && product.oldPrice > product.price && (
              <span
                style={{
                  color: "#bbc",
                  textDecoration: "line-through",
                  fontSize: 20
                }}
              >
                €{product.oldPrice}
              </span>
            )}
          </div>
          <div style={{ marginBottom: 8 }}>
            <span style={{ color: "#8b98ad" }}>Prodhuesi: </span>
            <span style={{ color: "#263f5b" }}>{product.brand || "—"}</span>
            {"  "}
            <span style={{ marginLeft: 24, color: "#8b98ad" }}>SKU: </span>
            <span style={{ color: "#263f5b" }}>{product.sku || "—"}</span>
          </div>
          {/* Rating */}
          <div style={{ marginBottom: 24 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                style={{
                  color: i < (product.rating || 0) ? "#ff9500" : "#e0e2e6",
                  fontSize: 22
                }}
              >
                ★
              </span>
            ))}
          </div>
          {/* Buton blerje */}
          <button
            onClick={() => addToCart(product)} // <- FUNKSIONAL!
            style={{
              background: "#023047",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 34px",
              fontWeight: 600,
              fontSize: 18,
              cursor: "pointer",
              marginBottom: 24,
              transition: "background 0.14s"
            }}
          >
            Shto në shportë 🛒
          </button>
        </div>
      </div>

      {/* --------- Specifika në tabelë --------- */}
      <div
        style={{
          marginTop: 55,
          background: "#f9fafc",
          padding: "34px 0",
          borderRadius: 16
        }}
      >
        <h3
          style={{
            color: "#434a62",
            fontWeight: 700,
            fontSize: 22,
            marginLeft: 44,
            marginBottom: 10
          }}
        >
          Përshkrimi i produktit
        </h3>
        <table
          style={{
            width: "93%",
            margin: "auto",
            background: "white",
            borderCollapse: "collapse",
            borderRadius: "10px",
            overflow: "hidden",
            fontSize: 17
          }}
        >
          <thead>
            <tr style={{ background: "#f3f6fa" }}>
              <th style={{ padding: "13px 0", fontWeight: 700, color: "#8391a8" }}>
                Key
              </th>
              <th style={{ padding: "13px 0", fontWeight: 700, color: "#8391a8" }}>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {product.specs &&
              Object.entries(product.specs).map(([key, value]) => (
                <tr key={key} style={{ borderBottom: "1px solid #f0f0f5" }}>
                  <td
                    style={{
                      color: "#283956",
                      padding: "10px 0 10px 12px",
                      fontWeight: 500
                    }}
                  >
                    {key}
                  </td>
                  <td style={{ color: "#636e7d", padding: "10px 0" }}>{value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
