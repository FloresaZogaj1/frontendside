import React, { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "https://backendd-t-production-f7ae.up.railway.app";
const TOKEN = localStorage.getItem("token"); // vendos si ruan adminin

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", price: "", description: "", image: "" });
  const [loading, setLoading] = useState(false);

  function fetchProducts() {
    setLoading(true);
    fetch(`${API_URL}/api/admin/products`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    })
      .then((r) => r.json())
      .then(setProducts)
      .finally(() => setLoading(false));
  }

  useEffect(() => { fetchProducts(); }, []);

  function onEdit(p) {
    setEditing(p.id);
    setForm({ ...p });
  }
  function onCancel() {
    setEditing(null);
    setForm({ name: "", price: "", description: "", image: "" });
  }
  function onChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }
  function onSave() {
    const method = editing ? "PUT" : "POST";
    const url = editing
      ? `${API_URL}/api/admin/products/${editing}`
      : `${API_URL}/api/admin/products`;
    fetch(url, {
      method,
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}` },
      body: JSON.stringify(form)
    })
      .then(() => { fetchProducts(); onCancel(); });
  }
  function onDelete(id) {
    if (window.confirm("Fshije këtë produkt?"))
      fetch(`${API_URL}/api/admin/products/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${TOKEN}` }
      }).then(fetchProducts);
  }

  return (
    <div>
      <h3>Menaxho Produktet</h3>
      <div style={{ margin: "18px 0", padding: 16, background: "#fafafa", borderRadius: 8 }}>
        <input name="name" value={form.name} onChange={onChange} placeholder="Emri" style={inputStyle} />
        <input name="price" value={form.price} onChange={onChange} placeholder="Çmimi" style={inputStyle} />
        <input name="description" value={form.description} onChange={onChange} placeholder="Përshkrimi" style={inputStyle} />
        <input name="image" value={form.image} onChange={onChange} placeholder="Link Foto" style={inputStyle} />
        {editing ? (
          <>
            <button onClick={onSave} style={saveBtn}>Ruaj Ndryshimet</button>
            <button onClick={onCancel} style={cancelBtn}>Anulo</button>
          </>
        ) : (
          <button onClick={onSave} style={saveBtn}>Shto Produkt</button>
        )}
      </div>
      <table style={{ width: "100%", background: "#fff", borderRadius: 7, boxShadow: "0 1px 6px #112f4b10", overflow: "hidden" }}>
        <thead>
          <tr style={{ background: "#f8f8f8" }}>
            <th>ID</th>
            <th>Emri</th>
            <th>Çmimi</th>
            <th>Foto</th>
            <th>Përshkrimi</th>
            <th>Veprime</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <tr><td colSpan={6}>Duke ngarkuar...</td></tr> : products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>€{p.price}</td>
              <td>{p.image && <img src={p.image} alt="" style={{ width: 42, borderRadius: 4 }} />}</td>
              <td style={{ maxWidth: 210 }}>{p.description}</td>
              <td>
                <button onClick={() => onEdit(p)} style={actionBtn}>Edito</button>
                <button onClick={() => onDelete(p.id)} style={actionBtnDel}>Fshij</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const inputStyle = { marginRight: 12, padding: "7px 12px", borderRadius: 6, border: "1px solid #ddd", marginBottom: 8 };
const saveBtn = { padding: "8px 22px", background: "#ff8000", color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, marginRight: 7, cursor: "pointer" };
const cancelBtn = { padding: "8px 12px", background: "#eee", border: "none", borderRadius: 6, fontWeight: 600, color: "#555", cursor: "pointer" };
const actionBtn = { padding: "6px 13px", marginRight: 5, background: "#eee", border: "none", borderRadius: 6, fontWeight: 600, cursor: "pointer" };
const actionBtnDel = { ...actionBtn, background: "#ffb5b5", color: "#a00" };
