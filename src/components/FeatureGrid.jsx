'use client'
import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { MdOutlineArrowForwardIos } from "react-icons/md";

const FeatureGrid = () => {
  const [isHovered, setIsHovered] = useState(false);

 

  return (
    <div className="flex flex-col items-center p-8 bg-black min-h-screen">
     
    
      <div className="bg-black text-white text-center p-8  rounded-lg">
        <div className="space-y-1 md:space-y-0">
          <h2 className="text-[34px] md:text-[46px] font-bold whitespace-nowrap">
            <span className="text-[#53A972] block md:inline leading-none">SEO That Works.</span>
          </h2>
          <h3 className="text-[34px] md:text-[46px] font-bold text-white md:mb-4">
            <span className="block md:inline whitespace-nowrap">Boost Your Search</span>
            <span className="block md:inline whitespace-nowrap -mt-1 md:mt-0">Rankings, Effortlessly.</span>
          </h3>
        </div>
        <p className="text-[15px] md:text-[22px] text-[#B1B1B4] mt-4 max-w-3xl mx-auto">
          The days of complex SEO are over. Writesonic AI transforms optimization into simple, actionable steps with on-page and off-page audits, content gap analysis, and automated internal linking that just works. From detailed recommendations to one-click improvements, ranking higher on Google is now as simple as hitting publish.
        </p>
        <div className="w-full max-w-7xl mt-8">
          <video controls className="w-full rounded-lg shadow-lg">
            <source src="https://videos.writesonic.com/landing-page/original/Writesonic%20Landing%20Page%20-%20Optimize.mp4" type="video/mp4" />
          </video>
          <button 
            className="group relative inline-flex items-center justify-center px-5 py-3 bg-white text-lg font-medium text-[#0066FF] rounded-full border-2 border-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all duration-200 mt-4 "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Dominate Search Rankings now
            {isHovered ? (
              <HiArrowRight className="ml-2 text-xl" />
            ) : (
              <MdOutlineArrowForwardIos className="ml-2 text-sm" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid; 