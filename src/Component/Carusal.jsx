import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carusal = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 4;

  const slides = [
    {
      id: 1,
      src: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    },
    {
      id: 2,
      src: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    },
    {
      id: 3,
      src: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    },
    {
      id: 4,
      src: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    },
  ];

  const nextSlide = () =>
    setActiveSlide(activeSlide === totalSlides ? 1 : activeSlide + 1);
  const prevSlide = () =>
    setActiveSlide(activeSlide === 1 ? totalSlides : activeSlide - 1);
  return (
    <div className="relative w-full h-[400px] overflow-hidden mt-16  ">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            activeSlide === slide.id ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.src}
            className="w-full h-full object-cover"
            alt={`Slide ${slide.id}`}
          />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
            <button
              onClick={prevSlide}
              className="btn btn-circle btn-ghost bg-white/30 hover:bg-white/50 border-none"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="btn btn-circle btn-ghost bg-white/30 hover:bg-white/50 border-none"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carusal;
