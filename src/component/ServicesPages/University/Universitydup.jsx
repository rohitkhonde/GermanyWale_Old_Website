import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Use React Router for navigation
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
import Universitycomp from "../../Universitycomp";
import Statement from "../Statement/Statement";
import Cv from "../CV/Cv";
import Letter from "../LetterOfRecommendation/Letter";
import UniversityApplication from "../UniversityApplication/UniversityApplication";
import Visa from "../VisaAssistance/Visa";
import Accomodation from "../Accomodation/Accomodation";
import ac from "../../../assets/ServicePageImages/UniversityImage/university3.jpg";
import ui from "../../../assets/ServicePageImages/UniversityImage/universityPageimage.jpg";
import Statementdup from "../Statement/Statementdup";
import Cvdup from "../CV/Cvdup";
import Letterdup from "../LetterOfRecommendation/Letterdup";
import UniversityApplicationdup from "../UniversityApplication/UniversityApplicationdup";
import Visadup from "../VisaAssistance/Visadup";
import Accomodationdup from "../Accomodation/Accomodationdup";

const services = [
  {
    icon: FaUserGraduate,
    title: "Free Counselling",
    path: "free-counselling",
  },
  {
    icon: FaUniversity,
    title: "University Shortlisting",
    path: "university",
  },
  {
    icon: FaFileAlt,
    title: "Statement of Purpose",
    path: "statement",
  },
  {
    icon: FaFileContract,
    title: "Curriculum Vitae",
    path: "cv",
  },
  {
    icon: FaEnvelope,
    title: "Letter of Recommendation",
    path: "letter",
  },
  {
    icon: FaBuilding,
    title: "University Application",
    path: "universityapplication",
  },
  {
    icon: FaPassport,
    title: "Visa Assistance",
    path: "visa",
  },
  {
    icon: FaHome,
    title: "Accommodation and Travel Assistance",
    path: "accomodation",
  },
];

const Universitydup = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Refs for each component
  const sectionRefs = {
    "free-counselling": useRef(null),
    university: useRef(null),
    statement: useRef(null),
    cv: useRef(null),
    letter: useRef(null),
    universityapplication: useRef(null),
    visa: useRef(null),
    accomodation: useRef(null),
  };

  // Handle scrolling to the target section
  const scrollToSection = (section) => {
    const targetRef = sectionRefs[section]?.current;
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll to section on page load if there's a hash in the URL
  useEffect(() => {
    const section = location.state?.selected;
    if (section) {
      scrollToSection(section);
    }
  }, [location.state]);

  return (
    <div className="free-counselling-container">
      {/* Header Section */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[391px] lg:h-[450px] ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ac})`,
          }}
        ></div>
        <div className="relative z-4 flex h-full items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            University Shortlisting
          </h1>
        </div>
      </div>

      {/* Services Section */}
      <div className="our-services-section">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto p-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
                onClick={() => {
                  scrollToSection(service.path);
                  navigate("/", { state: { selected: service.path } }); // Update URL state
                }}
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
      </div>

      {/* Sections */}
      <div ref={sectionRefs.university} className="py-16">
        <Universitycomp />
      </div>
    </div>
  );
};

export default Universitydup;
