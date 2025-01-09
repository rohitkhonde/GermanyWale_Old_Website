import React from "react";

const SliderArrow = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center
        absolute top-1/2 -translate-y-1/2 z-10
        w-4 h-4 md:w-6 md:h-6 rounded-full
        bg-gradient-to-r from-orange-500 to-red-500
        text-white shadow-lg
        hover:opacity-90 transition-opacity duration-300
        ${direction === "left" ? "left-1 md:-left-1" : "right-1 md:-right-1"}
        focus:outline-none
        hover:scale-110 transform transition
      `}
      aria-label={`${direction} arrow`}
    >
      <span
        className="flex items-center justify-center"
        style={{
          fontSize: "20px",
        }}
      >
        {direction === "left" ? "<" : ">"}
      </span>
    </button>
  );
};

export default SliderArrow;
