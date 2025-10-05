import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Jika modal tidak aktif, tidak dirender

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white/50 rounded-2xl shadow-lg w-[100%] max-w-md relative animate-fadeIn">
        {/* Tombol close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          ✕
        </button>

        {/* Judul */}
        {title && (
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            {title}
          </h2>
        )}

        {/* Isi modal */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
