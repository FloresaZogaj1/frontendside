import React from "react";import React from "react";import React from "react";import React from "react";

import { Link } from "react-router-dom";

import logo from "../assets/PFP-01__5_-removebg-preview.png";import { Link } from "react-router-dom";



export default function Navbar() {import logo from "../assets/PFP-01__5_-removebg-preview.png";import { Link } from "react-router-dom";import { Badge } from "@mui/material";

  return (

    <nav className="navbar-simple">import "../styles/modern-navbar.css";

      <div className="navbar-container-simple">

        <Link to="/" className="navbar-logo-large">import logo from "../assets/PFP-01__5_-removebg-preview.png";import { Link, useNavigate } from "react-router-dom";

          <img src={logo} alt="Top Mobile" className="logo-image" />

          <span className="brand-name-large">Top Mobile</span>export default function Navbar() {

        </Link>

      </div>  return (import "../styles/modern-navbar.css";import { useCart } from "../CartContext";

    </nav>

  );    <nav className="navbar-simple">

}
      <div className="navbar-container-simple">import { useAuth } from "../AuthContext";

        {/* Logo dhe Top Mobile - Centruar */}

        <Link to="/" className="navbar-logo-large">export default function Navbar() {import logo from "../assets/PFP-01__5_-removebg-preview.png";

          <img src={logo} alt="Top Mobile" />

          <span className="brand-name-large">Top Mobile</span>  return (import "../styles/modern-navbar.css";

        </Link>

      </div>    <nav className="navbar-simple">

    </nav>

  );      <div className="navbar-container-simple">const productMenu = [

}
        {/* Logo dhe Top Mobile - Centruar */}  { label: "iPhone", path: "/products/iphone", icon: "📱" },

        <Link to="/" className="navbar-logo-large">  { label: "Samsung", path: "/products/samsung", icon: "📱" },

          <img src={logo} alt="Top Mobile" />  { label: "Fujifilm / Instax", path: "/category/fujifilm", icon: "📸" },

          <span className="brand-name-large">Top Mobile</span>  { label: "Aksesorë", path: "/products/accessories", icon: "🎧" },

        </Link>];

      </div>

    </nav>const servicesMenu = [

  );  { path: "/sherbimet/mirembajtja", label: "Mirëmbajtja me kontratë" },

}  { path: "/sherbimet/telefona", label: "Pjesë për telefona" },
  { path: "/sherbimet/playstation", label: "Pjesë për playStation" },
  { path: "/sherbimet/servisi", label: "Servisi & përkrahja" },
  { path: "/sherbimet/asistenca", label: "Asistencë Mobile" },
];

export default function Navbar() {
  const [showProducts, setShowProducts] = React.useState(false);
  const [showServices, setShowServices] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
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
        <div className="navbar-container-simple">
          {/* Logo dhe Top Mobile - Centruar */}
          <Link to="/" className="navbar-logo-large">
            <img src={logo} alt="Top Mobile" />
            <span className="brand-name-large">Top Mobile</span>
          </Link>
        </div>
      </nav>

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

          {/* Mobile Search */}
          <div className="mobile-search-container">
            <div className="mobile-search">
              <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                className="mobile-search-input"
                placeholder="Kërko produkte..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
              />
            </div>
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

            {/* Mobile Produktet Dropdown */}
            <div className="mobile-nav-item mobile-dropdown-item">
              <button 
                className="mobile-nav-dropdown-trigger" 
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Produktet</span>
                <svg 
                  width="16" 
                  height="16" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  className={`dropdown-arrow ${mobileProductsOpen ? 'open' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`mobile-dropdown-content ${mobileProductsOpen ? 'open' : ''}`}>
                {productMenu.map((item) => (
                  <Link 
                    key={item.label} 
                    to={item.path} 
                    className="mobile-dropdown-link" 
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Shërbimet Dropdown */}
            <div className="mobile-nav-item mobile-dropdown-item">
              <button 
                className="mobile-nav-dropdown-trigger" 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Shërbimet</span>
                <svg 
                  width="16" 
                  height="16" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  className={`dropdown-arrow ${mobileServicesOpen ? 'open' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`mobile-dropdown-content ${mobileServicesOpen ? 'open' : ''}`}>
                {servicesMenu.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="mobile-dropdown-link" 
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mobile-nav-item">
              <Link to="/gift-cards" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Gift Cards
              </Link>
            </div>

            <div className="mobile-nav-item">
              <Link to="/kontakt" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Kontakt
              </Link>
            </div>

            <div className="mobile-nav-item">
              <Link to="/rreth-nesh" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
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