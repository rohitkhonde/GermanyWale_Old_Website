import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import logo from "../assets/image/footerlogo.png";
import germany from "../assets/image/germanylogo.png";
import india from "../assets/image/indialogo3.png";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        className="bg-[#101010] text-[#FFFFFF] px-4 py-4 sm:px-4 sm:py-6 lg:px-3 lg:py-8"
        id="contact"
      >
        <div className="container">
          <div className="flex flex-wrap w-full md:flex-nowrap gap-2 sm:gap-0">
            {/* First Part: Programs Section */}
            <div className="text-left mx-auto mb-4 sm:mb-0">
              <h4
                className="text-2xl font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent"
                style={{ fontFamily: "Gilroy" }}
              >
                Programs
              </h4>
              <ul
                className="space-y-2 footer-subhead text-[#A2A1A1]"
                style={{ fontFamily: "Gilroy-Medium" }}
              >
                <li>
                  <a href="/contact">Bachelor in Germany</a>
                </li>
                <li>
                  <a href="/contact">Masters in Germany</a>
                </li>
                <li>
                  <a href="/contact">PhD in Germany</a>
                </li>
                <li>
                  <a href="/contact">MBA in Germany</a>
                </li>
              </ul>
            </div>

            {/* Second Part: Services Section */}
            <div className="text-left mx-auto mb-4 sm:mb-0 ">
              <h4
                className="text-2xl font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent"
                style={{ fontFamily: "Gilroy" }}
              >
                Services
              </h4>
              <ul
                className="space-y-2 footer-subhead text-[#A2A1A1]"
                style={{ fontFamily: "Gilroy-Medium" }}
              >
                <li>
                  <a href="/visa">Study Visa</a>
                </li>
                <li>
                  <a href="/accomodation">Accommodation</a>
                </li>
                <li>
                  <a href="/study-germany">Service in Germany</a>
                </li>
                <li>
                  <a href="/contact">Service in India</a>
                </li>
              </ul>
            </div>

            {/* Third Part: Contact Section */}
            <div className="text-left mx-auto mb-4 sm:mb-0 ">
              <h4
                className="text-2xl font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent"
                style={{ fontFamily: "Gilroy" }}
              >
                Contact
              </h4>
              <ul
                className="space-y-2 footer-subhead text-[#A2A1A1]"
                style={{ fontFamily: "Gilroy-Medium" }}
              >
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/terms">Terms and Condition</a>
                </li>
                <li>
                  <a href="/privacyandrefund">Privacy Policies</a>
                </li>
                <li>
                  <a href="/privacyandrefund">Refund Policies</a>
                </li>
              </ul>
            </div>

            {/* Fourth Part: Social Media Links */}
            <div className="m-auto mb-0 sm:mb-2 md:mb-0 w-[40%] sm:w-max">
              <div className="flex space-x-4 justify-center text-[#969696]">
                <a
                  href="https://www.instagram.com/germanywale_official/"
                  className="text-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/germanywale.official"
                  className="text-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/company/35885346/"
                  className="text-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.youtube.com/@germanywale_official"
                  className="text-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiYoutubeLine />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Divider */}
          <hr className="my-8 w-[90%] m-auto" />

          {/* Footer Bottom Section */}
          <div className="px-4 sm:px-4 lg:px-5 ">
            <div className="mb-2">
              {/* Logo: Clickable, scrolls to top, and redirects to home */}
              <Link to="/" onClick={scrollToTop}>
                <img
                  src={logo}
                  alt="logo"
                  className="h-14 w-auto cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex flex-wrap justify-between sm:px-10">
              <div className="text-[#969696]">
                Copyrights reserved Germanywale, All rights reserved
              </div>
              <div className="text-[#A2A1A1] flex flex-col">
                {/* Germany Address */}
                <div className="flex items-center mb-2">
                  <img src={germany} alt="flag" className="h-4 me-2" />
                  <span className="text-xs sm:text-md">
                    {/* Neckarstrasse 44, 64625-Bensheim, Hessen, Germany */}
                    Neckarstrasse, Bensheim, Hessen, Germany
                  </span>
                </div>

                {/* India Address */}
                <div className="flex items-center">
                  <img src={india} alt="flag" className="h-5 me-2" />
                  <span className="text-xs sm:text-md">
                    Dalal Compound, Near MSEB office, Katol road, Nagpur
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
