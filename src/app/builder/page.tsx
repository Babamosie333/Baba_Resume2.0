"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { 
  Plus, Layout, FileText, Download, Share2, Settings, User, 
  Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Trash2,
  ChevronLeft
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
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
  skills: string[];
}

function BuilderContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const [templateId, setTemplateId] = useState(searchParams.get("template") || "modern");
  
  const [data, setData] = useState<ResumeData>({
    personalInfo: { fullName: "", email: "", phone: "", location: "", summary: "" },
    experience: [{ company: "", role: "", duration: "", description: "" }],
    education: [{ school: "", degree: "", year: "" }],
    skills: [""],
  });

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value }
    }));
  };

  const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newExperience = [...data.experience];
    newExperience[index] = { ...newExperience[index], [name as any]: value };
    setData(prev => ({ ...prev, experience: newExperience }));
  };

  const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newEducation = [...data.education];
    newEducation[index] = { ...newEducation[index], [name as any]: value };
    setData(prev => ({ ...prev, education: newEducation }));
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...data.skills];
    newSkills[index] = value;
    setData(prev => ({ ...prev, skills: newSkills }));
  };

  const addExperience = () => {
    setData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: "", role: "", duration: "", description: "" }]
    }));
  };

  const removeExperience = (index: number) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setData(prev => ({
      ...prev,
      education: [...prev.education, { school: "", degree: "", year: "" }]
    }));
  };

  const removeEducation = (index: number) => {
    setData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const addSkill = () => {
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, ""]
    }));
  };

  const removeSkill = (index: number) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] dark:bg-zinc-950 transition-colors duration-200">
      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white !important; padding: 0 !important; }
          .resume-container { 
            border: none !important; 
            box-shadow: none !important; 
            margin: 0 !important; 
            padding: 0 !important;
            width: 100% !important;
            max-width: none !important;
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.fullName")}</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={data.personalInfo.fullName}
                      onChange={handlePersonalInfoChange}
                      placeholder="John Doe"
                      className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.email")}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={data.personalInfo.email}
                      onChange={handlePersonalInfoChange}
                      placeholder="john@example.com"
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
                      placeholder="+1 234 567 890"
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
                      placeholder="New York, USA"
                      className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-zinc-400">Professional Summary</label>
                  <textarea 
                    name="summary"
                    value={data.personalInfo.summary}
                    onChange={handlePersonalInfoChange}
                    placeholder="Briefly describe your career background..."
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
                  <button onClick={addExperience} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors">
                    <Plus className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  </button>
                </div>
                <div className="space-y-6">
                  {data.experience.map((exp, index) => (
                    <div key={index} className="space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-800 first:border-0 first:pt-0 relative group">
                      <button 
                        onClick={() => removeExperience(index)}
                        className="absolute top-0 right-0 p-1 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.company")}</label>
                          <input 
                            type="text" 
                            name="company"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(index, e)}
                            placeholder="Company Name"
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.role")}</label>
                          <input 
                            type="text" 
                            name="role"
                            value={exp.role}
                            onChange={(e) => handleExperienceChange(index, e)}
                            placeholder="Role / Title"
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-zinc-400">Duration (e.g. 2020 - 2022)</label>
                          <input 
                            type="text" 
                            name="duration"
                            value={exp.duration}
                            onChange={(e) => handleExperienceChange(index, e)}
                            placeholder="Jan 2020 - Present"
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.description")}</label>
                        <textarea 
                          name="description"
                          value={exp.description}
                          onChange={(e) => handleExperienceChange(index, e)}
                          placeholder="Describe your achievements..."
                          className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5 h-24 resize-none"
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
                  <button onClick={addEducation} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors">
                    <Plus className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  </button>
                </div>
                <div className="space-y-6">
                  {data.education.map((edu, index) => (
                    <div key={index} className="space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-800 first:border-0 first:pt-0 relative group">
                      <button 
                        onClick={() => removeEducation(index)}
                        className="absolute top-0 right-0 p-1 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.school")}</label>
                          <input 
                            type="text" 
                            name="school"
                            value={edu.school}
                            onChange={(e) => handleEducationChange(index, e)}
                            placeholder="University Name"
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase text-zinc-400">{t("builder.degree")}</label>
                          <input 
                            type="text" 
                            name="degree"
                            value={edu.degree}
                            onChange={(e) => handleEducationChange(index, e)}
                            placeholder="Degree Name"
                            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-zinc-500" />
                    <h2 className="font-bold text-lg dark:text-white">{t("builder.skills")}</h2>
                  </div>
                  <button onClick={addSkill} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors">
                    <Plus className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {data.skills.map((skill, index) => (
                    <div key={index} className="relative group">
                      <input 
                        type="text" 
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                        placeholder="Skill Name"
                        className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5 text-sm"
                      />
                      <button 
                        onClick={() => removeSkill(index)}
                        className="absolute top-1/2 -right-2 -translate-y-1/2 p-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
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
        <div className="border-b-2 border-black pb-4 mb-6">
          <h1 className="text-4xl font-light tracking-widest uppercase mb-1">{data.personalInfo.fullName || "YOUR NAME"}</h1>
          <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-wider font-bold text-zinc-500">
            {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
          </div>
        </div>
        
        {data.personalInfo.summary && (
          <div className="mb-6">
            <p className="text-sm italic leading-relaxed text-zinc-600">{data.personalInfo.summary}</p>
          </div>
        )}

        <div className="space-y-6">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3">{t("builder.experience")}</h2>
            <div className="space-y-4">
              {data.experience.map((exp, i) => (
                (exp.company || exp.role) && (
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

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3">{t("builder.education")}</h2>
            <div className="space-y-3">
              {data.education.map((edu, i) => (
                (edu.school || edu.degree) && (
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

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3">{t("builder.skills")}</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {data.skills.map((skill, i) => skill && <span key={i} className="text-xs font-bold uppercase tracking-tight">{skill}</span>)}
            </div>
          </section>
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
                <h2 className="text-[10px] font-black uppercase text-zinc-400 mb-2 tracking-widest">Education</h2>
                <div className="space-y-4">
                  {data.education.map((edu, i) => (
                    (edu.school || edu.degree) && (
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
                <h2 className="text-[10px] font-black uppercase text-zinc-400 mb-2 tracking-widest">Skills</h2>
                <div className="flex flex-wrap gap-1">
                  {data.skills.map((skill, i) => skill && (
                    <span key={i} className="px-2 py-1 bg-black text-white text-[9px] font-bold rounded uppercase tracking-tighter">
                      {skill}
                    </span>
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

            <section>
              <h2 className="text-[10px] font-black uppercase text-zinc-400 mb-4 tracking-widest">Experience</h2>
              <div className="space-y-6">
                {data.experience.map((exp, i) => (
                  (exp.company || exp.role) && (
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

      <div className="space-y-8">
        {data.personalInfo.summary && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-zinc-200 pb-1 mb-3">Professional Summary</h2>
            <p className="text-sm leading-relaxed text-zinc-700">{data.personalInfo.summary}</p>
          </div>
        )}

        {data.experience.some(e => e.company || e.role) && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-zinc-200 pb-1 mb-4">{t("builder.experience")}</h2>
            <div className="space-y-5">
              {data.experience.map((exp, i) => (
                (exp.company || exp.role) && (
                  <div key={i}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-sm">{exp.role || "Role Title"}</h3>
                      <span className="text-xs text-zinc-500 font-bold">{exp.duration || "2020 - Present"}</span>
                    </div>
                    <p className="text-sm font-bold text-zinc-500 mb-1">{exp.company || "Company Name"}</p>
                    <p className="text-xs text-zinc-600 leading-relaxed whitespace-pre-wrap italic">{exp.description || "Describe your key responsibilities and achievements in this role."}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        {data.education.some(e => e.school || e.degree) && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-zinc-200 pb-1 mb-4">{t("builder.education")}</h2>
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                (edu.school || edu.degree) && (
                  <div key={i}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-sm">{edu.degree || "Degree Name"}</h3>
                      <span className="text-xs text-zinc-500 font-bold">{edu.year || "2020"}</span>
                    </div>
                    <p className="text-sm font-medium text-zinc-700">{edu.school || "University Name"}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

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
