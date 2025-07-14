import React, { useState, useContext } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { AuthContext } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // fshi errorin e vjetër
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      // KONTROLL: Kërko token DHE user nga backend!
      if (res.ok && data.token && data.user) {
        login(data.token, data.user); // KJO është pika kyçe!
        navigate("/profile"); // ose /admin nëse do ta dërgosh direkt atje
      } else {
        setMessage(data.message || "Gabim në login");
      }
    } catch {
      setMessage("Gabim në lidhje me serverin!");
    }
  };

  return (
    <Box
      minHeight="100vh"
      bgcolor="#f5f7fa"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Paper elevation={2} sx={{ p: 4, minWidth: 350, borderRadius: 4 }}>
        <Typography variant="h4" color="primary" mb={2} fontWeight={700}>
          <span style={{ color: "#FF7200" }}>topmobile</span>
        </Typography>
        <Typography variant="subtitle1" align="center" mb={3}>
          Kyçu në llogarinë tënde
        </Typography>

        {/* SOCIAL BUTTONS */}
        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 1, textTransform: "none" }}
          startIcon={
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              width="22"
              alt="google"
            />
          }
          onClick={() =>
            window.location.href = `${process.env.REACT_APP_API_URL}/api/auth/google`
          }
        >
          Identifikohu me Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 2, textTransform: "none" }}
          startIcon={
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              width="22"
              alt="fb"
            />
          }
          disabled
        >
          Identifikohu me Facebook
        </Button>

        <Box component="form" onSubmit={handleSubmit} mt={2}>
          <TextField
            label="Adresa e emailit"
            name="email"
            type="email"
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
            <Typography color="error" fontSize={14} mt={1}>
              {message}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, bgcolor: "#FF7200", "&:hover": { bgcolor: "#e65c00" } }}
          >
            Kyçu
          </Button>
        </Box>
        <Box mt={2} textAlign="center">
          <Typography fontSize={14}>
            Nuk ke llogari?{" "}
            <Link to="/register" style={{ color: "#FF7200" }}>
              Regjistrohu
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
