import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carusal = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 4;

  const slides = [
    {
      id: 1,
      src: "https://i.ibb.co/mkMHr06/event-010.jpg",
      title: "Barcelona Food Truck Festival",
      desc: "Experience the best street food from around the world in one place.",
    },
    {
      id: 2,
      src: "https://i.ibb.co/y2MWpRH/event-003.jpg",
      title: "Tech Innovators 2025",
      desc: "Join us for the biggest technology gathering of the decade.",
    },
    {
      id: 3,
      src: "https://i.ibb.co/Vc4zrGxv/event-009.jpg",
      title: "Global Music Awards",
      desc: "Celebrating the finest artists and performances this year.",
    },
    {
      id: 4,
      src: "https://i.ibb.co/3yZQtRhm/event-007.jpg",
      title: "Art & Culture Expo",
      desc: "A journey through historical masterpieces and modern art.",
    },
  ];

  const nextSlide = () =>
    setActiveSlide(activeSlide === totalSlides ? 1 : activeSlide + 1);
  const prevSlide = () =>
    setActiveSlide(activeSlide === 1 ? totalSlides : activeSlide - 1);

  return (
    <div className="relative w-full h-[500px] overflow-hidden mt-16 shadow-2xl">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
            activeSlide === slide.id
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.src}
            className="w-full h-full object-cover"
            alt={slide.title}
          />

          {/* 1. The Dark Overlay (Gradient for better text readability) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

          {/* 2. The Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24 text-white z-20">
            <h2 className="text-4xl md:text-6xl font-black mb-4 max-w-2xl leading-tight">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
              {slide.desc}
            </p>
            <div className="flex gap-4">
              <button className="btn bg-[#FE5A1C] border-none text-white px-8 hover:bg-[#FFBF00]">
                Book Tickets
              </button>
              <button className="btn btn-outline text-white border-white px-8">
                Learn More
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
            <button
              onClick={prevSlide}
              className="btn btn-circle bg-white/20 hover:bg-white/40 border-none text-white"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="btn btn-circle bg-white/20 hover:bg-white/40 border-none text-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      ))}

      {/* 3. Slide Indicators (Small dots at bottom) */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((s) => (
          <div
            key={s.id}
            className={`h-2 rounded-full transition-all duration-300 ${activeSlide === s.id ? "w-8 bg-[#FE5A1C]" : "w-2 bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carusal;
