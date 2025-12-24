"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "hi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.getStarted": "Get Started",
    "nav.starOnGithub": "Star on GitHub",
    "nav.builder": "Builder",
    "nav.templates": "Templates",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.title": "Build your professional resume in minutes",
    "hero.subtitle": "Create a modern, ATS-friendly resume that stands out to recruiters.",
    "builder.title": "Resume Builder",
    "builder.subtitle": "Create and manage your professional resumes.",
    "builder.createNew": "Create New Resume",
    "builder.allResumes": "All Resumes",
    "builder.templates": "Templates",
    "builder.exports": "Exports",
    "builder.quickActions": "Quick Actions",
    "builder.share": "Share",
    "builder.settings": "Settings",
    "builder.startFromScratch": "Start from scratch",
    "builder.startFromScratchDesc": "Create a new blank resume and fill in your details.",
    "builder.professionalTemplate": "Professional Template",
    "builder.professionalTemplateDesc": "Clean and modern design for corporate roles.",
    "builder.popular": "Popular",
    "builder.useThis": "Use this",
  },
  hi: {
    "nav.getStarted": "शुरू करें",
    "nav.starOnGithub": "गिटहब पर स्टार करें",
    "nav.builder": "बिल्डर",
    "nav.templates": "टेम्प्लेट",
    "nav.pricing": "कीमत",
    "nav.about": "हमारे बारे में",
    "nav.contact": "संपर्क करें",
    "hero.title": "मिनटों में अपना पेशेवर बायोडाटा बनाएं",
    "hero.subtitle": "एक आधुनिक, एटीएस-अनुकूल बायोडाटा बनाएं जो नियोक्ताओं के लिए अलग दिखे।",
    "builder.title": "रिज्यूमे बिल्डर",
    "builder.subtitle": "अपने पेशेवर बायोडाटा बनाएं और प्रबंधित करें।",
    "builder.createNew": "नया रिज्यूमे बनाएं",
    "builder.allResumes": "सभी रिज्यूमे",
    "builder.templates": "टेम्प्लेट",
    "builder.exports": "निर्यात",
    "builder.quickActions": "त्वरित कार्रवाई",
    "builder.share": "साझा करें",
    "builder.settings": "सेटिंग्स",
    "builder.startFromScratch": "शुरुआत से शुरू करें",
    "builder.startFromScratchDesc": "एक नया खाली बायोडाटा बनाएं और अपना विवरण भरें।",
    "builder.professionalTemplate": "पेशेवर टेम्प्लेट",
    "builder.professionalTemplateDesc": "कॉर्पोरेट भूमिकाओं के लिए स्वच्छ और आधुनिक डिजाइन।",
    "builder.popular": "लोकप्रिय",
    "builder.useThis": "इसे इस्तेमाल करें",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
