import React from "react";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Fast Delivery",
    image: "/delivery.jpg",
    description:
      "Same-day and next-day delivery available for urgent shipments",
  },
  {
    id: 2,
    title: "Secure & Safe",
    image: "/secureandsafe.jpg",
    description:
      "Your packages are fully insured and handled with the utmost care",
  },
  {
    id: 3,
    title: "24/7 Support",
    image: "/support.jpeg",
    description:
      "Our customer service team is available around the clock to help you",
  },
  {
    id: 4,
    title: "Trusted Service",
    image: "/trust.jpg",
    description:
      "Over 50,000 satisfied customers trust us with their deliveries",
  },
];

const FeatureSection = () => {
  return (
    <div>
      <section className="py-20 lg:mt-20 mt-10 text-white bg-gradient-to-br from-purple-950 via-indigo-950 to-pink-950">
        <div className="container w-5/6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl font-bold">Why Choose SnappiGo?</h2>
            <p className="mx-auto font-light">
              We are committed to providing the best delivery experience
              possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            {features.map((feature, idx) => (
              <div
                key={feature.id}
                className={`text-center space-y-4${
                  idx > 0 ? " mt-10 md:mt-0" : ""
                }`}
              >
                <div className="flex justify-center relative">
                  <Image
                    src={feature.image}
                    alt={feature.title.toLowerCase()}
                    className="rounded-2xl"
                    width={400}
                    height={300}
                  />
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-[#2d0036]/50 rounded-2xl"
                    style={{ mixBlendMode: "multiply" }}
                  ></div>
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground w-5/6 mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
