import React from "react"
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import ReactGA from "react-ga4";
import { SpeedInsights } from "@vercel/speed-insights/react";

// ✅ REGULAR IMPORTS - Components needed immediately on every page
import Header from "./component/Header";
import Footer from "./component/Footer";

// ✅ LAZY IMPORTS - Components that load only when needed
const Navbar = lazy(() => import("./component/Navbar"));
const LandingPage = lazy(() => import("./page/LandingPage"));
const Google = lazy(() => import("./component/contact/Google"));
const Testimonal = lazy(() => import("./component/Testimonal"));
const StudyGermany = lazy(() => import("./component/StudyGermany"));
const SyncDocument = lazy(() => import("./component/SyncDocument"));
const StayinTouch = lazy(() => import("./component/StayinTouch"));
const Transparency = lazy(() => import("./component/Transparency"));
const Universitycomp = lazy(() => import("./component/Universitycomp"));
const Usp = lazy(() => import("./component/Usp"));
const News = lazy(() => import("./component/News"));
const University = lazy(() => import("./component/ServicesPages/University/University"));
const Cv = lazy(() => import("./component/ServicesPages/CV/Cv"));
const Letter = lazy(() => import("./component/ServicesPages/LetterOfRecommendation/Letter"));
const Statement = lazy(() => import("./component/ServicesPages/Statement/Statement"));
const UniversityApplication = lazy(() => import("./component/ServicesPages/UniversityApplication/UniversityApplication"));
const Accomodation = lazy(() => import("./component/ServicesPages/Accomodation/Accomodation"));
const Visa = lazy(() => import("./component/ServicesPages/VisaAssistance/Visa"));
const TestimonialsSlider = lazy(() => import("./component/reviews/Testimonials"));
const AboutUs = lazy(() => import("./component/AboutUs/AboutUs"));
const ThankYouPage = lazy(() => import("./component/contact/ThankYouPage"));
const PricingSection = lazy(() => import("./component/PaymentPages/PricingSection"));
const PARP2 = lazy(() => import("./component/PrivacyAndRefundPolicy/PARP2"));
const TAndC = lazy(() => import("./component/TermsandCondition/TAndC"));
const ChanceKartHero = lazy(() => import("./component/ChanceKart/ChanceKartHero"));
const EuropewaleLandingPage = lazy(() => import("./page_Europewale/EuropewaleLandingPage"));



// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Loading component
const LoadingSpinner = () => (
  <div className="loading" style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '200px',
    fontSize: '18px',
    color: '#666'
  }}>
    <div>🔄 Loading...</div>
  </div>
);

// Error Boundary Component (Simple version)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Lazy loading error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    ReactGA.initialize("G-QF380E45CZ");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          {/* ✅ WRAP EVERYTHING in Suspense - including Navbar */}
          <Suspense fallback={<LoadingSpinner />}>
            <ScrollToTop />
            <SpeedInsights />
            
            {/* Components that appear on every page */}
            <Header />
            <Navbar /> {/* Now this is properly covered by Suspense */}
            
            {/* Main content routes */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/contact" element={<Google />} />
              <Route path="/testimonials" element={<Testimonal />} />
              <Route path="/usp" element={<Usp />} />
              <Route path="/study-germany" element={<StudyGermany />} />
              <Route path="/transparency" element={<Transparency />} />
              <Route path="/universities" element={<Universitycomp />} />
              <Route path="/documents" element={<SyncDocument />} />
              <Route path="/stay-in-touch" element={<StayinTouch />} />
              <Route path="/news" element={<News />} />
              <Route path="/university" element={<University />} />
              <Route path="/letter" element={<Letter />} />
              <Route path="/statement" element={<Statement />} />
              <Route path="/cv" element={<Cv />} />
              <Route path="/universityapplication" element={<UniversityApplication />} />
              <Route path="/accomodation" element={<Accomodation />} />
              <Route path="/visa" element={<Visa />} />
              <Route path="/reviews" element={<TestimonialsSlider />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/pricingsection" element={<PricingSection />} />
              <Route path="/privacyandrefund" element={<PARP2 />} />
              <Route path="/terms" element={<TAndC />} />
              <Route path="/chancekart" element={<ChanceKartHero />} />
              <Route path="/europewale" element={<EuropewaleLandingPage />} />
            </Routes>
            
            {/* Footer - if it's heavy, consider lazy loading it too */}
            <Footer />
          </Suspense>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;