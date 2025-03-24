import React from 'react';

const Hero = () => {
  return (
    <>
      
      <section className="py-20 px-8 hidden md:block">
        <div className="max-w-6xl mx-auto text-center ml-[90px]">
          <h1 
            className="text-[65px] leading-tight font-bold mb-6 leading-[65px]"
            style={{ fontFamily: '"SF Pro Display", sans-serif', color: '#1D1D1F', margin: '0 0 20px 0' }}
          >
            Your 24/7 AI Team for
            <br />
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                backgroundImage: 'linear-gradient(90deg, #0090f7, #ae65fb 25%, #e14fcf 50%, #ef4283 75%, #f4520b)', 
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              SEO, Content & Generative Engine
              <br />
              Optimization (GEO)
            </span>
          </h1>

          <p className="text-[#1D1D1FB3] text-[22px]  max-w-4xl mx-auto mb-12 leading-relaxed">
            Our AI agents integrate with Ahrefs, Semrush, Search Console & more to automate SEO 
            workflows, create content, and optimize for both Google and AI search engines like 
            ChatGPT—cutting costs by 70%+ while boosting your organic revenue.
          </p>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-6">
              <button 
                className="bg-[#2563EB] text-white px-4 py-3 rounded-[100px] text-xl font-normal hover:bg-blue-600 transition-colors"
              >
                Get Started For Free →
              </button>
              <button 
                className="text-[#2563EB] text-xl font-normal hover:text-blue-600"
              >
                Book a Demo
              </button>
            </div>
            <span className="text-black text-sm mt-2 text-[13px] ml-[-180px] ">No credit card required</span>
          </div>
        </div>
      </section>

      
      <section className="py-8 px-2 block md:hidden">
        <div className="max-w-6xl mx-auto">
          <h1 
            className="text-[40px] leading-tight font-bold"
            style={{ fontFamily: '"SF Pro Display", sans-serif', color: '#1D1D1F' }}
          >
            <span className="ml-8">Your Marketing</span><br/>
            Tools Don't Talk To<br/>
            <span className="ml-16">Each Other.</span>
            <div className="mt-2">
              <span 
                className="bg-clip-text text-transparent ml-8"
                style={{ 
                  backgroundImage: 'linear-gradient(90deg, #0090f7, #ae65fb 25%, #e14fcf 50%, #ef4283 75%, #f4520b)', 
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                Our AI Connects<br/>
                <span className="ml-[100px]">Them All.</span>
              </span>
            </div>
          </h1>

          <p className="text-[#1D1D1FB3] text-[16px] mx-8 mt-4 mb-8 leading-relaxed">
            Our AI agents integrate with Ahrefs, Semrush, Search Console & more to automate SEO 
            workflows, create content, and optimize for both Google and AI search engines like 
            ChatGPT—cutting costs by 70%+ while boosting your organic revenue.
          </p>

          <div className="flex flex-col items-center gap-2 mt-8">
            <button 
              className="bg-[#2563EB] text-white px-8 py-3 rounded-[100px] text-lg font-normal hover:bg-blue-600 transition-colors"
            >
              Get Started For Free →
            </button>
            <span className="text-black text-[13px] block mb-1">No credit card required</span>
            <button 
              className="text-[#2563EB] text-lg font-normal hover:text-blue-600"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 