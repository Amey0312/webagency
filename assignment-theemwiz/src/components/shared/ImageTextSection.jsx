import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageTextSection = ({
  imageSrc,
  imageFirst = true,
  heading,
  subHeading,
  description,
  buttonText,
  buttonStyle,
  children,
}) => {
  const imageRef = useRef();
  const sectionRef = useRef();
  
  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "ease-in",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 55%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "ease-out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 55%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-7xl mx-auto pb-20 mt-8 px-4 flex flex-col md:flex-row items-center justify-between"
    >
      {imageFirst && (
        <div  ref={imageRef} className="md:w-1/2">
          <img src={imageSrc} alt={heading} className="w-full h-auto rounded-lg" />
        </div>
      )}
      <div className="md:w-1/2 ml-8 mt-16 epilogue">
        {subHeading && <p className="text-lg text-[#EF6D58] mb-2">{subHeading}</p>}
        <h1 className="text-5xl font-extrabold text-[#EF6D58] mb-4">{heading}</h1>
        {description && <p className="text-lg text-[#EF6D58] mb-6">{description}</p>}
        {children}
        {buttonText && (
          <button className={`px-6 py-3 ${buttonStyle} transition mr-4`}>
            {buttonText}
          </button>
        )}
      </div>
      {!imageFirst && (
        <div className="md:w-1/2">
          {/* <img src={imageSrc} alt={heading} className="w-full h-auto rounded-lg" /> */}
        </div>
      )}
    </div>
  );
};

export default ImageTextSection;
