import jadwalDokters from "../data/jadwalDokter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css"; // CSS dasar Swiper
import "../assets/index.css";
import "swiper/css/autoplay"; // kalau pakai autoplay
import LayananSidebar from "../components/LayananSidebar";

const JawalDokter = () => {
  return (
    <div className="container p-9 pt-17 max-sm:m-0 max-sm:pt-12 max-sm:mb-10">
      <h2 className="text-4xl font-poppins max-sm:pl-3 max-sm:text-3xl font-semibold">
        <span className="text-amber-700">Jadwal Praktek</span>{" "}
        <span className="text-[#72bb36]">Dokter</span>
      </h2>
      <p className="font-poppins max-sm:pl-3">
        Yuk temukan jadwal dokter mu di sini
      </p>

      <div className="flex max-sm:flex-col gap-2">
        <div className="w-2/3 h- max-sm:w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
          >
            {jadwalDokters.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-2xl shadow flex justify-start max-sm:flex-col bg-gradient-to-r from-white to-green-100 max-sm:h-150">
                  <div className="w-1/3 max-sm:w-full max-sm:p-3">
                    <img src={item.gambar} alt={item.nama} />
                  </div>
                  <div className="pt-3 font-poppins w-2/3">
                    <h2 className="text-3xl font-bold max-sm:text-2xl text-center max-sm:text-left">
                      {item.nama}
                    </h2>
                    <h2 className="text-2xl text-center max-sm:text-left">
                      {item.spesilis}
                    </h2>
                    <hr className="text-slate-200" />
                    <div className="pl-13 max-sm:pl-0">
                      {item.hari1 && item.jam1 && (
                        <div>
                          <p className="text-amber-700">{item.hari1}</p>
                          <p className="text-[#72bb36]">{item.jam1}</p>
                        </div>
                      )}
                      {item.hari2 && item.jam2 && (
                        <div>
                          <p className="text-amber-700">{item.hari2}</p>
                          <p className="text-[#72bb36]">{item.jam2}</p>
                        </div>
                      )}
                      {item.hari3 && item.jam3 && (
                        <div>
                          <p className="text-amber-700">{item.hari3}</p>
                          <p className="text-[#72bb36]">{item.jam3}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center py-3"></div>
        </div>
        <div className="w-1/3 max-sm:w-full">
          <LayananSidebar />
        </div>
      </div>
    </div>
  );
};

export default JawalDokter;
