'use client';

import React from 'react';
import { Leaf, ShieldCheck, Mail, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Initiative */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F37021] to-[#D95D12] text-white flex items-center justify-center font-extrabold text-base shadow-sm">
                BOB
              </div>
              <div>
                <h3 className="font-extrabold text-base tracking-tight text-white">
                  Bank of Baroda
                </h3>
                <p className="text-xs font-semibold text-emerald-400">
                  ESG & Climate Risk Cell Initiative
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              The <strong>BOB Young ESG Champion Portal</strong> fosters climate risk consciousness, environmental responsibility, and creative expression among the children and youth of the Bank of Baroda family.
            </p>

            <div className="text-[11px] text-slate-500 font-mono">
              Internal Circular Ref: HO/ESG-CR/2026/04 • For BOB Staff & Dependents Only
            </div>
          </div>

          {/* Col 2: Navigation Shortcuts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Shortcuts
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-orange-400 transition-colors">
                  🌟 Gallery & Entries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('submit')} className="hover:text-orange-400 transition-colors">
                  🎨 Submit Child’s Entry
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('learn')} className="hover:text-orange-400 transition-colors">
                  📚 ESG Learning Hub & Quiz
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('arcade')} className="hover:text-orange-400 transition-colors">
                  🎮 Eco Sustainability Arcade
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admin')} className="hover:text-orange-400 transition-colors">
                  ⚖️ Committee & Jury Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Secretariat Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              ESG Secretariat Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                <span>Baroda Corporate Centre, C-26, G-Block, BKC, Bandra (E), Mumbai - 400051</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span className="font-mono text-[11px]">esg.cell@bankofbaroda.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Internal Extn: 4421 / 4425</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © 2026 Bank of Baroda. All rights reserved. Environmental, Social & Governance Cell.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
            <span>for the Young Minds of Baroda</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
