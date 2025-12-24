import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[800px] mx-auto prose prose-zinc">
          <h1 className="text-4xl font-bold text-[#030712] mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last updated: May 20, 2024</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-600 leading-relaxed">
              By accessing or using Baba_Resume2.0, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] mb-4">2. Use of Service</h2>
            <p className="text-zinc-600 leading-relaxed">
              You are responsible for any content you create using our resume builder. You agree not to use the service for any illegal or unauthorized purpose.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] mb-4">3. Intellectual Property</h2>
            <p className="text-zinc-600 leading-relaxed">
              The service and its original content, features, and functionality are and will remain the exclusive property of Baba_Resume2.0 and its licensors.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] mb-4">4. Limitation of Liability</h2>
            <p className="text-zinc-600 leading-relaxed">
              In no event shall Baba_Resume2.0 be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#030712] mb-4">5. Changes to Terms</h2>
            <p className="text-zinc-600 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}