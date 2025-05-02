import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQItem from "./expo/FAQItem";
import ContactForm from "./shared/ContactForm";
import Footer from "./Footer";
import LocationMap from "./shared/LocationMap";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const mapPosition = [19.0760, 72.8777];
  const [openIndex, setOpenIndex] = useState(null);
  const leftRef = useRef(null);

  const faqItems = [
    {
      question: "A digital agency is a business",
      answer:
        "Digital marketing efforts. Instead of handling in-house. They can provide your business with a variety of digital solutions...",
    },
    {
      question: "Hire to outsource your digital",
      answer:
        "Outsourcing digital efforts allows businesses to focus on core operations while experts handle marketing.",
    },
    {
      question: "Marketing efforts",
      answer:
        "Marketing efforts include SEO, social media, paid ads, and more to drive traffic and conversions.",
    },
    {
      question: "Can provide your business",
      answer:
        "Agencies provide strategies, analytics, design, and tech to enhance your digital presence.",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(leftRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, { scope: leftRef });

  return (
    <div className="bg-[#fef3ec] text-gray-800 epilogue">
      {/* FAQ */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8">
        <div ref={leftRef}>
          <h5 className="text-sm text-[#EF6D58] font-semibold uppercase mb-2">FAQ</h5>
          <h2 className="text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="mb-4 text-lg">
            A digital agency is a business you hire to outsource your digital marketing efforts...
          </p>
          <a href="#" className="text-[#EF6D58] font-semibold hover:underline">
            Contact Us
          </a>
        </div>

        <div>
          {faqItems.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              index={idx}
              openIndex={openIndex}
              toggleDropdown={toggleDropdown}
            />
          ))}
        </div>
      </section>

      {/* Contact Map + Form */}
      <section className="relative h-[500px]">
        <LocationMap position={mapPosition} />
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Section4;
