"use client";

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa';

interface PartnerCardProps {
  name: string;
  logo: string;
  facebook?: string;
  instagram?: string;
  website?: string;
}

export default function PartnerCard({ 
  name, 
  logo, 
  facebook, 
  instagram, 
  website
}: PartnerCardProps) {
  return (
    <div className="w-full h-[410px] flex flex-col bg-[#FF37E31A] rounded-[16px] border-[#A2108D] border-[1px] overflow-hidden shadow-lg relative p-6">
      {/* Logo */}
      <div className="w-[250px] h-[250px] mb-6 flex items-center justify-center mx-auto">
        <img 
          src={logo} 
          alt={name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Name */}
      <p 
        className="font-avolta text-[#FF37E3] font-normal text-xl md:text-2xl mb-4 text-center tracking-[0.1em]"
        style={{
          filter: 'drop-shadow(0px 0px 6px rgba(255,55,227,0.8))'
        }}
      >
        {name}
      </p>

      {/* Social Links */}
      <div className="flex gap-4 items-center justify-center">
        {facebook && (
          <Link 
            href={facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff00dc] transition-colors"
          >
            <FaFacebook size={24} />
          </Link>
        )}
        {instagram && (
          <Link 
            href={instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff00dc] transition-colors"
          >
            <FaInstagram size={24} />
          </Link>
        )}
        {website && (
          <Link 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff00dc] transition-colors"
          >
            <FaGlobe size={24} />
          </Link>
        )}
      </div>
    </div>
  );
}
