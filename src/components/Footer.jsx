import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import footerImage from "../assets/DAT Consultancy Beachfront Villa in Palm Jumeirah Dubai.jpg"; // Replace with your actual image

const Footer = () => {
  return (
    <footer 
      className="relative mt-auto"
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#49596B]/60"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-8">
            {/* Contact Information */}
            <div className="text-center md:text-right">
              <h4 className="text-2xl font-bold mb-6 text-[#F2F0E9]">Contact Us</h4>
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:ot.marketing.c@gmail.com" 
                  className="hover:text-[#d3ae27] transition-colors duration-300 text-lg text-[#F2F0E9]"
                >
octopustourism@gmail.com
                </a>
                <a 
                  href="https://api.whatsapp.com/send/?phone=96894070404" 
                  className="flex items-center justify-center md:justify-end gap-3 hover:text-[#d3ae27] transition-colors duration-300 text-lg text-[#F2F0E9]"
                >
                  <FaWhatsapp className="text-2xl" />
                  +968 9407 0404
                </a>
              </div>
            </div>

            {/* Logo/Brand Name */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#F2F0E9]">OTM</h2>
              <p className="text-lg mt-3 text-[#F2F0E9]">MARKETING</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#F2F0E9]/30 mt-12 pt-8 text-center">
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
