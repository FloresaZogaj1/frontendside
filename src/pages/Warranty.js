import React, { useState } from "react";
import {
  Box, Typography, TextField, Button, MenuItem, Paper, Alert, Select, FormControl, InputLabel
} from "@mui/material";
import logo from "../assets/PFP-01__5_-removebg-preview.png"; // ndrysho path sipas projektit

function getTodayDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

const deviceData = {
  Apple: [
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
  ],
  Samsung: [
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
  ],
  Xiaomi: [
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
};

const softwareVersions = {
  Apple: [
    "iOS 14 – 2020", "iOS 15 – 2021", "iOS 16 – 2022", "iOS 17 – 2023", "iOS 18 – 2024 ",
    "iPadOS 14 – 2020", "iPadOS 15 – 2021", "iPadOS 16 – 2022", "iPadOS 17 – 2023", "iPadOS 18 – 2024 ",
    "watchOS 7 – 2020", "watchOS 8 – 2021", "watchOS 9 – 2022", "watchOS 10 – 2023", "watchOS 11 – 2024 "
  ],
  Samsung: [
    "Android 10 + One UI 2.x – 2020", "Android 11 + One UI 3.x – 2021", "Android 12 + One UI 4.x – 2022", "Android 13 + One UI 5.x – 2023",
    "Android 14 + One UI 6.x – 2024", "Android 15 + One UI 7.x – 2025 ",
    "Tizen OS 5.5 – 2020 (Galaxy Watch 3)", "Wear OS 3 (me One UI Watch) – 2021–2023 (Galaxy Watch 4, 5)", "Wear OS 4 – 2023 (Galaxy Watch 6, 6 Classic)", "Wear OS 5 – 2024–2025 "
  ],
  Xiaomi: [
    "MIUI 12 – 2020 ", "MIUI 12.5 – 2021", "MIUI 13 – 2022 ", "MIUI 14 – 2023 ",
    "HyperOS 1.0 –", "HyperOS 2.0 –  ",
    "RTOS – deri 2022 ", "Zepp OS 1.0 – 2022 (Watch S1)", "Zepp OS 2.0 – 2023 ", "HyperOS for Watch – 2024 "
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

const warrantyCSS = `
  ..warranty-sheet {
  font-family: 'Arial', sans-serif;
  width: 630px; /* më e ngushtë, fletë A4 */
  margin: 0 auto;
  background: #fff;
  color: #222;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 14px #0000000a;
  padding: 28px 42px 28px 42px; /* më shumë hapësirë djathtas/majtas */
}

.warranty-logo-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.warranty-logo-row img { height: 52px; }
.warranty-header {
  text-align: center;
  margin: 14px 0 18px 0;
  font-size: 1.15rem;
  font-weight: bold;
  letter-spacing: 1px;
}
.warranty-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 0 38px;
  margin-bottom: 12px;
}
.warranty-label {
  font-weight: bold;
  min-width: 100px;
  display: inline-block;
  margin-right: 3px;
}
.warranty-details-row { margin-bottom: 8px; font-size: 1rem; }
.warranty-grid > div:last-child {
  padding-right: 10px; /* HAPËSIRË ekstra te anët e djathta */
}
.warranty-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  margin-bottom: 16px;
  font-size: 1rem;
}
.warranty-table th, .warranty-table td {
  border: 1px solid #bfbfbf;
  padding: 5px 7px;
  text-align: center;
}
.warranty-table th { background: #f5f5f5; font-weight: bold; }
.warranty-section-title { margin-top: 16px; font-size: 1.04rem; font-weight: 700; }
.warranty-kushtet {
  font-size: 0.97rem;
  line-height: 1.7;
  margin-bottom: 0;
  margin-top: 10px;
}
.warranty-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
  align-items: end;
  font-size: 0.95rem;
}
.warranty-sign {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 200px;
}
.warranty-sign-line {
  border-bottom: 1.5px solid #222;
  width: 140px;
  margin-bottom: 2px;
  margin-left: auto;
}
.warranty-sign-label {
  font-size: 0.98rem;
  color: #595959;
  margin-right: 5px;
  white-space: nowrap;
}
@media print {
  body * { visibility: hidden; }
  .warranty-sheet, .warranty-sheet * { visibility: visible !important; }
  .warranty-sheet { position: absolute; left: 0; top: 0; width: 100vw !important; box-shadow: none; border: none; }
}
`;

const Warranty = () => {
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
    data: getTodayDate(),
    komente: "",
    llojiPageses: "Cash"
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPrint, setShowPrint] = useState(false);

  const validateIMEI = imei => /^\d{14}$/.test(imei);
  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = tel => /^\d{8,}$/.test(tel.trim());
  const requireContact = () =>
    (!!form.email && validateEmail(form.email)) || (!!form.telefoni && validatePhone(form.telefoni));

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleMarkaChange = e => {
    setForm({ ...form, marka: e.target.value, modeli: "", softInfo: "" });
  };
  const handleModeliChange = e => {
    setForm({ ...form, modeli: e.target.value });
  };

  const handlePrint = () => {
    if (!form.emri) return setError("Shkruani emrin.");
    if (!form.mbiemri) return setError("Shkruani mbiemrin.");
    if (!requireContact()) return setError("Vendosni një numër telefoni ose një email të vlefshëm.");
    if (!form.marka || !form.modeli) return setError("Zgjidhni pajisjen dhe modelin.");
    if (!form.imei || !validateIMEI(form.imei)) return setError("IMEI duhet të jetë saktësisht 14 shifra.");
    if (!form.softInfo) return setError("Zgjidhni versionin e softuerit.");
    if (!form.kohezgjatja) return setError("Zgjidhni kohëzgjatjen e garancionit.");
    if (!form.cmimi) return setError("Shkruani çmimin.");
    setShowPrint(true);
    setTimeout(() => {
      window.print();
      setShowPrint(false);
    }, 350);
  };

  // Draft ruhet në localStorage
  const handleDraft = () => {
    localStorage.setItem('warrantyDraft', JSON.stringify(form));
    setSuccess("Drafti është ruajtur me sukses!");
  };

  const modelet = form.marka ? deviceData[form.marka] : [];
  const softwareOpts = form.marka ? softwareVersions[form.marka] : [];

  return (
    <>
      <Box sx={{ maxWidth: 800, mx: "auto", mt: 6, p: 4 }}>
        <Typography variant="h5" fontWeight={700} mb={3}>
          Fletë Garancioni
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
          <TextField label="Data e fillimit të garancionit" name="data" value={form.data} fullWidth sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
          <TextField label="Komente" name="komente" value={form.komente} onChange={handleChange} fullWidth multiline rows={2} sx={{ mb: 2 }} />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Lloji i pagesës *</InputLabel>
            <Select value={form.llojiPageses} name="llojiPageses" onChange={handleChange} label="Lloji i pagesës *">
              {llojetPageses.map(opt => (
                <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row', mt: 1 }}>
            <Button
              variant="contained"
              color="warning"
              onClick={handlePrint}
              sx={{ fontWeight: 700, fontSize: 17, background: "#FF8000" }}
              fullWidth
            >
              PRINTO FLETËN E GARANCIONIT
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleDraft}
              fullWidth
              sx={{ fontWeight: 700, fontSize: 17, border: "2px solid #1976d2" }}
            >
              NË PRITJE
            </Button>
          </Box>
        </Paper>
      </Box>
      {/* PRINT FLETË GARANCIONI */}
      {showPrint && (
        <div style={{ display: "block" }}>
          <style>{warrantyCSS}</style>
          <div className="warranty-sheet">
            <div className="warranty-logo-row">
              <img src={logo} alt="Logo" />
              <div>
                <div style={{ fontWeight: 600 }}>Top Mobile</div>
                <div>Rr. Bulevardi dëshmorët e kombit<br />Ulpianë, Prishtinë</div>
                <div>TEL: 045-407-222</div>
              </div>
            </div>
            <div className="warranty-header">Fletë Garancioni</div>
            <div className="warranty-grid">
              <div className="warranty-grid-row">
                <div>
                  <div className="warranty-details-row"><span className="warranty-label">Klienti:</span> {form.emri} {form.mbiemri}</div>
                  <div className="warranty-details-row"><span className="warranty-label">Data e fillimit te garancionit:</span> {form.data}</div>
                </div>
                <div>
                  <div className="warranty-details-row"><span className="warranty-label">Detajet:</span> Çmimi: {form.cmimi}€</div>
                </div>
              </div>
            </div>
            <table className="warranty-table">
              <thead>
                <tr>
                  <th>Modeli</th>
                  <th>ImeI</th>
                  <th>Software Info</th>
                  <th>Kohëzgjatja e garancionit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{form.modeli}</td>
                  <td>{form.imei}</td>
                  <td>{form.softInfo}</td>
                  <td>{form.kohezgjatja}</td>
                </tr>
              </tbody>
            </table>
            <div className="warranty-section-title">Kushtet e Garancionit</div>
            <div className="warranty-kushtet">
              Periudha e Garancionit fillon nga data e blerjes dhe perfundon ne afatin e shprehur ne Fletë Garancion. Shërbimi i garancionit do te kryhet ne ambientet e servisit te Top Mobile.<br /><br />
              <b>Garancioni mbulon riparimin (kthimin ne gjendje pune) falas te produkteve te shitura nga Top Mobile, duke plotesuar njekohesisht te gjitha kushtet e meposhtme:</b><br />
              - Defekti i produktit eshte me origjine prodhimi / nga fabrika<br />
              - Produkti shoqerohet me Faturen e blerjes dhe Fleten e Garancise<br />
              Top Mobile ka per obligim eleminimin e defektit sa me te shpejte, ne rastin me te keq per nje periudhe 30 ditore.<br /><br />
              <b>Garancioni nuk vlen ne keto raste:</b><br />
              - Demtimet fizike nga keperdorimi, pakujdesia etj<br />
              - Perditësimi i software-sistemit operativ (Update, downgrade) etj<br />
              - Perdorimi i produktit ne ambiente te papershtatshme (lagështi, nxehtësi, etj)<br />
              - Demtimet e shkaktuara nga tensioni i larte apo i ulet i rrymes elektrike, nga demtimet termike apo mekanike rrufeja etj.<br />
              - Demtimet nga ekspozimi i pajisjes ndaj lagështisë, nxehtësisë, tymit, dridhjeve, papastërtive, apo kushteve te jashtëzakonshme apo te papershtatshme.<br />
              - Nëse bleresi nuk e ka flet garancionin.<br />
              - Nëse aparati është hapur dhe është tentuar te riparohet nga person i cili nuk ka autorizim nga servisi i Top Mobile.<br />
            </div>
            <div className="warranty-footer">
              <div><b>Top Mobile</b></div>
              <div className="warranty-sign">
                <span className="warranty-sign-line"></span>
                <span className="warranty-sign-label">Nënshkrimi i klientit</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Warranty;
