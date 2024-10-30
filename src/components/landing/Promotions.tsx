"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import promoImage from "../../../public/promos/promos.webp";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";

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
    <MaxWidthWrapper>
      <div className="mb-14 mt-14">
        <h1 className="text-4xl font-bold flex justify-center items-center mb-6 animate-pulse">
          PROMOCIONES
        </h1>
        <div className="flex items-center">
          {/* Imagen de promociones a la izquierda */}
          <div className="flex-shrink-0 mr-8">
            <Image
              src={promoImage}
              alt="Imagen de promociones"
              width={355} // Ajusta el ancho según lo que necesites
              height={600} // Ajusta la altura según lo que necesites
              className="object-cover"
            />
          </div>

          {/* Carrusel con ancho fijo */}
          <div className="relative w-[800px] h-80 overflow-hidden bg-white shadow-md">
            {" "}
            {/* Cambia w-[800px] al tamaño deseado */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {promoImages.map((image, idx) => (
                <div className="flex-shrink-0 w-full" key={idx}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="responsive"
                    width={800}
                    height={600}
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
                  className={`w-4 h-4 ${
                    index === idx ? "bg-white" : "bg-gray-500"
                  } rounded transition-all duration-300`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Promotions;
