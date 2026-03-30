"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/hero-main.png", alt: "중앙요양원 옥상 공연", position: "center 60%" },
  { src: "/IMG_4956.JPG", alt: "중앙요양원 건물 외관", position: "center top" },
  { src: "/IMG_6984.JPG", alt: "카페형 라운지", position: "center center" },
  { src: "/IMG_6913.JPG", alt: "생일 파티", position: "center center" },
  { src: "/IMG_6990.JPG", alt: "옥상 공연", position: "center 40%" },
  { src: "/IMG_6898.JPG", alt: "따뜻한 돌봄", position: "center center" },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            animation: i === current ? "heroZoomIn 12s ease-out forwards" : "none",
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            style={{ objectPosition: slide.position }}
            priority={i === 0}
          />
        </div>
      ))}
    </>
  );
}
