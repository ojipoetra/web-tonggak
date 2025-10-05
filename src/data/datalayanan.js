import gpolianak from "../layanan/poliklinik-anak.webp";
import gpolibedah from "../layanan/poli-bedah.jpeg";
import ggigi from "../layanan/poli-gigi.jpg";
import gdalam from "../layanan/poliklinik-penyakit-dalam.jpg";
import gumum from "../layanan/poliklinik-umum.jpg";
import gkandungan from "../layanan/kebidanan-kandungan.jpeg";
const dataLayanan = [
  {
    id: "polianak",
    gambar: gpolianak,
    judul: "Poliklinik Anak",
    deskripsi: `Menjaga Kesehatan Anak adalah Prioritas utama Kami, oleh karena itu RS Tonggak Husada
                 memiliki Dokter Spesialis Anak yang berpengalaman, Profesional dan Ramah terhadap Anak. 
                 Ruang Poliklinik Anak yang di Design Khusus untuk kenyamanan Pasien Anak, 
                 Tempat Bermain pada Ruang Tunggu Poliklinik.`,
  },
  {
    id: "polibedah",
    gambar: gpolibedah,
    judul: "Poliklinik Bedah Umum",
    deskripsi: `Poliklinik Bedah Umum memberikan pelayanan kesehatan rawat jalan 
                untuk pelayanan kesehatan dalam proses pembedahan umum. 
                Pelayanan yang ditangi di Poliklinik Bedah Umum adalah Operasi Kecil, 
                Perawatan luka biasa/luka oleh karena DM, Perawatan luka post Operasi Hernia, 
                Usus Buntu, Haemoroid (wasir), Konsultasi seputar proses pembedahan, 
                dan lain-lain. Saat ini kami didukung oleh dokter-dokter spesialis bedah umum 
                yang berpengalaman dibidangnya, serta ditunjang peralatan medis yang lengkap 
                dan memadai untuk memberikan pelayanan bagi anda dan keluarga lebih optimal.`,
  },
  {
    id: "poligigi",
    gambar: ggigi,
    judul: "Poliklinik Gigi",
    deskripsi: `Poliklinik Gigi merupakan salah satu jenis pelayanan di RS Tonggak Husada 
                yang memberikan pelayanan kesehatan gigi dan mulut berupa pemeriksaan 
                kesehatan gigi dan mulut, pengobatan dan pemberian tindakan medis dasar 
                kesehatan gigi dan mulut, seperti penambalan gigi, pencabutan gigi, 
                pembersihan karang gigi dan berbagai tindakan gigi lainya.`,
  },
  {
    id: "polikandungan",
    gambar: gkandungan,
    judul: "Poliklinik Kandungan & Kebidanan",
    deskripsi: `RS Tonggak Husada memiliki Poliklinik Kebidanan dan Kandungan yang 
                melayani pemeriksaan kehamilan, penyakit kandungan dan persalinan. 
                Sarana penunjang yang juga kami sediakan untuk mendukung Poliklinik Kebidanan 
                ini adalah Fasilitas USG 4D untuk mengetahui perkembangan janin pada saat si 
                ibu hamil. RS Tonggak husada mempunyai tenaga perawat dan bidan yang terlatih 
                serta dokter ahli spesialis kandungan dan kebidanan, untuk membantu para ibu 
                yang ingin konsultasi seputar masalah kandungan dan kebidanan.`,
  },
  {
    id: "polidalam",
    gambar: gdalam,
    judul: "Poliklinik Penyakit Dalam",
    deskripsi: `Poliklinik Penyakit Dalam (Internist) merupakan salah satu unit layanan utama 
                di Rumah Sakit Tonggak Husada. Poliklinik penyakit dalam ini memberikan 
                pelayanan penanganan masalah kesehatan organ dalam tanpa bedah, 
                seperti diabetes melitus (kencing manis), sakit ginjal, sakit lambung, 
                penyakit hati, dll Ditangani oleh Dokter ahli penyakit dalam yang profesional 
                dan berpengalaman dibidangnya serta ditunjang dengan fasilitas yang 
                memadai sesuai dengan kebutuhan pasien, keluhan pasien mengenai penyakit 
                dalam dapat ditangani dengan baik.`,
  },
  {
    id: "poliumum",
    gambar: gumum,
    judul: "Poliklinik Umum",
    deskripsi: `RS Tonggak Husada memiliki Poli Dokter Umum dengan pelayanan setiap hari. 
                Ditunjang oleh Dokter yang Ramah, Profesional dalam menangani pasien.`,
  },
];

export default dataLayanan;
