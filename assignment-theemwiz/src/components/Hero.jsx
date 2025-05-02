import React from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Hero = () => {

  useGSAP(() => {
    gsap.from('.hero-text', {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger:0.7,
      ease: "power2.out"
    });

    gsap.from('.hero-h1', {
      x: 150,
      opacity: 0,
      delay:0.7,
      duration: 0.8,
      ease: "power2.out"
    });

    gsap.from('.button',{
      scale:0,
      opacity:0,
      delay:1,
      duration:0.5
    });
    gsap.to(".circle", {
      y:20,
      delay:1,
      duration: 1,   
      yoyo: true,
      ease: 'bounce',
    });
  });


  return (
    <section className="w-full bg-[#28293E] py-16 pt-20">

      <div className="max-w-7xl epilogue mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">

        {/* Text Section */}
        <div className="md:w-1/2 md:mb-0 md:mt-20 ">
          <p className="text-sm text-[#EF6D58] mb-2 hero-text">
            MODERN STUDIO
          </p>
          <div className="relative ">
            <div className="circle z-0 h-40 w-40 md:h-48 md:w-48 absolute ml-[340px] my-[-60px]">
              <img src="./assets/image2.png" alt="" className="" />
            </div>
            <h1 className="hero-h1 overflow-hidden text-6xl lg:text-[5rem] font-extrabold text-white mb-4 relative">
              We're Help To Build Your Dream Project
            </h1>
          </div>
          <p className="text-lg text-gray-200 mb-3 hero-text ">
            Agency provides a full service range including technical skills, design,business understanding.
          </p>
          <button className="button px-6 py-3 bg-[#EF6D58] text-white font-bold rounded-lg hover:bg-[#28293E] mr-4">
            HOW WE WORK
          </button>
          <button className="button px-6 py-3 text-white font-extrabold rounded-lg hover:bg-[#EF6D58] ">
            Contact Us
          </button>
          <div className="flex mb-10 md:mb-0 mt-[2rem] hero-text">
            <span className="bg-white rounded-full m-2 w-8 h-8 overflow-hidden">
              <img src="./assets/person2.png" alt="" className="w-8 h-8" />
            </span>
            <p className="text-white text-sm ml-2">"Put themselves in the merchant's shoes" <br />Meta Inc.</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 hero-h1">
          <img
            src="./assets/image1.png"
            alt="Hero Illustration"
            className="w-full md:h-[35rem]"
          />
        </div>
      </div>
    </section>
  );
};


export default Hero;
