import React, { useEffect, useState } from "react";
import {
  Box, Typography, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, TextField, IconButton, CircularProgress
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

const API_URL = process.env.REACT_APP_API_URL || "https://backendd-t-production.up.railway.app";

function AdminWarrantyPanel() {
  const [warranties, setWarranties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Merr JWT nga localStorage
const token = localStorage.getItem("token");

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/api/admin/warranty`, {
      headers: { Authorization: "Bearer " + token }
    })
      .then(res => res.json())
      .then(data => {
        setWarranties(data);
        setFiltered(data);
        setLoading(false);
      }).catch(() => setLoading(false));
  }, [refresh]);

  // Filtrimi bazik (mund ta zgjerosh)
  useEffect(() => {
    if (!search) return setFiltered(warranties);
    setFiltered(warranties.filter(w =>
      Object.values(w).some(v =>
        String(v).toLowerCase().includes(search.toLowerCase())
      )
    ));
  }, [search, warranties]);

  // Fshi warranty
  const handleDelete = id => {
    if (!window.confirm("A je i sigurt që do ta fshish këtë garancion?")) return;
    fetch(`${API_URL}/api/admin/warranty/${id}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token }
    })
      .then(res => res.json())
      .then(() => setRefresh(r => !r));
  };

  return (
    <Box sx={{ maxWidth: 1350, mx: "auto", mt: 3, p: 2 }}>
      <Typography variant="h5" fontWeight={700} mb={2}>Menaxho Garancionet</Typography>
      <Paper sx={{ mb: 3, p: 2, borderRadius: 2 }}>
        <TextField
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Kërko garancione..."
          size="small"
          InputProps={{ endAdornment: <SearchIcon sx={{ color: "#bbb" }} /> }}
          sx={{ width: 350 }}
        />
      </Paper>
      {loading
        ? <Box sx={{ textAlign: "center", mt: 5 }}><CircularProgress /></Box>
        : (
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Emri</TableCell>
                  <TableCell>Mbiemri</TableCell>
                  <TableCell>Telefoni</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Marka</TableCell>
                  <TableCell>Modeli</TableCell>
                  <TableCell>IMEI</TableCell>
                  <TableCell>Kohezgjatja</TableCell>
                  <TableCell>Çmimi</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Lloji Pagesës</TableCell>
                  <TableCell>Veprime</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={13} align="center">
                      Nuk ka garancione në sistem.
                    </TableCell>
                  </TableRow>
                ) : filtered.map(w => (
                  <TableRow key={w.id}>
                    <TableCell>{w.id}</TableCell>
                    <TableCell>{w.emri}</TableCell>
                    <TableCell>{w.mbiemri}</TableCell>
                    <TableCell>{w.telefoni}</TableCell>
                    <TableCell>{w.email}</TableCell>
                    <TableCell>{w.marka}</TableCell>
                    <TableCell>{w.modeli}</TableCell>
                    <TableCell>{w.imei}</TableCell>
                    <TableCell>{w.kohezgjatja}</TableCell>
                    <TableCell>{w.cmimi}</TableCell>
                    <TableCell>{w.data && w.data.substring(0,10)}</TableCell>
                    <TableCell>{w.llojiPageses}</TableCell>
                    <TableCell>
                      <IconButton color="error" onClick={() => handleDelete(w.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )
      }
    </Box>
  );
}

export default AdminWarrantyPanel;
