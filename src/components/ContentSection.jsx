import React from 'react';

const ContentSection = () => {
  const features = [
    {
      title: "Content Repurposing",
      description: "Transform existing blogs, podcasts, and videos into fresh, engaging content for any platform.",
      imageUrl: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720ee9a7e8baa82db30b620_Content%20Repurpose%20Component.avif"
    },
    {
      title: "Collaborative Editing",
      description: "Refine your content with AI-powered editors, perfecting grammar, style, length, and tone.",
      imageUrl: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720ee9a190016dd3f8e412e_Collaborative%20Editing%20Component.avif"
    },
    {
      title: "Image Generation",
      description: "Design visuals for blogs, social media, and marketing materials seamlessly.",
      imageUrl: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720ee9a3a7562ecc9009e3f_Image%20Generation%20Component.avif"
    }
  ];
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Desktop view */}
          <div className="hidden md:block">
            <h1 className="text-[46px] font-bold mb-6">
              <span className="text-[#6476D4]">Content Creation, Supercharged</span>
              {' '}
              <span className="text-gray-900">With <br/>Writesonic AI</span>
            </h1>
          </div>

          
          <div className="block md:hidden">
            <h1 className="mb-6 text-[28px] leading-tight ">
              <span className="text-[#6476D4] font-bold block">
                Content Creation,
              </span>
              <span className="text-[#6476D4] font-bold block">
                Supercharged With
              </span>
              <span className="text-gray-900 font-bold block">
                Writesonic AI
              </span>
            </h1>
            
            <p className="text-[#1D1D1FB3] text-base leading-snug font-normal px-4">
              Our advanced AI Article Writer creates content that outperforms ChatGPT and other AI writers. 
              It combines deep web analysis, live competitor data, and strategic internal linking to create 
              ranking-ready content that Google loves. Get factually accurate, human-like articles in 
              minutes - not hours.
            </p>
          </div>

          
          <p className="hidden md:block text-[#1D1D1FB3] text-[22px] font-bold max-w-4xl mx-auto mb-12">
            Our advanced AI Article Writer creates content that outperforms ChatGPT and other AI writers. 
            It combines deep web analysis, live competitor data, and strategic internal linking to create 
            ranking-ready content that Google loves. Get factually accurate, human-like articles in 
            minutes - not hours.
          </p>

          <div className="max-w-7xl mx-auto mr-[-10px]">
            <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-xl">
              <video 
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source 
                  src="https://videos.writesonic.com/landing-page/original/Writesonic%20Landing%20Page%20-%20Content%20Section.mp4" 
                  type="video/mp4" 
                />
              </video>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button 
                className="inline-flex items-center text-[#0066FF] text-xl font-medium hover:bg-blue-600 hover:text-white transition-opacity border-2 border-[#0066FF] rounded-full px-8 py-4"
              >
                Write & Rank Your First Article Free
                <span className="ml-2 text-2xl">›</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 mb-12 w-[100%] h-full ">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${feature.imageUrl})` }}></div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection; 