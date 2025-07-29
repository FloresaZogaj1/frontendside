import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const API_URL = process.env.REACT_APP_API_URL || "https://backendd-t-production-f7ae.up.railway.app";
const TOKEN = localStorage.getItem("token");

export default function AdminProductsAdvanced() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => { fetchProducts(); }, []);

  function fetchProducts() {
    setLoading(true);
    fetch(`${API_URL}/api/admin/products`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    })
      .then(r => r.json())
      .then(setProducts)
      .finally(() => setLoading(false));
  }

  // Filter/search logic
  const filtered = products.filter(p =>
    (!search || p.name.toLowerCase().includes(search.toLowerCase())) &&
    (!filter || (p.category && p.category === filter))
  );

  // Get unique categories for filter dropdown
  const categories = [...new Set(products.map(p => p.category).filter(Boolean))];

  return (
    <div>
      <h3>Menaxho Produktet (Advanced)</h3>
      <div style={{ display: "flex", gap: 16, marginBottom: 18 }}>
        <TextField
          size="small"
          label="Kërko produkt"
          value={search}
          onChange={e => setSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <select value={filter} onChange={e => setFilter(e.target.value)} style={{ padding: "7px 16px", borderRadius: 6 }}>
          <option value="">Të gjitha kategoritë</option>
          {categories.map(cat => <option value={cat} key={cat}>{cat}</option>)}
        </select>
      </div>
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Emri</TableCell>
              <TableCell>Kategoria</TableCell>
              <TableCell>Çmimi</TableCell>
              <TableCell>Foto</TableCell>
              <TableCell>Veprime</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={6}>Duke ngarkuar...</TableCell></TableRow>
            ) : filtered.length === 0 ? (
              <TableRow><TableCell colSpan={6}>Nuk u gjet asnjë produkt!</TableCell></TableRow>
            ) : filtered.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell>€{p.price}</TableCell>
                <TableCell>
                  {p.image && <img src={p.image} alt="" style={{ width: 45, borderRadius: 6 }} />}
                </TableCell>
                <TableCell>
                  <IconButton><EditIcon color="primary" /></IconButton>
                  <IconButton><DeleteIcon color="error" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
