'use client';

import React, { useState, useRef, useEffect } from 'react';
import { IoChevronDown } from 'react-icons/io5'; 
import { HiArrowRight } from 'react-icons/hi'; 
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const resourcesRef = useRef(null);
  const productsRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setIsResourcesOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const resourcesItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Glossary', href: '/glossary' },
    { label: 'Free Tools', href: '/free-tools' },
  ];

  const productItems = [
    { 
      label: 'Chatsonic',
      description: 'Your AI Chatbot/Agent for Marketing Success',
      icon: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/675862dde1d9ac6426445cdd_Logo.svg',
      href: '/chatsonic'
    },
    {
      label: 'AI Article Writer',
      description: 'Write Blogs That Humans Love to Read',
      icon: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/675862dd1722d3d120b47e04_Logo-1.svg',
      href: '/article-writer'
    },
    {
      label: 'Botsonic',
      description: 'Create Custom AI Chatbots for your Website',
      icon: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/675862dd50b34d7e75da9a66_Logo-2.svg',
      href: '/botsonic'
    },
    {
      label: 'Socialsonic',
      description: 'Grow Your LinkedIn Personal Brand with AI',
      icon: 'https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/675862dc194d0fc3a00258bf_Logo-3.svg',
      href: '/socialsonic'
    }
  ];

  return (
    <header 
      style={{ fontFamily: '"SF Pro Display", sans-serif', fontSize: '13px', color: '#222222' }}
      className="py-4 px-8 relative border-b border-[#ebebeb]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img 
              src="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/671fa1c6a241f5cf851f5e15_logo.svg" 
              alt="Writesonic" 
              className="h-8 "
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <div ref={productsRef} className="relative group">
              <button 
                className="flex items-center hover:text-gray-900 dark:text-gray-200 dark:hover:text-white py-2"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <IoChevronDown className={`ml-1 text-sm transition-transform duration-200 dark:text-gray-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-0 w-72 bg-white rounded-lg shadow-lg py-2 z-50 transform transition-all duration-200 origin-top 
                  ${isProductsOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
              >
                <div className="py-2">
                  {productItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <img src={item.icon} alt={item.label} className="w-8 h-8 mr-3" />
                        <div>
                          <div className="font-medium text-gray-900">{item.label}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div ref={resourcesRef} className="relative group">
              <button 
                className="flex items-center hover:text-gray-900 dark:text-gray-200 dark:hover:text-white py-2"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                Resources
                <IoChevronDown className={`ml-1 text-sm transition-transform duration-200 dark:text-gray-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div 
                className={`absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transform transition-all duration-200 origin-top
                  ${isResourcesOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
              >
                {resourcesItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <button className="hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
              Pricing
            </button>
          </nav>
        </div>

        <div className="md:flex items-center space-x-4 hidden">
          <button className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
            Request a Demo
          </button>
          <div className="h-6 border-l border-gray-300"></div>
          <button className="text-[#0171e2] hover:underline">
            Sign in
          </button>
          <button 
            className="bg-[#0171e2] text-white px-4 py-2 rounded-[100px] flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Get Started
            {isHovered ? <HiArrowRight className="ml-2" /> : <MdOutlineArrowForwardIos className="ml-2" />}
          </button>
        </div>
        
        <button 
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <IoMdMenu size={20} />
        </button>
        
        <div 
          className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden flex flex-col h-full max-h-screen`}
          ref={mobileMenuRef}
        >
          <div className="flex justify-between items-center p-4 border-b border-[#ebebeb] sticky top-0 bg-white z-10">
            <div className="flex items-center">
              <img 
                src="https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/671fa1c6a241f5cf851f5e15_logo.svg" 
                alt="Writesonic" 
                className="h-8"
              />
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700"
            >
              <IoMdClose size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="px-4">
              <div className="border-b border-[#ebebeb] py-2.5">
                <button 
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  <span className="font-medium">Products</span>
                  <IoChevronDown className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProductsOpen && (
                  <div className="py-2 pl-4">
                    {productItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block py-2"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="border-b border-[#ebebeb] py-2.5">
                <button 
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                >
                  <span className="font-medium">Resources</span>
                  <IoChevronDown className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isResourcesOpen && (
                  <div className="py-2 pl-4">
                    {resourcesItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block py-2"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="border-b border-[#ebebeb] py-2.5">
                <button className="w-full text-left py-2 font-medium">
                  Pricing
                </button>
              </div>
              
              <div className="border-b border-[#ebebeb] py-2.5">
                <button className="w-full text-left py-2 font-medium">
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#ebebeb] sticky bottom-0 bg-white py-3 px-4">
            <div className="flex justify-between items-center">
              <button className="text-[#0171e2] py-1 text-center font-medium">
                Sign in
              </button>
              <button className="bg-[#0171e2] text-white py-1.5 px-4 rounded-full flex items-center justify-center text-sm font-medium">
                Get Started
                <MdOutlineArrowForwardIos className="ml-1 text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 