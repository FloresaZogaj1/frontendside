
import foto21 from "../assets/images__2_-removebg-preview (1).png";
import foto22 from  "../assets/landscape-samsung-galaxyA55-awesomeLilac-02-900x1200-removebg-preview.png";
import foto23 from "../assets/global-color-kv_static_pc-removebg-preview.png";
import foto777 from "../assets/images__3_-removebg-preview.png";
import fe from "../assets/Samsung-Galaxy-S21-FE-5G-featured-image-packshot-review-removebg-preview.png";
import sh from "../assets/Samsungs-hot-new-Galaxy-A25-5G-receives-first-ever-discount-at-Amazon-removebg-preview.png";
import zf from "../assets/images__4_-removebg-preview.png";
import a5 from "../assets/Samsung-Galaxy-A15-5G-Review-Is-this-sub-200-phone-good-enough-removebg-preview.png"
const samsungProducts= [
  {
    id: "galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    description: "Galaxy S24 Ultra, 12GB RAM, 512GB, 200MP",
    price: 715,      // 1150 + 50
    oldPrice: 755,   // 1270 + 50
    images: [
      foto21
    ],
    specs: {
      Ekrani: "6.8” QHD+ AMOLED, 120Hz",
      Procesori: "Snapdragon 8 Gen 3",
      Memoria: "512GB",
      RAM: "12GB",
      "Kamera Kryesore": "200MP + 50MP + 12MP + 10MP",
      "Kamera Selfie": "12MP",
      Bateria: "5000mAh",
      Ngjyra: "Phantom Black",
      Garancia: "12 muaj",
    },
    category: "phone",
  },
  {
    id: "galaxy-a55",
    name: "Samsung Galaxy A55",
    description: "Galaxy A55, 6.6” ekran, 128GB, 5000mAh.",
    price: 305,       // 380 + 50
    oldPrice: 350,    // 420 + 50
    images: [
foto22    ],
    specs: {
      Ekrani: "6.6” Super AMOLED, 120Hz",
      Procesori: "Exynos 1480",
      Memoria: "128GB",
      RAM: "8GB",
      "Kamera Kryesore": "50MP + 12MP + 5MP",
      "Kamera Selfie": "32MP",
      Bateria: "5000mAh",
      Ngjyra: "Awesome Ice Blue",
      Garancia: "12 muaj",
    },
    category: "phone",
  },
  {
    id: "galaxy-z-flip-5",
    name: "Samsung Galaxy Z Flip 5",
    description: "Z Flip 5, telefon i palosshëm, 8GB RAM, 256GB.",
    price: 719,       // 790 + 50
    oldPrice: 769,   // 990 + 50
    images: [
foto23    ],
    specs: {
      Ekrani: "6.7” Dynamic AMOLED 2X, 120Hz",
      Procesori: "Snapdragon 8 Gen 2",
      Memoria: "256GB",
      RAM: "8GB",
      "Kamera Kryesore": "12MP + 12MP",
      "Kamera Selfie": "10MP",
      Bateria: "3700mAh",
      Ngjyra: "Mint",
      Garancia: "12 muaj",
    },
    category: "phone",
  },
  {
    id: "galaxy-s23-fe",
    name: "Samsung Galaxy S23 FE",
    description: "S23 FE, 8GB RAM, 128GB, 6.4” ekran, 5G.",
    price: 650,       // 600 + 50
    oldPrice: 740,    // 690 + 50
    images: [
      "https://clevercel.mx/cdn/shop/files/Portadas_SamsungS23FE.webp?v=1748624528"
    ],
    specs: {
      Ekrani: "6.4” Dynamic AMOLED 2X, 120Hz",
      Procesori: "Exynos 2200",
      Memoria: "128GB",
      RAM: "8GB",
      "Kamera Kryesore": "50MP + 8MP + 12MP",
      "Kamera Selfie": "10MP",
      Bateria: "4500mAh",
      Ngjyra: "Graphite",
      Garancia: "12 muaj",
    },
    category: "phone",
  },
  {
    id: "galaxy-s23-ultra",
    name: "Samsung Galaxy S23 Ultra",
    description: "S23 Ultra, 12GB RAM, 256GB, kamera 200MP.",
    price: 680,      // 1050 + 50
    oldPrice: 720,   // 1200 + 50
    images: [
      "https://static.vecteezy.com/system/resources/previews/022/722/945/non_2x/samsung-galaxy-s23-ultra-transparent-image-free-png.png"
    ],
    specs: {
      Ekrani: "6.8” Dynamic AMOLED 2X, 120Hz",
      Procesori: "Snapdragon 8 Gen 2",
      Memoria: "256GB",
      RAM: "12GB",
      "Kamera Kryesore": "200MP + 10MP + 12MP + 10MP",
      "Kamera Selfie": "12MP",
      Bateria: "5000mAh",
      Ngjyra: "Green",
      Garancia: "12 muaj",
    },
    category: "phone",
  },
  {
    id: "galaxy-a35",
    name: "Samsung Galaxy A35",
    description: "A35, 6.6” Super AMOLED, 128GB, 5000mAh.",
    price: 279,       // 310 + 50
    oldPrice: 320,    // 350 + 50
    images: [
      "https://images.samsung.com/is/image/samsung/p6pim/za/sm-a356elbmafa/gallery/za-galaxy-a35-5g-sm-a356-sm-a356elbmafa-540434219?$684_547_PNG$"
    ],
    specs: {
      Ekrani: "6.6” Super AMOLED, 120Hz",
      Procesori: "Exynos 1380",
      Memoria: "128GB",
      RAM: "6GB",
      "Kamera Kryesore": "50MP + 8MP + 5MP",
      "Kamera Selfie": "13MP",
      Bateria: "5000mAh",
      Ngjyra: "Awesome Navy",
      Garancia: "12 muaj",
    },
    category: "phone",
  },
  {
    id: "galaxy-s22",
    name: "Samsung Galaxy S22",
    description: "S22, 8GB RAM, 128GB, ekran kompakt 6.1”.",
    price: 699,       // 580 + 50
    images: [
foto777    ],
    specs: {
      Ekrani: "6.1” Dynamic AMOLED 2X, 120Hz",
      Procesori: "Snapdragon 8 Gen 1",
      Memoria: "128GB",
      RAM: "8GB",
      "Kamera Kryesore": "50MP + 10MP + 12MP",
      "Kamera Selfie": "10MP",
      Bateria: "3700mAh",
      Ngjyra: "Phantom White",
      Garancia: "12 muaj",
    },
    category: "phone",
  },
  {
    id: "galaxy-m34",
    name: "Samsung Galaxy M34",
    description: "M34, 6.5” Super AMOLED, 128GB.",
    price: 339.50,       // 220 + 50
   // 260 + 50
    images: [
      "https://images.samsung.com/is/image/samsung/p6pim/hk_en/sm-m346bdbptgy/gallery/hk-en-galaxy-m34-5g-sm-m346-sm-m346bdbptgy-538449778?$624_624_PNG$"
    ],
    specs: {
      Ekrani: "6.5” Super AMOLED, 120Hz",
      Procesori: "Exynos 1280",
      Memoria: "128GB",
      RAM: "6GB",
      "Kamera Kryesore": "50MP + 8MP + 2MP",
      "Kamera Selfie": "13MP",
      Bateria: "6000mAh",
      Ngjyra: "Prism Silver",
      Garancia: "12 muaj",
    },
    category: "phone",
  },
  {
    id: "galaxy-s21-fe",
    name: "Samsung Galaxy S21 FE",
    description: "S21 FE, 6.4” AMOLED, 128GB, 5G.",
    price: 869,       // 420 + 50
    images: [
fe    ],
    specs: {
      Ekrani: "6.4” Dynamic AMOLED 2X, 120Hz",
      Procesori: "Snapdragon 888",
      Memoria: "128GB",
      RAM: "6GB",
      "Kamera Kryesore": "12MP + 8MP + 12MP",
      "Kamera Selfie": "32MP",
      Bateria: "4500mAh",
      Ngjyra: "Lavender",
      Garancia: "12 muaj",
    },
    category: "phone",
  },
  {
    id: "galaxy-a25",
    name: "Samsung Galaxy A25",
    description: "A25, 6.5” Super AMOLED, 128GB, 5000mAh.",
    price: 349,       // 235 + 50
    images: [
sh    ],
    specs: {
      Ekrani: "6.5” Super AMOLED, 120Hz",
      Procesori: "Exynos 1280",
      Memoria: "128GB",
      RAM: "6GB",
      "Kamera Kryesore": "50MP + 8MP + 2MP",
      "Kamera Selfie": "13MP",
      Bateria: "5000mAh",
      Ngjyra: "Blue",
      Garancia: "12 muaj",
    },
    category: "phone",
  },
  {
    id: "galaxy-z-fold-5",
    name: "Samsung Galaxy Z Fold 5",
    description: "Z Fold 5, 7.6” ekran i palosshëm, 12GB RAM.",
    price: 2000.59,      // 1340 + 50
    images: [
zf    ],
    specs: {
      Ekrani: "7.6” Foldable Dynamic AMOLED 2X, 120Hz",
      Procesori: "Snapdragon 8 Gen 2",
      Memoria: "256GB",
      RAM: "12GB",
      "Kamera Kryesore": "50MP + 12MP + 10MP",
      "Kamera Selfie": "10MP",
      Bateria: "4400mAh",
      Ngjyra: "Icy Blue",
      Garancia: "12 muaj",
    },
    category: "phone",
  },
  {
    id: "galaxy-a15",
    name: "Samsung Galaxy A15",
    description: "A15, 6.5” ekran, 128GB, kamera të avancuara.",
    price: 269,       // 180 + 50
    images: [
a5    ],
    specs: {
      Ekrani: "6.5” Super AMOLED, 90Hz",
      Procesori: "Mediatek Helio G99",
      Memoria: "128GB",
      RAM: "4GB",
      "Kamera Kryesore": "50MP + 5MP + 2MP",
      "Kamera Selfie": "13MP",
      Bateria: "5000mAh",
      Ngjyra: "Blue Black",
      Garancia: "12 muaj",
    },
    category: "phone",
  },
];

export default samsungProducts;
