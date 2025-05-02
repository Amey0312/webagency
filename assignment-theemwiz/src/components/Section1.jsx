import React from 'react';
import Sponsors from './expo/Sponsers';
import StatsGrid from './expo/StatsGrid';
import ImageTextSection from './shared/ImageTextSection';
import PointList from './shared/PointList';
import { Video } from 'lucide-react';
import VideoReelSection from './shared/VideoReelSection';

const Section1 = () => {
  const statsData = [
    { value: "42%", label: "Years of Experience" },
    { value: "73+", label: "Agency members" },
    { value: "5,000", label: "Projects complete" },
  ];

  const points = [
    { number: 1, text: "Full service range including" },
    { number: 2, text: "Technical skills, design, business" },
    { number: 3, text: "Themselves in the merchant's" },
  ];

  return (
    <section className="section-1 w-full bg-[#FDF0E9]">
      <Sponsors />
      <hr />

      <ImageTextSection
        imageSrc="./assets/image4.png"
        imageFirst={true}
        subHeading="About"
        heading="An Experience Design Agency"
        description="Ability to put themselves in the merchant. It is meant to partner on the long run, and work as an extension of the merchant's team."
        buttonText="About Us"
        buttonStyle="bg-white text-amber-700 font-extrabold rounded-lg hover:bg-[#FDF0E9]"
      />

      <StatsGrid data={statsData} />

      <div className="max-w-7xl mx-auto pb-20 mt-8 px-4 flex flex-col md:flex-row items-center justify-between">
        <ImageTextSection
          imageSrc=""
          imageFirst={false}
          subHeading="HOW WE WORK"
          heading="Making Your Projects Look Awesome"
          description="Technical skills, design, business understanding, ability to put themselves in the merchant's shoes."
          buttonText="Read More"
          buttonStyle="border-b-2 border-b-[#EF6D58] py-2 text-[#EF6D58] font-extrabold hover:bg-yellow-200"
        />
        <PointList points={points} />
      </div>

      <hr />

      {/* <ImageTextSection
        imageSrc="./assets/image5.png"
        imageFirst={true}
        subHeading="VIDEO REEL"
        heading="Unlock The Greatest Value Possible"
        description="Design, business understanding, ability to put themselves in the merchant's shoes meant to partner."
      /> */}
      <VideoReelSection />
    </section>
  );
};

export default Section1;
