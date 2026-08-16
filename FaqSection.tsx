import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const FaqSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative border-t border-white/10 overflow-hidden">
      
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">{t.titleHighlight}</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            {t.description}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {t.items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-300 shadow-xl hover:border-white/20"
                id={`faq-item-${faq.id}`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 backdrop-blur-sm ${
                      isOpen ? 'rotate-180 bg-blue-600/30 border-blue-400/50 text-blue-300' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/10 animate-in fade-in duration-200">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">{t.supportPrompt}</h4>
            <p className="text-xs text-slate-400">{t.supportSubtext}</p>
          </div>
          <a
            href={`https://wa.me/8801345386833?text=${encodeURIComponent(language === 'bn' ? 'হ্যালো! একে বুস্টিং ও ওয়েব ডেভেলপার সার্ভিস সম্পর্কে আমার একটি প্রশ্ন আছে।' : 'Hello! I have a question about AK Boosting & Web Developer services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-emerald-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.askWhatsAppBtn} (+8801345386833)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
