# Panduan Agen Repository

Berkas ini adalah titik masuk yang selalu dimuat. Jika ada `AGENTS.md` lebih dekat ke berkas yang diubah, ikuti itu juga.

## Tugas default

Tulis atau perbarui **Recap**. Cabang lain hanya jika permintaan pengguna menamainya: kode di `apps/`, atau **Portofolio Deck** (deck, slide, keluaran mata kuliah).

Pakai istilah [`docs/domain/GLOSSARY.md`](docs/domain/GLOSSARY.md). Keluaran mata kuliah adalah Portofolio Deck; keputusan dan alasan: [`docs/adr/0001-portofolio-deck-replaces-formal-recap.md`](docs/adr/0001-portofolio-deck-replaces-formal-recap.md). Recap adalah sumber fakta untuk deck. [`README.md`](README.md) menunjuk ke sistematika dan berkas deck.

## Recap

1. Tentukan **Proyek**. Temukan kode di `apps/` dan Recap di `docs/project_*/`. Jika nama folder tidak cocok, pakai peta di bawah. **Selesai** bila kedua lokasi diketahui.
2. Baca [`docs/guides/writing_rules.md`](docs/guides/writing_rules.md). Baca `AGENTS.md` yang lebih dekat ke berkas yang diubah, jika ada. Jika menulis **Sampul**, **Identitas**, atau fakta Mahasiswa, baca [`docs/profile/MY_PROFILE.md`](docs/profile/MY_PROFILE.md). GitHub Mahasiswa hanya dari berkas itu. **Selesai** bila setiap pointer yang terpicu sudah dibaca.
3. Tulis atau perbarui Recap dari implementasi, spesifikasi Proyek, dan screenshot yang ada. **Selesai** bila tautan gambar valid, setiap screenshot yang disebut ada di folder Recap, istilah glosarium dipakai, dan Identitas hanya diambil dari `docs/profile/MY_PROFILE.md`.

### Peta nama folder

Pasangan yang namanya tidak sama:

- `apps/konsulyuk!-unpii/` → `docs/project_konsulyuk-unpi/`
- `apps/siakad-student-unpi/` → `docs/project_krs-mahasiswa/`
- `apps/quakeweather-glass/` → `docs/project_gempaapp/`

## Portofolio Deck

Sebelum mengubah deck, baca [`docs/guides/pitch_deck_systematic.md`](docs/guides/pitch_deck_systematic.md). Berkas deck: [`index.html`](index.html). Fakta tiap Proyek diambil dari Recap. Identitas hanya dari [`docs/profile/MY_PROFILE.md`](docs/profile/MY_PROFILE.md).

## Agent skills

### Issue tracker

Issues live as markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

The five canonical roles use matching label strings: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `docs/domain/GLOSSARY.md` and `docs/adr/`. Peta folder: `docs/README.md`. Lihat `docs/agents/domain.md`.
