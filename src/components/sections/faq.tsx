"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <div className="border-b border-border">
      <h3 className="flex">
        <button
          type="button"
          onClick={onToggle}
          className="flex flex-1 items-center justify-between py-6 transition-all hover:no-underline text-left text-lg font-medium text-foreground group"
          aria-expanded={isOpen}
        >
          <span className="group-hover:text-primary transition-colors">
            {question}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div
        className={`overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-muted-foreground text-[16px] leading-[1.6]">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Baba_Resume2.0 free to use?",
      answer:
        "Yes, Baba_Resume2.0 is completely free to use. You can create, edit, and export your resume without any hidden costs or subscriptions. We believe in providing accessible career tools for everyone.",
    },
    {
      question: "Is my resume data secure?",
      answer:
        "Security is our top priority. All your resume data is stored locally in your browser's storage. We do not upload your personal information to our servers, ensuring you maintain 100% control over your data privacy.",
    },
    {
      question: "What export formats are supported?",
      answer:
        "Currently, we support high-quality PDF exports which are the industry standard for job applications. The exported files are optimized to be ATS-friendly, ensuring your resume can be read by automated screening systems.",
    },
    {
      question: "How can I sync across devices?",
      answer:
        "Since we prioritize privacy and store data locally, automatic cloud syncing is not enabled by default. However, you can use our 'Export Data' feature to download your resume configuration file and 'Import' it on any other device to continue editing.",
    },
    {
      question: "How customizable is it?",
      answer:
        "Magic Resume offers significant flexibility. You can choose from various professional templates, adjust colors, fonts, and layout spacing. Our AI suggestions also help you tailor the content to specific job descriptions.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-[#F8F9FB]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] font-bold text-center mb-12 text-foreground tracking-tight">
            Frequently Asked Questions
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