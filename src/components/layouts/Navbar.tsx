"use client"

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const scrollToCartelera = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    const element = document.getElementById('cartelera');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">
          <Link href="/">Cine Comodoro</Link>
        </div>
        <div className="flex-grow flex justify-center space-x-4">
          <a href="#cartelera" onClick={scrollToCartelera} className="text-white hover:underline cursor-pointer">
            Cartelera
          </a>
          <Link href="/horarios" className="text-white hover:underline">
            Horarios
          </Link>
          <Link href="/precios" className="text-white hover:underline">
            Precios
          </Link>
          <Link href="/proximos" className="text-white hover:underline">
            Próximos Estrenos
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/login" className="text-white hover:underline">
            Iniciar Sesión
          </Link>
          <Link href="/register" className="text-white hover:underline">
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
