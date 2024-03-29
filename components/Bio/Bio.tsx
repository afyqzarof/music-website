import React from "react";
import Scene from "../Scene/Scene";

const Bio = () => {
  const links = [
    {
      link: "https://open.spotify.com/artist/3RZ37emJIH1jGRd2stTHWz?si=OoYxZ89mRo-5rhBpGxwGpA",
      name: "spotify",
    },
    {
      link: "https://music.apple.com/us/artist/afyq-eyzar/1486835866",
      name: "apple music",
    },
    {
      link: "https://youtube.com/@nuclear.instruments",
      name: "youtube",
    },
    {
      link: "https://www.instagram.com/nuclear.instruments/",
      name: "instagram",
    },
    {
      link: "https://www.tiktok.com/@nuclear.instruments",
      name: "tiktok",
    },
  ];
  return (
    <section
      className="absolute bottom-0 z-10 h-screen min-h-screen w-screen overflow-hidden bg-black bg-opacity-70  backdrop-blur-xl sm:flex"
      id="bio"
    >
      <ul className="p-6 sm:min-w-[28rem]">
        {links.map((item) => (
          <li key={item.name} className="mb-6">
            <a
              href={item.link}
              target="_blank"
              className="pb-3 text-5xl font-light uppercase text-[#e5dc28] hover:text-[#e78018] sm:text-6xl"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="h-full w-full">
        <Scene position={[0, 0, 5]} />
      </div>
    </section>
  );
};

export default Bio;
