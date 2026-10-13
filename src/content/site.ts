export const site = {
  name: "Bligomi",
  legalName: "PT Bligo Mahia Inovasi",
  foundation: "Bligo Foundation",
  foundationLegal: "Yayasan Bligo Amanah Insani",
  url: "https://www.bligomi.com",
  domain: "www.bligomi.com",
  tagline: "Menyemai Inovasi, Memetik Kesejahteraan Bersama",
  sustainabilityTagline: "Menjaga Bumi, Membina Insan, Menumbuhkan Kesejahteraan",
  description:
    "Portal resmi Group Usaha PT Bligo Mahia Inovasi — grup perusahaan yang memadukan inovasi bisnis, tata kelola profesional, serta komitmen pada tanggung jawab sosial dan kelestarian lingkungan.",
  founded: 2021,
  address: {
    street: "Jl. Boyolali – Semarang, Desa Bulusari, Kecamatan Ampel",
    region: "Kabupaten Boyolali, Jawa Tengah",
    country: "Indonesia",
  },
  // Isi bila sudah tersedia. Baris yang kosong otomatis tampil sebagai "Menyusul".
  contact: {
    phone: "",
    whatsapp: "",
    email: "",
  },
} as const;

export type NavChild = { label: string; href: string; desc: string };
export type NavItem = { label: string; href: string; children: NavChild[] };

// Susunan menu utama: siapa kami → komitmen kami → kabar dari kami.
// Beranda dicapai lewat logo; kontak menjadi tombol ajakan di ujung kanan.
// Dipakai bersama oleh header, menu seluler, dan footer.
export const nav: NavItem[] = [
  {
    label: "Tentang Kami",
    href: "/tentang-kami",
    children: [
      {
        label: "Sekilas Grup",
        href: "/tentang-kami",
        desc: "Ekosistem grup usaha dan nilai-nilai utamanya",
      },
      {
        label: "Profil Perusahaan",
        href: "/tentang-kami/profil-perusahaan",
        desc: "PT Bligo Mahia Inovasi dan filosofinya",
      },
      {
        label: "Visi & Misi",
        href: "/tentang-kami/profil-perusahaan#visi",
        desc: "Arah dan langkah strategis perusahaan",
      },
      {
        label: "Nilai & Pilar Strategi",
        href: "/tentang-kami/profil-perusahaan#nilai",
        desc: "Tiga nilai inti dan lima pilar strategi",
      },
    ],
  },
  {
    label: "Keberlanjutan",
    href: "/keberlanjutan",
    children: [
      {
        label: "Bligo Foundation",
        href: "/keberlanjutan",
        desc: "Yayasan Bligo Amanah Insani",
      },
      {
        label: "Tiga Pilar Utama",
        href: "/keberlanjutan#tiga-pilar",
        desc: "Insan, masyarakat, dan lingkungan",
      },
      {
        label: "Tata Kelola Program",
        href: "/keberlanjutan#tata-kelola",
        desc: "Transparansi dan akuntabilitas",
      },
    ],
  },
  {
    label: "Ruang Media",
    href: "/ruang-media",
    children: [
      {
        label: "Semua Artikel",
        href: "/ruang-media",
        desc: "Berita bisnis dan wawasan usaha terbaru",
      },
      {
        label: "Keuangan Kita",
        href: "/ruang-media/keuangan-kita",
        desc: "Perpajakan dan keuangan usaha",
      },
      {
        label: "Kabar Wirausaha",
        href: "/ruang-media/kabar-wirausaha",
        desc: "Bekal memulai dan mengelola usaha",
      },
      {
        label: "Peternakan",
        href: "/ruang-media/peternakan",
        desc: "Peluang dan tantangan sektor peternakan",
      },
    ],
  },
];

export const contactLink = { label: "Hubungi Kami", href: "/tentang-kami#kontak" };
