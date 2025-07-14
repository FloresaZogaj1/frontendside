import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem, Paper, Alert, Select, FormControl, InputLabel } from "@mui/material";

// --- Të dhënat për Dropdown ---
const deviceData = {
  Apple: [
    ...(
      [
        "iPhone 12", "iPhone 12 mini", "iPhone 12 Pro", "iPhone 12 Pro Max",
        "iPhone 13", "iPhone 13 mini", "iPhone 13 Pro", "iPhone 13 Pro Max",
        "iPhone SE (3rd gen)", "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
        "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max",
        "iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max", "iPhone 16e",
        "iPad (8th gen)", "iPad (9th gen)", "iPad (10th gen)", "iPad mini (6th gen)",
        "iPad Air (4th gen)", "iPad Air (5th gen)", "iPad Pro 11″ (2020)", "iPad Pro 12.9″ (2020)",
        "iPad Pro 11″ (2021)", "iPad Pro 12.9″ (2021)", "iPad Pro 11″ (M2 2022)", "iPad Pro 12.9″ (M2 2022)",
        "Apple Watch Series 6", "Apple Watch SE (1st gen)", "Apple Watch Series 7", "Apple Watch Series 8",
        "Apple Watch SE (2nd gen)", "Apple Watch Ultra", "Apple Watch Series 9", "Apple Watch Ultra 2", "Apple Watch Series 10"
      ]
    )
  ],
  Samsung: [
    ...(
      [
        // S, A, M, F, Z Fold/Flip, Tab, Watch (të gjitha modelet në një listë)
        "Galaxy S20", "Galaxy S20+", "Galaxy S20 Ultra", "Galaxy S20 FE / FE 5G",
        "Galaxy S21", "Galaxy S21+", "Galaxy S21 Ultra", "Galaxy S21 FE",
        "Galaxy S22", "Galaxy S22+", "Galaxy S22 Ultra", "Galaxy S23", "Galaxy S23+", "Galaxy S23 Ultra", "Galaxy S23 FE",
        "Galaxy S24", "Galaxy S24+", "Galaxy S24 Ultra", "Galaxy S24 FE", "Galaxy S25", "Galaxy S25+", "Galaxy S25 Ultra", "Galaxy S25 Edge", "Galaxy S25 Ultra Enterprise Edition",
        "Galaxy A25", "Galaxy A26 5G", "Galaxy A33", "Galaxy A34", "Galaxy A35", "Galaxy A52", "Galaxy A53", "Galaxy A54", "Galaxy A55", "Galaxy A56",
        "Galaxy F05", "Galaxy F14", "Galaxy F15", "Galaxy F34", "Galaxy F54", "Galaxy F55",
        "Galaxy M05", "Galaxy M14", "Galaxy M15", "Galaxy M33", "Galaxy M34", "Galaxy M35", "Galaxy M53", "Galaxy M54", "Galaxy M55", "Galaxy M55s",
        "Galaxy Z Fold 2", "Galaxy Z Fold 3", "Galaxy Z Fold 4", "Galaxy Z Fold 5", "Galaxy Z Fold 6", "Galaxy Z Fold 7",
        "Galaxy Z Flip", "Galaxy Z Flip 3", "Galaxy Z Flip 4", "Galaxy Z Flip 5", "Galaxy Z Flip 6", "Galaxy Z Flip 7", "Galaxy Z Flip 7 FE",
        "Galaxy Tab S6 Lite", "Galaxy Tab S7", "Galaxy Tab S7+", "Galaxy Tab S7 FE",
        "Galaxy Tab S8", "Galaxy Tab S8+", "Galaxy Tab S8 Ultra", "Galaxy Tab S9", "Galaxy Tab S9+", "Galaxy Tab S9 Ultra",
        "Galaxy Tab S10", "Galaxy Tab S10+", "Galaxy Tab S10 Ultra",
        "Galaxy Watch Active2", "Galaxy Watch 3", "Galaxy Watch 4", "Galaxy Watch 4 Classic",
        "Galaxy Watch 5", "Galaxy Watch 5 Pro", "Galaxy Watch 6", "Galaxy Watch 6 Classic",
        "Galaxy Watch 7", "Galaxy Watch 8", "Galaxy Watch 8 Classic", "Galaxy Watch Ultra"
      ]
    )
  ],
  Xiaomi: [
    ...(
      [
        "Mi 10", "Mi 10 Pro", "Mi 10 Lite", "Mi 10T", "Mi 10T Pro", "Mi 11", "Mi 11 Pro", "Mi 11 Ultra", "Mi 11 Lite", "Mi 11X",
        "Mi 12", "Mi 12 Pro", "Mi 12X", "Mi 12T", "Mi 12T Pro", "Mi 13", "Mi 13 Pro", "Mi 13 Ultra", "Mi 13 Lite",
        "Mi 14", "Mi 14 Pro", "Mi 14 Ultra", "Xiaomi 15 Ultra", "Redmi Note 10", "Redmi Note 10 Pro", "Redmi Note 10 Pro Max", "Redmi Note 10 5G",
        "Redmi Note 11", "Redmi Note 11 Pro", "Redmi Note 11 Pro+", "Redmi Note 12", "Redmi Note 12 Pro", "Redmi Note 12 Pro+", "Redmi Note 12 Turbo", "Redmi Note 12S", "Redmi Note 12 5G",
        "Redmi Note 13", "Redmi Note 13 Pro", "Redmi Note 13 Pro+", "Redmi Note 13 R", "Redmi Note 13 5G", "Redmi Note 14", "Redmi Note 14 Pro", "Redmi Note 14 Pro+", "Redmi Note 14 Pro+ 5G",
        "Redmi K40 Gaming", "Redmi K40S", "Redmi K50", "Redmi K50 Pro", "Redmi K50 Ultra", "Redmi K50i", "Redmi K60", "Redmi K60 Pro", "Redmi K60 Ultra", "Redmi K70", "Redmi K70 Pro", "Redmi K70 Ultra",
        "Poco F2 Pro", "Poco F3", "Poco F4", "Poco F5", "Poco F5 Pro", "Poco M7 Pro 5G", "Poco X3", "Poco X3 Pro", "Poco X4 GT", "Poco X5 Pro", "Poco X6", "Poco X6 Pro", "Poco X7", "Poco X7 Neo", "Poco X7 Pro", "Poco X7 Ultra",
        "Xiaomi Pad 5", "Xiaomi Pad 5 Pro", "Xiaomi Pad 6", "Xiaomi Pad 6 Pro", "Xiaomi Pad 6 Max 14", "Redmi Pad", "Redmi Pad SE 8.7", "Redmi Pad Pro",
        "Mi Watch", "Mi Watch Lite", "Mi Watch Revolve", "Xiaomi Watch S1", "Watch S1 Active", "Xiaomi Watch 2", "Watch 2 Pro", "Xiaomi Watch S4",
        "Mi Smart Band 5", "6", "7", "Xiaomi Smart Band 8", "9 Pro"
      ]
    )
  ]
};

// --- Versionet software sipas markës ---
const softwareVersions = {
  Apple: [
    "iOS 14 – 2020",
    "iOS 15 – 2021",
    "iOS 16 – 2022",
    "iOS 17 – 2023",
    "iOS 18 – 2024 (aktual për iPhone 16)",
    "iPadOS 14 – 2020",
    "iPadOS 15 – 2021",
    "iPadOS 16 – 2022",
    "iPadOS 17 – 2023",
    "iPadOS 18 – 2024 (aktual për iPad Pro M2 dhe të tjerë)",
    "watchOS 7 – 2020",
    "watchOS 8 – 2021",
    "watchOS 9 – 2022",
    "watchOS 10 – 2023",
    "watchOS 11 – 2024 (aktual për Apple Watch Series 10)"
  ],
  Samsung: [
    "Android 10 + One UI 2.x – 2020",
    "Android 11 + One UI 3.x – 2021",
    "Android 12 + One UI 4.x – 2022",
    "Android 13 + One UI 5.x – 2023",
    "Android 14 + One UI 6.x – 2024",
    "Android 15 + One UI 7.x – 2025 (në testim për S24, Fold 5, etj)",
    "Tizen OS 5.5 – 2020 (Galaxy Watch 3)",
    "Wear OS 3 (me One UI Watch) – 2021–2023 (Galaxy Watch 4, 5)",
    "Wear OS 4 – 2023 (Galaxy Watch 6, 6 Classic)",
    "Wear OS 5 – 2024–2025 (për Galaxy Watch 7/8)"
  ],
  Xiaomi: [
    "MIUI 12 – 2020 (bazuar në Android 10/11)",
    "MIUI 12.5 – 2021",
    "MIUI 13 – 2022 (bazuar në Android 12)",
    "MIUI 14 – 2023 (bazuar në Android 13/14)",
    "HyperOS 1.0 – 2023 fund / 2024 fillim",
    "HyperOS 2.0 – 2024 fund / 2025 fillim (aktual për Xiaomi 15 Ultra, Redmi Note 14)",
    "RTOS – deri 2022 (Mi Band 6, Mi Watch Lite)",
    "Zepp OS 1.0 – 2022 (Watch S1)",
    "Zepp OS 2.0 – 2023 (Xiaomi Watch S1 Pro, Smart Band 7 Pro)",
    "HyperOS for Watch – 2024 (modelët e rinj premium Xiaomi Watch 2/4)"
  ]
};

const llojetPageses = [
  { value: "Cash", label: "Cash" },
  { value: "Transfer Bankar", label: "Transfer Bankar" },
  { value: "POS", label: "POS" }
];

const kohezgjatjaOptions = Array.from({ length: 24 }, (_, i) => ({
  value: `${i + 1} muaj`,
  label: `${i + 1} muaj`
}));

const Mirembajtja = () => {
  const [form, setForm] = useState({
    emri: "",
    mbiemri: "",
    telefoni: "",
    email: "",
    marka: "",
    modeli: "",
    imei: "",
    softInfo: "",
    kohezgjatja: "",
    cmimi: "",
    data: "",
    komente: "",
    llojiPageses: "Cash"
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const validateIMEI = imei => /^\d{14}$/.test(imei);
  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = tel => /^\d{8,}$/.test(tel.trim());
  const requireContact = () => (!!form.email && validateEmail(form.email)) || (!!form.telefoni && validatePhone(form.telefoni));

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
    setIsPaid(false);
  };

  const handleMarkaChange = e => {
    setForm({ ...form, marka: e.target.value, modeli: "", softInfo: "" });
  };

  const handleModeliChange = e => {
    setForm({ ...form, modeli: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.emri) return setError("Shkruani emrin.");
    if (!form.mbiemri) return setError("Shkruani mbiemrin.");
    if (!requireContact()) return setError("Vendosni një numër telefoni ose një email të vlefshëm.");
    if (!form.marka || !form.modeli) return setError("Zgjidhni pajisjen dhe modelin.");
    if (!form.imei || !validateIMEI(form.imei)) return setError("IMEI duhet të jetë saktësisht 14 shifra.");
    if (!form.softInfo) return setError("Zgjidhni versionin e softuerit.");
    if (!form.kohezgjatja) return setError("Zgjidhni kohëzgjatjen e garancionit.");
    if (!form.cmimi) return setError("Shkruani çmimin.");
    if (!form.data) return setError("Zgjidhni datën.");
    if (!form.llojiPageses) return setError("Zgjidhni llojin e pagesës.");
    exportToCSV();
    setSuccess("Draft u ruajt me sukses si Excel (CSV).");
  };

  const exportToCSV = () => {
    const headers = [
      "Emri", "Mbiemri", "Numri i telefonit", "Email", "Marka", "Modeli",
      "IMEI", "Software Info", "Kohëzgjatja Garancionit", "Çmimi", "Data", "Komente", "Lloji Pagesës"
    ];
    const formattedDate = form.data.replace(/-/g, "/");
    const rows = [[
      form.emri, form.mbiemri, form.telefoni, form.email, form.marka, form.modeli,
      form.imei, form.softInfo, form.kohezgjatja, form.cmimi, formattedDate, form.komente, form.llojiPageses
    ]];
    let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\r\n";
    rows.forEach(rowArray => {
      let row = rowArray.map(field => `"${field}"`).join(",");
      csvContent += row + "\r\n";
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    const fileName = `Garancion_${form.emri}_${form.mbiemri}_${formattedDate}.csv`;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const modelet = form.marka ? deviceData[form.marka] : [];
  const softwareOpts = form.marka ? softwareVersions[form.marka] : [];

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 6, p: 4 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Kontratë për Mirembajtje 
      </Typography>
      <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <TextField label="Emri *" name="emri" value={form.emri} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Mbiemri *" name="mbiemri" value={form.mbiemri} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Numri i telefonit" name="telefoni" value={form.telefoni} onChange={handleChange} fullWidth sx={{ mb: 2 }} inputProps={{ inputMode: "numeric", pattern: "\\d{8,}" }} />
        <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth sx={{ mb: 2 }} />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Marka *</InputLabel>
          <Select value={form.marka} name="marka" onChange={handleMarkaChange} label="Marka *">
            <MenuItem value=""><em>Zgjidh</em></MenuItem>
            <MenuItem value="Apple">🍏 Apple</MenuItem>
            <MenuItem value="Samsung">📱 Samsung</MenuItem>
            <MenuItem value="Xiaomi">📱 Xiaomi</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }} disabled={!form.marka}>
          <InputLabel>Modeli *</InputLabel>
          <Select value={form.modeli} name="modeli" onChange={handleModeliChange} label="Modeli *">
            <MenuItem value=""><em>Zgjidh</em></MenuItem>
            {modelet.map(modeli => (
              <MenuItem key={modeli} value={modeli}>{modeli}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="IMEI (14 shifra) *"
          name="imei"
          value={form.imei}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          inputProps={{ maxLength: 14, inputMode: "numeric", pattern: "\\d{14}" }}
          helperText="Lejohet vetëm 14 shifra"
        />

        <FormControl fullWidth sx={{ mb: 2 }} disabled={!form.marka}>
          <InputLabel>Software Info *</InputLabel>
          <Select value={form.softInfo} name="softInfo" onChange={handleChange} label="Software Info *">
            <MenuItem value=""><em>Zgjidh</em></MenuItem>
            {softwareOpts.map(sw => (
              <MenuItem key={sw} value={sw}>{sw}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Kohëzgjatja e garancionit *</InputLabel>
          <Select value={form.kohezgjatja} name="kohezgjatja" onChange={handleChange} label="Kohëzgjatja e garancionit *">
            <MenuItem value=""><em>Zgjidh</em></MenuItem>
            {kohezgjatjaOptions.map(opt => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField label="Çmimi (€) *" name="cmimi" value={form.cmimi} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Data e fillimit të garancionit *" name="data" type="date" value={form.data} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} />
        <TextField label="Komente" name="komente" value={form.komente} onChange={handleChange} fullWidth multiline rows={2} sx={{ mb: 2 }} />

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Lloji i pagesës *</InputLabel>
          <Select value={form.llojiPageses} name="llojiPageses" onChange={handleChange} label="Lloji i pagesës *">
            {llojetPageses.map(opt => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
          <Button variant="contained" color="warning" fullWidth onClick={handleSubmit}>
            Ruaj Draft si Excel (CSV)
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Mirembajtja;
