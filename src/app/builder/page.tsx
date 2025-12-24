"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { 
  Plus, Layout, FileText, Download, Share2, Settings, User, 
  Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Trash2,
  ChevronLeft, Globe, Code
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";

  interface ResumeData {
    personalInfo: {
      fullName: string;
      email: string;
      phone: string;
      location: string;
      summary: string;
      photo?: string;
      availability?: string;
    };
    experience: {
      company: string;
      role: string;
      duration: string;
      description: string;
    }[];
    education: {
      school: string;
      degree: string;
      year: string;
    }[];
    projects: {
      name: string;
      link: string;
      description: string;
    }[];
    skills: string[];
    languages: string[];
  }
  
  function BuilderContent() {
    const { t } = useLanguage();
    const searchParams = useSearchParams();
    const [templateId, setTemplateId] = useState(searchParams.get("template") || "modern");
    
    const [data, setData] = useState<ResumeData>({
      personalInfo: { 
        fullName: "Vikram Singh", 
        email: "vikramsingh14052006@gmail.com", 
        phone: "+91 8081477034", 
        location: "Kanpur, Uttar Pradesh, India", 
        summary: "Passionate software developer focusing on Web Development and Python projects. Experience in building responsive websites and implementing AI/ML models using Python. Skilled in both frontend and backend technologies with a strong foundation in data structures and algorithms.",
        availability: "Available"
      },
      experience: [
        { 
          company: "Web Development Training", 
          role: "Trainee Web Developer", 
          duration: "Nov 2024 - Dec 2024", 
          description: "Participating in a collage Web development training program focused on building responsive websites using HTML5, CSS3, Bootstrap and basic JavaScript. Creating multi-page layout and forms, improving understanding of page structure, styling and basic interactivity." 
        },
        { 
          company: "AI & ML Training", 
          role: "Trainee ML Engineer", 
          duration: "Aug 2023 - June 2025", 
          description: "Completed college training on artificial intelligence and machine learning using Python. Implemented simple models, regression classification with data, pre-processing and evaluation in Jupyter notebook, using libraries like Pandas, NumPy and Scikit-learn." 
        },
        { 
          company: "Django & Flask Training", 
          role: "Trainee Backend Developer", 
          duration: "Nov 2025 - Dec 2025", 
          description: "Attendant college training on Django and Flask framework for Python web development. Build basic CRUD web applications connected to a database, practising URL routing, templates, and deployment of simple demo projects." 
        }
      ],
      education: [
        { 
          school: "Dr. Virendra Swaroop Institute of Computer Studies", 
          degree: "Bachelor of Computer Application (BCA)", 
          year: "2024 - 2027" 
        },
        { 
          school: "Guru Nanak Public School", 
          degree: "Intermediate (Computer Science)", 
          year: "2023 - 2024" 
        }
      ],
      projects: [
        { 
          name: "Magic Resume", 
          link: "https://github.com/Babamosie333/Baba_Resume2.0", 
          description: "A professional resume builder with AI detection and advice features. Implemented multilingual support and real-time preview features." 
        },
        { 
          name: "EasyFolio", 
          link: "https://babamosie333.github.io/EasyFolio/", 
          description: "A web development project focused on building responsive websites using modern web technologies. Improving understanding of page structure and styling." 
        }
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Python", "Django", "MySQL", "Pandas", "NumPy", "Scikit-learn", "Git"],
      languages: ["English", "Hindi"],
    });

    const [mounted, setMounted] = useState(false);
    const [githubStats, setGithubStats] = useState<{intensities: number[], contributions: number[]} | null>(null);
    const [fontSize, setFontSize] = useState(1); // Scale factor

    useEffect(() => {
      setMounted(true);
      // Generate static random values for GitHub graph to avoid hydration mismatch
      const intensities = Array.from({ length: 40 }, () => Math.floor(Math.random() * 5));
      const contributions = Array.from({ length: 40 }, () => Math.floor(Math.random() * 10));
      setGithubStats({ intensities, contributions });
    }, []);

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, photo: reader.result as string }
          }));
        };
        reader.readAsDataURL(file);
      }
    };

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value }
    }));
  };

  const handleListChange = (section: 'experience' | 'education' | 'projects', index: number, name: string, value: string) => {
    setData(prev => {
      const newList = [...prev[section]];
      newList[index] = { ...newList[index], [name]: value };
      return { ...prev, [section]: newList };
    });
  };

  const handleArrayChange = (section: 'skills' | 'languages', index: number, value: string) => {
    setData(prev => {
      const newList = [...prev[section]];
      newList[index] = value;
      return { ...prev, [section]: newList };
    });
  };

  const addItem = (section: keyof ResumeData) => {
    setData(prev => {
      if (Array.isArray(prev[section])) {
        if (section === 'experience') return { ...prev, experience: [...prev.experience, { company: "", role: "", duration: "", description: "" }] };
        if (section === 'education') return { ...prev, education: [...prev.education, { school: "", degree: "", year: "" }] };
        if (section === 'projects') return { ...prev, projects: [...prev.projects, { name: "", link: "", description: "" }] };
        if (section === 'skills') return { ...prev, skills: [...prev.skills, ""] };
        if (section === 'languages') return { ...prev, languages: [...prev.languages, ""] };
      }
      return prev;
    });
  };

  const removeItem = (section: keyof ResumeData, index: number) => {
    setData(prev => {
      const newList = (prev[section] as any[]).filter((_, i) => i !== index);
      return { ...prev, [section]: newList };
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] dark:bg-zinc-950 transition-colors duration-200">
      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white !important; padding: 0 !important; margin: 0 !important; }
          @page { size: auto; margin: 0mm; }
          .resume-container { 
            border: none !important; 
            box-shadow: none !important; 
            margin: 0 !important; 
            padding: 20mm !important;
            width: 210mm !important;
            height: 297mm !important;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      `}</style>

      <div className="no-print">
        <Navbar />
      </div>
      
      <main className="pt-24 pb-12 px-4 no-print">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Link href="/templates" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-[#030712] dark:text-white tracking-tight">{t("builder.title")}</h1>
                <p className="text-muted-foreground mt-1 dark:text-zinc-400">{t("builder.subtitle")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-1 mr-4">
                {["modern", "minimal", "creative"].map((tId) => (
                  <button
                    key={tId}
                    onClick={() => setTemplateId(tId)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                      templateId === tId 
                        ? "bg-black dark:bg-white text-white dark:text-black" 
                        : "text-zinc-500 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {tId.charAt(0).toUpperCase() + tId.slice(1)}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-sm font-bold"
              >
                <Download className="w-4 h-4" />
                {t("builder.exports")}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Editor Side */}
            <div className="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
                {/* Personal Info */}
                <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-zinc-500" />
                    <h2 className="font-bold text-lg dark:text-white">{t("builder.personalInfo")}</h2>
                  </div>
                  
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative w-24 h-24 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-2 border-dashed border-zinc-300 dark:border-zinc-700 overflow-hidden group">
                      {data.personalInfo.photo ? (
                        <img src={data.personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400">
                          <Plus className="w-6 h-6 mb-1" />
                          <span className="text-[10px] font-bold uppercase">{t("builder.photo")}</span>
                        </div>
                      )}
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.fullName")}</label>
                        <input 
                          type="text" 
                          name="fullName"
                          value={data.personalInfo.fullName}
                          onChange={handlePersonalInfoChange}
                          placeholder={t("builder.fullNamePlaceholder")}
                          className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.availability")}</label>
                        <input 
                          type="text" 
                          name="availability"
                          value={data.personalInfo.availability}
                          onChange={handlePersonalInfoChange}
                          placeholder={t("builder.availabilityPlaceholder")}
                          className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.email")}</label>
                      <input 
                        type="email" 
                        name="email"
                        value={data.personalInfo.email}
                        onChange={handlePersonalInfoChange}
                        placeholder={t("builder.emailPlaceholder")}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.phone")}</label>
                      <input 
                        type="text" 
                        name="phone"
                        value={data.personalInfo.phone}
                        onChange={handlePersonalInfoChange}
                        placeholder={t("builder.phonePlaceholder")}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.location")}</label>
                      <input 
                        type="text" 
                        name="location"
                        value={data.personalInfo.location}
                        onChange={handlePersonalInfoChange}
                        placeholder={t("builder.locationPlaceholder")}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                      />
                    </div>
                  </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.summary")}</label>
                  <textarea 
                    name="summary"
                    value={data.personalInfo.summary}
                    onChange={handlePersonalInfoChange}
                    placeholder={t("builder.summaryPlaceholder")}
                    className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5 h-20 resize-none"
                  />
                </div>
              </section>

              {/* Experience */}
              <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-zinc-500" />
                    <h2 className="font-bold text-lg dark:text-white">{t("builder.experience")}</h2>
                  </div>
                  <button onClick={() => addItem('experience')} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors">
                    <Plus className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  </button>
                </div>
                <div className="space-y-6">
                  {data.experience.map((exp, index) => (
                    <div key={index} className="space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-800 first:border-0 first:pt-0 relative group">
                      <button 
                        onClick={() => removeItem('experience', index)}
                        className="absolute top-0 right-0 p-1 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.company")}</label>
                          <input 
                            type="text" 
                            value={exp.company}
                            onChange={(e) => handleListChange('experience', index, 'company', e.target.value)}
                            placeholder={t("builder.companyPlaceholder")}
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.role")}</label>
                          <input 
                            type="text" 
                            value={exp.role}
                            onChange={(e) => handleListChange('experience', index, 'role', e.target.value)}
                            placeholder={t("builder.rolePlaceholder")}
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.duration")}</label>
                        <input 
                          type="text" 
                          value={exp.duration}
                          onChange={(e) => handleListChange('experience', index, 'duration', e.target.value)}
                          placeholder={t("builder.durationPlaceholder")}
                          className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.description")}</label>
                        <textarea 
                          value={exp.description}
                          onChange={(e) => handleListChange('experience', index, 'description', e.target.value)}
                          placeholder={t("builder.description")}
                          className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5 h-24 resize-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-zinc-500" />
                    <h2 className="font-bold text-lg dark:text-white">{t("builder.projects")}</h2>
                  </div>
                  <button onClick={() => addItem('projects')} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors">
                    <Plus className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  </button>
                </div>
                
                {/* GitHub Contributions Visual */}
                <div className="mb-6 p-4 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">{t("builder.githubContributions")}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`w-2 h-2 rounded-[1px] ${i === 4 ? 'bg-green-500' : i === 3 ? 'bg-green-600/60' : i === 2 ? 'bg-green-700/30' : 'bg-zinc-200 dark:bg-zinc-800'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-10 sm:grid-cols-20 gap-1">
                    {mounted && githubStats ? Array.from({ length: 40 }).map((_, i) => {
                      const intensities = ['bg-zinc-100 dark:bg-zinc-800', 'bg-green-900/20', 'bg-green-700/40', 'bg-green-500/60', 'bg-green-500'];
                      const intensityIndex = githubStats.intensities[i];
                      const randomIntensity = intensities[intensityIndex];
                      return (
                        <div 
                          key={i} 
                          className={`aspect-square w-full rounded-[1px] ${randomIntensity} transition-colors hover:ring-1 hover:ring-green-400 cursor-help`}
                          title={`${githubStats.contributions[i]} contributions`}
                        />
                      );
                    }) : Array.from({ length: 40 }).map((_, i) => (
                      <div key={i} className="aspect-square w-full rounded-[1px] bg-zinc-100 dark:bg-zinc-800" />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {data.projects.map((proj, index) => (
                    <div key={index} className="space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-800 first:border-0 first:pt-0 relative group">
                      <button 
                        onClick={() => removeItem('projects', index)}
                        className="absolute top-0 right-0 p-1 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.projectName")}</label>
                          <input 
                            type="text" 
                            value={proj.name}
                            onChange={(e) => handleListChange('projects', index, 'name', e.target.value)}
                            placeholder={t("builder.projectNamePlaceholder")}
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.projectLink")}</label>
                          <input 
                            type="text" 
                            value={proj.link}
                            onChange={(e) => handleListChange('projects', index, 'link', e.target.value)}
                            placeholder={t("builder.projectLinkPlaceholder")}
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.description")}</label>
                        <textarea 
                          value={proj.description}
                          onChange={(e) => handleListChange('projects', index, 'description', e.target.value)}
                          placeholder={t("builder.projectDescPlaceholder")}
                          className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5 h-20 resize-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-zinc-500" />
                    <h2 className="font-bold text-lg dark:text-white">{t("builder.education")}</h2>
                  </div>
                  <button onClick={() => addItem('education')} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors">
                    <Plus className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  </button>
                </div>
                <div className="space-y-6">
                  {data.education.map((edu, index) => (
                    <div key={index} className="space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-800 first:border-0 first:pt-0 relative group">
                      <button 
                        onClick={() => removeItem('education', index)}
                        className="absolute top-0 right-0 p-1 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.school")}</label>
                          <input 
                            type="text" 
                            value={edu.school}
                            onChange={(e) => handleListChange('education', index, 'school', e.target.value)}
                            placeholder={t("builder.schoolPlaceholder")}
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.degree")}</label>
                          <input 
                            type="text" 
                            value={edu.degree}
                            onChange={(e) => handleListChange('education', index, 'degree', e.target.value)}
                            placeholder={t("builder.degreePlaceholder")}
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.year")}</label>
                        <input 
                          type="text" 
                          value={edu.year}
                          onChange={(e) => handleListChange('education', index, 'year', e.target.value)}
                          placeholder={t("builder.yearPlaceholder")}
                          className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills & Languages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-zinc-500" />
                      <h2 className="font-bold text-lg dark:text-white">{t("builder.skills")}</h2>
                    </div>
                    <button onClick={() => addItem('skills')} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors">
                      <Plus className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {data.skills.map((skill, index) => (
                      <div key={index} className="relative group">
                        <input 
                          type="text" 
                          value={skill}
                          onChange={(e) => handleArrayChange('skills', index, e.target.value)}
                          placeholder={t("builder.skillPlaceholder")}
                          className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5 text-sm"
                        />
                        <button onClick={() => removeItem('skills', index)} className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-3 h-3"/></button>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-zinc-500" />
                      <h2 className="font-bold text-lg dark:text-white">{t("builder.languages")}</h2>
                    </div>
                    <button onClick={() => addItem('languages')} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors">
                      <Plus className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {data.languages.map((lang, index) => (
                      <div key={index} className="relative group">
                        <input 
                          type="text" 
                          value={lang}
                          onChange={(e) => handleArrayChange('languages', index, e.target.value)}
                          placeholder={t("builder.languagePlaceholder")}
                          className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5 text-sm"
                        />
                        <button onClick={() => removeItem('languages', index)} className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-3 h-3"/></button>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Preview Side */}
            <div className="lg:sticky lg:top-24 h-fit no-print">
              <ResumePreview data={data} templateId={templateId} />
            </div>
          </div>
        </div>
      </main>

      {/* Print View Wrapper */}
      <div className="hidden print:block print-only">
        <ResumePreview data={data} templateId={templateId} isPrint />
      </div>

      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
}

  function ResumePreview({ data, templateId, isPrint = false }: { data: ResumeData, templateId: string, isPrint?: boolean }) {
    const { t } = useLanguage();
    
    const containerClass = `bg-white aspect-[1/1.414] shadow-xl overflow-hidden transition-all text-black resume-container ${
      isPrint ? "w-full p-12" : "rounded-xl border border-zinc-200 dark:border-zinc-800 p-12"
    }`;

    if (templateId === "minimal") {
      return (
        <div className={containerClass}>
          <div className="flex justify-between border-b-2 border-black pb-4 mb-6">
            <div>
              <h1 className="text-4xl font-light tracking-widest uppercase mb-1">{data.personalInfo.fullName || "YOUR NAME"}</h1>
              <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-wider font-bold text-zinc-500">
                {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
                {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
              </div>
              {data.personalInfo.availability && <div className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 mt-1">{t("builder.availability")}: {data.personalInfo.availability}</div>}
            </div>
            {data.personalInfo.photo && (
              <img src={data.personalInfo.photo} alt="Profile" className="w-20 h-20 object-cover rounded-lg border border-black" />
            )}
          </div>
        
        {data.personalInfo.summary && (
          <div className="mb-6">
            <p className="text-sm italic leading-relaxed text-zinc-600">{data.personalInfo.summary}</p>
          </div>
        )}

        <div className="space-y-6">
          {data.experience.some(e => e.company) && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-3">{t("builder.experience")}</h2>
              <div className="space-y-4">
                {data.experience.map((exp, i) => (
                  exp.company && (
                    <div key={i} className="grid grid-cols-4 gap-4">
                      <div className="text-[10px] font-bold text-zinc-400 uppercase pt-1">{exp.duration}</div>
                      <div className="col-span-3">
                        <h3 className="font-bold text-sm">{exp.role}</h3>
                        <p className="text-xs font-bold text-zinc-500 mb-1">{exp.company}</p>
                        <p className="text-xs text-zinc-600 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </section>
          )}

          {data.projects.some(p => p.name) && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-3">{t("builder.projects")}</h2>
              <div className="space-y-4">
                {data.projects.map((proj, i) => (
                  proj.name && (
                    <div key={i} className="grid grid-cols-4 gap-4">
                      <div className="text-[10px] font-bold text-zinc-400 uppercase pt-1">Project</div>
                      <div className="col-span-3">
                        <h3 className="font-bold text-sm">{proj.name}</h3>
                        {proj.link && <p className="text-[10px] text-blue-600 mb-1">{proj.link}</p>}
                        <p className="text-xs text-zinc-600">{proj.description}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </section>
          )}

          {data.education.some(e => e.school) && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-3">{t("builder.education")}</h2>
              <div className="space-y-3">
                {data.education.map((edu, i) => (
                  edu.school && (
                    <div key={i} className="grid grid-cols-4 gap-4">
                      <div className="text-[10px] font-bold text-zinc-400 uppercase pt-1">{edu.year}</div>
                      <div className="col-span-3">
                        <h3 className="font-bold text-sm">{edu.degree}</h3>
                        <p className="text-xs text-zinc-500">{edu.school}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </section>
          )}

          <div className="grid grid-cols-2 gap-8">
            {data.skills.some(s => s) && (
              <section>
                <h2 className="text-sm font-bold uppercase tracking-widest mb-3">{t("builder.skills")}</h2>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {data.skills.map((skill, i) => skill && <span key={i} className="text-xs font-bold uppercase tracking-tight">{skill}</span>)}
                </div>
              </section>
            )}
            {data.languages.some(l => l) && (
              <section>
                <h2 className="text-sm font-bold uppercase tracking-widest mb-3">{t("builder.languages")}</h2>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {data.languages.map((lang, i) => lang && <span key={i} className="text-xs font-bold uppercase tracking-tight">{lang}</span>)}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (templateId === "creative") {
    return (
      <div className={containerClass}>
        <div className="grid grid-cols-3 gap-8 h-full">
          <div className="bg-zinc-50 -m-12 p-12 pt-20">
            <h1 className="text-2xl font-black mb-6 leading-tight">{data.personalInfo.fullName || "YOUR NAME"}</h1>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-[10px] font-black uppercase text-zinc-400 mb-2 tracking-widest">Contact</h2>
                <div className="space-y-2 text-xs">
                  {data.personalInfo.email && <p className="break-all">{data.personalInfo.email}</p>}
                  {data.personalInfo.phone && <p>{data.personalInfo.phone}</p>}
                  {data.personalInfo.location && <p>{data.personalInfo.location}</p>}
                </div>
              </section>

              <section>
                <h2 className="text-[10px] font-black uppercase text-zinc-400 mb-2 tracking-widest">{t("builder.education")}</h2>
                <div className="space-y-4">
                  {data.education.map((edu, i) => (
                    edu.school && (
                      <div key={i}>
                        <p className="font-bold text-xs">{edu.degree}</p>
                        <p className="text-[10px] text-zinc-500">{edu.school}</p>
                        <p className="text-[10px] font-bold">{edu.year}</p>
                      </div>
                    )
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-[10px] font-black uppercase text-zinc-400 mb-2 tracking-widest">{t("builder.skills")}</h2>
                <div className="flex flex-wrap gap-1">
                  {data.skills.map((skill, i) => skill && (
                    <span key={i} className="px-2 py-1 bg-black text-white text-[9px] font-bold rounded uppercase tracking-tighter">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-[10px] font-black uppercase text-zinc-400 mb-2 tracking-widest">{t("builder.languages")}</h2>
                <div className="flex flex-wrap gap-1">
                  {data.languages.map((lang, i) => lang && (
                    <span key={i} className="text-xs font-bold">{lang}</span>
                  ))}
                </div>
              </section>
            </div>
          </div>
          
          <div className="col-span-2 pt-8">
            {data.personalInfo.summary && (
              <div className="mb-10">
                <h2 className="text-[10px] font-black uppercase text-zinc-400 mb-3 tracking-widest">Profile</h2>
                <p className="text-sm leading-relaxed text-zinc-700">{data.personalInfo.summary}</p>
              </div>
            )}

            <section className="mb-8">
              <h2 className="text-[10px] font-black uppercase text-zinc-400 mb-4 tracking-widest">{t("builder.experience")}</h2>
              <div className="space-y-6">
                {data.experience.map((exp, i) => (
                  exp.company && (
                    <div key={i} className="relative pl-4 border-l-2 border-zinc-100">
                      <div className="absolute w-2 h-2 bg-black rounded-full -left-[5px] top-1.5" />
                      <h3 className="font-black text-sm uppercase tracking-tight">{exp.role}</h3>
                      <div className="flex justify-between text-[10px] font-bold text-zinc-500 mb-2">
                        <span>{exp.company}</span>
                        <span>{exp.duration}</span>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed">{exp.description}</p>
                    </div>
                  )
                ))}
              </div>
            </section>

            {data.projects.some(p => p.name) && (
              <section>
                <h2 className="text-[10px] font-black uppercase text-zinc-400 mb-4 tracking-widest">{t("builder.projects")}</h2>
                <div className="space-y-6">
                  {data.projects.map((proj, i) => (
                    proj.name && (
                      <div key={i} className="relative pl-4 border-l-2 border-zinc-100">
                        <div className="absolute w-2 h-2 bg-black rounded-full -left-[5px] top-1.5" />
                        <h3 className="font-black text-sm uppercase tracking-tight">{proj.name}</h3>
                        {proj.link && <p className="text-[10px] text-zinc-500 font-bold mb-1">{proj.link}</p>}
                        <p className="text-xs text-zinc-600 leading-relaxed">{proj.description}</p>
                      </div>
                    )
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Modern (Default)
  return (
    <div className={containerClass}>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight uppercase mb-2">
          {data.personalInfo.fullName || "YOUR NAME"}
        </h1>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-zinc-600 font-medium">
          {data.personalInfo.email && <div className="flex items-center gap-1"><Mail className="w-3 h-3" /> {data.personalInfo.email}</div>}
          {data.personalInfo.phone && <div className="flex items-center gap-1"><Phone className="w-3 h-3" /> {data.personalInfo.phone}</div>}
          {data.personalInfo.location && <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {data.personalInfo.location}</div>}
        </div>
      </div>

      <div className="space-y-6">
        {data.personalInfo.summary && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-zinc-200 pb-1 mb-3">{t("builder.summary")}</h2>
            <p className="text-sm leading-relaxed text-zinc-700">{data.personalInfo.summary}</p>
          </div>
        )}

        {data.experience.some(e => e.company) && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-zinc-200 pb-1 mb-4">{t("builder.experience")}</h2>
            <div className="space-y-5">
              {data.experience.map((exp, i) => (
                exp.company && (
                  <div key={i}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-sm">{exp.role}</h3>
                      <span className="text-xs text-zinc-500 font-bold">{exp.duration}</span>
                    </div>
                    <p className="text-sm font-bold text-zinc-500 mb-1">{exp.company}</p>
                    <p className="text-xs text-zinc-600 leading-relaxed whitespace-pre-wrap italic">{exp.description}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        {data.projects.some(p => p.name) && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-zinc-200 pb-1 mb-4">{t("builder.projects")}</h2>
            <div className="space-y-4">
              {data.projects.map((proj, i) => (
                proj.name && (
                  <div key={i}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-sm">{proj.name}</h3>
                      <span className="text-xs text-zinc-500 font-bold">{proj.link}</span>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed whitespace-pre-wrap italic">{proj.description}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        {data.education.some(e => e.school) && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-zinc-200 pb-1 mb-4">{t("builder.education")}</h2>
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                edu.school && (
                  <div key={i}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-sm">{edu.degree}</h3>
                      <span className="text-xs text-zinc-500 font-bold">{edu.year}</span>
                    </div>
                    <p className="text-sm font-medium text-zinc-700">{edu.school}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-8">
          {data.skills.some(s => s) && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-zinc-200 pb-1 mb-4">{t("builder.skills")}</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, i) => (
                  skill && (
                    <span key={i} className="px-2 py-1 bg-zinc-100 text-zinc-800 text-[10px] font-bold rounded uppercase border border-zinc-200">
                      {skill}
                    </span>
                  )
                ))}
              </div>
            </div>
          )}
          {data.languages.some(l => l) && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-zinc-200 pb-1 mb-4">{t("builder.languages")}</h2>
              <div className="flex flex-wrap gap-2">
                {data.languages.map((lang, i) => (
                  lang && (
                    <span key={i} className="px-2 py-1 bg-zinc-100 text-zinc-800 text-[10px] font-bold rounded uppercase border border-zinc-200">
                      {lang}
                    </span>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BuilderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuilderContent />
    </Suspense>
  );
}
