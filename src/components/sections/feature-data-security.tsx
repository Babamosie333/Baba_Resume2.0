"use client";

import React from "react";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const FeatureDataSecurity = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-zinc-950 transition-colors duration-200">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center">
          {/* Text Content */}
          <div className="w-full md:w-[400px] space-y-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-xs font-semibold text-white px-2 py-1 rounded-full bg-green-500">
                {t("features.security.badge")}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left text-zinc-900 dark:text-white tracking-tight">
                {t("features.security.title")}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-center md:text-left leading-relaxed">
                {t("features.security.description")}
              </p>
            </div>
            
            <ul className="space-y-4">
              <li className="cursor-pointer relative p-2 rounded-lg transition-all">
                <div className="flex items-center gap-3">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <CircleArrowRight className="w-5 h-5 text-zinc-400" />
                  </div>
                  <span className="transition-all duration-200 text-zinc-500 dark:text-zinc-400 text-base font-medium">
                    {t("features.security.local")}
                  </span>
                </div>
              </li>
              <li className="cursor-pointer relative p-2 rounded-lg transition-all group">
                <div className="flex items-center gap-3">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-all duration-300"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        className="text-zinc-200 dark:text-zinc-800"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#22c55e"
                        strokeWidth="2"
                        strokeDasharray="62.83"
                        strokeDashoffset="15"
                        className="transform -rotate-90 origin-center"
                      />
                    </svg>
                  </div>
                  <span className="transition-all duration-200 text-green-600 dark:text-green-500 font-semibold text-base">
                    {t("features.security.export")}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Graphic Content */}
          <div className="flex-1 w-full md:w-auto relative">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-600/10 z-10 pointer-events-none"></div>
              
              <div className="relative w-full h-full flex items-center justify-center p-8 animate-in fade-in duration-1000">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/77ba5549-92dc-4b2e-a2cb-758e9202b940-magicv-art/assets/svgs/export-formats-2.svg"
                    alt="Multiple export formats illustration"
                    fill
                    className="object-contain p-12 transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
                    priority
                  />
              </div>
            </div>
            
            {/* Background Glow Effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-50">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-emerald-500/10 rounded-3xl transform scale-95"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDataSecurity;
