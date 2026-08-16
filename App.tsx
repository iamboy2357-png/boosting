import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { StatsSection } from './components/StatsSection';
import { CostEstimator } from './components/CostEstimator';
import { CtaBanner } from './components/CtaBanner';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500 selection:text-white flex flex-col font-sans relative overflow-x-hidden">
        {/* Frosted Glass Theme Ambient Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="fixed top-[45%] left-[60%] w-[35%] h-[35%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

        {/* 1. Header / Navigation */}
        <Navbar />

        <main className="flex-1 relative z-10">
          {/* 2. Hero Section */}
          <Hero />

          {/* 3. Trust / Introduction Bar */}
          <TrustBar />

          {/* 4. About Us Section */}
          <AboutSection />

          {/* 5. Services Section */}
          <ServicesSection />

          {/* 6. Why Choose Us */}
          <WhyChooseUs />

          {/* 7. How It Works (Process) */}
          <ProcessSection />

          {/* 8. Portfolio Section */}
          <PortfolioSection />

          {/* 9. Business Stats Section */}
          <StatsSection />

          {/* Interactive Scope & Estimate Calculator */}
          <CostEstimator />

          {/* 10. Call-to-Action Section */}
          <CtaBanner />

          {/* 11. FAQ Section */}
          <FaqSection />

          {/* 12. Contact Section */}
          <ContactSection />

          {/* 13. Newsletter Signup Form */}
          <NewsletterSection />
        </main>

        {/* 14. Footer */}
        <Footer />

        {/* Floating WhatsApp Action */}
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}

