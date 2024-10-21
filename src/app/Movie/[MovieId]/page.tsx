"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import movies from "../../../context/movies.json"; // Asegúrate de que la ruta a tu JSON sea correcta
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";

const Movie = ({ params }: { params: { MovieId: string } }) => {
  const movie = movies.find((m) => m.id === parseInt(params.MovieId));

  if (!movie) {
    notFound(); // Si no encuentra la película, devuelve una página 404
  }

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row p-6">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image 
            src={movie.image} 
            alt={movie.title} 
            width={400} 
            height={600} 
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-lg mb-4">{movie.description}</p>
          <p className="text-md font-semibold">Fecha de estreno: <span className="font-normal">{movie.fecha}</span></p>
          <p className="text-md font-semibold">Protagonistas: <span className="font-normal">{movie.protagonistas}</span></p>
          <p className="text-md font-semibold">Director: <span className="font-normal">{movie.director}</span></p>
          <p className="text-md font-semibold">Género: <span className="font-normal">{movie.genero}</span></p>
          <p className="text-md font-semibold">Calificación: <span className="font-normal">{movie.calificacion}</span></p>
          <p className="text-md font-semibold">Duración: <span className="font-normal">{movie.duracion}</span></p>
          <a 
            href={movie.link} 
            className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-200"
          >
            Ver más detalles
          </a>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Movie;
