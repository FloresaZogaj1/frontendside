import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/PFP-01__5_-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../AuthContext";
import { IoLogoApple, IoLogoAndroid, IoCardOutline, IoHeadsetOutline } from "react-icons/io5";
import './Navbar.css';
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const productMenu = [
  {
    label: "iPhone",
    icon: <IoLogoApple />,
    path: "/products/iphone",
    color: "#555",
  },
 {
  label: "Samsung",
  icon: <PhoneAndroidIcon />, // në vend të <IoLogoAndroid />
  path: "/products/samsung",
  color: "#3ddc84",
},

  {
    label: "Gift Card",
    icon: <IoCardOutline />,
    path: "/products/giftcard",
    color: "#E18A00",
  },
  {
    label: "Aksesorë",
    icon: <IoHeadsetOutline />,
    path: "/products/accessories",
    color: "#01706b",
  },
];

const Navbar = () => {
  const [showProductsDropdown, setShowProductsDropdown] = React.useState(false);
  const [anchorElHelp, setAnchorElHelp] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate();
  const { cart } = useCart();
  const { loggedIn, logout } = useAuth();

  React.useEffect(() => {
    const closeDropdown = (e) => {
      if (
        !e.target.closest('.products-dropdown-btn') &&
        !e.target.closest('.products-dropdown-menu')
      ) {
        setShowProductsDropdown(false);
      }
    };
    document.addEventListener('mousedown', closeDropdown);
    return () => document.removeEventListener('mousedown', closeDropdown);
  }, []);

  const handleOpenHelpMenu = (e) => setAnchorElHelp(e.currentTarget);
  const handleCloseHelpMenu = () => setAnchorElHelp(null);
  const handleOpenServicesMenu = (e) => setAnchorElServices(e.currentTarget);
  const handleCloseServicesMenu = () => setAnchorElServices(null);

  const onLogout = () => {
    logout();
    navigate("/login");
    window.location.reload();
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (searchTerm.trim()) {
        navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      }
    }
  };

  // ---- DRAWER për MOBILE ----
  const drawer = (
    <Box sx={{ width: 280 }} role="presentation">
      {/* Header with logo + close */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
        <Link to="/">
          <img src={logo} alt="Top Mobile" style={{ height: 50 }} />
        </Link>
        <IconButton onClick={() => setMobileOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {/* Home */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" onClick={() => setMobileOpen(false)}>
            <ListItemIcon>
              <HomeIcon sx={{ color: "#ff8000" }} />
            </ListItemIcon>
            <ListItemText primary="Ballina" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItemButton>
        </ListItem>
        {/* Products Accordion --- ME IKONA & GLASS --- */}
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#ff8000" }} />} sx={{ px: 2 }}>
            <Typography sx={{ fontWeight: 600, color: "#ff8000" }}>Produktet</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0, bgcolor: "rgba(255,255,255,0.7)", borderRadius: 2, mb: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {productMenu.map((item) => (
                <Link
                  to={item.path}
                  key={item.label}
                  style={{ textDecoration: "none" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="menu-glass-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "9px 0",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.48)",
                      margin: "0 12px",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 4px 16px rgba(50,50,60,0.04)",
                      transition: "background .19s"
                    }}>
                    <span className="menu-glass-icon" style={{ color: item.color, fontSize: 23, marginRight: 15 }}>
                      {item.icon}
                    </span>
                    <span className="menu-glass-label" style={{ color: "#222", fontWeight: 500 }}>{item.label}</span>
                  </div>
                </Link>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* Services Accordion */}
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#ff8000" }} />} sx={{ px: 2 }}>
            <Typography sx={{ fontWeight: 600, color: "#ff8000" }}>Shërbimet</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            {[
              { path: "mirembajtja", label: "Mirëmbajtja me kontratë" },
              { path: "telefona", label: "Pjesë për telefona" },
              { path: "playstation", label: "Pjesë për playStation" },
              { path: "servisi", label: "Servisi & përkrahja" },
              { path: "asistenca", label: "Asistencë Mobile" },
            ].map((srv) => (
              <ListItemButton
                key={srv.path}
                component={Link}
                to={`/sherbimet/${srv.path}`}
                sx={{ pl: 4 }}
                onClick={() => setMobileOpen(false)}
              >
                <ListItemText primary={srv.label} />
              </ListItemButton>
            ))}
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ my: 1 }} />
        {/* Terms & Help */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/terms" onClick={() => setMobileOpen(false)}>
            <ListItemText primary="Kushtet & Kujdesi ndaj Klientit" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ background: "#fff", color: "#ff8000", boxShadow: 2 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", minHeight: 82 }}>
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", mr: 1 }}>
            <IconButton
              size="large"
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{ color: "#ff8000" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>

          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <Link to="/">
              <img src={logo} alt="Top Mobile Logo" style={{ height: 70, objectFit: "contain" }} />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1.5 }}>
            <Button component={Link} to="/" sx={{ color: "#ff8000", fontWeight: 600 }}>
              Ballina
            </Button>

            {/* --- PRODUKTET CUSTOM GRID DROPDOWN --- */}
            <Box sx={{ position: "relative" }}>
              <Button
                sx={{ color: "#ff8000", fontWeight: 600 }}
                className="products-dropdown-btn"
                onClick={() => setShowProductsDropdown((v) => !v)}
                endIcon={<ArrowDropDownIcon />}
              >
                Produktet
              </Button>
              {showProductsDropdown && (
                <Box
                  className="glass-submenu products-dropdown-menu"
                  sx={{
                    position: "absolute",
                    top: 46,
                    left: 0,
                    zIndex: 2222,
                  }}
                >
                  {productMenu.map((item) => (
                    <Link
                      to={item.path}
                      key={item.label}
                      style={{ textDecoration: "none" }}
                      onClick={() => setShowProductsDropdown(false)}
                    >
                      <div className="menu-glass-item">
                        <span className="menu-glass-icon" style={{ color: item.color }}>
                          {item.icon}
                        </span>
                        <span className="menu-glass-label">{item.label}</span>
                      </div>
                    </Link>
                  ))}
                </Box>
              )}
            </Box>

            <Button
              sx={{ color: "#ff8000", fontWeight: 600 }}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleOpenServicesMenu}
            >
              Shërbimet
            </Button>
            <Menu
              anchorEl={anchorElServices}
              open={Boolean(anchorElServices)}
              onClose={handleCloseServicesMenu}
            >
              <MenuItem component={Link} to="/sherbimet/mirembajtja" onClick={handleCloseServicesMenu}>
                Mirëmbajtja me kontratë
              </MenuItem>
              <MenuItem component={Link} to="/sherbimet/telefona" onClick={handleCloseServicesMenu}>
                Pjesë për telefona
              </MenuItem>
              <MenuItem component={Link} to="/sherbimet/playstation" onClick={handleCloseServicesMenu}>
                Pjesë për playStation
              </MenuItem>
              <MenuItem component={Link} to="/sherbimet/servisi" onClick={handleCloseServicesMenu}>
                Servisi & përkrahja
              </MenuItem>
              <MenuItem component={Link} to="/sherbimet/asistenca" onClick={handleCloseServicesMenu}>
                Asistencë Mobile
              </MenuItem>
            </Menu>

            <Button component={Link} to="/blog" sx={{ color: "#ff8000", fontWeight: 600 }}>
              Blog
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              maxWidth: 370,
              mx: { xs: 0, md: 2 },
              display: { xs: "none", sm: "flex" },
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Çfarë po kërkoni?"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              sx={{
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: 1,
                minWidth: 120,
                "& .MuiOutlinedInput-root": {
                  paddingRight: 0,
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "#aaa", cursor: "pointer" }} onClick={handleSearch} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.3 }}>
            <Button sx={{ minWidth: 0, p: 0, color: "#ff8000" }} onClick={handleOpenHelpMenu}>
              <span style={{ fontSize: 22 }}>❓</span>
            </Button>
            <Menu
              anchorEl={anchorElHelp}
              open={Boolean(anchorElHelp)}
              onClose={handleCloseHelpMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem component={Link} to="/terms" onClick={handleCloseHelpMenu}>
                Kushtet & Kujdesi ndaj Klientit
              </MenuItem>
            </Menu>

            <Link to="/cart">
              <IconButton sx={{ color: "#ff8000", position: "relative" }}>
                <ShoppingCartIcon />
                {cart?.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: 2,
                      right: 2,
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      fontSize: 10,
                      padding: "2px 5px",
                    }}
                  >
                    {cart.length}
                  </span>
                )}
              </IconButton>
            </Link>
            {/* Buton login/kyqu nëse s'është logged in */}
            {!loggedIn && (
              <Button
                component={Link}
                to="/login"
                sx={{
                  color: "#fff",
                  bgcolor: "#ff8000",
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  ml: 1,
                  px: 2.2,
                  py: 1.1,
                  boxShadow: 1,
                  '&:hover': { bgcolor: "#ff6600", color: "#fff" },
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                }}
                startIcon={<AccountCircleIcon sx={{ color: "#fff" }} />}
              >
                Kyqu
              </Button>
            )}

            {/* Logout për çdo user të kyçur */}
            {loggedIn && (
              <Button onClick={onLogout} sx={{ color: "#ff8000", fontWeight: 600 }}>
                Dil
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
