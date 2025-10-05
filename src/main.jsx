import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
// import App from './App.jsx'
import Navbar from "./components/Navbar";
import { Beranda } from "./package/Beranda";
import Fasilitas from "./package/Fasilitas";
import JawalDokter from "./package/Jadwaldokter";
import Layanan from "./package/Layanan";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/jadwal-dokter" element={<JawalDokter />} />
        <Route path="/layanan" element={<Layanan />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
