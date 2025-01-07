import React from "react";

import divider from "../../assets/studygermany/dividerline.svg";
import aeroplane from "../../assets/studygermany/aeroplane.svg";
import aim from "../../assets/sync/aim.png";

const Mobileslider = ({
  dividerHeight,
  isVisible,
  isVisibletop,
  isVisiblescroll,
  isVisiblebottom,
  strokeDashOffset,
}) => {
  return (
    <div>
      <div
        className="absolute top-0 left-[1%] sm:left-1/2"
        id="divider-line"
        style={{
          backgroundColor: "#FF9522",
          transform: "translateX(-30%)",
          width: "3px",
          height: dividerHeight,
        }}
      ></div>
      <div
        className="absolute top-20 left-2 sm:left-[50%]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {isVisible && (
          <svg
            className="absolute top-0 left-5"
            width="5"
            height={dividerHeight}
            viewBox={`0 0 5 ${dividerHeight}`}
            style={{
              strokeDashoffset: strokeDashOffset - 400,
              strokeDasharray: dividerHeight - 1000,
            }}
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2={dividerHeight}
              fill="none"
              stroke="#0487F3"
              strokeWidth="0"
              strokeLinecap="square"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              id="triangle"
            />
          </svg>
        )}
      </div>

      {isVisibletop && (
        <div
          className="absolute top-16 left-1 sm:left-[50%]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <img
            src={aeroplane}
            alt="aero_plane"
            height="40"
            width="40"
          />
        </div>
      )}
      {isVisiblescroll && (
        <div
          className="fixed top-52  left-[5%] sm:left-[50%] "
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <img
            src={aeroplane}
            alt="aero_plane"
            height="40"
            width="40"
          />
        </div>
      )}
      {isVisiblebottom && (
        <div
          className="absolute bottom-[4.0625rem] sm:bottom-[-2rem] left-1 sm:left-[50%]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <img
            src={aeroplane}
            alt="aero_plane"
            height="40"
            width="40"
          />
        </div>
      )}
      <div
        className="absolute top-0 left-1 sm:left-[50%]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <img src={aim} alt="aero_plane" height="18" width="23" />
      </div>
    </div>
  );
};

export default Mobileslider;
