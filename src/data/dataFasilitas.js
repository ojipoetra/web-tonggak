import rUgd from "../fasilitas/ugd.webp";
import rFarmasi from "../fasilitas/farmasi.webp";
import rRadiologi from "../fasilitas/radiologi.webp";
import rmusolah from "../fasilitas/musolah.jpeg";
import rlab from "../fasilitas/laboratorium.jpg";
const dataFasilitas = [
  {
    gambar: rUgd,
    id: "ugd",
    judul: "UGD",
    deskripsi: `Unit Gawat Darurat (UGD) yang beroprasi selama 24 Jam, dilengkapi
            dengan peralatan medis dan perlengkapan medis yang canggih dan
            lengkap serta tenaga medis yang tanggap dan cekatan sehingga dapat
            memberikan pertolongan - pertolongan pertama pada pasien gawat
            darurat dengan cepat. Selain itu, UGD juga didukung oleh sistem
            triase yang profesional, sehingga pasien dapat segera mendapatkan
            penanganan sesuai tingkat kegawatannya.`,
  },
  {
    gambar: rFarmasi,
    id: "farmasi",
    judul: "Pelayanan Farmasi",
    deskripsi: `Instalasi Farmasi Rumah Sakit merupakan fasilitas penyelenggaraan
            kefarmasian dibawah pimpinan seorang Apoteker yang handal. Untuk
            mengadakan, menyediakan obat-obatan yang lengkap dan berkualitas
            serta mengelola seluruh aspek penyediaan perbekalan kesehatan di
            Rumah Sakit. Instalasi RS Tonggak Husada beroprasi selama 24 jam,
            dapat memudahkan pasien mendapatkan obat-obatan dan alat kesehatan
            yang dibutuhkan.`,
  },
  {
    gambar: rRadiologi,
    id: "radiologi",
    judul: "Radiologi",
    deskripsi: `Radiologi merupakan instalasi penunjang medis yang memberikan
            layanan pemeriksaan untuk melihat bagian tubuh pasien dengan
            menggunakan "alat rogent". Hasil pemerikasaan radiologi berupa foto
            yang dapat diperoleh seketika untuk membantu dokter mendiagnosis
            penyakit pasien. Sehingga dokter bisa memberikan tindakan lebih
            cepat, tepat dan terbaik untuk kesembuhan pasien.`,
  },
  {
    gambar: rlab,
    id: "lab",
    judul: "Laboratorium",
    deskripsi: `Pelayanan Laboratorium salah satu penunjang medis di RS Tonggak Husada.
                Memiliki Laboratorium lengkap dengan didukung oleh tenaga yang handal, 
                hasil yang cepat, akurat dan siap melayani pasien 24 jam.`,
  },
  {
    gambar: "i",
    id: "ranap",
    judul: "Rawat Inap",
    deskripsi:
      "Layanan rawat inap dengan berbagai kelas sesuai kebutuhan pasien.",
    kategori: [
      {
        id: "vvip",
        judul: "Rawat Inap VVIP",
        deskripsi:
          "Kamar rawat inap VVIP dengan standar pelayanan tertinggi dan fasilitas premium.",
        gambar: "/img/ranap-vvip.jpg",
      },
      {
        id: "vip",
        judul: "Rawat Inap VIP",
        deskripsi:
          "Kamar rawat inap VIP dengan fasilitas eksklusif, kenyamanan lebih, dan pelayanan khusus.",
        gambar: "mm",
      },
      {
        id: "bangsal",
        judul: "Bangsal",
        deskripsi:
          "Kamar rawat inap bangsal untuk pasien dengan fasilitas dasar dan harga terjangkau.",
        gambar: "/img/ranap-bangsal.jpg",
      },
    ],
  },
  {
    gambar: rmusolah,
    id: "musolah",
    judul: "Musolah",
    deskripsi: "",
  },
  {
    gambar: "l",
    id: "parkir",
    judul: "Halaman Parkir",
    deskripsi: "",
  },
];
export default dataFasilitas;
