# Sistematika Portofolio Deck

Keluaran akhir repositori ini. Recap di `docs/project_*/` tetap sumber fakta. Deck hanya menampilkan ulang fakta itu.

Berkas deck: [`../../index.html`](../../index.html). Buka di browser. Word dan PDF tidak dibuat.

## Pembaca

Deck untuk Pembaca: orang yang membukanya karena tertarik pada Mahasiswa dan Proyek yang sudah selesai. Penguji adalah salah satu Pembaca. Keduanya melihat slide yang sama.

## Sampul

Tiga baris dari [`../profile/MY_PROFILE.md`](../profile/MY_PROFILE.md), tanpa NIM dan tanpa kalimat lain:

1. Dafa Fawaz Fachriza Rahman
2. Mahasiswa S1 Teknik Informatika, Universitas Putra Indonesia Cianjur — Pemrograman Mobile II
3. Tautan GitHub dari Identitas

## Urutan bagian

Satu deck. Satu bagian untuk satu proyek. KRS Mahasiswa dan SIAKAD Mahasiswa UNPI satu bagian, berjudul KRS Mahasiswa.

1. BloggerNews Mobile
2. KonsulYuk! UNPI
3. KRS Mahasiswa
4. GempaApp
5. Warung Seblak Mageng

## Jenis slide

Setiap bagian dimulai dengan satu slide identitas, lalu satu slide bukti untuk setiap screenshot pada recap, mengikuti urutan di recap. Fitur yang hanya tertulis di recap, tanpa screenshot, tidak mendapat slide.

- **Slide identitas.** Nama proyek, lalu satu kalimat bahasa Indonesia dari fakta pembuka recap: apa yang Mahasiswa buat dan apa yang pengguna dapat lakukan. Tanpa slogan dan tanpa ajakan. Kalimat itu tidak diulang di slide bukti.
- **Slide bukti.** Screenshot asli terpisah dari teks. Di layar lebar: kolom kiri screenshot, kolom kanan judul fitur dan paragraf Recap. Di layar sempit: pratinjau screenshot di atas, teks di bawah, tombol untuk Mode lihat screenshot. Tanpa bingkai perangkat.
- **Penutup.** Kelima nama proyek, urutan yang sama, lalu tautan GitHub dari Identitas. Tanpa ajakan.

## Design system

Kanvas mengisi area di atas navigasi dan menyesuaikan lebar jendela. Navigasi berada di luar kanvas. Spesifikasi token, dua kolom bukti, Mode lihat screenshot, dan gerak: [`../design/DECK_SYSTEM.md`](../design/DECK_SYSTEM.md). Keputusan: [`../adr/0006-two-column-bukti-responsive.md`](../adr/0006-two-column-bukti-responsive.md).

### Primitif

| Token | Nilai |
| --- | --- |
| `--surface` | `#f6f5f4` |
| `--canvas` | `#ffffff` |
| `--ink` | `#1a1a1a` |
| `--brand-navy` | `#0a1530` |
| `--primary` | `#5645d4` (fokus dan nav aktif saja) |
| `--judul` | `1.75rem` |
| `--proyek` | `1.25rem` |
| `--isi` | `0.95rem` |
| Huruf | Inter self-host, lalu system-ui |
| Spasi | kelipatan 8px |
| Radius | tombol 8px, kartu 12px |

### Peran

| Peran | Perlakuan |
| --- | --- |
| Jendela dan nav | `--surface` |
| Sampul | navy, teks `--on-dark` |
| Slide identitas | tint Bagian |
| Slide bukti | kiri screenshot, kanan teks; di mobile pratinjau plus Mode lihat |
| Teks di terang | `--ink` atau `--charcoal` di tint |
| Warna aplikasi | hanya di dalam screenshot |

### Komponen

| Komponen | Isi |
| --- | --- |
| Sampul | Tiga baris Identitas, rata kiri, di tengah kanvas secara vertikal, latar navy |
| Slide identitas | Nama proyek, lalu satu kalimat, latar tint Bagian |
| Slide bukti | Dua kolom: kiri screenshot `object-fit: contain`, kanan judul dan paragraf Recap. Mobile: pratinjau `object-fit: cover` dan tombol Lihat screenshot |
| Penutup | Daftar nama proyek, lalu tautan GitHub sebagai tombol persegi |
| Navigasi | Tombol Sebelumnya dan Berikutnya, penghitung `n/total`, panah kiri dan kanan. Ujung deck menonaktifkan tombol yang tidak berlaku. Ganti slide geser plus opacity lewat JavaScript; `prefers-reduced-motion` instan; tanpa putar otomatis |

## Fakta dan privasi

- Jangan mengarang fitur, hasil, atau kebijakan. Bila recap membedakan data demo dan data nyata, penjelasan slide mempertahankan perbedaan itu.
- Jangan menyalin NIM, nama orang lain, kredensial, atau rahasia dari screenshot ke teks slide.
- Tautan GitHub hanya dari Identitas. Jangan menambah tautan sosial lain.
- Screenshot sumber tidak diubah. Recap Warung Seblak Mageng sudah menandai gambar yang memuat data pribadi.
