import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formRef = useRef(null);

  useGSAP(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: formRef });

  return (
    <div
      ref={formRef}
      className="absolute top-10 flex flex-col left-10 bg-white p-6 rounded-2xl shadow-md max-w-sm w-full"
    >
      <h3 className="font-extrabold text-xl mb-4">Get In Touch</h3>
      <form className="space-y-3">
        <input
          type="email"
          placeholder="Your email"
          className="w-full border px-3 py-2 rounded text-sm"
        />
        <select className="w-full border px-3 py-2 rounded text-sm">
          <option>Subject</option>
          <option>General Inquiry</option>
          <option>Support</option>
        </select>
        <textarea
          placeholder="Message"
          className="w-full border px-3 py-2 rounded text-sm"
          rows="3"
        />
        <div className="flex justify-end">
          <button className="bg-[#EF6D58] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-rose-600">
            SUBMIT NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
