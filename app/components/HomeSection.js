import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div className="w-5/6 mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Content - Text and Tracking */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Effortless Parcel <span className="block">Delivery and</span>
              <span className="block">Live Tracking</span>
              <span className="block">Delight</span>
            </h1>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Track Your Parcel
              </h2>

              <div className="flex gap-2">
                <div className="rounded-xl px-3 py-2 border border-gray-300">
                  <input
                    type="text"
                    placeholder="Enter tracking number"
                    className="flex-1 outline-none bg-transparent"
                  />
                </div>
                <button className="rounded-lg py-2 px-4 bg-purple-900 shadow-md text-white flex items-center gap-2">
                  <Search size={16} />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Center Content - Image */}
        <div className="flex justify-center">
          <Image
            src="/worker.jpg"
            alt="Delivery person with package"
            className="max-w-full h-auto rounded-2xl"
            width={500}
            height={500}
          />
        </div>

        {/* Right Content - Description and Badge */}
        <div className="space-y-8">
          <p className="text-muted-foreground text-lg leading-relaxed">
            We will pickup your parcel from your location as your entry request
            and we will deliver your parcel to your receiver by our delivery man
            very faster.
          </p>

          <div className="flex justify-start">
            <div className="relative inline-flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border-2 border-foreground bg-background flex items-center justify-center hover:bg-muted transition-colors cursor-pointer group">
                <div className="text-center space-y-1">
                  <div className="text-xs font-bold tracking-wider text-foreground">
                    EXPLORE
                  </div>
                  <div className="text-xs font-bold tracking-wider text-foreground">
                    MORE
                  </div>
                  <div className="w-4 h-4 mx-auto mt-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
