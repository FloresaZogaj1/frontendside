import React, { useEffect, useState } from "react";
const API_URL = process.env.REACT_APP_API_URL;

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!products.length) return <div>S’ka produkte në sistem.</div>;

  return (
    <div>
      <h2>Produktet</h2>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <b>{prod.name}</b> – {prod.price}€
            {/* Shto më shumë info këtu sipas dëshirës */}
            <button onClick={() => window.location.href = `/products/${prod.id}`}>
              Detaje
            </button>
            {/* Mund të shtosh “Shto në shportë” këtu më vonë */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
