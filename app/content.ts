export const companyName = "byConsultax";
export const logoPath = "/logo-byconsultax-v2.png";
export const whatsappNumber = "6285703264750";
export const whatsappMessage = "Halo byConsultax, saya ingin bertanya tentang layanan pajak.";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const highlights = [
  ["Konsultasi", "Pembahasan kewajiban pajak dan langkah yang perlu dilakukan."],
  ["Pelaporan", "Bantuan menyiapkan dan melaporkan pajak pribadi maupun usaha."],
  ["Pembukuan", "Pencatatan transaksi dan laporan keuangan untuk kebutuhan usaha."],
];

export const values = [
  { title: "Penjelasan yang jelas", copy: "Perhitungan dan kewajiban pajak dijelaskan dengan bahasa yang mudah dipahami." },
  { title: "Sesuai kebutuhan", copy: "Layanan ditentukan setelah meninjau kondisi pajak dan kebutuhan usaha." },
  { title: "Ditinjau sebelum dilaporkan", copy: "Draf laporan dikirim untuk diperiksa dan disetujui sebelum pelaporan." },
];

export const services = [
  {
    slug: "konsultasi-pajak",
    title: "Konsultasi Pajak",
    headline: "Pahami kewajiban pajak dan langkah penyelesaiannya.",
    copy: "Kami meninjau penghasilan dan kegiatan usaha untuk menentukan kewajiban pajak serta menjelaskan langkah yang perlu dilakukan.",
    points: ["Cek kondisi pajak", "Kewajiban pelaporan", "Pajak atas transaksi", "Langkah selanjutnya"],
    deliverables: ["Ringkasan hasil konsultasi", "Daftar kewajiban pajak", "Catatan dokumen yang perlu dilengkapi", "Saran langkah berikutnya"],
    process: [
      "Konsultasi dimulai dengan pembahasan kondisi pajak dan pertanyaan yang perlu diselesaikan.",
      "Kami memeriksa data dan dokumen terkait.",
      "Hasil pemeriksaan dan pilihan langkah dibahas bersama klien.",
      "Pendampingan lanjutan dapat disepakati sesuai kebutuhan.",
    ],
    suitableFor: ["Pemilik usaha yang baru mulai mengurus pajak", "Freelancer yang ingin memahami pajak penghasilannya", "Perusahaan yang membutuhkan pendapat kedua"],
  },
  {
    slug: "tax-planning",
    title: "Perencanaan Pajak",
    headline: "Ketahui dampak pajak sebelum mengambil keputusan.",
    copy: "Kami menghitung dampak pajak dari rencana pengembangan usaha dan perubahan transaksi berdasarkan ketentuan yang berlaku.",
    points: ["Cek transaksi usaha", "Simulasi pajak", "Cek biaya", "Jadwal kewajiban pajak"],
    deliverables: ["Ringkasan penghasilan dan biaya", "Simulasi PPh dan PPN sesuai kebutuhan", "Catatan dokumen transaksi", "Jadwal pembayaran dan pelaporan"],
    process: [
      "Pembahasan awal mencakup rencana usaha dan keputusan yang sedang dipertimbangkan.",
      "Klien menyiapkan data transaksi, biaya, dan dokumen terkait.",
      "Kami menghitung dampak pajak dan menjelaskan pilihan yang tersedia.",
      "Rekomendasi disusun sebagai acuan bagi pemilik usaha atau tim keuangan.",
    ],
    suitableFor: ["Usaha yang sedang berkembang", "Bisnis yang mempertimbangkan status PKP", "Perusahaan yang ingin menyiapkan pajak akhir tahun"],
  },
  {
    slug: "pelaporan-spt-tahunan",
    title: "Pelaporan SPT Tahunan",
    headline: "Penyusunan dan pelaporan SPT Tahunan pribadi maupun badan.",
    copy: "Kami memeriksa data penghasilan, bukti potong, harta, dan utang, kemudian menyusun draf SPT untuk ditinjau sebelum pelaporan.",
    points: ["SPT orang pribadi", "SPT badan usaha", "Bukti potong", "Data harta dan utang"],
    deliverables: ["Daftar dokumen yang dibutuhkan", "Rekap penghasilan dan bukti potong", "Draf SPT untuk ditinjau", "Bukti lapor dan salinan dokumen"],
    process: [
      "Kami mengirim daftar dokumen sesuai profil wajib pajak.",
      "Data yang diterima diperiksa kelengkapan dan kesesuaiannya.",
      "Kami menyusun draf SPT dan mengonfirmasi data yang perlu diperjelas.",
      "SPT dilaporkan setelah mendapat persetujuan klien, lalu bukti lapor disimpan.",
    ],
    suitableFor: ["Karyawan dengan penghasilan tambahan", "Freelancer dan profesional", "CV atau PT yang perlu melaporkan SPT Tahunan"],
  },
  {
    slug: "pendampingan-pajak-bulanan",
    title: "Pendampingan Pajak Bulanan",
    headline: "Perhitungan dan pelaporan pajak bulanan.",
    copy: "Pendampingan PPh dan PPN bulanan, termasuk perhitungan, penyiapan laporan, pengingat jadwal, serta arsip bukti bayar dan lapor.",
    points: ["SPT Masa", "PPh dan bukti potong", "PPN dan faktur pajak", "Pengingat jadwal"],
    deliverables: ["Jadwal pajak bulanan", "Rekap transaksi terkait pajak", "Perhitungan dan draf laporan pajak", "Arsip bukti bayar dan lapor"],
    process: [
      "Klien mengirim data transaksi dan gaji bulan berjalan.",
      "Kami memeriksa dokumen dan menghitung pajak yang perlu dibayar.",
      "Perhitungan dan draf laporan dikirim untuk ditinjau klien.",
      "Kami membantu pelaporan dan mengarsipkan bukti bayar serta bukti lapor.",
    ],
    suitableFor: ["Usaha dengan transaksi rutin", "Perusahaan yang memiliki karyawan dan pemasok", "PKP yang perlu melaporkan PPN bulanan"],
  },
  {
    slug: "pembukuan-laporan-keuangan",
    title: "Pembukuan & Laporan Keuangan",
    headline: "Catatan transaksi dan laporan keuangan untuk usaha.",
    copy: "Kami mencatat transaksi dan menyusun laporan keuangan dari data usaha. Pembukuan ini menjadi dasar untuk menilai hasil usaha serta menghitung dan melaporkan pajak.",
    points: ["Pencatatan transaksi", "Laporan laba rugi dan neraca", "Pencocokan rekening bank", "Arsip bukti transaksi"],
    deliverables: ["Jurnal transaksi dan buku besar", "Laporan laba rugi dan neraca", "Rekap kas, bank, piutang, dan utang", "Daftar bukti transaksi yang belum lengkap"],
    process: [
      "Klien menyiapkan rekening koran, invoice, nota, dan catatan penjualan.",
      "Kami mengelompokkan dan mencatat transaksi.",
      "Catatan dicocokkan dengan saldo dan bukti transaksi.",
      "Laporan keuangan ditinjau bersama klien secara berkala.",
    ],
    suitableFor: ["UMKM yang belum memiliki pembukuan", "Toko online dengan banyak transaksi", "Perusahaan yang menyiapkan laporan untuk SPT badan"],
  },
  {
    slug: "pajak-umkm-pribadi",
    title: "Pajak UMKM & Orang Pribadi",
    headline: "Pengelolaan pajak UMKM, freelancer, dan profesional.",
    copy: "Bantuan perhitungan dan pelaporan pajak untuk pemilik usaha, pekerja lepas, dan profesional, sesuai jenis serta sumber penghasilan.",
    points: ["Pajak usaha kecil", "Penghasilan freelance", "Penghasilan profesi", "Pelaporan harta"],
    deliverables: ["Rekap sumber penghasilan", "Perhitungan pajak sesuai sumber penghasilan", "Daftar dokumen pendukung", "Panduan pelaporan SPT orang pribadi"],
    process: [
      "Konsultasi awal membahas kegiatan usaha dan sumber penghasilan.",
      "Kami memeriksa status NPWP/NIK dan riwayat pelaporan.",
      "Kami menghitung pajak dan menjelaskan catatan usaha yang diperlukan.",
      "Kami membantu menyiapkan laporan dan mengarsipkan dokumen.",
    ],
    suitableFor: ["Pemilik toko, usaha jasa, dan bisnis online", "Freelancer dengan beberapa klien", "Dokter, konsultan, kreator, dan profesional lainnya"],
  },
  {
    slug: "ppn-efaktur-pkp",
    title: "PPN, Faktur Pajak & PKP",
    headline: "Bantuan mengurus PPN dan faktur pajak usaha.",
    copy: "Kami bantu mengecek kebutuhan status PKP, menyiapkan faktur pajak, dan merekap PPN masukan serta keluaran untuk pelaporan bulanan.",
    points: ["Kebutuhan status PKP", "Faktur pajak", "PPN masukan dan keluaran", "SPT Masa PPN"],
    deliverables: ["Catatan kesiapan pengurusan PKP", "Rekap PPN masukan dan keluaran", "Hasil pengecekan faktur pajak", "Draf SPT Masa PPN"],
    process: [
      "Pembahasan awal mencakup omzet, jenis transaksi, dan status PKP usaha.",
      "Klien menyiapkan invoice, faktur pajak, dan dokumen pendukung.",
      "Kami memeriksa faktur dan menyusun rekap PPN.",
      "Draf laporan dikirim untuk ditinjau dan disetujui sebelum pelaporan.",
    ],
    suitableFor: ["Usaha yang sedang menyiapkan pengurusan PKP", "PKP baru yang perlu bantuan faktur pajak", "Tim keuangan yang perlu bantuan pelaporan PPN"],
  },
  {
    slug: "payroll-pph-21",
    title: "Payroll & PPh 21",
    headline: "Perhitungan gaji dan PPh 21 karyawan.",
    copy: "Kami menghitung gaji, tunjangan, BPJS, dan PPh 21 berdasarkan data karyawan, serta menyiapkan rekap payroll dan bukti potong.",
    points: ["Perhitungan gaji", "PPh 21", "Bukti potong karyawan", "Rekap payroll"],
    deliverables: ["Rekap gaji dan tunjangan", "Perhitungan PPh 21", "Draf bukti potong", "Rekap payroll untuk arsip perusahaan"],
    process: [
      "Klien mengirim data karyawan, gaji, tunjangan, dan BPJS.",
      "Kami menghitung payroll dan PPh 21 berdasarkan data yang diterima.",
      "Rekap ditinjau dan disetujui klien sebelum pembayaran dan pelaporan.",
      "Kami menyiapkan bukti potong dan dokumen untuk arsip perusahaan.",
    ],
    suitableFor: ["Perusahaan dengan karyawan tetap atau kontrak", "Usaha yang baru mulai mengatur payroll", "Tim yang membutuhkan bantuan perhitungan PPh 21"],
  },
];

export const experts = [
  ["Alya Prameswari", "Konsultasi Pajak", "SPT Tahunan dan pajak orang pribadi"],
  ["Rafi Mahendra", "Pelaporan Pajak", "Pajak bulanan, PPh, dan PPN"],
  ["Nabila Putri", "Pembukuan", "Pencatatan transaksi dan laporan keuangan"],
  ["Dimas Arya", "Pajak Usaha", "Perencanaan pajak, PKP, dan payroll"],
];

export const insights = [
  { category: "SPT Tahunan", title: "Apa saja yang perlu disiapkan untuk lapor SPT?" },
  { category: "Pembukuan", title: "Bagaimana memulai pembukuan usaha?" },
  { category: "PPN", title: "Kapan usaha perlu mengurus PKP?" },
  { category: "PPh 21", title: "Apa yang perlu disiapkan untuk pajak karyawan?" },
];

export const clientSegments = [
  { title: "UMKM & Toko Online", copy: "Bantuan mencatat transaksi, menghitung pajak usaha, dan menyiapkan SPT.", tags: ["Toko online", "Jasa", "Kuliner", "Toko retail"] },
  { title: "Freelancer & Profesional", copy: "Bantuan melaporkan penghasilan dari pekerjaan, proyek, atau praktik pribadi.", tags: ["SPT pribadi", "Bukti potong", "Harta", "Penghasilan"] },
  { title: "CV, PT & Startup", copy: "Bantuan pajak bulanan, gaji karyawan, dan laporan keuangan perusahaan.", tags: ["SPT badan", "PPh 21", "PPN", "Pembukuan"] },
  { title: "PKP & Tim Keuangan", copy: "Bantuan mengecek faktur, menghitung PPN, dan menyiapkan laporan pajak.", tags: ["Faktur pajak", "Bukti potong", "Jadwal pajak", "Rekonsiliasi"] },
];

export const packages = [
  { name: "Cek Pajak", label: "Konsultasi awal", copy: "Peninjauan kondisi pajak untuk mengetahui kewajiban dan langkah yang diperlukan.", includes: ["Cek kondisi pajak", "Daftar kewajiban", "Dokumen yang dibutuhkan", "Langkah berikutnya"] },
  { name: "Pajak Bulanan", label: "Pendampingan rutin", copy: "Untuk usaha yang membutuhkan bantuan perhitungan dan pelaporan setiap bulan.", includes: ["Jadwal pajak", "Perhitungan PPh/PPN", "Draf laporan", "Arsip bukti bayar dan lapor"] },
  { name: "SPT Tahunan", label: "Pribadi dan badan usaha", copy: "Penyusunan dan pelaporan SPT Tahunan orang pribadi maupun badan usaha.", includes: ["Daftar dokumen SPT", "Cek bukti potong", "Draf SPT", "Bukti lapor"] },
  { name: "Pembukuan Usaha", label: "Pencatatan keuangan", copy: "Pencatatan dan penataan transaksi sebagai dasar penyusunan laporan keuangan.", includes: ["Pencatatan transaksi", "Pencocokan saldo bank", "Laporan keuangan", "Pengecekan bukti transaksi"] },
];

export const workflowSteps = [
  ["Konsultasi awal", "Pembahasan kondisi usaha, kewajiban pajak, dan kebutuhan layanan."],
  ["Persiapan dokumen", "Daftar dokumen disiapkan sesuai kebutuhan pekerjaan."],
  ["Perhitungan dan penyusunan", "Data diperiksa, pajak dihitung, dan draf laporan disusun."],
  ["Peninjauan laporan", "Draf dibahas dan dikonfirmasi bersama klien sebelum disetujui."],
  ["Pelaporan dan arsip", "Laporan yang disetujui diproses dan bukti pelaporannya diarsipkan."],
];

export const faqs = [
  { question: "Apakah melayani pajak orang pribadi?", answer: "Bisa. Kami melayani orang pribadi, freelancer, profesional, serta pemilik usaha, CV, dan PT." },
  { question: "Apakah konsultasi harus disertai paket bulanan?", answer: "Tidak. Konsultasi dapat dilakukan secara terpisah. Pendampingan lanjutan ditentukan sesuai kebutuhan dan kesepakatan." },
  { question: "Apa saja dokumen untuk SPT Tahunan?", answer: "Dokumen umumnya meliputi bukti potong, data penghasilan, harta, dan utang. Untuk pemilik usaha, diperlukan juga catatan atau laporan keuangan. Daftar lengkap disesuaikan dengan profil wajib pajak." },
  { question: "Apakah menangani sengketa pajak?", answer: "Saat ini kami berfokus pada konsultasi, perhitungan, pelaporan, dan pembukuan. Kami belum melayani proses hukum atau sengketa pajak." },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
