# Sistem visual Portofolio Deck

Spesifikasi visual untuk [`../../index.html`](../../index.html). Fakta, urutan bagian, dan aturan privasi tetap di [`../guides/pitch_deck_systematic.md`](../guides/pitch_deck_systematic.md). Token diadaptasi dari [`SYSTEM_DESIGN.md`](SYSTEM_DESIGN.md) (analisis Notion). Anti-slop: [`TASTE_SKILL.md`](TASTE_SKILL.md).

**Design read:** redesign overhaul Portofolio Deck HTML statis untuk Pembaca, bahasa workspace Notion plus editorial, native CSS untuk GitHub Pages. Bukan landing pitch.

**Dials:** variance 8 / motion 5 / density 4.

**Tema:** terang terkunci. Tidak ada `prefers-color-scheme` swap dan tidak ada toggle.

## Yang diambil dari Notion, yang ditolak

Diambil: pita navy, kartu pastel, geometri 8px/12px, elevasi mockup hanya untuk satu keluarga, ungu primer sebagai sinyal fokus, Inter sebagai pengganti Notion Sans.

Ditolak: CTA jual, testimoni, harga, tombol pill, serif, mesh dekoratif berlebih, warna primer sebagai latar luas, warna chrome dari aplikasi.

## Kanvas dan chrome

- Kanvas mengisi area di atas navigasi (bukan bingkai 9:16).
- Latar jendela dan pita navigasi: `--surface`.
- Navigasi di luar kanvas: Sebelumnya, penghitung `n/total`, Berikutnya. Panah kiri/kanan. Ujung deck `aria-disabled`. Tidak ada putar otomatis.
- Tombol: `--rounded-md` (8px), padding `10px 18px`, tinggi sentuh min 44px, border `1px solid --hairline-strong`, isi `--ink`, latar `--canvas`.
- Aksen `--primary` hanya pada `:focus-visible` dan tombol aktif. Tidak pada judul, latar slide, atau ikon dekoratif.
- Huruf: Inter self-host (`woff2` di repo), fallback `system-ui, "Segoe UI", sans-serif`. Bukan tautan Google Fonts runtime.

## Token

| Token | Nilai | Pakai |
| --- | --- | --- |
| `--primary` | `#5645d4` | Fokus dan navigasi aktif saja |
| `--brand-navy` | `#0a1530` | Latar Sampul; latar keluarga kartu-elevated |
| `--on-dark` | `#ffffff` | Teks di navy |
| `--canvas` | `#ffffff` | Kartu, tombol |
| `--surface` | `#f6f5f4` | Jendela, nav, kanvas netral |
| `--ink` | `#1a1a1a` | Teks utama di terang |
| `--charcoal` | `#37352f` | Teks di kartu tint |
| `--slate` | `#5d5b54` | Teks sekunder |
| `--hairline` | `#e5e3df` | Garis kartu |
| `--hairline-strong` | `#c8c4be` | Border tombol |
| `--tint-sky` | `#dcecfa` | Bagian BloggerNews Mobile |
| `--tint-lavender` | `#e6e0f5` | Bagian KonsulYuk! UNPI |
| `--tint-mint` | `#d9f3e1` | Bagian KRS Mahasiswa |
| `--tint-peach` | `#ffe8d4` | Bagian GempaApp |
| `--tint-rose` | `#fde0ec` | Bagian Warung Seblak Mageng |
| `--judul` | `1.75rem` | Nama di Sampul |
| `--proyek` | `1.25rem` | Nama Proyek, judul fitur |
| `--isi` | `0.95rem` | Kalimat identitas, caption, nav |
| `--rounded-md` | `8px` | Tombol |
| `--rounded-lg` | `12px` | Kartu screenshot dan kartu caption |
| `--space` | kelipatan 8px | Padding dan gap |

Teks di navy: `--on-dark`. Teks di tint: `--charcoal`. Kontras isi vs latar min 4.5:1.

Warna UI aplikasi hanya di dalam screenshot.

## Tint per Bagian

| Bagian | Token latar identitas dan keluarga tint-band |
| --- | --- |
| BloggerNews Mobile | `--tint-sky` |
| KonsulYuk! UNPI | `--tint-lavender` |
| KRS Mahasiswa | `--tint-mint` |
| GempaApp | `--tint-peach` |
| Warung Seblak Mageng | `--tint-rose` |

Kolom teks slide bukti memakai tint Bagian. Kolom screenshot memakai `--brand-navy`.

## Peran slide

### Sampul

Pita navy penuh kanvas. Tiga baris Identitas rata kiri, tengah vertikal. Teks `--on-dark`. Tautan GitHub warna sama, underline. Tanpa screenshot, tanpa aksen ungu.

### Slide identitas

Kanvas = tint Bagian. Nama Proyek `--proyek`, lalu satu kalimat Recap `--isi` di `--charcoal`. Tanpa screenshot. Tanpa slogan.

### Slide bukti

Dua kolom terpisah. Kiri: screenshot Recap, `object-fit: contain`, tanpa bingkai perangkat. Kanan: judul fitur dan paragraf Recap pada tint Bagian; gulir hanya pada kolom teks.

Di lebar di bawah 768px: screenshot menjadi pratinjau di atas (`object-fit: cover`, tinggi terbatas). Tombol **Lihat screenshot** membuka **Mode lihat screenshot** (gambar utuh `contain`, tombol Tutup, Escape). Berkas sumber screenshot tidak diubah.

### Penutup

Kanvas `--surface`. Daftar lima nama Proyek, urutan sistematika. Tautan GitHub sebagai tombol `--rounded-md` (tautan, bukan ajakan).

## Gerak

Ganti slide: JavaScript menambah kelas enter/exit; geser 48px plus opacity, 280-320ms, `cubic-bezier(0.16, 1, 0.3, 1)`. Mode lihat: fade plus scale 0.94 ke 1 pada gambar.

```css
@media (prefers-reduced-motion: reduce) {
  .slide { transition: none; }
}
```

Tanpa autoplay, GSAP, stagger isi, parallax, atau marquee.

## Z-index

| Lapisan | Nilai |
| --- | --- |
| Kanvas isi | 0 |
| Tombol Lihat screenshot | 10 |
| Navigasi | 20 |
| Fokus outline | 30 |
| Mode lihat screenshot | 40 |

## Stack

Satu berkas `index.html`, CSS dan JS sebaris atau `<style>` / `<script>` di berkas itu. Tanpa bundler. Font `woff2` relatif dari root, ramah GitHub Pages. Ikon tidak dipakai kecuali nanti untuk kontrol nav; jika dipakai: satu keluarga Phosphor, outline, `aria-hidden` bila ada teks terlihat.

## Aturan yang gagal jika dilanggar

1. Aksen `--primary` muncul di elemen ketiga selain fokus dan nav aktif.
2. Berkas screenshot sumber diubah atau dibingkai perangkat. (Pratinjau mobile boleh `object-fit: cover`.)
3. Teks slide tidak sama dengan Recap / Identitas.
4. Screenshot dan teks bukti berbagi satu kolom di layar lebar.
5. Pratinjau mobile menampilkan seluruh screenshot tanpa Mode lihat.
6. Muncul CTA, slogan, atau tautan sosial selain GitHub Identitas.
7. Bagian memakai tint milik Bagian lain.
8. Transisi mengabaikan `prefers-reduced-motion`.
9. Tombol nav radius pill atau tinggi sentuh di bawah 44px.
10. Huruf serif atau font anak (Baloo, Comic Neue) masuk deck.
