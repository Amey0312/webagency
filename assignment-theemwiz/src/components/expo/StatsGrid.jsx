import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const StatsGrid = ({ data, background = "bg-[#FDF0E9]" }) => {
  const containerRef = useRef();

  useGSAP(() => {
    const items = gsap.utils.toArray(containerRef.current.children);

    gsap.from(items, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`epilogue max-w-7xl mx-auto mt-8 px-4 md:grid md:grid-cols-3 gap-4 ${background}`}
    >
      {data.map((item, index) => (
        <div key={index} className="p-8 border border-gray-300">
          <h1 className="text-6xl text-black font-semibold">{item.value}</h1>
          <p className="text-lg">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
