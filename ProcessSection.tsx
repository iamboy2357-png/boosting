import React from 'react';
import { MessageSquare, Lightbulb, CodeXml, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const ProcessSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].process;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-blue-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
      case 'CodeXml':
        return <CodeXml className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden border-t border-white/10 bg-white/[0.02] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">{t.titleHighlight}</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group flex flex-col justify-between shadow-2xl hover:-translate-y-1"
              id={`process-step-${step.number}`}
            >
              
              <div>
                {/* Step Top Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm shadow-inner">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm">
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>{language === 'bn' ? `ধাপ ${step.number} / ০৪` : `Phase ${step.number} of 04`}</span>
                <span className="text-blue-400 font-mono font-semibold">Ready</span>
              </div>

            </div>
          ))}

        </div>

        {/* Callout Box */}
        <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl">
          <div>
            <h4 className="text-base font-bold text-white">{t.calloutTitle}</h4>
            <p className="text-xs sm:text-sm text-slate-400">{t.calloutDesc}</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-900/30 shrink-0"
          >
            <span>{t.calloutBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
