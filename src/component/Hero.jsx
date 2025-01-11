import React, { useEffect } from "react";
import "../styles/Hero.css";
import coverimage from "../assets/Hero/heroimage.svg";
import studentsgroup from "../assets/image/Group 124.svg";
import tesla from "../assets/Hero/tesla.png";
import bmw from "../assets/Hero/bmw.png";
import oodd from "../assets/Hero/audi1.jpg";
import sap from "../assets/Hero/sap.png";
import lufthansa from "../assets/Hero/lufthansa2.png";

// New image
import t from "../assets/Hero/t.png";
import b from "../assets/Hero/b.png";
import a from "../assets/Hero/a.png";
import l from "../assets/Hero/l.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { logRoles } from "@testing-library/react";
import { Link } from "react-router-dom";

const Hero = () => {
  // useEffect

  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 50,
    });
  });
  return (
    <>
      <div className="herowrapper">
        <div className="container px-2 sm:px-12">
          <div className=" px-3 py-8 pb-4 sm:pb-8 sm:px-8 sm:py-8 lg:px-1 lg:py-8 xl:px-15">
            <div className="flex flex-col md:flex-col lg:flex-row items-center gap-3 md:justify-between lg:justify-between xl:justify-between">
              <div className="text-center lg:text-left pt-4 pb-3 sm:pt-8 sm:pb-0 ">
                <div
                  className="mb-5"
                  style={{ fontFamily: "Gilroy", fontWeight: "700" }}
                >
                  <p className="text-2xl sm:text-3xl mb-3">
                    Empowering dreams of
                  </p>
                  <h2 className="text-2xl sm:text-3xl xl:text-3xl mb-3  bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent">
                    Studying in Germany
                  </h2>
                  <button
                    className="bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] text-[#FFFFFF] rounded-xl px-3 py-2 sm:px-4 sm:py-1 lg:px-5 lg:py-2 font-semibold text-sm sm:text-md"
                    style={{ fontFamily: "Gilroy" }}
                  >
                    <Link to="/contact">Call for FREE counselling </Link>
                  </button>
                </div>
                {/* <div className="flex items-center mb-3 text-center md:text-left justify-center md:justify-start gap-1">
                  <img
                    src={studentsgroup}
                    alt="studentsgroup"
                    className="h-6 sm:h-10"
                  />
                  <p style={{ fontFamily: "Gilroy" }}>
                    <span className="bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent font-bold">
                      100%
                    </span>{" "}
                    guaranteed admission
                  </p>
                </div> */}
                <div
                  className="desktop-view"
                  style={{ fontFamily: "Gilroy-Regular" }}
                >
                  <p className="text-sm sm:text-md">
                    Our students finished University to work at{" "}
                    <span className="text-[#e27c00]">global offices</span> of
                  </p>
                </div>
              </div>

              <div className=" mobile-view-div flex flex-col items-center justify-center md:justify-start ml-2 sm:mb-0">
                <img
                  src={coverimage}
                  alt="coverimage"
                  className="w-full lg:h-80 xl:h-96 object-fill"
                />
                <div
                  className="mobile-view"
                  style={{ fontFamily: "Gilroy-Regular" }}
                >
                  <p className="text-sm sm:text-md">
                    Our students finished University to work at{" "}
                    <span className="text-[#e27c00]">global offices</span> of
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-wrap  space-x-4 sm:space-x-4 items-center mt-0 sm:mt-[-1rem] justify-center lg:justify-start xl:relative"
              style={{ top: "-40px" }}
            >
              <img
                src={t}
                alt="tesla"
                className="h-9 sm:h-12 w-7 sm:w-14 object-fill sm:object-contain"
              />
              <img
                src={b}
                alt="bmw"
                className=" h-9 sm:h-10 w-10 sm:w-10 md:w-14 object-fill sm:object-contain"
              />
              <img
                src={a}
                alt="oodd"
                className="h-18 sm:h-14 w-12 sm:w-16 md:w-20 object-fill sm:object-contain"
              />
              {/* <img
                src={sap}
                alt="sap"
                className="h-18 sm:h-12 w-12 sm:w-16 md:w-20 object-fill sm:object-contain"
              /> */}
              <img
                src={l}
                alt="lufthansa"
                className="h-18 sm:h-24 w-24 sm:w-32 md:w-40 object-fill sm:object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
