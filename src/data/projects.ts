import type { ImageMetadata } from "astro";

import bloggerHome from "../../docs/project_bloggernews-mobile/home-scree-daftar-blog.png";
import bloggerDetail from "../../docs/project_bloggernews-mobile/detail-blog-screen.png";
import bloggerExplore from "../../docs/project_bloggernews-mobile/jelajah-blogs-content-screen.png";
import konsulChat from "../../docs/project_konsulyuk-unpi/feat-01.png";
import konsulVoice from "../../docs/project_konsulyuk-unpi/feat-02-character-voice.png";
import konsulCareer from "../../docs/project_konsulyuk-unpi/feat-3-peta=karir.png";
import krsList from "../../docs/project_krs-mahasiswa/feat-03a-crud-data-krs.png";
import krsSchedule from "../../docs/project_krs-mahasiswa/feat-04-jadwal-perkuliahan.png";
import krsKhs from "../../docs/project_krs-mahasiswa/feat-05-khs.png";
import gempaDash from "../../docs/project_gempaapp/dashboard-visualisi-gempa.png";
import gempaHistory from "../../docs/project_gempaapp/riwayat-gempa.png";
import gempaSiaga from "../../docs/project_gempaapp/siaga-gempa.png";
import warungCatalog from "../../docs/project_warung-seblak-mageng/daftar-produc.png";
import warungDetail from "../../docs/project_warung-seblak-mageng/detail-product.png";
import warungCart from "../../docs/project_warung-seblak-mageng/page-keranjang-example.png";

export type PreviewLayout = "browser" | "split" | "split-reverse" | "phones" | "cards";

export type Slide = {
  src: ImageMetadata;
  alt: string;
};

export type ProjectCard = {
  id: string;
  name: string;
  kicker: string;
  summary: string;
  layout: PreviewLayout;
  slides: Slide[];
};

export const projects: ProjectCard[] = [
  {
    id: "bloggernews-mobile",
    name: "BloggerNews Mobile",
    kicker: "Berita dan tutorial",
    summary:
      "Aplikasi web berorientasi perangkat seluler untuk membaca artikel blog melalui Blogger JSON API, dengan pencarian, simpan bacaan, dan video tutorial.",
    layout: "browser",
    slides: [
      { src: bloggerHome, alt: "Beranda BloggerNews dengan daftar artikel" },
      { src: bloggerDetail, alt: "Tampilan baca artikel BloggerNews" },
      { src: bloggerExplore, alt: "Tab jelajah artikel BloggerNews" },
    ],
  },
  {
    id: "konsulyuk-unpi",
    name: "KonsulYuk! UNPI",
    kicker: "Konsultasi akademik",
    summary:
      "Aplikasi konsultasi berbasis web untuk mahasiswa dan calon mahasiswa UNPI: chat, persona, peta karier, dan kuis minat.",
    layout: "split",
    slides: [
      { src: konsulChat, alt: "Layar chat konsultasi KonsulYuk! UNPI" },
      { src: konsulVoice, alt: "Pilihan persona dan suara KonsulYuk! UNPI" },
      { src: konsulCareer, alt: "Peta karier KonsulYuk! UNPI" },
    ],
  },
  {
    id: "krs-mahasiswa",
    name: "KRS Mahasiswa",
    kicker: "Portal akademik",
    summary:
      "Portal SIAKAD mahasiswa UNPI untuk mengisi KRS, melihat jadwal, dan meninjau KHS. Data contoh bukan catatan akademik resmi.",
    layout: "split-reverse",
    slides: [
      { src: krsList, alt: "Daftar mata kuliah pada pengisian KRS" },
      { src: krsSchedule, alt: "Jadwal perkuliahan pada portal mahasiswa" },
      { src: krsKhs, alt: "Kartu Hasil Studi pada portal mahasiswa" },
    ],
  },
  {
    id: "gempaapp",
    name: "GempaApp",
    kicker: "Gempa dan cuaca",
    summary:
      "Aplikasi Android untuk informasi gempa dan prakiraan cuaca dari layanan BMKG, termasuk jarak episentrum dan panduan siaga.",
    layout: "phones",
    slides: [
      { src: gempaDash, alt: "Dasbor visualisasi gempa GempaApp" },
      { src: gempaHistory, alt: "Riwayat gempa pada GempaApp" },
      { src: gempaSiaga, alt: "Tab siaga dan mitigasi GempaApp" },
    ],
  },
  {
    id: "warung-seblak-mageng",
    name: "Warung Seblak Mageng",
    kicker: "Toko daring",
    summary:
      "Prototipe toko daring seblak di Cianjur: katalog, keranjang, checkout, dan area admin. Bukan layanan produksi.",
    layout: "cards",
    slides: [
      { src: warungCatalog, alt: "Katalog menu Warung Seblak Mageng" },
      { src: warungDetail, alt: "Detail menu Warung Seblak Mageng" },
      { src: warungCart, alt: "Keranjang pesanan Warung Seblak Mageng" },
    ],
  },
];
