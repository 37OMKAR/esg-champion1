'use client';

import React, { useState, useMemo } from 'react';
import { 
  Palette, 
  Video, 
  Heart, 
  Search, 
  MapPin, 
  Sparkles, 
  Check, 
  MessageCircle, 
  SlidersHorizontal 
} from 'lucide-react';
import { Entry, AgeGroup, MediaCategory, ESGTheme } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface GallerySectionProps {
  entries: Entry[];
  onSelectEntry: (entry: Entry) => void;
  onLikeEntry: (entryId: string, e: React.MouseEvent) => void;
  onNavigateSubmit: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  entries,
  onSelectEntry,
  onLikeEntry,
  onNavigateSubmit,
}) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<MediaCategory | 'all'>('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup | 'all'>('all');
  const [selectedTheme, setSelectedTheme] = useState<ESGTheme | 'all'>('all');
  const [sortBy, setSortBy] = useState<'likes' | 'recent'>('likes');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const themeList = [
    { id: 'water' as const, label: t.themes.water_label },
    { id: 'energy' as const, label: t.themes.energy_label },
    { id: 'waste' as const, label: t.themes.waste_label },
    { id: 'green-branch' as const, label: t.themes.green_branch_label },
  ];

  // Filter and sort entries
  const filteredEntries = useMemo(() => {
    return entries
      .filter((entry) => {
        // Only approved entries appear in the public gallery
        if (entry.status !== 'approved') return false;

        if (selectedCategory !== 'all' && entry.category !== selectedCategory) return false;
        if (selectedAgeGroup !== 'all' && entry.ageGroup !== selectedAgeGroup) return false;
        if (selectedTheme !== 'all' && entry.theme !== selectedTheme) return false;

        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchChild = entry.childName.toLowerCase().includes(q);
          const matchTitle = entry.title.toLowerCase().includes(q);
          const matchBranch = entry.branch.toLowerCase().includes(q);
          const matchZone = entry.zone.toLowerCase().includes(q);
          return matchChild || matchTitle || matchBranch || matchZone;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'likes') {
          return b.likes - a.likes;
        }
        return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
      });
  }, [entries, selectedCategory, selectedAgeGroup, selectedTheme, sortBy, searchQuery]);

  // WhatsApp Status Share handler
  const handleWhatsAppShare = (entry: Entry, e: React.MouseEvent) => {
    e.stopPropagation();
    const portalUrl = typeof window !== 'undefined' ? window.location.origin : 'https://esgchampion.bankofbaroda.com';
    const entryUrl = `${portalUrl}/?entry=${entry.id}`;
    
    const text = encodeURIComponent(
      `🌱 *Bank of Baroda ESG Champion 2026*\n\nPlease cheer and encourage my child *${entry.childName}*! They have submitted "${entry.title}" in the Bank of Baroda ESG & Climate Risk Cell competition.\n\n👇 *Click to view and hit Like:*\n${entryUrl}\n\n#BankOfBaroda #ESGChampion #BarodaKids #Sustainability`
    );

    // Open WhatsApp Web or mobile intent
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');

    // Show visual confirmation
    setCopiedId(entry.id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
            <Sparkles className="w-4 h-4" />
            <span>{t.gallery.title}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.gallery.title}
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={t.gallery.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs mb-8 space-y-3.5">
        
        {/* Row 1: Media Category & Sort */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Media Category Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.gallery.allCategories} ({entries.filter(e => e.status === 'approved').length})
            </button>
            <button
              onClick={() => setSelectedCategory('art')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'art'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>{t.gallery.artOnly}</span>
            </button>
            <button
              onClick={() => setSelectedCategory('reel')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'reel'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>{t.gallery.reelsOnly}</span>
            </button>
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 ml-auto">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span>{t.gallery.sortBy}:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'likes' | 'recent')}
              aria-label="Sort entries by"
              className="py-1 px-2.5 rounded-lg border border-slate-200 bg-white font-semibold text-slate-800 text-xs focus:ring-2 focus:ring-orange-500/20 focus:outline-hidden"
            >
              <option value="likes">{t.gallery.mostLiked}</option>
              <option value="recent">{t.gallery.newest}</option>
            </select>
          </div>
        </div>

        {/* Row 2: Age Group & Theme Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          
          <button
            onClick={() => setSelectedAgeGroup('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
              selectedAgeGroup === 'all'
                ? 'bg-slate-800 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.gallery.allAges}
          </button>
          <button
            onClick={() => setSelectedAgeGroup('sub-junior')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
              selectedAgeGroup === 'sub-junior'
                ? 'bg-amber-500 text-white'
                : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
            }`}
          >
            {t.gallery.subJunior}
          </button>
          <button
            onClick={() => setSelectedAgeGroup('junior')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
              selectedAgeGroup === 'junior'
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            {t.gallery.junior}
          </button>
          <button
            onClick={() => setSelectedAgeGroup('teen')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
              selectedAgeGroup === 'teen'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
            }`}
          >
            {t.gallery.teen}
          </button>

          {/* Theme Dropdown */}
          <div className="ml-auto flex items-center gap-1.5">
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value as ESGTheme | 'all')}
              aria-label="Filter entries by theme"
              className="py-1 px-2.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700"
            >
              <option value="all">{t.gallery.allThemes}</option>
              {themeList.map(item => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </div>
        </div>

      </div>

      {/* Grid of Entries */}
      {filteredEntries.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
          <Palette className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-700">{t.gallery.noEntries}</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            {t.gallery.subtitle}
          </p>
          <button
            onClick={onNavigateSubmit}
            className="mt-4 px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 transition-colors"
          >
            {t.nav.submitCta}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map((entry) => {
            const isReel = entry.category === 'reel';
            return (
              <div
                key={entry.id}
                onClick={() => onSelectEntry(entry)}
                className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden cursor-pointer flex flex-col"
              >
                {/* Media Container with Badges */}
                <div className="relative aspect-4/3 w-full bg-slate-900 overflow-hidden">
                  
                  {/* Media Thumbnail */}
                  <img
                    src={entry.thumbnailUrl}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    
                    {/* Category Pill */}
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-sm ${
                      isReel
                        ? 'bg-emerald-600 text-white'
                        : 'bg-orange-500 text-white'
                    }`}>
                      {isReel ? <Video className="w-3 h-3" /> : <Palette className="w-3 h-3" />}
                      <span>{isReel ? 'Eco Reel' : 'Art & Poster'}</span>
                    </span>

                    {/* Age Group Badge */}
                    <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                      Age {entry.childAge} • {entry.ageGroup === 'sub-junior' ? 'Sub-Junior' : entry.ageGroup === 'junior' ? 'Junior' : 'Teen'}
                    </span>
                  </div>

                  {/* Reel Indicator Play Overlay */}
                  {isReel && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-y-6 border-y-transparent border-l-10 border-l-slate-900 ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Reference ID Watermark */}
                  <div className="absolute bottom-2 left-3 text-[10px] font-mono text-white/80 bg-black/50 px-2 py-0.5 rounded">
                    {entry.referenceId}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Branch & Zone Tag */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="truncate">{entry.branch}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
                      {entry.title}
                    </h3>

                    {/* Child's Quote / Message */}
                    <p className="text-xs text-slate-600 italic mt-2 line-clamp-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      &ldquo;{entry.greenMessage}&rdquo;
                    </p>
                  </div>

                  {/* Card Bottom: Child Name & Engagement Actions */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                    
                    <div>
                      <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">
                        Creator
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        {entry.childName}
                      </span>
                    </div>

                    {/* Buttons: Like & WhatsApp Share */}
                    <div className="flex items-center gap-2">
                      
                      {/* WhatsApp Share Button */}
                      <button
                        onClick={(e) => handleWhatsAppShare(entry, e)}
                        title="Share on WhatsApp Status to invite family likes"
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200 transition-colors active:scale-95"
                      >
                        {copiedId === entry.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{t.gallery.copied}</span>
                          </>
                        ) : (
                          <>
                            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{t.gallery.shareWhatsApp}</span>
                          </>
                        )}
                      </button>

                      {/* 1-Tap Like Button */}
                      <button
                        onClick={(e) => onLikeEntry(entry.id, e)}
                        title="Encourage this child"
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                          entry.hasLiked
                            ? 'bg-pink-500 text-white shadow-xs shadow-pink-500/20'
                            : 'bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-200'
                        }`}
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${
                            entry.hasLiked ? 'fill-white text-white animate-heart-pop' : 'text-pink-600'
                          }`}
                        />
                        <span>{entry.likes}</span>
                      </button>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

    </section>
  );
};
