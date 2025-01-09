import React from "react";
import PartnersHeader from "./PartnersHeader";
// import WavePattern from "./WavePattern";
import PartnerLogo from "./partnerLogo";
// import a from "../../assets/partners/partner/p1.png";
import tw from "../../assets/partners/partner/topWave.png";
import dw from "../../assets/partners/partner/downWave.png";
import p1 from "../../assets/partners/partner/p1.png";
import p2 from "../../assets/partners/partner/p2.png";
import p3 from "../../assets/partners/partner/p3.png";
import p4 from "../../assets/partners/partner/p4.png";
import p5 from "../../assets/partners/partner/p5.png";
import p6 from "../../assets/partners/partner/p6.png";
import { SiPlaystation5 } from "react-icons/si";

const partners = [
  {
    name: "Axis Bank",
    logo: p1,
  },
  {
    name: "Flywire",
    logo: p2,
  },
  {
    name: "RemitOut",
    logo: p3,
  },
  {
    name: "HDFC Credila",
    logo: p4,
  },
  {
    name: "Commerzbank",
    logo: p5,
  },
  {
    name: "Bajaj Allianz",
    logo: p6,
  },
];

const Partners = () => {
  return (
    <section
      className="text-white bg-black px-4 sm:px-6 lg:px-8"
      style={{
        background: "#000000",
      }}
    >
      {/* Top Wave Pattern */}
      <div className="w-full relative">
        <img src={tw} alt="Wave Pattern" className="object-cover w-full h-16" />
      </div>

      {/* Main Content */}
      <div
        className="container mx-auto"
        style={{
          position: "relative",
          zIndex: "10",
        }}
      >
        <PartnersHeader />

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-0 items-center justify-items-center mt-8 md:mt-12 lg:mt-12">
            {partners.map((partner) => (
              <div key={partner.name} className="w-full flex justify-center">
                <PartnerLogo
                  key={partner.name}
                  name={partner.name}
                  logo={partner.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave Pattern */}
      <div
        className="w-full flex relative"
        style={{
          top: "-10px",
        }}
      >
        <img src={dw} alt="Wave Pattern" className="object-cover w-full h-16" />
      </div>
    </section>
  );
};

export default Partners;
