import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight, Globe } from 'lucide-react';
import { SOCIAL_PLATFORMS, SocialPlatformIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

interface NavbarProps {
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.services, href: '#services' },
    { name: t.portfolio, href: '#portfolio' },
    { name: t.whyUs, href: '#why-us' },
    { name: t.process, href: '#process' },
    { name: t.faq, href: '#faq' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#020617]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2.5' 
          : 'bg-white/[0.02] backdrop-blur-md border-b border-white/5 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            id="brand-logo-link"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-heading font-bold text-base sm:text-lg text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform border border-white/20">
              AK
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-white text-sm sm:text-base tracking-tight uppercase group-hover:text-blue-300 transition-colors">
                AK Boosting <span className="text-blue-400">&</span> Dev
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-wide">
                {language === 'bn' ? 'ডিজিটাল সল্যুশনস • ২০২১ থেকে' : 'Digital Solutions • Since 2021'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all tracking-wide"
                id={`nav-link-${idx}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons + Fast Corner Language Switcher (Desktop & Tablet) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Fast Corner Language Switcher */}
            <div 
              className="flex items-center gap-0.5 sm:gap-1 p-0.5 sm:p-1 rounded-2xl bg-white/10 border border-blue-500/30 backdrop-blur-md shadow-lg shadow-blue-950/40"
              id="language-switcher-header"
              title="Fast Language Switch / ভাষা পরিবর্তন"
            >
              <div className="pl-1.5 sm:pl-2 pr-0.5 sm:pr-1 flex items-center gap-1 text-blue-400">
                <Globe className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[10px] uppercase font-bold tracking-wider text-slate-300">
                  {language === 'bn' ? 'ভাষা' : 'Lang'}
                </span>
              </div>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 sm:px-2.5 py-1 text-xs font-bold rounded-xl transition-all ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/50 scale-105 ring-1 ring-white/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title="Switch to English"
                id="header-lang-en-btn"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('bn')}
                className={`px-2 sm:px-2.5 py-1 text-xs font-bold rounded-xl transition-all ${
                  language === 'bn'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-900/50 scale-105 ring-1 ring-white/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title="বাংলা ভাষায় পরিবর্তন করুন"
                id="header-lang-bn-btn"
              >
                বাংলা
              </button>
            </div>

            {/* Desktop / Tablet WhatsApp Button */}
            <a
              href={`https://wa.me/8801345386833?text=${encodeURIComponent(language === 'bn' ? 'হ্যালো একে টিম! আমি আপনাদের সার্ভিস সম্পর্কে জানতে চাই।' : 'Hello AK Team! I would like to inquire about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all backdrop-blur-sm"
              title="Chat on WhatsApp"
              id="header-whatsapp-btn"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Desktop Get Quote CTA */}
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-900/30 transition-all group"
              id="header-get-started-btn"
            >
              <span>{t.getQuote}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Mobile WhatsApp Icon Button */}
            <a
              href={`https://wa.me/8801345386833`}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-emerald-400 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
              id="mobile-quick-wa-btn"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Mobile/Tablet Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 rounded-xl transition-colors focus:outline-none backdrop-blur-sm"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#020617]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          {/* Language Switcher inside Drawer */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>{language === 'bn' ? 'ভাষা পরিবর্তন (Language)' : 'Language / ভাষা'}</span>
            </span>
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-black/40 border border-white/10">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('bn')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  language === 'bn'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400'
                }`}
              >
                বাংলা
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>{language === 'bn' ? 'সোশ্যাল মিডিয়ায় যুক্ত থাকুন:' : 'Connect on Social Media:'}</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {SOCIAL_PLATFORMS.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${platform.bgHover} ${platform.borderColor} text-slate-300 hover:text-white transition-colors flex items-center justify-center`}
                  title={platform.name}
                  id={`mobile-social-${platform.id}`}
                >
                  <SocialPlatformIcon id={platform.id} className="w-4 h-4" />
                </a>
              ))}
            </div>

            <a
              href={`https://wa.me/8801345386833?text=${encodeURIComponent(language === 'bn' ? 'হ্যালো একে টিম! আমি প্রজেক্ট শুরু করতে চাই।' : 'Hello AK Team! I want to start a project with you.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-400 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.whatsappChat} (+8801345386833)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-900/30"
            >
              <span>{t.getQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
