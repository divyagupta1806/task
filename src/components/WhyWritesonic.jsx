import React from 'react';

const WhyWritesonic = () => {
  const companies = [
    { 
      name: 'Microsoft', 
      logo: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720d96e134340c0d0b0d01e_6615342b7934f09a05b77cdf_Microsoft.avif' 
    },
    { 
      name: 'HP', 
      logo: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/675c20236d1bc0dbae8f9ae3_HP_logo_2012%201.svg' 
    },
    {
      name: 'Paloalto',
      logo: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720d96e878e5e2b000995f9_6615342c978b2652c8f30f10_Palo%20Alto%20Networks.avif'
    },
    {
      name:'Square',
      logo:'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720d96ed656af8536219b36_6615342c686e0d6c6c1ca4c8_Square%20Up.avif'
    },
    {
      name:'Pfizer',
      logo:'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720d96e8c688518b401d258_6615342cd11bdee8817c6f1c_Pfizer.avif'
    },
    {
      name:'Roche',
      logo:'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720d96e096540e78d401eae_6615342e6c7d65f427a52883_Roche.avif'
    },
    {
      name:'novo',
      logo:'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/675c208da5be1141eec80be7_novo-nordisk-logo%201.svg'
    },
    {
      name:'regen',
      logo:'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/675c20c0f1e169550934dc29_logo-regeneron-footer%201.svg'
    },
    {
      name: 'Honeywell',
      logo: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720d96f30af07057cff9984_6615342bdce836e9d3b9b8e7_Honeywell.avif'
    }
  ];

  return (
    <section className="py-4 px-4">
      <div className="max-w-7xl mx-auto">
      
        <div className="hidden md:flex md:justify-between md:items-center md:gap-8 md:overflow-x-auto md:px-4">
          {companies.slice(0, 8).map((company) => (
            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
            />
          ))}
        </div>

      
        <div className="grid grid-cols-3 gap-y-6 gap-x-4 px-2 md:hidden">
          {companies.map((company) => (
            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-5 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity mx-auto"
            />
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto mt-20">
          
          <div className="hidden md:block">
            <h2 className="text-6xl font-medium mb-8">
              Why <span className="text-transparent bg-clip-text [background-image:linear-gradient(to_right,#0066FF,#8C52FF,#FF2E87)] dark:[background-image:linear-gradient(to_right,#60A5FA,#C084FC,#F472B6)]">
                Writesonic
              </span>?
            </h2>
            <div className="space-y-2">
              <p className="text-xl text-[#1D1D1FB3] whitespace-nowrap">
                Tired of switching between ChatGPT, marketing tools, and content platforms - just to create one piece of content?
              </p>
              <p className="text-xl text-[#1D1D1FB3] whitespace-nowrap">
                Writesonic unifies free AI Chat - Chatsonic, AI Article Writer, and marketing tools into one powerful platform.
              </p>
            </div>
          </div>

          
          <div className="block md:hidden">
            <h2 className="text-4xl font-medium mb-6">
              Why <span className="text-transparent bg-clip-text [background-image:linear-gradient(to_right,#0066FF,#8C52FF,#FF2E87)] dark:[background-image:linear-gradient(to_right,#60A5FA,#C084FC,#F472B6)]">
                Writesonic
              </span>?
            </h2>
            <div className="space-y-4 px-4 font-bold text-2xl">
              <p className="text-2xl text-[#1D1D1FB3]  ">
                Tired of switching between ChatGPT, marketing tools, and content platforms - just to create one piece of content?
              </p>
              <p className="text-2xl text-[#1D1D1FB3] ">
                Writesonic unifies free AI Chat - Chatsonic, AI Article Writer, and marketing tools into one powerful platform.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <button className="bg-[#0066FF] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started - it's free →
            </button>
            <p className="mt-3 text-sm text-gray-600">No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWritesonic; 