import React from "react";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { useAuth } from "../AuthContext";
import logo from "../assets/PFP-01__5_-removebg-preview.png";
import "../styles/modern-navbar.css";

const productMenu = [
  { label: "iPhone", path: "/products/iphone", icon: "📱" },
  { label: "Samsung", path: "/products/samsung", icon: "📱" },
  { label: "Fujifilm / Instax", path: "/category/fujifilm", icon: "📸" },
  { label: "Aksesorë", path: "/products/accessories", icon: "🎧" },
];

const servicesMenu = [
  { path: "/sherbimet/mirembajtja", label: "Mirëmbajtja me kontratë" },
  { path: "/sherbimet/telefona", label: "Pjesë për telefona" },
  { path: "/sherbimet/playstation", label: "Pjesë për playStation" },
  { path: "/sherbimet/servisi", label: "Servisi & përkrahja" },
  { path: "/sherbimet/asistenca", label: "Asistencë Mobile" },
];

export default function Navbar() {
  const [showProducts, setShowProducts] = React.useState(false);
  const [showServices, setShowServices] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [scrolled, setScrolled] = React.useState(false);

  const navigate = useNavigate();
  const { cart } = useCart();
  const { loggedIn, logout } = useAuth();

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-item')) {
        setShowProducts(false);
        setShowServices(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e?.preventDefault?.();
    const q = searchTerm.trim();
    if (q) navigate(`/search?query=${encodeURIComponent(q)}`);
  };

  const onLogout = () => {
    logout();
    navigate("/login");
    window.location.reload();
  };

  const cartItemCount = cart?.reduce((sum, item) => sum + (item.qty || 1), 0) || 0;

  return (
    <>
      <nav className={`navbar-modern ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Top Mobile" />
            Top Mobile
          </Link>

          {/* Desktop Navigation */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Ballina
              </Link>
            </li>

            <li className="nav-item">
              <div 
                className="nav-link" 
                onMouseEnter={() => setShowProducts(true)}
                onMouseLeave={() => setShowProducts(false)}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Produktet
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '4px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                
                {showProducts && (
                  <div className="nav-dropdown">
                    {productMenu.map((item) => (
                      <Link 
                        key={item.label} 
                        to={item.path} 
                        className="dropdown-item"
                        onClick={() => setShowProducts(false)}
                      >
                        <span style={{ marginRight: '8px' }}>{item.icon}</span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>

            <li className="nav-item">
              <div 
                className="nav-link"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Shërbimet
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '4px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                
                {showServices && (
                  <div className="nav-dropdown">
                    {servicesMenu.map((item) => (
                      <Link 
                        key={item.path} 
                        to={item.path} 
                        className="dropdown-item"
                        onClick={() => setShowServices(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>

            <li className="nav-item">
              <Link to="/gift-cards" className="nav-link">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Gift Cards
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Rreth Nesh
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="navbar-search">
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Kërko produkte..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
            />
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            <Link to="/cart" className="action-btn" title="Shporta">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5L12 15m0 0l2.5-2.5M12 15l2.5 2.5" />
              </svg>
              {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
            </Link>

            {loggedIn ? (
              <button onClick={onLogout} className="login-btn">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Dil
              </button>
            ) : (
              <Link to="/login" className="login-btn">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Kyçu
              </Link>
            )}

            <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)}>
        <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <div className="navbar-logo">
              <img src={logo} alt="Top Mobile" />
              Top Mobile
            </div>
            <button className="mobile-menu-close" onClick={() => setMobileOpen(false)}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="mobile-menu-nav">
            <div className="mobile-nav-item">
              <Link to="/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Ballina
              </Link>
            </div>

            {productMenu.map((item) => (
              <div key={item.label} className="mobile-nav-item">
                <Link to={item.path} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              </div>
            ))}

            {servicesMenu.map((item) => (
              <div key={item.path} className="mobile-nav-item">
                <Link to={item.path} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                  {item.label}
                </Link>
              </div>
            ))}

            <div className="mobile-nav-item">
              <Link to="/gift-cards" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Gift Cards
              </Link>
            </div>

            <div className="mobile-nav-item">
              <Link to="/about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Rreth Nesh
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
      <Container maxWidth="lg">
        <Toolbar disableGutters className="tm-toolbar">
          {/* LEFT */}
          <Box className="tm-left">
            <Link to="/" aria-label="Ballina" className="tm-logo-wrap" title="Top Mobile - Ballina">
              <img src={logo} alt="Top Mobile" className="tm-logo" />
            </Link>
          </Box>

          {/* CENTER */}
          <Box className="tm-center" component="nav" aria-label="Meny kryesore">
            <Box className="tm-nav">
              <Button component={Link} to="/" className="tm-link" title="Ballina">Ballina</Button>
              <Button component={Link} to="/gift-cards" className="tm-link" title="Gift Cards">Gift Cards</Button>

              {/* Produktet */}
              <Box className="dropdown-wrap">
                <Button
                  className="tm-link products-btn"
                  aria-haspopup="menu"
                  aria-expanded={showProducts ? "true" : "false"}
                  aria-controls="products-menu"
                  onClick={() => setShowProducts((v) => !v)}
                  endIcon={<ArrowDropDownIcon />}
                >
                  Produktet
                </Button>
                {showProducts && (
                  <Box id="products-menu" role="menu" className="glass-submenu">
                    {productMenu.map((it) => (
                      <Link key={it.label} to={it.path} className="menu-glass-link" onClick={() => setShowProducts(false)}>
                        <div className="menu-glass-item">
                          <span className="menu-glass-icon" style={{ color: it.color }}>{it.icon}</span>
                          <span className="menu-glass-label">{it.label}</span>
                        </div>
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>

              {/* Shërbimet */}
              <Box className="dropdown-wrap">
                <Button
                  className="tm-link services-btn"
                  aria-haspopup="menu"
                  aria-expanded={showServices ? "true" : "false"}
                  aria-controls="services-menu"
                  onClick={() => setShowServices((v) => !v)}
                  endIcon={<ArrowDropDownIcon />}
                >
                  Shërbimet
                </Button>
                {showServices && (
                  <Box id="services-menu" role="menu" className="glass-submenu">
                    {servicesMenu.map((it) => (
                      <Link key={it.path} to={it.path} className="menu-glass-link" onClick={() => setShowServices(false)}>
                        <div className="menu-glass-item">
                          <span className="menu-glass-label">{it.label}</span>
                        </div>
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>

              <Button component={Link} to="/about" className="tm-link about-link" title="Rreth Nesh">
                {"Rreth\u00A0Nesh"}
              </Button>
            </Box>

            {/* Search */}
            <Box className="tm-search-wrap" component="form" role="search" onSubmit={handleSearch}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Kërko produkte…"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleSearch(e); }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon className="tm-search-icon" onClick={handleSearch} aria-label="Kërko" role="button" />
                    </InputAdornment>
                  ),
                }}
                className="tm-search"
              />
            </Box>
          </Box>

          {/* RIGHT */}
          <Box className="tm-right">
            <Link to="/cart" aria-label="Shporta" title="Shporta">
              <IconButton className="tm-cart-btn">
                <Badge badgeContent={cart?.length || 0} color="error" invisible={!cart?.length}>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>

            {!loggedIn ? (
              <Button component={Link} to="/login" className="tm-login-btn" title="Kyçu">
                <span className="tm-btn-label">Kyçu</span>
              </Button>
            ) : (
              <Button onClick={onLogout} className="tm-link" title="Dil">Dil</Button>
            )}
          </Box>

          {/* HAMBURGER (mobile) */}
          <Box className="tm-hamburger">
            <IconButton aria-label="Hap menynë" onClick={() => setMobileOpen(true)} className="tm-menu-btn" title="Meny">
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{ keepMounted: true }}
            PaperProps={{ sx: { width: { xs: "86vw", sm: 320 }, bgcolor:"var(--bg-2)", color:"var(--text)", borderTopLeftRadius: 14, borderBottomLeftRadius: 14 } }}
          >
            {/* Drawer content */}
            <Box sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  <img src={logo} alt="Top Mobile" style={{ height: 56 }} />
                </Link>
                <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "var(--text)" }}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Divider sx={{ borderColor: "#1d1d1d", mb: 1 }} />

              <List component="nav">
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/" onClick={() => setMobileOpen(false)}>
                    <ListItemIcon><HomeIcon sx={{ color: "var(--accent)" }} /></ListItemIcon>
                    <ListItemText primary="Ballina" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/gift-cards" onClick={() => setMobileOpen(false)}>
                    <ListItemIcon><IoCardOutline style={{ color: "var(--accent)", fontSize: 22 }} /></ListItemIcon>
                    <ListItemText primary="Gift Cards" />
                  </ListItemButton>
                </ListItem>

                <Accordion sx={{ bgcolor: "transparent", color: "var(--text)" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "var(--accent)" }} />}>
                    <Typography sx={{ fontWeight: 800, color: "var(--accent)" }}>Produktet</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {productMenu.map((it) => (
                      <ListItemButton key={it.label} component={Link} to={it.path} onClick={() => setMobileOpen(false)}>
                        <ListItemText primary={it.label} />
                      </ListItemButton>
                    ))}
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{ bgcolor: "transparent", color: "var(--text)" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "var(--accent)" }} />}>
                    <Typography sx={{ fontWeight: 800, color: "var(--accent)" }}>Shërbimet</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {servicesMenu.map((it) => (
                      <ListItemButton key={it.path} component={Link} to={it.path} onClick={() => setMobileOpen(false)}>
                        <ListItemText primary={it.label} />
                      </ListItemButton>
                    ))}
                  </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 1, borderColor: "#1d1d1d" }} />

                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/about" onClick={() => setMobileOpen(false)}>
                    <ListItemText primary="Rreth Nesh" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/cart" onClick={() => setMobileOpen(false)}>
                    <ListItemIcon>
                      <Badge badgeContent={cart?.length || 0} color="error" invisible={!cart?.length}>
                        <ShoppingCartIcon sx={{ color: "var(--accent)" }} />
                      </Badge>
                    </ListItemIcon>
                    <ListItemText primary="Shporta" />
                  </ListItemButton>
                </ListItem>

                {!loggedIn ? (
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/login" onClick={() => setMobileOpen(false)}>
                      <ListItemText primary="Kyçu" />
                    </ListItemButton>
                  </ListItem>
                ) : (
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => { logout(); setMobileOpen(false); }}>
                      <ListItemText primary="Dil" />
                    </ListItemButton>
                  </ListItem>
                )}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
