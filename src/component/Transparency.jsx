import React, { useEffect } from "react";
import "../styles/Transparency.css";
import HeroImage from "../assets/image/Herosvg.svg";
import t from "../assets/Transparency/transparency4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Transparency = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 50,
    });
  });
  return (
    <section className="overflow-hidden px-4 pt-4 sm:px-6 sm:pt-8 lg:px-10 lg:pt-10 ">
      <div className="container">
        <div className="mb-3">
          <h3
            className="text-center text-2xl sm:text-4xl font-bold mt-4 mb-1 overflow-hidden  bg-gradient-to-r from-[#ff9422]  to-[#d63715] bg-clip-text text-transparent"
            style={{ fontFamily: "Gilroy-Medium" }}
          >
            We Believe In 100% Transparency
          </h3>
          <p
            className="text-sm sm:text-xl"
            style={{ fontFamily: "Gilroy-Medium" }}
          >
            {" "}
            Simple, flexible, and powerful. Track all your applications with the
            convenience of your phone
          </p>
        </div>
        <div
          className="flex justify-center "
          style={{ fontFamily: "ZonaPro-Regular" }}
        >
          <img src={t} alt="transparencyimg" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Transparency;
