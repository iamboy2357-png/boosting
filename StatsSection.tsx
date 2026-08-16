import React from 'react';
import { Calendar, Layers, Target, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const StatsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].stats;

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-emerald-400" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-indigo-400" />;
      case 'Clock':
      default:
        return <Clock className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section className="py-16 relative bg-white/[0.02] backdrop-blur-md border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verified Stats Notice */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 mb-8">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{t.tag}</span>
        </div>

        {/* 5 Stats Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {t.items.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-center flex flex-col items-center justify-center hover:border-white/20 hover:bg-white/10 transition-all shadow-xl hover:-translate-y-1"
              id={`stat-card-${idx}`}
            >
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 backdrop-blur-sm shadow-inner">
                {getStatIcon(stat.icon)}
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-400">
                {stat.note}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
