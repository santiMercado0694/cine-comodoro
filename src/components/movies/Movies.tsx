"use client";

const Movies = () => {
  const movies = [
    { 
      title: "La Sustancia", 
      description: "Descripción de la película 1", 
      image: "https://pics.filmaffinity.com/the_substance-124404468-large.jpg",
      link: "/pelicula1"
    },
    { 
      title: "Smile 2", 
      description: "Descripción de la película 2", 
      image: "https://pics.filmaffinity.com/smile_2-729696021-large.jpg",
      link: "/"
    },
    { 
      title: "My Hero Academia", 
      description: "Descripción de la película 3", 
      image: "https://pics.filmaffinity.com/boku_no_hero_academia_the_movie_you_re_next-239254108-large.jpg",
      link: "/"
    },
    { 
      title: "Robot Salvaje", 
      description: "Descripción de la película 4", 
      image: "https://pics.filmaffinity.com/the_wild_robot-127160958-large.jpg",
      link: "/4"
    },
    { 
      title: "Joker 2", 
      description: "Descripción de la película 5", 
      image: "https://pics.filmaffinity.com/joker_folie_a_deux-920647444-large.jpg",
      link: "/pelicula5"
    },
    { 
      title: "Beetlejuice Beetlejuice", 
      description: "Descripción de la película 6", 
      image: "https://pics.filmaffinity.com/beetlejuice_beetlejuice-890586814-large.jpg",
      link: "/pelicula6"
    },
    // Agrega más películas aquí
  ];

  return (
    <div id="cartelera" className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">EN CARTELERA</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie, index) => (
          <a 
            key={index} 
            href={movie.link} 
            className="relative block overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <img 
              src={movie.image} 
              alt={movie.title} 
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
              <h3 className="text-white font-bold">{movie.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Movies;
