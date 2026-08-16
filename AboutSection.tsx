import React from 'react';
import { Target, Compass, CheckCircle2, ArrowRight, Users, ShieldCheck, Zap, MessageCircle, Code2 } from 'lucide-react';
import { FOUNDER_IMAGE } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-[-5%] w-[40%] h-[40%] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Profile & Identity Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background gradient blur */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/25 via-indigo-500/20 to-purple-500/25 rounded-3xl blur-2xl opacity-75" />
              
              {/* Main Container Card */}
              <div className="relative rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
                
                {/* Founder Profile Presentation */}
                <div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-md overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    
                    {/* Profile Picture with Glow Ring */}
                    <div className="relative shrink-0">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-500 shadow-xl shadow-blue-900/30">
                        <img
                          src={FOUNDER_IMAGE}
                          alt="AK Team - Developers & Strategists"
                          className="w-full h-full object-cover rounded-[14px]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      {/* Active Status Badge */}
                      <span className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Online
                      </span>
                    </div>

                    {/* Founder Details */}
                    <div className="space-y-1.5 text-center sm:text-left flex-1">
                      <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                        <Code2 className="w-3 h-3" />
                        <span>{t.founderTitle}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {t.founderName}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {t.founderBio}
                      </p>
                      
                      {/* Direct WhatsApp CTA */}
                      <div className="pt-2">
                        <a
                          href={`https://wa.me/8801345386833?text=${encodeURIComponent(language === 'bn' ? 'হ্যালো একে টিম! আমি ওয়েব / বুস্টিং নিয়ে সরাসরি কথা বলতে চাই।' : 'Hello AK! I would like to consult directly about a project.')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 rounded-xl transition-all shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>{t.consultationBtn}</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Mission Card */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Target className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">{t.missionLabel}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {t.missionText}
                  </p>
                </div>

                {/* Vision Card */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Compass className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">{t.visionLabel}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {t.visionText}
                  </p>
                </div>

                {/* 4 Quick highlights */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t.highlights.practical}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t.highlights.directComm}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t.highlights.modernTech}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t.highlights.reliableDelivery}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            {/* Label */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <span>{t.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t.title} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                {t.titleHighlight}
              </span>
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                {t.paragraph1}
              </p>

              <p>
                {t.paragraph2}
              </p>

              <p>
                {t.paragraph3}
              </p>
            </div>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="text-sm font-bold text-white">{t.values.dependableTitle}</h4>
                <p className="text-xs text-slate-400 mt-1">{t.values.dependableDesc}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Zap className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-sm font-bold text-white">{t.values.resultsTitle}</h4>
                <p className="text-xs text-slate-400 mt-1">{t.values.resultsDesc}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Users className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-sm font-bold text-white">{t.values.clientFirstTitle}</h4>
                <p className="text-xs text-slate-400 mt-1">{t.values.clientFirstDesc}</p>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl backdrop-blur-md transition-all group"
                id="about-learn-more-btn"
              >
                <span>{t.learnMoreBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
