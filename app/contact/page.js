"use client";
import React, { useEffect, useState } from "react";
import contact1 from "../../public/contact1.jpg";
import contact2 from "../../public/contact2.jpg";
import contact3 from "../../public/contact3.jpeg";
import { FiMapPin, FiPhone, FiSend, FiClock } from "react-icons/fi";
import { LuMapPin, LuMessageSquareDot } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const images = [contact1, contact2, contact3];

const ContactPage = () => {
  const [toggle, setToggle] = useState(false);
  const handletoggle = () => {
    setToggle(!toggle);
  };
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const [activeFaq, setActiveFaq] = useState(null);
  const handleFaqToggle = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <main>
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Image
          src={images[current]}
          alt="carousel image"
          className="w-screen h-80 lg:h-96 lg:object-cover transition-all duration-700"
        />
        {/* Purple overlay for darkening the image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#2d0036]/85 z-10 pointer-events-none"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div
          className="absolute flex flex-col justify-center 
            items-center top-0 right-0 left-0 
            bottom-0 text-white w-5/6 mx-auto text-center z-20"
        >
          <p className="w-4/6 lg:w-full text-2xl mt-5 lg:text-4xl font-semibold">
            Contact SnappiGo
          </p>
          <p className="mt-3 font-thin lg:text-lg text-center">
            Have questions about our services? Need a custom quote? Our team is
            here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30 w-5/6 mx-auto">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <div className="pt-6 text-center shadow-lg rounded-2xl p-8 bg-gradient-to-br from-purple-50 via-gray-50 to-[#e0e7ff]">
                <div className="px-3 py-3 rounded-xl mb-3 w-fit bg-indigo-200 text-indigo-500 mx-auto">
                  <FiPhone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-sm text-muted-foreground text-gray-500 mb-5">
                  Call us anytime
                </p>
                <p className="font-medium">1-800-SWIFT-GO</p>
                <p className="text-sm text-muted-foreground">
                  (1-800-794-3846)
                </p>
              </div>
            </div>

            <div>
              <div className="pt-6 text-center shadow-lg rounded-2xl p-8 bg-gradient-to-br from-purple-50 via-gray-50 to-[#e0e7ff]">
                <div className="px-3 py-3 rounded-xl mb-3 w-fit bg-purple-200 text-purple-500 mx-auto">
                  <FiMapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-sm text-gray-600 text-muted-foreground mb-5">
                  Visit our headquarters
                </p>
                <p className="font-medium">123 Delivery Street</p>
                <p className="text-sm text-muted-foreground">
                  Logistics City, LC 12345
                </p>
              </div>
            </div>

            <div>
              <div className="pt-6 text-center shadow-lg rounded-2xl p-8 bg-gradient-to-br from-purple-50 via-gray-50 to-[#e0e7ff]">
                <div className="px-3 py-3 rounded-xl mb-3 w-fit bg-fuchsia-200 text-fuchsia-500 mx-auto">
                  <FiClock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Hours</h3>
                <p className="text-sm text-muted-foreground mb-5 text-gray-500">
                  We are here when you need us
                </p>
                <p className="font-medium">24/7 Support</p>
                <p className="text-sm text-muted-foreground">
                  Office: Mon-Fri 8AM-6PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 w-5/6 mx-auto">
        <div className="container ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="">
              <div className="space-y-4 mb-8">
                <h2 className="text-3xl font-bold">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we will get back to you within 24
                  hours.
                </p>
              </div>

              <div>
                <div>
                  <p className="flex items-center text-xl font-semibold gap-2">
                    <LuMessageSquareDot className="h-5 w-5 text-purple-700" />
                    Contact Form
                  </p>
                  <p>
                    Tell us about your delivery needs and we will provide a
                    customized solution.
                  </p>
                </div>
                <div>
                  {isSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <FaRegCircleCheck className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We will get back to you
                        within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2 flex flex-col">
                          <label htmlFor="firstName">First Name</label>
                          <div className="rounded-xl px-3 py-2 border border-gray-300">
                            <input className="flex-1 outline-none" />
                          </div>
                        </div>
                        <div className="space-y-2 flex flex-col">
                          <label htmlFor="">Last Name</label>
                          <div className="rounded-xl px-3 py-2 border border-gray-300">
                            <input className="flex-1 outline-none" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 flex flex-col">
                        <label htmlFor="">Email</label>
                        <div className="rounded-xl px-3 py-2 border border-gray-300">
                          <input className="flex-1 outline-none" />
                        </div>
                      </div>

                      <div className="space-y-2 flex flex-col">
                        <label htmlFor="firstName">Phone Number</label>
                        <div className="rounded-xl px-3 py-2 border border-gray-300">
                          <input className="flex-1 outline-none" />
                        </div>
                      </div>

                      <div className="space-y-2 flex flex-col">
                        <label htmlFor="firstName">Company (Optional)</label>
                        <div className="rounded-xl px-3 py-2 border border-gray-300">
                          <input className="flex-1 outline-none" />
                        </div>
                      </div>

                      <div className="space-y-2 flex flex-col">
                        <label htmlFor="service">Service Type</label>
                        <select
                          // value={gender} onChange={(e) => setGender(e.target.value)}
                          className="border rounded-xl border-gray-300 px-3 py-2 outline-none"
                        >
                          <option value="">--</option>
                          <option value="Male">Same Day Delivery</option>
                          <option value="Female">Express Shipping</option>
                          <option value="Female">International Shipping</option>
                          <option value="Female">Bulk Shipping</option>
                          <option value="Female">Custom Solution</option>
                          <option value="Female">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2 flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          className="border rounded-xl border-gray-300 px-3 py-2 outline-none"
                          placeholder="Tell us about your delivery needs, timeline, and any specific requirements..."
                          rows={5}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-fit flex gap-2 items-center rounded-lg py-2 px-4 bg-purple-900 shadow-md text-white"
                      >
                        <FiSend className="h-4 w-4" />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Find Us</h2>
                <p className="text-muted-foreground mb-6">
                  Visit our headquarters or any of our service centers across
                  the country.
                </p>
              </div>

              {/* Map Placeholder */}
              <div>
                <div className="p-0">
                  <div className="aspect-video bg-muted rounded-lg flex items-center bg-indigo-100 justify-center">
                    <div className="text-center space-y-2">
                      <LuMapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">
                        123 Delivery Street, Logistics City, LC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Centers */}
              <div className="">
                <div className="my-6">
                  <p className="text-xl font-semibold">Service Centers</p>
                  <p className="font-light">
                    Find a SnappiGo location near you
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="">
                    <p className="mb-1 font-semibold">New York Hub</p>
                    <p className="text-sm text-gray-600 text-muted-foreground">
                      456 Manhattan Ave, New York, NY 10001
                      <br />
                      Phone: (212) 555-0123
                      <br />
                      Hours: Mon-Fri 7AM-7PM, Sat 9AM-5PM
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-1">Los Angeles Hub</h4>
                    <p className="text-sm text-gray-600 text-muted-foreground">
                      789 Pacific Blvd, Los Angeles, CA 90210
                      <br />
                      Phone: (323) 555-0456
                      <br />
                      Hours: Mon-Fri 7AM-7PM, Sat 9AM-5PM
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold mb-1">Chicago Hub</h4>
                    <p className="text-sm text-gray-600 text-muted-foreground">
                      321 Lake Shore Dr, Chicago, IL 60601
                      <br />
                      Phone: (312) 555-0789
                      <br />
                      Hours: Mon-Fri 7AM-7PM, Sat 9AM-5PM
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-10">
                <div>
                  <p className="text-xl font-semibold">Quick Answers</p>
                  <p className="font-light">
                    Common questions about our services
                  </p>
                </div>
                <div className="mt-5">
                  <div>
                    <div onClick={() => handleFaqToggle(0)} className="py-7 px-5 shadow-md border border-white rounded-3xl cursor-pointer">
                      <p>Delivery</p>
                      <h4 className="font-semibold mb-2 ">
                        What are your delivery hours?
                      </h4>
                    </div>
                    {activeFaq === 0 && (
                      <p className="text-sm py-4 px-5">
                        We offer 24/7 delivery services. Standard deliveries are
                        made between 9AM-6PM, with express and emergency services
                        available around the clock.
                      </p>
                    )}
                  </div>

                  <div>
                    <div onClick={() => handleFaqToggle(1)} className="mt-5 py-7 px-5 shadow-md border border-white rounded-3xl cursor-pointer">
                      <p>Tracking</p>
                      <h4 className="font-semibold mb-2 ">
                        How can I track my package?
                      </h4>
                    </div>
                    {activeFaq === 1 && (
                      <p className="text-sm py-4 px-5">
                        Use our online tracking system with your tracking number,
                        or call our customer service line for real-time updates.
                      </p>
                    )}
                  </div>

                  <div>
                    <div onClick={() => handleFaqToggle(2)} className="mt-5 py-7 px-5 shadow-md border border-white rounded-3xl cursor-pointer">
                      <p>Insurance</p>
                      <h4 className="font-semibold mb-2 ">
                        Do you offer insurance?
                      </h4>
                    </div>
                    {activeFaq === 2 && (
                      <p className="text-sm py-4 px-5">
                        Yes, all packages are automatically insured up to $100.
                        Additional insurance coverage is available for high-value
                        items.
                      </p>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
