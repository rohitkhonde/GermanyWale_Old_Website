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
        <Testimonal />
        <Usp />
        <StudyGermany />
        <Transparency />
        <Universitycomp />
        <SyncDocument />
        <StayinTouch />
        <News />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default LandingPage;
