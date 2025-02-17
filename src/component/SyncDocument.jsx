import React, { useEffect } from "react";
import "../styles/SyncDocument.css";
import rightMobile from "../assets/sync/mobilescreen.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdDonutSmall, MdPlayArrow } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import ns from "../assets/sync/newsync3.png";

const SyncDocument = () => {
  // useEffect

  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 50,
    });
  });
  return (
    <section className="px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
      <div className="md:px-4 pt-4 container">
        <div>
          <div className=" h-full w-full flex flex-wrap sm:flex-nowrap space-x-0">
            <div className="w-full sm:w-[40%] ms-2 sm:ms-10 mt-0 sm:mt-10">
              <div className="flex mb-3 ">
                <div
                  className="text-left text-2xl sm:text-4xl font-bold mt-4 mb-4 overflow-hidden bg-gradient-to-r from-[#ff9422]  to-[#d63715] bg-clip-text text-transparent"
                  style={{ fontFamily: "Gilroy-Medium" }}
                >
                  Sync All Documents In The Cloud
                </div>
              </div>
              <div className="flex mb-1 ">
                <div className="syncText">
                  <MdDonutSmall className="syncTextIcon" />
                </div>

                <div
                  className="text-sm sm:text-lg text-left"
                  style={{ fontFamily: "Gilroy-Medium" }}
                >
                  Discover universities and courses.
                </div>
              </div>

              <div className="flex mb-1">
                <div className="syncText">
                  <MdDonutSmall className="syncTextIcon" />
                </div>
                <div
                  className="text-sm sm:text-lg text-left"
                  style={{ fontFamily: "Gilroy-Medium" }}
                >
                  Ask questions and interact with the community.
                </div>
              </div>
              <div className="flex mb-1">
                <div className="syncText">
                  <MdDonutSmall className="syncTextIcon" />
                </div>
                <div
                  className="text-sm sm:text-lg text-left"
                  style={{ fontFamily: "Gilroy-Medium" }}
                >
                  Latest study abroad news and updates.
                </div>
              </div>
              <div className="flex mb-1">
                <div className="syncText">
                  <MdDonutSmall className="syncTextIcon" />
                </div>
                <div
                  className="text-sm sm:text-lg text-left"
                  style={{ fontFamily: "Gilroy-Medium" }}
                >
                  Track applications and offers.
                </div>
              </div>
              <div className="flex mb-1">
                <div className="syncText">
                  <MdDonutSmall className="syncTextIcon" />
                </div>
                <div
                  className="text-sm sm:text-lg text-left"
                  style={{ fontFamily: "Gilroy-Medium" }}
                >
                  And a lot more.
                </div>
              </div>
              {/* <div className="flex justify-center sm:justify-start mt-8">
                <button
                  className="relative bg-gradient-to-r from-[#fbebe8] via-[#fbebe8] to-[#fbebe8] text-[#EA7D06] border-2 border-[#EA7D06] px-3 py-1 sm:px-3 sm:py-2 lg:px-6 lg:py-2 rounded-lg font-semibold text-sm sm:text-[1rem] hover:bg-gradient-to-r hover:from-[#ea7d06] hover:via-[#DF3C19] hover:to-[#DF3C19] hover:text-white hover:border-none"
                  style={{
                    fontFamily: "Gilroy-Medium",
                    letterSpacing: "0.6px",
                  }}
                >
                  Explore More
                </button>
              </div> */}
            </div>

            <div className="w-full sm:w-[60%] bg-white flex items-center justify-center">
              <div className="bg-white p-2">
                <img src={ns} alt="right" className="object-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyncDocument;
