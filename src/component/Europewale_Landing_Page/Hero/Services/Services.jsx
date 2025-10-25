import React, { useRef, useEffect, useState } from 'react'
import video2 from "./video2.mp4"
import video1 from "./video1.mp4"
import LOR from "./LOR.mp4"
import unapp from "./universityapplication.mp4"
import university from "./university.mp4"
import visa from "./visa.mp4"
import courseselection from "./courseselection.mp4"
import travel from "./travel.mp4"

const videos = [
  { src: video1, title: 'Free Counselling' },
  { src: courseselection, title: 'University Shortlisting' },
    { src: video2, title: 'Statement of Purpose' },
    { src: unapp, title: 'Curriculum Vitae' },
    { src: LOR, title: 'Letter of Recommendation' },
   { src: university, title: 'University Application' },
  { src: visa, title: 'Visa Assistance' },
  { src: travel, title: 'Travel Arrangement' },
  
];

const Services = () => {
  const videoRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobileDevice);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    // Autoplay videos on mobile (muted autoplay is allowed by most browsers)
    if (isMobile) {
      videoRefs.current.forEach(vid => {
        if (vid) {
          vid.muted = true;
          vid.loop = true;
          vid.playsInline = true;
          vid.play().catch(e => console.log("Autoplay prevented:", e));
        }
      });
    }

    return () => {
      window.removeEventListener('resize', checkIfMobile);
      videoRefs.current.forEach(vid => {
        if (vid) vid.pause();
      });
    };
  }, [isMobile]);

  const handleMouseEnter = idx => {
    if (!isMobile) {
      const vid = videoRefs.current[idx];
      if (vid) vid.play().catch(e => console.log("Play error:", e));
    }
  };

  const handleMouseLeave = idx => {
    if (!isMobile) {
      const vid = videoRefs.current[idx];
      if (vid) {
        vid.pause();
        vid.currentTime = 0;
      }
    }
  };

  return (
    <div className="my-12 md:my-16"> {/* Added vertical margins */}
      <div className="heading flex items-center justify-center">
        <h1 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent">
          Our Services
        </h1>
      </div>
      <div className="w-full flex justify-center mt-8 md:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
          {videos.map((video, idx) => (
            <div
              className="video-card flex flex-col items-center justify-center p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 bg-white"
              key={video.src}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <div className="w-full aspect-video overflow-hidden rounded-lg bg-gray-100">
                <video
                  ref={el => (videoRefs.current[idx] = el)}
                  src={video.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload={isMobile ? "auto" : "metadata"}
                  disablePictureInPicture
                  controls={false} 
                />
              </div>
              <h3 className="text-center text-lg font-semibold mt-4 mb-2">
                {video.title}
              </h3>
              <button
                className="apply-btn mt-2 px-4 py-2 text-white font-semibold transition cursor-pointer hover:opacity-90"
                style={{
                  background: "linear-gradient(91.44deg, #FF9422 17.06%, #D63715 52.08%)",
                  borderRadius: "10px",
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services