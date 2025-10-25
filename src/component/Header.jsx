import React from "react";
import { IoIosCall } from "react-icons/io";
import { RiYoutubeLine } from "react-icons/ri";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

// flag images
import gmail from "../assets/header/gmail.png";
import germany from "../assets/header/germany.svg";
import whatsapp from "../assets/header/whatsapp.png";

const Header = () => {
  return (
    <div
      className="hidden sticky sm:flex justify-center px-16 py-6"
      style={{ fontFamily: "Gilroy-Medium", position: "sticky", zIndex: "1" }}
    >
      <div className="flex w-[75%]  flex-wrap md:space-x-14 lg:space-x-2">
        <p className="flex items-center space-x-1 text-xs">
          <span>
            <Link
              to="https://wa.me/8484977234"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsapp}
                alt="whatsapp"
                height={10}
                width={20}
                style={{ borderRadius: "3px" }}
              />
            </Link>
          </span>
          <span> +91-8484977234</span>
        </p>
        <p className="flex items-center space-x-1 text-xs">
          <span>
            <a href={`tel:+4917655471593`}>
              <IoIosCall fontSize="1rem" />
            </a>
          </span>
          <img
            src={germany}
            alt="germany"
            height={10}
            width={20}
            style={{ borderRadius: "3px" }}
          />
          <span> +49-17655471593</span>
        </p>
        <p className="flex items-center space-x-1 text-xs">
          <span>
            <a href="mailto:saurabh@germanywale.com">
              <img
                src={gmail}
                alt="gmail"
                height={10}
                width={20}
                style={{ borderRadius: "3px" }}
              />
            </a>
          </span>
          <span> saurabh@germanywale.com</span>
        </p>
      </div>
      <div className="flex space-x-4">
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
          href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHew-hMvUKd_AAAAY9ZN_rAu07_INrQoBX1IS_axiVStOj7Rt82XwhOLyqcUD-9UsbIQXYfQgN91Rgj-Ppc_5wVr7PGLQX-Hu2xZytqGVC390b8PuSeULKEPU01oudMFB57120=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F35885346%2Fadmin%2Ffeed%2Fposts%2F"
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
  );
};

export default Header;
