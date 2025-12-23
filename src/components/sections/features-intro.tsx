import React from 'react';

const FeaturesIntro = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#f8f9fb] dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-[36px] font-bold mb-4 md:mb-6 leading-[1.2] tracking-[-0.01em] text-foreground">
            Why Choose Magic Resume?
          </h2>
          <p className="text-lg md:text-[1.125rem] text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
            We provide an all-in-one resume solution to make your job search journey smoother
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesIntro;