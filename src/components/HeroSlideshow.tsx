"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "/hero-main.png", alt: "중앙요양원 옥상 공연", position: "center 60%" },
  { src: "/new-building.jpg", alt: "중앙요양원 건물 외관", position: "center 30%" },
  { src: "/new-rehab-04.jpg", alt: "워크메이트 재활", position: "center center" },
];

const DURATION = 6000;
const FADE = 1500;

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  const advance = useCallback(() => {
    const nextIdx = (current + 1) % slides.length;
    setNext(nextIdx);
    setTransitioning(true);

    setTimeout(() => {
      setCurrent(nextIdx);
      setTransitioning(false);
      setKey((k) => k + 1);
    }, FADE);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(advance, DURATION);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <>
      {/* Current slide - slowly zooming in */}
      <div
        key={`current-${key}`}
        className="absolute inset-0"
        style={{
          animation: `heroZoomIn ${DURATION + FADE}ms ease-out forwards`,
        }}
      >
        <Image
          src={slides[current].src}
          alt={slides[current].alt}
          fill
          className="object-cover"
          style={{ objectPosition: slides[current].position }}
          priority
        />
      </div>

      {/* Next slide - fades in on top, starts at scale 1 */}
      <div
        className="absolute inset-0 transition-opacity ease-in-out"
        style={{
          opacity: transitioning ? 1 : 0,
          transitionDuration: `${FADE}ms`,
        }}
      >
        <Image
          src={slides[next].src}
          alt={slides[next].alt}
          fill
          className="object-cover"
          style={{ objectPosition: slides[next].position }}
        />
      </div>
    </>
  );
}
