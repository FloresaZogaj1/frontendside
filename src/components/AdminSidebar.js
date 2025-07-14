import { Link, useLocation } from "react-router-dom";
import { Box, Avatar, Typography, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const sidebarBg = "#fff";
const sidebarAccent = "#FF7200";
const sidebarText = "#222";
const sidebarWidth = 220;

const menu = [
  { label: "Produktet", icon: <InventoryIcon />, path: "/admin/products" },
  { label: "Përdoruesit", icon: <PeopleIcon />, path: "/admin/users" },
  { label: "Statistikat", icon: <BarChartIcon />, path: "/admin/stats" },
];

function AdminSidebar() {
  const location = useLocation();
  const userName = "Admin"; // ose merre nga state/context

  return (
    <Box
      sx={{
        width: sidebarWidth,
        bgcolor: sidebarBg,
        borderRight: `2px solid ${sidebarAccent}`,
        minHeight: "100vh",
        py: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {/* Avatar User */}
      <Avatar sx={{ bgcolor: sidebarAccent, width: 58, height: 58, mb: 1 }}>
        <AccountCircleIcon sx={{ fontSize: 46, color: "#fff" }} />
      </Avatar>
      <Typography fontWeight={600} mb={3} color={sidebarText}>
        {userName}
      </Typography>

      {/* Menu */}
      <List sx={{ width: "100%" }}>
        {menu.map(item => (
          <ListItemButton
            key={item.label}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              mb: 1,
              borderRadius: 2,
              "&.Mui-selected": {
                bgcolor: sidebarAccent,
                color: "#fff",
                "& .MuiListItemIcon-root": { color: "#fff" }
              }
            }}
          >
            <ListItemIcon sx={{ color: sidebarAccent }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default AdminSidebar;
