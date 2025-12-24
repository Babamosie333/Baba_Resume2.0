"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Check } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function PricingPage() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricing.free"),
      price: "$0",
      description: "Perfect for students and entry-level professionals.",
      features: ["1 Resume Template", "Basic AI Content", "PDF Export", "Community Support"],
      cta: "Get Started",
      popular: false
    },
    {
      name: t("pricing.pro"),
      price: "$12",
      description: "Ideal for experienced professionals and job seekers.",
      features: ["All Resume Templates", "Advanced AI Enhancement", "Unlimited PDF Exports", "Priority Email Support", "Custom Branding"],
      cta: "Go Pro",
      popular: true
    },
    {
      name: t("pricing.enterprise"),
      price: "Custom",
      description: "For teams and organizations.",
      features: ["Bulk User Management", "Team Collaboration", "API Access", "Dedicated Account Manager"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#030712] dark:text-white mb-6 tracking-tight">
              {t("pricing.title")}
            </h1>
            <p className="text-xl text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t("pricing.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col p-8 bg-white dark:bg-zinc-900 rounded-3xl border ${
                  plan.popular 
                    ? "border-black dark:border-white ring-1 ring-black dark:ring-white" 
                    : "border-zinc-200 dark:border-zinc-800"
                } shadow-sm transition-all hover:shadow-xl`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#030712] dark:text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-[#030712] dark:text-white">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-zinc-500 dark:text-zinc-400">/month</span>}
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3 text-sm">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-zinc-900 dark:text-zinc-100" />
                      </div>
                      <span className="text-zinc-600 dark:text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-xl font-bold transition-all active:scale-[0.98] ${
                  plan.popular 
                    ? "bg-black dark:bg-white text-white dark:text-black hover:opacity-90" 
                    : "bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
