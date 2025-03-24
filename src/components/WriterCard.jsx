import React from "react";

const features = [
  { title: "Competitor Analysis", icon: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6745e9fbeee32bdd51ce6e63_chart-no-axes-combined.svg" },
  { title: "Real Time Data Gathering", icon: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6745e9fb4646d21e1fb7022c_globe-lock.svg" },
  { title: "Fact Checking and Citing", icon: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6745e9fb2a4bcabb019e1989_quote.svg" },
  { title: "In Depth Web Research", icon: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6745e9fb32ef6501947ca443_search-check.svg" },
];

const workflowItems = [
  { title: "Research", icon: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6745a13aebe247e0026e627c_l.webp"  },
  { title: "Write", icon: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6745a313aeff338b388a6b8a_p.webp" },
  { title: "Edit", icon: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6745a3123886123dae4e1305_lis.webp" },
  { title: "Analyze", icon: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6745a31305d203a41fd869b1_m.webp" },
  { title: "Optimize", icon: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6745a312f96cd50d7a51c572_h.webp" },
  { title: "Publish", icon: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6745a31346cd999fdd18dac5_t.webp"},
];

const WriterCard = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-10 justify-center items-center p-3 md:p-6 bg-gray-50">
      
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-stretch">
        <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 w-[320px] md:w-[550px] flex flex-col">
          <div className="bg-gray-100 p-4 md:p-6 rounded-lg relative text-center flex-1">
            <h3 className="text-lg font-semibold text-pink-600">
              AI Powered Article Writer
            </h3>

            
            <div className="grid grid-cols-2 gap-4 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center bg-white shadow-md rounded-lg px-4 py-2">
                  <img src={feature.icon} alt={feature.title} className="w-6 h-6 mr-3" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          
          <div className="mt-6">
            <h4 className="text-blue-600 text-sm font-bold uppercase">AI ARTICLE WRITER</h4>
            <h2 className="text-xl font-semibold mt-1">Most Advanced AI Article Writer</h2>
            <p className="text-gray-600 text-sm mt-2">
              Generate factually accurate, SEO-optimized content that outperforms competitors using the most advanced AI writing tool.
            </p>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 w-[320px] md:w-[550px] flex flex-col">
          <div className="p-4">
            <img
              src="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6745de37ccf1d25957cdee6e_Frame%201244832744.png"
              alt="Integration"
              className="w-full"
            />
          </div>
          <div className="p-4">
            <h4 className="text-blue-600 text-sm font-bold uppercase">INTEGRATIONS</h4>
            <h2 className="text-xl font-semibold mt-1">Connect your favorite Marketing tools</h2>
            <p className="text-gray-600 text-sm mt-2">
              Unlike basic AI chat tools, Writesonic connects with Ahrefs, Analytics, and WordPress to pull real-time data for smarter content decisions.
            </p>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
       
        <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 w-[320px] md:w-[550px]">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="grid grid-cols-3 gap-4">
              {workflowItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white shadow-md rounded-lg px-4 py-3"
                >
                  <img src={item.icon} alt={item.title} className="h-10 w-10" />
                  <span className="text-sm font-medium mt-2">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-blue-600 text-sm font-bold uppercase">WORKFLOW</h4>
            <h2 className="text-xl font-semibold mt-1">
              End-to-end marketing solution in a single platform
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Your personalized AI marketing assistant that manages everything: Market Research  ➡️ Content Creation  ➡️ Smart Editing  ➡️ SEO Optimization  Multi-Channel Publishing.
            </p>
          </div>
        </div>

      
        <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 w-[320px] md:w-[550px]">
          <div className="p-2 md:p-4">
            <h4 className="text-pink-600 text-sm font-bold uppercase">Brand Consistency</h4>
            <p className="text-gray-600 text-sm mt-2">
              Customizable Brand Voice and Style. Ensure all content aligns perfectly with your brand's unique tone and messaging.
            </p>
            <div className="mt-3">
              <h5 className="text-sm font-medium mb-2">Select Your Brand Voice</h5>
              <div className="flex flex-wrap gap-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Professional</button>
                <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm">Conversational</button>
                <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm">Casual</button>
              </div>
              <div className="mt-3 bg-gray-100 p-3 rounded text-gray-700 text-sm">
                We offer innovative solutions to meet your business needs.
              </div>
            </div>
          </div>
          <div className="p-2 md:p-4">
            <h4 className="text-blue-600 text-sm font-bold uppercase">BRAND CONSISTENCY</h4>
            <h2 className="text-xl font-semibold mt-1">
              Your Brand Voice, perfectly cloned
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Train our AI on your best content pieces once, and generate content perfectly aligned to brand voice forever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterCard;
