import { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import { Link } from "react-router-dom";

const orange = "#FF7200";
const dark = "#232323";
const bg = "#fff";

const statCards = [
  {
    label: "Produkte",
    icon: <InventoryIcon sx={{ fontSize: 42, color: orange }} />,
    key: "totalProducts",
    color: orange,
    link: "/admin/products"
  },
  {
    label: "Përdorues",
    icon: <PeopleIcon sx={{ fontSize: 42, color: dark }} />,
    key: "totalUsers",
    color: dark,
    link: "/admin/users"
  },
  {
    label: "Porosi",
    icon: <ShoppingCartIcon sx={{ fontSize: 42, color: orange }} />,
    key: "totalOrders",
    color: orange,
    link: "/admin/orders"
  },
  {
    label: "Shitje Totale (€)",
    icon: <PaidIcon sx={{ fontSize: 42, color: dark }} />,
    key: "totalSales",
    color: dark,
    link: "/admin/orders" // ose ndonjë raport për shitje
  }
];

function AdminStats() {
  const [stats, setStats] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:4000/api/admin/stats", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setStats(data));
  }, [token]);

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", pt: 2 }}>
      <Typography variant="h5" fontWeight={700} mb={3} color={orange}>
        Statistikat Kryesore
      </Typography>
      <Grid container spacing={3}>
        {statCards.map(card => (
          <Grid item xs={12} sm={6} md={3} key={card.key}>
            <Box
              component={Link}
              to={card.link}
              sx={{
                textDecoration: "none",
                display: "block"
              }}
            >
              <Paper
                elevation={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 3,
                  bgcolor: bg,
                  borderRadius: 3,
                  borderBottom: `4px solid ${card.color}`,
                  boxShadow: `0 8px 32px ${orange}15`,
                  transition: "transform 0.14s, box-shadow 0.14s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.05)",
                    boxShadow: `0 16px 48px ${card.color}30`,
                    bgcolor: "#FFF6F0"
                  }
                }}
              >
                {card.icon}
                <Typography mt={2} fontWeight={600} fontSize={28} color={card.color}>
                  {stats[card.key] !== undefined ? stats[card.key] : "..."}
                </Typography>
                <Typography color={dark} fontWeight={500} fontSize={16}>
                  {card.label}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AdminStats;
