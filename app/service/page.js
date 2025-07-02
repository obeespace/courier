import React from 'react'
import { LuZap, LuMapPin  } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiTruck, FiGlobe, FiPackage, FiClock } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { PiCalculator } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { LuGitCompare } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import Image from 'next/image';
import medical from "../../public/medicalsupplies.jpg";
import legal from "../../public/legal.jpg";
import airpickup from "../../public/airportpickup.jpeg";
import freightservice from "../../public/FreightServices.jpeg";
import map from "../../public/map1.jpg";
import ontime from "../../public/ontime.jpg";
import safedelivery from "../../public/safedelivery.jpg";
import customersupport from "../../public/customersupport.jpeg";



const page = () => {
  return (
    <main>
        {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container w-5/6 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="w-fit mx-auto">
              Our Services
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Comprehensive
              <span className="text-primary block">Delivery Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From same-day local deliveries to international shipping, we offer a complete range of courier services
              tailored to meet your specific needs.
            </p>
            <div className='flex justify-center'>
            <button className='flex items-center rounded-lg py-2 px-4 cursor-pointer bg-purple-900 shadow-md text-white'>
              <FaRegFileAlt className="mr-2 h-5 w-5"/>
              Get Custom Quote
              
            </button></div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container w-5/6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional delivery solutions designed for businesses and individuals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Same Day Delivery */}
            <div className="hover:shadow-lg transition-shadow p-9 bg-gradient-to-br from-purple-50 via-gray-50 to-[#e0e7ff] rounded-2xl">
              
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <LuZap className="h-8 w-8 text-primary" />
                  </div>
                  <p variant="secondary">Most Popular</p>
                </div>
                <p className="text-2xl">Same Day Delivery</p>
                <p className="text-base mb-3">
                  Ultra-fast delivery service for urgent packages within the same city
                </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-primary">Delivery Time:</span>
                    <p>2-4 hours</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Coverage:</span>
                    <p>Major cities</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Max Weight:</span>
                    <p>50 lbs</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Tracking:</span>
                    <p>Real-time GPS</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                      Priority handling and routing
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                      SMS and email notifications
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                      Signature confirmation
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                      Photo proof of delivery
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">Starting at $15</span>
                    <button>Get Quote</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Express Shipping */}
            <div className="hover:shadow-lg shadow-sm transition-shadow p-9 border border-gray-300 rounded-2xl">
              
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FiTruck className="h-8 w-8 text-primary" />
                </div>
                <p className="text-2xl">Express Shipping</p>
                <p className="text-base mb-3">
                  Fast nationwide delivery with guaranteed next-day service
                </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-primary">Delivery Time:</span>
                    <p>Next business day</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Coverage:</span>
                    <p>Nationwide</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Max Weight:</span>
                    <p>150 lbs</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Cutoff Time:</span>
                    <p>3:00 PM</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                      Money-back guarantee
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                      Free packaging materials
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                      Delivery confirmation
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                      Up to $100 insurance included
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">Starting at $25</span>
                    <button variant="outline">Get Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="hover:shadow-lg shadow-sm transition-shadow p-9 border border-gray-300 rounded-2xl">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FiGlobe className="h-6 w-6 text-primary" />
                </div>
                <p>International Shipping</p>
                <p>Worldwide delivery with customs handling</p>
              </div>
              <div className='mt-4'>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                    200+ countries served
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                    Customs documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                    Duty and tax calculation
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">From $45</span>
                  <button variant="outline" size="sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="hover:shadow-lg shadow-sm transition-shadow p-9 border border-gray-300 rounded-2xl">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FiPackage className="h-6 w-6 text-primary" />
                </div>
                <p>Bulk Shipping</p>
                <p>Volume discounts for business customers</p>
              </div>
              <div className='mt-4'>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                    Up to 40% volume discounts
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                    API integration available
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">Custom Pricing</span>
                  <button variant="outline" size="sm">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>

            <div className="hover:shadow-lg shadow-sm transition-shadow p-9 border border-gray-300 rounded-2xl">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <GoShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <p>White Glove Service</p>
                <p>Premium handling for valuable items</p>
              </div>
              <div className='mt-4'>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                    Specialized handling
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                    Inside delivery & setup
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRegCircleCheck className="h-4 w-4 text-green-500" />
                    Enhanced insurance
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">From $75</span>
                  <button variant="outline" size="sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-muted/30">
        <div className="container w-11/12 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Specialized Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-specific delivery services for unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="pt-6">
                <Image src={medical} alt='medical deliveries' className='rounded-2xl'/>
                <h3 className="text-lg font-semibold mb-2 mt-5">Medical Deliveries</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Temperature-controlled transport for medical supplies and pharmaceuticals
                </p>
                <button className='rounded-lg py-2 px-4 border hover:bg-purple-900 hover:text-white border-purple-900 shadow-md text-purple-900'>
                  Learn More
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="pt-6">
                <Image src={legal} alt='medical deliveries' className='rounded-2xl'/>
                <h3 className="text-lg font-semibold mb-2 mt-5">Legal Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Secure document delivery with chain of custody for legal firms
                </p>
                <button className='rounded-lg py-2 px-4 border hover:bg-purple-900 hover:text-white border-purple-900 shadow-md text-purple-900'>
                  Learn More
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="pt-6">
                <Image src={airpickup} alt='medical deliveries' className='rounded-2xl'/>
                <h3 className="text-lg font-semibold mb-2 mt-5">Airport Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Direct airport pickup and delivery for time-sensitive shipments
                </p>
                <button className='rounded-lg py-2 px-4 border hover:bg-purple-900 hover:text-white border-purple-900 shadow-md text-purple-900'>
                  Learn More
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="pt-6">
                <Image src={freightservice} alt='medical deliveries' className='rounded-2xl'/>
                <h3 className="text-lg font-semibold mb-2 mt-5">Freight Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Large cargo and freight forwarding for industrial shipments
                </p>
                <button className='rounded-lg py-2 px-4 border hover:bg-purple-900 hover:text-white border-purple-900 shadow-md text-purple-900'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container w-5/6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Service Coverage</h2>
              <p className="text-muted-foreground text-lg">
                We provide comprehensive delivery services across multiple regions with expanding coverage areas.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <FaRegCircleCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Same-Day Service Areas</h4>
                    <p className="text-sm text-muted-foreground">New York, Los Angeles, Chicago, Houston, Phoenix</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaRegCircleCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Next-Day Coverage</h4>
                    <p className="text-sm text-muted-foreground">All 50 US states and major Canadian cities</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaRegCircleCheck className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">International Network</h4>
                    <p className="text-sm text-muted-foreground">200+ countries with trusted local partners</p>
                  </div>
                </div>
              </div>

              <button className='flex items-center rounded-lg mt-2 py-2 px-4 cursor-pointer bg-purple-900 shadow-md text-white'>
                <LuMapPin className="mr-2 h-5 w-5" />
                Check Service Area
              </button>
            </div>

            <div className="relative">
              
                <Image src={map} alt='map of the globe' className='rounded-4xl'/>
              
              {/* Coverage Stats */}
              <div className="absolute -top-4 -right-4 bg-white border rounded-lg p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-xs text-muted-foreground">Countries</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border rounded-lg p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Cities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator CTA */}
      <section className="py-20 bg-muted/30 text-white bg-gradient-to-br from-purple-950 via-indigo-950 to-pink-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Get Instant Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Use our pricing calculator to get accurate quotes for your specific delivery needs in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className='flex items-center rounded-lg py-2 px-4 cursor-pointer bg-purple-900 shadow-md text-white'>
                <PiCalculator className="mr-2 h-5 w-5" />
                Calculate Price
              </button>
              <button className='rounded-lg py-2 px-4 bg-white text-purple-900'>
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-20">
        <div className="container w-5/6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Service Guarantees</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We stand behind our services with industry-leading guarantees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="pt-8">
                <Image src={ontime} alt='on time' className='rounded-2xl'/>
                <h3 className="text-xl font-semibold mt-5 mb-2">On-Time Guarantee</h3>
                <p className="text-muted-foreground mb-3">
                  99.9% on-time delivery rate with money-back guarantee for express services
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-4 w-4 fill-green-500 text-green-500" />
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="pt-8">
                <Image src={safedelivery} alt='on time' className='rounded-2xl'/>
                <h3 className="text-xl font-semibold mt-5 mb-2">Safe Delivery Promise</h3>
                <p className="text-muted-foreground mb-3">
                  Full insurance coverage and secure handling for all packages with damage protection
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-4 w-4 fill-blue-500 text-blue-500" />
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="pt-8">
                <Image src={customersupport} alt='on time' className='rounded-2xl'/>
                <h3 className="text-xl font-semibold mt-5 mb-2">24/7 Support</h3>
                <p className="text-muted-foreground mb-3">
                  Round-the-clock customer support with dedicated account managers for business clients
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-4 w-4 fill-purple-500 text-purple-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Ship with SwiftCourier?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Choose the service that fits your needs and experience the SwiftCourier difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className='flex items-center rounded-lg py-2 px-4 cursor-pointer bg-purple-900 shadow-md text-white'>
              <RiCalendarScheduleLine className="mr-2 h-5 w-5"/>
              Schedule Pickup
            </button>
            <button
              className='flex items-center rounded-lg py-2 px-4 cursor-pointer border border-purple-900 shadow-md text-purple-900 hover:bg-purple-900 hover:text-white'
            >
              <LuGitCompare className="mr-2 h-5 w-5"/>
              Compare Services
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page