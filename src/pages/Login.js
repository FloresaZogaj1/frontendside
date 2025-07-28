// src/pages/Login.jsx
import React, { useState } from "react";
import { Box, Paper, Typography, TextField, Button, Divider } from "@mui/material";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "https://backendd-t-production.up.railway.app";
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok && data.token && data.user) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirection sipas rolit
        if (data.user.role === "admin") {
          navigate("/warranty");
        } else {
          navigate("/profile");
        }
      } else {
        setError(data.msg || "Gabim në login");
      }
    } catch {
      setError("Gabim gjatë lidhjes me serverin");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await fetch(`${API_URL}/api/auth/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credentialResponse.credential })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirection sipas rolit
        if (data.user.role === "admin") {
          navigate("/warranty");
        } else {
          navigate("/profile");
        }
      } else {
        setError(data.msg || "Gabim me Google login");
      }
    } catch {
      setError("Gabim gjatë lidhjes me Google");
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Box sx={{ minHeight: "100vh", bgcolor: "#fafbfc", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Paper elevation={6} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 4, width: 360, maxWidth: "90vw" }}>
          <Typography variant="h5" mb={1.5} color="#ff6600" fontWeight={700}>Kyçu në llogari</Typography>
          <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
            <TextField name="email" label="Email" value={form.email} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
            <TextField name="password" label="Fjalëkalimi" type="password" value={form.password} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
            <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: "#ff6600", fontWeight: 700, fontSize: 17, borderRadius: 2 }}>Kyçu</Button>
          </form>
          {error && <Typography color="error" align="center" sx={{ mt: 2 }}>{error}</Typography>}

          <Divider sx={{ my: 2 }}>ose</Divider>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError("Kyçja me Google dështoi!")}
              shape="pill"
              width="340px"
              theme="outline"
              locale="en"
              size="large"
              text="signin_with"
            />
          </Box>

          <Typography align="center" sx={{ mt: 2 }}>
            Nuk ke llogari?{" "}
            <span style={{ color: "#ff6600", cursor: "pointer", fontWeight: 600 }} onClick={() => navigate("/register")}>
              Regjistrohu
            </span>
          </Typography>
        </Paper>
      </Box>
    </GoogleOAuthProvider>
  );
}

export default Login;
