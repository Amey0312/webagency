import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const VideoReelSection = () => {
  const sectionRef1 = useRef();

  useGSAP(() => {
    gsap.from(".video-reel-content", {
        opacity: 0,
        x: -150,
        duration: 1,
        ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef1.current,
        start: "top 60%",
      },
    });
    gsap.from(".section-text", {
        opacity: 0,
        x: 150,
        duration: 1,
        ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef1.current,
        start: "top 60%",
      },
    });


  }, { scope: sectionRef1 });

  return (
    <section className="bg-[#FDEFE7] py-16 px-4">
      <div
        ref={sectionRef1}
        className="video-reel-content max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left Video */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <video
            src="./assets/video.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 text-[#F56A50] section-text">
          <p className="uppercase tracking-wide font-semibold mb-2">
            Video Reel
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Unlock The Greatest Value Possible
          </h2>
          <p className="text-lg text-[#F56A50] max-w-md">
            Design, business understanding, ability to put themselves in the
            merchant's shoes meant to partner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoReelSection;
