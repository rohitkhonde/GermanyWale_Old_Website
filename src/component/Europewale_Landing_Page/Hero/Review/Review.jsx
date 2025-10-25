import React, { useState, useEffect } from 'react';

// --- Mock Data ---
// Updated with the new review data
const testimonials = [
  {
    id: 1,
    name: "Utkarsh Singh Sikarwar",
    initial: "U",
    rating: 5,
    quote: "I had a great experience with Germanywale team. The team was knowledgeable, responsive, and guided me through each step of the process, from university selection to document preparation and visa application.",
    backgroundColor: "bg-yellow-500",
  },
  {
    id: 2,
    name: "Derin Demir",
    initial: "D",
    rating: 5,
    quote: "I really did enjoy my journey with Germanywale and felt comfortable talking about my goals. The communication was also good.",
    backgroundColor: "bg-green-500",
  },
  {
    id: 3,
    name: "Sachin Ayyappasamy",
    initial: "S",
    rating: 5,
    quote: "The entire process was smooth, and the team at Germanywale was incredibly supportive, helping me overcome every challenge I faced during the application process.",
    backgroundColor: "bg-red-500",
  },
  {
    id: 4,
    name: "Aditi Sharma",
    initial: "A",
    rating: 5,
    quote: "Germanywale provided excellent support, making my transition seamless. Highly recommend their services.",
    backgroundColor: "bg-blue-500",
  },
];


// --- SVG Icons ---
const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const StarIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);

const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
};

// --- Testimonial Card Component (Updated Design) ---
const TestimonialCard = ({ item }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2"
    style={{
      fontFamily:"Gilroy"
    }}>
        <div className="bg-white rounded-xl shadow-lg flex flex-col h-full">
            <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                    <div className={`w-14 h-14 ${item.backgroundColor} rounded-full flex items-center justify-center text-white text-2xl font-semibold`}>
                        {item.initial}
                    </div>
                    <div className="ml-4">
                        <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                        <StarRating rating={item.rating} />
                    </div>
                </div>
                <p className="text-gray-600 text-md leading-relaxed">"{item.quote}"</p>
            </div>
        </div>
    </div>
  );
};

const RatingSection = () => {
    return (
      <div className="text-center my-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4"
        style={{fontFamily:"Gilroy"}}>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
            alt="Google Logo"
            className="w-24 md:w-32"
          />
          <div>
            <h2 className="text-xl md:text-2xl text-left font-semibold text-gray-600">
              Google Rating
            </h2>
            <div className="flex items-center gap-1 text-yellow-400">
              <strong className="text-gray-900 text-4xl font-bold mr-2">4.7</strong>
              <StarIcon className="w-8 h-8" />
              <StarIcon className="w-8 h-8" />
              <StarIcon className="w-8 h-8" />
              <StarIcon className="w-8 h-8" />
              <StarIcon className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-sm text-left mt-2 text-gray-500">
              See all our reviews (111)
            </p>
          </div>
        </div>
      </div>
    );
};

// --- Main Slider Component ---
export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleItems = () => {
    if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  const [visibleItems, setVisibleItems] = useState(getVisibleItems());

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      setCurrentIndex(0); 
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjusted to handle cases where there are fewer items than visible slots
  const maxIndex = Math.max(0, testimonials.length - visibleItems);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="bg-slate-50 font-sans py-16 sm:py-24"
    style={{fontFamily:"Gilroy"}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-4 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent text-center">
                The Trust We've Earned
            </h2>
            <div className="flex gap-2">
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="p-2 rounded-full bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed w-10 h-10 flex items-center justify-center transition-opacity"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeftIcon />
                </button>
                <button
                    onClick={nextSlide}
                    disabled={currentIndex === maxIndex}
                    className="p-2 rounded-full bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed w-10 h-10 flex items-center justify-center transition-opacity"
                    aria-label="Next testimonial"
                >
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
        
        <RatingSection />
        
        {/* Constrained width of the slider */}
        <div className="max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out -mx-2"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} item={testimonial} />
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
