import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, MenuItem, Select, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DoneIcon from "@mui/icons-material/Done";
import BlockIcon from "@mui/icons-material/Block";

const API_URL = process.env.REACT_APP_API_URL || "https://backendd-t-production-f7ae.up.railway.app";
const TOKEN = localStorage.getItem("token");

export default function AdminOrdersAdvanced() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => { fetchOrders(); }, []);

  function fetchOrders() {
    setLoading(true);
    fetch(`${API_URL}/api/admin/orders`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    })
      .then(r => r.json())
      .then(setOrders)
      .finally(() => setLoading(false));
  }

  // Search/filter
  const filtered = orders.filter(o =>
    (!search || (o.user && o.user.email && o.user.email.toLowerCase().includes(search.toLowerCase()))) &&
    (!status || o.status === status)
  );

  const statuses = [...new Set(orders.map(o => o.status).filter(Boolean))];

  function updateStatus(orderId, status) {
    fetch(`${API_URL}/api/admin/orders/${orderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}` },
      body: JSON.stringify({ status })
    }).then(fetchOrders);
  }

  return (
    <div>
      <h3>Porositë (Advanced)</h3>
      <div style={{ display: "flex", gap: 18, marginBottom: 14 }}>
        <TextField
          size="small"
          label="Kërko përdorues"
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
        <Select value={status} onChange={e => setStatus(e.target.value)} displayEmpty size="small">
          <MenuItem value="">Të gjitha statuset</MenuItem>
          {statuses.map(s => <MenuItem value={s} key={s}>{s}</MenuItem>)}
        </Select>
      </div>
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Përdoruesi</TableCell>
              <TableCell>Produkte</TableCell>
              <TableCell>Totali (€)</TableCell>
              <TableCell>Statusi</TableCell>
              <TableCell>Veprime</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={6}>Duke ngarkuar...</TableCell></TableRow>
            ) : filtered.length === 0 ? (
              <TableRow><TableCell colSpan={6}>Nuk u gjet asnjë porosi!</TableCell></TableRow>
            ) : filtered.map((o) => (
              <TableRow key={o.id}>
                <TableCell>{o.id}</TableCell>
                <TableCell>{o.user?.email || "Anonim"}</TableCell>
                <TableCell>
                  {o.products.map(p => (
                    <div key={p.id}>{p.name} × {p.quantity}</div>
                  ))}
                </TableCell>
                <TableCell>€{o.totalAmount?.toFixed(2) || o.total || "?"}</TableCell>
                <TableCell>{o.status}</TableCell>
                <TableCell>
                  <IconButton onClick={() => updateStatus(o.id, "delivered")}><DoneIcon color="success" /></IconButton>
                  <IconButton onClick={() => updateStatus(o.id, "cancelled")}><BlockIcon color="error" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
