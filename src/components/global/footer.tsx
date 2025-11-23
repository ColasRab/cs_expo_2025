"use client";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-200 py-10 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 sm:gap-x-8 lg:gap-x-6 gap-y-6 text-left w-full lg:flex-1">
            {/* Column 1 - CS Expo */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2">CS Expo</h3>
              <ul className="text-sm sm:text-base space-y-1.5">
                <li><a href="/cs-expo" className="hover:text-[#FF33E1] transition-colors">About</a></li>
                <li><a href="/cs-expo" className="hover:text-[#FF33E1] transition-colors">Panelists</a></li>
                <li><a href="/cs-expo" className="hover:text-[#FF33E1] transition-colors">Speakers</a></li>
              </ul>
            </div>

            {/* Column 2 - Dev Day */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Dev Day</h3>
              <ul className="text-sm sm:text-base space-y-1.5">
                <li><a href="/dev-day" className="hover:text-[#FF33E1] transition-colors">About</a></li>
                <li><a href="/dev-day" className="hover:text-[#FF33E1] transition-colors">Schedule</a></li>
                <li><a href="/dev-day" className="hover:text-[#FF33E1] transition-colors">Speakers</a></li>
              </ul>
            </div>

            {/* Column 3 - Projects */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Projects</h3>
              <ul className="text-sm sm:text-base space-y-1.5">
                <li><a href="/projects" className="hover:text-[#FF33E1] transition-colors">Collection</a></li>
                <li><a href="/hall-of-fame" className="hover:text-[#FF33E1] transition-colors">Hall of Fame</a></li>
              </ul>
            </div>

            {/* Column 4 - Partners */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-bold text-base sm:text-lg mb-2">Partners & Sponsors</h3>
              <ul className="text-sm sm:text-base space-y-1.5">
                <li><a href="/partners" className="hover:text-[#FF33E1] transition-colors">Minor Partners</a></li>
                <li><a href="/partners" className="hover:text-[#FF33E1] transition-colors">Major Partners</a></li>
                <li><a href="/partners" className="hover:text-[#FF33E1] transition-colors">Community Development Partners</a></li>
              </ul>
            </div>

            {/* Column 5 - Partner Tiers */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2 invisible">Tiers</h3>
              <ul className="text-sm sm:text-base space-y-1.5">
                <li><a href="/partners" className="hover:text-[#FF33E1] transition-colors">Silver Partners</a></li>
                <li><a href="/partners" className="hover:text-[#FF33E1] transition-colors">Gold Partners</a></li>
                <li><a href="/partners" className="hover:text-[#FF33E1] transition-colors">Diamond Partners</a></li>
              </ul>
            </div>

            {/* Column 6 - About */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2">About</h3>
              <ul className="text-sm sm:text-base space-y-1.5">
                <li><a href="/about" className="hover:text-[#FF33E1] transition-colors">CS Expo 2025</a></li>
                <li><a href="/about" className="hover:text-[#FF33E1] transition-colors">Teams</a></li>
                <li><a href="/about" className="hover:text-[#FF33E1] transition-colors">Committees</a></li>
                <li><a href="/about" className="hover:text-[#FF33E1] transition-colors">Faculty</a></li>
              </ul>
            </div>
          </div>

          {/* Logo - Hidden on mobile/tablet, visible on large screens */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src="/logo/expo_logo.png"
            alt="CS Expo Logo"
            width={200}
            height={200}
            className="object-contain w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-[300px] lg:h-[300px]"
          />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-8 pt-6 px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Social Icons */}
          <div className="flex gap-4 order-1 sm:order-1">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF33E1] transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF33E1] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-gray-400 order-3 sm:order-2 text-center">
            © {new Date().getFullYear()} CS EXPO. All rights reserved.
          </div>

          {/* Year */}
          <div className="font-bold text-2xl sm:text-3xl order-2 sm:order-3">
            2025
          </div>
        </div>
      </div>
    </footer>
  );
}