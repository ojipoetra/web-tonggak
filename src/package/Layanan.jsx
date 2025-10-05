import LayananSidebar from "../components/LayananSidebar";
import dataLayanan from "../data/datalayanan";
import "../index.css";

const Layanan = () => {
  return (
    <div className="container p-9 pt-13 md:pt-17 lg:pt-17 font-poppins max-sm:mb-10">
      <div className="flex max-sm:flex-col gap-2.5">
        <div className="w-2/3 h- max-sm:w-full bg-blue-50 p-4">
          {dataLayanan.map((item, i) => (
            <div key={i}>
              <h2
                className="text-3xl font-semibold text-amber-700 scroll-mt-20"
                id={item.id}
              >
                {item.judul}
              </h2>
              <img
                src={item.gambar}
                alt=""
                className="rounded object-cover w-full h-70"
              />
              {item.deskripsi && (
                <p className="pt-4 pb-4 indent-8">{item.deskripsi}</p>
              )}
              {/* {item.kategori &&
                item.kategori.map((sub, j) => (
                  <div key={j}>
                    <h2>{sub.deskripsi}</h2>
                  </div>
                ))} */}
              <hr className="text-slate-200" />
            </div>
          ))}
        </div>
        <div className="w-1/3 max-sm:w-full fixed right-0 max-sm:static max-sm:right-auto">
          <LayananSidebar />
        </div>
      </div>
    </div>
  );
};

export default Layanan;
