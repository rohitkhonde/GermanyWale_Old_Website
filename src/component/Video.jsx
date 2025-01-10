import React, { useEffect, useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set the video to start at 3 seconds
      videoRef.current.currentTime = 3;
    }
  }, []);

  return (
    <div className="flex justify-center items-center p-6 sm:p-10">
      <video
        ref={videoRef}
        controls
        className="h-36 w-full sm:h-96 sm:w-1/2"
        preload="auto"
      >
        <source src="https://www.example.com/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
