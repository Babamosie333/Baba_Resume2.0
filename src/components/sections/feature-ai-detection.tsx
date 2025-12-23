"use client";

import React from 'react';
import Image from 'next/image';
import { CircleArrowRight } from 'lucide-react';

/**
 * AI Detection Feature Section
 * Clones the AI detection feature part of the "Why Choose Magic Resume?" section.
 * Includes the English heading "Smart Detection, Professional Advice" and the animated grammar check SVG illustration.
 */
export default function FeatureAiDetection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Header Content */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Why Choose Baba_Resume2.0?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide an all-in-one resume solution to make your job search journey smoother
          </p>
        </div>

        {/* Feature Row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Left Text Column */}
          <div className="w-full md:w-[400px] space-y-6 md:mr-16">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-[12px] font-semibold text-white px-2 py-1 rounded-full bg-blue-500 leading-none">
                AI
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left text-[#000000]">
                Smart Detection, Professional Advice
              </h3>
              <p className="text-muted-foreground text-center md:text-left leading-relaxed">
                Built-in smart grammar check, automatically identifies inappropriate expressions, 
                provides professional modification suggestions, making your resume more outstanding.
              </p>
            </div>

            <ul className="space-y-4">
              {/* Feature Item 1 - Inactive */}
              <li className="cursor-pointer relative p-2 rounded-lg transition-all group">
                <div className="flex items-center gap-3">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <CircleArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="transition-all duration-200 text-muted-foreground font-medium">
                    Intelligent enhancement
                  </span>
                </div>
              </li>

              {/* Feature Item 2 - Active */}
              <li className="cursor-pointer relative p-2 rounded-lg transition-all">
                <div className="flex items-center gap-3">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative">
                      <circle 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        className="text-border dark:text-gray-700" 
                      />
                      <circle 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="#3b82f6" 
                        strokeWidth="2" 
                        strokeDasharray="62.83" 
                        strokeDashoffset="15" 
                        className="transform -rotate-90 origin-center animate-[stroke-gradient_5s_linear_infinite]"
                      />
                    </svg>
                    <style jsx global>{`
                      @keyframes stroke-gradient {
                        0% { stroke-dashoffset: 62.83; }
                        50% { stroke-dashoffset: 0; }
                        100% { stroke-dashoffset: -62.83; }
                      }
                    `}</style>
                  </div>
                  <span className="transition-all duration-200 text-blue-600 dark:text-blue-400 font-semibold">
                    Grammar check
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Image/Illustration Column */}
          <div className="flex-1 w-full md:w-auto relative">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-border/40 shadow-sm group">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-600/10 z-10 pointer-events-none"></div>
              
              <div className="w-full h-full bg-white dark:bg-slate-900 flex items-center justify-center">
                <Image
                  alt="Grammar check"
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/77ba5549-92dc-4b2e-a2cb-758e9202b940-magicv-art/assets/svgs/grammar-1.svg"
                  fill
                  className="object-contain p-4 z-1 transition-transform duration-500 ease-in-out group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Background Blur decorations */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-60">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl transform scale-95"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}