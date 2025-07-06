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
          {/* Ship an item Button */}
          <div className="absolute  right-8">
            <button className="btn-ghost">
              Ready to Ship Your Item?
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SliderSection;
