"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import { Eye, Copy } from "lucide-react";

export default function TemplatesPage() {
  const templates = [
    {
      id: 1,
      name: "Modern Professional",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/77ba5549-92dc-4b2e-a2cb-758e9202b940-magicv-art/assets/images/images_1.png",
      tag: "Popular"
    },
    {
      id: 2,
      name: "Executive Minimal",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/77ba5549-92dc-4b2e-a2cb-758e9202b940-magicv-art/assets/images/images_1.png",
      tag: "ATS Friendly"
    },
    {
      id: 3,
      name: "Creative Portfolio",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/77ba5549-92dc-4b2e-a2cb-758e9202b940-magicv-art/assets/images/images_1.png",
      tag: "New"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#030712] dark:text-white mb-6 tracking-tight">
              Choose Your Template
            </h1>
            <p className="text-xl text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Our professionally designed templates are tested to pass ATS systems and impress recruiters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div key={template.id} className="group relative bg-[#f8f9fb] dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all hover:shadow-2xl">
                <div className="aspect-[1/1.414] relative overflow-hidden bg-white dark:bg-zinc-800">
                  <Image 
                    src={template.image} 
                    alt={template.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Link href="/builder" className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                      <Copy className="w-4 h-4" />
                      Use This
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg dark:text-white">{template.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-black/5 dark:bg-white/10 rounded text-zinc-600 dark:text-zinc-400">
                      {template.tag}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    Perfect for business and corporate roles.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
