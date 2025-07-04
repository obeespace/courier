import React from "react";

const TrackVideo = () => {
  return (
    <div className="w-full flex justify-center items-center my-12">
      <video
        className="w-full max-w-7xl h-[80vh] object-cover rounded-xl shadow-lg"
        controls
        autoPlay
        loop
        muted
      >
        <source
          src="https://res.cloudinary.com/dqwfjxn8g/video/upload/v1751641503/5118040_Man_Caucasian_3840x2160_tnpd6d.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TrackVideo;
