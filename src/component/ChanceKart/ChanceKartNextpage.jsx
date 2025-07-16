import React from "react";
import { Star } from "lucide-react";
import News from "../News";
import Footer from "../Footer";
// import News from "./News";
// import Footer from "./Footer";

const ChanceKartNextpage = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Making Your Move to <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Germany Smoother.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Beyond job applications, we assist with essential
            <br />
            relocation services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Blocked Account"
            imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            rating={4}
            starPosition="top"
          />
          <ServiceCard
            title="German Language Courses"
            imageSrc="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            rating={3}
            starPosition="left"
          />
          <ServiceCard
            title="Personal Appointment"
            imageSrc="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            rating={5}
            starPosition="right"
          />
          <ServiceCard
            title="Accommodation"
            imageSrc="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            rating={2}
            starPosition="bottom"
          />
        </div>
      </div>
      {/* <div> */} <News />
      {/* <Footer /> */}
      {/* </div> */}
    </main>
  );
};

const ServiceCard = ({ title, imageSrc, rating, starPosition }) => {
  // Position styles for the star
  const positionStyles = {
    top: "-top-2 left-1/2 transform -translate-x-1/2",
    left: "-left-2 top-1/2 transform -translate-y-1/2",
    right: "-right-2 top-1/2 transform -translate-y-1/2",
    bottom: "-bottom-2 left-1/2 transform -translate-x-1/2",
  };

  return (
    // <>
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="h-48 relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-4">{title}</h3>
        <div className="flex justify-between items-center">
          <a
            href="/accomodation"
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-md flex items-center"
          >
            Apply Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <div className="relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-red-500 p-0.5">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="font-medium">{rating}</span>
              </div>
            </div>
            <Star
              className={`absolute w-4 h-4 text-orange-400 fill-orange-400 ${positionStyles[starPosition]}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChanceKartNextpage;
