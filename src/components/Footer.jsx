'use client'
import React,{useState} from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { HiArrowRight } from 'react-icons/hi'; 
import { MdOutlineArrowForwardIos } from "react-icons/md";


const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <footer>
     
      <div className="relative py-20">
        
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/images/background.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-orange-500/50"></div>
        </div>

        
        <div className="relative z-10 container mx-auto">
          <div className="max-w-5xl mx-auto text-white text-left md:text-center">
            <h2 className="text-[40px] md:text-[70px] mb-4 md:whitespace-nowrap px-6 md:px-0 pl-14 md:pl-4">
              Power up your Marketing with AI<br/>
              <span className="block text-center md:inline ml-[-40px] md:pl-4">Agents</span>
            </h2>

            <p className="text-[22px]  mb-12 text-white md:whitespace-nowrap px-8 md:px-0">
              Research smarter, create faster, and optimize better with AI-powered tools that work together seamlessly.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-4 md:gap-6 px-6 md:px-0">
              <button 
                className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-[100px] text-lg font-medium flex items-center justify-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started for Free
                {isHovered ? <HiArrowRight className="ml-2" /> : <MdOutlineArrowForwardIos className="ml-2" />}
              </button>
              <button className="hover:underline ml-[120px] md:ml-0">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <div className='bg-black text-white py-12 px-4 md:px-8'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
         
          <div className='space-y-6'>
            <div className="flex items-center space-x-2">
              <img src="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720d02aed5961847fbfdd51_logo.svg" alt="Writesonic" className="h-8" />
              
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-3'>
                <img src="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720d0b1d5a192a69d60508d_Frame%201430106010.webp" alt="AICPA SOC" className="h-12 w-12" />
                <span className="text-[13px] text-white">
                  Enterprise-grade security<br />SOC 2
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <img src="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720d0b11d20b92a61188cb8_660e8a1a56156af4dfb21382_Mask%20group%201.webp" alt="GDPR" className="h-12 w-12" />
                <span className="text-[13px] text-white">GDPR-compliant</span>
              </div>
              <div className='flex items-center gap-3'>
                <img src="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/6720d0b194f97e005997a85a_hipaa-compliant-icon%201.webp" alt="Y Combinator" className="h-12 w-12" />
                <span className="text-[13px] text-white">Y-Combinator</span>
              </div>
            </div>
          </div>

        
          <div>
            <h3 className='text-[13px] font-semibold mb-4'>PLATFORM</h3>
            <ul className='space-y-2 text-[13px] text-[#b1b1b4]'>
              <li><a href="#" className="hover:underline">AI Article Writer</a></li>
              <li><a href="#" className="hover:underline">SEO AI Agent</a></li>
              <li><a href="#" className="hover:underline" >AI Traffic Analytics (GEO)</a></li>
              <li><a href="#" className="hover:underline">SEO Checker & Optimizer</a></li>
              <li><a href="#" className="hover:underline" >Botsonic</a></li>
              <li><a href="#" className="hover:underline" >Chatsonic</a></li>
              <li><a href="#" className="hover:underline" >Socialsonic</a></li>
              <li><a href="#" className="hover:underline" >Photosonic</a></li>
              <li><a href="#" className="hover:underline">Audiosonic</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className='text-[13px] font-semibold mb-4'>FREE TOOLS</h3>
            <ul className='space-y-2 text-[13px] text-[#b1b1b4]'>
              <li><a href="#"className="hover:underline" >Sentence Rewriter</a></li>
              <li><a href="#"className="hover:underline" >Title Generator</a></li>
              <li><a href="#"className="hover:underline" >Rewording Tool</a></li>
              <li><a href="#"className="hover:underline" >Script Generator</a></li>
              <li><a href="#"className="hover:underline">AI Content Detector</a></li>
              <li><a href="#" className="hover:underline">Humanize AI Text</a></li>
              <li><a href="#"className="hover:underline" >AI Answer Generator</a></li>
              <li><a href="#" className="hover:underline">Meta Description Generator</a></li>
              <li><a href="#" className="hover:underline">Paraphrasing Tool</a></li>
              <li><a href="#" className="hover:underline">Conclusion Generator</a></li>
              <li><a href="#" className="hover:underline">Content Idea Generator</a></li>
            </ul>

           
            <div className="mt-6 text-[13px]">
              <h4 className='mb-4 text-white'>GENERATIVE ENGINE OPTIMIZATION <br /> (GEO) Free Tools</h4>
              <ul className='space-y-2'>
                <li><a href="#" className='text-[#b1b1b4] hover:underline'>llms.txt Generator</a></li>
                <li><a href="#" className='text-[#b1b1b4] hover:underline'>AI Search Grader</a></li>
                <li><a href="#" className='text-[#b1b1b4] hover:underline'>LLM Optimizer</a></li>
              </ul>
            </div>
          </div>

        
          <div className='grid grid-cols-2 gap-8'>
            <div>
              <h3 className='text-[13px] font-semibold mb-4'>RESOURCES</h3>
              <ul className='space-y-2 text-[13px] text-[#b1b1b4]'>
               <li><a href="#" className="hover:underline">Security</a></li>
  <li><a href="#" className="hover:underline">Pricing</a></li>
  <li><a href="#" className="hover:underline">Blog</a></li>
  <li><a href="#" className="hover:underline">How-to-videos</a></li>
  <li><a href="#" className="hover:underline">API</a></li>
  <li><a href="#" className="hover:underline">Guides and Tutorials</a></li>
  <li><a href="#" className="hover:underline">Status</a></li>
              </ul>
            </div>
            <div>
            <h3 className='text-[13px] font-semibold mb-4'>COMPANY</h3>
<ul className='space-y-2 text-[13px] text-[#b1b1b4]'>
  <li><a href="#" className="hover:underline">Request a Demo</a></li>
  <li><a href="#" className="hover:underline">About</a></li>
  <li><a href="#" className="hover:underline">Careers</a></li>
  <li><a href="#" className="hover:underline">Contact Us</a></li>
  <li><a href="#" className="hover:underline">Affiliate Program</a></li>
</ul>

            </div>
          </div>
        </div>
      </div>

    
      <div className='bg-black text-white px-4 md:px-8'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-800 py-8'>
          <div className="flex items-center mb-4 md:mb-0">
            <p className='text-[#B1B1B4] text-[13px]'>Copyright © 2025 Writesonic, Inc.</p>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
            <div className='flex items-center space-x-6 text-[13px]'>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Security</a>
            </div>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
              <a href="#" className='w-8 h-8 flex items-center justify-center bg-white rounded-[8px] text-gray-900'>
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="#" className='w-8 h-8 flex items-center justify-center bg-white rounded-[8px] text-gray-900'>
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="#" className='w-8 h-8 flex items-center justify-center bg-white rounded-[8px] text-gray-900'>
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;