"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background dark:from-zinc-900 dark:to-zinc-950 relative overflow-hidden transition-colors duration-200">
      {/* Ambient Gradient Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background dark:from-zinc-900/20 dark:via-zinc-950 dark:to-zinc-950"></div>
        
        {/* Top-left blur */}
        <div 
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 dark:bg-white/5 rounded-full blur-3xl opacity-50 md:opacity-100" 
          aria-hidden="true"
        />
        
        {/* Top-right blur */}
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 dark:bg-blue-900/5 rounded-full blur-3xl opacity-50 md:opacity-100" 
          aria-hidden="true"
        />
        
        {/* Central large blur */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 dark:from-white/5 dark:via-blue-900/5 dark:to-purple-900/5 rounded-full blur-3xl opacity-30 md:opacity-60" 
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 relative">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-4xl font-bold mb-6 tracking-tight text-[#030712] dark:text-white">
            {t("cta.title")}
          </h2>
          
          {/* Subtext */}
          <p className="text-xl text-muted-foreground dark:text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("cta.subtitle")}
          </p>

          {/* CTA Button Wrapper */}
          <div className="flex justify-center">
            <Link 
              href="/builder"
              className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black dark:bg-white text-white dark:text-black hover:opacity-90 h-11 rounded-md gap-2 text-lg px-12 shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              {t("cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
