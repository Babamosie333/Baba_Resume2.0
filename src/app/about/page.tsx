"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { useLanguage } from "@/components/language-provider";
import { Target, Users, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t("about.precision"),
      description: t("about.precisionDesc")
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("about.accessibility"),
      description: t("about.accessibilityDesc")
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("about.privacy"),
      description: t("about.privacyDesc")
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("about.speed"),
      description: t("about.speedDesc")
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#030712] dark:text-white mb-6 tracking-tight">
              {t("about.mission")}
            </h1>
            <p className="text-xl text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t("about.missionDesc")}
            </p>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none mb-20 text-center">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              {t("about.story1")}
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t("about.story2")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 rounded-2xl bg-[#f8f9fb] dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mb-6 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#030712] dark:text-white mb-3">{value.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 rounded-3xl bg-black dark:bg-white text-white dark:text-black text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">{t("about.joinTitle")}</h2>
            <p className="text-zinc-400 dark:text-zinc-600 mb-8 max-w-xl mx-auto text-lg">
              {t("about.joinDesc")}
            </p>
            <Link href="/builder" className="inline-block bg-white dark:bg-black text-black dark:text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all active:scale-95 shadow-xl">
              {t("about.getStarted")}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
