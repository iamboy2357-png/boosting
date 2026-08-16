import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Sparkles, ShieldCheck, BellRing } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export function NewsletterSection() {
  const { language } = useLanguage();
  const t = translations[language].newsletter;

  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState<'all' | 'web' | 'boosting'>('all');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage(t.invalidEmail);
      return;
    }

    setStatus('loading');

    // Simulate reliable client-side newsletter subscription with storage
    setTimeout(() => {
      try {
        const savedSubscribers = JSON.parse(localStorage.getItem('ak_newsletter_subscribers') || '[]');
        savedSubscribers.push({
          email,
          interest,
          date: new Date().toISOString(),
        });
        localStorage.setItem('ak_newsletter_subscribers', JSON.stringify(savedSubscribers));
      } catch {
        // Fallback gracefully
      }
      setStatus('success');
      setErrorMessage('');
    }, 600);
  };

  const handleReset = () => {
    setEmail('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="newsletter" className="py-20 relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/15 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl">
          
          {/* Subtle decorative glow orb inside container */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Benefits */}
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                <BellRing className="w-3.5 h-3.5" />
                <span>{t.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {t.title} <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  {t.titleHighlight}
                </span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t.description}
              </p>

              {/* Benefit Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.benefit1}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.benefit2}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form or Success State */}
            <div className="lg:col-span-6">
              {status === 'success' ? (
                <div className="p-7 sm:p-9 rounded-2xl bg-white/5 border border-emerald-500/30 text-center space-y-4 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{t.successTitle}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                      {language === 'bn' 
                        ? `সাবস্ক্রাইব করার জন্য ধন্যবাদ। আমরা আপনার ইমেইল `
                        : `Thank you for subscribing. We've registered `}
                      <span className="text-white font-semibold">{email}</span>
                      {language === 'bn'
                        ? ` সফলভাবে যুক্ত করেছি।`
                        : ` for our latest updates and exclusive offers.`}
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
                  >
                    <span>{t.subscribeAnother}</span>
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 space-y-5 backdrop-blur-xl shadow-xl"
                  id="newsletter-signup-form"
                >
                  {/* Topic Preference Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                      {t.interestLabel}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setInterest('all')}
                        className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all ${
                          interest === 'all'
                            ? 'bg-blue-600/30 border-blue-400 text-white shadow-sm'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10'
                        }`}
                      >
                        {t.interestAll}
                      </button>
                      <button
                        type="button"
                        onClick={() => setInterest('web')}
                        className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all ${
                          interest === 'web'
                            ? 'bg-blue-600/30 border-blue-400 text-white shadow-sm'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10'
                        }`}
                      >
                        {t.interestWeb}
                      </button>
                      <button
                        type="button"
                        onClick={() => setInterest('boosting')}
                        className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all ${
                          interest === 'boosting'
                            ? 'bg-blue-600/30 border-blue-400 text-white shadow-sm'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10'
                        }`}
                      >
                        {t.interestBoosting}
                      </button>
                    </div>
                  </div>

                  {/* Input & Action */}
                  <div className="space-y-3">
                    <label htmlFor="newsletter-email-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      {t.emailLabel}
                    </label>
                    <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5">
                      <div className="relative flex-1">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="newsletter-email-input"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === 'error') setStatus('idle');
                          }}
                          placeholder={t.emailPlaceholder}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950/70 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all backdrop-blur-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-60 rounded-xl shadow-lg shadow-blue-900/30 transition-all shrink-0"
                        id="newsletter-submit-btn"
                      >
                        {status === 'loading' ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>{t.subscribeBtn}</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <p className="text-xs text-rose-400 font-medium animate-in fade-in">
                      {errorMessage}
                    </p>
                  )}

                  {/* Privacy note */}
                  <p className="text-[11px] text-slate-400 flex items-center justify-center sm:justify-start gap-1.5 pt-1">
                    <span>{t.privacyNote}</span>
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
