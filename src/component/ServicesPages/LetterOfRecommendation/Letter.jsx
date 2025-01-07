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
import ui from "../../../assets/ServicePageImages/Letter/Lt.jpg";
import ac from "../../../assets/ServicePageImages/Letter/LOR.jpeg";
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
          fill="currentColor"
          d="M6 11a2 2 0 0 1 2 2v4H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm-2 2v2h2v-2zm16 0v2h2v2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2v2zm-8-6v4h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7zm0 8h2v-2h-2z"
        ></path>
      </svg>
    ),
    title: "Our Writers Are Experts",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 2048 2048"
        className="text-[#EA7D06]"
      >
        <path
          fill="currentColor"
          d="M547 788q-29 51-71 79t-103 29q-40 0-73-11t-58-34t-37-54t-13-74q0-45 13-78t38-57t59-38t77-21l170-25q0-30-5-57t-19-48t-36-33t-57-13q-53 0-99 19t-86 54v-98q16-12 40-22t52-17t54-12t47-5q54 0 92 15t62 45t35 70t11 92v387h-91v-93zm-153 27q37 0 65-14t49-39t30-56t11-66v-60l-137 21q-28 5-51 11t-40 18t-26 33t-10 53q0 48 32 73t77 26m465-19v85h-91V0h91v391h2q33-59 87-89t121-30q63 0 107 25t72 67t41 94t13 108q0 61-14 120t-46 105t-80 76t-119 29q-57 0-105-25t-77-75zm0-241v83q0 39 12 71t36 56t55 37t71 13q51 0 85-23t54-60t28-80t9-87q0-39-8-77t-28-68t-51-48t-76-19q-45 0-80 15t-59 43t-36 64t-12 80m840-202q-50 0-87 20t-62 53t-37 76t-12 88t11 86t35 72t60 49t87 18q38 0 73-14t66-38v91q-35 23-74 32t-81 10q-65 0-115-23t-84-64t-53-95t-18-116q0-69 19-128t56-104t92-69t128-25q34 0 67 7t64 23v97q-30-22-64-34t-71-12M895 1829l724-722l90 90l-814 814l-428-430l90-90z"
        ></path>
      </svg>
    ),
    title: "Grammar, Spelling, Punctuation",
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
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.652 14.714V9.78m3.18 2.07l4.049 2.667a4 4 0 0 0 4.402 0l4.049-2.668m-12.5 0L3.099 10.05a.99.99 0 0 1-.45-.815m3.183 2.616v5.061c0 .495.119.987.44 1.364c.747.877 2.514 2.39 5.81 2.39s5.063-1.513 5.81-2.39c.32-.377.44-.869.44-1.364V11.85m0 0l2.48-1.634a1.2 1.2 0 0 0 0-2.004l-6.53-4.302a4 4 0 0 0-4.401 0L3.099 8.379a.99.99 0 0 0-.45.855m0 0v.547"
        ></path>
      </svg>
    ),
    title: "Academic And Work LORs",
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
const Letter = () => {
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
            Letter of Recommendation
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
                Letter Of Recommendation (LOR)
              </h2>
              <p className="university-description mb-6">
                Increase your chances of admission by taking our assistance in
                vouching for your skills and aptitude for formulating a ‘good’
                to ‘great’ Letter of Recommendation
              </p>
              <ul className="space-y-4">
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Check plagiarism{" "}
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Check spelling and grammatical errors
                </li>
                <li className="flex items-center li-text">
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
                </li>
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
    </div>
  );
};

export default Letter;
