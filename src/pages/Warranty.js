import React, { useState } from "react";
import { Box, Typography, TextField, Paper, Button, Divider } from "@mui/material";
import { useAuth } from "../AuthContext";

const kushtetGarancionit = [
  "Garancioni mbulon riparimin (kthimin në gjendje pune) falas te produktet e shitura nga Top Mobile, duke plotësuar njërën nga kushtet e mëposhtme:",
  "Defekti i produktit është me origjinë prodhimi / nga fabrika",
  "Produkti shoqërohet me Faturën e blerjes dhe Fletën e Garancisë",
  "Produkti nuk është hapur nga persona të paautorizuar me shkrim nga Top Mobile",
  "",
  "Top Mobile ka për obligim eliminimin e defektit sa më të shpejtë, në rastin më të keq për një periudhë 30 ditore.",
  "",
  "Garancioni nuk vlen në këto raste:",
  "- Dëmtimet fizike nga keqpërdorimi, pakujdesia etj",
  "- Përditësimi i softuer-sistemit operativ (Update, downgrade) etj.",
  "- Përdorimi i produktit në ambiente të papërshtatshme (lagështi, nxehtësi, etj)",
  "- Dëmtimet e shkaktuara nga tensioni i lartë apo i ulët i rrymës elektrike, nga dëmtimet termike apo mekanike, rrufetja etj.",
  "- Dëmtimet nga ekspozimi i pajisjes ndaj lagështisë, nxehtësisë, tymit, dridhjeve, papastërtive, apo kushteve të jashtëzakonshme apo të papërshtatshme.",
  "- Nëse numri në flet-garancion nuk përputhet me IMEI numrin në aparat.",
  "- Nëse blerësi nuk e ka flet garancionin.",
  "- Nëse aparati është hapur dhe është tentuar të riparohet nga person i cili nuk ka autorizim nga servisi i Top Mobile."
];

const Warranty = () => {
  const { user } = useAuth();
  const isAdmin = user && user.role === "admin";

  const [data, setData] = useState({
    emri: "",
    mbiemri: "",
    dataFillimit: "",
    cmimi: "",
    modeli: "",
    imei: "",
    software: "",
    kohezgjatja: ""
  });

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  if (!isAdmin) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography color="error" variant="h6">
          Qasja në këtë faqe është e kufizuar! (Vetëm për admin)
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", p: 4 }}>
      <Paper sx={{ p: 4, borderRadius: 3, mb: 4 }}>
        {/* HEADER */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Box>
            <Typography variant="h5" fontWeight="bold">Top Mobile</Typography>
            <Typography fontSize={15}>Rr. Bulevardi Dëshmorët e Kombit</Typography>
            <Typography fontSize={15}>Ulpianë, Prishtinë</Typography>
            <Typography fontSize={15}>TEL: 045-407-222</Typography>
          </Box>
          <Typography variant="h6" fontWeight={700}>Fletë Garancioni</Typography>
        </Box>

        {/* TË DHËNAT E KLIENTIT */}
        <Box sx={{ mb: 2 }}>
          <Typography mb={1} fontWeight={600}>Klienti:</Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
            <TextField label="Emri" name="emri" value={data.emri} onChange={handleChange} sx={{ flex: 1 }} />
            <TextField label="Mbiemri" name="mbiemri" value={data.mbiemri} onChange={handleChange} sx={{ flex: 1 }} />
          </Box>
          <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
            <TextField
              label="Data e fillimit të garancionit"
              name="dataFillimit"
              type="date"
              value={data.dataFillimit}
              onChange={handleChange}
              sx={{ flex: 1 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField label="Çmimi (€)" name="cmimi" value={data.cmimi} onChange={handleChange} sx={{ flex: 1 }} />
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* TABELA E PRODUKTIT */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField label="Modeli" name="modeli" value={data.modeli} onChange={handleChange} sx={{ flex: 1 }} />
          <TextField label="IMEI" name="imei" value={data.imei} onChange={handleChange} sx={{ flex: 1 }} />
          <TextField label="Software Info" name="software" value={data.software} onChange={handleChange} sx={{ flex: 1 }} />
          <TextField label="Kohëzgjatja e garancionit" name="kohezgjatja" value={data.kohezgjatja} onChange={handleChange} sx={{ flex: 1 }} />
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* KUSHTET E GARANCIONIT */}
        <Box sx={{ mb: 2 }}>
          <Typography fontWeight={600}>Kushtet e Garancionit</Typography>
          <ul style={{ paddingLeft: 18 }}>
            {kushtetGarancionit.map((item, idx) =>
              <li key={idx} style={{ margin: "4px 0" }}>
                {item}
              </li>
            )}
          </ul>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
          <Typography>Top Mobile</Typography>
          <Typography>Klienti</Typography>
        </Box>
      </Paper>

      {/* Mundësi Print ose Save PDF */}
      <Button variant="outlined" onClick={() => window.print()} sx={{ mr: 2 }}>
        Printo Garancionin
      </Button>
    </Box>
  );
};

export default Warranty;
