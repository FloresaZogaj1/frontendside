import airpods from "../assets/airpods-pro-2-removebg-preview (1).png"
import im from "../assets/619EDe7KD8L-removebg-preview.png";
import mags from "../assets/magsafe-accessories-pp-header-removebg-preview.png";
import af from "../assets/images-removebg-preview (1).png";
import py from "../assets/615HRY2dnML._UF350_350_QL80_-removebg-preview.png";
import cv from "../assets/51voSLLr+9L-removebg-preview.png";
import hr from "../assets/HRGH2-removebg-preview.png";
import nm from "../assets/images__1_-removebg-preview.png"

const accessoriesproducts = [
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2",
    description: "Apple AirPods Pro (2nd Gen), ANC, MagSafe.",
    price: 289,
    oldPrice: 309,
    images: [airpods ],
    specs: {
      Tipi: "In-ear Wireless",
      "Reduktim Zhurme (ANC)": "Po",
      MagSafe: "Po",
      Bateria: "6h (pa kutinë), 30h total",
      Karikim: "USB-C & Wireless",
      Garancia: "12 muaj",
    },
    category: "accessory",
  },
  {
    id: "baseus-pb-20000",
    name: "Baseus PowerBank 20.000mAh",
    description: "Karikim i shpejtë, Type-C/USB, kapacitet i madh.",
    price: 99,
    oldPrice: 109,
    images: [im ],
    specs: {
      Kapaciteti: "20,000mAh",
      Input: "USB-C, MicroUSB",
      Output: "2x USB-A, 1x USB-C",
      "Power Delivery": "Po, deri 18W",
      Garancia: "12 muaj",
    },
    category: "accessory",
  },
  {
    id: "magsafe-charger",
    name: "Apple MagSafe Charger",
    description: "Karikim wireless me MagSafe për iPhone dhe AirPods.",
    price: 95,
    oldPrice: 99,
    images: [
      mags
    ],
    specs: {
      Lloji: "Wireless Magnetic",
      Fuqia: "15W",
      Kompatibilitet: "iPhone 12/13/14/15, AirPods MagSafe",
      Garancia: "12 muaj",
    },
    category: "accessory",
  },
  {
    id: "galaxy-buds-2",
    name: "Samsung Galaxy Buds 2",
    description: "Dëgjues wireless me ANC dhe bateri të gjatë.",
    price: 149,
    oldPrice: 169,
    images: [
      af
    ],
    specs: {
      Tipi: "In-ear Wireless",
      "Reduktim Zhurme (ANC)": "Po",
      Bateria: "7.5h (pa kuti), 20h total",
      Karikim: "USB-C & Wireless",
      Garancia: "12 muaj",
    },
    category: "accessory",
  },
  {
    id: "anker-hub",
    name: "Anker USB-C Hub",
    description: "Hub 7 në 1 me porte USB, HDMI, SD, Type-C.",
    price: 115,
    oldPrice: 129,
    images: [
     py
    ],
    specs: {
      Porte: "2x USB-A, 1x HDMI, 1x SD, 1x microSD, 1x USB-C PD",
      "Rezolucion HDMI": "4K@30Hz",
      "Power Delivery": "Po, deri 100W",
      Garancia: "12 muaj",
    },
    category: "accessory",
  },
  {
    id: "spigen-armor-15pm",
    name: "Spigen Rugged Armor Case",
    description: "Mbështjellës i fortë dhe elegant për iPhone 15 Pro Max.",
    price: 79,
    oldPrice: 84,
    images: [
      cv
    ],
    specs: {
      Kompatibilitet: "iPhone 15 Pro Max",
      Material: "TPU, rezistent ndaj goditjeve",
      "Mbështetje MagSafe": "Po",
      Garancia: "6 muaj",
    },
    category: "accessory",
  },
  // Produkti i ri 1
  {
    id: "belkin-boost-charge",
    name: "Belkin Boost Charge Pro 3-in-1",
    description: "Karikues i shpejtë wireless për iPhone, Apple Watch dhe AirPods.",
    price: 149,
    oldPrice: 159,
    images: [
      hr
    ],
    specs: {
      "Karikim Wireless": "Po",
      "Përputhshmëria": "iPhone, Apple Watch, AirPods",
      "Fuqia Maksimale": "15W",
      Garancia: "12 muaj",
    },
    category: "accessory",
  },
  // Produkti i ri 2
  {
    id: "nomad-stand-charger",
    name: "Nomad Base Station Stand",
    description: "Stacion karikimi wireless për deri në 3 pajisje njëkohësisht.",
    price: 199,
    oldPrice: 219,
    images: [
      nm
    ],
    specs: {
      "Kapaciteti": "3 pajisje njëkohësisht",
      "Teknologjia": "Wireless Qi",
      "Materiali": "Alumini anodizuar",
      Garancia: "12 muaj",
    },
    category: "accessory",
  },
];

export default accessoriesproducts;
