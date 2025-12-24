"use client";

import React from 'react';
import Link from 'next/link';

const AnnouncementPill = () => {
  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center px-4">
      <Link 
        href="/builder"
        className="relative inline-flex items-center gap-3 px-5 py-2.5 text-sm font-medium rounded-full bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-slate-200/80 hover:shadow-[0_2px_2px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer group"
      >
        <span className="text-slate-600 whitespace-nowrap">
          New AI Resume Enhancement Feature is Live
        </span>
      </Link>
    </div>
  );
};

export default AnnouncementPill;