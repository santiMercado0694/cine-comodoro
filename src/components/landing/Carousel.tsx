"use client";

import { useState, useEffect } from "react";

const images = [
  {
    src: "portada/venomPortada.webp",
    alt: "First slide",
  },
  {
    src: "portada/MyHeroAcademiaPortada.webp",
    alt: "Second slide",
  },
  {
    src: "portada/RobotSalvajePortada.webp",
    alt: "Third slide",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  // Efecto para cambiar automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Cambia cada 5000 ms (5 segundos)
    
    return () => clearInterval(interval); // Limpieza del intervalo al desmontar el componente
  }, [index]); // Se ejecuta el efecto cuando cambia el índice

  return (
    <div className="w-full overflow-hidden h-auto"> {/* Ajusta la altura aquí */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((image, idx) => (
          <div className="flex-shrink-0 w-full" key={idx}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover" // Cambia a h-full para que se ajuste al contenedor
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-600"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-600"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
