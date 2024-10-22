"use client";

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const scrollToCartelera = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('cartelera');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-2xl font-bold transition-transform transform hover:scale-110" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <Link href="/">Cine Comodoro</Link>
        </div>
        <div className="flex-grow flex justify-center space-x-8">
          <a
            href="#cartelera"
            onClick={scrollToCartelera}
            className="text-white text-lg hover:underline hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Cartelera
          </a>
          <Link href="/horarios" className="text-white text-lg hover:underline hover:text-yellow-400 transition duration-300 ease-in-out" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Horarios
          </Link>
          <Link href="/precios" className="text-white text-lg hover:underline hover:text-yellow-400 transition duration-300 ease-in-out" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Precios
          </Link>
          <Link href="/proximos" className="text-white text-lg hover:underline hover:text-yellow-400 transition duration-300 ease-in-out" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Próximos Estrenos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
