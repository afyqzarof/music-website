"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const Arrow = () => {
  const [color, setColor] = useState("white");
  const colors = [
    "white",
    "pink",
    "yellow",
    "blue",
    "#43A6C6",
    "purple",
    "green",
    "red",
    "orange",
    "violet",
  ];
  const randomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };
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
    <div
      className="h-24 cursor-pointer transition-all hover:h-[9rem] sm:h-[8rem]"
      id="arrow"
      onClick={() => {
        setColor(randomColor());
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }}
      onMouseEnter={() => {
        setColor(randomColor());
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        version="1.1"
        viewBox="0 0 5.279 9.413"
        xmlSpace="preserve"
      >
        <g transform="translate(-167.414 -324.262)">
          <path
            fill={color}
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinejoin="bevel"
            strokeOpacity="1"
            strokeWidth="0.1"
            d="M169.573 324.263c-.224-.022-.48.177-.422.418.084 1.92.151 3.841.224 5.762-.174-.212-.206-.496-.323-.738-.285-.83-.45-1.711-.888-2.481-.11-.163-.291-.315-.5-.282-.212.103-.23.368-.24.575-.058.639.11 1.27.323 1.866.17.555.265 1.132.449 1.683.243.63.59 1.214.894 1.815.204.317.467.605.8.79.19.035.305-.162.345-.32.206-.803.64-1.52 1.069-2.221.435-.715.9-1.412 1.325-2.133.037-.196.13-.43-.014-.605-.252-.216-.65-.07-.813.188-.184.245-.33.521-.551.736-.266.323-.531.645-.799.966-.148-1.303-.309-2.604-.443-3.908-.051-.65-.075-1.302-.121-1.952a.37.37 0 00-.315-.159zm.109 6.798c.058-.01.005.04 0 0z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Arrow;
