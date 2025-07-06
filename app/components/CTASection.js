import React from "react";

const CTASection = () => {
  return (
    <div>
      <section className="mb-16 bg-primary text-primary-foreground py-10 sm:py-16">
        <div className="container w-[95vw] max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 px-2 sm:px-0">
          <h2 className="site-header text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Ready to Ship with SnappiGo?
          </h2>
          <p className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl mt-10 font-extrabold  mb-4 text-center">
            Get started today and experience the difference.
          </p>
          <div className="flex justify-center">
            <button className="btn-primary">Contact Sales</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
