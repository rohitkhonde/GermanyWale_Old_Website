import React, { useEffect, useRef, useState } from "react";

// images
import freecounselling from "../assets/testi/studysec/Free Counselling.svg";
import university from "../assets/testi/studysec/University Shortlisting.svg";
import statement from "../assets/testi/studysec/Statement of purpose.svg";
import curriculum from "../assets/testi/studysec/CV.svg";
import universityapplication from "../assets/testi/studysec/University Application.svg";
import recommendation from "../assets/studygermany/recommendateimg.svg";
import visa from "../assets/studygermany/visaimg.svg";

import accomodate from "../assets/studygermany/accomodate.svg";

// universities

import freecousellinIcon from "../assets/studygermany/freecousellinIcon.svg";
import universityIcon from "../assets/studygermany/universityIcon.svg";
import statementIcon from "../assets/studygermany/statementIcon.svg";
import curriculumIcon from "../assets/studygermany/curriculumIcon.svg";
import recommendateIcon from "../assets/studygermany/recommendateIcon.svg";
import universityapplicantIcon from "../assets/studygermany/universityapplicantIcon.svg";
import visaIcon from "../assets/studygermany/visaIcon.svg";
import accomodateIcon from "../assets/studygermany/accomodateIcon.svg";

// New images

import s1 from "../assets/Services/s1.png";
import s2 from "../assets/Services/s2.png";
// line

import gl from "../assets/studygermany/Germanylogo.webp";

import Webslider from "./slider/Webslider";
import Mobileslider from "./slider/Mobileslider";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const StudyGermany = () => {
  // useEffect

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 50,
    });
  });
  const [dividerHeight, setDividerHeight] = useState(0);
  const [strokeDashOffset, setStrokeDashOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const [isVisibletop, setIsVisibletop] = useState(true);
  const [isMobileVisibletop, setIsMobileVisibletop] = useState(true);

  const [isVisibleTabTop, setIsVisibleTabTop] = useState(true);
  const [isVisibleMobileTop, setIsVisibleMobileTop] = useState(true);

  const [isVisiblescroll, setIsVisiblescroll] = useState(true);
  const [isVisibleTabscroll, setIsVisibleTabscroll] = useState(true);
  const [isVisibleMobilescroll, setIsVisibleMobilescroll] = useState(true);

  const [isVisiblebottom, setIsVisiblebottom] = useState(true);
  const [isVisibleTabbottom, setIsVisibleTabbottom] = useState(true);
  const [isVisibleMobilebottom, setIsVisibleMobilebottom] = useState(true);

  useEffect(() => {
    const calculateDividerHeight = () => {
      const containerHeight = containerRef.current.clientHeight;
      setDividerHeight(containerHeight - 170);
    };

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      const offset = (100 - progress) * (1200 / 100);
      console.log(offset, "offset");
      setStrokeDashOffset(offset);

      // Check if the component is in the viewport
      const rect = containerRef.current.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    };

    calculateDividerHeight();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [strokeDashOffset]);

  // Scroll Aeroplane // for web screens

  useEffect(() => {
    if (strokeDashOffset - 400 <= 560 && strokeDashOffset - 400 >= 280) {
      console.log("True");
      setIsVisiblescroll(true);
    } else {
      console.log("false");
      setIsVisiblescroll(false);
    }
  }, [strokeDashOffset]);

  // Top Aeroplane
  useEffect(() => {
    if (strokeDashOffset - 400 >= 526) {
      setIsVisibletop(true);
    } else {
      setIsVisibletop(false);
    }
  }, [strokeDashOffset]);

  // mobile top aeroplane

  useEffect(() => {
    if (strokeDashOffset - 400 >= 670) {
      setIsVisibletop(true);
    } else {
      setIsVisibletop(false);
    }
  }, [strokeDashOffset]);

  // Bottom Aeroplane
  useEffect(() => {
    if (strokeDashOffset - 400 <= 276) {
      setIsVisiblebottom(true);
    } else {
      setIsVisiblebottom(false);
    }
  }, [strokeDashOffset]);

  // Scroll Animation for Tab screens

  useEffect(() => {
    if (strokeDashOffset - 400 <= 570 && strokeDashOffset - 400 >= 29) {
      console.log("True", strokeDashOffset - 400);
      setIsVisibleTabscroll(true);
    } else {
      console.log("false");
      setIsVisibleTabscroll(false);
    }
  }, [strokeDashOffset]);

  // Top Aeroplane
  useEffect(() => {
    if (strokeDashOffset - 400 >= 526) {
      setIsVisibleTabTop(true);
    } else {
      setIsVisibleTabTop(false);
    }
  }, [strokeDashOffset]);

  // Bottom Aeroplane
  useEffect(() => {
    if (strokeDashOffset - 400 <= 153) {
      setIsVisibleTabbottom(true);
    } else {
      setIsVisibleTabbottom(false);
    }
  }, [strokeDashOffset]);

  // Scroll Animation for Mobile screens

  useEffect(() => {
    if (strokeDashOffset - 400 <= 570 && strokeDashOffset - 400 >= 150) {
      console.log("True", strokeDashOffset - 400);
      setIsVisibleMobilescroll(true);
    } else {
      console.log("false");
      setIsVisibleMobilescroll(false);
    }
  }, [strokeDashOffset]);

  // Top Aeroplane
  useEffect(() => {
    if (strokeDashOffset - 400 >= 526) {
      setIsVisibleMobileTop(true);
    } else {
      setIsVisibleMobileTop(false);
    }
  }, [strokeDashOffset]);

  // Bottom Aeroplane
  useEffect(() => {
    if (strokeDashOffset - 400 <= 153) {
      setIsVisibleMobilebottom(true);
    } else {
      setIsVisibleMobilebottom(false);
    }
  }, [strokeDashOffset]);

  return (
    <>
      <div
        className="container px-4 py-4 sm:px-6 sm:py-8 lg:px-20 lg:py-10 w-full overflow-hidden"
        ref={containerRef}
        id="service"
      >
        <div className="text-left">
          <h3
            className="text-3xl sm:text-3xl font-bold mt-4 mb-14 overflow-hidden bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent text-center "
            style={{ fontFamily: "Gilroy" }}
          >
            Study In Germany With Us
          </h3>
        </div>
        {/* first */}

        <div className="relative">
          <div className="group group flex flex-col sm:flex-row justify-between py-0 sm:py-4 px-4 sm:px-10 ps-12 sm:ps-4 mb-1 hover:bg-[#FDF7F7]">
            <div className="w-[100%] sm:w-[40%] order-1 sm:order-1">
              <img
                src={freecounselling}
                alt="freecounselling"
                className="h-full w-10/12"
              />
            </div>
            <div className="w-[100%] sm:w-[45%] py-4 sm:py-0 p-0 sm:p-4 flex order-2 sm:order-2 ">
              <div className="h-full ">
                <img
                  src={freecousellinIcon}
                  alt="freecousellinIcon"
                  height="70"
                  width="70"
                />
              </div>
              <div className="text-left ms-2 mt-2">
                <h4
                  className="bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent text-2xl mb-2"
                  style={{ fontFamily: "Gilroy", fontWeight: "600" }}
                >
                  Free Counselling
                </h4>
                <p
                  style={{
                    fontFamily: "Gilroy-Medium",
                  }}
                  className="mb-3"
                >
                  Our personalized session at NO COST{" "}
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ fontFamily: "Gilroy-Regular" }}
                >
                  Get Free Expert Guidance on your Study Abroad dream and
                  shortlist courses from a plethora of 500+ Universities and
                  15,000+ courses.
                </p>

                <button
                  className="relative bg-gradient-to-r from-[#fbebe8] via-[#fbebe8] to-[#fbebe8] text-[#EA7D06] border-2 border-[#EA7D06] px-2 py-1 sm:px-3 sm:py-2 lg:px-5 lg:py-2 rounded-lg font-semibold text-sm sm:text-[1rem] group-hover:bg-gradient-to-r group-hover:from-[#ea7d06] group-hover:via-[#DF3C19] group-hover:to-[#DF3C19] group-hover:text-white group-hover:border-none"
                  style={{
                    fontFamily: "Gilroy-Medium",
                    letterSpacing: "0.6px",
                  }}
                >
                  <Link to="/university"> Explore More</Link>
                </button>
              </div>
            </div>
          </div>

          {/* second */}
          <div className="group flex flex-col sm:flex-row justify-between py-0 sm:py-4 ps-12 sm:ps-0 px-4 sm:px-10 mb-1 hover:bg-[#FDF7F7]">
            <div className="w-[100%] sm:w-[45%] py-4 sm:py-4 p-0 sm:p-4 flex order-2 sm:order-1">
              <div className="h-full ">
                <img
                  src={universityIcon}
                  alt="universityIcon"
                  height="70"
                  width="70"
                />
              </div>
              <div className="text-left ms-2 mt-2 ">
                <h4
                  className="bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent text-2xl mb-2"
                  style={{ fontFamily: "Gilroy", fontWeight: "600" }}
                >
                  University Shortlisting
                </h4>
                <p
                  style={{
                    fontFamily: "Gilroy-Medium",
                  }}
                  className="mb-3"
                >
                  50% Applications fail due to wrong choice of university
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ fontFamily: "Gilroy-Regular" }}
                >
                  Apply to multiple institutions in a single application with
                  numerous fee waivers and save your time.
                </p>

                <button
                  className="relative bg-gradient-to-r from-[#fbebe8] via-[#fbebe8] to-[#fbebe8] text-[#EA7D06] border-2 border-[#EA7D06] px-2 py-1 sm:px-3 sm:py-2 lg:px-5 lg:py-2 rounded-lg font-semibold text-sm sm:text-[1rem] group-hover:bg-gradient-to-r group-hover:from-[#ea7d06] group-hover:via-[#DF3C19] group-hover:to-[#DF3C19] group-hover:text-white"
                  style={{
                    fontFamily: "Gilroy-Medium",
                    letterSpacing: "0.6px",
                  }}
                >
                  <Link to="/university"> Explore More</Link>
                </button>
              </div>
            </div>
            <div className="w-[100%] sm:w-[40%] order-1 sm:order-2">
              <img
                src={university}
                alt="university"
                className="h-full w-10/12"
              />
            </div>
          </div>
          {/* third */}
          <div className="group flex flex-col sm:flex-row justify-between py-0 sm:py-4 ps-12 sm:ps-0 px-4 sm:px-10 mb-1 hover:bg-[#FDF7F7]">
            <div className="w-[100%] sm:w-[40%]">
              <img
                src={statement}
                alt="statement"
                className="h-56 w-10/12 object-fill"
              />
            </div>
            <div className="w-[100%] sm:w-[45%] py-4 sm:py-4 p-0 sm:p-4 flex ">
              <div className="h-full ">
                <img
                  src={statementIcon}
                  alt="statementIcon"
                  height="70"
                  width="70"
                />
              </div>
              <div className="text-left ms-2 mt-2">
                <h4
                  className="bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent text-2xl  mb-2"
                  style={{ fontFamily: "Gilroy", fontWeight: "600" }}
                >
                  Statement of purpose
                </h4>
                <p
                  style={{
                    fontFamily: "Gilroy-Medium",
                  }}
                  className="mb-3"
                >
                  Stand out from the crowd
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ fontFamily: "Gilroy-Regular" }}
                >
                  Get an Education Loan without Collateral within 3-5 working
                  days at competitive Interest Rates and clear the financial
                  hurdle.
                </p>

                <button
                  className="relative bg-gradient-to-r from-[#fbebe8] via-[#fbebe8] to-[#fbebe8] text-[#EA7D06] border-2 border-[#EA7D06] px-2 py-1 sm:px-3 sm:py-2 lg:px-5 lg:py-2 rounded-lg font-semibold text-sm sm:text-[1rem] group-hover:bg-gradient-to-r group-hover:from-[#ea7d06] group-hover:via-[#DF3C19] group-hover:to-[#DF3C19] group-hover:text-white"
                  style={{
                    fontFamily: "Gilroy-Medium",
                    letterSpacing: "0.6px",
                  }}
                >
                  <Link to="/statement"> Explore More</Link>
                </button>
              </div>
            </div>
          </div>
          {/* fourth */}
          <div className="group flex flex-col sm:flex-row justify-between py-0 sm:py-4 ps-12 sm:ps-0 px-4 sm:px-10 mb-1 hover:bg-[#FDF7F7]">
            <div className="w-[100%] sm:w-[45%] py-4 sm:py-4 p-0 sm:p-4 flex order-2 sm:order-1">
              <div className="h-full ">
                <img
                  src={curriculumIcon}
                  alt="curriculumIcon"
                  height="70"
                  width="70"
                />
              </div>
              <div className="text-left ms-2 mt-2">
                <h4
                  className="bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent text-2xl mb-2"
                  style={{ fontFamily: "Gilroy", fontWeight: "600" }}
                >
                  Curriculum Vitae
                </h4>
                <p
                  style={{
                    fontFamily: "Gilroy-Medium",
                  }}
                  className="mb-3"
                >
                  Full Assistance
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ fontFamily: "Gilroy-Regular" }}
                >
                  Send your money abroad securely for University Fees, GIC,
                  Living Expenses or a Blocked Account at the Lowest Exchange
                  Rates and fastest processing.
                </p>

                <button
                  className="relative bg-gradient-to-r from-[#fbebe8] via-[#fbebe8] to-[#fbebe8] text-[#EA7D06] border-2 border-[#EA7D06] px-2 py-1 sm:px-3 sm:py-2 lg:px-5 lg:py-2 rounded-lg font-semibold text-sm sm:text-[1rem] group-hover:bg-gradient-to-r group-hover:from-[#ea7d06] group-hover:via-[#DF3C19] group-hover:to-[#DF3C19] group-hover:text-white"
                  style={{
                    fontFamily: "Gilroy-Medium",
                    letterSpacing: "0.6px",
                  }}
                >
                  <Link to="/cv"> Explore More</Link>
                </button>
              </div>
            </div>
            <div className="w-[100%] sm:w-[40%] order-1 sm:order-2">
              <img
                src={curriculum}
                alt="curriculum"
                className="h-full w-10/12"
              />
            </div>
          </div>
          {/* fifth */}
          <div className="group flex flex-col sm:flex-row justify-between py-0 sm:py-4 ps-12 sm:ps-0 px-4 sm:px-10 mb-1 hover:bg-[#FDF7F7]">
            <div className="w-[100%] sm:w-[40%]">
              <img
                src={recommendation}
                alt="recommendate"
                className="h-56 w-10/12 object-fill"
              />
            </div>
            <div className="w-[100%] sm:w-[45%] py-4 sm:py-4 p-0 sm:p-4 flex ">
              <div className="h-full ">
                <img
                  src={recommendateIcon}
                  alt="recommendateIcon"
                  height="70"
                  width="70"
                />
              </div>
              <div className="text-left ms-2 mt-2">
                <h4
                  className="bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent text-2xl  mb-2"
                  style={{ fontFamily: "Gilroy", fontWeight: "600" }}
                >
                  Letter of recommendation
                </h4>
                <p
                  style={{
                    fontFamily: "Gilroy-Medium",
                  }}
                  className="mb-3"
                >
                  “Good” to “Great” - Letter of recommendation
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ fontFamily: "Gilroy-Regular" }}
                >
                  With our Visa Expert, fulfil the Visa application requirements
                  and apply for the Visa. We have a success rate of more than
                  95.5% Start Visa Application
                </p>

                <button
                  className="relative bg-gradient-to-r from-[#fbebe8] via-[#fbebe8] to-[#fbebe8] text-[#EA7D06] border-2 border-[#EA7D06] px-2 py-1 sm:px-3 sm:py-2 lg:px-5 lg:py-2 rounded-lg font-semibold text-sm sm:text-[1rem] group-hover:bg-gradient-to-r group-hover:from-[#ea7d06] group-hover:via-[#DF3C19] group-hover:to-[#DF3C19] group-hover:text-white"
                  style={{
                    fontFamily: "Gilroy-Medium",
                    letterSpacing: "0.6px",
                  }}
                >
                  <Link to="/letter"> Explore More</Link>
                </button>
              </div>
            </div>
          </div>
          {/* sixth */}
          <div className="group flex flex-col sm:flex-row justify-between py-0 sm:py-4 ps-12 sm:ps-0 px-4 sm:px-10 mb-1 hover:bg-[#FDF7F7]">
            <div className="w-[100%] sm:w-[45%] py-4 sm:py-4 p-0 sm:p-4 flex order-2 sm:order-1">
              <div className="h-full ">
                <img
                  src={universityapplicantIcon}
                  alt="universityapplicantIcon"
                  height="70"
                  width="70"
                />
              </div>
              <div className="text-left ms-2 mt-2">
                <h4
                  className="bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent text-2xl mb-2"
                  style={{ fontFamily: "Gilroy", fontWeight: "600" }}
                >
                  University Application
                </h4>
                <p
                  style={{
                    fontFamily: "Gilroy-Medium",
                  }}
                  className="mb-3"
                >
                  Successful and hassle free application
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ fontFamily: "Gilroy-Regular" }}
                >
                  Send your money abroad securely for University Fees, GIC,
                  Living Expenses or a Blocked Account at the Lowest Exchange
                  Rates and fastest processing.
                </p>

                <button
                  className="relative bg-gradient-to-r from-[#fbebe8] via-[#fbebe8] to-[#fbebe8] text-[#EA7D06] border-2 border-[#EA7D06] px-2 py-1 sm:px-3 sm:py-2 lg:px-5 lg:py-2 rounded-lg font-semibold text-sm sm:text-[1rem] group-hover:bg-gradient-to-r group-hover:from-[#ea7d06] group-hover:via-[#DF3C19] group-hover:to-[#DF3C19] group-hover:text-white"
                  style={{
                    fontFamily: "Gilroy-Medium",
                    letterSpacing: "0.6px",
                  }}
                >
                  <Link to="/universityapplication"> Explore More</Link>
                </button>
              </div>
            </div>
            <div className="w-[100%] sm:w-[40%] order-1 sm:order-2">
              <img
                src={universityapplication}
                alt="universityapplication"
                className="h-full w-10/12"
              />
            </div>
          </div>
          {/* seventh */}
          <div className="group flex flex-col sm:flex-row justify-between py-0 sm:py-4 ps-12 sm:ps-0 px-4 sm:px-10 mb-1 hover:bg-[#FDF7F7]">
            <div className="w-[100%] sm:w-[40%]">
              <img src={visa} alt="visa" className="h-56 w-10/12 object-fill" />
            </div>
            <div className="w-[100%] sm:w-[45%] py-4 sm:py-4 p-0 sm:p-4 flex ">
              <div className="h-full ">
                <img src={visaIcon} alt="visaIcon" height="70" width="70" />
              </div>
              <div className="text-left ms-2 mt-2">
                <h4
                  className="bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent text-2xl mb-2"
                  style={{ fontFamily: "Gilroy", fontWeight: "600" }}
                >
                  Visa Assistance
                </h4>
                <p
                  style={{
                    fontFamily: "Gilroy-Medium",
                  }}
                  className="mb-3"
                >
                  Visa to enter Germany
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ fontFamily: "Gilroy-Regular" }}
                >
                  With our Visa Expert, fulfil the Visa application requirements
                  and apply for the Visa. We have a success rate of more than
                  95.5%
                </p>

                <button
                  className="relative bg-gradient-to-r from-[#fbebe8] via-[#fbebe8] to-[#fbebe8] text-[#EA7D06] border-2 border-[#EA7D06] px-2 py-1 sm:px-3 sm:py-2 lg:px-5 lg:py-2 rounded-lg font-semibold text-sm sm:text-[1rem] group-hover:bg-gradient-to-r group-hover:from-[#ea7d06] group-hover:via-[#DF3C19] group-hover:to-[#DF3C19] group-hover:text-white"
                  style={{
                    fontFamily: "Gilroy-Medium",
                    letterSpacing: "0.6px",
                  }}
                >
                  <Link to="/visa"> Explore More</Link>
                </button>
              </div>
            </div>
          </div>

          {/* eight */}
          <div className="group flex flex-col sm:flex-row justify-between py-0 sm:py-4 ps-12 sm:ps-0 px-4 sm:px-10 mb-1 hover:bg-[#FDF7F7]">
            <div className="w-[100%] sm:w-[45%] py-4 sm:py-4 p-0 sm:p-4 flex order-2 sm:order-1">
              <div className="h-full ">
                <img
                  src={accomodateIcon}
                  alt="accomodateIcon"
                  height="70"
                  width="70"
                />
              </div>
              <div className="text-left ms-2 mt-2 ">
                <h4
                  className="bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent text-2xl mb-2"
                  style={{ fontFamily: "Gilroy", fontWeight: "600" }}
                >
                  Accomodation and travel assistance
                </h4>
                <p
                  style={{
                    fontFamily: "Gilroy-Medium",
                  }}
                  className="mb-3"
                >
                  Complete assistance for your travel & stay
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ fontFamily: "Gilroy-Regular" }}
                >
                  Struggling to find accommodation before moving to a new
                  country?Not anymore. Book your secure accommodation online and
                  stay stress-free.
                </p>

                <button
                  className="relative bg-gradient-to-r from-[#fbebe8] via-[#fbebe8] to-[#fbebe8] text-[#EA7D06] border-2 border-[#EA7D06] px-2 py-1 sm:px-3 sm:py-2 lg:px-5 lg:py-2 rounded-lg font-semibold text-sm sm:text-[1rem] group-hover:bg-gradient-to-r group-hover:from-[#ea7d06] group-hover:via-[#DF3C19] group-hover:to-[#DF3C19] group-hover:text-white"
                  style={{
                    fontFamily: "Gilroy-Medium",
                    letterSpacing: "0.6px",
                  }}
                >
                  <Link to="/accomodation"> Explore More</Link>
                </button>
              </div>
            </div>
            <div className="w-[100%] sm:w-[40%] order-1 sm:order-2">
              <img
                src={accomodate}
                alt="accomodate"
                className="h-56 w-10/12 object-fill"
              />
            </div>
          </div>
          {/* <div
          className="absolute top-0 left-[1%] sm:left-1/2"
          id="divider-line"
          style={{
            backgroundColor: "#FF9522",
            transform: "translateX(-30%)",
            width: "3px",
            height: dividerHeight,
          }}
        ></div> */}
          {/* <div
          className="absolute top-20 left-2 sm:left-[50%]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {isVisible && (
            <svg
              className="absolute top-0 left-5"
              width="5"
              height={dividerHeight}
              viewBox={`0 0 5 ${dividerHeight}`}
              style={{
                strokeDashoffset: strokeDashOffset - 400,
                strokeDasharray: dividerHeight - 1000,
              }}
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2={dividerHeight}
                fill="none"
                stroke="#0487F3"
                strokeWidth="0"
                strokeLinecap="square"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                id="triangle"
              />
            </svg>
          )}
        </div> */}

          {/* {isVisibletop && (
          <div
            className="absolute top-16 left-1 sm:left-[50%]"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <img
              src={aeroplane}
              alt="aero_plane"
              height="40"
              width="40"
            />
          </div>
        )}
        {isVisiblescroll && (
          <div
            className="fixed top-52  left-[5%] sm:left-[50%] "
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <img
              src={aeroplane}
              alt="aero_plane"
              height="40"
              width="40"
            />
          </div>
        )}
        {isVisiblebottom && (
          <div
            className="absolute bottom-[4.0625rem] sm:bottom-[-2rem] left-1 sm:left-[50%]"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <img
              src={aeroplane}
              alt="aero_plane"
              height="40"
              width="40"
            />
          </div>
        )} */}
          {/* <div
          className="absolute top-0 left-1 sm:left-[50%]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <img src={aim} alt="aero_plane" height="18" width="23" />
        </div> */}

          <Webslider
            dividerHeight={dividerHeight}
            isVisible={isVisible}
            isVisiblescroll={isVisiblescroll}
            isVisiblebottom={isVisiblebottom}
            isVisibletop={isVisibletop}
            strokeDashOffset={strokeDashOffset}
          />

          {window.innerWidth <= 640 && (
            <Mobileslider
              dividerHeight={dividerHeight}
              isVisible={isVisible}
              isVisiblescroll={isVisibleMobilescroll}
              isVisiblebottom={isVisibleMobilebottom}
              isVisibletop={isVisibleMobileTop}
              strokeDashOffset={strokeDashOffset}
            />
          )}
        </div>
      </div>
      <div className="min-h-[10px] flex items-center justify-center bg-white">
        <img
          src={gl} // Replace this with your image URL
          alt="Centered Logo"
          className="w-36 h-36 object-cover"
        />
      </div>
    </>
  );
};

export default StudyGermany;
