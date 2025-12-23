"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Languages, Sun, Moon, Star, Menu } from "lucide-react";

/**
 * Navbar component for Baba_Resume2.0
 * Features:
 * - Pixel-perfect layout based on provided computed styles
 * - "V" icon logo with "Baba_Resume2.0" text
 * - Language selector, Theme toggle, GitHub star button (with count)
 * - Sticky behavior with transparency transition
 * - Light theme specific styles as requested
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-zinc-200" : "bg-transparent"
      }`}
      style={{ height: "64px" }}
    >
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/77ba5549-92dc-4b2e-a2cb-758e9202b940-magicv-art/assets/icons/icon-2.png"
                alt="Baba_Resume2.0 Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span 
              className="font-bold text-[24px] tracking-tight text-[#030712]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Baba_Resume2.0
            </span>
          </div>

          {/* Action Buttons Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <button 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent/50 h-8 w-8 text-zinc-600 hover:text-black"
              aria-label="Select Language"
            >
              <Languages className="h-[1.2rem] w-[1.2rem]" />
            </button>

            {/* Theme Toggle */}
            <div className="w-8 h-8 relative cursor-pointer rounded-md hover:bg-accent/50 flex items-center justify-center text-zinc-600 hover:text-black">
              <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
              {/* Note: Moon is hidden as per light theme requirement, but structure preserved for functional completeness in dark mode if ever enabled */}
              <Moon className="h-[1.2rem] w-[1.2rem] absolute scale-0" />
            </div>

            {/* GitHub Star Button */}
            <a
              href="https://github.com/JOYCEQL/magic-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 h-8 px-3 rounded-full bg-white/50 backdrop-blur-md border border-zinc-200 hover:border-zinc-300 shadow-sm transition-all duration-300 group overflow-hidden"
            >
              {/* Glossy Background Effect */}
              <div className="absolute inset-0 bg-[length:400%_400%] bg-gradient-to-r from-violet-200/20 via-pink-200/20 to-cyan-200/20 group-hover:opacity-100 opacity-60 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500/20" />
                <span className="text-sm font-medium text-zinc-700">Star on GitHub</span>
                <span className="w-px h-3 bg-zinc-300"></span>
                <span className="text-sm tabular-nums text-zinc-900 font-semibold">2,811</span>
              </div>
            </a>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all bg-[#000000] text-white hover:opacity-90 h-8 text-sm px-4 shadow-sm active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 hover:bg-accent rounded-md text-zinc-600">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}