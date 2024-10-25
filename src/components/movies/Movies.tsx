"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import movies from "../../context/movies.json";
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";
import popcornIcon from "../../../public/assets/popcorn.webp";

const Movies = () => {
  const [index, setIndex] = useState(0);
  const imagesPerSlide = 4;

  const handleNext = () => {
    if (index < movies.length - imagesPerSlide) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <MaxWidthWrapper>
      <div id="cartelera" className="p-8 mb-6 mt-8 text-center">
        <h1 className="text-4xl font-bold  flex justify-center items-center mb-6 animate-pulse">
          <Image src={popcornIcon} alt="Pochoclo" width={40} height={40} className="mr-2" />
          EN CARTELERA
        </h1>
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
                      <h3 className="text-white font-bold text-sm truncate w-full">ESTRENO</h3>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-50 w-full bg-gray-800 p-1 text-center">
                    <h3 className="text-white font-bold text-sm truncate w-full">{movie.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button onClick={handlePrev} className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-gray-800 text-white p-3 shadow-lg rounded-full hover:bg-gray-600">&#10094;</button>
          <button onClick={handleNext} className="absolute top-1/2 right-7 z-10 transform -translate-y-1/2 bg-gray-800 text-white p-3 shadow-lg rounded-full hover:bg-gray-600">&#10095;</button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Movies;
