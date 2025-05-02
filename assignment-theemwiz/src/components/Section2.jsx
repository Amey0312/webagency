import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TeamCarousel from './expo/TeamCarousel';

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const containerRef = useRef();

  const points = [
    { number: 14, text: "Show All" },
    { number: 6, text: "Design" },
    { number: 4, text: "Branding" },
    { number: 3, text: "Illustration" },
    { number: 1, text: "Motion" },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".portfolio-heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".portfolio-heading",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate points
      gsap.from(".portfolio-point", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".portfolio-point",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate grid
      gsap.from(".portfolio-card-left", {
        opacity: 0,
        x: -100,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".portfolio-card-left",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".portfolio-card-right", {
        opacity: 0,
        x: 100,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".portfolio-card-left",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate CTA box
      gsap.from(".cta-box", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".cta-box",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#28293E] epilogue">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* slot-1 */}
        <h2 className="text-lg text-[#EF6D58] mt-16 mb-2 portfolio-heading">PORTFOLIO</h2>
        <h1 className="text-5xl font-extrabold text-white mb-4 portfolio-heading">Latest Work</h1>

        <div className="flex">
          {points.map((point, index) => (
            <div key={index} className="m-4 space-x-4 mb-14 portfolio-point">
              <p className="text-gray-400 text-[10px] md:text-lg">
                {point.text}<sup>{point.number}</sup>
              </p>
            </div>
          ))}
        </div>

        {/* <div className="w-full mx-auto md:h-[40rem] mb-8 mt-8 px-4 md:grid md:grid-cols-5 md:grid-rows-2 gap-5">
          {[
            { span: 2, tag: "Design", title: "Sofa" },
            { span: 3, tag: "Branding", title: "KeyBoard" },
            { span: 3, tag: "Illustration", title: "Work Media" },
            { span: 2, tag: "Motion", title: "DDDone" },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-8 border md:col-span-${item.span} border-white rounded-md flex flex-col justify-end items-start portfolio-card`}
            >
              <a className="text-lg bg-white text-black p-3 rounded-2xl">{item.tag}</a>
              <h1 className="text-4xl text-white font-extrabold mt-4">{item.title}</h1>
            </div>
          ))}
        </div> */}

        {/* Grid (no animation) */}
        <div className="w-full mx-auto md:h-[40rem] mb-8 mt-8 px-4 md:grid md:grid-cols-5 md:grid-rows-2 gap-5 ">
          <div className="p-8 border mt-4 md:col-span-2 border-white rounded-md flex flex-col justify-end items-start  portfolio-card-left "
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oz84JSZRRySBXbUGRu17UG1M5pys7JsR2w&s')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <a className="text-lg bg-white text-black p-3 rounded-2xl">Design</a>
            <h1 className="text-4xl text-white font-extrabold mt-4">Sofa</h1>
          </div>
          <div className="p-8 border mt-4 md:col-span-3 border-white rounded-md flex flex-col justify-end items-start portfolio-card-left "
          
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGMNyVE0PVU3xJypYrN2fOfQr9JUsWYSLXw&s')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <a className="text-lg bg-white text-black p-3 rounded-2xl">Branding</a>
            <h1 className="text-4xl text-white font-extrabold mt-4">KeyBoard</h1>
          </div>

          <div className="p-8 border mt-4 md:col-span-3 border-white rounded-md flex flex-col justify-end items-start portfolio-card-right "
          
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcLpa4yrJU_kcGSQAE0t4v2vmQucLzGmFGA&s')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <a className="text-lg bg-white text-black p-3 rounded-2xl">Illustration</a>
            <h1 className="text-4xl text-white font-extrabold mt-4">Work Media</h1>
          </div>
          <div className="p-8 border mt-4 md:col-span-2 border-white rounded-md flex flex-col justify-end items-start portfolio-card-right "
          
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oz84JSZRRySBXbUGRu17UG1M5pys7JsR2w&s')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <a className="text-lg bg-white text-black p-3 rounded-2xl">Motion</a>
            <h1 className="text-4xl text-white font-extrabold mt-4">DDDone</h1>
          </div>
        </div>

        <button className="px-6 py-3 border border-white text-gray-200 font-extrabold rounded-lg hover:bg-blue-950 transition mb-8">
          EXPLORE MORE
        </button>

        {/* slot-2 CTA */}
        <div className="epilogue w-full mx-auto px-4 mb-8 flex flex-col md:flex-row justify-between bg-white rounded-xl cta-box">
          <div className="mx-3 mt-16 mb-8">
            <img src="./assets/image2.png" alt="" className="h-20 w-20 md:h-20 md:w-20 absolute my-[-100px] rounded-full " />
            <p className="text-lg text-[#EF6D58] mb-2">GET STARTED</p>
            <h1 className="text-5xl font-extrabold text-black mb-4">We Help Companies Move Faster</h1>
            <button className="px-6 py-3 bg-[#EF6D58] text-white font-extrabold rounded-lg hover:bg-blue-950 transition mr-4 ">
              Contact Us
            </button>
          </div>
          
          <div className='right-10 absolute bg-black rounded-full mt-8'>
            <img src="./assets/person3.png" alt="Hero Illustration" className="  w-full h-[10rem] rounded-full" />
          </div>
        </div>

        {/* slot-3 */}
        <TeamCarousel />
      </div>
    </div>
  );
};

export default Section2;
