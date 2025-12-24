"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { useState } from "react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "General Inquiry",
      message: ""
    });

    // Hide success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          {isSuccess && (
            <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl animate-in fade-in slide-in-from-top-4 duration-300">
              <p className="text-green-800 dark:text-green-400 text-center font-medium">
                Your message has been sent successfully. We will get back to you soon.
              </p>
            </div>
          )}

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#030712] dark:text-white mb-6 tracking-tight">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8f9fb] dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#030712] dark:text-white mb-1">{t("contact.emailUs")}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 break-all">{t("contact.emailDesc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8f9fb] dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#030712] dark:text-white mb-1">{t("contact.phone")}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{t("contact.phoneDesc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8f9fb] dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#030712] dark:text-white mb-1">{t("contact.location")}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{t("contact.locationDesc")}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("contact.firstName")}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("contact.lastName")}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("contact.emailAddr")}</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("contact.subject")}</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Partnership Proposal</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("contact.message")}</label>
                  <textarea 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] shadow-lg">
                  <Send className="w-4 h-4" />
                  {t("contact.send")}
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
"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { useState } from "react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "General Inquiry",
      message: ""
    });

    // Hide success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          {isSuccess && (
            <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl animate-in fade-in slide-in-from-top-4 duration-300">
              <p className="text-green-800 dark:text-green-400 text-center font-medium">
                Your message has been sent successfully. We will get back to you soon.
              </p>
            </div>
          )}

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#030712] dark:text-white mb-6 tracking-tight">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8f9fb] dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#030712] dark:text-white mb-1">{t("contact.emailUs")}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 break-all">{t("contact.emailDesc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8f9fb] dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#030712] dark:text-white mb-1">{t("contact.phone")}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{t("contact.phoneDesc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8f9fb] dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#030712] dark:text-white mb-1">{t("contact.location")}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{t("contact.locationDesc")}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("contact.firstName")}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("contact.lastName")}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("contact.emailAddr")}</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("contact.subject")}</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Partnership Proposal</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("contact.message")}</label>
                  <textarea 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-black/5 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t("contact.send")}
                    </>
                  )}
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
