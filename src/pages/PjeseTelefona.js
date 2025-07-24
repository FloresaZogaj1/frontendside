import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import "./PjeseTelefona.css";

const phoneParts = [
  {
    title: "Ekran iPhone X/11/12/13",
    image: "https://img.freepik.com/free-vector/neon-home-screen-template-smartphone_23-2148736060.jpg",
    desc: "Ekrane origjinale për iPhone X deri iPhone 13. Kualitet i lartë, montim i shpejtë."
  },
  {
    title: "Bateri për Samsung & iPhone",
    image: "https://img.freepik.com/free-photo/football-fan-accessories_23-2147827577.jpg",
    desc: "Bateri të reja për të gjitha modelet kryesore, jetëgjatësi e garantuar."
  },
  {
    title: "Kamera & Face ID Module",
    image: "https://img.freepik.com/free-vector/security-cam-cctv-video-camera-street-observe-surveillance-equipment-front-side-angle-view_107791-2997.jpg",
    desc: "Kamera dhe module Face ID për iPhone & Samsung. Instalimi profesional."
  },
  {
    title: "Altoparlant & mikrofon",
    image: "https://img.freepik.com/free-photo/close-up-hand-holding-microphone_23-2148681178.jpg",
    desc: "Ndërrim i altoparlantit, mikrofonit dhe zgjidhje për çdo problem të zërit."
  },
  {
    title: "Kabllo & Aksesorë",
    image: "https://img.freepik.com/free-vector/mobile-phone-smartphone-charging-set-with-isolated-wires-plugs-power-banks-adapters-with-bolt-sign-vector-illustration_1284-79391.jpg",
    desc: "Kabllo karikimi, data, powerbank, adapterë origjinalë për çdo model."
  },
  {
    title: "Butona anësorë & home",
    image: "https://img.freepik.com/free-vector/house-location-pin-red-black_78370-8743.jpg",
    desc: "Riparim/ndërrim për butona volume, power, ose home."
  }
];

const PjeseTelefona = () => {
  return (
    <Box sx={{ bgcolor: '#f9fafd', minHeight: '100vh', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          fontWeight={800}
          sx={{
            color: '#023047',
            letterSpacing: 0.5,
            mb: 4,
            fontSize: { xs: 24, md: 34 }
          }}
        >
          Pjesë për Telefona
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {phoneParts.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 3px 18px #0230470b',
                  bgcolor: '#fff',
                  maxWidth: 330,
                  minHeight: 330,
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  p: 0,
                  transition: 'box-shadow .13s, transform .13s',
                  '&:hover': {
                    boxShadow: '0 10px 30px #ff800018',
                    transform: 'translateY(-3px) scale(1.01)'
                  }
                }}
                elevation={0}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    width: '100%',
                    height: 130,
                    objectFit: 'cover',
                    borderRadius: '14px 14px 0 0'
                  }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    width: '100%',
                    px: 2,
                    py: 1.5
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{ color: '#023047', mb: 0.5, fontSize: 16 }}
                    noWrap
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#50577a',
                      mb: 1,
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      fontSize: 14,
                      minHeight: 38
                    }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PjeseTelefona;
