import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Search, Filter, FileText, Star, Eye } from "lucide-react";

export default function TemplatesPage() {
  const templates = [
    {
      id: 1,
      name: "Modern Professional",
      category: "Corporate",
      rating: 4.9,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/77ba5549-92dc-4b2e-a2cb-758e9202b940-magicv-art/assets/images/images_1.png",
      popular: true
    },
    {
      id: 2,
      name: "Creative Minimalist",
      category: "Design",
      rating: 4.8,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/77ba5549-92dc-4b2e-a2cb-758e9202b940-magicv-art/assets/images/images_1.png",
      popular: false
    },
    {
      id: 3,
      name: "Executive Suite",
      category: "Management",
      rating: 5.0,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/77ba5549-92dc-4b2e-a2cb-758e9202b940-magicv-art/assets/images/images_1.png",
      popular: true
    },
    {
      id: 4,
      name: "Tech Specialist",
      category: "Engineering",
      rating: 4.7,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/77ba5549-92dc-4b2e-a2cb-758e9202b940-magicv-art/assets/images/images_1.png",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#030712] mb-4">Resume Templates</h1>
            <p className="text-muted-foreground text-lg">Pick a professional template and land your dream job.</p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input 
                type="text" 
                placeholder="Search templates (e.g. Software Engineer, Marketing)..." 
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-zinc-200 rounded-2xl font-semibold hover:bg-zinc-50 transition-all">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {templates.map((template) => (
              <div key={template.id} className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[3/4] bg-zinc-100 relative overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform shadow-lg">
                      <Eye className="w-5 h-5 text-black" />
                    </button>
                    <button className="px-6 py-2 bg-black text-white rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg">
                      Use This
                    </button>
                  </div>
                  {template.popular && (
                    <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-[#030712] group-hover:text-black transition-colors">{template.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-bold">{template.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{template.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="px-8 py-4 border border-zinc-200 rounded-2xl font-bold hover:bg-white hover:shadow-md transition-all">
              Load More Templates
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}