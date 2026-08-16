import React from 'react';
import { Calendar, MapPin, Layers, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const TrustBar: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].trustBar;

  return (
    <section className="relative py-12 border-y border-white/10 bg-white/[0.03] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-6 space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* 3 Metric Badges */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Founded 2021 */}
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-3.5 hover:border-white/20 hover:bg-white/10 transition-all shadow-lg">
              <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">{t.badgeFoundedLabel}</span>
                <span className="text-base font-bold text-white">{t.badgeFoundedValue}</span>
              </div>
            </div>

            {/* Location Bangladesh */}
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-3.5 hover:border-white/20 hover:bg-white/10 transition-all shadow-lg">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">{t.badgeLocationLabel}</span>
                <span className="text-base font-bold text-white">{t.badgeLocationValue}</span>
              </div>
            </div>

            {/* Services */}
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-3.5 hover:border-white/20 hover:bg-white/10 transition-all shadow-lg">
              <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">{t.badgeServicesLabel}</span>
                <span className="text-xs font-bold text-white leading-tight block">{t.badgeServicesValue}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
