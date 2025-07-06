import React from "react";
import ImageSlider from "./ImageSlider";

const SliderSection = () => {
  return (
    <div>
      <section className="lg:my-28 my-16">
        <div className="container w-5/6 mx-auto">
          <div className="text-center space-y-4 mb-5">
            <h2 className="site-header ">What Our Customers Say</h2>
            <p className="site-subheading mx-auto">
              Dont just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <ImageSlider />
        </div>
      </section>
    </div>
  );
};

export default SliderSection;
