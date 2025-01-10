import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import logo from "../assets/image/footerlogo.png";
import qrCode from "../assets/image/qr.svg";
import "../styles/Footer.css";
import germany from "../assets/image/germanylogo.png";
import location from "../assets/image/location.svg";
import inbox from "../assets/image/inbox.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section
        className="bg-[#101010] text-[#FFFFFF] px-4 py-4 sm:px-4 sm:py-6 lg:px-3 lg:py-8"
        id="contact"
      >
        <div className="container">
          <div className="flex flex-wrap w-full md:flex-nowrap gap-2 sm:gap-0">
            {/* First Part: Logo and Social Icons */}
            {/* <div className="flex items-center flex-col w-full sm:w-72 ms-0 sm:ms-0 md:ms-16 mb-4 sm:mb-0 py-5 sm:py-0">
              <div>
                <img
                  src={logo}
                  alt="Logo"
                  className="w-64 sm:w-full h-10 sm:h-12 mb-4 sm:mb-6 object-fill"
                />
              </div>
              <div className="flex space-x-4 ">
               <Link to="/" className="text-3xl">
                  <FaInstagram />
                </Link>
               <Link to="/" className="text-3xl">
                  <FaFacebookF />
                </Link>
               <Link to="/" className="text-3xl">
                  <FaLinkedin />
                </Link>
               <Link to="/" className="text-3xl">
                  <RiYoutubeLine />
                </Link>
              </div>
              <div className="text-left py-4 px-4">
                <div className="flex gap-3 items-center">
                  <h4 className="inline">Hessen, Germany</h4>
                  <img
                    src={germany}
                    alt="germany"
                    height={10}
                    width={30}
                  />
                </div>
                <p>
                  Neckarstrasse 44, 64625-Bensheim, Hessen, Germany
                </p>
              </div>
            </div> */}

            {/* Second Part: Top Heading and List */}
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
                  <Link to="/contact">Bachelor in Germany</Link>
                </li>
                <li>
                  <Link to="/contact">Masters in Germany</Link>
                </li>
                <li>
                  <Link to="/contact">PhD in Germany</Link>
                </li>
                <li>
                  <Link to="/contact">MBA in Germany</Link>
                </li>
              </ul>
            </div>

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
                  <Link to="/visa">Study Visa</Link>
                </li>
                <li>
                  <Link to="/accomodation">Accomodation</Link>
                </li>
                <li>
                  <Link to="/study-germany">Service in Germany</Link>
                </li>
                <li>
                  <Link to="/contact">Service in India</Link>
                </li>
              </ul>
            </div>

            {/* Third Part: Top Heading and List */}
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
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/contact">Privacy Policies</Link>
                </li>
                <li>
                  <Link to="/contact">Refund Policies</Link>
                </li>
              </ul>
            </div>

            {/* Fourth Part: QR Code */}
            {/* <div className="flex items-center">
          </div> */}
            <div className="m-auto mb-0 sm:mb-2 md:mb-0 w-[40%] sm:w-max">
              {/* <div className="flex flex-wrap items-center border border-[#FFFFFF] rounded-3xl p-1 sm:p-4 mb-2">
                <div className="m-auto sm:m-0">
                  <img src={qrCode} alt="qr" className="m-auto qrimage" />
                </div>
                <div className="m-auto sm:m-0">
                  <h4
                    className="text-sm sm:text-xl mb-1 sm:mb-2"
                    style={{ fontFamily: "Gilroy-Medium" }}
                  >
                    Get in Touch
                  </h4>
                  <h2 className="text-md sm:text-xl font-semibold">NOW</h2>
                </div>
              </div> */}
              <div className="flex space-x-4 justify-center text-[#969696]">
                <Link
                  to="https://www.instagram.com/germanywale_official/"
                  className="text-2xl"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://www.facebook.com/germanywale.official"
                  className="text-2xl"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHew-hMvUKd_AAAAY9ZN_rAu07_INrQoBX1IS_axiVStOj7Rt82XwhOLyqcUD-9UsbIQXYfQgN91Rgj-Ppc_5wVr7PGLQX-Hu2xZytqGVC390b8PuSeULKEPU01oudMFB57120=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F35885346%2Fadmin%2Ffeed%2Fposts%2F"
                  className="text-2xl"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  to="https://www.youtube.com/@germanywale_official"
                  className="text-2xl"
                >
                  <RiYoutubeLine />
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-8 w-[90%] m-auto" />

          <div className="px-4 sm:px-4 lg:px-5 ">
            <div className="mb-2">
              <img src={logo} alt="logo" className="h-14 w-auto" />
            </div>
            <div className="flex flex-wrap justify-between sm:px-10">
              <div className="text-[#969696]">
                Copyrights reserved Germanywale, All rights reserved
              </div>
              <div className="text-[#A2A1A1] flex">
                <img src={germany} alt="flag" className="h-4 me-0 sm:me-2" />
                <span className="text-xs sm:text-md ms-1">
                  Neckarstrasse 44, 64625-Bensheim,Hessen,Germany
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
