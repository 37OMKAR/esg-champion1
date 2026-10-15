'use client';

import React from 'react';
import { Sparkles, Trophy, Heart, Users, Clock, ArrowRight, Play, Palette, Video, Gamepad2, ShieldAlert } from 'lucide-react';
import { ESG_THEMES } from '../data/mockEntries';

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
  totalEntries: number;
  totalLikes: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  totalEntries,
  totalLikes,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-amber-50/30 to-emerald-50/40 border-b border-orange-100/60 py-12 md:py-16">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-orange-200/25 via-amber-200/20 to-emerald-200/25 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-300/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 -left-12 w-72 h-72 bg-emerald-300/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-orange-200/80 shadow-xs text-xs font-bold text-orange-950">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-extrabold text-[#F37021]">Bank of Baroda</span>
            <span>•</span>
            <span className="text-emerald-700 font-semibold">ESG & Climate Risk Cell Initiative</span>
            <span className="bg-orange-500 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold ml-1">
              Internal Bank Portal
            </span>
          </div>
        </div>

        {/* Main Heading & Tagline */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Young Minds, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] via-amber-500 to-emerald-600">Green Future</span>: BOB ESG Champion 2026
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The exclusive stage for the talented children & teens of <strong className="text-slate-800">Bank of Baroda employees</strong> across all zones. Share creative art & inspiring reels, spread the message on WhatsApp, and learn sustainability!
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('submit')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#F37021] to-amber-600 hover:from-[#d95d12] hover:to-amber-700 text-white font-bold text-base shadow-lg shadow-orange-500/25 active:scale-95 transition-all"
            >
              <Palette className="w-5 h-5" />
              <span>Submit Child’s Entry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('arcade')}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-50/80 font-bold text-base shadow-sm transition-all"
            >
              <Gamepad2 className="w-5 h-5 text-emerald-600" />
              <span>Play Eco Games</span>
            </button>

            <button
              onClick={() => onNavigate('learn')}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-base shadow-sm transition-all"
            >
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Take Eco Quiz</span>
            </button>
          </div>
        </div>

        {/* Live Metrics Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
          
          <div className="glass-panel p-4 rounded-2xl border border-orange-100 text-center shadow-xs">
            <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-xl bg-orange-100 text-orange-600 mb-2">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{totalEntries}</div>
            <div className="text-xs font-semibold text-slate-500">Live Approved Entries</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-pink-100 text-center shadow-xs">
            <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-xl bg-pink-100 text-pink-600 mb-2">
              <Heart className="w-5 h-5 fill-pink-500 text-pink-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{totalLikes}+</div>
            <div className="text-xs font-semibold text-slate-500">Family Encouragements</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-emerald-100 text-center shadow-xs">
            <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-xl bg-emerald-100 text-emerald-600 mb-2">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">12 Zones</div>
            <div className="text-xs font-semibold text-slate-500">Pan-India Participation</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-blue-100 text-center shadow-xs">
            <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-xl bg-blue-100 text-blue-600 mb-2">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">14 Days</div>
            <div className="text-xs font-semibold text-slate-500">Left for Submissions</div>
          </div>
        </div>

        {/* 4 Core Themes Showcase Bar */}
        <div className="mt-10 pt-8 border-t border-orange-100/80">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Official Competition Themes (Choose Any)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ESG_THEMES.map((theme) => (
              <div
                key={theme.id}
                className="bg-white/90 border border-slate-200/80 rounded-2xl p-3.5 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${theme.color} text-white flex items-center justify-center shrink-0 font-bold text-xs`}>
                    ✓
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {theme.label}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                      {theme.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
