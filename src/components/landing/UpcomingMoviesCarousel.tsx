"use client";

import React from "react";
import Link from "next/link"; // Importa el componente Link
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import movies from "../../context/UpcomingMovies.json";
import movieIcon from "../../../public/assets/movie.webp";
import Image from "next/image";

const UpcomingCarousel = () => {
  return (
    <div className="text-center p-6 bg-gray-600">
      <div className="flex justify-center items-center space-x-2 animate-bounce">
        <Image src={movieIcon} alt="Movie Icon" width={40} height={40} />
        <h1 id="proximos-estrenos" className="text-3xl font-bold text-white">
          PRÓXIMOS ESTRENOS
        </h1>
      </div>
      <div className="mx-auto max-w-screen-lg mt-4">
        <Carousel
          className="bg-black-800 rounded-lg shadow-lg"
          opts={{ align: "start" }}
        >
          <CarouselContent>
            {movies.map((movie, index) => (
              <CarouselItem
                key={index}
                className="relative md:basis-1/2 lg:basis-1/6"
              >
                <Link
                  href={movie.link}
                  className="relative block overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  <div className="p-4">
                    <Card>
                      <CardContent className="relative flex flex-col items-center justify-center p-1">
                        <img
                          src={movie.image}
                          alt={movie.title}
                          className="w-40 h-48 rounded-lg object-cover"
                        />
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-full bg-red-800 p-1 text-center z-10">
                          <h3 className="text-white font-bold text-sm truncate w-full">
                            {movie.fecha}
                          </h3>
                        </div>
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-11/12 bg-black bg-opacity-50 p-1 text-center rounded-md">
                          <h3 className="text-white font-bold text-xs truncate">
                            {movie.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200" />
          <CarouselNext className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200" />
        </Carousel>
      </div>
    </div>
  );
};

export default UpcomingCarousel;
