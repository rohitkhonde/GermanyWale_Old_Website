// import React from "react";

// import frankfurt from "../assets/university/frankfurt.svg";
// import hochschule from "../assets/university/hochschule.svg";
// import universitat from "../assets/university/universitat.svg";
// import universityofeurope from "../assets/university/universityofeurope.svg";
// import technische from "../assets/university/technische.svg";
// import tuhh from "../assets/university/tuhh.svg";

// import schmalkalden from "../assets/university/schmalkalden.svg";
// import worms from "../assets/university/worms.svg";
// import europa from "../assets/university/europa.svg";
// import rwth from "../assets/university/rwth.svg";
// import kit from "../assets/university/kit.svg";
// import jesus from "../assets/university/jesus.svg";

// import hamburg from "../assets/university/hamburg.svg";
// import mannheim from "../assets/university/mannheim.svg";
// import bonn from "../assets/university/bonn.svg";
// import dresden from "../assets/university/dresden.svg";
// import stuttgart from "../assets/university/stuttgart.svg";
// import zuberlin from "../assets/university/zuberlin.svg";
// import Marquee from "react-fast-marquee";

// const Universitycomp = () => {
//   return (
//     <section
//       className="px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 university_wrapper "
//       style={{ position: "relative", zIndex: 30 }}
//     >
//       <div className="md:px-4 pt-4 container">
//         <div className="text-left mb-10">
//           <h3
//             className="text-lg sm:text-3xl font-bold mt-4 mb-4 overflow-hidden bg-gradient-to-r from-[#ea7d06] via-[#d63815] to-[#d63815] bg-clip-text text-transparent"
//             style={{ fontFamily: "Gilroy" }}
//           >
//             Top Universities
//           </h3>
//         </div>

//         {/* first */}

//         <Marquee gradient={false}>
//           <div className="flex justify-between gap-7 ">
//             <div className="flex flex-col items-center ">
//               <div className="h-20 p-3 m-auto ">
//                 <img
//                   src={frankfurt}
//                   alt="university"
//                   className="object-fill h-full"
//                 />
//               </div>
//               <div className="h-20 p-3 m-auto">
//                 <img
//                   src={hochschule}
//                   alt="university"
//                   className="object-fill h-full"
//                 />
//               </div>
//               <div className="h-20 p-3 m-auto">
//                 <img
//                   src={universitat}
//                   alt="university"
//                   className="object-fill h-full"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col items-center ">
//               <div className="h-20 p-4 m-auto">
//                 <img
//                   src={universityofeurope}
//                   alt="universityofeurope"
//                   className="object-fill h-full"
//                 />
//               </div>
//               <div className="h-20 p-2 m-auto">
//                 <img
//                   src={technische}
//                   alt="technische"
//                   className="object-fill h-full"
//                 />
//               </div>
//               <div className="h-20 p-2 m-auto">
//                 <img src={tuhh} alt="tuhh" className="object-fill h-full" />
//               </div>
//             </div>

//             {/* second */}
//             <div className="flex flex-col items-center ">
//               <div className="h-20 p-4 m-auto">
//                 <img src={worms} alt="worms" className="object-fill h-full" />
//               </div>
//               <div className="h-20 p-5 m-auto">
//                 <img src={europa} alt="europa" className="object-fill h-full" />
//               </div>
//               <div className="h-20 p-6 m-auto">
//                 <img src={rwth} alt="rwth" className="object-fill h-full" />
//               </div>
//             </div>

//             <div className="flex flex-col items-center ">
//               <div className="h-20 p-5 m-auto">
//                 <img src={kit} alt="kit" className="object-fill h-full" />
//               </div>
//               <div className="h-20 p-5 m-auto">
//                 <img
//                   src={schmalkalden}
//                   alt="schmalkalden"
//                   className="object-fill h-full"
//                 />
//               </div>
//               <div className="h-20 p-2 m-auto">
//                 <img src={jesus} alt="jesus" className="object-fill h-full" />
//               </div>
//             </div>

//             {/* third */}
//             <div className="flex flex-col items-center ">
//               <div className="h-20 p-5 m-auto">
//                 <img
//                   src={dresden}
//                   alt="dresden"
//                   className="object-fill h-full"
//                 />
//               </div>
//               <div className="h-20 p-4 m-auto">
//                 <img
//                   src={hamburg}
//                   alt="hamburg"
//                   className="object-fill h-full"
//                 />
//               </div>
//               <div className="h-20 p-5 m-auto">
//                 <img
//                   src={mannheim}
//                   alt="mannheim"
//                   className="object-fill h-full"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col items-center ">
//               <div className="h-20 p-4 m-auto">
//                 <img src={bonn} alt="bonn" className="object-fill h-full" />
//               </div>

//               <div className="h-20 p-5 m-auto">
//                 <img
//                   src={stuttgart}
//                   alt="stuttgart"
//                   className="object-fill h-full"
//                 />
//               </div>
//               <div className="h-20 p-2 m-auto">
//                 <img
//                   src={zuberlin}
//                   alt="zuberlin"
//                   className="object-fill h-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </Marquee>
//       </div>
//     </section>
//   );
// };

// export default Universitycomp;

import React from "react";
import Marquee from "react-fast-marquee";

import frankfurt from "../assets/university/frankfurt.svg";
import hochschule from "../assets/university/hochschule.svg";
import universitat from "../assets/university/universitat.svg";
import universityofeurope from "../assets/university/universityofeurope.svg";
import technische from "../assets/university/technische.svg";
import tuhh from "../assets/university/tuhh.svg";
import schmalkalden from "../assets/university/schmalkalden.svg";
import worms from "../assets/university/worms.svg";
import europa from "../assets/university/europa.svg";
import rwth from "../assets/university/rwth.svg";
import kit from "../assets/university/kit.svg";
import jesus from "../assets/university/jesus.svg";
import hamburg from "../assets/university/hamburg.svg";
import mannheim from "../assets/university/mannheim.svg";
import bonn from "../assets/university/bonn.svg";
import dresden from "../assets/university/dresden.svg";
import stuttgart from "../assets/university/stuttgart.svg";
import zuberlin from "../assets/university/zuberlin.svg";

const universities = [
  { name: "frankfurt", logo: frankfurt },
  { name: "hochschule", logo: hochschule },
  { name: "universitat", logo: universitat },
  { name: "universityofeurope", logo: universityofeurope },
  { name: "technische", logo: technische },
  { name: "tuhh", logo: tuhh },
  { name: "schmalkalden", logo: schmalkalden },
  { name: "worms", logo: worms },
  { name: "europa", logo: europa },
  { name: "rwth", logo: rwth },
  { name: "kit", logo: kit },
  { name: "jesus", logo: jesus },
  { name: "hamburg", logo: hamburg },
  { name: "mannheim", logo: mannheim },
  { name: "bonn", logo: bonn },
  { name: "dresden", logo: dresden },
  { name: "stuttgart", logo: stuttgart },
  { name: "zuberlin", logo: zuberlin },
];

const Universitycomp = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 xl:px-32 bg-white mt-8 mb-8">
      <section className="max-w-[1400px] mx-auto">
        <h3
          className="text-2xl sm:text-4xl font-bold mb-10  bg-gradient-to-r from-[#ff9422]  to-[#d63715] bg-clip-text text-transparent"
          style={{ fontFamily: "Gilroy-Medium" }}
        >
          Top Universities
        </h3>

        <div className="overflow-hidden">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            className="py-4"
          >
            <div className="flex items-center gap-12">
              {universities.map((university, index) => (
                <div
                  key={index}
                  className="h-14 px-4 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={university.logo}
                    alt={university.name}
                    className="h-full  w-auto object-contain filter hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Universitycomp;
