import React from "react";
import Image from "next/image";
const AboutSection = () => {
  return (
    <div>
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
            <div className="text-center">
              <div className="flex justify-center relative">
                <Image
                  src="/sourcing.jpg"
                  alt="fast delivery"
                  className="rounded-2xl"
                  width={500}
                  height={500}
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-[#2d0036]/20 rounded-2xl"
                  style={{ mixBlendMode: "multiply" }}
                ></div>
              </div>
              <h3 className="text-lg font-semibold mt-5">SOURCING</h3>
              <p className="text-muted-foreground w-11/12 mx-auto mt-2">
                Find the best products without the hassle. Our sourcing experts
                carefully screen suppliers, secure competitive prices, and
                handle delivery schedules — freeing you up to focus on growing
                your business with complete peace of mind.
              </p>
            </div>

            <div className="text-center mt-10 md:mt-0">
              <div className="flex justify-center relative">
                <Image
                  src="/logistic.jpg"
                  alt="fast delivery"
                  className="rounded-2xl"
                  width={500}
                  height={500}
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-[#2d0036]/20 rounded-2xl"
                  style={{ mixBlendMode: "multiply" }}
                ></div>
              </div>
              <h3 className="text-lg font-semibold mt-5">LOGISTICS</h3>
              <p className="text-muted-foreground w-11/12 mx-auto mt-2">
                Born from a strong foundation in ocean freight and rail
                transport, our company thrives on solving complex logistical
                challenges. We put your needs first, offering flexible, tailored
                solutions backed by a commitment to reliability and exceptional
                service.
              </p>
            </div>

            <div className="text-center mt-10 md:mt-0">
              <div className="flex justify-center relative">
                <Image
                  src="/precure.jpg"
                  alt="fast delivery"
                  className="rounded-2xl"
                  width={500}
                  height={500}
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-[#2d0036]/20 rounded-2xl"
                  style={{ mixBlendMode: "multiply" }}
                ></div>
              </div>
              <h3 className="text-lg font-semibold mt-5">PROCUREMENT</h3>
              <p className="text-muted-foreground w-11/12 mx-auto mt-2">
                Transform the way you procure. We manage the entire process —
                from finding the right vendors to finalizing contracts —
                ensuring every stage runs smoothly. The result? Reduced costs,
                greater efficiency, and more time for you to drive your business
                forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
