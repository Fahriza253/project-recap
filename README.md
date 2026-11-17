# Recap Project

Recap proyek mata kuliah Pemrograman Mobile II oleh [Dafa Fawaz Fachriza Rahman](https://github.com/Fahriza253).

Repository ini berisikan recap project yang telah di praktikan dalam mata kuliah mobile programming II.

Seluruh aplikasi di simpan pada directory `apps/${project-name}/`.

## Main Tasks

Recap per proyek tetap sumber fakta Portofolio Deck. Simpan pada `docs/project_<judul>/`.

Sistematika penulisan.

- Satu document markdown untuk satu project.
- Judul Document. Deskripsi singkat mengenai aplikasi. Daftar screenshoot terkait fitur yang tersedia. Harus terdapat img dan penjelasan.
- Gunakan bahasa indonesia.
- Research terlebih dahulu untuk menghindari AI Slop Writing.
- Penjelesan make it simple, easy to understand, effective.
- Aturan lengkap: [`docs/guides/writing_rules.md`](docs/guides/writing_rules.md).

## Main Output

Keluaran akhir adalah Portofolio Deck.

- Peta dokumentasi: [`docs/README.md`](docs/README.md)
- Sistematika dan design system: [`docs/guides/pitch_deck_systematic.md`](docs/guides/pitch_deck_systematic.md)
- Sistem visual (token, tint, keluarga komposisi): [`docs/design/DECK_SYSTEM.md`](docs/design/DECK_SYSTEM.md)
- Deck HTML (lokal): [`index.html`](index.html)
- Situs GitHub Pages (Astro + Tailwind): `src/pages/`, konfigurasi di [`astro.config.mjs`](astro.config.mjs)

Buka `index.html` di browser untuk deck. Recap tidak digabung menjadi Word atau PDF.

### GitHub Pages (Astro)

```bash
npm install
npm run dev
npm run build
```

Situs: `https://fahriza253.github.io/project-recap/`. Ubah `site` dan `base` di `astro.config.mjs` jika nama pengguna atau repositori berbeda. Di GitHub: Settings, Pages, Build and deployment, Source: GitHub Actions.
