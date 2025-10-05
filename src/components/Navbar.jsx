import { useState, useEffect } from "react";
import useScrollPosition from "../assets/CustomHooks";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import home from "../assets/home.png";
import jadwal from "../assets/jadwal.png";
import layanan from "../assets/layanan.png";
import promo from "../assets/promo.jpg";
import "../assets/index.css";

// modal
import Modal from "./Modal";
const Navbar = () => {
  const scrollY = useScrollPosition();
  const isFixed = scrollY > 30;

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(true); // otomatis muncul ketika halaman dibuka
  }, []);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 z-10 flex w-full items-center bg-transparent shadow ${
          isFixed ? "navbar-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="relative flex items-center justify-between px-6">
            <div className="px-4 flex items-center">
              <a href="/">
                <img
                  src={logo}
                  alt=""
                  className="block py-1.5 w-[70px] max-sm:w-[50px]"
                />
              </a>
              <a
                href=""
                className="font-semibold text-[#72bb36] text-[20px] pl-3 lg:hidden md:hidden"
              >
                RS Tonggak Husada
              </a>
            </div>
            <div className="flex items-center px-4">
              <nav
                id="nav-menu"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
              >
                <ul className="flex justify-around gap-10">
                  <li>
                    <NavLink to="/" end>
                      <span>Beranda</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/fasilitas" end>
                      <span>Fasilitas</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/jadwal-dokter" end>
                      <span>Jadwal Dokter</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/layanan" end>
                      <span>Layanan Poliklinik</span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="fixed bottom-0 z-20 w-full  backdrop-blur-2xl lg:hidden md:hidden">
        <ul className="flex justify-around">
          <li className="flex-col">
            <Link to="/layanan" end>
              <img src={layanan} alt="" />
              <span className="text-[10px] text-slate-600 text-center">
                Layanan
              </span>
            </Link>
          </li>
          <li className="flex-col">
            <Link to="/" end>
              <img src={home} alt="" />
              <span className="text-[10px] text-slate-600">Beranda</span>
            </Link>
          </li>
          <li className="felx-col items-center">
            <Link to="/jadwal-dokter" end>
              <img src={jadwal} alt="" />
              <span className="text-[10px] text-slate-600 text-center">
                Jadwal
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* modal */}
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Promo Spesial 🎉"
      >
        <img src={promo} alt="" />
      </Modal>
    </div>
  );
};
export default Navbar;
