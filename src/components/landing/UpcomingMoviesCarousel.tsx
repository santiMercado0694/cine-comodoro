"use client";

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import movies from '../../context/UpcomingMovies.json';

const UpcomingCarousel = () => {
  return (
    <div className="text-center p-4 bg-gray-500">
      <h1 id="proximos-estrenos" className="text-3xl font-bold mb-4">PROXIMOS ESTRENOS</h1>
      <div className="mx-auto max-w-screen-lg">
        <Carousel
          opts={{
            align: "start",
          }}
          className="bg-black-800 rounded-lg shadow-lg"
        >
          <CarouselContent>
            {movies.map((movie, index) => (
              <CarouselItem key={index} className="relative md:basis-1/2 lg:basis-1/6">
                <div className="p-1">
                  <Card>
                    <CardContent className="relative flex flex-col items-center justify-center p-1">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-32 h-48 rounded-lg object-cover"
                      />
                      <div className="absolute bottom-0 left-50 w-full bg-blue-800 p-1 text-center">
                        <h3 className="text-white font-bold text-sm truncate w-full">{movie.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default UpcomingCarousel;
