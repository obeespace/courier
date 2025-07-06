import React from "react";

const CTASection = () => {
  return (
    <div>
      <section className="mb-16 bg-primary text-primary-foreground">
        <div className="container w-5/6 mx-auto text-center space-y-8">
          <h2 className="site-header">Ready to Ship with SnappiGo?</h2>
          <p className="site-subheading opacity-90 max-w-2xl mx-auto">
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
