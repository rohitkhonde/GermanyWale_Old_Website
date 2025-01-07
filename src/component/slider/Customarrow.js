import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "0",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {/* <FaChevronRight
        style={{ color: "#d63815", fontSize: "24px" }}
      /> */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: 0,
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {/* <FaChevronLeft style={{ color: "#d63815", fontSize: "24px" }} /> */}
    </div>
  );
};

export { NextArrow, PrevArrow };
