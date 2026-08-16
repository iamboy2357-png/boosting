import React, { useState } from 'react';
import { 
  Rocket, 
  ArrowRight, 
  Code2, 
  CheckCircle2, 
  Smartphone, 
  Share2, 
  BarChart3, 
  Globe, 
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { FOUNDER_IMAGE } from '../data';
import { SOCIAL_PLATFORMS, SocialPlatformIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'boosting' | 'analytics'>('web');
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Founder Avatar & Experience Pill */}
            <div className="inline-flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold backdrop-blur-md shadow-lg shadow-blue-950/20">
              <div className="relative w-8 h-8 rounded-full p-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 shrink-0">
                <img
                  src={FOUNDER_IMAGE}
                  alt="AK Team - Developers & Growth Strategists"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-slate-950" />
              </div>
              <span className="text-white font-bold">{language === 'bn' ? 'একে টিম (AK Team)' : 'AK Team'}</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-blue-300 hidden sm:inline">{t.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              {t.headlinePart1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                {t.headlineHighlight}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-xl shadow-white/5 group"
                id="hero-explore-services-btn"
              >
                <span>{t.exploreServicesBtn}</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/8801345386833?text=${encodeURIComponent(language === 'bn' ? 'হ্যালো একে টিম! আমি ফ্রি পরামর্শ ও কোটেশন নিতে চাই।' : 'Hello AK Team! I would like to get a free estimate and consultation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-emerald-400 bg-white/5 hover:bg-emerald-500/10 border border-emerald-500/30 rounded-xl backdrop-blur-md transition-all"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.whatsappDirectBtn}</span>
              </a>
            </div>

            {/* Social & Boosting Platforms Banner */}
            <div className="pt-3 space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400 font-medium">
                <span>{t.boostingPlatformsLabel}</span>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {SOCIAL_PLATFORMS.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 ${platform.bgHover} ${platform.borderColor} text-xs font-semibold text-slate-300 hover:text-white transition-all backdrop-blur-sm group`}
                    title={`Boost on ${platform.name}`}
                  >
                    <SocialPlatformIcon id={platform.id} className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                    <span>{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Line */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-400 font-medium flex-wrap">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                {t.trustTags.professional}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                {t.trustTags.reliable}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {t.trustTags.affordable}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                {t.trustTags.experience}
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Dashboard Graphic */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Backdrops */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/20 via-indigo-500/15 to-purple-500/20 blur-2xl opacity-80" />
              
              {/* Main Frosted Glass Card */}
              <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                
                {/* Window Topbar */}
                <div className="px-5 py-3.5 bg-white/5 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">ak-digital-hub.app</span>
                  </div>

                  {/* Interactive Switchers */}
                  <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
                    <button
                      onClick={() => setActiveTab('web')}
                      className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                        activeTab === 'web' 
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {t.mockup.tabWeb}
                    </button>
                    <button
                      onClick={() => setActiveTab('boosting')}
                      className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                        activeTab === 'boosting' 
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {t.mockup.tabBoosting}
                    </button>
                    <button
                      onClick={() => setActiveTab('analytics')}
                      className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                        activeTab === 'analytics' 
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {t.mockup.tabAnalytics}
                    </button>
                  </div>
                </div>

                {/* Card Content Screen based on active tab */}
                <div className="p-5 sm:p-6 space-y-4">
                  
                  {activeTab === 'web' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      {/* Web View Header Mockup */}
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                              <Code2 className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold text-white">
                              {language === 'bn' ? 'আধুনিক বিজনেস ওয়েবসাইট' : 'Modern Business Website'}
                            </span>
                          </div>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            100% Responsive
                          </span>
                        </div>
                        
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-300 w-full" />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 text-center pt-1">
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <span className="block text-xs font-bold text-white">0.4s</span>
                            <span className="text-[10px] text-slate-400">{language === 'bn' ? 'স্পিড' : 'Load Speed'}</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <span className="block text-xs font-bold text-emerald-400">99 / 100</span>
                            <span className="text-[10px] text-slate-400">SEO Score</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <span className="block text-xs font-bold text-cyan-400">Multi-Device</span>
                            <span className="text-[10px] text-slate-400">{language === 'bn' ? 'মোবাইল রেডি' : 'Mobile Ready'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Feature Checklist Preview */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-300 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                          <span className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-blue-400" />
                            {language === 'bn' ? 'ল্যান্ডিং পেজ ও বিজনেস সাইট' : 'Landing Pages & Business Sites'}
                          </span>
                          <span className="text-emerald-400 font-mono text-[11px] font-bold">Ready</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-300 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                          <span className="flex items-center gap-2">
                            <Smartphone className="w-4 h-4 text-indigo-400" />
                            {language === 'bn' ? 'স্মার্টফোন ও পিসিতে নিখুঁত ডিসপ্লে' : 'Mobile, Tablet & Desktop Layouts'}
                          </span>
                          <span className="text-emerald-400 font-mono text-[11px] font-bold">Active</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'boosting' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      {/* Social Media Boosting Mockup */}
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                              <Rocket className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold text-white">
                              {language === 'bn' ? 'সোশ্যাল মিডিয়া গ্রোথ বুস্ট' : 'Social Campaign Boost'}
                            </span>
                          </div>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                            +285% Growth
                          </span>
                        </div>

                        {/* Animated Growth Graph Simulation */}
                        <div className="pt-2 space-y-1.5">
                          <div className="flex justify-between text-xs text-slate-400">
                            <span>{language === 'bn' ? 'অডিয়েন্স রিচ' : 'Audience Reach'}</span>
                            <span className="text-white font-semibold">125,000+ {language === 'bn' ? 'মানুষ' : 'People'}</span>
                          </div>
                          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 w-4/5 rounded-full animate-pulse" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">{language === 'bn' ? 'টার্গেটেড লিডস' : 'Targeted Leads'}</span>
                            <span className="text-sm font-bold text-white">+4.6x {language === 'bn' ? 'বৃদ্ধি' : 'Inquiries'}</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">{language === 'bn' ? 'এঙ্গেজমেন্ট' : 'Post Engagement'}</span>
                            <span className="text-sm font-bold text-emerald-400">{language === 'bn' ? 'উচ্চ বিক্রয়' : 'High Conversion'}</span>
                          </div>
                        </div>
                      </div>

                      {/* 5 Platforms Supported Bar inside mockup */}
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span>{t.mockup.supportedPlatforms}</span>
                          <span className="text-emerald-400 font-bold">{t.mockup.guaranteed}</span>
                        </div>
                        <div className="grid grid-cols-5 gap-1.5 pt-0.5">
                          {SOCIAL_PLATFORMS.map((platform) => (
                            <div
                              key={platform.id}
                              className={`flex flex-col items-center justify-center p-1.5 rounded-xl bg-white/5 border border-white/5 ${platform.bgHover} text-slate-300 transition-colors`}
                              title={platform.name}
                            >
                              <SocialPlatformIcon id={platform.id} className="w-3.5 h-3.5" />
                              <span className="text-[9px] font-semibold mt-0.5">{platform.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-300 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="flex items-center gap-2">
                          <Share2 className="w-4 h-4 text-cyan-400" />
                          {t.mockup.targetPromo}
                        </span>
                        <span className="text-cyan-400 font-semibold">{t.mockup.activeCampaign}</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'analytics' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      {/* Analytics Dashboard Mockup */}
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
                              <BarChart3 className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold text-white">
                              {language === 'bn' ? 'পারফরম্যান্স রিপোর্ট' : 'Performance Overview'}
                            </span>
                          </div>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                            Real Impact
                          </span>
                        </div>

                        {/* Bar stats */}
                        <div className="grid grid-cols-4 gap-2 items-end h-20 pt-2 px-1">
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-full bg-blue-500/20 h-10 rounded-lg border border-blue-500/30 backdrop-blur-sm" />
                            <span className="text-[9px] text-slate-400">W1</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-full bg-blue-500/40 h-14 rounded-lg border border-blue-500/40 backdrop-blur-sm" />
                            <span className="text-[9px] text-slate-400">W2</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-full bg-blue-500/60 h-16 rounded-lg border border-blue-500/50 backdrop-blur-sm" />
                            <span className="text-[9px] text-slate-400">W3</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 h-20 rounded-lg shadow-lg shadow-cyan-500/30" />
                            <span className="text-[9px] text-cyan-300 font-bold">W4</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                          <span className="text-[10px] text-slate-400 block">{language === 'bn' ? 'ক্লায়েন্ট সন্তুষ্টি' : 'Client Satisfaction'}</span>
                          <span className="text-sm font-bold text-white">100% Dedicated</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                          <span className="text-[10px] text-slate-400 block">{language === 'bn' ? 'প্রতিষ্ঠিত' : 'Established'}</span>
                          <span className="text-sm font-bold text-blue-400">{language === 'bn' ? '২০২১ সাল' : 'Year 2021'}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Quick Contact Action in Graphic */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      {language === 'bn' ? 'ভেরিফায়েড এজেন্সি' : 'Verified Agency'}
                    </span>
                    <a
                      href={`https://wa.me/8801345386833`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>{language === 'bn' ? 'মেসেজ দিন' : 'Inquire Now'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
