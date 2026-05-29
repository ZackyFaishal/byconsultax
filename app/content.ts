export const companyName = "byConsultax";
export const logoPath = "/logo-byconsultax-transparent.png";

export const whatsappNumber = "6285703264750";
export const whatsappMessage =
  "Halo Admin byConsultax, saya ingin konsultasi mengenai layanan pajak.";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const highlights = [
  ["UMKM", "Pendampingan pajak untuk pemilik usaha, freelancer, dan badan usaha"],
  ["SPT", "Bantuan pelaporan SPT Tahunan, SPT Masa, PPh, dan PPN"],
  ["Rapi", "Pembukuan, arsip dokumen, dan tax calendar dibuat lebih tertib"],
];

export const values = [
  {
    title: "Friendly",
    copy: "Pajak dijelaskan dengan bahasa yang mudah dipahami, bukan istilah teknis yang bikin bingung.",
  },
  {
    title: "Practical",
    copy: "Setiap saran dibuat sesuai kondisi usaha, kapasitas administrasi, dan kebutuhan harian klien.",
  },
  {
    title: "Compliant",
    copy: "Fokus pada kepatuhan administratif, pelaporan, pembukuan, dan perencanaan pajak yang wajar.",
  },
];

export const services = [
  {
    slug: "konsultasi-pajak",
    title: "Konsultasi Pajak",
    headline: "Teman diskusi untuk memahami kewajiban pajak tanpa panik.",
    copy: "Layanan konsultasi untuk membantu wajib pajak pribadi, freelancer, UMKM, CV, dan PT memahami kewajiban pajak, memilih langkah administrasi, serta membaca dampak pajak dari keputusan bisnis.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    points: ["Review kondisi pajak", "Arahan kewajiban pajak", "Diskusi transaksi", "Rekomendasi tindak lanjut"],
    deliverables: [
      "Ringkasan kondisi pajak awal",
      "Daftar kewajiban yang perlu dipenuhi",
      "Catatan risiko administrasi yang perlu dirapikan",
      "Rekomendasi langkah praktis berikutnya",
    ],
    process: [
      "Klien menceritakan kondisi usaha, jenis penghasilan, dan masalah pajak yang dialami.",
      "Tim byConsultax memetakan kewajiban, dokumen, dan tenggat yang relevan.",
      "Klien mendapat penjelasan opsi tindakan yang realistis untuk dijalankan.",
      "Jika diperlukan, konsultasi dapat dilanjutkan menjadi pendampingan bulanan.",
    ],
    suitableFor: [
      "Pemilik usaha yang baru mulai mengurus pajak",
      "Freelancer atau profesional yang bingung melaporkan penghasilan",
      "Perusahaan yang ingin second opinion administrasi pajak",
    ],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    headline: "Rencana pajak yang wajar, efisien, dan sesuai kondisi usaha.",
    copy: "Layanan perencanaan pajak untuk membantu bisnis memahami konsekuensi pajak dari omzet, biaya, kontrak, bentuk usaha, status PKP, payroll, dan struktur transaksi rutin.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    points: ["Pemetaan transaksi", "Simulasi pajak", "Review biaya", "Strategi kepatuhan"],
    deliverables: [
      "Peta penghasilan, biaya, dan kewajiban pajak",
      "Simulasi dampak PPh dan PPN",
      "Rekomendasi dokumentasi transaksi",
      "Tax calendar untuk periode berjalan",
    ],
    process: [
      "Mengumpulkan data omzet, biaya, invoice, kontrak, payroll, dan status usaha.",
      "Membaca pola transaksi yang paling sering memunculkan pajak.",
      "Menyusun simulasi dan rekomendasi kepatuhan yang aman.",
      "Menyiapkan daftar action items untuk finance atau pemilik usaha.",
    ],
    suitableFor: [
      "UMKM yang sedang naik kelas",
      "Bisnis yang akan menjadi PKP",
      "Perusahaan yang ingin merapikan pajak sebelum akhir tahun",
    ],
  },
  {
    slug: "pelaporan-spt-tahunan",
    title: "Pelaporan SPT Tahunan",
    headline: "SPT Tahunan pribadi dan badan disiapkan lebih rapi.",
    copy: "Layanan untuk membantu penyusunan dan pelaporan SPT Tahunan orang pribadi maupun badan, termasuk review data penghasilan, bukti potong, laporan keuangan, harta, utang, dan dokumen pendukung.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    points: ["SPT Orang Pribadi", "SPT Badan", "Bukti potong", "Review harta dan utang"],
    deliverables: [
      "Checklist dokumen SPT Tahunan",
      "Rekap penghasilan dan bukti potong",
      "Draft SPT untuk direview klien",
      "Ringkasan hasil pelaporan dan arsip bukti lapor",
    ],
    process: [
      "Klien mengirim data penghasilan, bukti potong, harta, utang, dan laporan keuangan.",
      "Tim melakukan pengecekan kelengkapan serta konsistensi data.",
      "Draft SPT disiapkan dan dikonfirmasi kepada klien.",
      "SPT dilaporkan setelah data final disetujui.",
    ],
    suitableFor: [
      "Karyawan dengan penghasilan tambahan",
      "Freelancer dan profesional",
      "CV atau PT yang membutuhkan bantuan SPT Tahunan Badan",
    ],
  },
  {
    slug: "pendampingan-pajak-bulanan",
    title: "Pendampingan Pajak Bulanan",
    headline: "Kewajiban pajak bulanan dijaga agar tidak menumpuk.",
    copy: "Layanan pendampingan bulanan untuk SPT Masa, PPh 21, PPh 23, PPh Final, PPN, bukti potong, e-Faktur, rekonsiliasi pajak, dan pengingat tenggat.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    points: ["SPT Masa", "Bukti potong", "PPN dan e-Faktur", "Tax reminder"],
    deliverables: [
      "Tax calendar bulanan",
      "Rekap transaksi yang memiliki dampak pajak",
      "Perhitungan pajak masa",
      "Arsip pembayaran dan pelaporan",
    ],
    process: [
      "Setiap bulan klien mengirim invoice, payroll, bukti transaksi, dan dokumen pendukung.",
      "Tim menghitung kewajiban PPh atau PPN sesuai transaksi.",
      "Draft pelaporan dikirim untuk dikonfirmasi.",
      "Bukti bayar dan bukti lapor diarsipkan agar mudah ditelusuri.",
    ],
    suitableFor: [
      "Bisnis yang mulai rutin menerbitkan invoice",
      "Perusahaan yang memiliki karyawan dan vendor",
      "PKP yang perlu e-Faktur dan SPT Masa PPN",
    ],
  },
  {
    slug: "pembukuan-laporan-keuangan",
    title: "Pembukuan & Laporan Keuangan",
    headline: "Data keuangan dirapikan agar pajak lebih mudah dihitung.",
    copy: "Layanan pembukuan untuk membantu usaha mencatat transaksi, menyusun laporan laba rugi, neraca, rekonsiliasi bank, dan dokumen pendukung pajak.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    points: ["Bookkeeping", "Laporan keuangan", "Rekonsiliasi bank", "Arsip transaksi"],
    deliverables: [
      "Jurnal transaksi dan buku besar",
      "Laporan laba rugi dan neraca",
      "Rekonsiliasi kas, bank, piutang, dan utang",
      "Daftar dokumen yang perlu dilengkapi",
    ],
    process: [
      "Klien mengirim rekening koran, invoice, nota biaya, dan data penjualan.",
      "Transaksi diklasifikasikan ke akun yang sesuai.",
      "Laporan keuangan disusun dan direview berkala.",
      "Data pembukuan dipakai sebagai dasar pelaporan pajak.",
    ],
    suitableFor: [
      "UMKM yang belum punya pembukuan rapi",
      "Bisnis online dengan transaksi harian",
      "Perusahaan yang butuh laporan untuk SPT Badan",
    ],
  },
  {
    slug: "pajak-umkm-pribadi",
    title: "Pajak UMKM & Orang Pribadi",
    headline: "Pendampingan pajak untuk usaha kecil, freelancer, dan profesional.",
    copy: "Layanan khusus untuk wajib pajak orang pribadi, pemilik UMKM, pekerja lepas, content creator, dokter, konsultan, dan profesional lain yang membutuhkan panduan pajak praktis.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    points: ["Pajak UMKM", "Freelancer", "Profesional", "Harta dan penghasilan"],
    deliverables: [
      "Pemetaan jenis penghasilan",
      "Perhitungan pajak sesuai skema yang relevan",
      "Checklist dokumen dan bukti pendukung",
      "Arahan pelaporan SPT Tahunan orang pribadi",
    ],
    process: [
      "Mengidentifikasi sumber penghasilan dan bentuk kegiatan usaha.",
      "Mengecek status NPWP, NIK, dan riwayat pelaporan.",
      "Menghitung kewajiban pajak dan kebutuhan pembukuan sederhana.",
      "Mendampingi pelaporan serta arsip dokumen.",
    ],
    suitableFor: [
      "Pemilik toko, jasa, dan bisnis online",
      "Freelancer dengan banyak klien",
      "Profesional yang ingin pajaknya lebih tertib",
    ],
  },
  {
    slug: "ppn-efaktur-pkp",
    title: "PPN, e-Faktur & PKP",
    headline: "Pendampingan administrasi PKP, PPN, dan e-Faktur.",
    copy: "Layanan untuk membantu bisnis memahami kewajiban PKP, menerbitkan faktur pajak, merekap pajak keluaran dan masukan, serta menyiapkan SPT Masa PPN.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    points: ["Status PKP", "e-Faktur", "PPN Masukan", "SPT Masa PPN"],
    deliverables: [
      "Review kesiapan PKP",
      "Rekap PPN keluaran dan masukan",
      "Checklist faktur pajak",
      "Draft SPT Masa PPN",
    ],
    process: [
      "Mengecek omzet, transaksi, dan kebutuhan status PKP.",
      "Mereview invoice, faktur pajak, dan dokumen transaksi.",
      "Menyusun rekap PPN dan data e-Faktur.",
      "Menyiapkan draft pelaporan PPN bulanan.",
    ],
    suitableFor: [
      "Bisnis yang omzetnya mulai besar",
      "PKP baru yang perlu pendampingan e-Faktur",
      "Perusahaan yang ingin mengurangi kesalahan faktur pajak",
    ],
  },
  {
    slug: "payroll-pph-21",
    title: "Payroll & PPh 21",
    headline: "Perhitungan payroll dan PPh 21 yang lebih tertib.",
    copy: "Layanan untuk membantu menghitung gaji, tunjangan, BPJS, PPh 21, bukti potong, dan kebutuhan administrasi payroll yang berkaitan dengan pajak karyawan.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    points: ["Payroll bulanan", "PPh 21", "Bukti potong", "Rekap karyawan"],
    deliverables: [
      "Rekap gaji dan tunjangan",
      "Perhitungan PPh 21 bulanan",
      "Draft bukti potong",
      "Laporan payroll untuk arsip perusahaan",
    ],
    process: [
      "Mengumpulkan data karyawan, gaji, tunjangan, BPJS, dan status pajak.",
      "Menghitung payroll dan PPh 21 sesuai data yang diberikan.",
      "Menyiapkan rekap untuk pembayaran dan pelaporan.",
      "Mengarsipkan bukti potong dan dokumen pendukung.",
    ],
    suitableFor: [
      "Perusahaan dengan karyawan tetap atau kontrak",
      "Bisnis yang mulai membangun sistem payroll",
      "Pemilik usaha yang ingin PPh 21 karyawan lebih rapi",
    ],
  },
];

export const experts = [
  ["Alya Prameswari", "Tax Consultant", "SPT Tahunan, UMKM, orang pribadi"],
  ["Rafi Mahendra", "Tax Compliance", "SPT Masa, PPh, PPN, tax calendar"],
  ["Nabila Putri", "Accounting Support", "Pembukuan, laporan keuangan, rekonsiliasi"],
  ["Dimas Arya", "Business Tax Advisor", "Tax planning, PKP, payroll"],
];

export const insights = [
  {
    category: "SPT Tahunan",
    title: "Dokumen yang perlu disiapkan sebelum lapor SPT Tahunan",
    date: "30 May 2026",
  },
  {
    category: "UMKM",
    title: "Kapan pemilik usaha perlu mulai membuat pembukuan rapi?",
    date: "22 May 2026",
  },
  {
    category: "PPN",
    title: "Hal yang perlu diperhatikan sebelum mengurus status PKP",
    date: "12 May 2026",
  },
  {
    category: "Payroll",
    title: "Checklist PPh 21 untuk bisnis yang mulai punya karyawan",
    date: "05 May 2026",
  },
];

export const professionalImages = [
  {
    title: "Konsultasi privat",
    copy: "Diskusi pajak dengan pendekatan personal dan mudah dipahami.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Review dokumen pajak",
    copy: "Invoice, bukti potong, rekening koran, dan arsip pelaporan ditata rapi.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pembukuan bisnis",
    copy: "Laporan keuangan dan transaksi usaha menjadi dasar pajak yang kuat.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const clientSegments = [
  {
    title: "UMKM & Online Business",
    copy: "Untuk bisnis yang mulai butuh pembukuan, SPT, PPh Final, dan arahan pajak rutin.",
    tags: ["Toko online", "Jasa", "F&B", "Retail"],
  },
  {
    title: "Freelancer & Profesional",
    copy: "Untuk pekerja lepas, konsultan, kreator, dokter, dan profesional dengan banyak sumber penghasilan.",
    tags: ["SPT OP", "Bukti potong", "Harta", "Penghasilan"],
  },
  {
    title: "CV, PT & Startup",
    copy: "Untuk badan usaha yang perlu compliance bulanan, payroll, PPN, PKP, dan laporan keuangan.",
    tags: ["SPT Badan", "PPh 21", "PPN", "Bookkeeping"],
  },
  {
    title: "PKP & Finance Team",
    copy: "Untuk tim yang ingin e-Faktur, PPN, bukti potong, dan arsip pajak lebih rapi.",
    tags: ["e-Faktur", "e-Bupot", "Tax calendar", "Rekonsiliasi"],
  },
];

export const packages = [
  {
    name: "Tax Checkup",
    label: "Konsultasi awal",
    copy: "Cocok untuk cek kondisi pajak, memahami kewajiban, dan menentukan langkah perapihan.",
    includes: ["Review profil pajak", "Checklist kewajiban", "Arahan dokumen", "Ringkasan action items"],
  },
  {
    name: "Monthly Tax Friend",
    label: "Pendampingan bulanan",
    copy: "Cocok untuk bisnis yang ingin SPT Masa, PPh, PPN, dan arsip pelaporan tidak menumpuk.",
    includes: ["Tax calendar", "Hitung PPh/PPN", "Draft pelaporan", "Arsip bukti bayar/lapor"],
  },
  {
    name: "Annual SPT Care",
    label: "SPT Tahunan",
    copy: "Cocok untuk orang pribadi dan badan usaha yang ingin SPT Tahunan disiapkan rapi.",
    includes: ["Checklist SPT", "Review bukti potong", "Draft SPT", "Bukti lapor"],
  },
  {
    name: "Finance Clean-Up",
    label: "Pembukuan",
    copy: "Cocok untuk usaha yang perlu merapikan transaksi sebelum pajak dihitung dan dilaporkan.",
    includes: ["Bookkeeping", "Rekonsiliasi bank", "Laporan keuangan", "Daftar dokumen kurang"],
  },
];

export const workflowSteps = [
  ["Briefing awal", "Kami memahami jenis usaha, transaksi, status pajak, dan kendala yang sedang dihadapi."],
  ["Cek dokumen", "Invoice, bukti potong, rekening koran, laporan keuangan, dan data payroll diperiksa."],
  ["Hitung & susun", "Kewajiban pajak dihitung, draft laporan disiapkan, dan risiko administrasi dicatat."],
  ["Review bersama", "Draft dijelaskan kepada klien supaya angka dan dokumen bisa dikonfirmasi."],
  ["Lapor & arsip", "Setelah disetujui, pelaporan dan arsip bukti bayar/lapor ditata untuk periode berikutnya."],
];

export const taxElements = [
  "NPWP/NIK",
  "DJP Online",
  "EFIN",
  "e-Bupot",
  "e-Faktur",
  "SPT Tahunan",
  "SPT Masa",
  "PPh 21",
  "PPh 23",
  "PPh Final",
  "PPN",
  "Bukti Potong",
];

export const testimonials = [
  {
    quote:
      "Pajak bisnis jadi lebih mudah dipahami karena dijelaskan dengan bahasa yang praktis dan tidak menakutkan.",
    name: "Pemilik usaha jasa",
  },
  {
    quote:
      "Dokumen SPT dan bukti potong jadi lebih rapi. Kami juga tahu dokumen apa yang perlu disiapkan tiap bulan.",
    name: "Finance UMKM",
  },
  {
    quote:
      "Sangat membantu untuk memahami PPN, e-Faktur, dan kewajiban saat bisnis mulai berkembang.",
    name: "Founder bisnis online",
  },
];

export const faqs = [
  {
    question: "Apakah byConsultax melayani orang pribadi?",
    answer:
      "Ya. byConsultax membantu wajib pajak orang pribadi, freelancer, profesional, pemilik usaha, CV, dan PT.",
  },
  {
    question: "Apakah bisa konsultasi dulu sebelum ambil paket bulanan?",
    answer:
      "Bisa. Konsultasi awal digunakan untuk memahami kondisi pajak, dokumen yang tersedia, dan layanan yang paling sesuai.",
  },
  {
    question: "Dokumen apa yang perlu disiapkan untuk SPT Tahunan?",
    answer:
      "Umumnya bukti potong, data penghasilan, daftar harta dan utang, laporan keuangan jika ada usaha, serta riwayat pelaporan sebelumnya.",
  },
  {
    question: "Apakah layanan mencakup proses hukum pajak?",
    answer:
      "Tidak. Fokus byConsultax adalah konsultasi, perencanaan, pelaporan, pendampingan administrasi bulanan, pembukuan, PPN, PKP, payroll, dan PPh 21.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
