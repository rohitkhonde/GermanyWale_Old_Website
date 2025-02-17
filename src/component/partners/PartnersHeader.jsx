import React from "react";
// import hd from "../../assets/partners/partner/"
import "./partner.css";
const PartnersHeader = () => (
  <div className="flex flex-col items-center w-full max-w-12xl gap-4 px-4">
    <h2
      className="text-2xl sm:text-5xl font-bold"
      style={{
        fontFamily: "Gilroy",

        background: "linear-gradient(90deg, #EA7D06 0%, #D63715 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Our Partners
    </h2>
    <p
      className=" text-center text-lg sm:text-lg "
      style={{
        fontFamily: "Gilroy",
        fontWeight: 600,

        textAlign: "center",
        color: "#E0E0E0",
        maxWidth: "900px",
      }}
    >
      We have collaborated with a diverse array of partners, each bringing
      unique expertise and value to make journey of our student hassle-free.
    </p>
  </div>
);

export default PartnersHeader;
