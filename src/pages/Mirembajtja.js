import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem, Paper, Alert, Select, FormControl, InputLabel } from "@mui/material";

const llojetPageses = [
  { value: "Cash", label: "Cash" },
  { value: "Transfer Bankar", label: "Transfer Bankar" },
  { value: "POS", label: "POS" }
];

const Mirembajtja = () => {
  const [form, setForm] = useState({
    klienti: "",
    mbiemri: "",
    imei: "",
    llojiPageses: "",
    data: new Date().toISOString().slice(0, 10),
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pending, setPending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
    setPending(false);
  };

  const handlePending = () => {
    if (!form.klienti) return setError("Shkruani emrin e klientit!");
    if (!form.mbiemri) return setError("Shkruani mbiemrin!");
    if (!form.imei || form.imei.length !== 14 || !/^\d{14}$/.test(form.imei)) return setError("IMEI duhet të ketë saktësisht 14 shifra numerike!");
    if (!form.llojiPageses) return setError("Zgjidh llojin e pagesës!");
    setPending(true);
    setSuccess("Kontrata është vendosur në pritje!");
  };

  // Shembull për funksionin e printimit
  const handlePrint = () => {
    window.print();
  };

  return (
    <Box sx={{ maxWidth: 420, mx: "auto", mt: 6 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Kontratë Mirëmbajtjeje Softuerësh
      </Typography>
      <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <TextField
          label="Emri i klientit"
          name="klienti"
          value={form.klienti}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Mbiemri"
          name="mbiemri"
          value={form.mbiemri}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="IMEI (14 shifra)"
          name="imei"
          value={form.imei}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          inputProps={{ maxLength: 14, inputMode: "numeric", pattern: "[0-9]*" }}
          helperText="Shkruani saktësisht 14 shifra të IMEI"
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Lloji i pagesës</InputLabel>
          <Select
            name="llojiPageses"
            value={form.llojiPageses}
            onChange={handleChange}
            label="Lloji i pagesës"
          >
            <MenuItem value=""><em>Zgjidh</em></MenuItem>
            {llojetPageses.map(opt => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Data"
          name="data"
          type="date"
          value={form.data}
          InputProps={{ readOnly: true }}
          fullWidth
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            sx={{ background: "#ff8000", color: "#fff", fontWeight: 700, flex: 1 }}
            onClick={handlePending}
          >
            NË PRITJE
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: "#388e3c", color: "#388e3c", fontWeight: 700, flex: 1 }}
            onClick={handlePrint}
          >
            PRINTO
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Mirembajtja;
