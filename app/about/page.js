import React from "react";
import { FiTruck } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { GrTarget } from "react-icons/gr";
import { BsBinoculars } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { TbAward } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { FiGlobe } from "react-icons/fi";
import { LuZap } from "react-icons/lu";
import Image from "next/image";
import logistics from "../../public/logistic.jpg"; 

const page = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 w-5/6 mx-auto">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p variant="secondary" className="w-fit mx-auto mb-2">
              About SnappiGo
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Delivering Excellence
              <span className="text-primary block">Since 2015</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a courier service. We're your trusted partner
              in connecting people and businesses through fast, reliable, and
              secure delivery solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 w-5/6 mx-auto">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-purple-900">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                50K+
              </div>
              <div className="text-muted-foreground">Packages Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                99.9%
              </div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                9
              </div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-5/6 mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015 by a team of logistics experts, SnappiGo was
                  born from a simple idea: delivery services should be fast,
                  reliable, and accessible to everyone. What started as a small
                  local courier service has grown into a nationwide network
                  serving thousands of customers daily.
                </p>
                <p>
                  Our journey began when our founders noticed a gap in the
                  market for truly customer-centric delivery services.
                  Traditional courier companies were slow to adapt to changing
                  customer needs, and we saw an opportunity to do things
                  differently.
                </p>
                <p>
                  Today, we're proud to be one of the fastest-growing courier
                  services in the country, but we haven't forgotten our roots.
                  We still maintain the same commitment to personal service and
                  attention to detail that made us successful in the first
                  place.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image src={logistics} alt="picture or a dock" className="rounded-xl"/>
              {/* Timeline markers */}
              <div className="absolute -top-4 -right-4 bg-white text-black border rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <MdOutlineDateRange className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Est. 2015</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-black border rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <IoMdTrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Growing Strong</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 w-5/6 mx-auto">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by our core mission
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center shadow-lg rounded-2xl p-8 bg-gradient-to-br from-purple-50 via-gray-50 to-[#e0e7ff]">
              <div className="px-3 py-3 rounded-xl mb-8 w-fit bg-indigo-200 text-indigo-500 mx-auto">
                <GrTarget className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To connect people and businesses through innovative, reliable,
                and sustainable delivery solutions that exceed expectations and
                create lasting value.
              </p>
            </div>

            <div className="text-center shadow-lg rounded-2xl p-8 bg-gradient-to-br from-purple-50 via-gray-50 to-[#e0e7ff]">
              <div className="px-3 py-3 rounded-xl mb-8 w-fit bg-purple-200 text-purple-500 mx-auto">
                <BsBinoculars className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the world's most trusted and innovative courier service,
                setting the standard for excellence in logistics and customer
                experience.
              </p>
            </div>

            <div className="text-center shadow-lg rounded-2xl p-8 bg-gradient-to-br from-purple-50 via-gray-50 to-[#e0e7ff]">
              <div className="px-3 py-3 rounded-xl mb-8 w-fit bg-fuchsia-200 text-fuchsia-500 mx-auto">
                <FiAward className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Promise</h3>
              <p className="text-muted-foreground">
                Every package is handled with care, every delivery is made with
                precision, and every customer interaction is an opportunity to
                exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      {/* <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Speed</h4>
              <p className="text-sm text-muted-foreground">Fast delivery without compromising quality</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Reliability</h4>
              <p className="text-sm text-muted-foreground">Consistent service you can depend on</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Customer Focus</h4>
              <p className="text-sm text-muted-foreground">Your needs drive everything we do</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Innovation</h4>
              <p className="text-sm text-muted-foreground">Continuously improving our services</p>
            </div>
          </section> */}

    {/* Company Timeline */}
      <section className="py-20 text-white bg-gradient-to-br from-purple-950 via-indigo-950 to-pink-950">
        <div className="container w-5/6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in SnappiGo's growth and development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    2015
                  </div>
                  <div className="w-px h-16 bg-border mt-4"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">Company Founded</h3>
                  <p className="text-muted-foreground">
                    SnappiGo was established with a vision to revolutionize local delivery services. Started with a
                    small team and 3 delivery vehicles serving the metropolitan area.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    2017
                  </div>
                  <div className="w-px h-16 bg-border mt-4"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">Regional Expansion</h3>
                  <p className="text-muted-foreground">
                    Expanded operations to cover 5 major cities and launched our express shipping service. Introduced
                    real-time tracking technology for enhanced customer experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    2019
                  </div>
                  <div className="w-px h-16 bg-border mt-4"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">National Network</h3>
                  <p className="text-muted-foreground">
                    Achieved nationwide coverage and launched international shipping services. Opened 15 distribution
                    centers and reached 10,000 deliveries per month milestone.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    2021
                  </div>
                  <div className="w-px h-16 bg-border mt-4"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">Technology Innovation</h3>
                  <p className="text-muted-foreground">
                    Launched mobile app and API integration for business customers. Implemented AI-powered route
                    optimization and introduced eco-friendly delivery options.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    2024
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Industry Leadership</h3>
                  <p className="text-muted-foreground">
                    Recognized as the fastest-growing courier service with 50,000+ monthly deliveries. Expanded to serve
                    200+ countries and launched specialized industry solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container w-5/6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The experienced professionals driving SnappiGo's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="text-center border border-gray-400 px-5 py-10 rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">JS</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">John Smith</h3>
                <p className="text-primary font-medium mb-3">CEO & Founder</p>
                <p className="text-sm text-muted-foreground">
                  With over 15 years in logistics, John founded SnappiGo to revolutionize the delivery industry with
                  customer-first approach and innovative technology solutions.
                </p>
              </div>
            </div>

            <div>
              <div className="text-center border border-gray-400 px-5 py-10 rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">MJ</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Maria Johnson</h3>
                <p className="text-primary font-medium mb-3">Chief Operating Officer</p>
                <p className="text-sm text-muted-foreground">
                  Maria oversees daily operations and ensures our service quality remains consistently excellent across
                  all locations. She brings 12 years of operations management experience.
                </p>
              </div>
            </div>

            <div>
              <div className="text-center border border-gray-400 px-5 py-10 rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">DL</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">David Lee</h3>
                <p className="text-primary font-medium mb-3">Chief Technology Officer</p>
                <p className="text-sm text-muted-foreground">
                  David leads our technology initiatives, developing innovative solutions to enhance customer experience
                  and operational efficiency through cutting-edge logistics technology.
                </p>
              </div>
            </div>

            <div>
              <div className="text-center border border-gray-400 px-5 py-10 rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">SR</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sarah Rodriguez</h3>
                <p className="text-primary font-medium mb-3">VP of Customer Experience</p>
                <p className="text-sm text-muted-foreground">
                  Sarah ensures every customer interaction exceeds expectations. She leads our customer service team and
                  drives continuous improvement in service delivery.
                </p>
              </div>
            </div>

            <div>
              <div className="text-center border border-gray-400 px-5 py-10 rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">MT</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Michael Thompson</h3>
                <p className="text-primary font-medium mb-3">VP of Business Development</p>
                <p className="text-sm text-muted-foreground">
                  Michael drives strategic partnerships and business growth initiatives. He focuses on expanding our
                  service offerings and market presence.
                </p>
              </div>
            </div>

            <div>
              <div className="text-center border border-gray-400 px-5 py-10 rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">LC</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lisa Chen</h3>
                <p className="text-primary font-medium mb-3">Chief Financial Officer</p>
                <p className="text-sm text-muted-foreground">
                  Lisa manages financial strategy and ensures sustainable growth. She brings extensive experience in
                  financial planning and analysis from the logistics industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="container w-5/6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Awards & Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 gap-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <TbAward className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold">Best Courier Service 2023</h3>
              <p className="text-sm text-muted-foreground">Logistics Excellence Awards</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <HiOutlineUsers className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">Customer Choice Award</h3>
              <p className="text-sm text-muted-foreground">Service Industry Recognition</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <FiGlobe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Sustainability Leader</h3>
              <p className="text-sm text-muted-foreground">Green Business Certification</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <LuZap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Innovation Award</h3>
              <p className="text-sm text-muted-foreground">Tech in Logistics Summit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-muted/30">
        <div className="container w-5/6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Culture & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What makes SnappiGo a great place to work and partner with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-8">
            <div>
              <div className="pt-6">
                
                <h3 className="text-lg font-semibold mb-3">Team Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork and foster an environment where every voice is heard and valued.
                </p>
              </div>
            </div>

            <div>
              <div className="pt-6">
                
                <h3 className="text-lg font-semibold mb-3">Professional Growth</h3>
                <p className="text-muted-foreground">
                  We invest in our team's development through training programs, mentorship, and career advancement
                  opportunities.
                </p>
              </div>
            </div>

            <div>
              <div className="pt-6">
                
                <h3 className="text-lg font-semibold mb-3">Community Impact</h3>
                <p className="text-muted-foreground">
                  We're committed to giving back to the communities we serve through local partnerships and charitable
                  initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
