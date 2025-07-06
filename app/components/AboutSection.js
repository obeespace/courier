import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const serviceItems = [
    {
      id: 1,
      title: "SOURCING",
      image: "/sourcing.jpg",
      description:
        "Find the best products without hassle. Our experts screen suppliers.",
    },
    {
      id: 2,
      title: "LOGISTICS",
      image: "/logistic.jpg",
      description:
        "Solving complex logistical challenges with flexible solutions.",
    },
    {
      id: 3,
      title: "PROCUREMENT",
      image: "/precure.jpg",
      description:
        "Transform your procurement process. We manage vendors to contracts.",
    },
  ];

  return (
    <div className="relative">
      <div className="w-5/6 mx-auto rounded-3xl py-20 ">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="site-header">A Little on Us</h2>
            <p className="site-paragraph max-w-2xl mx-auto">
              SnappiGo was born from a simple idea: delivery services should be
              fast, reliable, and accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
            {serviceItems.map((item, index) => (
              <div
                key={item.id}
                className={`text-center p-16 ${
                  index > 0 ? "mt-10  md:mt-0" : ""
                } ${index === 1 ? "bg-purple-50 p-6 rounded-2xl" : ""}`}
              >
                <div className="flex justify-center relative">
                  <Image
                    src={item.image}
                    alt={item.title.toLowerCase()}
                    className="rounded-2xl"
                    width={500}
                    height={500}
                  />
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-[#2d0036]/20 rounded-2xl"
                    style={{ mixBlendMode: "multiply" }}
                  ></div>
                </div>
                <h3 className="site-subheading mt-5">{item.title}</h3>
                <p className="text-muted-foreground site-paragraph w-11/12 mx-auto mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          {/* Read More Button */}
          <div className="absolute bottom-8 right-8">
            <button className="btn-ghost">
              Read More
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
