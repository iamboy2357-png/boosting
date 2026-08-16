import React, { useState, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CornerLanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-4 right-4 sm:top-5 sm:right-6 z-50 transition-all duration-300 ${
        scrolled ? 'translate-y-0 opacity-100' : 'opacity-100'
      }`}
      id="fast-corner-language-switcher"
    >
      <div className="flex items-center gap-1.5 p-1 sm:p-1.5 rounded-2xl bg-[#020617]/90 backdrop-blur-2xl border border-blue-500/30 shadow-2xl shadow-blue-950/60 ring-1 ring-white/10 hover:border-blue-400/60 transition-all">
        
        {/* Globe indicator */}
        <div className="pl-1.5 pr-1 flex items-center gap-1 text-blue-400">
          <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin-slow" />
          <span className="hidden md:inline text-[10px] uppercase font-bold tracking-wider text-slate-300">
            {language === 'bn' ? 'ভাষা' : 'Lang'}
          </span>
        </div>

        {/* English Button */}
        <button
          onClick={() => setLanguage('en')}
          className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-bold rounded-xl transition-all ${
            language === 'en'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40 ring-1 ring-white/20'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
          title="Switch to English"
          id="corner-lang-en-btn"
        >
          {language === 'en' && <Check className="w-3 h-3 stroke-[3]" />}
          <span>EN</span>
        </button>

        {/* Bangla Button */}
        <button
          onClick={() => setLanguage('bn')}
          className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-bold rounded-xl transition-all ${
            language === 'bn'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-900/40 ring-1 ring-white/20'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
          title="বাংলা ভাষায় পরিবর্তন করুন"
          id="corner-lang-bn-btn"
        >
          {language === 'bn' && <Check className="w-3 h-3 stroke-[3]" />}
          <span>বাংলা</span>
        </button>

      </div>
    </div>
  );
};
