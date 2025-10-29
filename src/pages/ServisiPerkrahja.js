// /pages/ServisiPerkrahja.jsx
import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import "./ProductsIphone.css"; // ⬅️ tema dark (var(--bg), --text, --muted, --accent)
import "./PjeseTelefonaSpecific.css"; // Styling specifik 3x3 grid

const serviceParts = [
  {
    title: "Ndërrim ekrani",
    image: "https://image.shutterstock.com/image-vector/remove-attachment-puzzle-line-icons-260nw-2458526435.jpg",
    desc: "Zëvendësim profesional i ekraneve për çdo model telefoni.",
  },
  {
    title: "Ndërrim baterie",
    image:
      "https://img.freepik.com/free-photo/close-up-circuit-board-repair_23-2148419129.jpg?uid=R144109746&ga=GA1.1.2116894046.1746009338&semt=ais_hybrid&w=740",
    desc: "Bateri të reja dhe instalim i sigurt për jetëgjatësi maksimale.",
  },
  {
    title: "Ndërrim porte karikimi",
    image:
      "https://img.freepik.com/free-photo/repairman-soldering-components-motherboard-while-fixing-damaged-smart-phone-using-tweezers-iron_343059-504.jpg?uid=R144109746&ga=GA1.1.2116894046.1746009338&semt=ais_hybrid&w=740",
    desc: "Zëvendësim i portës së karikimit për ngarkim të sigurt.",
  },
  {
    title: "Riparim audio (altoparlant, mikrofon)",
    image:
      "https://img.freepik.com/free-photo/close-up-shot-specialized-radio-equipment-used-home-studio_482257-116675.jpg?uid=R144109746&ga=GA1.1.2116894046.1746009338&semt=ais_hybrid&w=740",
    desc: "Shërbim i plotë për altoparlant dhe mikrofon me zë të qartë.",
  },
  {
    title: "Instalim sistemesh dhe softuer",
    image:
      "https://img.freepik.com/free-photo/quality-assurance-clipboard-icon_53876-123828.jpg?uid=R144109746&ga=GA1.1.2116894046.1746009338&semt=ais_hybrid&w=740",
    desc: "Instalim dhe konfigurim i softuerëve për çdo model telefoni.",
  },
  {
    title: "Pastrimi i thellë (anti-pluhur & ujë)",
    image:
      "https://img.freepik.com/free-photo/modern-smartphone-design-with-floating-elements_187299-46984.jpg?uid=R144109746&ga=GA1.1.2116894046.1746009338&semt=ais_hybrid&w=740",
    desc: "Pastrimi profesional për zgjatje të jetës së pajisjes.",
  },
];

const ServisiPerkrahja = () => {
  return (
    <Box className="iphone-page phone-parts-page" sx={{ bgcolor: "var(--bg)", minHeight: "100vh", py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={900}
          className="iphone-title"
          sx={{ color: "var(--text)", textAlign: "center", mb: 4, fontSize: { xs: 24, md: 34 } }}
        >
          Servisi & Përkrahja
        </Typography>

        <div className="products-grid">
          {serviceParts.map((item, i) => (
            <div key={i} className="modern-product-card">
              {/* Service Badge */}
              <div className="product-new-badge">SHËRBIM</div>
              
              {/* Product Image */}
              <div className="modern-product-image">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = "https://topmobile.store/og-image.jpg")}
                />
              </div>
              
              {/* Product Info */}
              <div className="modern-product-info">
                <div className="product-category-label">Riparim & Servis</div>
                
                <Typography className="modern-product-title" variant="h6">
                  {item.title}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: "var(--text-secondary)", 
                    mb: 2,
                    lineHeight: 1.5,
                    fontSize: "14px"
                  }}
                >
                  {item.desc}
                </Typography>
                
                <div className="modern-product-buttons">
                  <button 
                    className="btn-buy-now"
                    onClick={() => window.open('tel:+38345407222', '_self')}
                  >
                    <span>🔧</span>
                    Kontakto për çmim
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Info Section */}
        <Box sx={{ mt: 6, p: 4, background: "var(--bg-card)", borderRadius: "var(--radius-2xl)", border: "1px solid var(--border-subtle)" }}>
          <Typography 
            variant="h5" 
            fontWeight="bold"
            sx={{ color: "var(--text-primary)", mb: 2, textAlign: "center" }}
          >
            🔧 Servisi Profesional i Riparimit
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ color: "var(--primary)", mb: 1 }}>⚡ Riparim i shpejtë</Typography>
                <Typography sx={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  Diagnostikim dhe riparim brenda 24-48 orëve
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ color: "var(--primary)", mb: 1 }}>✅ Garanci e plotë</Typography>
                <Typography sx={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  6 muaj garanci për të gjitha riparitmet dhe pjesët
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ color: "var(--primary)", mb: 1 }}>👨‍🔧 Teknikanë të certifikuar</Typography>
                <Typography sx={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  Ekip profesional me përvojë shumëvjeçare në riparime
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServisiPerkrahja;
