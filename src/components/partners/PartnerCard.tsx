"use client";

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';

interface PartnerCardProps {
  name: string;
  logo: string;
  facebook?: string;
  instagram?: string;
  website?: string;
  twitter?: string;
}

export default function PartnerCard({ 
  name, 
  logo, 
  facebook, 
  instagram, 
  website,
  twitter
}: PartnerCardProps) {
  return (
    <div className="mx-auto w-full max-w-[330px] md:h-[410px] h-auto flex flex-col bg-[#FF37E31A] rounded-[16px] border-[#A2108D] border-[1px] overflow-hidden shadow-lg relative p-6">
      {/* Logo */}
      <div className="w-full h-[180px] md:w-[250px] md:h-[250px] mb-6 flex items-center justify-center mx-auto select-none">
        <img 
          src={logo} 
          alt={name}
          className="max-w-[180px] max-h-[180px] md:max-w-full md:max-h-full object-contain"
        />
      </div>

      {/* Name */}
      <p 
        className="font-avolta text-[#FF37E3] font-normal text-lg md:text-2xl mb-4 text-center tracking-[0.1em]"
        style={{
          filter: 'drop-shadow(0px 0px 6px rgba(255,55,227,0.8))'
        }}
      >
        {name}
      </p>

      {/* Social Links */}
      <div className="flex gap-4 items-center justify-center mt-auto">
        {facebook && (
          <Link 
            href={facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff00dc] transition-colors"
          >
            <FaFacebookF size={22} strokeWidth={0.5} />
          </Link>
        )}
        {instagram && (
          <Link 
            href={instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff00dc] transition-colors"
          >
            <FaInstagram size={24} strokeWidth={0.5} />
          </Link>
        )}
        {twitter && (
          <Link 
            href={twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff00dc] transition-colors"
          >
            <FaXTwitter size={22} strokeWidth={0.5} />
          </Link>
        )}
        {website && (
          <Link 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff00dc] transition-colors"
          >
            <TbWorld size={26} strokeWidth={1.5} />
          </Link>
        )}
      </div>
    </div>
  );
}
