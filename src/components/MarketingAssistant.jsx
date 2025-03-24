"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const MarketingAssistant = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const boxes = [
    {
      img: "http://cdn.prod.website-files.com/6720fe2adbde44ff774be856/675af2e2f618d987225b4b0e_Frame%201244833489.svg",
      title: "Competitor Insights",
      description:
        "Uncover market opportunities and analyze competitor strategies with precision. Use these learnings to refine your content and climb the search rankings.",
    },
    {
      img: "https://cdn.prod.website-files.com/6720fe2adbde44ff774be856/675af2d6e1e8005939757450_Frame%201244833491.svg",
      title: "Seamless Integrations",
      description:
        "Connect with your favorite marketing tools like Ahrefs, Google Search Console, and more for keyword research, gap analytics & reporting.",
    },
    {
      img: "https://cdn.prod.website-files.com/6720fe2adbde44ff774be856/675af2ca8c42d1138c46cdef_Frame%201430106170.svg",
      title: "Smart File Analysis",
      description:
        "Upload your files and let AI do the heavy lifting. Summarize information, create detailed reports, and visualize data effortlessly.",
    },
    {
      img: "https://cdn.prod.website-files.com/6720fe2adbde44ff774be856/675af299701af9b216feeed7_Frame%201430105961.svg",
      title: "Deep Web Research",
      description:
        "Access the latest insights from across the internet, complete with citations. Our AI analyzes hundreds of sources so you don't have to.",
    },
  ];

  const handlePrev = () => {
    setVisibleIndex((prevIndex) => (prevIndex === 0 ? boxes.length - 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setVisibleIndex((prevIndex) => (prevIndex >= boxes.length - 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="p-6 bg-gray-50">
    
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Research <span className="text-black">Smarter</span> With Your AI Marketing Assistant
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Beyond basic ChatGPT alternatives, our intelligent AI marketer analyzes 100+ sources in real time, pulls insights from Ahrefs, Google Analytics, and marketing tools, and transforms complex data into winning strategies—all in one place.
        </p>
      </div>

  
      <div className="flex justify-end items-center gap-4 mb-5">
        <button
          onClick={handlePrev}
          className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-400 hover:text-white transition duration-200"
        >
          <MdOutlineKeyboardArrowLeft className="text-gray-600 text-2xl" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-400 hover:text-white transition duration-200"
        >
          <MdOutlineKeyboardArrowRight className="text-gray-600 text-2xl" />
        </button>
      </div>

      
      <div className="flex justify-between">
        {boxes.slice(visibleIndex, visibleIndex + 2).map((box, index) => (
          <div key={index} className="w-1/2 bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
            <img src={box.img} alt={box.title} className="w-[70%] mx-auto rounded-lg mb-4" />
            <h2 className="text-black text-[17px]font-semibold text-left">{box.title}</h2>
            <p className="text-gray-700 text-left mt-2">{box.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingAssistant;
