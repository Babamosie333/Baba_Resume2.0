import React from 'react';

const AnnouncementPill = () => {
  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10">
      <div 
        className="relative inline-flex items-center gap-3 px-5 py-2.5 text-sm font-medium rounded-full bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 hover:shadow-[0_2px_2px_rgba(0,0,0,0.1)] dark:hover:shadow-white/5 transition-all duration-300 cursor-pointer group"
        style={{
          boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
        }}
      >
        <span className="text-slate-600 dark:text-white/80 whitespace-nowrap">
          New AI Resume Enhancement Feature is Live
        </span>
      </div>
    </div>
  );
};

export default AnnouncementPill;