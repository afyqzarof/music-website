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
      <section className="z-50 h-screen bg-slate-50 p-3" id="bio">
        <h1 className="text-7xl" id="bio-title">
          here is my bio
        </h1>
        <a href="#">link to somewhere</a>
      </section>
    </main>
  );
}
