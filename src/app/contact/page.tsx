import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side: Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#030712] mb-6 tracking-tight">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                Have questions about Baba_Resume2.0? We're here to help. Send us a message and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f8f9fb] border border-zinc-200 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#030712]">Email Us</h3>
                    <p className="text-muted-foreground">support@babaresume.com</p>
                    <p className="text-sm text-zinc-400 mt-1">Response time: &lt; 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f8f9fb] border border-zinc-200 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#030712]">Live Chat</h3>
                    <p className="text-muted-foreground">Available Mon-Fri, 9am - 5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f8f9fb] border border-zinc-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#030712]">Location</h3>
                    <p className="text-muted-foreground">Tech Hub South, Suite 400<br />San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="bg-[#f8f9fb] p-8 md:p-12 rounded-3xl border border-zinc-200">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-semibold text-[#030712]">First Name</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-semibold text-[#030712]">Last Name</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-[#030712]">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-[#030712]">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/5 transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-[#030712]">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 px-6 bg-black text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}