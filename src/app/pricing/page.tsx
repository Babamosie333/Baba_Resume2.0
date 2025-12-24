"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function PricingPage() {
  const { t } = useLanguage();
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started with your first professional resume.",
      features: [
        "1 Active Resume",
        "Basic Templates",
        "PDF Export",
        "Standard Support",
        "Secure Local Storage"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Pro",
      price: "$12",
      description: "Everything you need for a comprehensive job search.",
      features: [
        "Unlimited Resumes",
        "All Premium Templates",
        "AI Content Generation",
        "Multiple Export Formats",
        "Priority Support",
        "Data Backup & Sync"
      ],
      cta: "Try Pro Now",
      highlight: true
    },
    {
      name: "Team",
      price: "$49",
      description: "Collaborative features for career coaches and agencies.",
      features: [
        "Up to 5 Users",
        "Shared Templates",
        "Collaboration Tools",
        "Client Management",
        "Dedicated Support",
        "Custom Branding"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#030712] dark:text-white mb-6 tracking-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Choose the plan that fits your career goals. All plans include our core AI-powered resume building features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div 
                key={tier.name}
                className={`relative p-8 rounded-2xl border ${
                  tier.highlight 
                    ? "border-black dark:border-white shadow-xl scale-105 z-10 bg-white dark:bg-zinc-900" 
                    : "border-zinc-200 dark:border-zinc-800 shadow-sm bg-[#f8f9fb] dark:bg-zinc-900/50"
                } flex flex-col transition-all duration-300 hover:shadow-lg`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#030712] dark:text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#030712] dark:text-white">{tier.price}</span>
                    <span className="text-muted-foreground dark:text-zinc-400">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-zinc-400 mt-4">{tier.description}</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black dark:text-white" />
                      </div>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/builder"
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all flex items-center justify-center gap-2 ${
                    tier.highlight 
                      ? "bg-black dark:bg-white text-white dark:text-black hover:opacity-90" 
                      : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-black dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-2xl bg-[#f8f9fb] dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#030712] dark:text-white mb-2">Need a custom plan?</h3>
            <p className="text-muted-foreground dark:text-zinc-400 mb-6">
              We offer special pricing for educational institutions and non-profits.
            </p>
            <Link href="/contact" className="text-black dark:text-white font-semibold hover:underline">
              Get in touch with us →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
