"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[800px] mx-auto prose prose-zinc dark:prose-invert">
          <h1 className="text-4xl font-bold text-[#030712] dark:text-white mb-8 tracking-tight">Terms of Service</h1>
          <p className="text-muted-foreground dark:text-zinc-400 mb-6">Last updated: May 20, 2024</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              By accessing and using Baba_Resume2.0, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] dark:text-white mb-4">2. Use License</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Permission is granted to temporarily use Baba_Resume2.0 for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2 mt-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] dark:text-white mb-4">3. Disclaimer</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              The materials on Baba_Resume2.0 are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] dark:text-white mb-4">4. Limitations</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              In no event shall Baba_Resume2.0 or its suppliers be liable for any damages arising out of the use or inability to use the materials on Baba_Resume2.0.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] dark:text-white mb-4">5. Governing Law</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the United States.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
