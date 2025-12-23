import React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

/**
 * Hero component for Magic Resume.
 * Features a gradient background, sticky header (implied context), 
 * announcement pill, and two-column hero content.
 */
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#f8f9fb] to-white min-h-screen">
      {/* Announcement Badge - Positioned below the typical header area */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center px-4">
        <div className="relative inline-flex items-center gap-3 px-5 py-2.5 text-sm font-medium rounded-full bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-slate-200/80 hover:shadow-[0_2px_2px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer group">
          <span className="text-slate-600 whitespace-nowrap">
            New AI Resume Enhancement Feature is Live
          </span>
        </div>
      </div>

      <section className="relative min-h-[85vh] flex items-center pt-32 lg:pt-16 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0000000d] via-transparent to-transparent"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-black/5 rounded-full blur-3xl opacity-50 md:opacity-100"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-50 md:opacity-100"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-black/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl opacity-30 md:opacity-60"></div>
        </div>

        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="z-10">
              <div className="max-w-xl relative text-center lg:text-left mx-auto lg:mx-0">
                {/* Visual accent blob */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-16 h-32 bg-gradient-to-t from-black/5 to-transparent rounded-full blur-2xl hidden lg:block"></div>
                
                <div className="relative">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 text-black mb-6 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">Smart Resume Creation</span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-[2.5rem] lg:text-[3.75rem] font-bold leading-[1.1] tracking-tight mb-6 text-black">
                    Make Resume Creation Simple and Smart
                  </h1>

                  {/* Sub-headline */}
                  <p className="text-[1.125rem] text-[#71717A] mb-8 leading-relaxed">
                    Magic Resume uses AI technology to help you quickly create professional resumes. 
                    No registration required, free to use, with secure data storage.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="pill-button bg-black text-white hover:bg-black/90 inline-flex items-center justify-center gap-2 h-[44px] text-lg px-8">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="pill-button bg-white border border-[#e4e4e7] text-black hover:bg-[#f8f9fb] inline-flex items-center justify-center h-[44px] text-lg px-8">
                      Browse Templates
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="relative">
              <div className="relative h-[300px] lg:h-[600px] w-full flex items-center justify-center">
                {/* Image Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-blue-500/5 to-purple-500/5 rounded-2xl blur-xl"></div>
                
                <div className="relative w-full h-full">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/77ba5549-92dc-4b2e-a2cb-758e9202b940-magicv-art/assets/images/images_1.png"
                    alt="Magic Resume Editor Preview"
                    fill
                    priority
                    className="object-contain object-center drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition to next section gradient */}
      <div className="h-24 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default HeroSection;