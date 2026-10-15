'use client';

import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  Share2, 
  MessageCircle, 
  Copy, 
  Check, 
  MapPin, 
  User, 
  Building2, 
  Sparkles, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Calendar 
} from 'lucide-react';
import { Entry } from '../types';
import { ESG_THEMES } from '../data/mockEntries';

interface EntryModalProps {
  entry: Entry | null;
  onClose: () => void;
  onLike: (entryId: string) => void;
}

export const EntryModal: React.FC<EntryModalProps> = ({ entry, onClose, onLike }) => {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!entry) return null;

  const isReel = entry.category === 'reel';
  const themeObj = ESG_THEMES.find((t) => t.id === entry.theme);

  const getShareUrl = () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://esgchampion.bankofbaroda.com';
    return `${origin}/?entry=${entry.id}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(getShareUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `🌱 *Bank of Baroda ESG Champion 2026*\n\nPlease cheer and encourage my child *${entry.childName}*! They submitted "${entry.title}" in the Bank of Baroda ESG & Climate Risk Cell competition.\n\n👇 *Click to view full entry & hit Like:*\n${getShareUrl()}\n\n#BankOfBaroda #ESGChampion #BarodaKids #Sustainability`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors backdrop-blur-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Media Showcase (Photo or Reel Player) */}
        <div className="md:w-1/2 bg-slate-950 flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
          {isReel ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <video
                src={entry.mediaUrl}
                poster={entry.thumbnailUrl}
                controls
                autoPlay
                loop
                playsInline
                className="w-full h-full max-h-[70vh] object-contain"
              />
              <div className="absolute top-4 left-4 bg-emerald-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>BOB Eco Reel</span>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center p-2">
              <img
                src={entry.mediaUrl}
                alt={entry.title}
                className="w-full h-full max-h-[75vh] object-contain rounded-xl"
              />
              <div className="absolute top-4 left-4 bg-orange-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                <span>BOB Artwork & Poster</span>
              </div>
            </div>
          )}

          {/* Reference Watermark */}
          <div className="absolute bottom-3 left-4 text-[11px] font-mono text-white/70 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
            Ref: {entry.referenceId}
          </div>
        </div>

        {/* Right Side: Details & Social Engagement */}
        <div className="md:w-1/2 p-6 sm:p-7 overflow-y-auto flex flex-col justify-between space-y-5">
          
          <div>
            {/* Theme & Category Header */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {themeObj && (
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-800 border border-orange-200">
                  {themeObj.label}
                </span>
              )}
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                {entry.ageGroup === 'sub-junior' ? 'Sub-Junior (5–9 yrs)' : entry.ageGroup === 'junior' ? 'Junior (10–14 yrs)' : 'Teen (15–18 yrs)'}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {entry.title}
            </h2>

            {/* Child Profile Banner */}
            <div className="mt-4 p-3.5 bg-gradient-to-r from-orange-50/70 to-amber-50/60 rounded-2xl border border-orange-100/90 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-orange-500 text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
                {entry.childName.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">
                  {entry.childName} <span className="text-slate-500 font-semibold text-xs">({entry.childAge} yrs old)</span>
                </div>
                <div className="text-xs text-slate-600 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  <span>{entry.branch} • {entry.zone}</span>
                </div>
              </div>
            </div>

            {/* Child Green Message Quote */}
            <div className="mt-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                My Green Message
              </span>
              <div className="bg-slate-50 border-l-4 border-emerald-500 p-3.5 rounded-r-xl text-slate-700 text-sm italic leading-relaxed">
                &ldquo;{entry.greenMessage}&rdquo;
              </div>
            </div>

            {/* Parent Employee Details (Transparency & Verification) */}
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-500">
              <div className="flex items-center justify-between">
                <span>Employee Parent:</span>
                <span className="font-semibold text-slate-800">{entry.employeeName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Employee EC Number:</span>
                <span className="font-mono font-semibold text-slate-800">{entry.employeeId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Submitted On:</span>
                <span className="font-medium text-slate-700">
                  {new Date(entry.submittedAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>

            {/* Jury Evaluation Remarks (if scored) */}
            {entry.juryScore && (
              <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs">
                <div className="flex items-center justify-between font-bold text-emerald-900 mb-1">
                  <span>BOB ESG Jury Assessment:</span>
                  <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-md text-[11px]">
                    {entry.juryScore.total}/30 Pts
                  </span>
                </div>
                <p className="text-emerald-800 italic">
                  &ldquo;{entry.juryScore.remarks}&rdquo;
                </p>
              </div>
            )}
          </div>

          {/* Social Engagement Actions */}
          <div className="pt-4 border-t border-slate-200/80 space-y-3">
            
            {/* Encouragement Button & Share to WhatsApp */}
            <div className="flex items-center gap-3">
              
              {/* Like Button */}
              <button
                onClick={() => onLike(entry.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm transition-all active:scale-95 ${
                  entry.hasLiked
                    ? 'bg-pink-600 text-white shadow-md shadow-pink-500/25'
                    : 'bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-200'
                }`}
              >
                <Heart className={`w-4 h-4 ${entry.hasLiked ? 'fill-white' : 'text-pink-600'}`} />
                <span>{entry.hasLiked ? 'Encouraged!' : 'Like / Encourage'} ({entry.likes})</span>
              </button>

              {/* WhatsApp Share Button */}
              <button
                onClick={handleWhatsAppShare}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Share to WhatsApp</span>
              </button>
            </div>

            {/* Copy Link Action */}
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Link Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Direct Entry Link for Status</span>
                </>
              )}
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
