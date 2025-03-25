'use client'
import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { MdOutlineArrowForwardIos } from "react-icons/md";

const PublishSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const securityFeatures = [
    {
      icon: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720fae84c76a8d9e8f984db_Data%20Encryption.svg',
      title: 'Data Encryption',
      description: 'Industry-standard AES-256 encryption at rest and TLS 1.3 in transit. Your data never leaves our secure infrastructure.'
    },
    {
      icon: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720fae811cdbd04074e5a0d_Data%20Retention.svg',
      title: 'Custom Data Retention',
      description: 'You control how long we keep your data. Set custom retention periods or delete instantly - you\'re always in control.'
    },
    {
      icon: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720fae8c0049ef43224d3b6_Data%20Polcy.svg',
      title: 'Zero-Retention for LLMS',
      description: 'Your data is never used to train our AI. What happens in your workspace stays in your workspace.'
    }
  ];

  const complianceCertifications = [
    {
      icon: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720d0b1d5a192a69d60508d_Frame%201430106010.webp',
      title: 'SOC 2 Type II',
      description: 'Rigorous security protocols. Every process audited and verified for maximum data protection.'
    },
    {
      icon: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720d0b11d20b92a61188cb8_660e8a1a56156af4dfb21382_Mask%20group%201.webp',
      title: 'GDPR Compliant',
      description: 'Complete data privacy control. Access, modify, or delete your data anytime - no questions asked.'
    },
    {
      icon: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720fb61dc7e5452242728d1_hipaa-compliant-icon%201.svg',
      title: 'HIPAA',
      description: 'Healthcare-ready security. Stringent measures to protect sensitive health information and maintain compliance.'
    }
  ];

  return (
    <section className=" py-4 md:py-16 px-8 bg-[#FCFCFD] dark:bg-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <h2 className="mb-16">
            <div className="text-[32px] md:text-[46px] font-bold text-[#E96D44] leading-none mb-0">
              Publish Everywhere
            </div>
            <div className="text-[32px] md:text-[46px] font-bold text-[#1D1D1F] dark:text-white leading-[1.1]">
              <span className="block md:hidden whitespace-nowrap">
                With Your AI Marketing
                <br />
                Agent
              </span>
              <span className="hidden md:inline">
                With Your AI Marketing<br/>Agent
              </span>
            </div>
          </h2>
          <p className="text-[#1D1D1FB3] dark:text-gray-300 text-[22px] font-bold max-w-4xl mx-auto mb-12">
            <span className="md:hidden dark:text-gray-300">
              Stop juggling between Chat GPT, content tools, and CMS platforms. Connect WordPress, social media, or your favorite platforms to push content live instantly. Let our AI marketing agent handle everything from creation to publication - while you focus on strategy.
            </span>
            <span className="hidden md:block">
              Stop juggling between Chat GPT, content tools, and CMS platforms. Connect WordPress, 
              social media, or your favorite platforms to push content live instantly. Let our AI 
              marketing agent handle everything from creation to publication - while you focus on strategy.
            </span>
          </p>

          <div className="max-w-3xl mx-auto mb-16 relative">
            <img 
              src="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/675c1ec6be742f96d7516904_ddd.svg"
              alt="Publishing Interface"
              className="w-full"
              style={{ 
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)"
              }}
            />
            
            <div className="post-card absolute md:left-[-50px] left-0 top-[50%] transform -translate-y-1/2 w-[400px] md:w-[400px] w-[280px] bg-white" style={{
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "16px",
              position: "absolute",
              overflow: "hidden",
              transform: "rotate(-4deg)",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)"
            }}>
              <img 
                src="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/675c1e7c2ef7a87e4b8112ae_Frame%201244832288.svg"
                alt="Create/Publish Post"
                className="w-full h-auto"
              />
            </div>

            <div className="card absolute md:right-[-30px] right-0 top-[30%] w-[400px] md:w-[400px] w-[280px] bg-white" style={{ 
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "16px",
              overflow: "hidden",
              transform: "rotate(5deg)",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)"
            }}>
              <img 
                src="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/675c1e7abe3a02839c50db14_Frame%201244832790.svg"
                alt="Public Link"
                className="w-full h-auto"
              />
            </div>

            <div className="flex justify-center mt-12">
              <button 
                className="group relative inline-flex items-center justify-center px-5 py-3 text-lg font-medium text-[#0066FF] rounded-full border-2 border-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all duration-200"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Start Publishing Smarter
                {isHovered ? 
                  <HiArrowRight className="ml-2" /> : 
                  <MdOutlineArrowForwardIos className="ml-2" />
                }
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
          </div>
        </div>

        <div className="text-center mb-24">
          <div className="flex justify-center items-center mb-4">
            <div className="relative group">
              <FaLock className="text-4xl text-black dark:text-white" />
            </div>
          </div>
          <h2 className="mb-8">
            <div className=" text-[34px] md:text-[46px] font-bold text-[#7E59FF] leading-none mb-0">
              Security First
            </div>
            <div className="text-[34px] md:text-[46px] font-bold text-[#1D1D1F] dark:text-white leading-[1.1]">
              <span className="block whitespace-nowrap md:inline">An AI Agent You Can</span>
              <span className="block md:inline">Trust</span>
            </div>
          </h2>
          <p className="text-[#1D1D1FB3] dark:text-gray-300 text-[22px] max-w-3xl mx-auto mb-12">
            Your content is your competitive edge. That's why Writesonic uses{' '}
            <span className="text-black dark:text-white">robust encryption and zero-retention policies</span> to protect your data 
            and preserve complete confidentiality. Enterprise-ready security with{' '}
            <span className="text-black dark:text-white ">SOC 2, GDPR & HIPAA</span> compliance built-in.
          </p>

          <div className="flex justify-center mb-16">
            <button 
              className="group relative inline-flex items-center justify-center px-4 py-3 text-lg font-medium text-[#0066FF] rounded-full border-2 border-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all duration-200"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Visit Our Trust Center
              {isHovered ? 
                <HiArrowRight className="ml-2" /> : 
                <MdOutlineArrowForwardIos className="ml-2" />
              }
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="bg-white dark:bg-gray-600 p-8 rounded-2xl shadow-md text-left">
                <img src={feature.icon} alt={feature.title} className="h-12 w-12 mb-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceCertifications.map((cert) => (
              <div key={cert.title} className="bg-white dark:bg-gray-600 p-8 rounded-2xl shadow-md text-left">
                <img src={cert.icon} alt={cert.title} className="h-12 w-12 mb-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishSection; 