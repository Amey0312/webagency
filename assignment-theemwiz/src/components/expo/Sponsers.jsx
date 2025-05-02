import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
  const sponsors = [
    "./assets/sponsors/sponsor1.png",
    "./assets/sponsors/sponsor2.png",
    "./assets/sponsors/sponsor3.png",
    // "./assets/sponsors/sponsor4.png",
    "./assets/sponsors/sponsor5.png",

  ];


  const containerRef = useRef();
  useGSAP(() => {
    gsap.from(containerRef.current, {
      x:-300,
      opacity:0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "top 40%",
        toggleActions: "play none none reverse", // animate in, no pause, no reverse unless scrolling back
        // markers: true,
      },
    });
  }, []);

  return (
    <div id="sponsors" ref={containerRef} className="max-w-7xl mx-auto px-6 mb-8 sponsors">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  items-center justify-items-center">
        {sponsors.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Sponsor ${index + 1}`}
            className="h-10 w-20 text-center mt-8"
          />
        ))}
      </div>
    </div>

  );
};

export default Sponsors;
