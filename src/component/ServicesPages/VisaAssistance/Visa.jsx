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
import ui from "../../../assets/ServicePageImages/Visa/Visa.png";
import ac from "../../../assets/ServicePageImages/Visa/visaimage.jpeg";
import Accomodationdup from "../Accomodation/Accomodationdup";
import Universitydup from "../University/Universitydup";
import Statementdup from "../Statement/Statementdup";
import Cvdup from "../CV/Cvdup";
import Letterdup from "../LetterOfRecommendation/Letterdup";
import UniversityApplicationdup from "../UniversityApplication/UniversityApplicationdup";
// import vi from "../../../../assets/ServicePageImages/Visa/visaicon.png";
// import Universities from "../../../Universities";
const universities = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        className="text-[#EA7D06]"
      >
        <g fill="currentColor">
          <path d="M16.13 13.69c-.54 0-1.05-.13-1.48-.36c-.15-.08-.3.09-.21.23c.36.55.98.92 1.69.92s1.33-.37 1.69-.92c.09-.14-.07-.3-.21-.23c-.43.23-.93.36-1.48.36m-.84-1.67l.53-1.71c.11-.37.65-.37.76 0l.53 1.71c.11.35-.15.71-.52.71h-.78c-.37 0-.63-.36-.52-.71M13.684 9.2c-.67 0-1.23.46-1.39 1.08c-.04.18.1.35.28.35h.446a.913.913 0 0 1 .88-1.15a.915.915 0 0 1 .88 1.15h.074c.15 0 .26-.13.23-.28c-.13-.65-.71-1.15-1.4-1.15m4.89 0c.67 0 1.23.46 1.39 1.08c.04.18-.09.35-.27.35h-.444q.03-.12.03-.24c0-.5-.41-.91-.91-.91a.9.9 0 0 0-.91.91q0 .12.03.24h-.076a.23.23 0 0 1-.23-.28c.12-.65.69-1.15 1.39-1.15"></path>
          <path d="M13.9 9.87a.516.516 0 0 1 .46.76h-.92a.52.52 0 0 1 .016-.513a.16.16 0 1 0 .24-.207a.5.5 0 0 1 .204-.04m4.47 0a.5.5 0 0 0-.19.035a.16.16 0 1 1-.244.196a.52.52 0 0 0-.026.529h.92q.06-.105.06-.24c0-.29-.23-.52-.52-.52m-5.736-1.344a.274.274 0 0 1-.169-.489a2.7 2.7 0 0 1 1.9-.467a.274.274 0 0 1 .14.483a.27.27 0 0 1-.2.057a2.2 2.2 0 0 0-1.5.355a.27.27 0 0 1-.171.061m7.009 0c-.06 0-.12-.02-.167-.057a2.24 2.24 0 0 0-1.5-.355a.274.274 0 0 1-.063-.544a2.72 2.72 0 0 1 1.9.467a.274.274 0 0 1-.17.489"></path>
          <path d="M8.14 1.5c-.716 0-1.3.584-1.3 1.3s.584 1.3 1.3 1.3h1.846l-.25.52q-.196.229-.345.5l-.003.006a2.9 2.9 0 0 0 .179 2.995l.002.004q.18.26.18.595v.27a2.17 2.17 0 0 0-.7 1.6c0 .632.271 1.2.7 1.596v.704c0 1.104.677 2.095 1.7 2.493q.14.224.301.428a11.5 11.5 0 0 0-2.944 1.717a.5.5 0 0 0-.156.088a11.53 11.53 0 0 0-3.724 5.772A11.5 11.5 0 0 0 4.5 26.5V30a.5.5 0 0 0 .5.5h21.99a.5.5 0 0 0 .5-.5v-3.514a11.45 11.45 0 0 0-3.843-8.571a11.5 11.5 0 0 0-3.1-1.98q.262-.305.465-.655a2.68 2.68 0 0 0 1.468-2.39v-.695a2.176 2.176 0 0 0 0-3.217V8.72c0-.203.066-.413.19-.593a2.85 2.85 0 0 0-.144-3.497l-.256-.53h1.34v7.322a1.36 1.36 0 0 0-.203 1.814q-.128.181-.195.398l-.004.014l-.58 2.107a.875.875 0 0 0 .842 1.115h2.07c.581 0 1-.556.842-1.114l-.57-2.106l-.005-.02a1.4 1.4 0 0 0-.194-.39a1.36 1.36 0 0 0-.203-1.819V2.8a.5.5 0 0 0-.016-.126A1.303 1.303 0 0 0 24.1 1.5zm13.629 9.989a1.17 1.17 0 0 1-.649.267l-.432.036l-.1 1.7a3.47 3.47 0 0 1-3.434 3.006h-1.9a3.466 3.466 0 0 1-3.43-2.974l-.132-1.767h-.468a1.17 1.17 0 0 1-.143-2.331l.47-.057l-.087-1.288a2.92 2.92 0 0 1 .818-1.994l2.232.365h.007c.77.114 1.55.144 2.327.089a3 3 0 0 0 1.717.549h1.4a.98.98 0 0 1 .935 1.008l-.059 1.259l.422.089a1.17 1.17 0 0 1 .524 2.027zM11.5 24.74c0-.28.22-.5.5-.5s.5.22.5.5v4.76h-1zm4 0c0-.28.22-.5.5-.5s.5.22.5.5v4.76h-1zm4 0c0-.28.22-.5.5-.5s.5.22.5.5v4.76h-1zm-4.43-6.46a3.5 3.5 0 0 1-.697-.872q.433.09.881.09h1.9q.212 0 .42-.021a3.4 3.4 0 0 1-.654.803l-.65.58c-.16.14-.39.14-.55 0zm9.27-6.156a.5.5 0 0 0 .17-.144a.5.5 0 0 0 .17.144a.36.36 0 0 1-.03.65a.5.5 0 0 0-.14.086a.5.5 0 0 0-.138-.087a.36.36 0 0 1-.032-.649m.03 1.573a.5.5 0 0 0 .139-.086a.5.5 0 0 0 .136.086c.093.039.17.12.206.225l.526 1.948h-1.743l.536-1.95a.35.35 0 0 1 .2-.223"></path>
        </g>
      </svg>
    ),
    title: "Student Visa",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 24 24"
        className="text-[#EA7D06]"
      >
        <path
          fill="currentColor"
          d="M16 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0 0 18.06 7h-.12a2 2 0 0 0-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5M5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4z"
        />
      </svg>
    ),
    title: "Family Reunion Visa",
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
const Visa = () => {
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
            Visa Assistance{" "}
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
                Visa Assistance
              </h2>
              <p className="university-description mb-6">
                There are different types of Visas offered by the German embassy
                based on your purpose of travel and duration of stay which
                includes study visa, tourist or visitor visa, job seeker visa,
                working and business visa, etc.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Visa appointment booking{" "}
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Documents preparation, review and application assistance{" "}
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Application follow-up{" "}
                </li>
                {/* <li className="flex items-center li-text">
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
      <Accomodationdup />
      <Universitydup />
      <Statementdup />
      <Cvdup />
      <Letterdup />
      <UniversityApplicationdup />
    </div>
  );
};

export default Visa;
