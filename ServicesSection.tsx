import React, { useState } from 'react';
import { Rocket, Code, Globe, CheckCircle2, ArrowRight, Sparkles, MessageCircle, X } from 'lucide-react';
import { SOCIAL_PLATFORMS, SocialPlatformIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].services;
  const [selectedServiceModal, setSelectedServiceModal] = useState<any | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-cyan-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-blue-400" />;
      case 'Globe':
      default:
        return <Globe className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
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

        {/* Services 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((service, idx) => (
            <div
              key={service.id}
              className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 hover:bg-white/10 transition-all duration-300 group shadow-2xl hover:-translate-y-1.5"
              id={`service-card-${service.id}`}
            >
              
              {/* Top Accent Stripe on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm shadow-inner">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-blue-400 transition-colors uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                    {language === 'bn' ? `সার্ভিস ${service.number}` : `Service ${service.number}`}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-blue-400 font-medium">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Social Boosting Badges if boosting service */}
                {service.id === 'social-media-boosting' && (
                  <div className="mb-6 p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                      {language === 'bn' ? 'সাপোর্টেড সোশ্যাল প্ল্যাটফর্ম:' : 'Supported Platforms:'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {SOCIAL_PLATFORMS.map((platform) => (
                        <div
                          key={platform.id}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 ${platform.badgeColor} text-[11px] font-semibold`}
                        >
                          <SocialPlatformIcon id={platform.id} className="w-3.5 h-3.5" />
                          <span>{platform.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services Includes List */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    {language === 'bn' ? 'সার্ভিসে যা থাকছে:' : 'Services Include:'}
                  </span>
                  <ul className="space-y-2">
                    {(service.features || service.items || []).map((feature: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedServiceModal(service)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all backdrop-blur-sm"
                  id={`learn-more-${service.id}`}
                >
                  <span>{language === 'bn' ? 'বিস্তারিত দেখুন' : 'Learn More'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/8801345386833?text=${encodeURIComponent(language === 'bn' ? `হ্যালো একে টিম! আমি আপনাদের ${service.title} সার্ভিস নিতে আগ্রহী।` : `Hello AK Team! I am interested in your ${service.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-emerald-400 hover:text-emerald-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all backdrop-blur-sm"
                  title="Inquire via WhatsApp"
                  id={`wa-inquire-${service.id}`}
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#020617]/90 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getServiceIcon(selectedServiceModal.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedServiceModal.title}</h3>
                  <span className="text-xs text-blue-400 font-mono">
                    {language === 'bn' ? `সার্ভিস ${selectedServiceModal.number}` : `Service ${selectedServiceModal.number}`}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedServiceModal.description}
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 backdrop-blur-md">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  {language === 'bn' ? 'সার্ভিসের পূর্ণাঙ্গ স্কোপ:' : 'Full Service Scope:'}
                </h4>
                <ul className="space-y-2">
                  {selectedServiceModal.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex items-center gap-2 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  {language === 'bn' 
                    ? 'শুরু করতে প্রস্তুত? আমরা দিচ্ছি স্বচ্ছ কোটেশন ও দ্রুত ডেলিভারি।' 
                    : 'Ready to start? We offer transparent quotes and fast turnaround.'}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/8801345386833?text=${encodeURIComponent(language === 'bn' ? `হ্যালো! আমি ${selectedServiceModal.title} সম্পর্কে বিস্তারিত ও মূল্য জানতে চাই।` : `Hello! I want to discuss details and pricing for ${selectedServiceModal.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedServiceModal(null)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'bn' ? 'হোয়াটসঅ্যাপে অর্ডার করুন' : 'Order on WhatsApp'}</span>
              </a>

              <a
                href="#contact"
                onClick={() => setSelectedServiceModal(null)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-900/30"
              >
                <span>{language === 'bn' ? 'মেসেজ পাঠান' : 'Send Contact Inquiry'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
