import React from "react";
import Slider from "react-slick";
import profile from "../assets/reviews/profile.svg";
import start_group from "../assets/reviews/start_group.svg";
import google_icon from "../assets/reviews/devicon_google.svg";

export default function Slick() {
  const reviewData = [
    {
      name: "Krish",
      review:
        "Best consultant I ever met. I connected with them just for the uniassist money transfer but I found them very professional. Hence, I took test of the service also. Highly recommended",
    },
    {
      name: "Navin Burande",
      review:
        "Experience was amazing. They get in touch with them through Rohit. They are very professional and trustworthy. They helped to short list the best universities according to my profile. Due to them I am in Germany now. Thank you team.  Highly recommended",
    },
    {
      name: "Cyrus Pulsar",
      review:
        "Team is very genuine. I was stuck with my university application process when I tried with other advisor. They took my money also which was wasted,But Germanywale helped me very nicely, due to them only I got my dream admit in Germany.",
    },
    {
      name: "Rutul Dhawane",
      review:
        "I took Free counseling from Germanywale. I found their service very genuine and worthy. The thing I like most is they are giving 100% admit guaranteed. Hence, took the service and good news that I got admit in public university 🤩 Looking forward to take visa and accommodation also.I would recommended to every aspirant who is planning to study abroad",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000, // Adjust the breakpoint value according to your design
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 608, // Adjust the breakpoint value according to your design
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-3">
      <Slider {...settings}>
        {reviewData.map((val, ind) => {
          return (
            <div>
              <div className="bg-[#FFFFFF] rounded-4xl sm:min-h-64 lg:min-h-72 xl:min-h-64 rounded-3xl">
                <div className="pb-2">
                  <div className="flex gap-4 lg:gap-32 xl:gap-24  items-center">
                    <div className="flex gap-4 p-6">
                      <img
                        src={profile}
                        alt="profile"
                        className="h-14 "
                      />
                      <div className="text-left">
                        <h1 className="text-lg sm:text-2xl">
                          {val.name}
                        </h1>
                        <img
                          src={start_group}
                          alt={val}
                          className="h-5 w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <img
                        src={google_icon}
                        alt="review_singlestar"
                        className="h-9 w-full mb-3"
                      />
                    </div>
                  </div>

                  <div
                    className="text-sm sm:text-md text-left font-light mx-10 "
                    style={{
                      fontFamily: "Gilroy-regular",
                    }}
                  >
                    {val.review}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
