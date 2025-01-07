import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import React Router navigation
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
import "./University.css";
import ui from "../../../assets/ServicePageImages/UniversityImage/universityPageimage.jpg";
import Universities from "../../../Universities";

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

const University = () => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-orange-600/90"></div>

        {/* Content */}
        <div className="relative z-4 flex h-full items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            University Shortlisting
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
                University Shortlisting
              </h2>
              <p className="university-description mb-6">
                50% application fail due to wrong choice of university and
                course module.Let us shortlist the best universities based on
                your interest and capabilities, because we represent you and not
                universities
              </p>
              <ul className="space-y-4">
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Analyse your profile and preferences{" "}
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Search for universities and courses{" "}
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Shortlist and consolidate courses for your profile{" "}
                </li>
                <li className="flex items-center li-text">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Delivery File Format: PDF and .docx{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Universities />
    </div>
  );
};

export default University;

// import React from "react";
// import {
//   FaUserGraduate,
//   FaUniversity,
//   FaFileAlt,
//   FaFileContract,
//   FaEnvelope,
//   FaBuilding,
//   FaPassport,
//   FaHome,
// } from "react-icons/fa";
// import "./University.css";
// import ui from "../../../../assets/ServicePageImages/UniversityImage/universityPageimage.jpg";
// import Universities from "../../../Universities";
// const services = [
//   { icon: FaUserGraduate, title: "Free Counselling" },
//   { icon: FaUniversity, title: "University Shortlisting" },
//   { icon: FaFileAlt, title: "Statement of Purpose" },
//   { icon: FaFileContract, title: "Curriculum Vitae" },
//   { icon: FaEnvelope, title: "Letter of Recommendation" },
//   { icon: FaBuilding, title: "Univeristy Application" },
//   { icon: FaPassport, title: "Visa Assistance" },
//   { icon: FaHome, title: "Accommodation and travel assistance" },
// ];
// const University = () => {
//   return (
//     <div className="free-counselling-container">
//       <div className="relative h-[300px] sm:h-[350px] md:h-[391px] lg:h-[450px] mt-16">
//         {/* Orange Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-orange-600/90"></div>

//         {/* Content */}
//         <div className="relative z-4 flex h-full items-center justify-center text-center">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
//             University Shortlisting
//           </h1>
//         </div>
//       </div>

//       <div className="our-services-section">
//         <div className="py-16 px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
//             Our Services
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto p-4">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//                 style={{
//                   backgroundColor: "#FFFAF5",
//                 }}
//               >
//                 <service.icon className="w-12 h-12 text-orange-500 mb-4" />
//                 <h3 className="text-[16px] font-medium text-center">
//                   {service.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//             <div className="relative h-[400px]">
//               <img
//                 src={ui}
//                 alt="Graduation celebration"
//                 className="w-full h-full object-cover rounded-lg shadow-lg"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">
//                 University Shortlisting
//               </h2>
//               <p className="university-description mb-6">
//                 50% application fail due to wrong choice of university and
//                 course module.Let us shortlist the best universities based on
//                 your interest and capabilities, because we represent you and not
//                 universities
//               </p>
//               <ul className="space-y-4">
//                 <li className="flex items-center li-text">
//                   <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
//                   Analyse your profile and preferences{" "}
//                 </li>
//                 <li className="flex items-center li-text">
//                   <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
//                   Search for universities and courses{" "}
//                 </li>
//                 <li className="flex items-center li-text">
//                   <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
//                   Shortlist and consolidate courses for your profile{" "}
//                 </li>
//                 <li className="flex items-center li-text">
//                   <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
//                   Delivery File Format: PDF and .docx{" "}
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Universities />
//     </div>
//   );
// };
