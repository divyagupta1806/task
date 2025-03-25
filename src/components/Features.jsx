'use client'
import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Features = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-0 ">
      <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            imageSrc="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720c63eacf38f20334aca03_Research.svg"
            title="Research/Planning"
            description="Access real-time info from Ahrefs, Search Console, Reddit for up-to-date strategies & content plans."
          />
          <FeatureCard
            imageSrc="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720c63d11b64af02315328f_Generate.svg"
            title="Generate"
            description="Create & edit content in your brand voice using advanced AI models like o3-mini, o1, GPT-4o & Claude."
          />
          <FeatureCard
            imageSrc="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720c63d11b64af023153298_Optimize.svg"
            title="Optimize"
            description="Enhance content, SEO performance, and campaign effectiveness with AI-powered recommendations."
          />
          <FeatureCard
            imageSrc="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720c63d1190196beb782432_Publish.svg"
            title="Publish"
            description="One-click publishing to WordPress, social media, and any platform you use."
          />
        </div>

    
        <div className="max-w-7xl mx-auto mb-16 py-16">
          <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-xl">
            <video 
              className="absolute top-0 left-0 w-[100%] h-auto object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source 
                src="https://videos.writesonic.com/landing-page/original/Writesonic%20Landing%20Page%20-%20Publish.mp4" 
                type="video/mp4" 
              />
            </video>
          </div>
          
          <div className="text-center mt-8">
            <h2 className="text-xl mb-6">
              <div className="md:hidden"> 
                <div className="text-[#6B7280]">
                  TRUSTED BY <span className="text-gray-300 font-bold">30,000+</span>
                </div>
                <div className="text-[#6B7280]">
                  TEAMS AND <span className="text-gray-300 font-bold">10 M</span> MARKETERS
                </div>
              </div>
              
              <div className="hidden md:block"> 
                <span className="text-[#6B7280]">TRUSTED BY </span>
                <span className="font-bold">30,000+</span>
                <span className="text-[#6B7280]"> TEAMS AND </span>
                <span className="font-bold">10 M</span>
                <span className="text-[#6B7280]"> MARKETERS</span>
              </div>
            </h2>
            
            <button 
              className="group relative inline-flex items-center justify-center px-5 py-3 text-lg font-medium text-[#0066FF] rounded-full border-2 border-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all duration-200"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started Free
              {isHovered ? (
                <HiArrowRight className="ml-2 text-xl" />
              ) : (
                <MdOutlineArrowForwardIos className="ml-2 text-sm" />
              )}
            </button>
          </div>
        </div>

       

      </div>
    </section>
    
  );
};

const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-[#f5f5f7] dark:bg-gray-600 p-6 rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300 border-2 border-[#f5f5f7] dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 cursor-pointer">
      <div className="mb-4">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-12 h-12 object-contain"
        />
      </div>
      <h3 className="text-2xl font-medium mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default Features; 