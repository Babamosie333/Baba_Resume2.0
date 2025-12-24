"use client";

import React from 'react';
import { useLanguage } from '@/components/language-provider';

const FeaturesIntro = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#f8f9fb] dark:from-zinc-950 dark:to-zinc-900 transition-colors duration-200">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-[36px] font-bold mb-4 md:mb-6 leading-[1.2] tracking-[-0.01em] text-zinc-900 dark:text-white">
              {t("features.intro.title")}
            </h2>
          <p className="text-lg md:text-[1.125rem] text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-[1.6]">
            {t("features.intro.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesIntro;
