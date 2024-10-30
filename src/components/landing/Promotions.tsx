"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Importa el componente Image

const promoImages = [
  {
    src: "/promos/combo1.webp",
    alt: "Promoción 1",
  },
  {
    src: "/promos/combo2.webp",
    alt: "Promoción 2",
  },
  {
    src: "/promos/combo3.webp",
    alt: "Promoción 3",
  },
  {
    src: "/promos/combo4.webp",
    alt: "Promoción 4",
  },
  {
    src: "/promos/combo5.webp",
    alt: "Promoción 5",
  },
];

const Promotions = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? promoImages.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === promoImages.length - 1 ? 0 : index + 1);
  };

  const handleDotClick = (idx: number) => {
    setIndex(idx);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="w-2/3 mb-14 ml-5 mt-14 bg-gray-200">
      <h1 className="text-4xl font-bold flex justify-center items-center mb-6 animate-pulse">
        PROMOCIONES
      </h1>
      <div className="relative w-full overflow-hidden h-80 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.9)] rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {promoImages.map((image, idx) => (
            <div className="flex-shrink-0 w-full" key={idx}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive" // Opción de diseño
                width={800} // Ajusta el ancho deseado
                height={600} // Ajusta la altura deseada
                className="object-cover"
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
          {promoImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-4 h-4 ${index === idx ? 'bg-white' : 'bg-gray-500'} rounded transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
