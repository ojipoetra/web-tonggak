import React from "react";
import bad from "../assets/hospital-bed.png";
import alldokter from "../dokter/group dokter sp.webp";
import drlala from "../dokter/dr.putri.webp";
import direktur from "../assets/dr.all.png";
import dataRuangan from "../data/ruanganRanap";
import asuransi from "../data/asuransi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css"; // CSS dasar Swiper
import "swiper/css/autoplay"; // kalau pakai autoplay

export const Beranda = () => {
  return (
    <div>
      <div className="overflow-hidden relative max-sm:mb-10">
        <section className="container p-8 mt-10">
          <h2 className="text-center text-3xl font-semibold font-poppins pb-6">
            Informasi Ruangan Rawat Inap
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {dataRuangan.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="relative flex gap-6 bg-gradient-to-r from-white to-green-100 shadow rounded-2xl p-5">
                  <img
                    src={bad}
                    alt="icon-bed"
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <p className="lg:text-2xl font-semibold text-amber-700">
                      {item.nama}
                    </p>
                    <p className="text-[17px]">
                      Terpakai : {item.terpakai} Bed
                    </p>
                    <p className="text-[17px]">Tersedia : {item.tersedia}</p>
                    <p className="text-gray-700 text-sm">
                      Update : {item.update}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="container px-8  w-full lg:flex max-sm:flex-col max-md:flex-col justify-center bg-white/70 backdrop-blur-md inset-shadow-2xs shadow-orange-50 rounded-2xl border-white">
          <div className="flex  lg:w-1/3 md:w-full max-sm:w-full ">
            <img src={drlala} alt="" />
          </div>

          <div className="borde lg:w-1/2  md:w-full max-sm:w-full pt-2">
            <h2 className="text-3xl font-semibold font-poppins line-judul-left">
              Sambutan
            </h2>
            <div className="font-poppins">
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
            </div>
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
            <div className="font-poppins">
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
            </div>
          </div>
          <div className="flex  lg:w-150 max-sm:w-80  md:w-100 md:justify-start">
            <img src={direktur} alt="" className="" />
          </div>
        </section>

        <section className="container px-8 w-full font-poppins">
          <div className="flex gap-5 justify-center max-sm:flex-col max-sm:order-2">
            <div className="w-1/3 max-sm:w-full max-sm:order-2">
              <img src={alldokter} alt="" />
            </div>
            <div className="w-1/2 max-sm:w-full max-sm:order-1 lg:hidden md:hidden">
              <h2 className="text-3xl pt-3 pb-5 font-semibold max-sm:order-1">
                Rumah Sakit dengan Tenaga Kesehatan dan
                <span className="font-semibold text-[#72bb36]"> Dokter </span>
                yang
                <span className="font-semibold text-amber-700"> Kompeten </span>
              </h2>
            </div>
            <div className="w-1/2 max-sm:w-full max-sm:order-3">
              <h2 className="text-3xl pt-3 pb-5 font-semibold max-sm:order-1 max-sm:hidden">
                Rumah Sakit dengan Tenaga Kesehatan dan
                <span className="font-semibold text-[#72bb36]"> Dokter </span>
                yang
                <span className="font-semibold text-amber-700"> Kompeten </span>
              </h2>
              <p className="pb-2 ">
                Kami hadir untuk memberikan pelayanan kesehatan yang lebih baik
                dengan tenaga kesehatan yang kompeten dalam bidangnya
              </p>
              <p>
                Rumah sakit kami berkomitmen memberikan pelayanan kesehatan yang
                berkualitas melalui dukungan tenaga kesehatan profesional dan
                dokter yang ahli di bidangnya. Dengan pengalaman serta
                kompetensi yang teruji, tim medis kami siap memberikan diagnosa
                yang akurat,{" "}
                <span className="italic font-semibold">
                  "pelayanan yang cepat, perawatan yang tepat,"
                </span>
                dan pendampingan yang menyeluruh bagi setiap pasien.
              </p>
            </div>
          </div>
        </section>

        <section className="container pb-3">
          <h2 className="text-center text-3xl font-semibold font-poppins pb-2.5 pt-10">
            Rekanan Asuransi
          </h2>

          <Swiper
            modules={[Grid, Autoplay]}
            spaceBetween={3}
            slidesPerView={2}
            grid={{
              rows: 2,
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 8 },
            }}
          >
            {asuransi.map((item, i) => (
              <SwiperSlide key={i} className="!m-0 !p-0">
                <div className="flex bg-blue-50 shadow-md aspect-video h-18 rounded-lg group cursor-pointer items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.nama}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <div className="container w-full rounded-2xl">
          <h5 className="text-center text-3xl font-semibold font-poppins pb-2.5">
            Company Profile
          </h5>
          <div className="">
            <iframe
              className="aspect-video px-8"
              src="https://www.youtube.com/embed/GROSKVsqzoQ"
              title="rstonggakhusada"
              // frameBorder=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
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
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        {/* <div class="absolute top-200 -z-40 inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:24px_24px]"></div> */}
        {/* <!-- Gradient blur --> */}
        <div className="absolute -z-40 top-60 left-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-400 via-purple-400 to-pink-400 rounded-full blur-[120px] opacity-30 -translate-x-1/2"></div>
      </div>
    </div>
  );
};
