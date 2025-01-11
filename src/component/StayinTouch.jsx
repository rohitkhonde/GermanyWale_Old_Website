import React from "react";
import email from "../../src/assets/image/email.png";
import { Link } from "react-router-dom";

const StayinTouch = () => {
  return (
    <div className="py-2 sm:py-16">
      <div className="bg-[#2A262A] text-[#FFFFFF]">
        <div className="container flex justify-around  px-4 py-4 sm:px-6 sm:py-8 lg:px-0 lg:py-10 flex-wrap sm:flex-nowrap w-full">
          <div className="text-left">
            <h3
              className="text-lg sm:text-xl md:text-3xl font-bold leading-tight mb-4"
              style={{ fontFamily: "Gilroy" }}
            >
              Let's stay in touch,
            </h3>
            <p className="text-sm w-72" style={{ fontFamily: "Gilroy-Medium" }}>
              Insights on the future of global ed and work aren't the only
              benefits
            </p>
          </div>
          <div className="w-full md:w-2/4 mt-5 sm:mt-0">
            <div className="bg-[#FFFFFF] text-[#000000] w-full flex justify-between items-center px-4 py-3 sm:px-6 sm:py-2 lg:px-10 lg:py-6 rounded-md">
              <div className="relative flex-grow">
                <img
                  src={email}
                  alt="email"
                  height="25"
                  width="25"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="text"
                  placeholder="Enter Email id"
                  className="pl-12 pr-4 py-3 w-full rounded-lg outline-none bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent text-sm sm:text-base lg:text-lg placeholder-[#ea7d06] focus:placeholder-transparent"
                  style={{ fontFamily: "Gilroy-Medium" }}
                />
              </div>
              <div className="ml-4">
                <button
                  className="bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] text-[#FFFFFF] px-4 py-2 sm:px-6 sm:py-2 font-semibold text-sm sm:text-lg"
                  style={{ fontFamily: "Gilroy" }}
                >
                  <Link to="/contact"> Keep me posted</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayinTouch;
