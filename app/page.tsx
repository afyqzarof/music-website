"use client";
import VideoHero from "@/components/VideoHero/VideoHero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useGSAP(() => {
    gsap.fromTo(
      ".bio",
      {
        y: "100vh",
      },
      {
        y: "100vh",
        duration: 5,
        scrollTrigger: {
          trigger: ".bio-title",
          toggleActions: "restart none none none",
          // start: "bottom bottom",
          // end: "top 20%",
          scrub: true,
        },
      },
    );
  });
  return (
    <main className="h-[200vh]">
      <section className="video fixed h-screen w-screen">
        <img
          src="/svg/eyzar-white.svg"
          alt="afyq eyzar"
          className="absolute inset-0 m-auto w-[85vw]"
        />
        <VideoHero />
      </section>
      <section className="bio z-50 h-screen bg-slate-50 p-3">
        <h1 className="bio-title text-7xl">here is my bio</h1>
        <a href="#">link to somewhere</a>
      </section>
    </main>
  );
}
