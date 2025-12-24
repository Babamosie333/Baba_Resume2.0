"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Languages, Sun, Moon, Star, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const [starCount, setStarCount] = useState<string>("2,811");
  
    useEffect(() => {
      setMounted(true);
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };

      // Fetch GitHub stars
      fetch("https://api.github.com/repos/Babamosie333/Baba_Resume2.0")
        .then(res => res.json())
        .then(data => {
          if (data.stargazers_count) {
            setStarCount(data.stargazers_count.toLocaleString());
          }
        })
        .catch(err => console.error("Error fetching stars:", err));

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${
        isScrolled 
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800" 
          : "bg-transparent"
      }`}
      style={{ height: "64px" }}
    >
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="relative w-8 h-8 flex items-center justify-center bg-black dark:bg-white rounded-lg">
              <span className="text-white dark:text-black font-bold text-xl">V</span>
            </div>
            <span 
              className="font-bold text-[24px] tracking-tight text-[#030712] dark:text-white"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Baba_Resume2.0
            </span>
          </Link>

          {/* Action Buttons Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <button 
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent/50 h-8 px-2 gap-1 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
              aria-label="Toggle Language"
            >
              <Languages className="h-[1.2rem] w-[1.2rem]" />
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 relative cursor-pointer rounded-md hover:bg-accent/50 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
            </button>

            {/* GitHub Star Button */}
            <a
              href="https://github.com/Babamosie333/Baba_Resume2.0.git"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 h-8 px-3 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-[length:400%_400%] bg-gradient-to-r from-violet-200/20 via-pink-200/20 to-cyan-200/20 group-hover:opacity-100 opacity-60 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500/20" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("nav.starOnGithub")}</span>
                <span className="w-px h-3 bg-zinc-300 dark:bg-zinc-700"></span>
                <span className="text-sm tabular-nums text-zinc-900 dark:text-white font-semibold">2,811</span>
              </div>
            </a>

            {/* CTA Button */}
            <Link href="/builder" className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all bg-[#000000] dark:bg-white text-white dark:text-black hover:opacity-90 h-8 text-sm px-4 shadow-sm active:scale-95">
              {t("nav.getStarted")}
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 hover:bg-accent rounded-md text-zinc-600 dark:text-zinc-400">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
