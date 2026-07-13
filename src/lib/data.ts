export const services = [
  {
    id: "special-event",
    category: "Bridesmaid / Photoshoot / Kondangan / Birthday / Lomba",
    name: "Special Event Makeup",
    price: 175000,
    includes: ["Makeup", "Fake lashes", "Homeservice minimal 2 orang"],
    badge: null,
    expandablePackage: {
      name: "Special Event Premium",
      price: 210000,
      includes: ["Makeup", "Fake lashes 3D", "Free clean hijab"],
    },
  },
  {
    id: "graduation",
    category: "Wisuda",
    name: "Graduation Makeup",
    price: 270000,
    includes: ["Makeup", "Fake lashes 3D", "Request look makeup (signature serlimarselina.makeup)", "Free clean hijab", "Free pemasangan toga", "Free Transport area Purwokerto"],
    badge: null,
  },
  {
    id: "engagement",
    category: "Lamaran",
    name: "Engagement Makeup",
    price: 300000,
    includes: ["Makeup", "Fake lashes 3D", "Request look makeup (signature serlimarselina.makeup)", "Free clean hijab", "Free softlens"],
    badge: null,
    expandablePackage: {
      name: "Engagement Package",
      price: 750000,
      includes: ["Makeup by request", "Softlens", "Fake lashes 3D", "Free clean hijab"],
      includes2: {
        label: "Decoration by Keidecoration.id",
        items: ["Dekor 2–3 meter", "Kursi 2 pcs", "Handbouquet", "Ringbox", "Welcome sign"],
      },
    },
  },
  {
    id: "prewedding",
    category: "Foto Prewed",
    name: "Prewedding Makeup",
    price: 300000,
    includes: ["Makeup", "Fake lashes 3D", "Request look makeup (signature serlimarselina.makeup)", "Free clean hijab", "Free softlens"],
    badge: null,
  },
  {
    id: "wedding-silver",
    category: "Akad Nikah",
    name: "Wedding Makeup",
    price: 800000,
    includes: ["Makeup by request", "Softlens", "Premium fake nails", "Hijab / hair do"],
    badge: null,
    fullWidth: true,
  },
  {
    id: "wedding-gold",
    category: "Akad Nikah",
    name: "Wedding Makeup",
    price: 1300000,
    includes: ["Makeup by request", "Softlens", "Premium fake nails", "Hijab / hair do", "Rent attire akad 1x", "Hena art", "Free rent acc solo putri"],
    badge: "Paket Spesial",
  },
];

export const addons = [
  {
    name: "Softlens",
    price: 40000,
    note: "Untuk softlens minus, konfirmasi max H-7",
    includes: [] as string[],
  },
  {
    name: "Hijab Styling",
    price: 50000,
    note: null,
    includes: [
      "Prewedding look adat (free rent acc)",
      "Akad syar'i drayperi instan (free rent dryperi instan)",
    ],
  },
  {
    name: "Press On Nails Premium",
    price: 50000,
    note: "Konfirmasi maksimal H-7",
    includes: [
      "Design by request",
    ],
  },
];

export const terms = [
  "Harga belum termasuk biaya transport jika homeservice",
  "Tambahan softlens Rp 40.000 (untuk softlens minus, konfirmasi max H-7)",
  "Reschedule H-3 menyesuaikan jadwal owner",
  "Pembatalan sepihak: DP hangus dan tidak dapat dikembalikan",
  "Hijab styling dikenakan charge Rp 50.000",
  "Pelunasan dilakukan setelah makeup selesai",
];

export const testimonials = [
  { name: "Rizki A.", service: "Wedding Makeup", rating: 5, quote: "Hasilnya natural tapi tetap glam, semua tamu bilang cantik! Serli sabar dan profesional banget." },
  { name: "Dina S.", service: "Graduation Makeup", rating: 5, quote: "Makeup-nya tahan dari pagi sampai malam, recommended banget untuk wisuda!" },
  { name: "Annisa P.", service: "Engagement Makeup", rating: 5, quote: "Serli detail banget, hasilnya melebihi ekspektasi. Puas banget!" },
  { name: "Hana W.", service: "Prewedding Makeup", rating: 5, quote: "Cocok banget buat foto outdoor, warnanya pas dan fotonya jadi cantik semua." },
  { name: "Mila R.", service: "Wedding Makeup", rating: 5, quote: "Sudah 2 kali booking Serli, selalu memuaskan. Wajib coba!" },
  { name: "Sari N.", service: "Graduation Makeup", rating: 5, quote: "Orangnya ramah, hasil makeupnya rapi dan bersih. Worth it banget." },
];

export const brand = {
  name: "Serli Marselina",
  nameFull: "Serli Marselina Makeup",
  tagline: "Tampil Cantik di Momen Terbaik Hidupmu",
  subTagline: "Jasa Makeup Artist Profesional — Purwokerto & Sekitarnya",
  whatsapp: "6287890536491",
  whatsappDisplay: "0878-9053-6491",
  whatsappMessage: "Halo Serli, saya tertarik dengan layanan makeup Anda. Boleh saya tanya-tanya dulu?",
  instagram: "serlimarselina.makeup",
  instagramUrl: "https://instagram.com/serlimarselina.makeup",
  location: "Perum Emerald Village 2, Ciberem, Sumbang, Banyumas",
  areas: ["Purwokerto", "Banyumas", "Sumbang", "Cilacap", "Kebumen", "Purbalingga"],
};

export const portfolioImages = [
  { src: "/portfolio/photo-1.jpg", category: "Wedding", alt: "Wedding makeup — kebaya merah" },
  { src: "/portfolio/photo-4.jpg", category: "Engagement", alt: "Engagement makeup — kebaya biru" },
  { src: "/portfolio/photo-7.jpg", category: "Graduation", alt: "Graduation makeup — wisuda cumlaude" },
  { src: "/portfolio/photo-2.jpg", category: "Wedding", alt: "Wedding makeup — pengantin merah" },
  { src: "/portfolio/photo-5.jpg", category: "Engagement", alt: "Engagement makeup — close up" },
  { src: "/portfolio/photo-8.jpg", category: "Graduation", alt: "Graduation makeup — wisuda" },
  { src: "/portfolio/photo-3.jpg", category: "Wedding", alt: "Wedding makeup — detail pengantin" },
  { src: "/portfolio/photo-9.jpg", category: "Graduation", alt: "Graduation makeup — wisuda senyum" },
  { src: "/portfolio/photo-10.jpg", category: "Graduation", alt: "Graduation makeup — wisuda close up" },
  { src: "/portfolio/photo-6.jpg", category: "Engagement", alt: "Engagement makeup — pose elegan" },
];

export const tiktokVideos = [
  {
    id: "7589271847665945877",
    description: "Aamiin.. #muapurwokerto #muapwt #bismillah",
    thumb: "/tiktok/thumb-7589271847665945877.jpg",
    url: "https://www.tiktok.com/@serliiim_/video/7589271847665945877",
  },
  {
    id: "7586566619145587989",
    description: "Wedding Makeup 🤍 #makeupwedding #soloputrihijab #makeuppurwokerto",
    thumb: "/tiktok/thumb-7586566619145587989.jpg",
    url: "https://www.tiktok.com/@serliiim_/video/7586566619145587989",
  },
  {
    id: "7586560026169445652",
    description: "2 jam untuk 1 menit ++ 😮‍💨 #tutorialmakeup #stepbystepmakeup #makeupakad",
    thumb: "/tiktok/thumb-7586560026169445652.jpg",
    url: "https://www.tiktok.com/@serliiim_/video/7586560026169445652",
  },
  {
    id: "7585498436703685909",
    description: "Akad Makeup ✨ #muapurwokerto #makeupakadpurwokerto #makeupweddingpurwokerto",
    thumb: "/tiktok/thumb-7585498436703685909.jpg",
    url: "https://www.tiktok.com/@serliiim_/video/7585498436703685909",
  },
  {
    id: "7580544226488798484",
    description: "Prewedding Look 💕 #makeuppreweddingpurwokerto #preweddingpurwokerto",
    thumb: "/tiktok/thumb-7580544226488798484.jpg",
    url: "https://www.tiktok.com/@serliiim_/video/7580544226488798484",
  },
  {
    id: "7579639364687367444",
    description: "Hampir semua lokal brand 🥹🫶 #bersih #kuasmakeup #muapurwokerto",
    thumb: "/tiktok/thumb-7579639364687367444.jpg",
    url: "https://www.tiktok.com/@serliiim_/video/7579639364687367444",
  },
  {
    id: "7579504569084939540",
    description: "Flawless Makeup ✨ #muapurwokerto #muapwt #makeupflawless #muabanyumas",
    thumb: "/tiktok/thumb-7579504569084939540.jpg",
    url: "https://www.tiktok.com/@serliiim_/video/7579504569084939540",
  },
  {
    id: "7577379100147584277",
    description: "Wisuda Makeup 🎓 #makeupwisudapurwokerto #wisudapurwokerto #muabanyumas",
    thumb: "/tiktok/thumb-7577379100147584277.jpg",
    url: "https://www.tiktok.com/@serliiim_/video/7577379100147584277",
  },
  {
    id: "7577027791456128277",
    description: "🤭🤭 #muapurwokerto #makeuppurwokerto #muapwt #muapurbalingga",
    thumb: "/tiktok/thumb-7577027791456128277.jpg",
    url: "https://www.tiktok.com/@serliiim_/video/7577027791456128277",
  },
  {
    id: "7561317018150898956",
    description: "Akad Syar'i look 💗 #muapurwokerto #muapwt #makeuppurwokerto",
    thumb: "/tiktok/thumb-7561317018150898956.jpg",
    url: "https://www.tiktok.com/@serliiim_/video/7561317018150898956",
  },
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};
