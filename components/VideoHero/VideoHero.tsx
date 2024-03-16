import React from "react";

const VideoHero = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <video
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        className="h-full object-cover"
      >
        <source src={"/videos/website-video-2.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoHero;
