import React, { useEffect, useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => {
        // Set the video to start at 3 seconds
        video.currentTime = 3;
        video.play(); // Automatically play the video
      };

      // Add event listener to ensure `currentTime` is set after metadata is loaded
      video.addEventListener("canplay", handleCanPlay);

      return () => {
        // Cleanup event listener
        video.removeEventListener("canplay", handleCanPlay);
      };
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
