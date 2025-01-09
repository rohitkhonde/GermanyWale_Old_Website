import React from "react";
import tw from "../../assets/partner/topWave.png";
import dw from "../../assets/partner/downWave.png";

const WavePattern = () => (
  <div className="w-full overflow-hidden flex justify-center items-center">
    <img
      src={tw}
      alt="Wave Pattern"
      className="object-cover w-full h-16 md:h-24"
    />
  </div>
);

export default WavePattern;
