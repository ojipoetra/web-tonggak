import { useState } from "react";
import useScrollPosition from "../assets/CustomHooks";
import logo from "../assets/logo.png";
import bad from "../assets/hospital-bed.png";
import drlala from "../assets/dr.putri.png";
import direktur from "../assets/dr.all.png";

import ass1 from "../asuransi/002.png";
import ass2 from "../asuransi/003.png";
import ass3 from "../asuransi/004.png";
import ass4 from "../asuransi/005.png";
import ass5 from "../asuransi/006.png";
import ass6 from "../asuransi/007.png";
import ass7 from "../asuransi/008.png";
import ass8 from "../asuransi/010.png";
import ass9 from "../asuransi/011.png";

const Navbar = () => {
  const scrollY = useScrollPosition();
  const isFixed = scrollY > 50;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header
        className={`fixed top-0 left-0 z-10 flex w-full items-center bg-transparent ${
          isFixed ? "navbar-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="relative flex items-center justify-between px-6">
            <div className="px-4">
              <a href="">
                <img src={logo} alt="" className="block py-1.5 w-[70px]" />
              </a>
            </div>
            <div className="flex items-center px-4">
              <nav
                id="nav-menu"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
              >
                <ul className="flex justify-around gap-10">
                  <li>
                    <a href="">Beranda</a>
                  </li>
                  <li>
                    <button popoverTarget="dropdown-menu">Layanan</button>
                    <div
                      popover="auto"
                      id="dropdown-menu"
                      className={`fixed bg-[url${logo}] text left-210 top-15 mt-2 w-48  backdrop-blur rounded-lg shadow-lg
                   transition-discrete starting:open:opacity-0 open:opacity-100`}
                    >
                      <ul className="py-2 ">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Poliklinik Anak
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Poliklinik Kandungan
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-red-500 hover:bg-red-100"
                          >
                            Poliklinik Bedah
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Poliklinik Dalam
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Poliklinik Umum
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <a href="">Fasilitas</a>
                  </li>
                  <li>
                    <a href="">Jadwal Dokter</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="overflow-hidden relative">
        <section className="container p-8 mt-10">
          <h2 className="text-center text-3xl font-semibold font-poppins pb-1.5">
            Informasi Ruangan Rawat Inap
          </h2>

          <div className="flex flex-wrap justify-center gap-2 xl:grid-cols-3 md:grid-cols-2">
            <div className="flex gap-10 bg-linear-65 shadow from-white to-green-tgh/20 rounded-2xl p-5 sm:w-30 lg:w-90 md:w-80 ">
              <img
                src={bad}
                alt=""
                className="max-sm:w-20 max-sm:h-20 lg:w-20"
              />
              <div>
                <p className="text-center lg:text-2xl font-semibold text-amber-700 max-sm:text-[20px]">
                  Kamar Dandalion
                </p>
                <p className="max-sm:text-[17px]">Terpakai : 4 Bed</p>
                <p className="max-sm:text-[17px]">Tersedia : 2</p>
                <p className="text-gray-700 text-sm">
                  Update : 2025/08/25 09:40
                </p>
              </div>
            </div>
            <div className="flex gap-10 bg-linear-65 shadow from-white to-green-tgh/20 rounded-2xl p-5 sm:w-30 lg:w-90 md:w-80 ">
              <img
                src={bad}
                alt=""
                className="max-sm:w-20 max-sm:h-20 lg:w-20"
              />
              <div>
                <p className="text-center lg:text-2xl font-semibold text-amber-700 max-sm:text-[20px]">
                  Kamar Dandalion
                </p>
                <p className="max-sm:text-[17px]">Terpakai : 4 Bed</p>
                <p className="max-sm:text-[17px]">Tersedia : 2</p>
                <p className="text-gray-700 text-sm">
                  Update : 2025/08/25 09:40
                </p>
              </div>
            </div>
            <div className="flex gap-10 bg-linear-65 shadow from-white to-green-tgh/20 rounded-2xl p-5 sm:w-30 lg:w-90 md:w-80 ">
              <img
                src={bad}
                alt=""
                className="max-sm:w-20 max-sm:h-20 lg:w-20"
              />
              <div>
                <p className="text-center lg:text-2xl font-semibold text-amber-700 max-sm:text-[20px]">
                  Kamar Dandalion
                </p>
                <p className="max-sm:text-[17px]">Terpakai : 4 Bed</p>
                <p className="max-sm:text-[17px]">Tersedia : 2</p>
                <p className="text-gray-700 text-sm">
                  Update : 2025/08/25 09:40
                </p>
              </div>
            </div>
            <div className="flex gap-10 bg-linear-65 shadow from-white to-green-tgh/20 rounded-2xl p-5 sm:w-30 lg:w-90 md:w-80 ">
              <img
                src={bad}
                alt=""
                className="max-sm:w-20 max-sm:h-20 lg:w-20"
              />
              <div>
                <p className="text-center lg:text-2xl font-semibold text-amber-700 max-sm:text-[20px]">
                  Kamar Dandalion
                </p>
                <p className="max-sm:text-[17px]">Terpakai : 4 Bed</p>
                <p className="max-sm:text-[17px]">Tersedia : 2</p>
                <p className="text-gray-700 text-sm">
                  Update : 2025/08/25 09:40
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-8 grid grid-cols-2 max-sm:grid-cols-1 justify-center bg-white/70 backdrop-blur-md inset-shadow-2xs shadow-orange-50 rounded-2xl border-white">
          <div className="flex  lg:w-150 max-sm:w-80  md:w-100 md:justify-start">
            <img src={drlala} alt="" />
          </div>

          <div className="borde lg:w-150 max-sm:w-80 md:w-100">
            <h2 className="text-3xl font-semibold font-poppins line-judul-left">
              Sambutan
            </h2>
            <p className="font-poppins">
              <b>
                <i>RS Tonggak Husada</i>
              </b>
              , Lahir dari Komitmen akan kesehatan seluruh Masyarakat Indonesia
              khusus nya Kabupaten Serang dan sekitar,
              <p className="pt-5">
                Rumah Sakit Kami dilengkapi dengan Tenaga Medis yang handal dan
                Profesional serta terus mengembangkan seluruh aspek Layanan
                Kesehatan dan Mengedepankan kualitas, Menjunjung tinggi
                Profesionalisme, Kompetensi, dan Keselamatan, serta memberikan
                Pelayanan yang melebihi kepuasan pelanggan.
              </p>
              <p className="pt-5">
                <i>
                  <b>"Kesembuhan Anda Prioritas Kami"</b>
                </i>
              </p>
            </p>
            <blockquote>
              <footer className="text-slate-500">
                <b>-dr. Putri Larosa</b>
                <cite title="Source Title"> Direktur RS Tonggak Husada</cite>
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="container px-8 grid grid-cols-2 max-sm:grid-cols-1  md:w-full justify-center bg-blue-50 inset-shadow-2xs]">
          <div className="borde lg:w-150 max-sm:w-80 md:w-100">
            <h2 className="text-3xl font-semibold font-poppins line-judul-left">
              Latar Belakang
            </h2>
            <p className="font-poppins">
              <p className="">
                Berawal dari Klinik yang terletak dijalan Bojonegara Kp. Tonggak
                Ds. Kertasana, Serang-Banten, bernama Klinik Bedah Tonggak
                Husada, dirintis sejak{" "}
                <b>
                  <i>Tahun 2014</i> oleh dr. Supriyono,Sp.B
                </b>
              </p>
              <p>
                <span className="font-semibold text-amber-700">Visi </span>
                Menjadi Rumah Sakit Yang Unggul Dalam Pelayanan Bedah.
              </p>
              <p>
                <span className="font-semibold text-amber-700">Misi </span>
                Memberikan Pelayanan Kesehatan Cepat, Tepat, Dan Profesiona.
              </p>
              <p>
                <span className="font-semibold text-amber-700">Budaya </span>
                Jujur, Ramah, Sopan, Dan Bersahabat Semangat, Antusias Dan
                Peduli Tertib, Rapi Dan Resik.
              </p>
            </p>
          </div>
          <div className="flex  lg:w-150 max-sm:w-80  md:w-100 md:justify-start">
            <img src={direktur} alt="" className="" />
          </div>
        </section>

        <section className="container pb-3">
          <h2 className="text-center text-3xl font-semibold font-poppins pb-2.5">
            Rekanan Asuransi
          </h2>
          <div className="flex flex-wrap justify-center items-center grid-cols-3 w-full gap-2">
            <div className="flex bg-blue-50 shadow-md aspect-video h-18 rounded-lg group cursor-pointer">
              <img
                src={ass6}
                alt=""
                className="items-center group-hover:scale-115 transition-all duration-500"
              />
            </div>
            <div className="flex bg-blue-50 shadow-md aspect-video h-18 rounded-lg group cursor-pointer">
              <img
                src={ass1}
                alt=""
                className="items-center group-hover:scale-115 transition-all duration-500"
              />
            </div>
            <div className="flex bg-blue-50 shadow-md aspect-video h-18 rounded-lg group cursor-pointer">
              <img
                src={ass2}
                alt=""
                className="items-center  group-hover:scale-115 transition-all duration-500"
              />
            </div>
            <div className="flex bg-blue-50 shadow-md aspect-video h-18 rounded-lg group cursor-pointer">
              <img
                src={ass3}
                alt=""
                className="items-center group-hover:scale-115 transition-all duration-500"
              />
            </div>
            <div className="flex bg-blue-50 shadow-md aspect-video h-18 rounded-lg group cursor-pointer">
              <img
                src={ass4}
                alt=""
                className="items-center group-hover:scale-115 transition-all duration-500"
              />
            </div>
            <div className="flex bg-blue-50 shadow-md aspect-video h-18 rounded-lg group cursor-pointer">
              <img
                src={ass5}
                alt=""
                className="items-center group-hover:scale-115 transition-all duration-500"
              />
            </div>

            <div className="flex bg-blue-50 shadow-md aspect-video h-18 rounded-lg group cursor-pointer">
              <img
                src={ass6}
                alt=""
                className="items-center group-hover:scale-115 transition-all duration-500"
              />
            </div>
            <div className="flex bg-blue-50 shadow-md aspect-video h-18 rounded-lg group cursor-pointer">
              <img
                src={ass7}
                alt=""
                className="items-center group-hover:scale-115 transition-all duration-500"
              />
            </div>
            <div className="flex bg-blue-50 shadow-md aspect-video h-18 rounded-lg group cursor-pointer">
              <img
                src={ass8}
                alt=""
                className="items-center group-hover:scale-115 transition-all duration-500"
              />
            </div>
            <div className="flex bg-blue-50 shadow-md aspect-video h-18 rounded-lg group cursor-pointer">
              <img
                src={ass9}
                alt=""
                className="items-center group-hover:scale-115 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        <div className="container w-full bg-amber-300/70 backdrop-blur-sm dark:bg-black">
          <h1>menu</h1>
        </div>

        <div className="container w-full rounded-2xl">
          <h5 className="text-center text-3xl font-semibold font-poppins pb-2.5">
            Company Profile
          </h5>
          <div className="">
            <iframe
              className="aspect-video px-8"
              src="https://www.youtube.com/embed/GROSKVsqzoQ"
              title="rstonggakhusada"
              frameborder=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <section className="pb-6">
          <h3 className="text-center text-3xl font-semibold font-poppins pb-2.5">
            Peta Lokasi
          </h3>
          <iframe
            className="aspect-video h-50 lg:h-100 px-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.9909174078557!2d106.0741623140418!3d-5.995981660578327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41926737e57b97%3A0x23cc36d9f5a703de!2sRS%20Tonggak%20Husada!5e0!3m2!1sid!2sid!4v1669108870195!5m2!1sid!2sid"
            width="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        {/* <div class="absolute top-200 -z-40 inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:24px_24px]"></div> */}
        {/* <!-- Gradient blur --> */}
        <div class="absolute -z-40 top-60 left-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-400 via-purple-400 to-pink-400 rounded-full blur-[120px] opacity-30 -translate-x-1/2"></div>
      </div>
    </div>
  );
};
export default Navbar;
