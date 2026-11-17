import type { ImageMetadata } from "astro";

import bloggerForm from "../../docs/project_bloggernews-mobile/buat-blog-screen.png";
import bloggerCategory from "../../docs/project_bloggernews-mobile/category-search-based-screen.png";
import bloggerDetail from "../../docs/project_bloggernews-mobile/detail-blog-screen.png";
import bloggerHome from "../../docs/project_bloggernews-mobile/home-scree-daftar-blog.png";
import bloggerExplore from "../../docs/project_bloggernews-mobile/jelajah-blogs-content-screen.png";
import bloggerSaved from "../../docs/project_bloggernews-mobile/save-document-screen.png";
import bloggerYoutube from "../../docs/project_bloggernews-mobile/youtube-api-content-example-.png";
import konsulChat from "../../docs/project_konsulyuk-unpi/feat-01.png";
import konsulVoice from "../../docs/project_konsulyuk-unpi/feat-02-character-voice.png";
import konsulCareer from "../../docs/project_konsulyuk-unpi/feat-3-peta=karir.png";
import konsulQuiz from "../../docs/project_konsulyuk-unpi/feat-04a-quis-minat.png";
import konsulResult from "../../docs/project_konsulyuk-unpi/feat-04b-quis-minat.png";
import krsDb from "../../docs/project_krs-mahasiswa/feat-01-integrasi-database-spreadsheet.png";
import krsBackup from "../../docs/project_krs-mahasiswa/feat-02-export-import-database.png";
import krsList from "../../docs/project_krs-mahasiswa/feat-03a-crud-data-krs.png";
import krsConfirm from "../../docs/project_krs-mahasiswa/feat-03b-crud-data-krs.png";
import krsPeriod from "../../docs/project_krs-mahasiswa/feat-03c-curd-data-krs.png";
import krsSchedule from "../../docs/project_krs-mahasiswa/feat-04-jadwal-perkuliahan.png";
import krsKhs from "../../docs/project_krs-mahasiswa/feat-05-khs.png";
import gempaDash from "../../docs/project_gempaapp/dashboard-visualisi-gempa.png";
import gempaReport from "../../docs/project_gempaapp/laporan-gempa.png";
import gempaHistory from "../../docs/project_gempaapp/riwayat-gempa.png";
import gempaSiaga from "../../docs/project_gempaapp/siaga-gempa.png";
import warungCatalog from "../../docs/project_warung-seblak-mageng/daftar-produc.png";
import warungDetail from "../../docs/project_warung-seblak-mageng/detail-product.png";
import warungAdd from "../../docs/project_warung-seblak-mageng/page-tambah-kerangjang.png";
import warungCart from "../../docs/project_warung-seblak-mageng/page-keranjang-example.png";
import warungAddress from "../../docs/project_warung-seblak-mageng/page-pilih-alamat-tujuan.png";
import warungOrder from "../../docs/project_warung-seblak-mageng/page-buat-pesanan.png";
import warungPay from "../../docs/project_warung-seblak-mageng/page-bayar-pesanan.png";
import warungAdminNav from "../../docs/project_warung-seblak-mageng/page-navbar-admin-features.png";
import warungAdminOrders from "../../docs/project_warung-seblak-mageng/page-admin-manajemen-pesanan.png";

export type IdentitasSlide = {
  kind: "identitas";
  title: string;
  body: string;
};

export type BuktiSlide = {
  kind: "bukti";
  title: string;
  body: string;
  alt: string;
  src: ImageMetadata;
};

export type DeckSlide = IdentitasSlide | BuktiSlide;

export type ProjectDeck = {
  id: string;
  name: string;
  slides: DeckSlide[];
};

function bukti(
  title: string,
  body: string,
  src: ImageMetadata,
  alt: string,
): BuktiSlide {
  return { kind: "bukti", title, body, src, alt };
}

export const decks: ProjectDeck[] = [
  {
    id: "bloggernews-mobile",
    name: "BloggerNews Mobile",
    slides: [
      {
        kind: "identitas",
        title: "BloggerNews Mobile",
        body: "Saya membuat BloggerNews Mobile, aplikasi web berorientasi perangkat seluler untuk membaca artikel blog melalui Blogger JSON API v3, tempat pengguna menjelajahi artikel berdasarkan kategori, mencari tulisan, membuka tampilan baca, dan menyimpan tulisan untuk dibaca kembali.",
      },
      bukti(
        "Formulir Buat Artikel",
        "Formulir menerima judul, kategori/label, nama penulis, URL gambar thumbnail, dan isi artikel. Tombol publikasi menambahkan tulisan ke daftar lokal aplikasi dan dapat memicu notifikasi browser; tulisan tersebut bukan publikasi langsung ke Blogger.",
        bloggerForm,
        "Formulir untuk mengisi judul, kategori, nama penulis, URL gambar, dan isi artikel",
      ),
      bukti(
        "Jelajah Kategori dan Pencarian Artikel",
        "Tab Kategori Artikel menyediakan pencarian serta daftar kategori/label yang ditemukan pada artikel. Pengguna dapat memilih kategori untuk melihat tulisan terkait. Tab ini berbagi halaman Jelajah dengan bagian video programmer.",
        bloggerCategory,
        "Tab kategori artikel dengan pencarian dan daftar kategori",
      ),
      bukti(
        "Tampilan Baca Artikel",
        "Pembaca menampilkan isi artikel, label, informasi penulis, kontrol ukuran teks, tombol bookmark dan berbagi, serta pemutar text-to-speech. Pembacaan suara menggunakan fitur ucapan yang tersedia pada browser/perangkat.",
        bloggerDetail,
        "Artikel terbuka dengan kontrol ukuran teks, bookmark, berbagi, dan text-to-speech",
      ),
      bukti(
        "Beranda dan Daftar Artikel",
        "Beranda menampilkan filter kategori, carousel artikel unggulan, ringkasan berita lain, dan navigasi ke Jelajah, Lainnya, Disimpan, serta Pengaturan. Ikon di bagian atas menyediakan akses ke notifikasi dan pencarian.",
        bloggerHome,
        "Beranda dengan filter kategori, carousel artikel unggulan, dan daftar berita",
      ),
      bukti(
        "Video Tutorial Programmer",
        "Bagian Video Programmer menyediakan pencarian dan filter topik seperti Web, Mobile, AI, DevOps, dan Algoritma. Screenshot memperlihatkan pemberitahuan bahwa koneksi ke YouTube API gagal dan aplikasi sedang menampilkan rekomendasi lokal.",
        bloggerExplore,
        "Daftar video programmer dengan pencarian, filter topik, dan pemberitahuan mode fallback",
      ),
      bukti(
        "Artikel Tersimpan",
        "Tab Disimpan menampilkan artikel yang telah di-bookmark dan menyediakan kontrol untuk menghapusnya. Daftar bookmark disimpan di localStorage browser sehingga tetap tersedia setelah halaman dimuat ulang pada browser yang sama.",
        bloggerSaved,
        "Daftar bookmark artikel dengan jumlah tersimpan dan kontrol untuk menghapus bookmark",
      ),
      bukti(
        "Pemutar Video YouTube",
        "Memilih kartu video membuka tampilan pemutar dan menyediakan tautan untuk membuka video di YouTube. Pemutaran bergantung pada ketersediaan video, jaringan, dan dukungan embed dari YouTube.",
        bloggerYoutube,
        "Dialog pemutar video tutorial dengan tautan untuk membuka video di YouTube",
      ),
    ],
  },
  {
    id: "konsulyuk-unpi",
    name: "KonsulYuk! UNPI",
    slides: [
      {
        kind: "identitas",
        title: "KonsulYuk! UNPI",
        body: "Saya membuat KonsulYuk! UNPI, aplikasi konsultasi berbasis web untuk mahasiswa dan calon mahasiswa Universitas Putra Indonesia (UNPI), tempat pengguna bertanya melalui chat tentang program studi, kehidupan akademik, penerimaan mahasiswa baru, dan pilihan karier, dengan jawaban dari layanan AI di backend.",
      },
      bukti(
        "Chat Konsultasi",
        "Contoh ini memperlihatkan pertanyaan tentang biaya kuliah, jawaban asisten yang merujuk informasi pendaftaran, saran untuk mengeksplorasi program studi, serta kolom untuk mengirim pertanyaan lanjutan. Isi jawaban pada contoh tidak dengan sendirinya membuktikan bahwa informasi biaya atau beasiswa sudah diverifikasi.",
        konsulChat,
        "Contoh percakapan konsultasi mengenai biaya kuliah dan informasi UNPI",
      ),
      bukti(
        "Pemilihan Persona dan Pengaturan Suara",
        "Pengguna dapat memilih persona dengan gaya percakapan berbeda, mengatur kecepatan suara, dan mengaktifkan atau menonaktifkan pembacaan otomatis. Voice chat dan pengenalan ucapan memerlukan izin mikrofon serta dukungan browser.",
        konsulVoice,
        "Pilihan persona konsultasi serta pengaturan kecepatan dan bicara otomatis",
      ),
      bukti(
        "Peta Karier",
        "Peta karier menghubungkan kelompok program studi dengan contoh posisi kerja, kompetensi, sertifikasi, dan kisaran pendapatan awal. Angka dan indikator pada layar merupakan informasi yang disediakan aplikasi, bukan jaminan gaji atau hasil penempatan kerja.",
        konsulCareer,
        "Informasi bidang karier, contoh posisi, kisaran gaji, dan sertifikasi",
      ),
      bukti(
        "Pertanyaan Kuis Minat",
        "Kuis menampilkan satu pertanyaan pada satu waktu, pilihan jawaban, indikator kemajuan, dan tombol untuk melanjutkan. Pertanyaan pada gambar mengelompokkan minat berdasarkan aktivitas yang disukai pengguna.",
        konsulQuiz,
        "Pertanyaan pertama dari tiga pertanyaan kuis minat dengan pilihan jawaban",
      ),
      bukti(
        "Rekomendasi Program Studi",
        "Setelah kuis selesai, aplikasi menampilkan dua program studi dengan ringkasan bidang, pilihan karier, dan kisaran pendapatan yang tercatat pada dataset. Tombol pada halaman dapat membawa hasil rekomendasi ke chat AI. Hasil ini merupakan pencocokan sederhana, bukan asesmen psikologi atau keputusan penerimaan mahasiswa.",
        konsulResult,
        "Dua rekomendasi program studi berdasarkan jawaban kuis",
      ),
    ],
  },
  {
    id: "krs-mahasiswa",
    name: "KRS Mahasiswa",
    slides: [
      {
        kind: "identitas",
        title: "KRS Mahasiswa",
        body: "Saya membuat SIAKAD Mahasiswa UNPI, portal web untuk membantu mahasiswa mengelola kegiatan akademik, termasuk pengisian Kartu Rencana Studi (KRS), jadwal perkuliahan, dan Kartu Hasil Studi (KHS).",
      },
      bukti(
        "Integrasi Database dan Spreadsheet",
        "Pengguna dapat memilih sumber penyimpanan data akademik, termasuk penyimpanan lokal, Google Sheets, atau Server API. Layar ini juga menyediakan panduan integrasi Google Sheets.",
        krsDb,
        "Pengaturan sumber data lokal, Google Sheets, dan Server API",
      ),
      bukti(
        "Ekspor, Impor, dan Pemulihan Data",
        "Pengguna dapat menghubungkan spreadsheet dan mengelola cadangan data dengan mengunduh atau memulihkan berkas JSON.",
        krsBackup,
        "Pengaturan spreadsheet serta kontrol unduh dan pulihkan cadangan JSON",
      ),
      bukti(
        "Daftar Mata Kuliah",
        "Layar KRS menampilkan mata kuliah, kelas, semester, status wajib, beban SKS, kapasitas, dosen, dan jadwal. Bilah bawah menunjukkan navigasi utama aplikasi.",
        krsList,
        "Daftar mata kuliah yang dipilih untuk KRS",
      ),
      bukti(
        "Konfirmasi Pengajuan KRS",
        "Pesan konfirmasi menampilkan bahwa KRS berhasil disimpan dan diajukan, beserta ID KRS, jumlah mata kuliah, total SKS, status persetujuan, dan tombol cetak lembar KRS.",
        krsConfirm,
        "Konfirmasi bahwa penambahan dan registrasi KRS berhasil disimpan",
      ),
      bukti(
        "Periode Pengisian dan Beban Studi",
        "Halaman ini menunjukkan periode pengisian KRS yang aktif, batas waktu pengisian, tahun akademik, batas maksimal SKS, total beban studi, dan sisa kuota.",
        krsPeriod,
        "Halaman pengisian KRS dengan periode aktif dan ringkasan beban studi",
      ),
      bukti(
        "Jadwal Perkuliahan",
        "Jadwal disusun per hari dan menampilkan waktu kuliah, kelas, kode serta nama mata kuliah, lokasi, dosen, dan syarat kehadiran.",
        krsSchedule,
        "Jadwal kuliah mingguan beserta waktu, kelas, mata kuliah, dan ruang",
      ),
      bukti(
        "Kartu Hasil Studi",
        "Halaman KHS menampilkan ringkasan hasil studi, termasuk IPK kumulatif, total SKS lulus, IPS semester lalu, semester yang telah ditempuh, dan tombol cetak lembar KHS.",
        krsKhs,
        "Halaman hasil studi dan rekapitulasi nilai",
      ),
    ],
  },
  {
    id: "gempaapp",
    name: "GempaApp",
    slides: [
      {
        kind: "identitas",
        title: "GempaApp",
        body: "Saya membuat GempaApp, aplikasi Android untuk melihat informasi gempa bumi dan prakiraan cuaca dari layanan BMKG, termasuk gempa terkini, daftar gempa, gempa yang dirasakan, dan visualisasi shakemap.",
      },
      bukti(
        "Dashboard dan Visualisasi Gempa",
        "Dashboard menampilkan ringkasan kejadian gempa, informasi lokasi dan jarak acuan, visualisasi shakemap atau radar, serta skala intensitas MMI. Tombol pada layar membuka formulir laporan dampak atau menjalankan tes sirine. Nilai pada gambar menggambarkan data saat screenshot diambil dan bukan pembaruan langsung yang dijamin.",
        gempaDash,
        "Dashboard GempaApp dengan ringkasan kejadian, shakemap, skala MMI, dan tombol laporan",
      ),
      bukti(
        "Formulir Laporan Dampak",
        "Formulir memungkinkan pengguna mengaitkan laporan dengan gempa BMKG terkini atau memilih laporan gempa mandiri, menentukan tingkat kerusakan dan jenis infrastruktur, serta mengisi lokasi dan deskripsi. Formulir dapat digunakan tanpa login. Screenshot menunjukkan formulir, bukan bukti bahwa laporan sudah terkirim.",
        gempaReport,
        "Formulir laporan dampak dengan acuan gempa, tingkat kerusakan, infrastruktur, lokasi, dan deskripsi",
      ),
      bukti(
        "Riwayat Gempa",
        "Riwayat menyediakan tab gempa bermagnitudo minimal 5 dan gempa yang dirasakan, kolom pencarian wilayah, serta kartu berisi magnitudo, waktu, kedalaman, lokasi, dan jarak/arah relatif terhadap lokasi acuan.",
        gempaHistory,
        "Daftar gempa bermagnitudo minimal 5 dan gempa yang dirasakan dengan pencarian wilayah",
      ),
      bukti(
        "Tab Siaga dan Radar Episentrum",
        "Tab Siaga memvisualisasikan hubungan lokasi pengguna dengan episentrum, menampilkan perkiraan waktu rambat gelombang S, dan menyediakan tombol tes sirine serta getaran. Perhitungan waktu menggunakan perkiraan kecepatan tetap; ini bukan prediksi waktu kedatangan yang presisi atau layanan peringatan dini resmi. Panduan mitigasi tersedia pada bagian bawah layar.",
        gempaSiaga,
        "Radar jarak episentrum, estimasi waktu rambat gelombang S, dan kontrol tes sirine",
      ),
    ],
  },
  {
    id: "warung-seblak-mageng",
    name: "Warung Seblak Mageng",
    slides: [
      {
        kind: "identitas",
        title: "Warung Seblak Mageng",
        body: "Saya membuat Warung Seblak Mageng, prototipe toko online untuk usaha seblak di Cianjur, tempat pelanggan melihat katalog, memilih tingkat pedas dan topping, lalu melanjutkan pesanan melalui keranjang dan checkout.",
      },
      bukti(
        "Katalog Menu",
        "Katalog menampilkan pilihan kategori, kolom pencarian, dan kartu menu yang memuat foto, nama, deskripsi singkat, harga, serta tombol untuk membuka produk.",
        warungCatalog,
        "Katalog seblak dengan kategori, pencarian, dan kartu produk",
      ),
      bukti(
        "Detail Produk",
        "Halaman detail menyajikan foto, kategori, nama, harga, dan uraian produk sebelum pelanggan menentukan opsi pesanannya.",
        warungDetail,
        "Detail produk seblak dengan foto, nama, dan harga",
      ),
      bukti(
        "Pilihan Produk dan Tambah ke Keranjang",
        "Pelanggan dapat memilih tingkat pedas, menambah topping opsional, menuliskan catatan, dan menentukan jumlah porsi. Harga tombol mengikuti pilihan yang ditampilkan.",
        warungAdd,
        "Pilihan tingkat pedas, topping, catatan, jumlah, dan tombol tambah ke keranjang",
      ),
      bukti(
        "Ringkasan Keranjang",
        "Keranjang merangkum subtotal produk. Ongkos kirim belum dimasukkan pada layar ini dan dihitung pada tahap checkout; pelanggan dapat melanjutkan ke pemilihan alamat dan layanan pengiriman.",
        warungCart,
        "Ringkasan belanja dengan subtotal produk dan tombol lanjut checkout",
      ),
      bukti(
        "Pemilihan Alamat Pengiriman",
        "Layar checkout menampilkan alamat tersimpan untuk dipilih sebagai tujuan pengiriman dan menyediakan akses untuk mengelola atau menambahkan alamat. Data kontak dan alamat pada gambar merupakan informasi personal dan tidak disalin ke dalam keterangan.",
        warungAddress,
        "Checkout dengan daftar alamat tujuan yang dapat dipilih",
      ),
      bukti(
        "Ringkasan dan Pembuatan Pesanan",
        "Sebelum membuat pesanan, pelanggan dapat memeriksa rincian produk, ongkos kirim, dan total pembayaran. Antarmuka juga menyatakan bahwa stok akan direservasi oleh server. Nilai yang tampak pada gambar adalah contoh tampilan, bukan tarif yang dijamin berlaku.",
        warungOrder,
        "Ringkasan menu, ongkos kirim, total pembayaran, dan tombol buat pesanan",
      ),
      bukti(
        "Pembayaran Pesanan",
        "Halaman detail menampilkan status menunggu pembayaran, batas waktu, jumlah yang harus dibayar, serta kontrol untuk membayar, memeriksa status, atau membatalkan pesanan. Terdapat juga simulator sandbox Midtrans untuk pengembangan; tampilannya tidak membuktikan bahwa pembayaran produksi telah dikonfigurasi.",
        warungPay,
        "Detail pesanan menunggu pembayaran dengan batas waktu dan kontrol pembayaran",
      ),
      bukti(
        "Navigasi Area Admin",
        "Drawer admin menyediakan akses ke dashboard, pesanan, produk, inventory, dan pengaturan toko. Area ini ditujukan untuk pengguna dengan peran admin.",
        warungAdminNav,
        "Menu navigasi admin untuk dashboard, pesanan, produk, inventory, dan pengaturan",
      ),
      bukti(
        "Manajemen Pesanan Admin",
        "Halaman manajemen pesanan menyediakan tab daftar pesanan dan ringkasan dapur, serta kontrol pencarian dan filter status atau tanggal. Gambar menampilkan data pelanggan; samarkan nama, nomor telepon, alamat, dan kode pesanan sebelum dokumen dipublikasikan.",
        warungAdminOrders,
        "Daftar pesanan admin dengan pencarian dan filter status serta tanggal",
      ),
    ],
  },
];

export function getDeck(id: string) {
  return decks.find((deck) => deck.id === id);
}

export function proyekHref(id: string, base: string) {
  return `${base}proyek/${id}/`;
}
