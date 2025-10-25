import React, { useState, useEffect } from 'react';

// Import all testimonial images
import purvanshi from "../../../../assets/studentimg/1_preview_rev_1.png";
import shagun from "../../../../assets/studentimg/ShagunShah_preview_rev_1 (1).png";
import ayush from "../../../../assets/studentimg/3_preview_rev_1.png";
import shweta from "../../../../assets/studentimg/6_preview_rev_1.png";
import abhay from "../../../../assets/studentimg/7_preview_rev_1.png";
import naveen from "../../../../assets/studentimg/naveen1.png";
import akansha from "../../../../assets/studentimg/AkankshaMourya_preview_rev_1.png";
import arshiya from "../../../../assets/studentimg/11_preview_rev_1.png";
import Taranjit from "../../../../assets/studentimg/Taranjeet (2)_preview_rev_1.png";
import kripal from "../../../../assets/studentimg/9_preview_rev_1.png";
import prasad from "../../../../assets/studentimg/prasad.png";
import antony from "../../../../assets/studentimg/5_preview_rev_1.png";
import shodhan from "../../../../assets/Updated-Testimonal/shodhanupdated.png";

// Import university logos
import purvanshiuniversity from "../../../../assets/Updated-Testimonal/purvanshiuniversity.png";
import shagununiversity from "../../../../assets/Updated-Testimonal/shagununiversity.png";
import ayushuniversity from "../../../../assets/Updated-Testimonal/ayushuniversity.png";
import naveen_university from "../../../../assets/Updated-Testimonal/naveen.png";
import akanshauniversity from "../../../../assets/Updated-Testimonal/akanshauniversity.png";
import shwetaUniversity from "../../../../assets/Updated-Testimonal/shwetauniversity.png";
import kripaluniversity from "../../../../assets/Updated-Testimonal/kripaluniversity.gif";
import abhayuniversity from "../../../../assets/Updated-Testimonal/abhayuniversity.png";
import taranjituniversity from "../../../../assets/Updated-Testimonal/taranjituniversity.png";
import prasaduniversity from "../../../../assets/Updated-Testimonal/prasaduniversity.png";
import arshiyauniversity from "../../../../assets/Updated-Testimonal/arshiyauniversity.png";
import antonyuniversity from "../../../../assets/Updated-Testimonal/antonyuniversity.png";

// --- Testimonials Data with Actual Images ---
const testimonials = [
  {
    quote: "The best part about the Germanywale team is that they don't treat you as a customer.",
    name: "Purvanshi Sharma",
    course: "MSc in Data Science",
    imageSrc: purvanshi,
    university: purvanshiuniversity,
    videoLink: "https://www.instagram.com/p/CXsiGOVvMjI/?igsh=MTEyZ2E5b3Z5b2xqdA==",
  },
  {
    quote: "Won't lie. Was a little skeptical about Germanywale in the start. But it proved me wrong in every way possible.",
    name: "Shagun Shah",
    course: "MSc in Data Science",
    imageSrc: shagun,
    university: shagununiversity,
    videoLink: "https://www.youtube.com/@germanywale_official/featured",
  },
  {
    quote: "The mentors are easy to reach and talk to, the process is simplified and their advice on writing SOPs and shortlisting universities.",
    name: "Ayush Baid",
    course: "Masters in Management",
    imageSrc: ayush,
    university: ayushuniversity,
    videoLink: "https://www.instagram.com/p/CcpG3vktcIC/?igsh=MWVtazVtN2U3ODl1bA==",
  },
  {
    quote: "Germanywale is one of the best consulting firms I have come across. Their advice and service were very genuine.",
    name: "Shweta Kumar",
    course: "Masters in Non-Financials Intensive",
    imageSrc: shweta,
    university: shwetaUniversity,
    videoLink: "https://www.instagram.com/p/C1Gy9xuLP6J/?igsh=MXkybmt3cDloNjAyYg==",
  },
  {
    quote: "The whole process was very transparent it marked my expectations. I was kept well informed about the ongoing developments.",
    name: "Abhay Ahuja",
    course: "Masters in Agriculture, Ecology and Societies",
    imageSrc: abhay,
    university: abhayuniversity,
    videoLink: "https://youtube.com/shorts/znoo0fz9ioA?si=sCzDbJrLX5DXeDpR",
  },
  {
    quote: "My experience with Germanywale has been nothing short of my high expectations. Their flexibility with assigning mentors is excellent.",
    name: "Naveen Verma",
    course: "MSc in Biological Resources",
    imageSrc: naveen,
    university: naveen_university,
    videoLink: "https://youtu.be/dTmGfOmDpkk?si=PMdvZk4QSdaa98CH",
  },
  {
    quote: "Genuinely I was very worried about my application before joining Germanywale. Team always gives me confidence and assurance that I will get an admit.",
    name: "Akanksha Mourya",
    course: "Master's in molecular life science",
    imageSrc: akansha,
    university: akanshauniversity,
    videoLink: "https://youtu.be/yFigyCOADqQ?si=kV5zBjVhyc2_gG-v",
  },
  {
    quote: "I would never forget the key role played by Team Germanywale in university shortlisting. They were available beyond the time, no matter what type of concern I have.",
    name: "Taranjit Kaur",
    course: "International Management and Leadership (MA)",
    imageSrc: Taranjit,
    university: taranjituniversity,
    videoLink: "https://www.instagram.com/p/CkRB7KdLhTW/?igsh=bmw5aG56dG15emJu",
  },
  {
    quote: "Whenever I had a doubt, the team was always there to help me out. The team gave me hope and proper guidance and motivated me a lot to go beyond.",
    name: "Kripal Kishor",
    course: "Masters in Intelligent Manufacturing",
    imageSrc: kripal,
    university: kripaluniversity,
    videoLink: "https://youtu.be/3TiiJCuJHoE?si=xMHmDDw8e10lz9uc",
  },
  {
    quote: "Germanywale provided exceptional support and engagement, promptly addressing all my questions and doubts. Their patience and reliability eased my journey.",
    name: "Prasad Patil",
    course: "Masters in Wind energy Engineering",
    imageSrc: prasad,
    university: prasaduniversity,
    videoLink: "https://youtube.com/shorts/Lo2OrJkqmR0?si=iPjX7u43FKzg6HKu",
  },
  {
    quote: "Saurabh and the entire team were in touch with me consistently the whole time and were always there if I had any doubts. I would highly recommend Germanywale to everyone.",
    name: "Arshiya Sharma",
    course: "Master's in International Business- Focus on healthcare management",
    imageSrc: arshiya,
    university: arshiyauniversity,
    videoLink: "https://youtu.be/kYGHHRW0JKA?si=CrF9YAbS6DXdlxu2",
  },
  {
    quote: "My entire application process with Germanywale has been extremely smooth. Everyone in the team is exceptional and very helpful.",
    name: "Antony Reddy",
    course: "Master of Business Administration",
    imageSrc: antony,
    university: antonyuniversity,
    videoLink: "https://youtube.com/shorts/xVFs-veJimQ?si=Mndtadq8RinUXfCR",
  },
  {
    quote: "Choosing Germanywale for my study abroad journey was the best decision I ever made, as their personalized guidance led me to my dream university with immense support.",
    name: "Shodhan",
    course: "Master's in Electromobility",
    imageSrc: shodhan,
    university: shagununiversity,
    videoLink: "https://www.instagram.com/p/C6lA9JeOWm_/?igsh=MWdybDB5N2N4YWV1dQ==",
  }
];

// --- SVG Icons ---
const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// --- Testimonial Card Component ---
const TestimonialCard = ({ item }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4 h-full"
    style={{
      fontFamily:"Gilroy"
    }}>
      <div className="bg-white rounded-xl h-full flex flex-col transform transition duration-300 hover:-translate-y-1 border border-gray-200/80">
        <div className="p-6 pt-4 relative bg-gradient-to-r from-orange-50 to-red-50 rounded-t-xl">
          <div className="absolute top-3 left-6 w-24 h-24">
            <img
              src={item.imageSrc}
              alt={item.name}
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="text-gray-700 text-md leading-relaxed min-h-[80px] mt-24"
          style={{
            fontFamily:"Gilroy"
          }}>
            <p>"{item.quote}"</p>
          </div>
        </div>

        <div className="px-6 py-3 flex-grow flex flex-col">
          <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
          <p className="text-gray-500  text-md">{item.course}</p>
          <div className="mt-4 h-10">
            <img
              src={item.university}
              alt="university logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        <div
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity text-sm rounded-b-xl mt-auto"
          onClick={() => window.open(item.videoLink, "_blank")}
        >
          <span className="font-semibold text-md">▶ Watch their story</span>
        </div>
      </div>
    </div>
  );
};

// --- Main Slider Component ---
export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to determine how many items are visible based on screen width
  const getVisibleItems = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 640) return 2; // sm
    }
    return 1; // mobile
  };

  const [visibleItems, setVisibleItems] = useState(getVisibleItems());

  // Update visible items on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      setCurrentIndex(0); 
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the maximum index to prevent sliding into empty space
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
        {/* Header Section - Centered */}
        <div className="flex flex-col items-center justify-center mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent text-center">
            What Our Students Speak
          </h2>
          {/* Navigation Buttons */}
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

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} item={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}