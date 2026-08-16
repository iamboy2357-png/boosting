import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Building2, 
  Share2
} from 'lucide-react';
import { BUSINESS_INFO, FOUNDER_IMAGE } from '../data';
import { SOCIAL_PLATFORMS, SocialPlatformIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const defaultServiceOptions = language === 'bn'
    ? [
        'সোশ্যাল মিডিয়া বুস্টিং (ফেসবুক, ইউটিউব, ইনস্টাগ্রাম, টিকটক, স্ন্যাপচ্যাট)',
        'কাস্টম ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট',
        'টার্নকি ওয়েবসাইট + সোশ্যাল বুস্টিং কম্বো প্যাকেজ',
      ]
    : [
        'Social Media Boosting (FB, YT, Insta, TikTok, Snapchat)',
        'Custom Web Design & Development',
        'Turnkey Web + Boosting Bundle',
      ];

  const serviceOptionsList = t.serviceOptions && Array.isArray(t.serviceOptions) && t.serviceOptions.length > 0
    ? t.serviceOptions
    : [t.serviceOption1, t.serviceOption2, t.serviceOption3].filter(Boolean).length > 0
    ? [t.serviceOption1, t.serviceOption2, t.serviceOption3].filter(Boolean) as string[]
    : defaultServiceOptions;

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: serviceOptionsList[0] || 'Social Media Boosting',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    if (language === 'bn') {
      const text = encodeURIComponent(
        `হ্যালো একে টিম!\n\n• নাম: ${formData.name || 'ক্লায়েন্ট'}\n• যোগাযোগ: ${formData.contact || 'দেওয়া হয়নি'}\n• সার্ভিস: ${formData.service}\n• প্রজেক্ট বিবরণ: ${formData.message || 'আমি একটি প্রজেক্ট শুরু করতে চাই'}`
      );
      window.open(`https://wa.me/8801345386833?text=${text}`, '_blank');
      return;
    }

    const text = encodeURIComponent(
      `Hello AK Team!\n\n• Name: ${formData.name || 'Client'}\n• Contact Info: ${formData.contact || 'Not provided'}\n• Service Required: ${formData.service}\n• Project Details: ${formData.message || 'I would like to start a project'}`
    );
    window.open(`https://wa.me/8801345386833?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-6 shadow-2xl">
              
              {/* Direct Founder Profile Badge */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="relative w-14 h-14 rounded-2xl p-0.5 bg-gradient-to-tr from-blue-500 to-cyan-400 shrink-0 shadow-md shadow-blue-900/20">
                  <img
                    src={FOUNDER_IMAGE}
                    alt="AK - Tech Team"
                    className="w-full h-full object-cover rounded-[14px]"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#020617]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {language === 'bn' ? 'একে টিম ও ডেভেলপার্স' : 'AK Team & Developers'}
                  </h4>
                  <span className="text-xs text-blue-400 font-medium block">
                    {language === 'bn' ? 'লিড ডেভেলপার ও ডিজিটাল স্ট্র্যাটেজিস্ট' : 'Lead Developers & Strategists'}
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {language === 'bn' ? 'সরাসরি প্রজেক্ট আলোচনা' : 'Direct 1-on-1 project discussion'}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">{t.infoTitle}</h3>
                <p className="text-xs text-slate-400">{t.infoSubtitle}</p>
              </div>

              <div className="space-y-4 text-sm">
                
                {/* Business Name */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 border border-blue-500/20">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t.businessNameLabel}</span>
                    <span className="font-bold text-white">{BUSINESS_INFO.name}</span>
                  </div>
                </div>

                {/* WhatsApp / Phone */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 border border-emerald-500/20">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-slate-400 block">{t.phoneLabel}</span>
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-300 hover:text-emerald-200 transition-colors block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl hover:bg-emerald-500/30 transition-colors shrink-0"
                  >
                    Chat
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 border border-blue-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <span className="text-xs text-slate-400 block">{t.emailLabel}</span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="font-bold text-blue-400 hover:text-blue-300 transition-colors block truncate"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0 border border-indigo-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t.locationLabel}</span>
                    <span className="font-bold text-white">{language === 'bn' ? 'বাংলাদেশ (দেশব্যাপী ও বৈশ্বিক সার্ভিস)' : BUSINESS_INFO.location}</span>
                  </div>
                </div>

                {/* Founded */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 border border-amber-500/20">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t.foundedLabel || (language === 'bn' ? 'প্রতিষ্ঠার বছর' : 'Established')}</span>
                    <span className="font-bold text-white">{language === 'bn' ? `সাল ${BUSINESS_INFO.founded}` : `Year ${BUSINESS_INFO.founded}`}</span>
                  </div>
                </div>

              </div>

              {/* Social Channels Section */}
              <div className="pt-2 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>{t.socialChannels || t.socialsLabel || (language === 'bn' ? 'অফিসিয়াল সোশ্যাল মিডিয়া' : 'Official Socials')}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {language === 'bn' ? 'ক্লিক করে যুক্ত হন' : 'Click to connect'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SOCIAL_PLATFORMS.map((platform) => (
                    <a
                      key={platform.id}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 ${platform.bgHover} ${platform.borderColor} text-slate-200 hover:text-white transition-all backdrop-blur-sm group`}
                      id={`contact-social-${platform.id}`}
                    >
                      <div className="p-1 rounded-lg bg-white/5 shrink-0 group-hover:scale-110 transition-transform">
                        <SocialPlatformIcon id={platform.id} className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold block truncate leading-none text-white">{platform.name}</span>
                        <span className="text-[10px] text-slate-400 truncate block mt-0.5">{platform.handle}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">{t.thankYouTitle || t.successTitle}</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      {t.thankYouDesc || t.successMessage}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-300 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all backdrop-blur-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t.openWhatsAppNow || (language === 'bn' ? 'সরাসরি হোয়াটসঅ্যাপে চ্যাট' : 'Chat on WhatsApp')}</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', contact: '', service: serviceOptionsList[0] || 'Social Media Boosting', message: '' });
                      }}
                      className="px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white"
                    >
                      {t.sendAnother || t.successBtn || (language === 'bn' ? 'আরেকটি বার্তা পাঠান' : 'Send Another Inquiry')}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">{t.formTitle}</h3>
                    <p className="text-xs text-slate-400">{t.formSubtitle}</p>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      {t.nameLabel} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all backdrop-blur-sm"
                    />
                  </div>

                  {/* Email / Phone Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-info" className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      {t.contactInfoLabel || t.contactLabel} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-info"
                      required
                      placeholder={t.contactInfoPlaceholder || t.contactPlaceholder}
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all backdrop-blur-sm"
                    />
                  </div>

                  {/* Service Required Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-service" className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      {t.serviceRequiredLabel || t.serviceLabel} <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all backdrop-blur-sm"
                    >
                      {serviceOptionsList.map((opt: string, idx: number) => (
                        <option key={idx} value={opt} className="bg-[#020617] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      {t.messageLabel} <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder={t.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all resize-y backdrop-blur-sm"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-900/30 transition-all disabled:opacity-50"
                      id="contact-submit-btn"
                    >
                      {loading ? (
                        <span>{t.processing || (language === 'bn' ? 'প্রক্রিয়াকরণ হচ্ছে...' : 'Processing...')}</span>
                      ) : (
                        <>
                          <span>{t.sendMessageBtn || t.submitBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-emerald-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all backdrop-blur-sm"
                      title="Send directly to WhatsApp"
                      id="contact-whatsapp-direct-btn"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>{t.sendWhatsAppBtn || t.whatsappDirectBtn}</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
