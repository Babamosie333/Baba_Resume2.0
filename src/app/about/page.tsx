"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { useLanguage } from "@/components/language-provider";
import { Target, Users, Shield, Zap } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision",
      description: "Our AI is tuned to help you present your experience with maximum impact."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accessibility",
      description: "We believe everyone deserves a professional resume, regardless of their tech skills."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "Your data stays on your device. We never sell your personal information."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed",
      description: "Build a professional resume in minutes, not hours."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#030712] dark:text-white mb-6 tracking-tight">
              Our Mission
            </h1>
            <p className="text-xl text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Empowering job seekers with smart, accessible tools to build professional resumes and land their dream jobs.
            </p>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none mb-20">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Baba_Resume2.0 was born out of a simple observation: the traditional process of creating a resume is often tedious, confusing, and technically demanding. We set out to build a platform that leverages modern technology to make this process seamless and even enjoyable.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our platform uses advanced AI to help users articulate their achievements, while our clean, modern templates ensure that the final result is always professional and ATS-friendly. Best of all, we've designed everything with a "privacy-first" mindset, meaning your sensitive data is always handled with the utmost care.
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

          <div className="mt-24 p-12 rounded-3xl bg-black dark:bg-white text-white dark:text-black text-center">
            <h2 className="text-3xl font-bold mb-6">Join 10,000+ happy users</h2>
            <p className="text-zinc-400 dark:text-zinc-600 mb-8 max-w-xl mx-auto text-lg">
              Start building your professional resume today and take the next step in your career journey.
            </p>
            <button className="bg-white dark:bg-black text-black dark:text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all active:scale-95 shadow-xl">
              Get Started for Free
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
