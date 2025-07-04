import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import TrackPackage from "./TrackPackage";
import TrackVideo from "./TrackVideo";

const HomeSection = () => {
  return (
    <div className="w-5/6 mx-auto  py-6">
      <div className="text-center mb-10">
        <h1 className="site-header">
          Discover the fastest and most reliable way to send your parcels
          anywhere!
        </h1>
      </div>
      <div className="text-center mb-20">
        <TrackPackage />
      </div>
      <TrackVideo />
    </div>
  );
};

export default HomeSection;
