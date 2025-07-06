import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiPackage } from "react-icons/fi";
import { RiGlobalLine } from "react-icons/ri";

const ServicesSection = () => {
  const serviceCards = [
    {
      id: 1,
      title: "Same Day Delivery",
      description: "Get your packages delivered within hours in major cities",
      icon: AiOutlineThunderbolt,
      iconBg: "bg-purple-200",
      iconColor: "text-purple-500",
      features: [
        "2-4 hour delivery",
        "Real-time tracking",
        "Signature confirmation",
      ],
    },
    {
      id: 2,
      title: "International Shipping",
      description: "Reliable worldwide delivery with customs handling",
      icon: RiGlobalLine,
      iconBg: "bg-indigo-200",
      iconColor: "text-indigo-500",
      features: ["200+ countries", "Customs clearance", "Insurance included"],
    },
    {
      id: 3,
      title: "Bulk Shipping",
      description: "Cost-effective solutions for high-volume shipping",
      icon: FiPackage,
      iconBg: "bg-fuchsia-200",
      iconColor: "text-fuchsia-500",
      features: ["Volume discounts", "Dedicated manager", "API integration"],
    },
  ];

  return (
    <div>
      <div className="w-5/6 mx-auto rounded-3xl py-20 ">
        {" "}
        <section>
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="site-header font-bold">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl site-paragraph mx-auto">
                Comprehensive delivery solutions tailored to meet your specific
                needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.id}
                    className="shadow-lg rounded-2xl p-8 bg-gradient-to-br from-purple-50 via-gray-50 to-[#e0e7ff]"
                  >
                    <div
                      className={`px-3 py-3 rounded-xl mb-3 w-fit ${card.iconBg} ${card.iconColor}`}
                    >
                      <IconComponent className="text-4xl " />
                    </div>
                    <p className="site-subheading flex gap-2 items-center mb-2">
                      {card.title}
                    </p>
                    <p className="mb-4 text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl  font-medium ">
                      {card.description}
                    </p>
                    <div>
                      <ul className="space-y-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium">
                        {card.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <IoMdCheckmarkCircleOutline className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View All Services Button */}
            <div className="flex justify-center mt-12">
              <button className="btn-primary">View All Services</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesSection;
