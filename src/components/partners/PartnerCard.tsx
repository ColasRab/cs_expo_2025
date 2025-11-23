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
    <div className="mx-auto w-full max-w-[330px] md:h-[450px] h-auto flex flex-col bg-[#FF37E31A] rounded-[16px] border-[#A2108D] border-[1px] overflow-hidden shadow-lg relative p-6">
      {/* Logo */}
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${name}`}
        className="w-full h-[180px] md:w-[250px] md:h-[250px] mb-6 flex items-center justify-center mx-auto select-none"
      >
        <img 
          src={logo} 
          alt={name}
          className="max-w-[180px] max-h-[180px] md:max-w-full md:max-h-full object-contain"
        />
      </Link>

      {/* Name */}
      <p 
        className="font-avolta text-[#FF37E3] font-normal text-lg md:text-2xl mb-4 text-center tracking-[0.1em]"
        style={{
          filter: 'drop-shadow(0px 0px 6px rgba(255,55,227,0.8))'
        }}
      >
        {name}
      </p>
    </div>
  );
}
