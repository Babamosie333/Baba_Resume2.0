"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#030712] dark:text-white mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Have questions or feedback? We'd love to hear from you. Our team is here to help you build your perfect resume.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8f9fb] dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#030712] dark:text-white mb-1">Email Us</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">support@baba-resume.com</p>
                  <p className="text-xs text-zinc-400 mt-1">We typically reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8f9fb] dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#030712] dark:text-white mb-1">Live Chat</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Available Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8f9fb] dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#030712] dark:text-white mb-1">Office</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">123 Career Blvd, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form className="p-8 md:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Partnership Proposal</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] shadow-lg">
                  <Send className="w-4 h-4" />
                  Send Message
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
