import React, { useState, useContext } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { AuthContext } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL;

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include"   // KJO ESHTE E RENDESISHME!
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Regjistrimi i suksesshëm!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setMessage(data.message || "Gabim në regjistrim");
      }
    } catch {
      setMessage("Gabim në lidhje me serverin!");
    }
  };

  return (
    <Box minHeight="100vh" bgcolor="#f5f7fa" display="flex" alignItems="center" justifyContent="center">
      <Paper elevation={2} sx={{ p: 4, minWidth: 350, borderRadius: 4 }}>
        <Typography variant="h4" color="primary" mb={2} fontWeight={700}>
          <span style={{ color: "#FF7200" }}>topmobile</span>
        </Typography>
        <Typography variant="subtitle1" align="center" mb={3}>
          Krijo një llogari të re
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Emri"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
            margin="dense"
          />
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
            margin="dense"
          />
          <TextField
            label="Fjalëkalimi"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            fullWidth
            margin="dense"
          />
          {message && (
            <Typography color={message.startsWith("Regjistrimi") ? "primary" : "error"} fontSize={14} mt={1}>
              {message}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, bgcolor: "#FF7200", "&:hover": { bgcolor: "#e65c00" } }}
          >
            Regjistrohu
          </Button>
        </Box>
        <Box mt={2} textAlign="center">
          <Typography fontSize={14}>
            Ke llogari?{" "}
            <Link to="/login" style={{ color: "#FF7200" }}>
              Kyçu
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Register;
