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

  const handleDotClick = (idx: number) => {
    setIndex(idx);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative w-full overflow-hidden h-auto">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((image, idx) => (
          <div className="flex-shrink-0 w-full" key={idx}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-5 h-5 rounded-full ${index === idx ? 'bg-white' : 'bg-gray-500'} transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
