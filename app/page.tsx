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
        className="z-50 h-screen overflow-hidden bg-gray-900 bg-opacity-[98%] px-4"
        id="bio"
      >
        <h1
          className="mt-[-3.5rem] text-[7rem] font-semibold uppercase text-stone-50 sm:mt-[-7rem] sm:text-[15rem]"
          id="bio-title"
        >
          links
        </h1>
        <div className="flex flex-col">
          <a href="#" className="pb-3 text-3xl text-stone-50">
            spotify
          </a>
          <a href="#" className="pb-3 text-3xl text-stone-50">
            apple music
          </a>
          <a href="#" className="pb-3 text-3xl text-stone-50">
            youtube
          </a>
          <a href="#" className="pb-3 text-3xl text-stone-50">
            instagram
          </a>
          <a href="#" className="pb-3 text-3xl text-stone-50">
            tiktok
          </a>
        </div>
      </section>
    </main>
  );
}
