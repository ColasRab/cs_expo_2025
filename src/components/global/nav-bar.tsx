'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [eventsDropdown, setEventsDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="text-white py-4 px-6 md:px-10 bg-[#0D0D0D]">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo/expo_logo.png"
            alt="CS Expo Logo"
            width={108}
            height={65}
            onClick={() => { window.location.href = '/'; }}
            role="link"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex font-helvetica font-bold items-center gap-3 md:gap-4">
          {/* Events Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setEventsDropdown(true)}
            onMouseLeave={() => setEventsDropdown(false)}
          >
            <button className="px-4 md:px-6 py-2 text-sm md:text-base hover:text-[#FF33E1] transition-colors flex items-center gap-1">
              Events
              <svg 
                className={`w-4 h-4 transition-transform ${eventsDropdown ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {eventsDropdown && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="bg-[#1a1a1a] rounded-lg shadow-lg py-2 min-w-[200px]">
                  <Link 
                    href="/events/expo" 
                    className="block px-6 py-3 text-sm hover:text-[#FF33E1] transition-colors"
                  >
                    CS Expo
                  </Link>
                  <Link 
                    href="/events/devday" 
                    className="block px-6 py-3 text-sm hover:text-[#FF33E1] transition-colors"
                  >
                    Dev Day
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Projects Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProjectsDropdown(true)}
            onMouseLeave={() => setProjectsDropdown(false)}
          >
            <button className="px-4 md:px-6 py-2 text-sm md:text-base hover:text-[#FF33E1] transition-colors flex items-center gap-1">
              Projects
              <svg 
                className={`w-4 h-4 transition-transform ${projectsDropdown ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {projectsDropdown && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="bg-[#1a1a1a] rounded-lg shadow-lg py-2 min-w-[200px]">
                  <Link 
                    href="/projects" 
                    className="block px-6 py-3 text-sm hover:text-[#FF33E1] transition-colors"
                  >
                    Collections
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/partners" 
            className="px-4 md:px-6 py-2 text-sm md:text-base hover:text-[#FF33E1] transition-colors"
          >
            Partners
          </Link>
          <Link 
            href="#" 
            className="px-4 md:px-6 py-2 text-sm md:text-base hover:text-[#FF33E1] transition-colors"
          >
            About
          </Link>
          <Link 
            href="https://bit.ly/CE25RegistrationForm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-6 py-2 text-sm md:text-base bg-[#a0178e] text-white rounded-full hover:bg-[#FF00DC] hover:text-[#FF33E1] transition-colors font-semibold"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1.5 z-50 relative"
          aria-label="Toggle menu"
        >
          <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-98 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-3 px-6">
          {/* Logo at top of mobile menu */}
          <div className="mb-4">
            <Image
              src="/logo/expo_logo.png"
              alt="CS Expo Logo"
              width={120}
              height={120}
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Events Mobile Dropdown */}
          <div className="w-full max-w-xs">
            <button
              onClick={() => setEventsDropdown(!eventsDropdown)}
              className="w-full text-center px-8 py-3 text-base hover:text-[#FF33E1] transition-all duration-200 flex items-center justify-center gap-2"
            >
              Events
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${eventsDropdown ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                eventsDropdown ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-1 pt-1">
                <Link 
                  href="/events/expo"
                  onClick={toggleMenu}
                  className="block text-center px-8 py-2 text-sm text-[#FF33E1] hover:text-white transition-all duration-200"
                >
                  CS Expo
                </Link>
                <Link 
                  href="/events/devday"
                  onClick={toggleMenu}
                  className="block text-center px-8 py-2 text-sm text-[#FF33E1] hover:text-white transition-all duration-200"
                >
                  Dev Day
                </Link>
              </div>
            </div>
          </div>

          {/* Projects Mobile Dropdown */}
          <div className="w-full max-w-xs">
            <button
              onClick={() => setProjectsDropdown(!projectsDropdown)}
              className="w-full text-center px-8 py-3 text-base hover:text-[#FF33E1] transition-all duration-200 flex items-center justify-center gap-2"
            >
              Projects
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${projectsDropdown ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                projectsDropdown ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-1 pt-1">
                <Link 
                    href="/projects" 
                    className="block text-center px-6 py-3 text-sm hover:text-[#FF33E1] transition-colors"
                  >
                    Collections
                  </Link>
              </div>
            </div>
          </div>

          <Link 
            href="#"
            onClick={toggleMenu}
            className="w-full max-w-xs text-center px-8 py-3 text-base hover:text-[#FF33E1] transition-all duration-200"
          >
            Partners
          </Link>
          <Link 
            href="#"
            onClick={toggleMenu}
            className="w-full max-w-xs text-center px-8 py-3 text-base hover:text-[#FF33E1] transition-all duration-200"
          >
            About
          </Link>
          <Link 
            href="/register"
            onClick={toggleMenu}
            className="w-full max-w-xs text-center px-8 py-3 text-base bg-[#a0178e] text-white rounded-full hover:bg-[#FF00DC] hover:text-[#FF33E1] transition-all duration-200 font-semibold mt-2"
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
}