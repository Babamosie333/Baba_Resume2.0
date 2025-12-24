import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-white dark:bg-transparent">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center bg-black rounded-lg">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="font-bold text-xl text-[#030712]">Baba_Resume2.0</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Make Resume Creation Simple and Smart with AI technology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#030712]">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/builder" className="hover:text-black transition-colors">Builder</Link></li>
              <li><Link href="/templates" className="hover:text-black transition-colors">Templates</Link></li>
              <li><Link href="/pricing" className="hover:text-black transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#030712]">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#030712]">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Baba_Resume2.0. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;