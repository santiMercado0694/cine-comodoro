"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import movies from "../../../context/movies.json";
import upcomingMovies from "../../../context/UpcomingMovies.json";
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";
import * as React from "react";
import Alert from "@mui/material/Alert";

const Movie = ({ params }: { params: { MovieId: string } }) => {
  const movie =
    movies.find((m) => m.id === parseInt(params.MovieId)) ||
    upcomingMovies.find((m) => m.id === parseInt(params.MovieId));
  const [selectedHorario, setSelectedHorario] = useState<string | null>(null);

  if (!movie) {
    notFound();
  }

  const handleHorarioClick = (hora: string) => {
    setSelectedHorario(hora);
  };

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row p-6 mt-20 mb-40">
        <div className="md:w-1/2 mb-4 md:mb-0 relative">
          <Image
            src={movie.image}
            alt={movie.title}
            width={400}
            height={600}
            className="rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.9)] object-cover"
          />
          {/* Etiqueta de Cine Coliseo o Teatro Español */}
          {(movie.coliseo || movie.teatro) && (
            <div
              className={`absolute top-0 left-0 px-3 py-1 rounded-lg text-white font-bold text-sm  ${
                movie.coliseo ? "bg-blue-600" : "bg-red-600"
              }`}
            >
              {movie.coliseo ? "Cine Coliseo" : "Teatro Español"}
            </div>
          )}
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-3xl font-bold mb-2 uppercase">{movie.title}</h1>
          <p className="text-lg mb-4">{movie.description}</p>
          <p className="text-md font-semibold">
            Fecha de estreno: <span className="font-normal">{movie.fecha}</span>
          </p>
          <p className="text-md font-semibold">
            Protagonistas:{" "}
            <span className="font-normal">{movie.protagonistas}</span>
          </p>
          <p className="text-md font-semibold">
            Director: <span className="font-normal">{movie.director}</span>
          </p>
          <p className="text-md font-semibold">
            Género: <span className="font-normal">{movie.genero}</span>
          </p>
          <p className="text-md font-semibold">
            Calificación:{" "}
            <span className="font-normal">{movie.calificacion}</span>
          </p>
          <p className="text-md font-semibold">
            Duración: <span className="font-normal">{movie.duracion}</span>
          </p>

          {movie.horarios.length > 0 && (
            <>
              <p className="text-md font-semibold">
                Horarios:{" "}
                <span className="font-normal">
                  {movie.horarios.map((horario, index) => (
                    <span
                      key={horario.hora}
                      className={`cursor-pointer ${
                        selectedHorario === horario.hora
                          ? "text-blue-600 font-bold"
                          : "text-slate-500 hover:text-blue-500"
                      }`}
                      onClick={() => handleHorarioClick(horario.hora)}
                      style={{
                        transition: "transform 0.2s ease-in-out",
                        fontSize:
                          selectedHorario === horario.hora ? "1.1em" : "1em",
                      }}
                    >
                      {horario.hora}
                      {index < movie.horarios.length - 1 && ", "}
                    </span>
                  ))}
                </span>
              </p>
              <button
                className={`mt-4 text-white px-4 py-2 rounded-lg transition duration-200 ${
                  selectedHorario
                    ? "bg-green-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!selectedHorario}
                onClick={() =>
                  alert(
                    `Has comprado una entrada para el horario: ${selectedHorario}`
                  )
                }
              >
                Comprar
              </button>
              {!selectedHorario && (
                <div className="w-full space-y-2">
                  <Alert
                    className="mt-5 bg-red-500 bg-opacity-15 text-black"
                    severity="error"
                  >
                    Por favor, seleccione un horario para comprar tu entrada.
                  </Alert>
                </div>
              )}
            </>
          )}

          {movie.trailer && (
            <div className="mt-6">
              <h2 className="text-xl font-bold">Tráiler</h2>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${movie.trailer}`}
                title={`Tráiler de ${movie.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.9)] mt-3"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Movie;
