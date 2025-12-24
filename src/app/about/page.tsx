import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Heart, Shield, Zap, Globe } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: "User-Centric Design",
      description: "We believe that powerful tools should be simple to use. Every feature we build starts with the user's needs."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Privacy First",
      description: "Your data is yours. We use local-first storage and secure technologies to ensure your personal information stays private."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "AI Innovation",
      description: "Leveraging the latest in AI technology to give you a competitive edge in your job search."
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      title: "Global Reach",
      description: "Supporting multiple languages and international resume standards to help you find work anywhere in the world."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-[#030712] mb-8 tracking-tight">
              Our Mission at Baba_Resume2.0
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We're on a mission to democratize professional career tools. By combining cutting-edge AI with intuitive design, we help everyone create resumes that stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#030712]">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Writing a resume is often stressful and time-consuming. Most builders are either too complex, too expensive, or don't respect your privacy. We saw a need for a better way.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#030712]">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Baba_Resume2.0 is built to be fast, free, and incredibly powerful. With AI-assisted content writing and professional templates, you can go from blank page to finished resume in minutes.
              </p>
            </div>
          </div>

          <div className="bg-[#f8f9fb] rounded-3xl p-12 border border-zinc-200">
            <h2 className="text-3xl font-bold text-[#030712] text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#030712] mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-[#030712] mb-6 tracking-tight">Ready to start?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of professionals who have advanced their careers with Baba_Resume2.0.
            </p>
            <a 
              href="/builder" 
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold rounded-2xl hover:opacity-90 transition-all active:scale-95 shadow-lg"
            >
              Build Your Resume Now
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}