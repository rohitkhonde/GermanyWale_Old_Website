import React, { useEffect, useState, lazy, Suspense } from "react";

import Footer from "../component/Footer";
// ✅ LAZY LOAD heavy components
const Hero = lazy(() => import("../component/Hero"));
const Testimonal = lazy(() => import("../component/Testimonal"));
const StudyGermany = lazy(() => import("../component/StudyGermany"));
const SyncDocument = lazy(() => import("../component/SyncDocument"));
const StayinTouch = lazy(() => import("../component/StayinTouch"));
const Transparency = lazy(() => import("../component/Transparency"));
const Universitycomp = lazy(() => import("../component/Universitycomp"));
const Usp = lazy(() => import("../component/Usp"));
const News = lazy(() => import("../component/News"));
const Partners = lazy(() => import("../component/partners/Partners"));
const MentorSection = lazy(() => import("../component/mentor/MentorSection"));
const TestimonialsSlider = lazy(() => import("../component/reviews/Testimonials"));

// ✅ Keep light components as regular imports (if they're small)

// Loading component for sections
const SectionLoader = () => (
  <div className="section-loader" style={{ 
    height: '200px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    background: '#f5f5f5',
    borderRadius: '8px',
    margin: '20px 0'
  }}>
    <div>Loading section...</div>
  </div>
);

const LandingPage = () => {
  const [watchStory, setWatchstory] = useState(false);
  const [localUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    university: false,
    testimonial: false,
    // ... add more sections as needed
  });

  console.log(localUser, "localdata");

  const handleWatchStory = () => {
    setTimeout(() => {
      setWatchstory(true);
    }, 6000);
  };

  // Intersection Observer to load sections when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (localUser?._id) {
      setWatchstory(false);
    } else {
      handleWatchStory();
    }
  }, [localUser]);

  return (
    <div>
      {/* Hero - Load immediately */}
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>

      {/* University - Load when in view */}
      <div data-section="university">
        {visibleSections.university && (
          <Suspense fallback={<SectionLoader />}>
            <Universitycomp />
          </Suspense>
        )}
      </div>

      {/* Testimonial - Load when in view */}
      <div data-section="testimonial">
        {visibleSections.testimonial && (
          <Suspense fallback={<SectionLoader />}>
            <Testimonal />
          </Suspense>
        )}
      </div>

      {/* Other sections with conditional loading */}
      <Suspense fallback={<SectionLoader />}>
        <Usp />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <StudyGermany />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Transparency />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SyncDocument />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Partners />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <MentorSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <StayinTouch />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSlider />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <News />
      </Suspense>
    </div>
  );
};

export default LandingPage;