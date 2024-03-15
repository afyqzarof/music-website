"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Scene from "../Scene/Scene";

gsap.registerPlugin(ScrollTrigger);
const Bio = () => {
  useGSAP(() => {
    const startTime = 5;
    const tl = gsap.timeline({ repeat: -1 });
    gsap.from("#arrow", {
      opacity: 0,
      duration: startTime,
      ease: "power3.out",
    });
    tl.to("#arrow", { y: 15, duration: 1 });
    tl.to("#arrow", { y: 0, duration: 1 });
    tl.to("#arrow", { y: 15, duration: 1 });
    tl.to("#arrow", { y: 0, duration: 1 });
    tl.startTime(startTime);

    gsap.fromTo(
      "#bio",
      {
        y: "100vh",
      },
      {
        y: "100vh",
        duration: 5,
        scrollTrigger: {
          trigger: "#bio-title",
          toggleActions: "restart none none none",
          scrub: true,
        },
      },
    );
  });
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
      className="z-50 h-screen max-h-screen overflow-hidden bg-red-900 bg-opacity-[98%] px-4"
      id="bio"
    >
      <h1
        className="mt-[-3.5rem] text-[7rem] font-semibold uppercase text-stone-50 sm:mt-[-7rem] sm:text-[15rem]"
        id="bio-title"
      >
        links
      </h1>
      <div className="sm:flex sm:h-full">
        <ul className=" mt-6 h-1/2 pl-3">
          {links.map((item) => (
            <li key={item.name} className="mb-6">
              <a
                href={item.link}
                target="_blank"
                className="pb-3 text-6xl text-stone-50 hover:text-yellow-400 sm:text-7xl"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden h-full flex-1 sm:block">
          <Scene />
        </div>
      </div>

      <div className="h-full w-full sm:hidden">
        <Scene />
      </div>
    </section>
  );
};

export default Bio;
