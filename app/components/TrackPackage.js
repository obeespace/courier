import React from "react";

const TrackPackage = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2 max-w-2xl mx-auto w-full">
        <div className="flex-1 w-full">
          <input
            placeholder="Enter tracking number"
            className="h-14 sm:h-16 w-full bg-transparent text-base sm:text-xl md:text-2xl lg:text-3xl rounded-xl border border-gray-300 px-4 sm:px-6 outline-none"
          />
        </div>
        <button className="h-14 sm:h-16 w-full sm:w-auto px-4 sm:px-8 rounded-xl bg-purple-900 shadow-md text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold flex items-center justify-center">
          Search
        </button>
      </div>
    </div>
  );
};

export default TrackPackage;
