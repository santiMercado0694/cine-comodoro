"use client";

import Image from 'next/image';
import Link from 'next/link'; // Importa Link para la navegación interna
import movies from '../../context/movies.json'; 

const Movies = () => {
  return (
    <div id="cartelera" className="p-6 mb-4">
      <h1 className="text-3xl font-bold mb-4 text-center">EN CARTELERA</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <Link
            key={index} 
            href={movie.link} 
            className="relative block overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <Image 
              src={movie.image} 
              alt={movie.title} 
              width={400} 
              height={600} 
              className="w-96 h-96 rounded-lg object-fit" // Ajuste de altura para formato vertical
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
              <h3 className="text-white font-bold">{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
