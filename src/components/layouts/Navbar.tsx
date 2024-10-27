"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const element = document.getElementById('cartelera');
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top > 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToCartelera = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('cartelera');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProximos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('proximos-estrenos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`bg-gradient-to-r bg-slate-900 opacity-90 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
        <div className="text-white text-2xl font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <Link href="/">CINE COMODORO</Link>
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-2 md:mt-0">
          <a href="#" onClick={scrollToCartelera} className="text-white text-lg transition-transform transform hover:scale-105 hover:shadow-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
            CARTELERA
          </a>
          <Link href="/Schedule" className="text-white text-lg transition-transform transform hover:scale-105 hover:shadow-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
            PRECIOS Y HORARIOS
          </Link>
          <a href="#" onClick={scrollToProximos} className="text-white text-lg transition-transform transform hover:scale-105 hover:shadow-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
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

