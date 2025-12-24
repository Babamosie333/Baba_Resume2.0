"use client";

import React, { useState } from "react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Plus, Layout, FileText, Download, Share2, Settings, User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
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

export default function BuilderPage() {
  const { t } = useLanguage();
  const [data, setData] = useState<ResumeData>({
    personalInfo: { fullName: "", email: "", phone: "", location: "" },
    experience: [{ company: "", role: "", duration: "", description: "" }],
    education: [{ school: "", degree: "", year: "" }],
    skills: [""],
  });

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value }
    }));
  };

  const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newExperience = [...data.experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setData(prev => ({ ...prev, experience: newExperience }));
  };

  const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newEducation = [...data.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
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

  const addEducation = () => {
    setData(prev => ({
      ...prev,
      education: [...prev.education, { school: "", degree: "", year: "" }]
    }));
  };

  const addSkill = () => {
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, ""]
    }));
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] dark:bg-zinc-950 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#030712] dark:text-white">{t("builder.title")}</h1>
              <p className="text-muted-foreground mt-1 dark:text-zinc-400">{t("builder.subtitle")}</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-sm font-medium">
                <Download className="w-4 h-4" />
                {t("builder.exports")}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Editor Side */}
            <div className="space-y-6">
              {/* Personal Info */}
              <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-zinc-500" />
                  <h2 className="font-bold text-lg dark:text-white">Personal Information</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase text-zinc-500">Full Name</label>
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
                    <label className="text-xs font-semibold uppercase text-zinc-500">Email</label>
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
                    <label className="text-xs font-semibold uppercase text-zinc-500">Phone</label>
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
                    <label className="text-xs font-semibold uppercase text-zinc-500">Location</label>
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
              </section>

              {/* Experience */}
              <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-zinc-500" />
                    <h2 className="font-bold text-lg dark:text-white">Experience</h2>
                  </div>
                  <button onClick={addExperience} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                {data.experience.map((exp, index) => (
                  <div key={index} className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 first:border-0 first:pt-0 mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
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
                    <textarea 
                      name="description"
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="Describe your achievements..."
                      className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5 h-24 resize-none"
                    />
                  </div>
                ))}
              </section>
            </div>

            {/* Preview Side */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white dark:bg-zinc-900 aspect-[1/1.414] rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden p-12 transition-all">
                {/* Preview Header */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold tracking-tight dark:text-white uppercase mb-2">
                    {data.personalInfo.fullName || "YOUR NAME"}
                  </h1>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {data.personalInfo.email && <div className="flex items-center gap-1"><Mail className="w-3 h-3" /> {data.personalInfo.email}</div>}
                    {data.personalInfo.phone && <div className="flex items-center gap-1"><Phone className="w-3 h-3" /> {data.personalInfo.phone}</div>}
                    {data.personalInfo.location && <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {data.personalInfo.location}</div>}
                  </div>
                </div>

                {/* Preview Sections */}
                <div className="space-y-6">
                  {/* Experience Section */}
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-zinc-200 dark:border-zinc-800 pb-1 mb-4 dark:text-white">Experience</h2>
                    <div className="space-y-4">
                      {data.experience.map((exp, i) => (
                        (exp.company || exp.role) && (
                          <div key={i}>
                            <div className="flex justify-between items-start mb-1">
                              <h3 className="font-bold text-sm dark:text-white">{exp.role || "Role Title"}</h3>
                              <span className="text-xs text-zinc-500">{exp.duration || "2020 - Present"}</span>
                            </div>
                            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">{exp.company || "Company Name"}</p>
                            <p className="text-xs text-zinc-500 leading-relaxed">{exp.description || "Describe your key responsibilities and achievements in this role."}</p>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
