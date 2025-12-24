"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <div className="relative bg-gradient-to-b from-[#f8f9fb] to-white dark:from-zinc-950 dark:to-zinc-900 min-h-screen transition-colors duration-200">
      {/* Announcement Badge */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center px-4">
        <Link href="/builder" className="relative inline-flex items-center gap-3 px-5 py-2.5 text-sm font-medium rounded-full bg-white dark:bg-zinc-900 shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-slate-200/80 dark:border-zinc-800 hover:shadow-[0_2px_2px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer group">
          <span className="text-slate-600 dark:text-zinc-400 whitespace-nowrap">
            {t("hero.announcement")}
          </span>
        </Link>
      </div>

      <section className="relative min-h-[85vh] flex items-center pt-32 lg:pt-16 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0000000d] via-transparent to-transparent"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl opacity-50 md:opacity-100"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-50 md:opacity-100"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-black/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl opacity-30 md:opacity-60"></div>
        </div>

        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="z-10">
              <div className="max-w-xl relative text-center lg:text-left mx-auto lg:mx-0">
                <div className="relative">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white mb-6 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">{t("hero.badge")}</span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-[2.5rem] lg:text-[3.75rem] font-bold leading-[1.1] tracking-tight mb-6 text-black dark:text-white">
                    {t("hero.title")}
                  </h1>

                  {/* Sub-headline */}
                  <p className="text-[1.125rem] text-[#71717A] dark:text-zinc-400 mb-8 leading-relaxed">
                    {t("hero.subtitle")}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="/builder" className="pill-button bg-black dark:bg-white text-white dark:text-black hover:opacity-90 inline-flex items-center justify-center gap-2 h-[44px] text-lg px-8 rounded-full font-medium active:scale-95 transition-all">
                      {t("nav.getStarted")}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link href="/templates" className="pill-button bg-white dark:bg-zinc-900 border border-[#e4e4e7] dark:border-zinc-800 text-black dark:text-white hover:bg-[#f8f9fb] dark:hover:bg-zinc-800 inline-flex items-center justify-center h-[44px] text-lg px-8 rounded-full font-medium active:scale-95 transition-all">
                      {t("hero.browseTemplates")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="relative">
              <div className="relative h-[300px] lg:h-[600px] w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-blue-500/5 to-purple-500/5 rounded-2xl blur-xl"></div>
                
                      <div className="relative w-full h-full">
                        <Image
                          src="https://raw.githubusercontent.com/JOYCEQL/magic-resume/main/public/images/hero-en.png"
                          alt="Professional Resume Builder Dashboard - English Version"
                          fill
                          priority
                          className="object-contain object-center drop-shadow-2xl rounded-xl"
                          onError={(e) => {
                            // Fallback if the raw github image isn't available
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";
                          }}
                        />
                      </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-transparent to-white dark:to-zinc-950"></div>
    </div>
  );
};

export default HeroSection;
