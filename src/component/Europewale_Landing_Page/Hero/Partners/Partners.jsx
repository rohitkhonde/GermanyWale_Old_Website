import React from "react";
import axis from "../../../../assets/partners/partner/p1.png";
import flywire from "../../../../assets/partners/partner/p2.png";
import remitout from "../../../../assets/partners/partner/p3.png";
import hdfc from "../../../../assets/partners/partner/p4.png";
import commerz from "../../../../assets/partners/partner/p5.png";
import bajaj from "../../../../assets/partners/partner/p6.png";
import tw from "../../../../assets/partners/partner/topWave.png";
import bw from "../../../../assets/partners/partner/downWave.png";

const Partners = () => {
  const partners = [
    {
      name: "Axis Bank",
      logo: axis,
    },
    {
      name: "Flywire",
      logo: flywire,
    },
    {
      name: "RemitOut",
      logo: remitout,
    },
    {
      name: "HDFC Credila",
      logo: hdfc,
    },
    {
      name: "Commerzbank",
      logo: commerz,
    },
    {
      name: "Bajaj Allianz",
      logo: bajaj,
    },
  ];

  return (
    <section className="relative bg-black overflow-hidden py-7 ">
      {/* Top Wave Background - Reduced height */}
      <div className="absolute top-0 left-0 w-full h-20 z-0 ">
        <img 
          src={tw} 
          alt="Top wave" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl">
              We have collaborated with industry leaders to provide the best services for our students
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div 
                key={partner.name} 
                className="flex justify-center items-center p-2"
              >
                <div className="relative w-full flex justify-center">
                  <div className="bg-transparent p-2 rounded-lg transition-all duration-300 hover:scale-110">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave Background - Reduced height */}
      <div className="absolute bottom-0 left-0 w-full h-24 z-0">
        <img 
          src={bw} 
          alt="Bottom wave" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Partners;