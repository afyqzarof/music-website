import React from "react";

const VideoHero = () => {
  return (
    <video
      preload="auto"
      autoPlay
      muted
      loop
      className="h-full w-full object-cover"
    >
      <source src={"/videos/website-video.mp4"} type="video/mp4" />
    </video>
  );
};

export default VideoHero;
