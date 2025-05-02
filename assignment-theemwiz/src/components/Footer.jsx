import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  GlobeAltIcon as Facebook,
  ChatBubbleLeftRightIcon as Twitter,
  CameraIcon as Instagram,
} from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    const columns = gsap.utils.toArray('.footer-column');

    gsap.from(columns, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 80%',
      },
    });

    gsap.from('.footer-bottom', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 80%',
      },
    });
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-[#fef3ec] border-t py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-4 md:grid-cols-4 gap-8 text-sm">
        <div className="footer-column">
          <h4 className="text-2xl text-[#EF6D58] mb-2 font-extrabold">Agency</h4>
        </div>
        <div className="footer-column">
          <h4 className="font-semibold text-[#EF6D58] mb-4">Menu</h4>
          <ul className="space-y-1 ">
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="font-semibold text-[#EF6D58] mb-4">Service</h4>
          <ul className="space-y-1 ">
            <li>Design</li>
            <li>Development</li>
            <li>Marketing</li>
            <li>See More</li>
          </ul>
        </div>

        <div className="footer-column flex space-x-3 text-rose-500 text-xl">
          <Facebook className="w-6 h-6 cursor-pointer hover:text-rose-600 transition" />
          <Twitter className="w-6 h-6 cursor-pointer hover:text-rose-600 transition" />
          <Instagram className="w-6 h-6 cursor-pointer hover:text-rose-600 transition" />
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500 footer-bottom">
        Copyright © 2025 Amey. All Rights Reserved. |
        <a href="#" className="mx-2 hover:underline">Terms of Use</a> |
        <a href="#" className="ml-2 hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
