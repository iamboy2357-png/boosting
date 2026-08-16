import React from 'react';
import { ShieldCheck, Sparkles, Coins, Users, Calendar, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].whyChooseUs;

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-emerald-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-indigo-400" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-amber-400" />;
      case 'Headphones':
      default:
        return <Headphones className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t.title} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              {t.titleHighlight}
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((feature, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between shadow-2xl hover:-translate-y-1"
              id={`why-us-card-${feature.number}`}
            >
              <div>
                {/* Header with Icon and Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm shadow-inner">
                    {getFeatureIcon(feature.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-blue-400 transition-colors uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                    {feature.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {feature.number} — {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] font-medium text-slate-400">{language === 'bn' ? 'একে কোয়ালিটি গ্যারান্টি' : 'AK Quality Standard'}</span>
                <span className="w-2 h-2 rounded-full bg-blue-400/60 group-hover:bg-blue-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
