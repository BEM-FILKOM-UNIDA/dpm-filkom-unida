// ponytail: semua konten di file ini DUMMY, ganti data asli tanpa menyentuh layout
export const site = {
  short: "DPM FILKOM UNIDA",
  full: "Dewan Perwakilan Mahasiswa, Fakultas Ilmu Komputer, Universitas Djuanda",
  tagline: "Suara Mahasiswa",
  // ponytail: GANTI nomor WA asli (format internasional tanpa +, contoh 62812xxxx)
  waNumber: "6281234567890",
  // ponytail: isi link Google Form asli, kosong berarti "segera"
  gformUrl: "",
  instagram: "",
  email: "",
  city: "Ciawi, Bogor",
};

export const kategoriAduan = [
  "Akademik",
  "Fasilitas",
  "Kesejahteraan Mahasiswa",
  "Organisasi & Kegiatan",
  "Lainnya",
];

export const fakta = [
  { label: "Berdiri", value: "[Tahun]" },
  { label: "Sekretariat", value: "Ciawi, Bogor" },
  { label: "Komisi", value: "3 komisi kerja" },
];

export const prinsip = [
  { nama: "Menampung", catatan: "Aduan mahasiswa" },
  { nama: "Mengawal", catatan: "Kebijakan fakultas" },
  { nama: "Mengawasi", catatan: "Kinerja eksekutif" },
  { nama: "Melaporkan", catatan: "Hasil kerja" },
  { nama: "Menjembatani", catatan: "Mahasiswa dan fakultas" },
  { nama: "Menjaga", catatan: "Transparansi anggaran" },
];

export const peran = [
  {
    name: "Legislasi",
    body: "Menyusun aturan kemahasiswaan, meninjau AD/ART, dan memastikan regulasi fakultas dibaca dari sisi mahasiswa.",
    img: "/images/bogor-chinese-quarter.jpg",
    alt: "Postcard Buitenzorg Chinese Quarter, awal abad ke-20",
    caption: "Buitenzorg, awal abad ke-20.",
    credit: "Ned-Ind. Publiciteitsbureau N.V., CC BY 4.0",
    ratio: "4 / 5",
    width: 240,
  },
  {
    name: "Budgeting",
    body: "Meninjau rencana anggaran lembaga dan memastikan setiap rupiah yang dibelanjakan bisa dipertanggungjawabkan.",
    img: "/images/tjileboet.jpg",
    alt: "Ilustrasi lembah Tjileboet, Buitenzorg, abad ke-19",
    caption: "Lembah Tjileboet, ilustrasi abad ke-19.",
    credit: "Rijksmuseum, CC0",
    ratio: "3 / 2",
    width: 320,
  },
  {
    name: "Pengawasan",
    body: "Mengawasi kinerja lembaga eksekutif dan menindaklanjuti temuan bersama pihak fakultas.",
    img: "/images/bogor-salak.jpg",
    alt: "Gunung Salak dilihat dari Buitenzorg, foto abad ke-19",
    caption: "Gunung Salak dari Buitenzorg, 1870-an.",
    credit: "Woodbury & Page, CC BY 4.0",
    ratio: "1 / 1",
    width: 180,
  },
];

export const komisi = [
  {
    id: "legislasi",
    nama: "Komisi Legislasi",
    fokus: "Regulasi",
    ringkas: "Aturan, AD/ART, dan tata tertib kemahasiswaan.",
    tugas: "Menyusun dan meregulasi aturan kemahasiswaan, meninjau AD/ART, serta mengawal regulasi akademik di lingkungan fakultas.",
    anggota: ["[Nama Anggota]", "[Nama Anggota]", "[Nama Anggota]"],
  },
  {
    id: "kepengawasan",
    nama: "Komisi Kepengawasan",
    fokus: "Pengawasan",
    ringkas: "Kinerja eksekutif dan tindak lanjut temuan.",
    tugas: "Mengawasi kinerja lembaga eksekutif mahasiswa dan memastikan program kerja berjalan sesuai rencana.",
    anggota: ["[Nama Anggota]", "[Nama Anggota]", "[Nama Anggota]"],
  },
  {
    id: "anggaran",
    nama: "Komisi Anggaran",
    fokus: "Anggaran",
    ringkas: "Rencana anggaran dan pertanggungjawaban dana.",
    tugas: "Meninjau rencana anggaran dan memastikan dana kelembagaan dipakai transparan dan bertanggung jawab.",
    anggota: ["[Nama Anggota]", "[Nama Anggota]"],
  },
];

export const pimpinan = [
  { nama: "[Nama Ketua]", peran: "Ketua Umum" },
  { nama: "[Nama Wakil]", peran: "Wakil Ketua" },
  { nama: "[Nama Sekretaris]", peran: "Sekretaris" },
  { nama: "[Nama Bendahara]", peran: "Bendahara" },
];

export const pembina = { nama: "[Nama Pembina]", peran: "Pembina" };

export const visi =
  "Menjadi lembaga perwakilan mahasiswa yang responsif, transparan, dan hadir untuk seluruh mahasiswa Filkom.";

export const misi = [
  "Menampung dan menindaklanjuti aspirasi mahasiswa secara terstruktur.",
  "Mengawal kebijakan akademik fakultas di sisi kepentingan mahasiswa.",
  "Mengawasi kinerja dan akuntabilitas lembaga eksekutif mahasiswa.",
  "Membangun transparansi anggaran dan keterbukaan informasi kelembagaan.",
];

export const tugasFungsi = [
  "Menyampaikan aspirasi dan pendapat mahasiswa kepada pihak fakultas.",
  "Melegislasi aturan kelembagaan kemahasiswaan di lingkungan fakultas.",
  "Mengawasi kinerja lembaga eksekutif mahasiswa dan petugas dinas.",
  "Menginventarisasi akhir masa jabatan dan melaporkan jawabannya.",
];

export const faq = [
  {
    q: "Apakah aduan saya anonim?",
    a: "Tidak sepenuhnya. Form hanya menyusun pesan dan membukanya di WhatsApp kamu; pengurus melihat nomor WhatsApp dan nama yang kamu tulis.",
  },
  {
    q: "Ke mana aduan saya dikirim?",
    a: "Pesan masuk ke WhatsApp pengurus DPM. Dari sana aduan diteruskan ke komisi sesuai kategori.",
  },
  {
    q: "Apa saja kategori aduan?",
    a: "Akademik, fasilitas, kesejahteraan mahasiswa, organisasi dan kegiatan, serta lainnya.",
  },
  {
    q: "Apakah saya harus mengisi NIM?",
    a: "Ya. NIM dipakai untuk memverifikasi bahwa aduan datang dari mahasiswa Filkom.",
  },
  {
    q: "Bisakah saya aduan tanpa WhatsApp?",
    a: "Jalur Google Form disiapkan. Selama belum aktif, gunakan form WhatsApp.",
  },
  {
    q: "Apakah data saya disimpan di situs?",
    a: "Tidak. Situs ini statis; tidak ada basis data dan tidak ada data yang disimpan di server.",
  },
];

export const plates = [
  {
    img: "/images/bogor-vijver.jpg",
    alt: "Foto lama danau di belakang istana gubernur jenderal di Buitenzorg",
    caption: "Bogor tempo dulu. Koleksi KITLV, 1870-an. Foto Woodbury & Page.",
    credit: "Woodbury & Page, CC BY 4.0",
    width: 1920,
    height: 1474,
  },
  {
    img: "/images/bogor-salak.jpg",
    alt: "Foto lama Gunung Salak dilihat dari Buitenzorg",
    caption: "Gunung Salak dari Buitenzorg, 1870-an.",
    credit: "Woodbury & Page, CC BY 4.0",
    width: 1920,
    height: 1534,
  },
];

export const kreditFoto =
  "Foto arsip: Woodbury & Page dan Ned-Ind. Publiciteitsbureau N.V., CC BY 4.0; Rijksmuseum, CC0, via Wikimedia Commons.";
