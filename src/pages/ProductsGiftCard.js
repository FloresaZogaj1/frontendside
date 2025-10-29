// /pages/ProductsGiftCard.jsx
import React, { useState } from "react";
import { Box, Typography, Button, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import SEO from "../seo/SEO";

// Ripërdor stilet premium (product-card, filters-bar, products-grid, btn-accent, iphone-page/title)
import "./ProductsIphone.css";

// Importo fotot ekzistuese dhe placeholder-in
import sonyPs50 from "../assets/Sony-PSN-Giftcard-removebg-preview (1).png";
import sonyPs100 from "../assets/Sony-PSN-Giftcard-removebg-preview (1).png";
import appleCard25 from "../assets/bd222544351dcf84ac89c6f8ae62b264-removebg-preview.png";
import appleCard50 from "../assets/bd222544351dcf84ac89c6f8ae62b264-removebg-preview.png";
import appleCard100 from "../assets/bd222544351dcf84ac89c6f8ae62b264-removebg-preview.png";
import playStore10 from "../assets/51mwochEL-L._UF1000_1000_QL80_DpWeblab_-removebg-preview.png";
import playStore25 from "../assets/51mwochEL-L._UF1000_1000_QL80_DpWeblab_-removebg-preview.png";
import playStore50 from "../assets/51mwochEL-L._UF1000_1000_QL80_DpWeblab_-removebg-preview.png";
import giftPlaceholder from "../assets/ChatGPT_Image_Jun_23__2025__02_58_35_PM-removebg-preview.png";
import giftPlaceholder1 from "../assets/ChatGPT_Image_Jun_23__2025__02_59_37_PM-removebg-preview.png";
import giftPlaceholder2 from "../assets/ChatGPT_Image_Jun_23__2025__03_19_10_PM-removebg-preview.png";
import giftPlaceholder3 from "../assets/ChatGPT_Image_Jun_23__2025__03_21_13_PM-removebg-preview.png";
import giftPlaceholder4 from "../assets/ChatGPT_Image_Jun_23__2025__03_24_19_PM-removebg-preview.png";
import giftPlaceholder5 from "../assets/ChatGPT_Image_Jun_23__2025__03_26_42_PM-removebg-preview.png";
import giftPlaceholder6 from "../assets/ChatGPT_Image_Jun_23__2025__03_29_34_PM-removebg-preview.png";
import gfs from "../assets/ChatGPT_Image_Jun_23__2025__03_31_56_PM-removebg-preview.png";

const allGiftCards = [
  { id: 6,  name: "Sony PS Network Card 50€",  desc: "Kartë dhurate për blerje në PlayStation Store.", price: 50,  image: sonyPs50 },
  { id: 7,  name: "Sony PS Network Card 100€", desc: "Kartë dhurate për blerje në PlayStation Store.", price: 100, image: sonyPs100 },
  { id: 8,  name: "Apple Gift Card 25€",       desc: "Kartë dhurate për blerje në App Store.", price: 25,  image: appleCard25 },
  { id: 9,  name: "Apple Gift Card 50€",       desc: "Kartë dhurate për blerje në App Store .", price: 50,  image: appleCard50 },
  { id: 10, name: "Apple Gift Card 100€",      desc: "Kartë dhurate për blerje në App Store .", price: 100, image: appleCard100 },
  { id: 11, name: "Play Store Card 10€",       desc: "Kartë dhurate për blerje në Google Play Store.",   price: 10,  image: playStore10 },
  { id: 12, name: "Play Store Card 25€",       desc: "Kartë dhurate për blerje në Google Play Store.",   price: 25,  image: playStore25 },
  { id: 13, name: "Play Store Card 50€",       desc: "Kartë dhurate për blerje në Google Play Store.",   price: 50,  image: playStore50 },
  { id: 20, name: "Top Mobile Gift Card 5€",   desc: "Kartë dhurate nga Top Mobile për çdo rast.",       price: 5,   image: giftPlaceholder },
  { id: 21, name: "Top Mobile Gift Card 10€",  desc: "Kartë dhurate nga Top Mobile për çdo rast.",       price: 10,  image: giftPlaceholder2 },
  { id: 22, name: "Top Mobile Gift Card 20€",  desc: "Kartë dhurate nga Top Mobile për çdo rast.",       price: 20,  image: giftPlaceholder1 },
  { id: 23, name: "Top Mobile Gift Card 30€",  desc: "Kartë dhurate nga Top Mobile për çdo rast.",       price: 30,  image: giftPlaceholder3 },
  { id: 24, name: "Top Mobile Gift Card 50€",  desc: "Kartë dhurate nga Top Mobile për çdo rast.",       price: 50,  image: giftPlaceholder4 },
  { id: 25, name: "Top Mobile Gift Card 70€",  desc: "Kartë dhurate nga Top Mobile për çdo rast.",       price: 70,  image: giftPlaceholder5 },
  { id: 26, name: "Top Mobile Gift Card 100€", desc: "Kartë dhurate nga Top Mobile për çdo rast.",       price: 100, image: giftPlaceholder6 },
  { id: 27, name: "Top Mobile Gift Card 200€", desc: "Kartë dhurate nga Top Mobile për çdo rast.",       price: 200, image: gfs },
];

// Dropdown unik nga emrat e kartave
const uniqueNames = Array.from(new Set(allGiftCards.map((p) => p.name)));
const categories = [{ value: "all", label: "Të gjitha" }, ...uniqueNames.map((n) => ({ value: n, label: n }))];

const DEFAULT_IMAGE = giftPlaceholder;

function GiftCardCard({ p, onAdd }) {
  const productHref = `/products/${p.id}`;
  const imgSrc = p.image || DEFAULT_IMAGE;

  return (
    <div
      className="product-card"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",                 // ⬅️ karta merr lartësinë e plotë të kolonës
        borderRadius: 16,
        background: "var(--card, #0f0f0f)",
        border: "1px solid #1e1e1e",
        boxShadow: "0 16px 48px rgba(0,0,0,.5)",
        overflow: "hidden",
      }}
    >
      {/* KREJT pjesa e sipërme klikabile (foto + copy) */}
      <div
  className="product-link-block no-nav"
  aria-label={`Shiko ${p.name}`}
  tabIndex={-1}
  style={{ display: "flex", flexDirection: "column", flex: "1 1 auto", minHeight: 0 }}
>
        <div className="image-zone" style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={imgSrc}
            alt={p.name}
            className="zoom-img"
            loading="lazy"
            decoding="async"
            width={220}
            height={110}
            style={{
              maxHeight: 110,
              maxWidth: "90%",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
              transition: "transform .25s ease",
            }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = DEFAULT_IMAGE;
            }}
          />
        </div>

        {/* Përmbajtja */}
        <CardContent sx={{ px: 2, py: 1.5, flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
          <Typography
            fontWeight={600}
            fontSize={15}
            sx={{
              mb: 0.5,
              color: "var(--text)",
              display: "-webkit-box",
              WebkitLineClamp: 1,            // ⬅️ kufizo titullin në 1 rresht
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {p.name}
          </Typography>

          <Typography
            sx={{
              color: "var(--muted)",
              fontSize: 13,
              mb: 1,
              display: "-webkit-box",
              WebkitLineClamp: 2,            // ⬅️ kufizo përshkrimin në 2 rreshta
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: 34,                 // ⬅️ lartësi e qëndrueshme
            }}
          >
            {p.desc}
          </Typography>

          <Typography fontWeight={900} sx={{ color: "var(--accent)", fontSize: 20 }}>
            €{p.price}
          </Typography>
        </CardContent>
</div>
      {/* CTA jashtë linkut — gjithmonë poshtë */}
      <Box sx={{ px: 2, pb: 2, mt: "auto", position: "relative", zIndex: 2 }}>
        <Button
          fullWidth
          variant="contained"
          className="btn-accent"
          sx={{ fontSize: 16, py: 1, bgcolor: "var(--accent)", color: "#0b0b0b", fontWeight: 900, borderRadius: 999,
            "&:hover": { bgcolor: "var(--accent-hover)" } }}
          onClick={() => onAdd(p)}
          aria-label={`Shto ${p.name} në shportë`}
        >
          Shto në Shportë 🛒
        </Button>
      </Box>
    </div>
  );
}

const ProductsGiftCard = () => {
  const { addToCart } = useCart();
  const [name, setName] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState("");

  const filtered = allGiftCards.filter((p) => {
    const q = search.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(q) || (p.desc && p.desc.toLowerCase().includes(q));
    const matchesName = name === "all" || p.name === name;
    const price = Number(p.price);
    const matchesMin = minPrice === "" || price >= Number(minPrice);
    const matchesMax = maxPrice === "" || price <= Number(maxPrice);
    return matchesSearch && matchesName && matchesMin && matchesMax;
  });

  // JSON-LD: Breadcrumbs (Home > Gift Card)
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmobile.store/" },
      { "@type": "ListItem", position: 2, name: "Gift Cards", item: "https://topmobile.store/gift-cards" },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: filtered.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://topmobile.store/products/${p.id}`,
      name: p.name,
    })),
  };

  // ✅ Scroll i butë te seksioni i produkteve
  const goToProducts = (e) => {
    e.preventDefault();
    const el = document.getElementById("gift-products");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ bgcolor: "#000" }}>
      {/* SEO */}
      <SEO
        title="Gift Cards – Top Mobile"
        description="Sjellim të parët kartat dhuratë për teknologji: PlayStation, Apple, Google Play dhe Top Mobile."
        url="https://topmobile.store/gift-cards"
        image="https://topmobile.store/og-giftcards.jpg"
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>

      {/* HERO */}
      <Box className="gc-hero">
        <div className="gc-hero-inner">
          <div className="gc-hero-mini">
            SMARTPHONE • SERVISIM • <span className="gc-dot">GIFT CARDS</span> • AKSESORE
          </div>

          <h1 className="gc-hero-title">
            GIFT<br />CARDS
          </h1>

          <p className="gc-hero-sub">
            Sjellim të parët karta dhurate për<br className="br-d"/> produktet më të njohura të teknologjisë.
          </p>

          <button type="button" className="gc-cta" onClick={goToProducts} style={{ border: 0 }}>
            Eksploro Gift Card
          </button>

          <div className="gc-cards">
            <img src={appleCard100} alt="Gift Card" className="gc-card gc-card-front" />
            <img src={sonyPs50} alt="Gift Card" className="gc-card gc-card-back1" />
            <img src={appleCard50} alt="Gift Card" className="gc-card gc-card-back2" />
          </div>
        </div>

        <div className="gc-strip">
          BLEJENI KËTU TANI – KARTAT DHURATË TË TEKNOLOGJISË!
        </div>
      </Box>

      {/* PRODUKTET */}
      <Box id="gift-products" className="iphone-page" sx={{ maxWidth: 1300, mx: "auto", py: 6, px: { xs: 1, md: 4 } }}>
        <Typography component="h2" variant="h4" fontWeight={900} className="iphone-title" sx={{ mb: 3 }}>
          Gift Card – Zgjedhje të preferuara
        </Typography>

        {/* Filtrat */}
        <Box className="filters-bar" sx={{ mb: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Box
            component="input"
            type="text"
            placeholder="Kërko kartë..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Kërko kartë"
          />
          <Box
            component="select"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Filtro sipas kartës"
            sx={{
              background: "var(--chip)",
              color: "var(--text)",
              border: "1px solid var(--chip-stroke)",
              borderRadius: "14px",
              padding: "12px 14px",
              fontSize: "15px",
              outline: "none",
              transition: "border-color .15s ease, box-shadow .15s ease, background .15s ease",
              minWidth: "220px",
              "&:focus": {
                borderColor: "var(--accent)",
                boxShadow: "0 0 0 4px rgba(255,128,0,.12)",
              },
            }}
          >
            {categories.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </Box>

          <Box
            component="input"
            type="number"
            min="0"
            placeholder="Çmimi minimal"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            aria-label="Çmimi minimal"
          />
          <Box
            component="input"
            type="number"
            min="0"
            placeholder="Çmimi maksimal"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            aria-label="Çmimi maksimal"
          />
        </Box>

        {/* GRID */}
        <Box className="products-grid">
          {filtered.map((p, idx) => (
            <Box key={p.id + "_" + idx} sx={{ height: "100%" }}>
              <GiftCardCard p={p} onAdd={addToCart} />
            </Box>
          ))}
        </Box>

        {filtered.length === 0 && (
          <Typography className="empty-state" sx={{ textAlign: "center", width: "100%", py: 10, fontSize: 20, fontWeight: 600 }}>
            S’ka karta.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductsGiftCard;
