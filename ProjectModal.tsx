import React from 'react';
import { X, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#020617]/90 backdrop-blur-2xl border border-white/15 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-white/5 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm">
              {project.categoryLabel}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-xs sm:max-w-md">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Project Preview Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 h-56 sm:h-72 bg-slate-950/80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
            
            {project.results && (
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-emerald-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{language === 'bn' ? 'ফলাফল ও স্পেসিফিকেশন:' : 'Verified Spec:'} {project.results}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {language === 'bn' ? 'প্রজেক্ট বিবরণ' : 'Project Overview'}
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {language === 'bn' ? 'ফিচারস ও ডেলিভারেবলস' : 'Key Features & Deliverables'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Framework tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {language === 'bn' ? 'ব্যবহৃত প্রযুক্তি ও ট্যাগ' : 'Tags & Capabilities'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-300 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-white/5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 backdrop-blur-md">
          <span className="text-xs text-slate-400 text-center sm:text-left">
            {language === 'bn' ? 'আপনার বিজনেসের জন্য এরকম প্রজেক্ট চান?' : 'Want a similar solution for your business?'}
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`https://wa.me/8801345386833?text=${encodeURIComponent(language === 'bn' ? `হ্যালো! আমি আপনাদের "${project.title}" প্রজেক্টটি দেখেছি এবং একই রকম সার্ভিস নিতে চাই।` : `Hello! I saw your portfolio project "${project.title}" and would like a similar project.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{language === 'bn' ? 'হোয়াটসঅ্যাপে কথা বলুন' : 'Discuss on WhatsApp'}</span>
            </a>

            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-900/30"
            >
              <span>{language === 'bn' ? 'কোটেশন নিন' : 'Get a Quote'}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
