"use client";

import React from 'react';
import { useLanguage } from '@/components/language-provider';
import { ScanSearch, UserCheck } from 'lucide-react';

const FeaturesIntro = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-zinc-950 transition-colors duration-200">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold mb-6 tracking-tight text-zinc-900 dark:text-white">
            {t("features.intro.title")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {t("features.intro.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Smart Detection */}
          <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
              <ScanSearch className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">
              {t("features.smart.title")}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t("features.smart.desc")}
            </p>
          </div>

          {/* Professional Advice */}
          <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 text-green-600 dark:text-green-500">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">
              {t("features.advice.title")}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t("features.advice.desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesIntro;
