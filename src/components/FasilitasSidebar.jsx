import listFasilitas from "../data/listFasilitas";

const FasilitasSidebar = () => {
  return (
    <>
      <h2 className="bg-[#72bb36] p-3 rounded-sm text-white font-semibold text-center font-poppins">
        Fasilitas Penunjang
      </h2>
      <ul className="flex flex-col pt-2 gap-2 font-poppins">
        {listFasilitas.map((item, i) => (
          <li key={i}>
            <a href={`#${item.id}`} className="flex items-center gap-2">
              <img
                src={item.gambar}
                alt=""
                className="bg-blue-200 rounded-full"
              />
              <span>{item.fasilitas}</span>
            </a>
            <hr className="text-slate-200" />
          </li>
        ))}
      </ul>
    </>
  );
};
export default FasilitasSidebar;
