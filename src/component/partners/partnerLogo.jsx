// PartnerLogo.js
import React from "react";
import "./partner.css";

const PartnerLogo = ({ logo, name }) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      maxWidth: "150px", // Set a maximum size for larger screens
      aspectRatio: "4 / 3", // Maintain aspect ratio for responsiveness
      borderRadius: "9.41px",
      marginTop: "10px",
    }}
  >
    {/* Back div */}
    <div
      // style={{
      //   position: "absolute",
      //   top: "10%",
      //   left: "0",
      //   width: "100%",
      //   height: "95%",
      //   borderRadius: "0px 0px 23px 23px",
      //   background: "linear-gradient(90deg, #FF9422 8.33%, #D63715 94.05%)",
      //   opacity: "1",
      // }}
      className="back-div"
    ></div>

    {/* Front div */}
    <div
      style={{
        position: "absolute",
        top: "-4px",
        left: "0",
        width: "100%",
        height: "100%",
        borderRadius: "9.41px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1A1A1A", // Optional: add a background for contrast
      }}
      className="front-div"
    >
      <img
        src={logo}
        alt={name}
        style={{
          height: "80%", // Adjust the size relative to the container
          width: "auto",
          objectFit: "contain",
          transition: "transform 0.3s ease-in-out",
          padding: "10px",
        }}
        className="hover:scale-105"
      />
    </div>
  </div>
);

export default PartnerLogo;
