// components/ImageSlider.js
"use client";
import { MdOutlineLocationOn } from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";
import lady from '../../public/lady.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional, if using navigation
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

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
        <SwiperSlide className="pb-16">
          <div className="shadow-md rounded-2xl py-10 px-8">
            <div className="flex gap-2 items-center">
                <Image src={lady} alt="lady in suit" className="h-10 w-10 rounded-full" />
              <div><p className="font-bold text-lg">Emma Joseph</p>
              <div className="flex gap-3 items-center font-light text-gray-700 text-sm">
                <p>CEO Johnson Lmt</p>
                <p className="flex items-center">
                  <MdOutlineLocationOn /> Okabere
                </p>
              </div>
              </div>
            </div>
            <div className="flex gap-1 text-yellow-500 mt-2 mb-4">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <p className="font-semibold">The best experience I have ever had</p>
            <p className="mt-1 font-light text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className="pb-16">
          <div className="shadow-md rounded-2xl py-10 px-8 text-white bg-gradient-to-br from-purple-950 via-indigo-950 to-pink-950">
            <div className="flex gap-2 items-center">
                <Image src={lady} alt="lady in suit" className="h-10 w-10 rounded-full" />
              <div><p className="font-bold text-lg">Emma Joseph</p>
              <div className="flex gap-3 items-center font-light text-gray-200 text-sm">
                <p>CEO Johnson Lmt</p>
                <p className="flex items-center">
                  <MdOutlineLocationOn /> Okabere
                </p>
              </div>
              </div>
            </div>
            <div className="flex gap-1 text-yellow-500 mt-2 mb-4">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <p className="font-semibold">The best experience I have ever had</p>
            <p className="mt-1 font-light text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pb-16">
          <div className="shadow-md rounded-2xl py-10 px-8">
            <div className="flex gap-2 items-center">
                <Image src={lady} alt="lady in suit" className="h-10 w-10 rounded-full" />
              <div><p className="font-bold text-lg">Emma Joseph</p>
              <div className="flex gap-3 items-center font-light text-gray-700 text-sm">
                <p>CEO Johnson Lmt</p>
                <p className="flex items-center">
                  <MdOutlineLocationOn /> Okabere
                </p>
              </div>
              </div>
            </div>
            <div className="flex gap-1 text-yellow-500 mt-2 mb-4">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <p className="font-semibold">The best experience I have ever had</p>
            <p className="mt-1 font-light text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
