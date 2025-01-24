import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaUniversity,
  FaFileAlt,
  FaFileContract,
  FaEnvelope,
  FaBuilding,
  FaPassport,
  FaHome,
} from "react-icons/fa";
// import "./University.css";
import ui from "../../../assets/ServicePageImages/UniversityApp/ua.jpg";
import ac from "../../../assets/ServicePageImages/UniversityApp/universityApp.jpeg";
import Visa from "../VisaAssistance/Visa";
import Accomodation from "../Accomodation/Accomodation";
// import Universities from "../../../Universities";
const universities = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className="text-[#EA7D06]"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          d="M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10Zm6.643 4.696a6.75 6.75 0 0 0-1.62-2.673C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10m1-4.176L16.19 22L23 13"
        ></path>
      </svg>
    ),
    title: "We Are Experts",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className="text-[#EA7D06]"
      >
        <path
          fill="currentColor"
          d="M8.5 6H6.7C8.2 4.7 10 4 12 4c.3 0 .6 0 .9.1c.5.1 1-.3 1.1-.9c.1-.5-.3-1-.9-1.1c-.4-.1-.7-.1-1.1-.1c-2.4 0-4.7.9-6.5 2.4V3c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1M7 14.5c-.6 0-1 .4-1 1v1.8C4.7 15.8 4 14 4 12c0-.3 0-.6.1-.9c.1-.5-.3-1-.9-1.1c-.5-.1-1 .3-1.1.9c-.1.4-.1.7-.1 1.1c0 2.4.9 4.7 2.4 6.5H3c-.6 0-1 .4-1 1s.4 1 1 1h4c.3 0 .6-.2.8-.4c0-.1.1-.2.1-.3v-4.3c.1-.6-.3-1-.9-1m14-9c.6 0 1-.4 1-1s-.4-1-1-1h-4.2c-.1 0-.2.1-.3.1c-.1.1-.2.1-.2.2s-.1.2-.1.2v4.3c0 .6.4 1 1 1s1-.4 1-1V6.7c1.3 1.4 2 3.3 2 5.3c0 .3 0 .6-.1.9c-.1.5.3 1 .9 1.1h.1c.5 0 .9-.4 1-.9c0-.4.1-.7.1-1.1c0-2.4-.9-4.7-2.4-6.5zm-.7 11l-.3-.3c-.1-.1-.2-.1-.3-.1h-4.2c-.6 0-1 .4-1 1s.4 1 1 1h1.8c-1.4 1.3-3.3 2-5.3 2c-.3 0-.6 0-.9-.1c-.5-.1-1 .3-1.1.9s.3 1 .9 1.1c.4 0 .7.1 1.1.1c2.4 0 4.7-.9 6.5-2.4V21c0 .6.4 1 1 1s1-.4 1-1v-4c0-.2-.1-.4-.2-.5"
        ></path>
      </svg>
    ),
    title: "Process Oriented",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className="text-[#EA7D06]"
      >
        <path
          fill="currentColor"
          d="M16 13c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1m-4-7c3.859 0 7 3.141 7 7s-3.141 7-7 7s-7-3.141-7-7s3.141-7 7-7m0-2c-4.971 0-9 4.029-9 9s4.029 9 9 9s9-4.029 9-9s-4.029-9-9-9m1 6c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1zm-1-2c2.757 0 5 2.243 5 5s-2.243 5-5 5s-5-2.243-5-5s2.243-5 5-5m0-1a6 6 0 0 0 0 12a6 6 0 0 0 0-12"
        ></path>
      </svg>
    ),
    title: "We Value Time",
  },
];

const services = [
  {
    icon: FaUserGraduate,
    title: "Free Counselling",
    path: "/free-counselling",
  },
  {
    icon: FaUniversity,
    title: "University Shortlisting",
    path: "/university",
  },
  {
    icon: FaFileAlt,
    title: "Statement of Purpose",
    path: "/statement",
  },
  {
    icon: FaFileContract,
    title: "Curriculum Vitae",
    path: "/cv",
  },
  {
    icon: FaEnvelope,
    title: "Letter of Recommendation",
    path: "/letter",
  },
  {
    icon: FaBuilding,
    title: "University Application",
    path: "/universityapplication",
  },
  { icon: FaPassport, title: "Visa Assistance", path: "/visa" },
  {
    icon: FaHome,
    title: "Accommodation and Travel Assistance",
    path: "/accomodation",
  },
];
const UniversityApplicationdup = () => {
  const [selected, setSelected] = useState(""); // Store selected card
  const navigate = useNavigate(); // React Router navigation

  const handleClick = (title, path) => {
    setSelected(title); // Set the clicked card as selected
    navigate(path, { state: { selected: title } }); // Pass selected card to the target page
  };
  return (
    <div className="free-counselling-container">
      <div className="relative h-[300px] sm:h-[350px] md:h-[391px] lg:h-[450px] ">
        {/* Orange Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ac})`,
          }}
        ></div>
        {/* Content */}
        <div className="relative z-4 flex h-full items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            University Application{" "}
          </h1>
        </div>
      </div>

      <div className="our-services-section">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto p-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                  selected === service.title ? "bg-white" : "bg-[#FFFAF5]"
                }`}
                onClick={() => handleClick(service.title, service.path)}
                style={{
                  cursor: "pointer",
                }}
              >
                <service.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-[16px] font-medium text-center">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <img
                src={ui}
                alt="Graduation celebration"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                University Application{" "}
              </h2>
              <p className="university-description mb-6">
                Germanywale will assist students for the entire university
                application process till the time you reach Germany.Most German
                universities accept applications twice a year; for the summer
                semester and the winter semester. Applications can be sent
                through two channels; either directly to the university or
                through Uni-assist. Our local German team guides you through
                this entire process for a smooth and hassle free application
                step.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Online application submission
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Uni-assist application fee payment facility{" "}
                </li>
                {/* <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Give suggestion/feedback points
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Prepare proper evaluation report
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Delivery File Format: PDF and .docx
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Highlights
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {universities.map((university, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{
                backgroundColor: "#FFFAF5",
              }}
            >
              <div className="text-orange-500 text-2xl mb-2">
                {university.icon}
              </div>
              <h3 className="text-sm font-medium text-center">
                {university.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      {/* <Visa />
      <Accomodation /> */}
    </div>
  );
};

export default UniversityApplicationdup;
