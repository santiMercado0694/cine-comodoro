"use client";

import { useState } from "react";
import Image from "next/image";
import movies from "../../context/movies.json";
import coliseoIcon from "../../../public/assets/coliseo.webp";
import teatroIcon from "../../../public/assets/teatro.webp";
import Link from "next/link";

const CineYTeatroMovies = () => {
  // Filtrar las películas que están en el Cine Coliseo y en el Teatro Español
  const coliseoMovies = movies.filter((movie) => movie.coliseo);
  const teatroMovies = movies.filter((movie) => movie.teatro);

  return (
    <div className="p-4">
      {/* Cine Coliseo */}
      <h1 className="text-4xl font-bold  flex justify-center items-center mb-6 animate-pulse">
        <Image
          src={coliseoIcon}
          alt="coliseo"
          width={40}
          height={40}
          className="mr-2"
        />
        EN CINE COLISEO
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-16">
        {coliseoMovies.map((movie, idx) => (
          <div className="flex-shrink-0 w-full flex " key={idx}>
            <Link
              href={movie.link}
              className="relative block overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <Image
                src={movie.image}
                alt={movie.title}
                width={400}
                height={600}
                className="w-80 h-full object-cover"
              />
              {movie.estreno && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full bg-red-800 p-1 text-center">
                  <h3 className="text-white font-bold text-sm truncate w-full">
                    ESTRENO
                  </h3>
                </div>
              )}
              <div className="absolute bottom-0 left-50 w-full bg-gray-800 p-1 text-center opacity-80">
                <h3 className="text-white font-bold text-sm truncate w-full">
                  {movie.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Teatro Español */}
      <h1 className="text-4xl font-bold  flex justify-center items-center mb-6 animate-pulse">
        <Image
          src={teatroIcon}
          alt="teatro"
          width={40}
          height={40}
          className="mr-2"
        />
        EN TEATRO ESPAÑOL
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-8">
        {teatroMovies.map((movie, idx) => (
          <div className="flex-shrink-0 w-full flex " key={idx}>
            <Link
              href={movie.link}
              className="relative block overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <Image
                src={movie.image}
                alt={movie.title}
                width={400}
                height={600}
                className="w-80 h-full object-cover"
              />
              {movie.estreno && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full bg-red-800 p-1 text-center">
                  <h3 className="text-white font-bold text-sm truncate w-full">
                    ESTRENO
                  </h3>
                </div>
              )}
              <div className="absolute bottom-0 left-50 w-full bg-gray-800 p-1 text-center opacity-80">
                <h3 className="text-white font-bold text-sm truncate w-full">
                  {movie.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CineYTeatroMovies;
