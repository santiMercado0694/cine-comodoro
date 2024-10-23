"use client";

import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";
import Image from "next/image";
import movies from "../../context/movies.json";
import Link from "next/link";

const Schedule = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col p-6">
        <h1 className="text-3xl font-bold mb-4">Cartelera</h1>
        {movies.map((movie, index) => (
          <Link
            key={index}
            href={movie.link}
            className="relative block overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <div key={movie.id} className="flex items-center mb-6">
              <Image
                src={movie.image}
                alt={movie.title}
                width={200}
                height={300}
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="ml-8 ">
                <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                <p className="text-md font-semibold">Horarios:</p>
                <p className="text-md">
                  {movie.horarios.map((horario, index) => (
                    <span key={horario.hora}>
                      {horario.hora}
                      {index < movie.horarios.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Schedule;
