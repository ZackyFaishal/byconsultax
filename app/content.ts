export const companyName = "byConsultax";
export const logoPath = "/logo-byconsultax-v2.png";
export const whatsappNumber = "6285703264750";
export const whatsappMessage = "Halo byConsultax, saya ingin bertanya tentang layanan pajak.";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const highlights = [
  ["Konsultasi", "Ada yang belum jelas soal pajak? Kita bahas bersama."],
  ["Pelaporan", "Bantuan menyiapkan dan melaporkan pajak pribadi maupun usaha."],
  ["Pembukuan", "Catatan keuangan yang bisa Anda pakai untuk melihat kondisi usaha."],
];

export const values = [
  { title: "Mudah diajak bicara", copy: "Silakan bertanya, termasuk hal yang paling dasar. Kami jelaskan sampai Anda paham." },
  { title: "Sesuai kebutuhan", copy: "Kami pelajari kondisi Anda dulu, lalu bahas bantuan apa yang diperlukan." },
  { title: "Diperiksa bersama", copy: "Anda bisa melihat dan mengecek draf laporan sebelum kami lanjutkan." },
];

export const services = [
  {
    slug: "konsultasi-pajak",
    title: "Konsultasi Pajak",
    headline: "Bingung soal pajak? Mulai dari cerita Anda.",
    copy: "Ceritakan penghasilan, usaha, atau pertanyaan pajak Anda. Kami bantu mengecek kewajiban dan menjelaskan apa yang perlu dilakukan.",
    points: ["Cek kondisi pajak", "Kewajiban pelaporan", "Pajak atas transaksi", "Langkah selanjutnya"],
    deliverables: ["Ringkasan hasil konsultasi", "Daftar kewajiban pajak", "Catatan dokumen yang perlu dilengkapi", "Saran langkah berikutnya"],
    process: [
      "Anda ceritakan kondisi dan pertanyaan yang ingin dibahas.",
      "Kami cek data serta dokumen yang berkaitan.",
      "Kami jelaskan hasilnya dan bahas pilihan langkah bersama Anda.",
      "Jika masih perlu bantuan, kita sepakati pendampingan berikutnya.",
    ],
    suitableFor: ["Pemilik usaha yang baru mulai mengurus pajak", "Freelancer yang ingin memahami pajak penghasilannya", "Perusahaan yang membutuhkan pendapat kedua"],
  },
  {
    slug: "tax-planning",
    title: "Perencanaan Pajak",
    headline: "Ketahui dampak pajak sebelum mengambil keputusan.",
    copy: "Mau mengembangkan usaha atau mengubah cara bertransaksi? Kami bantu menghitung dampak pajaknya berdasarkan kondisi usaha dan ketentuan yang berlaku.",
    points: ["Cek transaksi usaha", "Simulasi pajak", "Cek biaya", "Jadwal kewajiban pajak"],
    deliverables: ["Ringkasan penghasilan dan biaya", "Simulasi PPh dan PPN sesuai kebutuhan", "Catatan dokumen transaksi", "Jadwal pembayaran dan pelaporan"],
    process: [
      "Kita bahas rencana usaha dan keputusan yang sedang Anda pertimbangkan.",
      "Anda menyiapkan data transaksi, biaya, dan dokumen terkait.",
      "Kami hitung dampak pajak dan jelaskan pilihannya.",
      "Kita susun langkah yang bisa dijalankan oleh Anda atau tim keuangan.",
    ],
    suitableFor: ["Usaha yang sedang berkembang", "Bisnis yang mempertimbangkan status PKP", "Perusahaan yang ingin menyiapkan pajak akhir tahun"],
  },
  {
    slug: "pelaporan-spt-tahunan",
    title: "Pelaporan SPT Tahunan",
    headline: "Kami bantu siapkan SPT Tahunan Anda.",
    copy: "Untuk orang pribadi maupun badan usaha. Kami cek data penghasilan, bukti potong, harta, dan utang, lalu siapkan draf SPT untuk Anda periksa.",
    points: ["SPT orang pribadi", "SPT badan usaha", "Bukti potong", "Data harta dan utang"],
    deliverables: ["Daftar dokumen yang dibutuhkan", "Rekap penghasilan dan bukti potong", "Draf SPT untuk Anda periksa", "Bukti lapor dan salinan dokumen"],
    process: [
      "Kami kirim daftar dokumen sesuai kondisi Anda.",
      "Anda kirim datanya, lalu kami cek kelengkapannya.",
      "Kami siapkan draf SPT dan bahas jika ada data yang perlu dikonfirmasi.",
      "Setelah Anda setujui, kami bantu laporkan dan simpan bukti lapornya.",
    ],
    suitableFor: ["Karyawan dengan penghasilan tambahan", "Freelancer dan profesional", "CV atau PT yang perlu melaporkan SPT Tahunan"],
  },
  {
    slug: "pendampingan-pajak-bulanan",
    title: "Pendampingan Pajak Bulanan",
    headline: "Ada yang membantu mengurus pajak setiap bulan.",
    copy: "Kami bantu menghitung dan menyiapkan laporan pajak bulanan, mulai dari PPh hingga PPN. Anda juga mendapat pengingat jadwal serta arsip bukti bayar dan lapor.",
    points: ["SPT Masa", "PPh dan bukti potong", "PPN dan faktur pajak", "Pengingat jadwal"],
    deliverables: ["Jadwal pajak bulanan", "Rekap transaksi terkait pajak", "Perhitungan dan draf laporan pajak", "Arsip bukti bayar dan lapor"],
    process: [
      "Anda kirim data transaksi dan gaji untuk bulan berjalan.",
      "Kami cek dokumen dan hitung pajak yang perlu dibayar.",
      "Anda periksa perhitungan dan draf laporannya.",
      "Kami bantu pelaporan dan kumpulkan bukti bayar serta bukti lapor.",
    ],
    suitableFor: ["Usaha dengan transaksi rutin", "Perusahaan yang memiliki karyawan dan pemasok", "PKP yang perlu melaporkan PPN bulanan"],
  },
  {
    slug: "pembukuan-laporan-keuangan",
    title: "Pembukuan & Laporan Keuangan",
    headline: "Pahami uang masuk, uang keluar, dan hasil usaha Anda.",
    copy: "Kami bantu mencatat transaksi dan menyusun laporan keuangan dari data usaha Anda. Pembukuan ini juga menjadi dasar untuk menghitung dan melaporkan pajak.",
    points: ["Pencatatan transaksi", "Laporan laba rugi dan neraca", "Pencocokan rekening bank", "Arsip bukti transaksi"],
    deliverables: ["Jurnal transaksi dan buku besar", "Laporan laba rugi dan neraca", "Rekap kas, bank, piutang, dan utang", "Daftar bukti transaksi yang belum lengkap"],
    process: [
      "Anda kirim rekening koran, invoice, nota, dan catatan penjualan.",
      "Kami kelompokkan dan catat transaksinya.",
      "Kami cocokkan catatan dengan saldo serta bukti transaksi.",
      "Laporan keuangan kami bahas bersama Anda secara berkala.",
    ],
    suitableFor: ["UMKM yang belum memiliki pembukuan", "Toko online dengan banyak transaksi", "Perusahaan yang menyiapkan laporan untuk SPT badan"],
  },
  {
    slug: "pajak-umkm-pribadi",
    title: "Pajak UMKM & Orang Pribadi",
    headline: "Usaha sendiri atau kerja lepas, pajaknya bisa dibahas di sini.",
    copy: "Punya toko, usaha jasa, atau penghasilan dari beberapa klien? Kami bantu memahami cara menghitung dan melaporkan pajak sesuai sumber penghasilan Anda.",
    points: ["Pajak usaha kecil", "Penghasilan freelance", "Penghasilan profesi", "Pelaporan harta"],
    deliverables: ["Rekap sumber penghasilan", "Perhitungan pajak sesuai kondisi Anda", "Daftar dokumen pendukung", "Panduan pelaporan SPT orang pribadi"],
    process: [
      "Anda ceritakan kegiatan usaha dan sumber penghasilan.",
      "Kami cek status NPWP/NIK serta riwayat pelaporan Anda.",
      "Kami hitung pajaknya dan bahas catatan usaha yang perlu disiapkan.",
      "Kami bantu menyiapkan laporan dan menyimpan dokumennya.",
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
      "Kita bahas omzet, jenis transaksi, dan status PKP usaha Anda.",
      "Anda kirim invoice, faktur pajak, dan dokumen pendukung.",
      "Kami periksa faktur dan susun rekap PPN.",
      "Draf laporan kami kirim untuk Anda periksa sebelum dilaporkan.",
    ],
    suitableFor: ["Usaha yang sedang menyiapkan pengurusan PKP", "PKP baru yang perlu bantuan faktur pajak", "Tim keuangan yang perlu bantuan pelaporan PPN"],
  },
  {
    slug: "payroll-pph-21",
    title: "Payroll & PPh 21",
    headline: "Bantu hitung gaji dan pajak karyawan setiap bulan.",
    copy: "Kami bantu menghitung gaji, tunjangan, BPJS, dan PPh 21 dari data karyawan Anda, sekaligus menyiapkan rekap serta bukti potongnya.",
    points: ["Perhitungan gaji", "PPh 21", "Bukti potong karyawan", "Rekap payroll"],
    deliverables: ["Rekap gaji dan tunjangan", "Perhitungan PPh 21", "Draf bukti potong", "Rekap payroll untuk arsip perusahaan"],
    process: [
      "Anda kirim data karyawan, gaji, tunjangan, dan BPJS.",
      "Kami hitung payroll serta PPh 21 berdasarkan data tersebut.",
      "Anda periksa rekap sebelum pembayaran dan pelaporan.",
      "Kami siapkan bukti potong dan dokumen untuk arsip perusahaan.",
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
  { category: "Pembukuan", title: "Dari mana mulai mencatat keuangan usaha?" },
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
  { name: "Cek Pajak", label: "Konsultasi awal", copy: "Untuk Anda yang ingin tahu kondisi pajak dan apa yang perlu diurus.", includes: ["Cek kondisi pajak", "Daftar kewajiban", "Dokumen yang dibutuhkan", "Langkah berikutnya"] },
  { name: "Pajak Bulanan", label: "Pendampingan rutin", copy: "Untuk usaha yang membutuhkan bantuan perhitungan dan pelaporan setiap bulan.", includes: ["Jadwal pajak", "Perhitungan PPh/PPN", "Draf laporan", "Arsip bukti bayar dan lapor"] },
  { name: "SPT Tahunan", label: "Pribadi dan badan usaha", copy: "Untuk Anda yang perlu menyiapkan dan melaporkan SPT Tahunan.", includes: ["Daftar dokumen SPT", "Cek bukti potong", "Draf SPT", "Bukti lapor"] },
  { name: "Pembukuan Usaha", label: "Pencatatan keuangan", copy: "Untuk usaha yang ingin mulai mencatat atau membereskan catatan transaksi.", includes: ["Pencatatan transaksi", "Pencocokan saldo bank", "Laporan keuangan", "Pengecekan bukti transaksi"] },
];

export const workflowSteps = [
  ["Cerita dulu", "Sampaikan kondisi usaha dan hal yang ingin Anda tanyakan."],
  ["Siapkan data", "Kami kirim daftar dokumen yang dibutuhkan."],
  ["Kami kerjakan", "Kami cek data, hitung pajak, dan siapkan laporannya."],
  ["Periksa bersama", "Anda cek hasilnya. Kalau ada yang belum jelas, kita bahas."],
  ["Lapor dan simpan", "Setelah Anda setujui, kami bantu pelaporan dan simpan buktinya."],
];

export const faqs = [
  { question: "Bisa bantu pajak pribadi juga?", answer: "Bisa. Kami melayani orang pribadi, freelancer, profesional, serta pemilik usaha, CV, dan PT." },
  { question: "Boleh konsultasi dulu tanpa ambil paket bulanan?", answer: "Tentu. Kita bahas kebutuhan Anda dulu. Setelah itu, Anda bisa menentukan apakah perlu bantuan lanjutan." },
  { question: "Apa saja dokumen untuk SPT Tahunan?", answer: "Biasanya bukti potong, data penghasilan, harta, dan utang. Kalau punya usaha, siapkan juga catatan atau laporan keuangan. Kami bantu cek daftar lengkapnya sesuai kondisi Anda." },
  { question: "Apakah menangani sengketa pajak?", answer: "Saat ini kami berfokus pada konsultasi, perhitungan, pelaporan, dan pembukuan. Kami belum melayani proses hukum atau sengketa pajak." },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
