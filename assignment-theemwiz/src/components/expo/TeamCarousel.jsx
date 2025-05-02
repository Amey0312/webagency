import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { img: "./assets/person2.png", name: "Azah Anyeni", role: "Designer" },
  { img: "./assets/person4.png", name: "Roelof Bekkenenks", role: "React Developer" },
  { img: "./assets/person3.png", name: "Leonardo Oliverira", role: "Illustrator" },
  { img: "./assets/person5.png", name: "Izabella Tabakova", role: "Product Designer" },
  { img: "./assets/person1.png", name: "Eve", role: "Java Designer" },
];

const TeamCarousel = () => {
  const scrollRef = useRef();
  const containerRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    container.scrollLeft += direction === "right" ? 300 : -300;
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate heading and buttons
      gsap.from(".team-heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".team-heading",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate team cards
      gsap.from(".team-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-10">
      <div className="epilogue max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold text-[#EF6D58] mb-4 team-heading">
          Our Team
        </h2>
        <div className="flex justify-between items-center mb-4 team-heading">
          <p className="text-xl md:text-5xl font-extrabold text-white mb-2">
            Team of Designers <br /> and Developers
          </p>
          <div className="space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card min-w-[250px] shadow rounded-lg p-6 flex-shrink-0 bg-[#1f1f2e]"
            >
              <img src={member.img} alt={member.name} className="h-[12rem] rounded-md mb-4" />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
