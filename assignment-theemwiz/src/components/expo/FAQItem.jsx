import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ item, index, openIndex, toggleDropdown }) => {
  const itemRef = useRef(null);

  useGSAP(() => {
    gsap.from(itemRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: itemRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: itemRef }); // scoped animation to this item

  return (
    <div
      ref={itemRef}
      className={`p-4 rounded shadow cursor-pointer transition ${
        openIndex === index ? 'bg-white' : 'bg-[#fef3ec]'
      }`}
      onClick={() => toggleDropdown(index)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{item.question}</h3>
        <span className="text-[#EF6D58] text-lg">
          {openIndex === index ? '−' : '+'}
        </span>
      </div>
      {openIndex === index && (
        <p className="mt-2 text-gray-600 text-sm">{item.answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
