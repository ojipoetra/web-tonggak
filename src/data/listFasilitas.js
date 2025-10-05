import ianak from "../assets/icon-anak_imresizer.png";
import ibedah from "../assets/icon-bedah_imresizer.png";
import igigi from "../assets/icon-gigi_imresizer.png";
import iwoman from "../assets/icon_woman.png";
import ixray from "../assets/icon-xray.png";
import iumum from "../assets/icon-dokter.png";
const listFasilitas = [
  {
    id: "ugd",
    gambar: ianak,
    fasilitas: "UGD",
  },
  {
    id: "farmasi",
    gambar: ibedah,
    fasilitas: "Farmasi",
  },
  {
    id: "radiologi",
    gambar: igigi,
    fasilitas: "Radiologi",
  },
  {
    id: "lab",
    gambar: iwoman,
    fasilitas: "Laboratorium",
  },
  {
    id: "ranap",
    gambar: ixray,
    fasilitas: "Rawat Inap",
  },
  {
    id: "musolah",
    gambar: iumum,
    fasilitas: "Musolah",
  },
  {
    id: "parkir",
    gambar: iumum,
    fasilitas: "Halaman Parkir",
  },
];
export default listFasilitas;
