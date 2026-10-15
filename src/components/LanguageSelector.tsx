'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageCode } from '../i18n/languages';

interface LanguageSelectorProps {
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ compact = false }) => {
  const { language, setLanguage, currentLanguageInfo, supportedLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 rounded-xl transition-all font-semibold ${
          compact
            ? 'px-3 py-2 text-xs bg-white/90 border border-orange-200 text-slate-800 hover:bg-orange-50 shadow-xs'
            : 'px-3.5 py-2 text-sm bg-white/90 hover:bg-orange-50/80 border border-orange-200/90 text-slate-800 shadow-xs hover:border-orange-300'
        } ${isOpen ? 'ring-2 ring-orange-500/30 border-orange-400 bg-orange-50/50' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select portal language"
      >
        <Globe className="w-4 h-4 text-[#F37021] shrink-0" />
        <span className="font-bold text-slate-900">{currentLanguageInfo.nativeName}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-orange-600' : ''
          }`}
        />
      </button>

      {/* Floating 12-Language Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-orange-100 p-3 z-50 animate-in fade-in zoom-in-95 duration-150 origin-top-right">
          
          {/* Header */}
          <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#F37021]" />
                Select Portal Language (12 Indian Languages)
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Bank of Baroda Multilingual Portal Support
              </p>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              12 Languages
            </span>
          </div>

          {/* 12 Language Grid */}
          <div className="grid grid-cols-2 gap-1.5 mt-2 max-h-[380px] overflow-y-auto pr-1">
            {supportedLanguages.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xs font-bold'
                      : 'hover:bg-orange-50 text-slate-800 hover:text-orange-950 font-medium'
                  }`}
                >
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold truncate">
                        {lang.nativeName}
                      </span>
                      {lang.badge && (
                        <span
                          className={`text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded-full ${
                            isSelected
                              ? 'bg-white/25 text-white'
                              : 'bg-orange-100 text-[#F37021]'
                          }`}
                        >
                          {lang.badge}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-[11px] truncate ${
                        isSelected ? 'text-orange-100' : 'text-slate-500'
                      }`}
                    >
                      {lang.name} • {lang.region}
                    </span>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-white shrink-0 ml-1.5 stroke-[2.5]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Bottom Info note */}
          <div className="mt-2.5 pt-2 border-t border-slate-100 px-2 text-center">
            <span className="text-[10px] text-slate-600 font-medium">
              Headquartered in Vadodara (Gujarat) • Corporate Office in Mumbai (Maharashtra)
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
