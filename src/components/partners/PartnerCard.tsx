"use client";

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';

interface PartnerCardProps {
  name: string;
  logo: string;
  link: string;
}

export default function PartnerCard({ 
  name, 
  logo, 
  link
}: PartnerCardProps) {
  return (
    <div className="mx-auto w-full max-w-[280px] sm:max-w-[300px] md:max-w-[330px] md:h-[420px] lg:h-[450px] h-auto flex flex-col bg-[#FF37E31A] rounded-[14px] sm:rounded-[16px] border-[#A2108D] border-[1px] overflow-hidden shadow-lg relative p-4 sm:p-5 md:p-6">
      {/* Logo */}
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${name}`}
        className="w-full h-[150px] sm:h-[170px] md:h-[200px] lg:h-[250px] mb-4 sm:mb-5 md:mb-6 flex items-center justify-center mx-auto select-none"
      >
        <img
          src={logo}
          alt={name}
          className="max-w-[140px] max-h-[140px] sm:max-w-[160px] sm:max-h-[160px] md:max-w-[180px] md:max-h-[180px] lg:max-w-full lg:max-h-full object-contain"
        />
      </Link>

      {/* Name */}
      <p
        className="font-avolta text-[#FF37E3] font-normal text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 text-center tracking-[0.1em]"
        style={{
          filter: 'drop-shadow(0px 0px 6px rgba(255,55,227,0.8))'
        }}
      >
        {name}
      </p>
    </div>
  );
}
