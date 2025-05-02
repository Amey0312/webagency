import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const PointList = ({ points }) => {
  const listRef = useRef();

  useGSAP(() => {
    const items = gsap.utils.toArray(listRef.current.children);

    gsap.from(items, {
      opacity: 0,
      x: 60,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: listRef.current,   // this is the element to watch
        start: 'top 60%',           // animation starts when element hits 85% of viewport height
        end: 'top 20%',             // optional end position
        toggleActions: 'play none none reverse', // play once, reverse on scroll up
        // scrub: true,             // optional for scroll-linked animation
        // markers: true,           // enable to debug
      },
    });
  }, []);

  return (
    <div ref={listRef} className="epilogue md:w-1/2 mb-10 md:mt-24 mt-16">
      {points.map((point, index) => (
        <div key={index} className="flex items-start space-x-4 mt-24">
          <div className="text-black text-7xl w-8 h-8 flex items-center justify-center font-bold">
            {point.number}
          </div>
          <p className="text-gray-700 text-xl">{point.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PointList;
