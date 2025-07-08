"use client";
import React, { useState } from "react";
import {
  Search,
  Package,
  Truck,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  MessageSquare,
  Download,
  Share,
  Bell,
  Send,
  User,
  Navigation,
} from "lucide-react";

const page = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [trackingData, setTrackingData] = useState(null);

  const mockTrackingData = {
    trackingNumber: "SC2024001234567",
    status: "in_transit",
    statusText: "In Transit",
    estimatedDelivery: "Today, 3:30 PM",
    progress: 75,
    sender: {
      name: "TechStart Inc.",
      address: "123 Business Ave, New York, NY 10001",
    },
    recipient: {
      name: "John Davis",
      address: "456 Delivery St, Brooklyn, NY 11201",
      phone: "+1 (555) 123-4567",
    },
    package: {
      weight: "2.5 lbs",
      dimensions: '12" x 8" x 4"',
      service: "Same Day Delivery",
      value: "$150.00",
    },
    timeline: [
      {
        status: "Package Picked Up",
        time: "9:15 AM",
        date: "Today",
        location: "New York, NY",
        completed: true,
        icon: Package,
      },
      {
        status: "In Transit to Facility",
        time: "10:30 AM",
        date: "Today",
        location: "Brooklyn Sorting Facility",
        completed: true,
        icon: Truck,
      },
      {
        status: "Out for Delivery",
        time: "2:45 PM",
        date: "Today",
        location: "Brooklyn, NY",
        completed: true,
        icon: Navigation,
        current: true,
      },
      {
        status: "Delivered",
        time: "3:30 PM (Est.)",
        date: "Today",
        location: "456 Delivery St",
        completed: false,
        icon: CheckCircle,
      },
    ],
    driver: {
      name: "Mike Rodriguez",
      phone: "+1 (555) 987-6543",
      vehicle: "Van #247",
      rating: 4.9,
    },
    liveLocation: {
      lat: 40.6892,
      lng: -74.0445,
      address: "Currently on Atlantic Ave, Brooklyn",
    },
  };

  const handleTrack = () => {
    if (!trackingNumber.trim()) return;

    setIsTracking(true);
    // Simulate API call
    setTimeout(() => {
      setTrackingData(mockTrackingData);
      setIsTracking(false);
    }, 1500);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-500";
      case "in_transit":
        return "bg-blue-500";
      case "picked_up":
        return "bg-amber-500";
      case "pending":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };
  return (
    <main className="min-h-screen">
      {/* Package Tracking Section */}
      <section className="w-5/6 mx-auto lg:py-32 py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">Track Your Package</h2>
            <p className="text-muted-foreground">
              Enter your tracking number to get real-time updates on your
              delivery
            </p>
            <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
              <div className="rounded-xl px-3 py-2 border border-gray-300">
                <input
                  placeholder="Enter tracking number"
                  className="flex-1 outline-none"
                />
              </div>
              <button className="rounded-lg py-2 px-4 bg-purple-900 shadow-md text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {/* {trackingData && ( */}
      <div className="space-y-6 md:w-5/6 w-11/12 mx-auto">
        {/* Status Overview */}
        <div className="shadow-lg border-0 bg-white/80 backdrop-blur">
          <div className="pt-6 p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-blue-300 animate-pulse`} />
                  <p className="text-sm font-medium">In-transit</p>
                </div>
                <h2 className="text-2xl font-bold">9876543221</h2>
                <p className="text-muted-foreground">
                  Estimated delivery:{" "}
                  <span className="font-semibold text-primary">
                    3.45pm Tomorrow
                  </span>
                </p>
              </div>

              <div className="flex gap-6">
                <button className="flex flex-col items-center">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </button>
                <button className="flex flex-col items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Receipt
                </button>
                <button className="flex flex-col items-center">
                  <Bell className="w-4 h-4 mr-2" />
                  Notify
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Delivery Progress</span>
                <span>75%</span>
              </div>
              {/* <Progress  className="h-2" /> */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Tracking Info */}
          <div className="col-span-2">
            {/* Live Map */}
            <div className="shadow-lg border-0 bg-white/80 p-8 rounded-2xl backdrop-blur">
              <p className="flex items-center gap-2 font-semibold text-xl mb-4">
                <MapPin className="w-5 h-5 text-violet-700" />
                Live Tracking
              </p>

              <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=60&width=60')] opacity-20"></div>

                {/* Mock Map Elements */}
                <div className="relative w-full h-full">
                  {/* Route Line */}
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-primary opacity-60"></div>
                  <div className="absolute top-1/4 left-3/4 w-px h-1/2 bg-primary opacity-60"></div>

                  {/* Start Point */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                  </div>

                  {/* Current Location (Animated) */}
                  <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Delivery Van
                    </div>
                  </div>

                  {/* End Point */}
                  <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                    <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <Navigation className="w-4 h-4 text-primary" />
                    <span className="font-medium">9 cali street, New York</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="shadow-lg border-0 p-8">
              <p className="flex items-center gap-2 font-semibold text-xl mb-4">
                <Clock className="w-5 h-5 text-fuchsia-700 text-primary" />
                Delivery Timeline
              </p>

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="py-1 px-3 bg-green-500 w-fit flex items-center rounded-full">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p>Package Picked Up</p>
                    <p className="text-sm text-gray-500">New York, NY</p>
                  </div>
                </div>
                <p className="text-sm">Today • 9:15 AM</p>
              </div>

              <div className="flex justify-between mt-7 items-center">
                <div className="flex gap-2">
                  <div className="py-1 px-3 bg-green-500 w-fit flex items-center rounded-full">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p>In Transit to Facility</p>
                    <p className="text-sm text-gray-500">
                      Brooklyn Sorting Facility
                    </p>
                  </div>
                </div>
                <p className="text-sm">Today • 10:30 AM</p>
              </div>

              <div className="flex justify-between mt-7 items-center">
                <div className="flex gap-2 animate-pulse">
                  <div className="py-1 px-3 bg-blue-500 w-fit flex items-center rounded-full">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex gap-3 items-center"><p>Out for Delivery</p><p className="text-xs px-2 py-1 bg-blue-100 rounded-xl">current</p></div>
                    <p className="text-sm text-gray-500">Brooklyn, NY</p>
                  </div>
                </div>
                <p className="text-sm">Today • 2:45 PM</p>
              </div>

              <div className="flex justify-between mt-7 text-gray-400 items-center">
                <div className="flex gap-2">
                  <div className="py-1 px-3 bg-gray-400 w-fit flex items-center rounded-full">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p>Delivered</p>
                    <p className="text-sm">456 Delivery St</p>
                  </div>
                </div>
                <p className="text-sm">Today • 2:45 PM</p>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Driver Info */}
            <div className="shadow-lg border-0 bg-white/80 backdrop-blur p-8">
              <p className="flex items-center gap-2 mb-4 font-semibold text-xl">
                <User className="w-5 h-5 text-indigo-700" />
                Your Driver
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div></div>
                  <div>
                    <p>Mike Rodriguez</p>
                    <p>Van #247</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    variant="outline"
                    size="sm"
                    className="flex gap-1 items-center rounded-lg py-2 px-4 border hover:bg-purple-900 hover:text-white border-purple-900 shadow-md text-purple-900"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </button>
                  <button
                    variant="outline"
                    size="sm"
                    className="flex gap-1 items-center rounded-lg py-2 px-4 border hover:bg-purple-900 hover:text-white border-purple-900 shadow-md text-purple-900"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </button>
                </div>
              </div>
            </div>

            {/* Package Details */}
            <div className="shadow-lg border-0 bg-white/80 backdrop-blur p-8">
              <p className="flex items-center gap-2 mb-4 font-semibold text-xl">
                <Package className="w-5 h-5 text-cyan-700" />
                Package Details
              </p>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Service</span>
                  <span className="text-sm font-medium">Same day delivery</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Weight</span>
                  <span className="text-sm font-medium">370lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Dimensions
                  </span>
                  <span className="text-sm font-medium">12" x 8" x 4"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Declared Value
                  </span>
                  <span className="text-sm font-medium">$150.00</span>
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="shadow-lg border-0 bg-white/80 backdrop-blur p-8">
              <p className="flex items-center gap-2 mb-4 font-semibold text-xl">
                <MapPin className="w-5 h-5 text-purple-700" />
                Addresses
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-1">From</h4>
                  <p className="text-sm text-muted-foreground">
                    TechStart Inc.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    123 Business Ave, New York, NY 10001
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-sm mb-1">To</h4>
                  <p className="text-sm text-muted-foreground">John Davis</p>
                  <p className="text-sm text-muted-foreground">
                    456 Delivery St, Brooklyn, NY 11201
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}

      {/* Quick Actions */}
      {!trackingData && (
        <div className="max-w-4xl mx-auto mt-16">
          <div className="border border-gray-300 p-10 rounded-2xl">
            <p className="text-xl font-semibold">Need Help?</p>
            <p className="mb-5">
              Can't find your tracking number or need assistance?
            </p>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="h-auto p-6 flex flex-col items-center gap-2 shadow-md">
                  <Phone className="w-6 h-6 text-primary" />
                  <p className="font-medium">Call Support</p>
                  <p className="text-xs text-muted-foreground">
                    1-800-SWIFT-GO
                  </p>
                </div>
                <div className="h-auto p-6 flex flex-col items-center gap-2 shadow-md">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <p className="font-medium">Live Chat</p>
                  <p className="text-xs text-muted-foreground">
                    Available 24/7
                  </p>
                </div>
                <div className="h-auto p-6 flex flex-col items-center gap-2 shadow-md">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  <p className="font-medium">Report Issue</p>
                  <p className="text-xs text-muted-foreground">
                    Missing package?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default page;
