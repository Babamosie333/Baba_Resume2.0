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
      "builder.languages": "Languages",
      "builder.projects": "Projects",
      "builder.addLanguage": "Add Language",
      "builder.addProject": "Add Project",
      "builder.projectTitle": "Project Title",
      "builder.projectLink": "Project Link",
      "builder.projectName": "Project Name",
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
      "features.intro.title": "Smart Detection & Professional Advice",
      "features.intro.subtitle": "Advanced features to help you stand out from the competition",
      "features.smart.title": "Smart Detection",
      "features.smart.desc": "Our AI automatically detects and highlights the most important parts of your resume for recruiters.",
      "features.advice.title": "Professional Advice",
      "features.advice.desc": "Get real-time feedback and professional tips to improve your resume content.",
      "features.security.badge": "Security",
      "features.security.title": "Data Security, Privacy First",
      "features.security.description": "All resume data is fully stored locally, no need to worry about privacy leaks. Support data export backup, ensure your resume data is always available.",
      "features.security.local": "Local file storage",
      "features.security.export": "Multiple export formats",
      "faq.title": "Frequently Asked Questions",
      "faq.q1": "Is Baba_Resume2.0 free to use?",
      "faq.a1": "Yes, Baba_Resume2.0 is completely free to use. You can create, edit, and export your resume without any hidden costs or subscriptions.",
      "faq.q2": "Is my resume data secure?",
      "faq.a2": "Security is our top priority. All your resume data is stored locally in your browser's storage.",
      "faq.q3": "What export formats are supported?",
      "faq.a3": "Currently, we support high-quality PDF exports which are the industry standard for job applications.",
      "faq.q4": "How can I sync across devices?",
      "faq.a4": "Since we prioritize privacy, automatic cloud syncing is not enabled. Use our 'Export Data' feature to transfer files.",
      "faq.q5": "How customizable is it?",
      "faq.a5": "Baba_Resume2.0 offers significant flexibility with various professional templates and AI suggestions.",
      "contact.title": "Get in Touch",
      "contact.subtitle": "Have questions or feedback? We'd love to hear from you. Our team is here to help.",
      "contact.emailUs": "Email Us",
      "contact.emailDesc": "vikramsingh14052006@gmail.com",
      "contact.phone": "Phone Number",
      "contact.phoneDesc": "+91 8081477034",
      "contact.location": "Our Location",
      "contact.locationDesc": "Kanpur, Uttar Pradesh, India",
      "contact.firstName": "First Name",
      "contact.lastName": "Last Name",
      "contact.emailAddr": "Email Address",
      "contact.subject": "Subject",
      "contact.message": "Message",
      "contact.send": "Send Message",
      "about.title": "About Baba_Resume2.0",
      "about.subtitle": "Empowering job seekers with smart technology.",
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
      "hero.subtitle": "Baba_Resume2.0 पेशेवर रिज्यूमे बनाने में आपकी मदद करने के लिए AI तकनीक का उपयोग करता है।",
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
      "builder.languages": "भाषाएं",
      "builder.projects": "परियोजनाएं",
      "builder.addLanguage": "भाषा जोड़ें",
      "builder.addProject": "परियोजना जोड़ें",
      "builder.projectTitle": "परियोजना का शीर्षक",
      "builder.projectLink": "परियोजना लिंक",
      "builder.projectName": "परियोजना का नाम",
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
      "features.intro.title": "स्मार्ट डिटेक्शन और प्रोफेशनल सलाह",
      "features.intro.subtitle": "प्रतियोगिता से बाहर निकलने में आपकी मदद करने के लिए उन्नत सुविधाएँ",
      "features.smart.title": "स्मार्ट डिटेक्शन",
      "features.smart.desc": "हमारा AI स्वचालित रूप से नियोक्ताओं के लिए आपके रिज्यूमे के सबसे महत्वपूर्ण हिस्सों का पता लगाता है और उन्हें उजागर करता है।",
      "features.advice.title": "प्रोफेशनल सलाह",
      "features.advice.desc": "अपने रिज्यूमे की सामग्री को बेहतर बनाने के लिए रीयल-टाइम फीडबैक और प्रोफेशनल टिप्स प्राप्त करें।",
      "features.security.badge": "सुरक्षा",
      "features.security.title": "डेटा सुरक्षा, गोपनीयता पहले",
      "features.security.description": "सभी रिज्यूमे डेटा पूरी तरह से स्थानीय रूप से संग्रहीत किए जाते हैं, गोपनीयता लीक के बारे में चिंता करने की कोई आवश्यकता नहीं है।",
      "features.security.local": "स्थानीय फ़ाइल संग्रहण",
      "features.security.export": "एकाधिक निर्यात प्रारूप",
      "faq.title": "अक्सर पूछे जाने वाले प्रश्न",
      "faq.q1": "क्या Baba_Resume2.0 उपयोग करने के लिए मुफ़्त है?",
      "faq.a1": "हाँ, Baba_Resume2.0 उपयोग करने के लिए पूरी तरह से मुफ़्त है।",
      "faq.q2": "क्या मेरा रिज्यूमे डेटा सुरक्षित है?",
      "faq.a2": "सुरक्षा हमारी सर्वोच्च प्राथमिकता है। आपका सारा रिज्यूमे डेटा स्थानीय रूप से संग्रहीत है।",
      "faq.q3": "कौन से निर्यात प्रारूप समर्थित हैं?",
      "faq.a3": "वर्तमान में, हम उच्च-गुणवत्ता वाले पीडीएफ निर्यात का समर्थन करते हैं।",
      "faq.q4": "मैं विभिन्न उपकरणों में सिंक कैसे कर सकता हूँ?",
      "faq.a4": "चूंकि हम गोपनीयता को प्राथमिकता देते हैं, स्वचालित सिंकिंग सक्षम नहीं है। फ़ाइलें स्थानांतरित करने के लिए 'डेटा निर्यात' का उपयोग करें।",
      "faq.q5": "यह कितना अनुकूलन योग्य है?",
      "faq.a5": "Baba_Resume2.0 विभिन्न पेशेवर टेम्प्लेट और AI सुझावों के साथ महत्वपूर्ण लचीलापन प्रदान करता।",
      "contact.title": "संपर्क करें",
      "contact.subtitle": "कोई प्रश्न या प्रतिक्रिया है? हम आपसे सुनना चाहेंगे। हमारी टीम यहाँ मदद के लिए है।",
      "contact.emailUs": "हमें ईमेल करें",
      "contact.emailDesc": "vikramsingh14052006@gmail.com",
      "contact.phone": "फ़ोन नंबर",
      "contact.phoneDesc": "+91 8081477034",
      "contact.location": "हमारा स्थान",
      "contact.locationDesc": "कानपुर, उत्तर प्रदेश, भारत",
      "contact.firstName": "पहला नाम",
      "contact.lastName": "अंतिम नाम",
      "contact.emailAddr": "ईमेल पता",
      "contact.subject": "विषय",
      "contact.message": "संदेश",
      "contact.send": "संदेश भेजें",
      "about.title": "Baba_Resume2.0 के बारे में",
      "about.subtitle": "स्मार्ट तकनीक के साथ नौकरी चाहने वालों को सशक्त बनाना।",
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
