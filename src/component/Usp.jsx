import React, { useEffect } from "react";
import "../styles/Usp.css";

import AOS from "aos";
import "aos/dist/aos.css";
const Usp = () => {
  // useEffect

  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 50,
    });
  });
  return (
    <section className="px-4 pt-4 sm:px-6 sm:pt-8 lg:px-10 lg:pt-10 ">
      <div className="container">
        <div className="mb-10">
          <h3
            className="text-center text-lg sm:text-xl font-bold mt-4 mb-1 overflow-hidden bg-[#FF9422] bg-clip-text text-transparent"
            style={{ fontFamily: "Gilroy" }}
          >
            Why Choose Us
          </h3>
          <p
            className="text-xl sm:text-4xl bg-[#D63715]  font-semibold bg-clip-text text-transparent"
            style={{ fontFamily: "Gilroy-Medium" }}
          >
            Endless Possibilities Begin Here
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="grid gap-2">
              <div className="grid h-28 sm:h-56 lg:h-60 first rounded-2xl">
                <div className="hover:rounded-[2.1rem] rounded-[1.3rem] sm:rounded-[2rem] flex flex-col justify-center items-center text-md sm:text-2xl font-semibold text-white bg-[#302b2b61] hover:bg-transparent ">
                  <h3>600+</h3>
                  <h3>Students served</h3>
                </div>
              </div>
              <div className="grid h-28 sm:h-56 lg:h-60 second rounded-2xl">
                <div className="hover:rounded-[2.1rem] rounded-[1.3rem] sm:rounded-[2rem] flex flex-col justify-center items-center text-md sm:text-2xl font-semibold text-white bg-[#302b2b61] hover:bg-transparent ">
                  <h3>200+</h3>
                  <h3>Acceptances in 2023</h3>
                </div>
              </div>
            </div>
            <div className="grid three rounded-2xl">
              <div className="hover:rounded-[2.1rem] rounded-[1.3rem] sm:rounded-[2rem] flex flex-col justify-end items-start text-md sm:text-2xl font-semibold text-white bg-[#302b2b61] hover:bg-transparent ">
                <h3 className="ms-10 sm:ms-3">100+</h3>
                <h3 className="ms-3 mb-7">
                  Elite University Admissions
                </h3>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="grid h-28 sm:h-56 lg:h-60 four rounded-2xl">
                <div className=" hover:rounded-[2.1rem] rounded-[1.3rem] sm:rounded-[2rem] flex flex-col justify-center items-center text-md sm:text-2xl font-semibold text-white bg-[#302b2b61] hover:bg-transparent ">
                  <h3>100%</h3>
                  <h3>Guarenteed Admissions</h3>
                </div>
              </div>
              <div className="grid h-28 sm:h-56 lg:h-60 five rounded-2xl">
                <div className="hover:rounded-[2.1rem] rounded-[1.3rem] sm:rounded-[2rem] flex flex-col justify-center items-center text-md sm:text-2xl font-semibold text-white bg-[#302b2b61] hover:bg-transparent ">
                  <h3>96%</h3>
                  <h3>Admits From TU9</h3>
                </div>
              </div>
            </div>
            <div className="grid six rounded-3xl">
              <div className="hover:rounded-[2.1rem] rounded-[1.3rem] sm:rounded-[2rem] flex flex-col justify-end items-start text-md sm:text-2xl font-semibold text-white bg-[#302b2b61] hover:bg-transparent ">
                <h3 className="ms-3">2000+</h3>
                <h3 className="ms-3 mb-7">Achievements</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usp;
