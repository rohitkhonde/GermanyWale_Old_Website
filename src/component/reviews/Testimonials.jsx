import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Utkarsh Singh Sikarwar",
    initial: "U",
    rating: 5,
    text: "I had a great experience with Germanywale team. The team was knowledgeable, responsive, and guided me through each step of the process, from university selection to document preparation and visa application.",
    backgroundColor: "bg-yellow-500",
  },
  {
    id: 2,
    name: "Derin Demir",
    initial: "D",
    rating: 5,
    text: "I really did enjoy my journey with Germanywale and felt comfortable talking about my goals. The communication was also good.",
    backgroundColor: "bg-green-500",
  },
  {
    id: 3,
    name: "Sachin Ayyappasamy",
    initial: "S",
    rating: 5,
    text: "The entire process was smooth, and the team at Germanywale was incredibly supportive, helping me overcome every challenge I faced during the application process.",
    backgroundColor: "bg-red-500",
  },
  {
    id: 4,
    name: "Aditi Sharma",
    initial: "A",
    rating: 5,
    text: "Germanywale provided excellent support, making my transition seamless. Highly recommend their services.",
    backgroundColor: "bg-blue-500",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`${
            index < rating ? "text-yellow-400" : "text-gray-300"
          } text-xl`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="bg-white text-left rounded-lg  p-6 h-full flex flex-col justify-between">
      <div className="flex items-center mb-4">
        <div
          className={`w-12 h-12 ${review.backgroundColor} rounded-full flex items-center justify-center text-white text-3xl font-semibold`}
          style={{
            fontFamily: "Gilroy-Medium",
          }}
        >
          {review.initial}
        </div>
        <div className="ml-4">
          <h3
            className="font-semibold text-xl"
            style={{
              fontFamily: "Gilroy",
            }}
          >
            {review.name}
          </h3>
          <StarRating rating={review.rating} />
        </div>
      </div>
      <p
        className="  mb-4"
        style={{
          fontFamily: "Gilroy-Medium",
          fontWeight: "normal",
        }}
      >
        {review.text}
      </p>
      <div className="flex items-center text-gray-500 text-sm">
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="w-4 h-4 mr-2"
        />
        <span>Posted on Google</span>
      </div>
    </div>
  );
}

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h2 className="text-2xl font-semibold text-center mb-6">
        The Trust We've Earned
      </h2> */}
      <header
        className="text-center mt-6 text-2xl font-bold sm:text-4xl  bg-gradient-to-r from-[#ff9422]  to-[#d63715] bg-clip-text text-transparent"
        style={{
          fontFamily: "Gilroy-Medium",
        }}
      >
        The Trust We’ve Earned
      </header>
      <div className="text-center  my-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 ">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
            alt="Google Logo"
            className="w-32"
          />
          <div>
            <h2
              className="text-xl md:text-2xl text-left font-semibold "
              style={{ color: "#6A6A6A" }}
            >
              Google Rating
            </h2>
            <div className="flex items-center gap-2 text-2xl text-yellow-500">
              <strong className="text-gray-900 text-4xl font-bold">4.7</strong>
              <FaStar className="text-4xl" />
              <FaStar className="text-4xl" />
              <FaStar className="text-4xl" />
              <FaStar className="text-4xl" />
              <FaStarHalfAlt className="text-4xl" />
            </div>

            <p
              className="text-sm text-left mt-3 "
              style={{
                color: "#868686",
              }}
            >
              See all our reviews (111)
            </p>
          </div>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-3">
              <ReviewCard review={review} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
