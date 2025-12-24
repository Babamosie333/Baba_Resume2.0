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
    "templates.title": "Choose Your Template",
    "templates.subtitle": "Our professionally designed templates are tested to pass ATS systems and impress recruiters.",
    "templates.useThis": "Use This",
    "pricing.title": "Simple, Transparent Pricing",
    "pricing.subtitle": "Choose the plan that's right for your career stage.",
    "pricing.free": "Free",
    "pricing.pro": "Pro",
    "pricing.enterprise": "Enterprise",
    "features.intro.title": "Why Choose Baba_Resume2.0?",
    "features.intro.subtitle": "We provide an all-in-one resume solution to make your job search journey smoother",
    "features.security.badge": "Security",
    "features.security.title": "Data Security, Privacy First",
    "features.security.description": "All resume data is fully stored locally, no need to worry about privacy leaks. Support data export backup, ensure your resume data is always available.",
    "features.security.local": "Local file storage",
    "features.security.export": "Multiple export formats",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "Is Baba_Resume2.0 free to use?",
    "faq.a1": "Yes, Baba_Resume2.0 is completely free to use. You can create, edit, and export your resume without any hidden costs or subscriptions. We believe in providing accessible career tools for everyone.",
    "faq.q2": "Is my resume data secure?",
    "faq.a2": "Security is our top priority. All your resume data is stored locally in your browser's storage. We do not upload your personal information to our servers, ensuring you maintain 100% control over your data privacy.",
    "faq.q3": "What export formats are supported?",
    "faq.a3": "Currently, we support high-quality PDF exports which are the industry standard for job applications. The exported files are optimized to be ATS-friendly, ensuring your resume can be read by automated screening systems.",
    "faq.q4": "How can I sync across devices?",
    "faq.a4": "Since we prioritize privacy and store data locally, automatic cloud syncing is not enabled by default. However, you can use our 'Export Data' feature to download your resume configuration file and 'Import' it on any other device to continue editing.",
    "faq.q5": "How customizable is it?",
    "faq.a5": "Baba_Resume2.0 offers significant flexibility. You can choose from various professional templates, adjust colors, fonts, and layout spacing. Our AI suggestions also help you tailor the content to specific job descriptions.",
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
    "templates.title": "अपना टेम्प्लेट चुनें",
    "templates.subtitle": "हमारे पेशेवर रूप से डिज़ाइन किए गए टेम्प्लेट भर्तीकर्ताओं को प्रभावित करने के लिए परीक्षण किए गए हैं।",
    "templates.useThis": "इसका उपयोग करें",
    "pricing.title": "सरल, पारदर्शी मूल्य निर्धारण",
    "pricing.subtitle": "अपने करियर के चरण के लिए सही योजना चुनें।",
    "pricing.free": "निःशुल्क",
    "pricing.pro": "प्रो",
    "pricing.enterprise": "एंटरप्राइज",
    "features.intro.title": "Baba_Resume2.0 क्यों चुनें?",
    "features.intro.subtitle": "हम आपकी नौकरी खोज यात्रा को सुगम बनाने के लिए एक ऑल-इन-वन रिज्यूमे समाधान प्रदान करते हैं",
    "features.security.badge": "सुरक्षा",
    "features.security.title": "डेटा सुरक्षा, गोपनीयता पहले",
    "features.security.description": "सभी रिज्यूमे डेटा पूरी तरह से स्थानीय रूप से संग्रहीत किए जाते हैं, गोपनीयता लीक के बारे में चिंता करने की कोई आवश्यकता नहीं है। डेटा निर्यात बैकअप का समर्थन करें, सुनिश्चित करें कि आपका रिज्यूमे डेटा हमेशा उपलब्ध है।",
    "features.security.local": "स्थानीय फ़ाइल संग्रहण",
    "features.security.export": "एकाधिक निर्यात प्रारूप",
    "faq.title": "अक्सर पूछे जाने वाले प्रश्न",
    "faq.q1": "क्या Baba_Resume2.0 उपयोग करने के लिए मुफ़्त है?",
    "faq.a1": "हाँ, Baba_Resume2.0 उपयोग करने के लिए पूरी तरह से मुफ़्त है। आप बिना किसी छिपी लागत या सदस्यता के अपना रिज्यूमे बना सकते हैं, संपादित कर सकते हैं और निर्यात कर सकते हैं। हम सभी के लिए सुलभ करियर टूल प्रदान करने में विश्वास करते हैं।",
    "faq.q2": "क्या मेरा रिज्यूमे डेटा सुरक्षित है?",
    "faq.a2": "सुरक्षा हमारी सर्वोच्च प्राथमिकता है। आपका सारा रिज्यूमे डेटा आपके ब्राउज़र के स्टोरेज में स्थानीय रूप से संग्रहीत किया जाता है। हम आपकी व्यक्तिगत जानकारी को अपने सर्वर पर अपलोड नहीं करते हैं, यह सुनिश्चित करते हुए कि आप अपनी डेटा गोपनीयता पर 100% नियंत्रण बनाए रखें।",
    "faq.q3": "कौन से निर्यात प्रारूप समर्थित हैं?",
    "faq.a3": "वर्तमान में, हम उच्च-गुणवत्ता वाले पीडीएफ निर्यात का समर्थन करते हैं जो नौकरी के आवेदनों के लिए उद्योग मानक हैं। निर्यात की गई फ़ाइलों को ATS-अनुकूल होने के लिए अनुकूलित किया गया है, यह सुनिश्चित करते हुए कि आपका रिज्यूमे स्वचालित स्क्रीनिंग सिस्टम द्वारा पढ़ा जा सकता है।",
    "faq.q4": "मैं विभिन्न उपकरणों में सिंक कैसे कर सकता हूँ?",
    "faq.a4": "चूंकि हम गोपनीयता को प्राथमिकता देते हैं और डेटा को स्थानीय रूप से संग्रहीत करते हैं, इसलिए स्वचालित क्लाउड सिंकिंग डिफ़ॉल्ट रूप से सक्षम नहीं है। हालाँकि, आप अपनी रिज्यूमे कॉन्फ़िगरेशन फ़ाइल डाउनलोड करने के लिए हमारे 'डेटा निर्यात' सुविधा का उपयोग कर सकते हैं और संपादन जारी रखने के लिए इसे किसी अन्य डिवाइस पर 'आयात' कर सकते हैं।",
    "faq.q5": "यह कितना अनुकूलन योग्य है?",
    "faq.a5": "Baba_Resume2.0 महत्वपूर्ण लचीलापन प्रदान करता है। आप विभिन्न पेशेवर टेम्प्लेट में से चुन सकते हैं, रंग, फ़ॉन्ट और लेआउट स्पेसिंग समायोजित कर सकते हैं। हमारे AI सुझाव आपको विशिष्ट नौकरी विवरणों के लिए सामग्री को अनुकूलित करने में भी मदद करते हैं।",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "hi")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
