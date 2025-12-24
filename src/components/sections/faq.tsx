"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
      <h3 className="flex">
        <button
          type="button"
          onClick={onToggle}
          className="flex flex-1 items-center justify-between py-6 transition-all hover:no-underline text-left text-lg font-medium text-zinc-900 dark:text-white group"
          aria-expanded={isOpen}
        >
          <span className="group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
            {question}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-zinc-600 dark:text-zinc-400 text-[16px] leading-[1.6]">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-[#F8F9FB] dark:bg-zinc-900/50 transition-colors duration-200">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] font-bold text-center mb-12 text-zinc-900 dark:text-white tracking-tight">
            {t("faq.title")}
          </h2>
          <div className="w-full space-y-0">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
