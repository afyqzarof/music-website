"use client";
import VideoHero from "@/components/VideoHero/VideoHero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
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
    <main className="h-[200dvh] sm:h-[200vh]">
      <section className="video fixed h-[100dvh] w-screen sm:h-screen">
        <div className="relative h-full w-full">
          <img
            src="/svg/eyzar-white.svg"
            alt="afyq eyzar"
            className="absolute inset-0 m-auto w-[85vw]"
          />
          <VideoHero />
          <div className="absolute bottom-7 z-40 flex w-full justify-center">
            <img
              src="/svg/arrow-down.svg"
              alt="arrow down"
              className="h-24 sm:h-[8rem]"
              id="arrow"
            />
          </div>
        </div>
      </section>
      <section
        className="z-50 h-screen overflow-hidden bg-red-900 bg-opacity-[98%] px-4"
        id="bio"
      >
        <h1
          className="mt-[-3.5rem] text-[7rem] font-semibold uppercase text-stone-50 sm:mt-[-7rem] sm:text-[15rem]"
          id="bio-title"
        >
          links
        </h1>
        <ul className="mt-6 flex h-1/2 flex-col justify-between">
          {links.map((item) => (
            <li>
              <a
                href={item.link}
                target="_blank"
                className="ml-4 pb-3 text-6xl text-stone-50 hover:text-yellow-400 sm:text-7xl"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
