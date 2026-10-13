import type { StaticImageData } from "next/image";

import heroTerasering from "@/assets/img/hero-terasering.jpg";
import lahanLereng from "@/assets/img/lahan-lereng.jpg";
import sawahGunung from "@/assets/img/sawah-gunung.jpg";
import kandangModern from "@/assets/img/kandang-modern.jpg";
import docAyam from "@/assets/img/doc-ayam.jpg";
import broiler from "@/assets/img/broiler.jpg";
import bligoBunga from "@/assets/img/bligo-bunga.jpg";
import bligoBuah from "@/assets/img/bligo-buah.jpg";
import bligoKuning from "@/assets/img/bligo-kuning.jpg";
import seloBoyolali from "@/assets/img/selo-boyolali.jpg";
import desaSelo from "@/assets/img/desa-selo.jpg";
import petaniSawah from "@/assets/img/petani-sawah.jpg";
import gotongRoyong from "@/assets/img/gotong-royong.jpg";
import penggembalaItik from "@/assets/img/penggembala-itik.jpg";
import ladangJagung from "@/assets/img/ladang-jagung.jpg";
import tanamPadi from "@/assets/img/tanam-padi.jpg";
import panenPadi from "@/assets/img/panen-padi.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  // Atribusi lisensi (Wikimedia Commons) — ditampilkan di /kredit-foto.
  credit: { title: string; author: string; license: string; source: string };
};

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`;

// Semua foto di bawah ini adalah foto ilustrasi berlisensi terbuka, bukan
// dokumentasi fasilitas Bligomi. Ganti dengan foto milik perusahaan bila sudah ada:
// cukup timpa berkas di src/assets/img dengan nama yang sama.
export const photos = {
  heroTerasering: {
    src: heroTerasering,
    alt: "Terasering sawah menghijau saat matahari terbit di Jawa Tengah",
    credit: {
      title: "Menanti matahari pagi di Kajoran",
      author: "Budiprast",
      license: "CC BY-SA 4.0",
      source: commons("Menanti_matahari_pagi_di_Kajoran.jpg"),
    },
  },
  lahanLereng: {
    src: lahanLereng,
    alt: "Petak-petak lahan sayur di lereng pegunungan dilihat dari ketinggian",
    credit: {
      title: "Simetris sawah dari ketinggian",
      author: "Valentrico",
      license: "CC BY-SA 4.0",
      source: commons("Simetris_sawah_dari_ketinggian.jpg"),
    },
  },
  sawahGunung: {
    src: sawahGunung,
    alt: "Hamparan sawah hijau dengan gunung di kejauhan",
    credit: {
      title: "Pemandangan sawah dan gunung",
      author: "Hart sltg",
      license: "CC BY-SA 4.0",
      source: commons("Pemandangan_sawah_dan_gunung.jpg"),
    },
  },
  kandangModern: {
    src: kandangModern,
    alt: "Bagian dalam kandang ayam pedaging modern dengan jalur pakan otomatis",
    credit: {
      title: "Baby chickens in a grower broiler house",
      author: "USDA NRCS Texas",
      license: "Domain publik",
      source: commons("Baby_chickens_in_a_grower_broiler_house._(24481449624).jpg"),
    },
  },
  docAyam: {
    src: docAyam,
    alt: "Anak ayam di sepanjang jalur pakan dan minum dalam kandang",
    credit: {
      title: "Baby chickens in a grower broiler house",
      author: "USDA NRCS Texas",
      license: "Domain publik",
      source: commons("Baby_chickens_in_a_grower_broiler_house._(25112103855).jpg"),
    },
  },
  broiler: {
    src: broiler,
    alt: "Ayam broiler di dalam kandang tertutup berpenerangan",
    credit: {
      title: "20130822-OC-RBN-2946",
      author: "USDA",
      license: "Domain publik",
      source: commons("20130822-OC-RBN-2946_(9682285758).jpg"),
    },
  },
  bligoBunga: {
    src: bligoBunga,
    alt: "Bunga kuning dan daun lebar tanaman bligo yang merambat di tanah",
    credit: {
      title: "Benincasa hispida kz01",
      author: "Krzysztof Ziarnek, Kenraiz",
      license: "CC BY-SA 4.0",
      source: commons("Benincasa_hispida_kz01.jpg"),
    },
  },
  bligoBuah: {
    src: bligoBuah,
    alt: "Tiga buah bligo lonjong berlapis lilin putih",
    credit: {
      title: "3 large Wax gourd freshly picked from the tree, Kurigram, Bangladesh",
      author: "Tanvir Rahat",
      license: "CC BY-SA 4.0",
      source: commons("3_large_Wax_gourd_freshly_picked_from_the_tree,_Kurigram,_Bangladesh.jpg"),
    },
  },
  bligoKuning: {
    src: bligoKuning,
    alt: "Bunga bligo berwarna kuning dengan lima kelopak",
    credit: {
      title: "Benincasa hispida (kumbalam) flower",
      author: "Ramjchandran",
      license: "CC BY-SA 4.0",
      source: commons("Benincasa_hispida_(kumbalam)_flower.jpg"),
    },
  },
  seloBoyolali: {
    src: seloBoyolali,
    alt: "Ladang di Selo, Boyolali, dengan gunung berselimut awan",
    credit: {
      title: "Boyolali 2022 – Selo village – farms and Merapi 05",
      author: "Aisha Tanduk",
      license: "CC BY-SA 4.0",
      source: commons("Boyolali_2022_-_Selo_village_-_farms_and_Merapi_05.jpg"),
    },
  },
  desaSelo: {
    src: desaSelo,
    alt: "Perkampungan dan ladang sayur di Selo, Boyolali",
    credit: {
      title: "Boyolali 2022 – Selo – village view (cropped)",
      author: "Aisha Tanduk",
      license: "CC BY-SA 4.0",
      source: commons("Boyolali_2022_-_Selo_-_village_view_(cropped).jpg"),
    },
  },
  petaniSawah: {
    src: petaniSawah,
    alt: "Petani mengolah sawah berair dengan gunung di latar belakang",
    credit: {
      title: "Aktivitas Petani Di Sawah",
      author: "Galeri ega",
      license: "CC BY-SA 4.0",
      source: commons("Aktivitas_Petani_Di_Sawah.jpg"),
    },
  },
  gotongRoyong: {
    src: gotongRoyong,
    alt: "Dua petani bercaping bekerja berdampingan di sawah",
    credit: {
      title: "Petani mengolah sawah",
      author: "Mjnspt",
      license: "CC BY-SA 4.0",
      source: commons("Petani_mengolah_sawah.jpg"),
    },
  },
  penggembalaItik: {
    src: penggembalaItik,
    alt: "Penggembala menggiring itik di tepi sawah berkabut",
    credit: {
      title: "Lanskap petani sedang membawa bebek di pinggiran sawah Desa Semen, Blitar",
      author: "Smellsmint",
      license: "CC BY-SA 4.0",
      source: commons(
        "Lanskap_Petani_sedang_membawa_Bebek_untuk_keluar_mencari_makan_di_pinggiran_sawah_Desa_Semen_Blitar.jpg",
      ),
    },
  },
  ladangJagung: {
    src: ladangJagung,
    alt: "Ladang jagung siap panen",
    credit: {
      title: "Ladang Jagung",
      author: "Shiroemon",
      license: "CC BY-SA 4.0",
      source: commons("Ladang_Jagung.jpg"),
    },
  },
  tanamPadi: {
    src: tanamPadi,
    alt: "Warga menanam padi bersama-sama di sawah",
    credit: {
      title: "Tanam Padi di Sawah di Kebumen Jawa Tengah",
      author: "DARMAS SB",
      license: "CC BY-SA 4.0",
      source: commons("Tanam_Padi_di_Sawah_di_Kebumen_Jawa_Tengah.jpg"),
    },
  },
  panenPadi: {
    src: panenPadi,
    alt: "Petani memanen padi di sawah",
    credit: {
      title: "Petani Memanen Padi di Area Sawah Tugu, Desa Tersidilor, Jawa Tengah",
      author: "Anjas Imaji",
      license: "CC BY 4.0",
      source: commons("Petani_Memanen_Padi_di_Area_Sawah_Tugu,_Desa_Tersidilor,_Jawa_Tengah.jpg"),
    },
  },
} satisfies Record<string, Photo>;

export type ImageKey = keyof typeof photos;
