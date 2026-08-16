import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const CostEstimator: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].estimator;
  const [serviceType, setServiceType] = useState<string>('web');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['responsive', 'seo']);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const getEstimatedTimeline = () => {
    if (serviceType === 'boosting') return language === 'bn' ? '১ – ৩ দিন সেটআপ ও লাইভ' : '1 – 3 Days Setup & Launch';
    if (serviceType === 'web') return language === 'bn' ? '৩ – ৬ দিন ডেলিভারি' : '3 – 6 Days Delivery';
    return language === 'bn' ? '৫ – ৮ দিন পূর্ণাঙ্গ প্যাকেজ' : '5 – 8 Days Full Turnkey Delivery';
  };

  const getSelectedServiceName = () => {
    return t.services.find((s) => s.id === serviceType)?.name || (language === 'bn' ? 'কাস্টম সল্যুশন' : 'Custom Solution');
  };

  const generateWhatsAppMessage = () => {
    const serviceName = getSelectedServiceName();
    const addonsText = selectedAddons
      .map((id) => t.addons.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    if (language === 'bn') {
      return encodeURIComponent(
        `হ্যালো একে টিম! আমি আপনাদের ওয়েবসাইট থেকে প্রজেক্ট নির্বাচন করেছি:\n\n• সার্ভিস: ${serviceName}\n• প্রয়োজনীয় ফিচারস: ${addonsText || 'সাধারণ'}\n• সময়সীমা: ${getEstimatedTimeline()}\n\nঅনুগ্রহ করে সেরা কোটেশন এবং পরবর্তী ধাপ জানান!`
      );
    }

    return encodeURIComponent(
      `Hello AK Team! I estimated a project on your website:\n\n• Service: ${serviceName}\n• Desired Features: ${addonsText || 'Standard'}\n• Estimated Timeline: ${getEstimatedTimeline()}\n\nPlease let me know your best quote and next steps!`
    );
  };

  return (
    <section className="py-20 relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">{t.titleHighlight}</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            {t.description}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Options */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Service */}
            <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
                <span>{t.step1Title}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {t.services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setServiceType(service.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      serviceType === service.id
                        ? 'bg-blue-600/20 border-blue-400/50 text-white shadow-lg shadow-blue-900/30'
                        : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-sm font-bold block mb-1">{service.name}</span>
                    <span className="text-[11px] text-slate-400 block">{service.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Desired Features */}
            <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">2</span>
                <span>{t.step2Title}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-2xl text-left border flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-blue-500/15 border-blue-400/50 text-white shadow-sm'
                          : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/15'
                      }`}
                    >
                      <span className="text-xs font-medium">{addon.label}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                        isChecked ? 'bg-blue-600 text-white' : 'border border-slate-600'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Instant Summary & WhatsApp Trigger */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-blue-500/30 p-6 sm:p-7 space-y-6 shadow-2xl shadow-blue-900/20">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">{t.summaryTitle}</span>
                  <h4 className="text-lg font-bold text-white">{getSelectedServiceName()}</h4>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-blue-400 backdrop-blur-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Scope Breakdown list */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-400">{t.timelineLabel}</span>
                  <span className="font-semibold text-white">{getEstimatedTimeline()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-400">{t.featuresLabel}</span>
                  <span className="font-semibold text-blue-300">{selectedAddons.length} {language === 'bn' ? 'টি ফিচার' : 'Features'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-400">{t.pricingPolicyLabel}</span>
                  <span className="font-semibold text-emerald-400">{t.pricingPolicyValue}</span>
                </div>
              </div>

              {/* Direct Booking on WhatsApp */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/8801345386833?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-900/30 transition-all"
                  id="estimator-whatsapp-send-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.sendEstimateBtn}</span>
                </a>

                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all backdrop-blur-sm"
                >
                  <span>{t.webFormBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 justify-center">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>{t.disclaimer}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
