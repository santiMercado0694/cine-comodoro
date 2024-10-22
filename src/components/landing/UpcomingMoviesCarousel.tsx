"use client";

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import movies from '../../context/movies.json';

const UpcomingCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-full bg-black-800 p-4 rounded-lg shadow-lg mb-8"
    >
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6"> {/* Ajustar el espaciado aquí */}
            <div className="p-1">
              <Card>
                <CardContent className="relative flex flex-col items-center justify-center p-1">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-32 h-48 rounded-lg object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 text-center">
                    <h3 className="text-white font-bold text-sm">{movie.title}</h3>
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
  );
};

export default UpcomingCarousel;
