import "./App.css";
import LandingPage from "./page/LandingPage";
import Google from "./component/contact/Google";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./component/Navbar";
import Header from "./component/Header";
// import Footer from "./component/Footer";
import Testimonal from "./component/Testimonal";
import StudyGermany from "./component/StudyGermany";
import SyncDocument from "./component/SyncDocument";
import StayinTouch from "./component/StayinTouch";
import Transparency from "./component/Transparency";
import Footer from "./component/Footer";
import Universitycomp from "./component/Universitycomp";
import Usp from "./component/Usp";
import News from "./component/News";
import University from "./component/ServicesPages/University/University";
import Cv from "./component/ServicesPages/CV/Cv";
import Letter from "./component/ServicesPages/LetterOfRecommendation/Letter";
import Statement from "./component/ServicesPages/Statement/Statement";
import UniversityApplication from "./component/ServicesPages/UniversityApplication/UniversityApplication";
import Accomodation from "./component/ServicesPages/Accomodation/Accomodation";
import Visa from "./component/ServicesPages/VisaAssistance/Visa";
import TestimonialsSlider from "./component/reviews/Testimonials";
import AboutUs from "./component/AboutUs/AboutUs";
import ThankYouPage from "./component/contact/ThankYouPage";
import PricingSection from "./component/PaymentPages/PricingSection";
import { SpeedInsights } from "@vercel/speed-insights/react";
import PARP2 from "./component/PrivacyAndRefundPolicy/PARP2";
import TAndC from "./component/TermsandCondition/TAndC";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div className="App">
      <Router>
        {/* Shared components visible on all pages */}
        <ScrollToTop /> {/* Scroll to top logic */}
        <Header />
        <Navbar />
        <SpeedInsights />
        {/* Routing */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Google />} />
          {/* <Route path="/" element={<Hero />} /> */}
          <Route path="/testimonials" element={<Testimonal />} />
          <Route path="/usp" element={<Usp />} />
          <Route path="/study-germany" element={<StudyGermany />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/universities" element={<Universitycomp />} />
          <Route path="/documents" element={<SyncDocument />} />
          <Route path="/stay-in-touch" element={<StayinTouch />} />
          <Route path="/news" element={<News />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/university" element={<University />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/cv" element={<Cv />} />
          <Route
            path="/universityapplication"
            element={<UniversityApplication />}
          />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/reviews" element={<TestimonialsSlider />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/pricingsection" element={<PricingSection />} />
          <Route path="/privacyandrefund" element={<PARP2 />} />
          <Route path="/terms" element={<TAndC />} />
        </Routes>
        {/* Footer visible on all pages */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
