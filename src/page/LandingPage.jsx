import React, { useEffect, useState } from "react";
import Hero from "../component/Hero";
// import Navbar from "../component/Navbar";
// import Header from "../component/Header";
import Testimonal from "../component/Testimonal";
import StudyGermany from "../component/StudyGermany";
import SyncDocument from "../component/SyncDocument";
import StayinTouch from "../component/StayinTouch";
import Transparency from "../component/Transparency";
import Footer from "../component/Footer";
import Universitycomp from "../component/Universitycomp";
import Usp from "../component/Usp";
import News from "../component/News";
import Partners from "../component/partners/Partners";
import Webslider from "../component/slider/Webslider";
import MentorSection from "../component/mentor/MentorSection";
import Header from "../component/reviews/Header";
import RatingSection from "../component/reviews/RatingSection";
import Testimonials from "../component/reviews/Testimonials";
import TestimonialsSlider from "../component/reviews/Testimonials";
import ChooseUs2 from "../component/chooseUs/ChooseUs2";

const LandingPage = () => {
  const [watchStory, setWatchstory] = useState(false);
  const [localUser] = useState(JSON.parse(localStorage.getItem("user")));

  console.log(localUser, "localdata");

  const handleWatchStory = () => {
    setTimeout(() => {
      setWatchstory(true);
    }, 6000);
  };

  useEffect(() => {
    if (localUser?._id) {
      setWatchstory(false);
    } else {
      handleWatchStory();
    }
  }, [localUser]);

  return (
    <>
      <div>
        {/* <Header />
        <Navbar /> */}
        <Hero />
        <Universitycomp />
        <Testimonal />
        <Usp />
        {/* <ChooseUs2 /> */}
        <StudyGermany />
        <Transparency />
        {/* Partners Section */}
        <Partners />
        {/* <Webslider /> */}
        <SyncDocument />
        <MentorSection />
        <StayinTouch />

        {/* <Header /> */}
        {/* <RatingSection /> */}
        <TestimonialsSlider />

        <News />

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default LandingPage;
