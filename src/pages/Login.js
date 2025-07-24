// src/pages/Login.jsx
import React, { useState, useContext } from 'react';
import { Box, Paper, Typography, TextField, Button } from '@mui/material';
import { AuthContext } from '../AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok && data.token && data.user) {
        login(data.token, data.user);
        navigate('/profile');
      } else {
        setMessage(data.message || 'Gabim në login');
      }
    } catch {
      setMessage('Gabim gjatë lidhjes me serverin');
    }
  };

  return (
    <Box /* stilat */>
      <Paper /* … */>
        <Typography variant="h5">Kyçu në llogarinë tënde</Typography>
        <form onSubmit={handleSubmit}>
          <TextField name="email" label="Email" type="email" onChange={handleChange} fullWidth required />
          <TextField name="password" label="Fjalëkalimi" type="password" onChange={handleChange} fullWidth required />
          {message && <Typography color="error">{message}</Typography>}
          <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: '#FF7200' }}>
            Kyçu
          </Button>
        </form>
        <Typography>
          Nuk ke llogari? <Link to="/register">Regjistrohu</Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;
