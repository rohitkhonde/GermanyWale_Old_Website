import React from "react";

const Video = () => {
  return (
    <>
      <div className="flex justify-center items-center p-6 sm:p-10">
        <video controls className="h-36 w-full sm:h-96 sm:w-1/2">
          <source
            src="https://www.example.com/your-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Video;
