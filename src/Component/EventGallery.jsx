import React from "react";

const EventGallery = () => {
  const galleryData = [
    {
      id: 1,
      image: "https://i.ibb.co/mkMHr06/event-010.jpg",
      title: "Food Truck Festival",
      location: "Silicon Tower, Banani",
      date: "Oct 2025",
    },
    {
      id: 2,
      image: "https://i.ibb.co/y2MWpRH/event-003.jpg",
      title: "Tech Innovators Summit",
      location: "Dhaka, Bangladesh",
      date: "May 2025",
    },
    {
      id: 3,
      image: "https://i.ibb.co/Vc4zrGxv/event-009.jpg",
      title: "Music Night Live",
      location: "Dhanmondi Lake, Dhaka",
      date: "June 2025",
    },
    {
      id: 4,
      image: "https://i.ibb.co/3yZQtRhm/event-007.jpg",
      title: "Corporate Gala",
      location: "BUET Auditorium, Dhaka",
      date: "Dec 2025",
    },
    {
      id: 5,
      image: "https://i.ibb.co/S4L1BrWN/Bid3-min.png",
      title: "Startup Pitch Day",
      location: "Army Stadium, Dhaka",
      date: "Aug 2025",
    },
    {
      id: 6,
      image: "https://i.ibb.co/mkMHr06/event-010.jpg",
      title: "Wedding Excellence",
      location: "Army Stadium, Dhaka",
      date: "Sept 2025",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="w-11/12 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            Event <span className="text-[#FE5A1C]">Gallery</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Capturing the moments that matter. Browse through our portfolio of
            successful events and celebrations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg cursor-pointer h-80"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay (Visible on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                {/* Content that slides up */}
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#FE5A1C] font-bold text-sm uppercase tracking-widest">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    <span className="text-sm">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-800">
            Ready to start your own event?
          </h3>
          <button className="mt-6 btn btn-lg bg-[#FE5A1C] border-none text-white px-12 rounded-full shadow-orange-200 hover:shadow-2xl transition-all">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
