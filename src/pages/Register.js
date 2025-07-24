// src/pages/Register.jsx
import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || 'Gabim gjatë regjistrimit');
      } else {
        navigate('/login');
      }
    } catch {
      setError('Gabim gjatë lidhjes me serverin');
    }
  };

  return (
    <Box /* stilat tuaja */>
      <Paper /* … */>
        <Typography variant="h5" color="#ff6600">Krijo një llogari të re</Typography>
        <form onSubmit={handleSubmit}>
          <TextField name="name" label="Emri" onChange={handleChange} fullWidth required />
          <TextField name="email" label="Email" type="email" onChange={handleChange} fullWidth required />
          <TextField name="password" label="Fjalëkalimi" type="password" onChange={handleChange} fullWidth required />
          <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: '#ff6600' }}>
            Regjistrohu
          </Button>
        </form>
        {error && <Typography color="error">{error}</Typography>}
        <Typography>
          Ke llogari? <span onClick={() => navigate('/login')}>Kyçu</span>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Register;
