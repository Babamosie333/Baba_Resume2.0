"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[800px] mx-auto prose prose-zinc dark:prose-invert">
          <h1 className="text-4xl font-bold text-[#030712] dark:text-white mb-8 tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground dark:text-zinc-400 mb-6">Last updated: May 20, 2024</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] dark:text-white mb-4">1. Introduction</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              At Baba_Resume2.0, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] dark:text-white mb-4">2. Data We Collect</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              We do not collect any personal data by default. All the information you enter in the resume builder is stored locally on your device using browser technologies like LocalStorage.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              However, if you choose to create an account or subscribe to our newsletter, we may collect:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2 mt-4">
              <li>Email address</li>
              <li>Usage data (anonymized)</li>
              <li>Device information</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] dark:text-white mb-4">3. How We Use Your Data</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We use the data we collect to provide and maintain our service, notify you about changes, and provide customer support. We never sell your personal data to third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] dark:text-white mb-4">4. Cookies</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We use essential cookies to make our site work. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] dark:text-white mb-4">5. Contact Us</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@babaresume.com.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
