# Bligomi

Situs profil perusahaan **PT Bligo Mahia Inovasi** (bligomi.com), dibangun ulang dari situs Google Sites lama.

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lenis

## Menjalankan

Butuh Node.js 20 atau lebih baru.

```bash
npm install
npm run dev      # http://localhost:3000
```

Untuk produksi:

```bash
npm run build
npm run start
```

## Struktur

```
src/
  app/                    halaman (App Router)
    page.tsx              beranda
    tentang-kami/         Tentang Kami + Profil Perusahaan
    keberlanjutan/        Bligo Foundation
    ruang-media/          daftar artikel + rubrik
    artikel/[...slug]/    halaman artikel
    kredit-foto/          atribusi foto
  components/             header, footer, komponen animasi (motion.tsx), bagian bersama
  content/                seluruh naskah dan data situs
  assets/img/             foto
```

## Mengubah isi

Naskah dipisah dari tampilan, jadi mengubah teks tidak perlu menyentuh komponen:

| Yang diubah | Berkas |
|---|---|
| Nama, alamat, kontak, susunan menu | `src/content/site.ts` |
| Profil, visi-misi, nilai, pilar strategi | `src/content/company.ts` |
| Artikel Ruang Media | `src/content/articles.ts` |
| Foto dan atribusinya | `src/content/images.ts` |

Telepon dan email di `site.ts` masih kosong dan tampil sebagai "Menyusul" sampai diisi.

## Catatan

- **Foto masih ilustrasi.** Foto di `src/assets/img/` berasal dari Wikimedia Commons (sebagian besar CC BY-SA), bukan dokumentasi fasilitas perusahaan. Lisensinya mewajibkan atribusi, yang ditampilkan di `/kredit-foto`. Untuk mengganti, timpa berkas dengan nama yang sama lalu perbarui atribusinya di `images.ts`.
- **Alamat lama dipertahankan** (`/artikel/perpajakan/ppn`, `/ruang-media/peternakan`, dan seterusnya) agar tautan dari situs lama tetap hidup. `/login` diarahkan ke beranda.
- **Animasi** mati otomatis bagi pengunjung yang menyetel perangkatnya ke "kurangi gerak".
