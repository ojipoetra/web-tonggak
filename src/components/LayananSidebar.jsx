import listLayanan from "../data/listLayanan";
const LayananSidebar = () => {
  return (
    <>
      <h2 className="bg-[#72bb36] p-3 rounded-sm text-white font-semibold text-center font-poppins">
        LIST LAYANAN POLIKLINIK
      </h2>
      <ul className="flex flex-col pt-2 gap-2 font-poppins">
        {listLayanan.map((item, i) => (
          <li key={i}>
            <a href={`#${item.id}`} className="flex items-center gap-2">
              <img
                src={item.gambar}
                alt=""
                className="bg-blue-200 rounded-full"
              />
              <span>{item.layanan}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
export default LayananSidebar;
