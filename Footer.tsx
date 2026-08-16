import React, { useState } from 'react';
import { 
  ArrowUp, 
  Mail, 
  MapPin, 
  Calendar, 
  MessageCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { SOCIAL_PLATFORMS, SocialPlatformIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/25">
                <div className="w-full h-full bg-[#020617] rounded-[14px] flex items-center justify-center font-heading font-bold text-white text-lg">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AK</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-base">AK Boosting &amp; Web Developer</h3>
                <span className="text-xs text-blue-400 font-medium">
                  {language === 'bn' ? 'বুস্টিং ও ওয়েব ডেভেলপার' : 'Boosting & Web Developer'}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.brandBio}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                {language === 'bn' ? `প্রতিষ্ঠা ${BUSINESS_INFO.founded}` : `Est. ${BUSINESS_INFO.founded}`}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {language === 'bn' ? 'বাংলাদেশ' : BUSINESS_INFO.location}
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">{t.quickLinks}</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">{t.linkHome}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">{t.linkAbout}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t.linkServices}</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">{t.linkPortfolio}</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">{t.linkWhyUs}</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">{t.linkProcess}</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">{t.linkFaq}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">{t.linkContact}</a>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-blue-400 transition-colors">{t.linkNewsletter}</a>
              </li>
            </ul>
          </div>

          {/* Services Catalog Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">{t.ourServices}</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {t.servicesList.map((svc: string, idx: number) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-blue-400 transition-colors block">{svc}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">{t.directContact}</h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors truncate block"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{language === 'bn' ? 'লোকেশন: বাংলাদেশ (দেশব্যাপী সার্ভিস)' : `Location: ${BUSINESS_INFO.location}`}</span>
              </div>

              <div className="pt-3">
                <span className="text-xs font-semibold text-slate-300 block mb-2.5">
                  {t.followConnect}
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {SOCIAL_PLATFORMS.map((platform) => (
                    <a
                      key={platform.id}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${platform.bgHover} ${platform.borderColor} text-slate-300 hover:text-white transition-all backdrop-blur-sm group relative flex items-center justify-center`}
                      title={`${platform.name} (${platform.description})`}
                      id={`footer-social-${platform.id}`}
                    >
                      <SocialPlatformIcon id={platform.id} className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                  ))}
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all backdrop-blur-sm flex items-center gap-1.5 text-xs font-semibold"
                    title="Direct WhatsApp"
                    id="footer-social-whatsapp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.copyright}</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors"
            >
              {t.privacyPolicy}
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors"
            >
              {t.termsConditions}
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors ml-2 backdrop-blur-sm"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy & Terms Info Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020617]/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-lg rounded-3xl bg-[#0b0f19]/90 border border-white/15 p-6 sm:p-7 space-y-4 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white">
                {legalModal === 'privacy' 
                  ? (language === 'bn' ? 'গোপনীয়তা নীতি (Privacy Policy)' : 'Privacy Policy') 
                  : (language === 'bn' ? 'ব্যবহারের শর্তাবলী (Terms & Conditions)' : 'Terms & Conditions')}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="text-xs text-slate-300 space-y-3 max-h-60 overflow-y-auto leading-relaxed">
              {legalModal === 'privacy' ? (
                language === 'bn' ? (
                  <>
                    <p><strong>একে বুস্টিং ও ওয়েব ডেভেলপার</strong> (প্রতিষ্ঠা ২০২১, বাংলাদেশ)-এ আমরা আপনার তথ্যের গোপনীয়তাকে সর্বোচ্চ অগ্রাধিকার দিই। যোগাযোগ ফরম বা হোয়াটসঅ্যাপের মাধ্যমে শেয়ার করা সমস্ত ব্যক্তিগত তথ্য ও ফাইল নিরাপদ ও গোপন রাখা হয়।</p>
                    <p>আমরা কখনোই আপনার ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রি বা শেয়ার করি না।</p>
                  </>
                ) : (
                  <>
                    <p>At <strong>AK Boosting &amp; Web Developer</strong> (Founded 2021, Bangladesh), we respect your privacy. Any personal information (name, email, phone number, project files) shared via contact forms or WhatsApp is kept strictly confidential and used solely for delivering your requested web development or boosting services.</p>
                    <p>We do not sell, rent, or distribute your private client information to third-party marketing services.</p>
                  </>
                )
              ) : (
                language === 'bn' ? (
                  <>
                    <p><strong>একে বুস্টিং ও ওয়েব ডেভেলপার</strong> সোশ্যাল মিডিয়া বুস্টিং, ওয়েব ডিজাইন, ওয়েবসাইট কাস্টমাইজেশন ও অনলাইন বিজনেস সল্যুশন প্রদান করে থাকে।</p>
                    <p>সকল প্রজেক্ট ক্লায়েন্টের চুক্তি ও কাজের পরিধি অনুসারে নির্দিষ্ট ডেলিভারি টাইমলাইনে সম্পন্ন করা হয়।</p>
                  </>
                ) : (
                  <>
                    <p><strong>AK Boosting &amp; Web Developer</strong> provides digital services including social media boosting, web design, website customization, and online business setup.</p>
                    <p>All projects are handled with client agreements, clear milestone definitions, and verified delivery timelines. Turnaround estimates depend on the requested project scope and timely feedback from the client.</p>
                  </>
                )
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-900/30 transition-all"
              >
                {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
