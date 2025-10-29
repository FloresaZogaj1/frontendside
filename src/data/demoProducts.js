// src/data/demoProducts.js
// Gjeneratat iPhone + iPad + Apple Watch + Accessories

import fot from "../assets/iphone_17pro__0s6piftg70ym_large-removebg-preview.png";
import fot1 from "../assets/iphone_17-removebg-preview.webp";
import fs from "../assets/images__5_-removebg-preview.png"
import fot2 from "../assets/images__2_-removebg-preview.png";
import yy from "../assets/mega-a35-1-removebg-preview.png";
import k from "../assets/71fiB25lnqL-removebg-preview.png";
import w from "../assets/51DfOhNs2yL-removebg-preview.png";
import o from "../assets/images__4_-removebg-preview.png";
import l from "../assets/iphone-13-blue-front-removebg-preview.png";
import s from "../assets/61Qqg+T8nsL-removebg-preview.png";
import p from "../assets/airpods-pro-2-hero-select-202409_FMT_WHH-removebg-preview.png";
import fota from "../assets/iphone_16__drr03yfz644m_large-removebg-preview.png";
import fote from "../assets/iphone_16e__dar81seif0cy_large-removebg-preview.png";
import a from "../assets/71D3JsltoLL._UF1000_1000_QL80_-removebg-preview.png";
import  pro from "../assets/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large-removebg-preview (1).png";
import imax from "../assets/61qYXb0BfXL._UF894_1000_QL80_-removebg-preview.png";
import se from "../assets/iphone-se-2022-1646894013-removebg-preview.png";
import de from "../assets/images__6_-removebg-preview.png";
import t from "../assets/iphone-17-air-co-may-mau-2-removebg-preview.webp";
import n from "../assets/yDn3ZSXu9eSBxmXQDZ4PCF-removebg-preview.png";
import ar from "../assets/airtag-4pack-select-202104_FMT_WHH-removebg-preview.png";
import ra from "../assets/airpods-4-anc-select-202409_FMT_WHH-removebg-preview (1).png";
import i from "../assets/Apple-M4-chip-iPad-Pro-silver-and-space-black_X-removebg-preview.png";

const GARANCIA_12M = "12 muaj";
const OS_IOS = "iOS";

const demoProducts = [
  // =======================
  // iPhone 17 FAMILY - Modelet që ekzistojnë
  // =======================
  { id: "iphone-17", slug: "iphone-17", name: "iPhone 17", price: 1099, images: [fot1], category: "iphone", description: "128GB", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.1" OLED', "Procesori": "Apple A18", "Memoria": "128GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},
  { id: "iphone-air", slug: "iphone-17-air", name: "iPhone Air", price: 1249, images: [t], category: "iphone", description: "128GB - Ultra slim design", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.6" OLED', "Procesori": "Apple A18", "Memoria": "128GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},
  { id: "samsung-s24-ultra", slug: "samsung-galaxy-s24-ultra", name: "Samsung Galaxy S24 Ultra", price: 1299, images: [yy], category: "samsung", description: "256GB Titanium Gray", isNew: true, tags: ["new","samsung","android"], badge: "new", specs: { "Ekrani": '6.8" Dynamic AMOLED', "Procesori": "Snapdragon 8 Gen 3", "Memoria": "256GB", "Sistemi Operativ": "Android 14", "Garancia": GARANCIA_12M }},
  { id: "iphone-17-pro-max", slug: "iphone-17-pro-max", name: "iPhone 17 Pro Max", price: 1499, images: [fot], category: "iphone", description: "256GB", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.9" OLED 120Hz', "Procesori": "Apple A18 Pro", "Memoria": "256GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},

  // =======================
  // iPhone 16 FAMILY
  // =======================
  { id: "iphone-16", slug: "iphone-16", name: "iPhone 16", price: 899, images: [fota], category: "iphone", description: "128GB", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.1" OLED', "Procesori": "Apple A17", "Memoria": "128GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},
  { id: "iphone-16-plus", slug: "iphone-16-plus", name: "iPhone 16 Plus", price: 999, images: [a], category: "iphone", description: "128GB", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.7" OLED', "Procesori": "Apple A17", "Memoria": "128GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},
  { id: "iphone-16-pro", slug: "iphone-16-pro", name: "iPhone 16 Pro", price: 1199, images: [pro], category: "iphone", description: "256GB", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.1" OLED 120Hz', "Procesori": "Apple A18 Pro", "Memoria": "256GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},
  { id: "iphone-16-pro-max", slug: "iphone-16-pro-max", name: "iPhone 16 Pro Max", price: 1349, images: [imax], category: "iphone", description: "256GB", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.7" OLED 120Hz', "Procesori": "Apple A18 Pro", "Memoria": "256GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},
  { id: "iphone-16e", slug: "iphone-16e", name: "iPhone 16e", price: 729, images: [fote], category: "iphone", description: "128GB", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.1" OLED', "Procesori": "Apple A16", "Memoria": "128GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},

  // =======================
  // iPhone 15, 14, 13, SE
  // =======================
  { id: "iphone-15", slug: "iphone-15", name: "iPhone 15", price: 859, images: [n], category: "iphone", description: "128GB", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.1" OLED', "Procesori": "Apple A16", "Memoria": "128GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},
  { id: "iphone-15-pro-max", slug: "iphone-15-pro-max", name: "iPhone 15 Pro Max", price: 1289, images: [fot], category: "iphone", description: "256GB Titanium", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.7" OLED 120Hz', "Procesori": "Apple A17 Pro", "Memoria": "256GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},
  { id: "iphone-14", slug: "iphone-14", name: "iPhone 14", price: 789, images: [fot2], category: "iphone", description: "128GB Blue", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.1" OLED', "Procesori": "Apple A15", "Memoria": "128GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},
  { id: "iphone-14-pro", slug: "iphone-14-pro", name: "iPhone 14 Pro", price: 999, images: [fot2], category: "iphone", description: "128GB", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.1" OLED 120Hz', "Procesori": "Apple A16", "Memoria": "128GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},
  { id: "iphone-13", slug: "iphone-13", name: "iPhone 13", price: 639, images: [l], category: "iphone", description: "128GB", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.1" OLED', "Procesori": "Apple A15", "Memoria": "128GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},
  { id: "iphone-13-pro", slug: "iphone-13-pro", name: "iPhone 13 Pro", price: 799, images: [l], category: "iphone", description: "128GB", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '6.1" OLED 120Hz', "Procesori": "Apple A15", "Memoria": "128GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},
  { id: "iphone-se-2022", slug: "iphone-se-2022", name: "iPhone SE (2022)", price: 489, images: [se], category: "iphone", description: "64GB Red", isNew: true, tags: ["new","apple","iphone"], badge: "new", specs: { "Ekrani": '4.7" Retina HD', "Procesori": "Apple A15", "Memoria": "64GB", "Sistemi Operativ": OS_IOS, "Garancia": GARANCIA_12M }},

  // =======================
  // iPad FAMILY
  // =======================
  { id: "ipad-pro-m4", slug: "ipad-pro-m4", name: "iPad Pro 13” (M4)", price: 1399, images: [i], category: "ipad", description: "13-inch Liquid Retina, 256GB", isNew: true, tags: ["new","apple","ipad"], badge: "new", specs: { "Ekrani": '13" OLED', "Procesori": "Apple M4", "Memoria": "256GB", "Sistemi Operativ": "iPadOS", "Garancia": GARANCIA_12M }},
  { id: "ipad-air-m2", slug: "ipad-air-m2", name: "iPad Air 11” (M2)", price: 699, images: [i], category: "ipad", description: "11-inch, 128GB", isNew: true, tags: ["new","apple","ipad"], badge: "new", specs: { "Ekrani": '11" LCD', "Procesori": "Apple M2", "Memoria": "128GB", "Sistemi Operativ": "iPadOS", "Garancia": GARANCIA_12M }},
  { id: "ipad-mini-6", slug: "ipad-mini-6", name: "iPad mini (6th Gen)", price: 549, images: [i], category: "ipad", description: "8.3-inch, 64GB", isNew: true, tags: ["new","apple","ipad"], badge: "new", specs: { "Ekrani": '8.3" LCD', "Procesori": "Apple A15", "Memoria": "64GB", "Sistemi Operativ": "iPadOS", "Garancia": GARANCIA_12M }},

  // =======================
  // Apple Watch FAMILY
  // =======================
  { id: "watch-ultra-2", slug: "watch-ultra-2", name: "Apple Watch Ultra 2", price: 899, images: [i], category: "watch", description: "49mm GPS + Cellular", isNew: true, tags: ["new","apple","watch"], badge: "new", specs: { "Ekrani": "49mm Retina", "Procesori": "S9", "Sistemi Operativ": "watchOS", "Garancia": GARANCIA_12M }},
  { id: "watch-series-10", slug: "watch-series-10", name: "Apple Watch Series 10", price: 459, images: [i], category: "watch", description: "45mm GPS", isNew: true, tags: ["new","apple","watch"], badge: "new", specs: { "Ekrani": "45mm Retina", "Procesori": "S10", "Sistemi Operativ": "watchOS", "Garancia": GARANCIA_12M }},
  { id: "watch-se-2024", slug: "watch-se-2024", name: "Apple Watch SE (2024)", price: 299, images: [i], category: "watch", description: "40mm GPS", isNew: true, tags: ["new","apple","watch"], badge: "new", specs: { "Ekrani": "40mm Retina", "Procesori": "S8", "Sistemi Operativ": "watchOS", "Garancia": GARANCIA_12M }},

  // =======================
  // Accessories
  // =======================
  { id: "airpods-4", slug: "airpods-4", name: "AirPods 4 (USB-C, ANC)", price: 199, images: [ra], category: "accessories", description: "Gjenerata e re me anulim zhurme", isNew: true, tags: ["new","apple","audio"], badge: "new", specs: { "Procesori": "Apple H2", "ANC": "Po", "Garancia": GARANCIA_12M }},
  { id: "airtag-2025", slug: "airtag-2025", name: "AirTag (4-Pack) 2025", price: 119, images: [ar], category: "accessories", description: "Set 4 copë me Precision Finding UWB", isNew: true, tags: ["new","apple","tracker"], badge: "new", specs: { "Chip": "U1", "Bateria": "CR2032", "Garancia": GARANCIA_12M }},
];

export default demoProducts;
