"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import movies from "../../../context/movies.json"; 
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";

const Movie = ({ params }: { params: { MovieId: string } }) => {
  const movie = movies.find((m) => m.id === parseInt(params.MovieId));
  const [selectedHorario, setSelectedHorario] = useState<string | null>(null);

  if (!movie) {
    notFound(); 
  }

  const handleHorarioClick = (hora: string) => {
    setSelectedHorario(hora);
  };

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
          <p className="text-md font-semibold">Horarios:{" "}
            <span className="font-normal">
              {movie.horarios.map((horario, index) => (
                <span
                  key={horario.hora}
                  className={`cursor-pointer ${
                    selectedHorario === horario.hora
                      ? "text-blue-600 font-bold"
                      : "text-gray-400 hover:text-blue-500"
                  }`}
                  onClick={() => handleHorarioClick(horario.hora)}
                  style={{ transition: "transform 0.2s ease-in-out", fontSize: selectedHorario === horario.hora ? '1.1em' : '1em' }}
                >
                  {horario.hora}{index < movie.horarios.length - 1 && ", "}
                </span>
              ))}
            </span>
          </p>
          <button
            className={`mt-4 text-white px-4 py-2 rounded-lg transition duration-200 ${
              selectedHorario ?  "bg-green-600" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!selectedHorario}
            onClick={() => alert(`Has comprado una entrada para el horario: ${selectedHorario}`)}
          >
            Comprar
          </button>
          {!selectedHorario && (
            <p className="text-red-500 mt-2">Por favor, seleccione un horario para comprar tu entrada.</p>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Movie;
