"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import landinpic1 from "../public/shiplanding1.jpg";
import landinpic2 from "../public/truck.jpg";
import landinpic3 from "../public/planelanding.jpg";
import purplebackground from "../public/purplebg.jpg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { FiPackage, FiClock, FiUsers } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageSlider from "./components/ImageSlider";

const images = [landinpic1, landinpic2, landinpic3];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Image
          src={images[current]}
          alt="carousel image"
          className="w-screen h-80 lg:h-96 lg:object-cover transition-all duration-700"
        />
        {/* Purple overlay for darkening the image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#2d0036]/85 z-10 pointer-events-none"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div
          className="absolute flex flex-col justify-center 
            items-center top-0 right-0 left-0 
            bottom-0 text-white w-5/6 mx-auto text-center z-20"
        >
          <p className="w-4/6 lg:w-full text-3xl mt-5 lg:text-4xl font-semibold font-playfair">
            Fast & Reliable Delivery Service
          </p>
          <p className="italic mt-3 font-thin lg:text-lg text-center">
            Get your packages delivered quickly and securely with our
            professional courier service. Same-day delivery available in major
            cities.
          </p>

          <Link href="contact">
            <button className="rounded-lg py-2 px-4 bg-purple-900 mt-9 shadow-md text-white">
              Get Quatation
            </button>
          </Link>
        </div>
      </section>

      {/* Package Tracking Section */}
      <section className="w-5/6 mx-auto lg:py-32 py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">Track Your Package</h2>
            <p className="text-muted-foreground">
              Enter your tracking number to get real-time updates on your
              delivery
            </p>
            <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
              <div className="rounded-xl px-3 py-2 border border-gray-300">
                <input
                  placeholder="Enter tracking number"
                  className="flex-1 outline-none"
                />
              </div>
              <button className="rounded-lg py-2 px-4 bg-purple-900 shadow-md text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-5/6 mx-auto rounded-3xl py-20 ">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl font-bold">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive delivery solutions tailored to meet your specific
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="shadow-lg rounded-2xl p-8 bg-gradient-to-br from-purple-50 via-gray-50 to-[#e0e7ff]">
              <div className="px-3 py-3 rounded-xl mb-3 w-fit bg-purple-200 text-purple-500">
                <AiOutlineThunderbolt className="text-xl" />
              </div>
              <p className="font-bold text-lg flex gap-2 items-center">
                {" "}
                Same Day Delivery
              </p>

              <p className="mb-4 text-gray-700">
                Get your packages delivered within hours in major metropolitan
                areas
              </p>
              <div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="h-4 w-4 text-green-500" />
                    2-4 hour delivery window
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="h-4 w-4 text-green-500" />
                    Real-time tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="h-4 w-4 text-green-500" />
                    Signature confirmation
                  </li>
                </ul>
              </div>
            </div>
            {/* ...repeat for other cards as needed... */}
            <div className="shadow-lg rounded-2xl p-8 bg-gradient-to-br from-purple-50 via-gray-50 to-[#e0e7ff]">
              <div className="px-3 py-3 rounded-xl w-fit bg-indigo-200 text-indigo-500 mb-3">
                <RiGlobalLine className="text-xl" />
              </div>
              <div>
                <p className="font-bold text-lg mb-2">International Shipping</p>
                <p className="mb-4 text-gray-700">
                  Reliable worldwide delivery with customs handling and
                  documentation
                </p>
              </div>
              <div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="h-4 w-4 text-green-500" />
                    200+ countries served
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="h-4 w-4 text-green-500" />
                    Customs clearance
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="h-4 w-4 text-green-500" />
                    Insurance included
                  </li>
                </ul>
              </div>
            </div>

            <div className="shadow-lg rounded-2xl p-8 bg-gradient-to-br from-purple-50 via-gray-50 to-[#e0e7ff]">
              <div className="px-3 py-3 rounded-xl w-fit bg-fuchsia-200 text-fuchsia-500 mb-3">
                <FiPackage className="text-xl" />
              </div>
              <p className="font-bold text-lg mb-2">Bulk Shipping</p>
              <p className="mb-4 text-gray-700">
                Cost-effective solutions for businesses with high-volume
                shipping needs
              </p>

              <div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="h-4 w-4 text-green-500" />
                    Volume discounts
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="h-4 w-4 text-green-500" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="h-4 w-4 text-green-500" />
                    API integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative">
        <Image
          alt="purple background"
          src={purplebackground}
          className="w-screen h-80 lg:h-96 lg:object-cover"
        />
        <div
          className="absolute flex flex-col justify-center 
            items-center top-0 right-0 left-0 
            bottom-0 text-white w-5/6 mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Ship with SwiftCourier?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their deliveries. Get started today and experience
            the difference.
          </p>
          <div className="center">
            
            <button
              
              
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section> */}

      <section className="py-20 lg:mt-20 mt-10 text-white bg-gradient-to-br from-purple-950 via-indigo-950 to-pink-950">
        <div className="container w-5/6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl font-bold">Why Choose SwiftCourier?</h2>
            <p className="mx-auto font-light">
              We are committed to providing the best delivery experience possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="px-3 py-3 rounded-xl w-fit bg-indigo-400">
                  <FiClock className="text-indigo-900 text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Same-day and next-day delivery available for urgent shipments
              </p>
            </div>

            <div className="text-center space-y-4 mt-6 lg:mt-0">
              <div className="flex justify-center">
                <div className="px-3 py-3 rounded-xl w-fit bg-indigo-400">
                  <GoShieldCheck className="text-indigo-900 text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Secure & Safe</h3>
              <p className="text-muted-foreground">
                Your packages are fully insured and handled with the utmost care
              </p>
            </div>

            <div className="text-center space-y-4 mt-6 lg:mt-0">
              <div className="flex justify-center">
                <div className="px-3 py-3 rounded-xl w-fit bg-indigo-400">
                  <FiUsers className="text-indigo-900 text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our customer service team is available around the clock to help
                you
              </p>
            </div>

            <div className="text-center space-y-4 mt-6 lg:mt-0">
              <div className="flex justify-center">
                <div className="px-3 py-3 rounded-xl w-fit bg-indigo-400">
                  <FaRegStar className="text-indigo-900 text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Trusted Service</h3>
              <p className="text-muted-foreground">
                Over 50,000 satisfied customers trust us with their deliveries
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:my-28 my-16">
        <div className="container w-5/6 mx-auto">
          {/* Testimonials Section */}
          <div className="text-center space-y-4 mb-5">
            <h2 className="text-2xl font-bold">What Our Customers Say</h2>
            <p className="font-light mx-auto">
              Dont just take our word for it - hear from our satisfied
              customers
            </p>
          </div>

          <ImageSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16 bg-primary text-primary-foreground">
        <div className="container w-5/6 mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Ship with SnappiGo?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their
            deliveries. Get started today and experience the difference.
          </p>
          <div className="flex justify-center">
            <button className="rounded-lg py-2 px-4 bg-purple-900 mt-9 shadow-md text-white">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
