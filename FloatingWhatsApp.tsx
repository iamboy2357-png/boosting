import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 group">
      
      {/* Tooltip on hover */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 shadow-xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{language === 'bn' ? 'হোয়াটসঅ্যাপে একে টিমের সাথে চ্যাট করুন' : 'Chat with AK on WhatsApp'}</span>
        </div>
      </div>

      {/* Main WhatsApp Button */}
      <a
        href={`https://wa.me/8801345386833?text=${encodeURIComponent(language === 'bn' ? 'হ্যালো একে বুস্টিং ও ওয়েব ডেভেলপার! আমি আপনাদের সার্ভিস সম্পর্কে জানতে চাই।' : 'Hello AK Boosting & Web Developer! I would like to inquire about your services.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-3.5 sm:p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-emerald-400/40"
        aria-label="Direct WhatsApp Chat with AK Boosting & Web Developer"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-[#0b0f19]" />
        </span>
      </a>

    </div>
  );
};
