// components/ImageSlider.js
"use client";
import { MdOutlineLocationOn } from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";
import lady from "../../public/lady.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional, if using navigation
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const testimonials = [
  {
    name: "Emma Joseph",
    title: "CEO Johnson Lmt",
    location: "Okabere",
    image: lady,
    stars: 5,
    headline: "The best experience I have ever had",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    dark: false,
  },
  {
    name: "Emma Joseph",
    title: "CEO Johnson Lmt",
    location: "Okabere",
    image: lady,
    stars: 5,
    headline: "The best experience I have ever had",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    dark: true,
  },
  {
    name: "Emma Joseph",
    title: "CEO Johnson Lmt",
    location: "Okabere",
    image: lady,
    stars: 5,
    headline: "The best experience I have ever had",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    dark: false,
  },
];

export default function ImageSlider() {
  return (
    <div className="py-10">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide className="pb-16" key={idx}>
            <div
              className={`shadow-md rounded-2xl py-10 px-8 ${
                t.dark
                  ? "text-white bg-gradient-to-br from-purple-950 via-indigo-950 to-pink-950"
                  : ""
              }`}
            >
              <div className="flex gap-2 items-center">
                <Image
                  src={t.image}
                  alt="lady in suit"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-bold text-2xl">{t.name}</p>
                  <div
                    className={`flex gap-3 items-center font-light text-lg ${
                      t.dark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    <p>{t.title}</p>
                    <p className="flex items-center">
                      <MdOutlineLocationOn /> {t.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 text-yellow-500 mt-2 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <LiaStarSolid key={i} />
                ))}
              </div>
              <p className="font-semibold text-2xl">{t.headline}</p>
              <p className="mt-1 font-light text-lg">{t.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
