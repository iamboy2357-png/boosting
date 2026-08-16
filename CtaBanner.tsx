import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const CtaBanner: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].cta;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/15 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Ambient light inside card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t.title} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                {t.titleHighlight}
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {t.description}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-900/40 transition-all group"
                id="cta-start-project-btn"
              >
                <span>{t.startProjectBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/8801345386833?text=${encodeURIComponent(language === 'bn' ? 'হ্যালো একে টিম! আমি আমার বিজনেস বাড়ানোর জন্য পরামর্শ করতে চাই।' : 'Hello AK Team! I would like to consult about growing my business.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-emerald-300 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all backdrop-blur-md"
                id="cta-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>{t.whatsappBtn}</span>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-medium pt-2">
              {t.subtext}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
