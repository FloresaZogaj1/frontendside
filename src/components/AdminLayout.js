import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { Box } from "@mui/material";

function AdminLayout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#fafafb" }}>
      <AdminSidebar />
      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          bgcolor: "#fafafb",
          minHeight: "100vh",
          boxShadow: "0 0 18px #ff720024 inset"
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
export default AdminLayout;
