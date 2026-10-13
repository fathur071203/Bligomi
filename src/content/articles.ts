import type { ImageKey } from "./images";

// Naskah artikel dipindahkan dari bligomi.com apa adanya. Yang dirapikan hanya
// salah ketik dan tata letak (subjudul, daftar, tabel). Bagian yang di situs lama
// masih berupa placeholder ("....") tidak ikut dipindahkan.

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "note"; text: string };

export const categories = {
  "keuangan-kita": {
    label: "Keuangan Kita",
    blurb: "Catatan ringkas seputar perpajakan dan pengelolaan keuangan usaha.",
  },
  "kabar-wirausaha": {
    label: "Kabar Wirausaha",
    blurb: "Bekal memulai usaha: dari profil risiko sampai memilih badan hukum.",
  },
  peternakan: {
    label: "Peternakan",
    blurb: "Peluang dan tantangan usaha di sektor peternakan.",
  },
} as const;

export type CategoryKey = keyof typeof categories;

export type Article = {
  slug: string; // sama dengan URL lama: /artikel/<slug>
  title: string;
  date: string; // ISO
  categories: CategoryKey[];
  excerpt: string;
  cover: ImageKey;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "pemilihan-badan-hukum",
    title: "Pemilihan Badan Hukum Perusahaan",
    date: "2022-05-24",
    categories: ["kabar-wirausaha"],
    cover: "lahanLereng",
    excerpt:
      "Ketika bidang usaha telah diputuskan, langkah berikutnya adalah memilih badan hukum. Setiap bentuk punya kelebihan dan kekurangannya sendiri.",
    body: [
      {
        t: "p",
        text: "Ketika bidang usaha telah diputuskan, perlu memilih badan hukum yang akan dipilih. Badan hukum usaha untuk pemula bisa berbentuk Perseroan Terbatas (PT), Perseroan Terbatas Perseorangan (PT Perseorangan), Perseorangan, CV, Firma, atau koperasi.",
      },
      {
        t: "p",
        text: "Semua badan usaha memiliki kelebihan dan kekurangan sesuai dengan badan hukum yang dipilih. Secara garis besar, yang perlu dipikirkan ketika membentuk badan usaha antara lain:",
      },
      {
        t: "ul",
        items: [
          "Tanggung jawab akhir tiap bentuk badan usaha perusahaan berbeda-beda. Terkait tanggung jawab perusahaan, secara umum ada dua, yaitu sampai dengan ke pribadi pengusaha atau sebesar dana yang ditempatkan.",
          "Secara legalitas, jumlah pendiri atas badan hukum diatur sesuai dengan jenis badan hukum.",
          "Kepemilikan dan hak suara atas usaha dibedakan sesuai dengan jenis badan hukum.",
        ],
      },
      { t: "h2", text: "Bentuk badan usaha yang dapat dipilih" },
      {
        t: "ol",
        items: [
          "Perseroan Terbatas (PT)",
          "Perseroan Terbatas Perseorangan (PT Perseorangan)",
          "Perseorangan",
          "CV",
          "Firma",
          "Koperasi",
        ],
      },
    ],
  },
  {
    slug: "perpajakan/pph-23",
    title: "Sekilas tentang Pajak Badan atau PPh Pasal 23",
    date: "2022-03-31",
    categories: ["keuangan-kita"],
    cover: "tanamPadi",
    excerpt:
      "PPh Pasal 23 dikenakan pada penghasilan atas modal, penyerahan jasa, atau hadiah dan penghargaan, selain yang telah dipotong PPh Pasal 21.",
    body: [
      {
        t: "p",
        text: "Pajak Badan atau PPh Pasal 23, selanjutnya disingkat PPh 23, yaitu pajak yang dikenakan kepada lembaga/badan hukum non perseorangan. Pajak ini dikenakan kepada badan hukum antara lain Perseroan Terbatas (PT), Perseroan (Perseorangan), Instansi Pemerintah dan badan hukum lainnya.",
      },
      {
        t: "p",
        text: "Pajak Penghasilan Pasal 23 (PPh Pasal 23) dikenakan pada penghasilan atas modal, penyerahan jasa, atau hadiah dan penghargaan, selain yang telah dipotong PPh Pasal 21. Umumnya penghasilan jenis ini terjadi saat adanya transaksi antara pihak yang menerima penghasilan (penjual atau pemberi jasa) dan pemberi penghasilan. Pihak pemberi penghasilan (pembeli atau penerima jasa) akan memotong dan melaporkan PPh Pasal 23 tersebut kepada kantor pajak.",
      },
      { t: "h2", text: "Pembayaran, Pelaporan dan Bukti Potong PPh Pasal 23" },
      {
        t: "p",
        text: "Prosedur pembayaran dan pelaporan PPh Pasal 23 diatur secara khusus dalam peraturan perundang-undangan perpajakan. Berikut ini adalah penjelasan lengkapnya:",
      },
      { t: "h3", text: "Pembayaran PPh Pasal 23" },
      {
        t: "p",
        text: "Pembayaran dilakukan oleh pihak pemotong yang kemudian menyetorkannya melalui Bank Persepsi (ATM, teller bank, fitur bayar pajak online di OnlinePajak, dll) yang telah disetujui oleh Kementerian Keuangan.",
      },
      {
        t: "note",
        text: "Ingat! Jatuh tempo pembayaran adalah tanggal 10, sebulan setelah bulan terutang pajak penghasilan 23.",
      },
      {
        t: "p",
        text: "Namun, agar dapat melakukan pembayaran pajak, Anda harus membuat ID Billing terlebih dahulu.",
      },
      { t: "h3", text: "Bukti Potong PPh Pasal 23" },
      {
        t: "p",
        text: "Sebagai tanda bahwa PPh Pasal 23 telah dipotong, pihak pemotong harus memberikan bukti potong (rangkap ke-1) yang sudah dilengkapi kepada pihak yang dikenakan pajak tersebut dan bukti potong (rangkap ke-2) pada saat melakukan e-Filing pajak PPh 23 di OnlinePajak.",
      },
      { t: "h3", text: "Pelaporan PPh Pasal 23" },
      {
        t: "p",
        text: "Pelaporan dilakukan oleh pihak pemotong dengan cara mengisi SPT Masa PPh Pasal 23, lalu bisa melaporkannya melalui fitur lapor pajak online atau e-Filing gratis di OnlinePajak.",
      },
      {
        t: "note",
        text: "Jatuh tempo pelaporan adalah tanggal 20, sebulan setelah bulan terutang pajak penghasilan 23.",
      },
      {
        t: "p",
        text: "Jika sebelumnya perhitungan, pembayaran dan pelaporan PPh Pasal 23 dilakukan secara terpisah-pisah, kini ketiga hal tersebut bisa dilakukan dengan satu aplikasi OnlinePajak yang terintegrasi, mudah, otomatis dan lebih cepat.",
      },
      { t: "h2", text: "Tarif PPh 23 dan Objeknya" },
      {
        t: "p",
        text: "Tarif PPh 23 dikenakan atas nilai Dasar Pengenaan Pajak (DPP) atau jumlah bruto dari penghasilan. Ada dua jenis tarif yang dikenakan pada penghasilan yaitu 15% dan 2%, tergantung dari objek PPh Pasal 23 tersebut. Berikut ini adalah daftar tarif dan objek PPh Pasal 23:",
      },
      {
        t: "ol",
        items: [
          "Tarif 15% dari jumlah bruto atas: dividen (kecuali pembagian dividen kepada orang pribadi dikenakan final), bunga dan royalti; serta hadiah dan penghargaan, selain yang telah dipotong PPh Pasal 21.",
          "Tarif 2% dari jumlah bruto atas sewa dan penghasilan lain yang berkaitan dengan penggunaan harta kecuali sewa tanah dan/atau bangunan.",
          "Tarif 2% dari jumlah bruto atas imbalan jasa teknik, jasa manajemen, jasa konstruksi dan jasa konsultan.",
          "Tarif 2% dari jumlah bruto atas imbalan jasa lainnya, yaitu yang diuraikan dalam Peraturan Menteri Keuangan No. 141/PMK.03/2015 dan efektif mulai berlaku pada tanggal 24 Agustus 2015.",
          "Bagi Wajib Pajak yang tidak ber-NPWP akan dipotong 100% lebih tinggi dari tarif PPh Pasal 23.",
        ],
      },
      {
        t: "p",
        text: "Jumlah bruto adalah seluruh jumlah penghasilan yang dibayarkan, disediakan untuk dibayarkan, atau telah jatuh tempo pembayarannya oleh badan pemerintah, subjek pajak dalam negeri, penyelenggara kegiatan, bentuk usaha tetap, atau perwakilan perusahaan luar negeri lainnya kepada Wajib Pajak dalam negeri atau bentuk usaha tetap, tidak termasuk:",
      },
      {
        t: "ul",
        items: [
          "Pembayaran gaji, upah, honorarium, tunjangan dan pembayaran lain sebagai imbalan sehubungan dengan pekerjaan yang dibayarkan oleh Wajib Pajak penyedia tenaga kerja kepada tenaga kerja yang melakukan pekerjaan, berdasarkan kontrak dengan pengguna jasa;",
          "Pembayaran atas pengadaan/pembelian barang atau material (dibuktikan dengan faktur pembelian);",
          "Pembayaran kepada pihak kedua (sebagai perantara) untuk selanjutnya dibayarkan kepada pihak ketiga (dibuktikan dengan faktur tagihan pihak ketiga disertai dengan perjanjian tertulis);",
          "Pembayaran penggantian biaya (reimbursement), yaitu penggantian pembayaran sebesar jumlah yang nyata-nyata telah dibayarkan oleh pihak kedua kepada pihak ketiga (dibuktikan dengan faktur tagihan atau bukti pembayaran yang telah dibayarkan kepada pihak ketiga).",
        ],
      },
      { t: "p", text: "Jumlah bruto tersebut tidak berlaku atas:" },
      {
        t: "ul",
        items: [
          "Penghasilan yang dibayarkan sehubungan dengan jasa katering;",
          "Penghasilan yang dibayarkan sehubungan dengan jasa, telah dikenakan pajak yang bersifat final;",
          "Pembayaran gaji, upah, tunjangan, honorarium, dan pembayaran lain yang merupakan imbalan atas pekerjaan yang dilakukan wajib pajak penyedia tenaga kerja kepada tenaga kerja. Hal ini harus dibuktikan oleh kontrak kerja dengan pengguna jasa dan daftar pembayaran gaji, tunjangan, upah, atau honorarium;",
          "Pembayaran kepada penyedia jasa yang merupakan hasil pengadaan barang atau material terkait jasa yang diberikan. Hal ini harus dibuktikan oleh faktur pembelian atas pengadaan barang atau material;",
          "Pembayaran melalui penyedia jasa kepada pihak ketiga. Hal ini harus dibuktikan oleh faktur tagihan dari pihak ketiga dan disertai dengan perjanjian tertulis;",
          "Pembayaran kepada penyedia jasa yang berupa penggantian atau reimbursement. Ini berlaku untuk biaya yang telah dibayarkan oleh penyedia jasa kepada pihak ketiga. Hal ini harus dibuktikan oleh faktur tagihan dan bukti pembayaran.",
        ],
      },
      { t: "h2", text: "62 Jenis Objek PPh 23" },
      {
        t: "p",
        text: "Objek PPh Pasal 23 telah ditambahkan oleh pemerintah hingga menjadi 62 jenis jasa lainnya seperti yang tercantum dalam PMK No. 141/PMK.03/2015. Berikut ini adalah daftar objek PPh 23 jasa lainnya tersebut:",
      },
      {
        t: "ol",
        items: [
          "Penilai (appraisal);",
          "Aktuaris;",
          "Akuntansi, pembukuan, dan atestasi laporan keuangan;",
          "Hukum;",
          "Arsitektur;",
          "Perencanaan kota dan arsitektur landscape;",
          "Perancang (design);",
          "Pengeboran (drilling) di bidang penambangan minyak dan gas bumi (migas) kecuali yang dilakukan oleh Badan Usaha Tetap (BUT);",
          "Penunjang di bidang usaha panas bumi dan penambangan minyak dan gas bumi (migas);",
          "Penambangan dan jasa penunjang di bidang usaha panas bumi dan penambangan minyak dan gas bumi (migas);",
          "Penunjang di bidang penerbangan dan bandar udara;",
          "Penebangan hutan;",
          "Pengolahan limbah;",
          "Penyedia tenaga kerja dan/atau tenaga ahli (outsourcing services);",
          "Perantara dan/atau keagenan;",
          "Bidang perdagangan surat-surat berharga, kecuali yang dilakukan Bursa Efek, Kustodian Sentral Efek Indonesia (KSEI) dan Kliring Penjaminan Efek Indonesia (KPEI);",
          "Kustodian/penyimpanan/penitipan, kecuali yang dilakukan oleh KSEI;",
          "Pengisian suara (dubbing) dan/atau sulih suara;",
          "Mixing film;",
          "Pembuatan sarana promosi film, iklan, poster, foto, slide, klise, banner, pamphlet, baliho dan folder;",
          "Jasa sehubungan dengan software atau hardware atau sistem komputer, termasuk perawatan, pemeliharaan dan perbaikan;",
          "Pembuatan dan/atau pengelolaan website;",
          "Internet termasuk sambungannya;",
          "Penyimpanan, pengolahan dan/atau penyaluran data, informasi, dan/atau program;",
          "Instalasi/pemasangan mesin, peralatan, listrik, telepon, air, gas, AC dan/atau TV kabel, selain yang dilakukan oleh Wajib Pajak yang ruang lingkupnya di bidang konstruksi dan mempunyai izin dan/atau sertifikasi sebagai pengusaha konstruksi;",
          "Perawatan/perbaikan/pemeliharaan mesin, peralatan, listrik, telepon, air, gas, AC dan/atau TV kabel, selain yang dilakukan oleh Wajib Pajak yang ruang lingkupnya di bidang konstruksi dan mempunyai izin dan/atau sertifikasi sebagai pengusaha konstruksi;",
          "Perawatan kendaraan dan/atau alat transportasi darat;",
          "Maklon;",
          "Penyelidikan dan keamanan;",
          "Penyelenggara kegiatan atau event organizer;",
          "Penyediaan tempat dan/atau waktu dalam media massa, media luar ruang atau media lain untuk penyampaian informasi, dan/atau jasa periklanan;",
          "Pembasmian hama;",
          "Kebersihan atau cleaning service;",
          "Sedot septic tank;",
          "Pemeliharaan kolam;",
          "Katering atau tata boga;",
          "Freight forwarding;",
          "Logistik;",
          "Pengurusan dokumen;",
          "Pengepakan;",
          "Loading dan unloading;",
          "Laboratorium dan/atau pengujian kecuali yang dilakukan oleh lembaga atau institusi pendidikan dalam rangka penelitian akademis;",
          "Pengelolaan parkir;",
          "Penyondiran tanah;",
          "Penyiapan dan/atau pengolahan lahan;",
          "Pembibitan dan/atau penanaman bibit;",
          "Pemeliharaan tanaman;",
          "Pemanenan;",
          "Pengolahan hasil pertanian, perkebunan, perikanan, peternakan dan/atau perhutanan;",
          "Dekorasi;",
          "Pencetakan/penerbitan;",
          "Penerjemahan;",
          "Pengangkutan/ekspedisi kecuali yang telah diatur dalam Pasal 15 Undang-Undang Pajak Penghasilan;",
          "Pelayanan pelabuhan;",
          "Pengangkutan melalui jalur pipa;",
          "Pengelolaan penitipan anak;",
          "Pelatihan dan/atau kursus;",
          "Pengiriman dan pengisian uang ke ATM;",
          "Sertifikasi;",
          "Survey;",
          "Tester;",
          "Jasa selain jasa-jasa tersebut di atas yang pembayarannya dibebankan pada APBN (Anggaran Pendapatan dan Belanja Negara) atau APBD (Anggaran Pendapatan dan Belanja Daerah).",
        ],
      },
      { t: "h2", text: "Pihak Pemotong dan Pihak yang Dikenakan PPh Pasal 23" },
      {
        t: "p",
        text: "Tidak semua pihak dapat dikenakan atau pun memotong PPh Pasal 23. Pihak-pihak tersebut hanya mereka yang masuk pada kelompok berikut ini:",
      },
      { t: "h3", text: "Pihak pemotong PPh Pasal 23" },
      {
        t: "ul",
        items: [
          "Badan pemerintah;",
          "Subjek pajak badan dalam negeri;",
          "Penyelenggara kegiatan;",
          "Bentuk Usaha Tetap (BUT);",
          "Perwakilan perusahaan luar negeri lainnya;",
          "Wajib pajak orang pribadi dalam negeri tertentu yang ditunjuk Direktur Jenderal Pajak.",
        ],
      },
      { t: "h3", text: "Penerima penghasilan yang dipotong PPh Pasal 23" },
      { t: "ul", items: ["Wajib pajak dalam negeri;", "Bentuk Usaha Tetap (BUT)."] },
      { t: "h2", text: "Pengecualian PPh 23" },
      { t: "p", text: "Pemotongan PPh 23 dikecualikan atas:" },
      {
        t: "ul",
        items: [
          "Penghasilan yang dibayar atau terutang kepada bank;",
          "Sewa yang dibayar atau terutang sehubungan dengan sewa guna usaha dengan hak opsi;",
          "Dividen atau bagian laba yang diterima atau diperoleh perseroan terbatas sebagai wajib pajak dalam negeri, koperasi, BUMN/BUMD, dari penyertaan modal pada badan usaha yang didirikan dan bertempat kedudukan di Indonesia dengan syarat: dividen berasal dari cadangan laba yang ditahan; dan bagi perseroan terbatas, BUMN/BUMD, kepemilikan saham pada badan yang memberikan dividen paling rendah 25% (dua puluh lima persen) dari jumlah modal yang disetor;",
          "Bagian laba yang diterima atau diperoleh anggota dari perseroan komanditer yang modalnya tidak terbagi atas saham-saham, persekutuan, perkumpulan, firma dan kongsi termasuk pemegang unit penyertaan kontrak investasi kolektif;",
          "SHU koperasi yang dibayarkan oleh koperasi kepada anggotanya;",
          "Penghasilan yang dibayarkan atau terutang kepada badan usaha atas jasa keuangan yang berfungsi sebagai penyalur pinjaman dan/atau pembiayaan.",
        ],
      },
      {
        t: "p",
        text: "Mulai September 2020 berlaku KEP-368/PJ/2020 yang berisi kewajiban bagi semua Wajib Pajak untuk membuat bukti pemotongan dan melaporkan SPT PPh Pasal 23/Pasal 26 secara elektronik melalui aplikasi e-Bupot DJP Online. Anda juga dapat mengelola e-Bupot PPh 23/26 di OnlinePajak mulai Agustus 2020.",
      },
    ],
  },
  {
    slug: "perpajakan/pph-21",
    title: "Kewajiban Pembayaran Pajak Pribadi atau PPh Pasal 21",
    date: "2022-03-31",
    categories: ["keuangan-kita"],
    cover: "petaniSawah",
    excerpt:
      "PPh 21 dikenakan terhadap penghasilan berupa gaji, upah, honorarium, tunjangan dan pembayaran lain yang diterima pegawai maupun bukan pegawai.",
    body: [
      {
        t: "p",
        text: "Pajak Penghasilan Pasal 21 (PPh 21) merupakan jenis pajak yang dikenakan terhadap penghasilan berupa gaji, upah, honorarium, tunjangan dan pembayaran lain yang diterima oleh pegawai, bukan pegawai, mantan pegawai, penerima pesangon dan lain sebagainya.",
      },
      { t: "h2", text: "Objek Pajak" },
      {
        t: "p",
        text: "Objek PPh 21 dibagi berdasarkan bagaimana penghasilan diperoleh, apakah penghasilan tetap dan teratur atau penghasilan tidak tetap dan tidak teratur.",
      },
      {
        t: "ul",
        items: [
          "Penghasilan tetap dan teratur setiap bulan yang diterima oleh pegawai, seperti gaji dan tunjangan.",
          "Penghasilan tidak tetap dan tidak teratur yang diterima oleh pegawai, peserta kegiatan, antara lain: honor kegiatan, dll.",
        ],
      },
      { t: "h2", text: "Tarif" },
      { t: "p", text: "Tarif PPh 21 dihitung berdasarkan jenis:" },
      {
        t: "table",
        head: ["Sifat PPh", "Perhitungan"],
        rows: [
          ["Tidak final", "Tarif Pasal 17 UU PPh × dasar pengenaan PPh 21"],
          ["Final", "Tarif final × jumlah bruto"],
        ],
      },
      { t: "h2", text: "Lapisan Penghasilan Kena Pajak" },
      {
        t: "p",
        text: "Penghasilan kena pajak berdasarkan tingkatan penghasilan perseorangan. Tarif PPh 21 tersebut yaitu:",
      },
      {
        t: "table",
        head: ["Lapisan penghasilan", "Tarif"],
        rows: [
          ["Sampai dengan Rp50 juta", "5%"],
          ["Di atas Rp50 juta s.d. Rp250 juta", "15%"],
          ["Di atas Rp250 juta s.d. Rp500 juta", "25%"],
          ["Di atas Rp500 juta", "30%"],
        ],
      },
      { t: "note", text: "Jika wajib pajak tidak memiliki NPWP, tarifnya dinaikkan 20%." },
      { t: "h2", text: "Penghasilan Tidak Kena Pajak (PTKP)" },
      {
        t: "p",
        text: "PTKP diberikan berdasarkan tanggungan keluarga, antara lain status perkawinan (Tidak Kawin–TK atau Kawin–K) dan jumlah anak (1-2-3). PTKP tersebut yaitu:",
      },
      {
        t: "table",
        head: ["Status", "PTKP tahunan", "PTKP bulanan", "PTKP harian"],
        rows: [
          ["TK/0", "Rp54 juta", "Rp4,5 juta", "Rp150.009"],
          ["TK/1", "Rp58,5 juta", "Rp4,875 juta", "Rp162.200"],
          ["TK/2", "Rp63 juta", "Rp5,25 juta", "Rp176.388"],
          ["TK/3", "Rp67,5 juta", "Rp5,625 juta", "Rp187.500"],
          ["K/0", "Rp58,5 juta", "Rp4,875 juta", "Rp162.200"],
          ["K/1", "Rp63 juta", "Rp5,25 juta", "Rp176.388"],
          ["K/2", "Rp67,5 juta", "Rp5,625 juta", "Rp187.500"],
          ["K/3", "Rp72 juta", "Rp6 juta", "Rp200.000"],
        ],
      },
    ],
  },
  {
    slug: "perpajakan/ppn",
    title: "Ada Apa dengan Pajak Pertambahan Nilai (PPN)",
    date: "2022-03-26",
    categories: ["keuangan-kita"],
    cover: "ladangJagung",
    excerpt:
      "PPN dikenakan atas konsumsi dalam negeri. Kapan sebuah usaha wajib menjadi Pengusaha Kena Pajak, dan apa untung-ruginya?",
    body: [
      {
        t: "p",
        text: "Pajak Pertambahan Nilai (PPN) merupakan pajak yang dikenakan atas konsumsi dalam negeri oleh Wajib Pajak Orang Pribadi, Badan, dan Pemerintah. PPN sebagai sumber pemasukan pemerintah, dibebankan sebelum dikenakan pajak yang lain. Untuk usaha badan, PPN dibebankan sebelum dikenakan tarif PPh 23 (pajak badan) atau pajak yang lainnya. Pajak tersebut dibebankan kepada pengusaha kena pajak dengan besaran omzet minimum yang diatur dalam ketentuan perpajakan.",
      },
      { t: "h2", text: "Pengusaha Kena Pajak (PKP)" },
      {
        t: "p",
        text: "Pengusaha Kena Pajak atau PKP adalah pengusaha yang melakukan penyerahan barang kena pajak (BKP) dan/atau penyerahan jasa kena pajak (JKP) yang dikenakan pajak berdasarkan Undang-Undang Pajak Pertambahan Nilai (UU PPN).",
      },
      { t: "h3", text: "Manfaat menjadi PKP" },
      {
        t: "ul",
        items: [
          "Pengusaha akan dianggap punya sistem yang legal secara hukum.",
          "Dianggap sebagai perusahaan yang tertib membayar pajak.",
          "Dianggap sebagai perusahaan yang cukup besar dan tepercaya. Hal ini berguna ketika perusahaan atau badan usaha ingin menjalin kerja sama dengan perusahaan besar lainnya.",
          "Pengusaha PKP dapat melakukan transaksi jual-beli dengan bendaharawan pemerintah, lembaga negara lainnya dan BUMN.",
        ],
      },
      {
        t: "p",
        text: "Sesuai Pasal 3A Undang-Undang Nomor 42 Tahun 2009 tentang Perubahan Ketiga atas Undang-Undang Nomor 8 Tahun 1983 tentang Pajak Pertambahan Nilai Barang dan Jasa dan Pajak Penjualan atas Barang Mewah (UU PPN), pengusaha dengan penghasilan bruto melebihi Rp4,8 miliar wajib menjadi PKP. Adapun syarat menjadi PKP, yaitu:",
      },
      {
        t: "ul",
        items: [
          "Pengusaha dengan pendapatan bruto atau omzetnya mencapai Rp4,8 miliar dalam satu tahun buku.",
          "Tidak terbatas pada satu bentuk badan hukum usaha tertentu, misalnya Perseroan Terbatas (PT), PT (Perseorangan), CV, Perusahaan Dagang (PD), koperasi, usaha kecil menengah (UKM), atau perusahaan perorangan.",
          "Telah melewati proses survei yang telah dilakukan pihak KPP atau tempat Wajib Pajak (WP) terdaftar.",
          "Telah melengkapi dokumen dan syarat dari pengajuan PKP atau pengukuhan menjadi PKP.",
        ],
      },
      {
        t: "p",
        text: "Namun demikian, perusahaan tetap bisa mengajukan menjadi PKP walaupun omzetnya belum sampai batas minimal.",
      },
      { t: "h3", text: "Syarat menjadi PKP" },
      {
        t: "p",
        text: "Agar menjadi PKP, pengusaha harus mengajukan syarat administrasi dan syarat lainnya, yaitu:",
      },
      {
        t: "p",
        text: "Syarat objektif — mengisi formulir pengajuan PKP (jika pemohon adalah badan usaha maka formulir harus dibubuhi cap), dengan melampirkan:",
      },
      {
        t: "ul",
        items: [
          "Fotokopi Kartu Tanda Penduduk (KTP) direktur atau pemilik usaha.",
          "Fotokopi Nomor Pokok Wajib Pajak (NPWP) direktur atau pemilik usaha.",
          "Fotokopi NPWP perusahaan.",
          "Fotokopi Surat Izin Tempat Usaha (SITU) dan Surat Izin Usaha Perdagangan (SIUP).",
          "Fotokopi Nomor Pokok Wajib Pajak Daerah (NPWPD) dan Tanda Daftar Perusahaan (TDP).",
          "Fotokopi akta perusahaan.",
          "Surat kuasa bermeterai (jika pengurusan selain direktur atau pimpinan).",
        ],
      },
      {
        t: "p",
        text: "Syarat subjektif — meliputi gambaran kegiatan usaha, yang dibuktikan dengan dokumen berikut:",
      },
      {
        t: "ul",
        items: [
          "Laporan keuangan bulan terakhir (neraca atau laporan laba-rugi).",
          "Daftar aset perusahaan secara terperinci.",
          "Foto tempat kegiatan usaha.",
          "Denah lokasi kegiatan usaha.",
        ],
      },
      { t: "h3", text: "Kelemahan menjadi PKP" },
      {
        t: "p",
        text: "Tidak semua usaha menguntungkan ketika menjadi PKP. Hal tersebut karena tarif PPN yang besar, sehingga apabila dikenakan secara langsung mengurangi keuntungan perusahaan apabila daya tawar kepada pembeli dan/atau pemasok lemah. Apabila perusahaan dikenakan PPN, sedangkan posisi perusahaan relatif lemah terhadap konsumen dan/atau pemasok, biaya tersebut tidak bisa dibebankan menjadi kenaikan harga dan/atau tidak ada pengurang dari PPN masukan dari pemasok.",
      },
      {
        t: "p",
        text: "Hal tersebut lebih terasa di sektor kebutuhan pokok, seperti usaha di sektor ayam pedaging dan petelur. Karena margin yang diterima pengusaha mendekati PPN saja, dengan batas omzet yang terkena tarif PPN perusahaan tidak lagi menguntungkan. Hal tersebut disebabkan karakteristik usaha tersebut mempunyai margin terbatas, sehingga perusahaan mengandalkan volume produksi untuk meningkatkan pendapatan.",
      },
      { t: "h2", text: "Tarif PPN" },
      {
        t: "p",
        text: "Sesuai dengan Undang-Undang Nomor 7/2021 tentang Harmonisasi Peraturan Perpajakan (UU HPP) terkait tarif PPN, tarif PPN naik menjadi 11 persen sejak 1 April 2022 dan menjadi 12% yang akan mulai berlaku pada 1 Januari 2025.",
      },
      {
        t: "note",
        text: "Sebagai contoh: perusahaan dengan omzet Rp4,8 miliar pada April 2022. Jumlah PPN yang harus dibayarkan sebesar 11% × Rp4,8 miliar, atau sebesar Rp528 juta.",
      },
      { t: "h2", text: "PPN Masukan dan Keluaran" },
      {
        t: "p",
        text: "Penghitungan PPN Masukan dilakukan oleh PKP ketika PKP berada di posisi sebagai pembeli BKP atau JKP. Sedangkan PPN Keluaran dilakukan penghitungannya oleh PKP ketika PKP dalam posisi sebagai penjual BKP atau JKP. Kedua penghitungan ini akan sama-sama dilaporkan pada DJP untuk diperiksa dan dicocokkan nilainya melalui rekonsiliasi Pajak Masukan dan rekonsiliasi Pajak Keluaran.",
      },
      { t: "h3", text: "Kaitannya dengan Faktur Pajak & sistem pengkreditan pajak" },
      {
        t: "p",
        text: "Faktur Pajak merupakan dokumen penting setiap kali PKP melakukan transaksi terkait Barang Kena Pajak dan Jasa Kena Pajak. Isinya adalah detail transaksi yang terjadi, mulai dari identitas kedua belah pihak, komoditas yang diperjualbelikan, PPN dan PPnBM (Pajak Penjualan atas Barang Mewah) yang menjadi kewajiban, serta info detail lainnya. Jadi, untuk dapat menerbitkan Faktur Pajak, pengusaha harus dikukuhkan menjadi PKP terlebih dahulu.",
      },
      {
        t: "p",
        text: "Sebagai ilustrasi, pada bulan April 2022, dengan tarif PPN 11%, terdapat transaksi sebagai berikut:",
      },
      {
        t: "ul",
        items: [
          "Perusahaan melakukan transaksi penjualan dengan PPN keluaran Rp10 juta, namun dengan PPN masukan saat membeli bahan baku dengan nilai Rp7 juta. Karena PPN keluaran > PPN masukan, maka terjadi kurang bayar Rp3 juta.",
          "Selanjutnya perusahaan pada bulan yang sama melaksanakan transaksi penjualan aset, misalnya kendaraan operasional dengan PPN keluaran Rp8 juta, sedangkan waktu pembelian dikenakan PPN masukan sebesar Rp10 juta. Karena PPN keluaran < PPN masukan, maka terjadi lebih bayar sebesar Rp2 juta.",
        ],
      },
      {
        t: "p",
        text: "Nilai yang harus dibayar oleh perusahaan yaitu: nilai total kurang bayar − nilai lebih bayar, atau Rp3 juta − Rp2 juta, sehingga nilai PPN Masa bulan Mei yang harus dibayar sebesar Rp1 juta. Nilai tersebut dibayarkan sebelum batas waktu yang ditetapkan.",
      },
      {
        t: "p",
        text: "Demikian, semoga membantu untuk kepatuhan pajak dan mempermudah dalam perencanaan bisnis.",
      },
    ],
  },
  {
    slug: "potensi-usaha-peternakan-ayam-broiler",
    title: "Potensi Usaha Sektor Ayam Broiler",
    date: "2022-03-26",
    categories: ["peternakan", "kabar-wirausaha"],
    cover: "broiler",
    excerpt:
      "Kebutuhan protein Indonesia sangat besar. Di mana ada ketidakpastian, di situlah ada peluang bagi pengusaha.",
    body: [
      {
        t: "p",
        text: "Kebutuhan protein di Indonesia sangat besar. Dengan produksi yang massal, usaha ayam broiler mampu menyediakan alternatif kebutuhan protein dengan harga terjangkau kepada masyarakat. Dengan penduduk 270 juta-an jiwa pada tahun 2022, kebutuhan konsumsi masyarakat juga tinggi.",
      },
      {
        t: "p",
        text: "Kendala dalam pemenuhan konsumsi protein di Indonesia antara lain pemerataan pasokan dan harga. Hal tersebut menyebabkan daging, sebagai alternatif sumber protein, menjadi langganan kenaikan harga/inflasi secara nasional. Di mana ada ketidakpastian, di situlah ada peluang bagi pengusaha. Kondisi tersebut menunjukkan usaha penyediaan protein, khususnya sektor ayam pedaging/broiler, masih memiliki prospek.",
      },
      { t: "h2", text: "Tantangan dan kelemahan di sektor usaha ayam pedaging" },
      {
        t: "p",
        text: "Pasar di bidang usaha ayam broiler di Indonesia merupakan pasar oligopoli. Pasar didominasi oleh dua perusahaan besar yang menguasai pasar dari hulu ke hilir. Dengan kondisi tersebut ada risiko bagi para peternak mandiri dalam berusaha, karena dengan kekuatan modal dan jaringan, perusahaan besar bisa menghilangkan perusahaan kecil dari pasar. Dengan kondisi pasar tersebut, harga di pasar sangat berfluktuasi sehingga tidak ada jaminan produksi yang baik akan memberikan keuntungan kepada para pelaku usaha.",
      },
      {
        t: "p",
        text: "Bagi pelaku usaha, sektor ini juga menunjukkan tantangan untuk masuk (barrier to entry), terutama dari sisi permodalan. Untuk memulai usaha di sektor peternakan ayam pedaging, kendala yang ada yaitu usaha yang padat modal dan berjumlah massal, serta keuntungan per ekor (yield/margin) yang relatif tipis. Namun dengan kuantitas besar, potensi hasilnya juga besar.",
      },
      {
        t: "p",
        text: "Teknologi yang digunakan semakin berkembang menuju otomasi, sehingga peternak kecil sulit untuk melakukan akses.",
      },
      { t: "h2", text: "Kekuatan dan peluang di sektor usaha ayam pedaging" },
      {
        t: "p",
        text: "Fluktuasi harga yang besar menjadikan peluang keuntungan yang besar juga di sektor ini. Selain itu, dengan kondisi pasar oligopoli, pengusaha pemula masih memiliki alternatif untuk melakukan kerja sama dengan perusahaan yang lebih mapan. Hal tersebut juga didukung oleh regulasi dari pemerintah yang mengharuskan perusahaan untuk membuka kemitraan, sehingga perusahaan induk tetap membutuhkan mitra untuk berusaha.",
      },
      {
        t: "p",
        text: "Terdapat alternatif bagi perusahaan: yang memiliki permodalan kuat bisa berdiri sendiri atau mandiri dalam berusaha, dengan konsekuensi keuntungan dan risiko juga ditanggung sendiri. Karakter ini cocok untuk tipe investor agresif. Namun bagi investor moderat, bisa mengambil jalan tengah dengan bekerja sama dengan perusahaan induk dengan pola kemitraan, karena risiko dan keuntungan juga dibagi dalam pola ini.",
      },
      {
        t: "p",
        text: "Pada akhirnya pilihan model bisnis tersebut ditentukan oleh karakter investor tersebut. Termasuk yang manakah Anda?",
      },
    ],
  },
  {
    slug: "pemilihan-bidang-usaha",
    title: "Pemilihan Usaha dan Profil Risiko",
    date: "2022-03-26",
    categories: ["kabar-wirausaha"],
    cover: "panenPadi",
    excerpt:
      "Sebelum memulai usaha, pahami dulu profil risiko Anda: konservatif, moderat, atau agresif.",
    body: [
      {
        t: "p",
        text: "Sebelum memulai usaha, harus dipahami dulu profil risiko dari masing-masing calon wirausahawan. Profil risiko seseorang tergantung akan kepribadian dari masing-masing orang tersebut. Karakter atau kepribadian meliputi sifat, ekspresi, temperamen, dan tingkah laku yang khas dari seseorang dan bagaimana mereka mengambil sikap ketika menghadapi berbagai situasi.",
      },
      {
        t: "p",
        text: "Hal itu juga mempengaruhi seseorang dalam menerima risiko (risk tolerance). Perbedaan tingkat risk tolerance membentuk perbedaan karakter/tipe investor. Tingkat risk tolerance tersebut menentukan kecocokan atas pilihan investasi. Secara umum, terdapat tiga tipe investor, yaitu: tipe konservatif (risk averse), tipe moderat, dan tipe agresif (risk taker).",
      },
      { t: "h2", text: "Tipe Investor Konservatif (Risk Averse)" },
      {
        t: "p",
        text: "Tipe investor konservatif atau dikenal sebagai risk averse adalah mereka yang berinvestasi pada instrumen investasi yang cenderung stabil dengan profil risiko rendah. Tipe investor dimaksud cenderung menghindari risiko tinggi, walaupun keuntungan yang didapat kecil. Sebab investor ini mengutamakan jaminan keamanan dengan harapan tidak mengalami kerugian. Dalam praktiknya, terdapat kelebihan dan kekurangan dari risk averse.",
      },
      {
        t: "p",
        text: "Kelebihan investor konservatif adalah kehati-hatiannya dalam memilih instrumen investasi, karena menghindari produk investasi yang risikonya tinggi. Mereka cenderung berinvestasi pada produk dengan potensi kerugian minim atau bahkan tidak berisiko sama sekali. Tujuan utamanya lebih memprioritaskan jaminan keamanan berinvestasi ketimbang imbal hasil. Oleh karena itu, investor konservatif tidak masalah bila memperoleh profit sedikit, tetapi pemasukan rutin dan pasti.",
      },
      {
        t: "p",
        text: "Dibandingkan tipe investor lainnya, investor konservatif cocok untuk investor pemula atau para pensiunan. Tipe usaha yang cocok antara lain di fixed income, antara lain pasar uang, SBN (Surat Berharga Negara–Konvensional), SBSN (Surat Berharga Syariah Negara) dan sektor dengan risiko rendah lainnya, misalnya di saham/usaha consumer product yang sudah mapan dan permintaan yang stabil.",
      },
      {
        t: "p",
        text: "Kekurangan investor konservatif adalah potensi keuntungan lebih kecil dibanding tipe yang lain, karena mereka cenderung berinvestasi pada instrumen berprofil risiko rendah. Hal tersebut sesuai prinsip investasi: semakin tinggi risiko maka return semakin besar (high risk high return). Kekurangan lain investor konservatif adalah kurang terlatihnya kemampuan analisis, karena karakter investasi yang dijalaninya. Karena target yang rendah, kemampuan menganalisis dan mengambil keputusan juga sejalan dengan target usaha yang dijalaninya.",
      },
      { t: "h2", text: "Tipe Investor Moderat (Risk Neutral)" },
      {
        t: "p",
        text: "Tipe investor menurut profil risiko berikutnya yaitu investor moderat. Investor moderat adalah karakter investor yang berani mengambil risiko dalam tingkat menengah. Jenis investor ini memiliki kesadaran tinggi akan besarnya bagi hasil yang diterima bila mengambil risiko lebih tinggi, namun tetap memperhitungkan dengan matang potensi kerugian yang timbul. Mereka akan berinvestasi pada instrumen dengan risiko tidak terlalu rendah dan tinggi.",
      },
      {
        t: "p",
        text: "Kelebihan investor moderat adalah pengambilan risikonya yang bijaksana, tidak terlalu hati-hati ataupun agresif. Investor moderat akan mengumpulkan berbagai instrumen investasi, melakukan kalkulasi, dan memilih instrumen dengan risiko dan potensi minimal imbang. Dikarenakan sifat selektifnya, investor moderat umumnya punya banyak bahan referensi dalam pilihan investasi. Investasi yang cocok pada investor ini antara lain di reksa dana campuran (saham dan fixed income), dengan karakteristik risiko menengah dan hasil di atas tipe konservatif.",
      },
      {
        t: "p",
        text: "Kekurangan investor moderat yaitu proses pengambilan keputusan yang umumnya terlalu lama, sehingga sering kehilangan momentum untuk melakukan investasi.",
      },
      { t: "h2", text: "Tipe Investor Agresif (Risk Taker)" },
      {
        t: "p",
        text: "Tipe investor menurut profil risiko selanjutnya adalah investor agresif (risk taker). Investor agresif cenderung lebih berani dan siap menerima konsekuensinya dibanding tipe investor lainnya. Investor agresif akan mempertaruhkan modal besar dalam instrumen berisiko tinggi, dengan harapan hasil yang juga tinggi. Dengan karakter tersebut, jika proyeksinya benar akan menghasilkan keuntungan yang besar; sebaliknya, jika meleset taruhannya juga besar.",
      },
      {
        t: "p",
        text: "Kelebihan investor agresif adalah cara berpikirnya yang out-of-the-box. Investor jenis ini tidak akan takut mempertaruhkan dana dalam jumlah besar untuk usaha dengan ide anti-mainstream. Pengusaha dengan karakter itu cenderung berinvestasi ke usaha dengan risiko tinggi dan menjual mimpi, antara lain di usaha rintisan (start-up) yang banyak berkembang. Banyak tunas usaha rintisan berkembang; jika sukses akan menjadi champion dan memberikan kekayaan kepada investornya. Seperti di dekade terakhir, banyak start-up berdiri dan menggeser model bisnis yang lebih lama, dengan kemauan untuk membakar uang yang besar pula. Semua demi menjual harapan/mimpi.",
      },
      {
        t: "p",
        text: "Kekurangan investor agresif antara lain: secara umum balik modal usaha lama dan risiko mengalami kerugian lebih besar. Karakter investasi tersebut lebih cocok bagi orang yang sudah mapan, dengan bantalan finansial yang cukup, dan tidak direkomendasikan bagi investor pemula.",
      },
      {
        t: "p",
        text: "Demikian pembahasan tentang tipe investor menurut profil risiko serta kekurangan dan kelebihannya, semoga bermanfaat dan memberikan pemahaman. Apa pun tipe Anda, semoga memberikan gambaran yang tepat dan memantapkan pilihan investasinya. Semoga investasinya barokah.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function articlesIn(category: CategoryKey) {
  return articles.filter((a) => a.categories.includes(category));
}

const months = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
}

export function readingMinutes(article: Article) {
  const words = article.body
    .map((b) => {
      if ("text" in b) return b.text;
      if ("items" in b) return b.items.join(" ");
      return b.rows.flat().join(" ");
    })
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/** Versi ringkas (tanpa isi) untuk dikirim ke komponen klien. */
export function toRow({ slug, title, date, categories, cover, excerpt }: Article) {
  return { slug, title, date, categories, cover, excerpt };
}
