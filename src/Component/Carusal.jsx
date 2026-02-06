import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <div className="w-full h-[500px] mt-16 shadow-2xl relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="mySwiper h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.src}
                className="w-full h-full object-cover"
                alt={slide.title}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

              {/* Text Content */}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional: Add custom CSS to your styles.css to make Swiper buttons match your orange theme */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-button-next, .swiper-button-prev { color: white !important; }
        .swiper-pagination-bullet-active { background: #FE5A1C !important; }
      `,
        }}
      />
    </div>
  );
};

export default Carusal;
