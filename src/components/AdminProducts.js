import React, { useEffect, useState } from "react";
import {
  Box, Paper, Typography, Table, TableHead, TableBody, TableRow, TableCell,
  Button, TextField, IconButton, Dialog, DialogTitle, DialogActions, DialogContent
} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

const API_URL = process.env.REACT_APP_API_URL;

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "" });
  const [editProduct, setEditProduct] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const token = localStorage.getItem("token");

  const refresh = () => {
    fetch(`${API_URL}/api/admin/products`, {
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include"
    })
      .then(res => res.json())
      .then(setProducts);
  };

  useEffect(() => {
    refresh();
  }, [token]);

  const handleAdd = async (e) => {
    e.preventDefault();
    await fetch(`${API_URL}/api/admin/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: form.name,
        price: parseFloat(form.price),
        category: form.category
      }),
      credentials: "include"
    });
    setForm({ name: "", price: "", category: "" });
    refresh();
  };

  const handleDelete = async () => {
    await fetch(`${API_URL}/api/admin/products/${deleteId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include"
    });
    setDeleteId(null);
    refresh();
  };

  const startEdit = (product) => {
    setEditProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category
    });
  };

  const saveEdit = async () => {
    if (!editProduct) return;
    await fetch(`${API_URL}/api/admin/products/${editProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: editProduct.name,
        price: editProduct.price,
        category: editProduct.category,
      }),
      credentials: "include"
    });
    setEditProduct(null);
    refresh();
  };

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", mt: 7 }}>
      <Typography variant="h4" fontWeight={700} mb={4}>Menaxho Produktet</Typography>
      <Paper sx={{ p: 2, mb: 4, display: "flex", gap: 2 }}>
        <TextField
          label="Emri *"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
          sx={{ flex: 1, bgcolor: "#fff" }}
        />
        <TextField
          label="Çmimi *"
          type="number"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
          required
          sx={{ flex: 1, bgcolor: "#fff" }}
        />
        <TextField
          label="Kategoria *"
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
          required
          sx={{ flex: 1, bgcolor: "#fff" }}
        />
        <Button
          onClick={handleAdd}
          variant="contained"
          sx={{ bgcolor: "#ff8000", color: "#fff", px: 4, borderRadius: 2, fontWeight: 700, "&:hover": { bgcolor: "#e67200" } }}
        >
          SHTO
        </Button>
      </Paper>
      <Paper sx={{ borderRadius: 3, boxShadow: 2, p: 1 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#ff800010" }}>
              <TableCell>ID</TableCell>
              <TableCell>Emri</TableCell>
              <TableCell>Çmimi</TableCell>
              <TableCell>Kategoria</TableCell>
              <TableCell align="center">Veprim</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell align="center">
                  <IconButton color="warning" onClick={() => startEdit(p)}><EditIcon /></IconButton>
                  <IconButton color="error" onClick={() => setDeleteId(p.id)}><DeleteOutlineIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Dialog open={!!editProduct} onClose={() => setEditProduct(null)}>
        <DialogTitle>Ndrysho Produktin</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Emri"
            value={editProduct?.name || ""}
            onChange={e => setEditProduct({ ...editProduct, name: e.target.value })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Çmimi"
            type="number"
            value={editProduct?.price || ""}
            onChange={e => setEditProduct({ ...editProduct, price: e.target.value })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Kategoria"
            value={editProduct?.category || ""}
            onChange={e => setEditProduct({ ...editProduct, category: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button startIcon={<CloseIcon />} onClick={() => setEditProduct(null)}>Anulo</Button>
          <Button startIcon={<SaveIcon />} onClick={saveEdit} sx={{ bgcolor: "#ff8000", color: "#fff", "&:hover": { bgcolor: "#e67200" } }}>Ruaj</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogTitle>Je i sigurt që do ta fshish këtë produkt?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)} color="inherit">Anulo</Button>
          <Button onClick={handleDelete} color="error" variant="contained" sx={{ background: "#ff8000" }}>Fshi</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AdminProducts;
