import React from "react";
import Marquee from "react-fast-marquee";

import frankfurt from "../../../../assets/university/frankfurt.svg";
import hochschule from "../../../../assets/university/hochschule.svg"
import universitat from "../../../../assets/university/universitat.svg";
import universityofeurope from "../../../../assets/university/universityofeurope.svg";
import technische from "../../../../assets/university/technische.svg";
import tuhh from "../../../../assets/university/tuhh.svg";
import schmalkalden from "../../../../assets/university/schmalkalden.svg";
import worms from "../../../../assets/university/worms.svg";
import europa from "../../../../assets/university/europa.svg";
import rwth from "../../../../assets/university/rwth.svg";
import kit from "../../../../assets/university/kit.svg";
import jesus from "../../../../assets/university/jesus.svg";
import hamburg from "../../../../assets/university/hamburg.svg";
import mannheim from "../../../../assets/university/mannheim.svg";
import bonn from "../../../../assets/university/bonn.svg";
import dresden from "../../../../assets/university/dresden.svg";
import stuttgart from "../../../../assets/university/stuttgart.svg";
import zuberlin from "../../../../assets/university/zuberlin.svg";

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

const UniversityScrolling = () => {
  return (
    <div className="p-4"> {/* Added vertical spacing */}
      <div className="heading flex items-center justify-center mb-6 md:mb-8"> {/* Added bottom margin */}
        <h3 className="text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent">
          Top Universities
        </h3>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl px-2 md:px-4">
          <div className="overflow-hidden">
            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover={true}
              className="py-4"
            >
              <div className="flex items-center gap-8 md:gap-12"> {/* Reduced gap on mobile */}
                {universities.map((university, index) => (
                  <div
                    key={index}
                    className="h-10 md:h-14 px-3 md:px-4 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={university.logo}
                      alt={university.name}
                      className="h-full w-auto object-contain filter hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityScrolling;