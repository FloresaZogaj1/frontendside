// src/pages/Register.jsx
import React, { useState } from "react";
import { Box, Paper, Typography, TextField, Button, Divider } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "https://backendd-t-production.up.railway.app";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.msg || "Gabim gjatë regjistrimit!");
      } else {
        navigate("/login");
      }
    } catch {
      setError("Gabim gjatë lidhjes me serverin!");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#fafbfc", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper elevation={6} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 4, width: 360, maxWidth: "90vw" }}>
        <Typography variant="h5" mb={1.5} color="#ff6600" fontWeight={700}>Krijo një llogari të re</Typography>
        <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
          <TextField name="name" label="Emri dhe Mbiemri" value={form.name} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField name="email" label="Email" value={form.email} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField name="password" label="Fjalëkalimi" type="password" value={form.password} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: "#ff6600", fontWeight: 700, fontSize: 17, borderRadius: 2 }}>Regjistrohu</Button>
        </form>
        {error && <Typography color="error" align="center" sx={{ mt: 2 }}>{error}</Typography>}
        <Divider sx={{ my: 2 }} />
        <Typography align="center">
          Ke llogari?{" "}
          <span style={{ color: "#ff6600", cursor: "pointer", fontWeight: 600 }} onClick={() => navigate("/login")}>
            Kyçu
          </span>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Register;
