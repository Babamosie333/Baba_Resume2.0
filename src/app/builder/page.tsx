import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Plus, Layout, FileText, Download, Share2, Settings } from "lucide-react";

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Navbar />
      
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#030712]">Resume Builder</h1>
              <p className="text-muted-foreground mt-1">Create and manage your professional resumes.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-sm">
                <Plus className="w-4 h-4" />
                Create New Resume
              </button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar / Tools */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                <h2 className="font-semibold mb-4 text-sm uppercase tracking-wider text-zinc-500">Workspace</h2>
                <nav className="space-y-1">
                  <button className="w-full flex items-center gap-3 px-3 py-2 bg-zinc-100 text-black rounded-lg font-medium transition-all">
                    <Layout className="w-4 h-4" />
                    All Resumes
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-zinc-600 hover:bg-zinc-50 rounded-lg transition-all">
                    <FileText className="w-4 h-4" />
                    Templates
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-zinc-600 hover:bg-zinc-50 rounded-lg transition-all">
                    <Download className="w-4 h-4" />
                    Exports
                  </button>
                </nav>
              </div>

              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                <h2 className="font-semibold mb-4 text-sm uppercase tracking-wider text-zinc-500">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-2">
                  <button className="flex flex-col items-center justify-center p-3 rounded-lg border border-zinc-100 hover:bg-zinc-50 transition-all">
                    <Share2 className="w-5 h-5 mb-1 text-zinc-600" />
                    <span className="text-[10px] font-medium">Share</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 rounded-lg border border-zinc-100 hover:bg-zinc-50 transition-all">
                    <Settings className="w-5 h-5 mb-1 text-zinc-600" />
                    <span className="text-[10px] font-medium">Settings</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Empty State Card */}
                <div className="aspect-[3/4] bg-white border-2 border-dashed border-zinc-200 rounded-xl flex flex-col items-center justify-center p-8 text-center group hover:border-black/20 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Plus className="w-6 h-6 text-zinc-400" />
                  </div>
                  <h3 className="font-semibold text-zinc-900">Start from scratch</h3>
                  <p className="text-sm text-zinc-500 mt-2">Create a new blank resume and fill in your details.</p>
                </div>

                {/* Template Example Card */}
                <div className="aspect-[3/4] bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-all">
                  <div className="h-2/3 bg-zinc-100 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {/* Placeholder for template image */}
                    <div className="w-full h-full flex items-center justify-center text-zinc-300">
                      <FileText className="w-12 h-12" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-zinc-900">Professional Template</h3>
                    <p className="text-xs text-zinc-500 mt-1">Clean and modern design for corporate roles.</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-black uppercase bg-zinc-100 px-2 py-1 rounded">Popular</span>
                      <button className="text-xs font-semibold text-black hover:underline">Use this</button>
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