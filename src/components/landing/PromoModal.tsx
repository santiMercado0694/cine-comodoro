"use client";

import React, { useState, useEffect } from "react";

const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Cierra el modal automáticamente después de 10 segundos
    const timer = setTimeout(handleClose, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Fondo oscuro */}
        <div
          className="absolute inset-0 bg-black opacity-70"
          onClick={handleClose}
        ></div>
        {/* Imagen del modal */}
        <div className="relative z-10">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full p-1"
          >
            &times;
          </button>
          <img
            src="/promos/promo2x1.webp"
            alt="Promoción Especial"
            className="max-w-screen-md w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    )
  );
};

export default PromoModal;
