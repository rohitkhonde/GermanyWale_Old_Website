import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import ReactGA from "react-ga4";
import { SpeedInsights } from "@vercel/speed-insights/react";

// ✅ REGULAR IMPORTS - Only critical above-the-fold components
import Header from "./component/Header";
import Footer from "./component/Footer";

// ✅ LAZY IMPORTS - Grouped by priority and usage frequency

// === HIGH PRIORITY - Frequently visited pages ===
const LandingPage = lazy(() => import("./page/LandingPage"));
const Navbar = lazy(() => import("./component/Navbar"));
const Google = lazy(() => import("./component/contact/Google"));
const AboutUs = lazy(() => import("./component/AboutUs/AboutUs"));

// === MEDIUM PRIORITY - Service pages ===
const University = lazy(() => import("./component/ServicesPages/University/University"));
const Cv = lazy(() => import("./component/ServicesPages/CV/Cv"));
const Letter = lazy(() => import("./component/ServicesPages/LetterOfRecommendation/Letter"));
const Statement = lazy(() => import("./component/ServicesPages/Statement/Statement"));
const UniversityApplication = lazy(() => import("./component/ServicesPages/UniversityApplication/UniversityApplication"));
const Accomodation = lazy(() => import("./component/ServicesPages/Accomodation/Accomodation"));
const Visa = lazy(() => import("./component/ServicesPages/VisaAssistance/Visa"));

// === LOW PRIORITY - Rarely visited or heavy pages ===
const Testimonal = lazy(() => import("./component/Testimonal"));
const StudyGermany = lazy(() => import("./component/StudyGermany"));
const SyncDocument = lazy(() => import("./component/SyncDocument"));
const StayinTouch = lazy(() => import("./component/StayinTouch"));
const Transparency = lazy(() => import("./component/Transparency"));
const Universitycomp = lazy(() => import("./component/Universitycomp"));
const Usp = lazy(() => import("./component/Usp"));
const News = lazy(() => import("./component/News"));
const TestimonialsSlider = lazy(() => import("./component/reviews/Testimonials"));
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

// Enhanced loading component with better UX
const LoadingSpinner = () => (
  <div 
    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white"
    style={{ 
      fontFamily: "Gilroy, Arial, sans-serif" 
    }}
  >
    <div className="text-center">
      {/* Animated spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
      
      {/* Loading text with animation */}
      <div className="mt-6 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">GermanyWale</h3>
        <p className="text-gray-600 flex items-center justify-center gap-2">
          <span className="animate-pulse">Loading</span>
          <span className="flex gap-1">
            <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
          </span>
        </p>
      </div>
      
      {/* Progress indicator */}
      <div className="mt-4 w-48 bg-gray-200 rounded-full h-2 mx-auto">
        <div 
          className="bg-blue-600 h-2 rounded-full animate-pulse"
          style={{ 
            width: '60%',
            animation: 'pulse 2s infinite, progress 3s ease-in-out infinite'
          }}
        ></div>
      </div>
    </div>
  </div>
);

// Error Boundary Component with better error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App Error Boundary caught an error:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Send error to analytics
    if (typeof ReactGA !== 'undefined') {
      ReactGA.event({
        category: 'Error',
        action: 'App Error Boundary',
        label: error.toString()
      });
    }
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false,
      error: null,
      errorInfo: null 
    });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div 
          className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
          style={{ fontFamily: "Gilroy, Arial, sans-serif" }}
        >
          <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg p-8 border border-red-100">
            {/* Error Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            {/* Error Message */}
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Don't worry, our team has been notified.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={this.handleRetry}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Try Again
              </button>
              
              <button 
                onClick={() => window.location.href = '/'}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Go Home
              </button>
            </div>
            
            {/* Technical Details (Collapsed by default) */}
            <details className="mt-6 text-left">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                Technical Details
              </summary>
              <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono overflow-auto">
                <p className="text-red-600 mb-2">{this.state.error?.toString()}</p>
                <pre className="text-gray-600 whitespace-pre-wrap">
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  // Initialize analytics and performance monitoring
  useEffect(() => {
    // Google Analytics
    try {
      ReactGA.initialize("G-QF380E45CZ");
      ReactGA.send({ 
        hitType: "pageview", 
        page: window.location.pathname + window.location.search 
      });
    } catch (error) {
      console.warn("Google Analytics initialization failed:", error);
    }

    // Performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigationTiming = performance.getEntriesByType('navigation')[0];
        if (navigationTiming) {
          const loadTime = navigationTiming.loadEventEnd - navigationTiming.navigationStart;
          const domReadyTime = navigationTiming.domContentLoadedEventEnd - navigationTiming.navigationStart;
          
          console.log('🚀 Performance Metrics:', {
            'Page Load Time': `${Math.round(loadTime)}ms`,
            'DOM Ready Time': `${Math.round(domReadyTime)}ms`,
            'First Contentful Paint': `${Math.round(performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0)}ms`
          });

          // Send to analytics if needed
          if (typeof ReactGA !== 'undefined') {
            ReactGA.event({
              category: 'Performance',
              action: 'Page Load',
              value: Math.round(loadTime)
            });
          }
        }
      }
    };

    // Measure when page is fully loaded
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <SpeedInsights />
          
          {/* Header - Critical component, loads immediately */}
          <Header />
          
          {/* Main content with suspense for lazy loading */}
          <Suspense fallback={<LoadingSpinner />}>
            <Navbar />
            
            {/* Main content area */}
            <main className="min-h-screen">
              <Routes>
                {/* High Priority Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/contact" element={<Google />} />
                <Route path="/about" element={<AboutUs />} />
                
                {/* Service Pages */}
                <Route path="/university" element={<University />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/letter" element={<Letter />} />
                <Route path="/statement" element={<Statement />} />
                <Route path="/universityapplication" element={<UniversityApplication />} />
                <Route path="/accomodation" element={<Accomodation />} />
                <Route path="/visa" element={<Visa />} />
                
                {/* Content Pages */}
                <Route path="/testimonials" element={<Testimonal />} />
                <Route path="/usp" element={<Usp />} />
                <Route path="/study-germany" element={<StudyGermany />} />
                <Route path="/transparency" element={<Transparency />} />
                <Route path="/universities" element={<Universitycomp />} />
                <Route path="/documents" element={<SyncDocument />} />
                <Route path="/stay-in-touch" element={<StayinTouch />} />
                <Route path="/news" element={<News />} />
                <Route path="/reviews" element={<TestimonialsSlider />} />
                
                {/* Utility Pages */}
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/pricingsection" element={<PricingSection />} />
                <Route path="/privacyandrefund" element={<PARP2 />} />
                <Route path="/terms" element={<TAndC />} />
                <Route path="/chancekart" element={<ChanceKartHero />} />
                <Route path="/europewale" element={<EuropewaleLandingPage />} />
                
                {/* 404 Fallback */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
                      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
                      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
                      <a 
                        href="/" 
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Go Back Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </main>
          </Suspense>
          
          {/* Footer - Critical component, loads immediately */}
          <Footer />
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;