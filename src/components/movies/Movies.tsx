"use client";

import Image from "next/image";
import Link from "next/link";
import movies from "../../context/movies.json";
import { useState } from "react";
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";

const Movies = () => {
  const [index, setIndex] = useState(0);
  const imagesPerSlide = 4; // Muestra 4 imágenes por slide

  const handleNext = () => {
    if (index < movies.length - imagesPerSlide) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <MaxWidthWrapper>
      <div id="cartelera" className="p-8 mb-4">
        <h1 className="text-3xl font-bold mb-4 text-center">EN CARTELERA</h1>
        <div className="relative w-full overflow-hidden h-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(index * 100) / imagesPerSlide}%)`,
            }}
          >
            {movies.map((movie, idx) => (
              <div className="flex-shrink-0 w-1/4 flex " key={idx}>
                <Link
                  href={movie.link}
                  className="relative block overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    width={400}
                    height={600}
                    className="w-64 h-full object-cover"
                  />
                  {movie.estreno && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full bg-red-800 p-1 text-center">
                      <h3 className="text-white font-bold text-sm truncate w-full">
                        ESTRENO
                      </h3>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-50 w-full bg-gray-800 p-1 text-center">
                    <h3 className="text-white font-bold text-sm truncate w-full">
                      {movie.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className={`absolute top-1/2 left-0 h-full opacity-60 transform -translate-y-1/2 bg-gray-800 text-white p-2 shadow-lg hover:bg-gray-600 ${
              index === 0 ? "disabled:opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={index === 0} // Deshabilitar botón si en el primer índice
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className={`absolute top-1/2 right-0 h-full opacity-60 transform -translate-y-1/2 bg-gray-800 text-white p-2 shadow-lg hover:bg-gray-600 ${
              index >= movies.length - imagesPerSlide
                ? "disabled:opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={index >= movies.length - imagesPerSlide} // Deshabilitar botón si en el último índice
          >
            &#10095;
          </button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Movies;
