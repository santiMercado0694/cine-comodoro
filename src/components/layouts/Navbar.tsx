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

  const scrollToProximos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('proximos-estrenos'); // Asegúrate de que el ID coincida
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gradient-to-r bg-slate-900">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-2xl font-bold " style={{ fontFamily: 'Roboto, sans-serif' }}>
          <Link href="/">Cine Comodoro</Link>
        </div>
        <div className="flex-grow flex justify-center space-x-8 ">
          <a
            href="#cartelera"
            onClick={scrollToCartelera}
            className="text-white text-lg transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ fontFamily: 'Roboto, sans-serif', transition: 'text-shadow 0.3s, transform 0.3s' }}
          >
            CARTELERA
          </a>
          <Link href="/Schedule" className="text-white text-lg transition-transform transform hover:scale-105 hover:shadow-lg" style={{ fontFamily: 'Roboto, sans-serif', transition: 'text-shadow 0.3s, transform 0.3s' }}>
            HORARIOS
          </Link>
          <Link href="/precios" className="text-white text-lg transition-transform transform hover:scale-105 hover:shadow-lg" style={{ fontFamily: 'Roboto, sans-serif', transition: 'text-shadow 0.3s, transform 0.3s' }}>
            PRECIOS
          </Link>
          <a
            href="#proximos-estrenos"
            onClick={scrollToProximos}
            className="text-white text-lg transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ fontFamily: 'Roboto, sans-serif', transition: 'text-shadow 0.3s, transform 0.3s' }}
          >
            PROXIMOS ESTRENOS
          </a>
        </div>
      </div>
      <style jsx>{`
        a:hover {
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
