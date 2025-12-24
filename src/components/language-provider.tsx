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
    "hero.badge": "Smart Resume Creation",
    "hero.title": "Make Resume Creation Simple and Smart",
    "hero.subtitle": "Baba_Resume2.0 uses AI technology to help you quickly create professional resumes. No registration required, free to use, with secure data storage.",
    "hero.browseTemplates": "Browse Templates",
    "hero.announcement": "New AI Resume Enhancement Feature is Live",
    "cta.title": "Ready to build your professional resume?",
    "cta.subtitle": "Join thousands of users who have successfully landed jobs using our platform.",
    "cta.button": "Start Building Now",
    "footer.rights": "All rights reserved.",
    "builder.title": "Resume Builder",
    "builder.subtitle": "Create and manage your professional resumes.",
    "builder.exports": "Download PDF",
    "builder.personalInfo": "Personal Information",
    "builder.experience": "Experience",
    "builder.education": "Education",
    "builder.skills": "Skills",
    "builder.fullName": "Full Name",
    "builder.email": "Email",
    "builder.phone": "Phone",
    "builder.location": "Location",
    "builder.company": "Company Name",
    "builder.role": "Role / Title",
    "builder.description": "Describe your achievements...",
    "builder.school": "School / University",
    "builder.degree": "Degree / Field of Study",
    "builder.year": "Year",
    "builder.addExperience": "Add Experience",
    "builder.addEducation": "Add Education",
    "builder.addSkill": "Add Skill",
    "builder.preview": "Resume Preview",
  },
  hi: {
    "nav.getStarted": "शुरू करें",
    "nav.starOnGithub": "गिटहब पर स्टार करें",
    "nav.builder": "बिल्डर",
    "nav.templates": "टेम्प्लेट",
    "nav.pricing": "कीमत",
    "nav.about": "हमारे बारे में",
    "nav.contact": "संपर्क करें",
    "hero.badge": "स्मार्ट रिज्यूमे निर्माण",
    "hero.title": "रिज्यूमे निर्माण को सरल और स्मार्ट बनाएं",
    "hero.subtitle": "Baba_Resume2.0 पेशेवर रिज्यूमे बनाने में आपकी मदद करने के लिए AI तकनीक का उपयोग करता है। किसी पंजीकरण की आवश्यकता नहीं, उपयोग करने के लिए स्वतंत्र, सुरक्षित डेटा स्टोरेज के साथ।",
    "hero.browseTemplates": "टेम्प्लेट ब्राउज़ करें",
    "hero.announcement": "नया AI रिज्यूमे एन्हांसमेंट फीचर लाइव है",
    "cta.title": "अपना पेशेवर रिज्यूमे बनाने के लिए तैयार हैं?",
    "cta.subtitle": "उन हजारों उपयोगकर्ताओं से जुड़ें जिन्होंने हमारे प्लेटफॉर्म का उपयोग करके सफलतापूर्वक नौकरियां हासिल की हैं।",
    "cta.button": "अभी बनाना शुरू करें",
    "footer.rights": "सर्वाधिकार सुरक्षित।",
    "builder.title": "रिज्यूमे बिल्डर",
    "builder.subtitle": "अपने पेशेवर रिज्यूमे बनाएं और प्रबंधित करें।",
    "builder.exports": "पीडीएफ डाउनलोड करें",
    "builder.personalInfo": "व्यक्तिगत जानकारी",
    "builder.experience": "अनुभव",
    "builder.education": "शिक्षा",
    "builder.skills": "कौशल",
    "builder.fullName": "पूरा नाम",
    "builder.email": "ईमेल",
    "builder.phone": "फोन",
    "builder.location": "स्थान",
    "builder.company": "कंपनी का नाम",
    "builder.role": "भूमिका / पद",
    "builder.description": "अपनी उपलब्धियों का वर्णन करें...",
    "builder.school": "स्कूल / विश्वविद्यालय",
    "builder.degree": "डिग्री / अध्ययन का क्षेत्र",
    "builder.year": "वर्ष",
    "builder.addExperience": "अनुभव जोड़ें",
    "builder.addEducation": "शिक्षा जोड़ें",
    "builder.addSkill": "कौशल जोड़ें",
    "builder.preview": "रिज्यूमे पूर्वावलोकन",
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
