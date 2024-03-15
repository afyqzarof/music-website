"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Arrow = () => {
  useGSAP(() => {
    const startTime = 4;
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
  });
  return (
    <img
      src="/svg/arrow-down.svg"
      alt="arrow down"
      className="h-24 sm:h-[8rem]"
      id="arrow"
    />
  );
};

export default Arrow;
