import { Box, Typography, Card, CardContent } from "@mui/material";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useEffect, useState } from "react";

// 🟠 Ky është ndryshimi:
const API_URL = process.env.REACT_APP_API_URL || "https://backendd-t-production-f7ae.up.railway.app";

export default function AdminWelcome() {
  const [sales, setSales] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/admin/stats`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => setSales(data.sales_today ?? 0));
  }, []);

  return (
    <Box sx={{
      mt: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3
    }}>
      <EmojiEmotionsIcon sx={{ fontSize: 100, color: "#ff8000" }} />
      <Typography variant="h3" fontWeight={700} color="#ff8000">
        Mirësevjen, Admin!
      </Typography>
      <Typography variant="h5" color="text.secondary">
        A patëm naj shitje sot, a veç po lodhesh kot? 😂
      </Typography>
      <Card sx={{ mt: 4, px: 5, py: 2, bgcolor: "#fff7ec", borderRadius: 3, boxShadow: 2 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <MonetizationOnIcon sx={{ fontSize: 40, color: "#ff8000" }} />
          <Typography variant="h4" color="#ff8000" fontWeight={800}>
            €{sales === null ? "..." : sales.toLocaleString("de-DE", { minimumFractionDigits: 2 })}
          </Typography>
          <Typography color="#444" fontWeight={600} fontSize={18}>
            Shitjet e sotme
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
