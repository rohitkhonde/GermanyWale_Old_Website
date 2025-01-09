import React from "react";
import "./Mentor.css";

const MentorCard = ({
  name,
  role,
  company,
  companyLogo,
  university,
  universityLogo,
  image,
}) => {
  return (
    <div className="px-2 sm:px-4 py-6">
      <div className="relative max-w-[316px] h-[408px] rounded-xl shadow-lg overflow-hidden border flex flex-col items-center justify-between bg-white mx-auto transform transition-transform duration-300 hover:scale-[1.02]">
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 w-full h-[103px]" />

        {/* Profile Image */}
        <div className="flex justify-center -mt-14">
          <img
            src={image}
            alt={name}
            className="w-[129px] h-[129px] rounded-full object-cover shadow-md"
          />
        </div>

        {/* Name and Role */}
        <div className="text-center px-4 sm:px-6">
          <h2 className="name-m">{name}</h2>
          <p
            className="role-m"
            style={{
              fontFamily: "Gilroy",
              fontSize: "14.8px",
              lineHeight: "14.23px",
              textAlign: "center",
              color: "grey",
              marginTop: "4px",
              fontWeight: "500",
            }}
          >
            {role}
          </p>
        </div>

        {/* Company and University */}
        <div className="w-full">
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col items-center flex-1">
              <p className="company-m">Working at</p>
              <img
                src={companyLogo}
                alt={company}
                className="h-20 w-20 object-contain"
              />
            </div>
            <div className="flex flex-col items-center flex-1">
              <p className="company-m">Studied at</p>
              <img
                src={universityLogo}
                alt={university}
                className="h-20 w-25 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="w-full px-4 sm:px-6 py-4">
          <button className="w-full py-2 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-50 transition-colors duration-200 active:scale-95 transform">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
