"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-200">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center bg-black dark:bg-white rounded-lg">
                <span className="text-white dark:text-black font-bold text-xl">V</span>
              </div>
              <span className="font-bold text-xl text-[#030712] dark:text-white">Baba_Resume2.0</span>
            </div>
            <p className="text-sm text-muted-foreground dark:text-zinc-400">
              {t("hero.subtitle").substring(0, 60)}...
            </p>
          </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#030712] dark:text-white">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-zinc-400">
                <li><Link href="/builder" className="hover:text-black dark:hover:text-white transition-colors">{t("nav.builder")}</Link></li>
                <li><Link href="/templates" className="hover:text-black dark:hover:text-white transition-colors">{t("nav.templates")}</Link></li>
                <li><Link href="/pricing" className="hover:text-black dark:hover:text-white transition-colors">{t("nav.pricing")}</Link></li>
                <li><a href="https://github.com/Babamosie333/Baba_Resume2.0.git" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#030712] dark:text-white">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-zinc-400">
              <li><Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">{t("nav.about")}</Link></li>
              <li><Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#030712] dark:text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-zinc-400">
              <li><Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-muted-foreground dark:text-zinc-400">
          <p>© 2025 Baba_Resume2.0. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
