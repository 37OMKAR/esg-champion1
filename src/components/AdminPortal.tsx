'use client';

import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  Check, 
  X, 
  Star, 
  Trophy, 
  AlertCircle, 
  Lock, 
  FileSpreadsheet,
  BarChart3,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  Building2,
  Eye,
  Search,
  Filter,
  Medal,
  Award,
  TrendingUp,
  Download,
  CheckSquare,
  Square,
  ThumbsUp
} from 'lucide-react';
import { Entry, AgeGroup, MediaCategory } from '../types';
import { BOB_ZONES, ESG_THEMES } from '../data/mockEntries';

interface AdminPortalProps {
  entries: Entry[];
  onApprove: (id: string) => void;
  onReject: (id: string, reason: string) => void;
  onScoreEntry: (
    id: string,
    score: { creativity: number; esgRelevance: number; presentation: number; remarks: string }
  ) => void;
  onSelectEntry: (entry: Entry) => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  entries,
  onApprove,
  onReject,
  onScoreEntry,
  onSelectEntry,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  
  // Tab Navigation: 'analytics' | 'moderation' | 'jury' | 'leaderboard' | 'prizes'
  const [activeTab, setActiveTab] = useState<'analytics' | 'moderation' | 'jury' | 'leaderboard' | 'prizes'>('analytics');
  
  // Search & Filters in Moderation & Jury
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZoneFilter, setSelectedZoneFilter] = useState('all');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [selectedAgeFilter, setSelectedAgeFilter] = useState<AgeGroup | 'all'>('all');

  // Bulk Selection in Moderation
  const [selectedEntryIds, setSelectedEntryIds] = useState<string[]>([]);

  // Scoring Modal State
  const [scoringEntry, setScoringEntry] = useState<Entry | null>(null);
  const [creativityScore, setCreativityScore] = useState<number>(8);
  const [esgScore, setEsgScore] = useState<number>(8);
  const [presentationScore, setPresentationScore] = useState<number>(8);
  const [juryRemarks, setJuryRemarks] = useState<string>('');

  // Rejection Dialog State
  const [rejectId, setRejectId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState<string>('');

  // Authentication check
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === 'BOB-ESG-2026' || pinInput.trim() === '1234') {
      setIsAuthenticated(true);
      setPinError('');
    } else {
      setPinError('Invalid Passcode. Enter BOB-ESG-2026 or 1234 for demo access.');
    }
  };

  // Bulk Approve / Reject
  const handleBulkApprove = () => {
    selectedEntryIds.forEach((id) => onApprove(id));
    setSelectedEntryIds([]);
  };

  const toggleSelectEntry = (id: string) => {
    setSelectedEntryIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = (filteredList: Entry[]) => {
    if (selectedEntryIds.length === filteredList.length) {
      setSelectedEntryIds([]);
    } else {
      setSelectedEntryIds(filteredList.map((e) => e.id));
    }
  };

  // CSV Exporter
  const handleExportCSV = () => {
    const headers = [
      'Reference ID',
      'Child Name',
      'Child Age',
      'Age Group',
      'Category',
      'Theme',
      'Title',
      'Employee Parent',
      'Employee EC Number',
      'Employee Email',
      'Employee Phone',
      'Zone',
      'Branch',
      'Status',
      'Public Likes',
      'Jury Total Score (out of 30)',
      'Jury Remarks',
      'Submitted At'
    ];

    const rows = entries.map((e) => [
      `"${e.referenceId}"`,
      `"${e.childName}"`,
      e.childAge,
      `"${e.ageGroup}"`,
      `"${e.category}"`,
      `"${e.theme}"`,
      `"${e.title.replace(/"/g, '""')}"`,
      `"${e.employeeName}"`,
      `"${e.employeeId}"`,
      `"${e.employeeEmail}"`,
      `"${e.employeePhone}"`,
      `"${e.zone}"`,
      `"${e.branch}"`,
      `"${e.status}"`,
      e.likes,
      e.juryScore?.total || 0,
      `"${(e.juryScore?.remarks || '').replace(/"/g, '""')}"`,
      `"${e.submittedAt}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `BOB_ESG_Champion_Complete_Report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered lists
  const pendingEntries = useMemo(() => {
    return entries.filter((e) => {
      if (e.status !== 'pending') return false;
      if (selectedZoneFilter !== 'all' && e.zone !== selectedZoneFilter) return false;
      if (selectedCategoryFilter !== 'all' && e.category !== selectedCategoryFilter) return false;
      if (selectedAgeFilter !== 'all' && e.ageGroup !== selectedAgeFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          e.childName.toLowerCase().includes(q) ||
          e.title.toLowerCase().includes(q) ||
          e.employeeId.toLowerCase().includes(q) ||
          e.branch.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [entries, selectedZoneFilter, selectedCategoryFilter, selectedAgeFilter, searchQuery]);

  const approvedEntries = useMemo(() => {
    return entries.filter((e) => {
      if (e.status !== 'approved') return false;
      if (selectedZoneFilter !== 'all' && e.zone !== selectedZoneFilter) return false;
      if (selectedCategoryFilter !== 'all' && e.category !== selectedCategoryFilter) return false;
      if (selectedAgeFilter !== 'all' && e.ageGroup !== selectedAgeFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          e.childName.toLowerCase().includes(q) ||
          e.title.toLowerCase().includes(q) ||
          e.employeeId.toLowerCase().includes(q) ||
          e.branch.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [entries, selectedZoneFilter, selectedCategoryFilter, selectedAgeFilter, searchQuery]);

  // Analytics Computations
  const totalSubmissions = entries.length;
  const approvedCount = entries.filter((e) => e.status === 'approved').length;
  const pendingCount = entries.filter((e) => e.status === 'pending').length;
  const totalLikes = entries.reduce((acc, curr) => acc + curr.likes, 0);
  const scoredCount = entries.filter((e) => !!e.juryScore).length;
  const evaluationProgress = approvedCount > 0 ? Math.round((scoredCount / approvedCount) * 100) : 0;

  // Zone Breakdown
  const zoneStats = useMemo(() => {
    return BOB_ZONES.map((zoneName) => {
      const zoneEntries = entries.filter((e) => e.zone.includes(zoneName) || zoneName.includes(e.zone));
      const zoneLikes = zoneEntries.reduce((acc, curr) => acc + curr.likes, 0);
      return {
        zone: zoneName,
        count: zoneEntries.length,
        likes: zoneLikes,
        avgScore: zoneEntries.filter(e => !!e.juryScore).length > 0 
          ? (zoneEntries.filter(e => !!e.juryScore).reduce((a, c) => a + (c.juryScore?.total || 0), 0) / zoneEntries.filter(e => !!e.juryScore).length).toFixed(1)
          : 'N/A'
      };
    }).sort((a, b) => b.count - a.count);
  }, [entries]);

  // Theme Breakdown
  const themeStats = useMemo(() => {
    return ESG_THEMES.map((theme) => {
      const count = entries.filter((e) => e.theme === theme.id).length;
      return {
        label: theme.label,
        count,
        pct: totalSubmissions > 0 ? Math.round((count / totalSubmissions) * 100) : 0
      };
    });
  }, [entries, totalSubmissions]);

  // Submit Jury Score
  const handleSaveScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scoringEntry) return;

    onScoreEntry(scoringEntry.id, {
      creativity: creativityScore,
      esgRelevance: esgScore,
      presentation: presentationScore,
      remarks: juryRemarks
    });

    setScoringEntry(null);
    setJuryRemarks('');
  };

  // Quick Preset Remarks
  const presetRemarks = [
    'Exceptional conceptual connection to green banking & climate resilience.',
    'Vibrant creativity and heartwarming child storytelling!',
    'Practical, highly actionable waste-reduction routine.',
    'Impressive technical execution and clear presentation for this age group.',
    'Inspiring community message for Bank of Baroda branches.'
  ];

  // Login Gate View
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto shadow-inner">
            <Lock className="w-7 h-7" />
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block mb-1">
              ESG & Climate Risk Cell
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Committee & Jury Dashboard
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Authorized Baroda Secretariat Access for Executive Analytics, Moderation & Official Jury Scoring
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 text-left">
                Security Passcode
              </label>
              <input
                type="password"
                placeholder="Enter Passcode (e.g. BOB-ESG-2026)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-orange-500/20 focus:outline-hidden text-center tracking-widest font-mono"
              />
            </div>

            {pinError && (
              <div className="text-xs text-red-600 font-semibold">{pinError}</div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#F37021] to-amber-600 hover:from-[#d95d12] hover:to-amber-700 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all"
            >
              Sign In to Committee Dashboard
            </button>

            <button
              type="button"
              onClick={() => {
                setPinInput('BOB-ESG-2026');
                setIsAuthenticated(true);
              }}
              className="text-xs text-orange-600 hover:underline font-semibold block mx-auto pt-2"
            >
              Click for Quick Demo Access (BOB-ESG-2026)
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Executive Command Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Bank of Baroda Executive ESG Cell Workspace</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              BOB ESG Champion Committee Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Real-time monitoring of nationwide employee participation, live moderation queue, multi-criteria jury evaluations, and zone performance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export Full Report (CSV)</span>
            </button>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
            >
              Lock Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Primary Dashboard Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('analytics')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'analytics'
              ? 'bg-[#F37021] text-white shadow-md shadow-orange-500/20'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Executive Analytics</span>
        </button>

        <button
          onClick={() => setActiveTab('moderation')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'moderation'
              ? 'bg-[#F37021] text-white shadow-md shadow-orange-500/20'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Moderation Queue</span>
          <span className="w-5 h-5 rounded-full bg-orange-600 text-white text-[11px] font-bold flex items-center justify-center">
            {pendingEntries.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('jury')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'jury'
              ? 'bg-[#F37021] text-white shadow-md shadow-orange-500/20'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Star className="w-4 h-4" />
          <span>Jury Scoring Workspace</span>
          <span className="text-xs text-slate-400">({approvedEntries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'leaderboard'
              ? 'bg-[#F37021] text-white shadow-md shadow-orange-500/20'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Official Leaderboard</span>
        </button>

        <button
          onClick={() => setActiveTab('prizes')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'prizes'
              ? 'bg-[#F37021] text-white shadow-md shadow-orange-500/20'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Prize & Certificate Allocation</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: EXECUTIVE ANALYTICS
          ========================================================================= */}
      {activeTab === 'analytics' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Top KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>Total Submissions</span>
                <Users className="w-4 h-4 text-orange-500" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900">{totalSubmissions}</div>
              <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{approvedCount} Live Approved</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>Pending Moderation</span>
                <Clock className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-3xl font-extrabold text-amber-600">{pendingCount}</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                Awaiting ESG cell review
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>Public Encouragements</span>
                <ThumbsUp className="w-4 h-4 text-pink-500" />
              </div>
              <div className="text-3xl font-extrabold text-pink-600">{totalLikes}</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                Family WhatsApp Status buzz
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>Jury Progress</span>
                <Star className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="text-3xl font-extrabold text-emerald-600">{evaluationProgress}%</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                {scoredCount} of {approvedCount} evaluated
              </div>
            </div>

          </div>

          {/* 2-Column Analytics: Zone Breakdown & Theme Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Zone-Wise Participation Breakdown (2 cols) */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>Zone-Wise Participation & Engagement Index</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Monitoring submission volume and committee scores across 12 Bank of Baroda zones.
                  </p>
                </div>
                <span className="text-xs font-bold bg-orange-50 text-orange-800 px-2.5 py-1 rounded-full border border-orange-200">
                  All 12 Zones Active
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                      <th className="py-2.5 px-3">Bank Zone</th>
                      <th className="py-2.5 px-3">Submissions</th>
                      <th className="py-2.5 px-3">Public Likes</th>
                      <th className="py-2.5 px-3">Avg Jury Score</th>
                      <th className="py-2.5 px-3">Participation Volume</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {zoneStats.map((z, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-3 font-bold text-slate-900 flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>{z.zone}</span>
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-700">
                          {z.count}
                        </td>
                        <td className="py-3 px-3 text-pink-600 font-bold">
                          ❤️ {z.likes}
                        </td>
                        <td className="py-3 px-3 font-semibold text-emerald-700">
                          {z.avgScore !== 'N/A' ? `${z.avgScore} / 30` : '—'}
                        </td>
                        <td className="py-3 px-3 w-40">
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-orange-500 h-full rounded-full"
                              style={{ width: `${Math.min(100, (z.count / Math.max(1, totalSubmissions)) * 100 * 2.5)}%` }}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Theme & Category Breakdown (1 col) */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-6">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span>Theme Popularity</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Distribution of submissions across core ESG pillars.
                </p>

                <div className="space-y-3.5 mt-4">
                  {themeStats.map((t, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-700 truncate max-w-[190px]">{t.label}</span>
                        <span className="text-orange-600 font-bold">{t.count} ({t.pct}%)</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full"
                          style={{ width: `${t.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Age Group & Media Ratio */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Media & Age Group Split
                </h4>
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                    <div className="font-extrabold text-lg text-orange-600">
                      {entries.filter(e => e.category === 'art').length}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600">Art & Posters</div>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div className="font-extrabold text-lg text-emerald-600">
                      {entries.filter(e => e.category === 'reel').length}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600">Eco Reels (Video)</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* =========================================================================
          TAB 2: MODERATION QUEUE (With Bulk Actions & Filtering)
          ========================================================================= */}
      {activeTab === 'moderation' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          
          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
            
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search child, EC No, branch..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500/20 focus:outline-hidden"
                />
              </div>

              <select
                value={selectedZoneFilter}
                onChange={(e) => setSelectedZoneFilter(e.target.value)}
                aria-label="Filter moderation entries by zone"
                className="py-1.5 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white"
              >
                <option value="all">All Zones</option>
                {BOB_ZONES.map((z) => (
                  <option key={z} value={z}>{z}</option>
                ))}
              </select>

              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                aria-label="Filter moderation entries by category"
                className="py-1.5 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white"
              >
                <option value="all">All Categories</option>
                <option value="art">Art & Posters</option>
                <option value="reel">Eco Reels (Video)</option>
              </select>
            </div>

            {/* Bulk Action Buttons */}
            {selectedEntryIds.length > 0 && (
              <div className="flex items-center gap-2 animate-in fade-in">
                <span className="text-xs font-bold text-slate-600">
                  {selectedEntryIds.length} Selected
                </span>
                <button
                  onClick={handleBulkApprove}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Approve Selected</span>
                </button>
              </div>
            )}

          </div>

          {/* Queue List */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleSelectAll(pendingEntries)}
                  className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900"
                >
                  {selectedEntryIds.length === pendingEntries.length && pendingEntries.length > 0 ? (
                    <CheckSquare className="w-4 h-4 text-orange-500" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-400" />
                  )}
                  <span>Select All ({pendingEntries.length})</span>
                </button>
              </div>
              <span>Status: Awaiting Verification</span>
            </div>

            {pendingEntries.length === 0 ? (
              <div className="text-center py-16 text-slate-400">
                <Check className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
                <div className="text-sm font-bold text-slate-700">Moderation Queue Clear!</div>
                <p className="text-xs text-slate-500">All submitted entries have been verified.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {pendingEntries.map((entry) => {
                  const isChecked = selectedEntryIds.includes(entry.id);
                  return (
                    <div key={entry.id} className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                      <div className="flex items-start gap-3.5">
                        <button
                          onClick={() => toggleSelectEntry(entry.id)}
                          className="mt-1 text-slate-400 hover:text-orange-500"
                        >
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-orange-500" />
                          ) : (
                            <Square className="w-4 h-4" />
                          )}
                        </button>

                        <img
                          src={entry.thumbnailUrl}
                          alt={entry.title}
                          className="w-20 h-16 object-cover rounded-xl border border-slate-200 shrink-0 cursor-pointer"
                          onClick={() => onSelectEntry(entry)}
                        />

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">
                              {entry.referenceId}
                            </span>
                            <span className="text-xs font-bold text-orange-600 capitalize">
                              {entry.category} • {entry.ageGroup}
                            </span>
                            <span className="text-xs text-slate-400">•</span>
                            <span className="text-xs font-semibold text-slate-600">
                              {entry.zone}
                            </span>
                          </div>

                          <h4 className="font-bold text-slate-900 text-sm">{entry.title}</h4>
                          <div className="text-xs text-slate-500 mt-0.5">
                            Child: <strong>{entry.childName}</strong> (Age {entry.childAge}) | Parent: <strong>{entry.employeeName}</strong> (EC: {entry.employeeId}) | {entry.branch}
                          </div>
                          <p className="text-xs text-slate-600 italic mt-1 line-clamp-1">
                            &ldquo;{entry.greenMessage}&rdquo;
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end">
                        <button
                          onClick={() => onSelectEntry(entry)}
                          className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold"
                          title="Inspect full artwork / video"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => setRejectId(entry.id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold"
                        >
                          <X className="w-4 h-4" />
                          <span>Reject</span>
                        </button>

                        <button
                          onClick={() => onApprove(entry.id)}
                          className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs active:scale-95"
                        >
                          <Check className="w-4 h-4" />
                          <span>Approve Entry</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>
      )}

      {/* =========================================================================
          TAB 3: JURY SCORING WORKSPACE
          ========================================================================= */}
      {activeTab === 'jury' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          
          {/* Quick Filters */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedAgeFilter}
                onChange={(e) => setSelectedAgeFilter(e.target.value as AgeGroup | 'all')}
                aria-label="Filter jury entries by age group"
                className="py-1.5 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white"
              >
                <option value="all">All Age Groups</option>
                <option value="sub-junior">Sub-Juniors (5–9 yrs)</option>
                <option value="junior">Juniors (10–14 yrs)</option>
                <option value="teen">Teens (15–18 yrs)</option>
              </select>

              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                aria-label="Filter jury entries by category"
                className="py-1.5 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white"
              >
                <option value="all">All Categories</option>
                <option value="art">Art & Posters</option>
                <option value="reel">Eco Reels (Video)</option>
              </select>
            </div>

            <div className="text-xs text-slate-500 font-semibold">
              Scored on 3 Pillars: Creativity (10), ESG Relevance (10), Presentation (10)
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
            {approvedEntries.map((entry) => (
              <div key={entry.id} className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                <div className="flex items-start gap-4">
                  <img
                    src={entry.thumbnailUrl}
                    alt={entry.title}
                    className="w-20 h-16 object-cover rounded-xl border border-slate-200 shrink-0 cursor-pointer"
                    onClick={() => onSelectEntry(entry)}
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-slate-900">{entry.childName}</span>
                      <span className="text-xs text-slate-500">({entry.childAge} yrs, {entry.ageGroup})</span>
                      <span className="text-[11px] bg-pink-50 text-pink-700 font-bold px-2 py-0.5 rounded-full border border-pink-100">
                        ❤️ {entry.likes} Likes
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm">{entry.title}</h4>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {entry.branch} • {entry.zone}
                    </div>

                    {entry.juryScore ? (
                      <div className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                        <span>Score: {entry.juryScore.total} / 30 Pts</span>
                        <span className="text-slate-400">|</span>
                        <span className="font-normal italic">&ldquo;{entry.juryScore.remarks}&rdquo;</span>
                      </div>
                    ) : (
                      <div className="mt-1.5 text-xs text-amber-600 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Pending Evaluation by Jury Committee</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2 w-full md:w-auto justify-end">
                  <button
                    onClick={() => {
                      setScoringEntry(entry);
                      setCreativityScore(entry.juryScore?.creativity || 8);
                      setEsgScore(entry.juryScore?.esgRelevance || 8);
                      setPresentationScore(entry.juryScore?.presentation || 8);
                      setJuryRemarks(entry.juryScore?.remarks || '');
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-sm active:scale-95 transition-all"
                  >
                    <Star className="w-3.5 h-3.5" />
                    <span>{entry.juryScore ? 'Edit Score' : 'Score Entry'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* =========================================================================
          TAB 4: OFFICIAL LEADERBOARD
          ========================================================================= */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs text-amber-900 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-600 shrink-0" />
            <span>
              <strong>Bank of Baroda Policy Note:</strong> Official competition winners are ranked purely on the Bank of Baroda Jury Committee score out of 30. Public likes serve as encouraging community participation.
            </span>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
            {approvedEntries
              .filter((e) => !!e.juryScore)
              .sort((a, b) => (b.juryScore?.total || 0) - (a.juryScore?.total || 0))
              .map((entry, idx) => (
                <div key={entry.id} className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm shrink-0 ${
                      idx === 0
                        ? 'bg-amber-400 text-white shadow-md'
                        : idx === 1
                        ? 'bg-slate-300 text-slate-800'
                        : idx === 2
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      #{idx + 1}
                    </div>

                    <img
                      src={entry.thumbnailUrl}
                      alt={entry.title}
                      className="w-14 h-12 rounded-lg object-cover border border-slate-200"
                    />

                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        {entry.childName} <span className="text-xs text-slate-500 font-semibold">({entry.childAge} yrs, {entry.branch})</span>
                      </div>
                      <div className="text-xs text-slate-600">{entry.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        EC: {entry.employeeId} • {entry.zone}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-base font-extrabold text-emerald-700">
                      {entry.juryScore?.total} / 30 Pts
                    </div>
                    <div className="text-[11px] text-slate-400">
                      ❤️ {entry.likes} community likes
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      )}

      {/* =========================================================================
          TAB 5: PRIZE & CERTIFICATE ALLOCATION
          ========================================================================= */}
      {activeTab === 'prizes' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-xs text-emerald-900 flex items-center gap-3">
            <Award className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>Prize Allocation Workspace:</strong> Assign Gold, Silver, and Bronze trophies along with regional Zone Champion awards for official bank dispatch.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Sub-Junior Winners */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-extrabold text-slate-900 text-sm">
                  🌱 Sub-Juniors (5–9 yrs)
                </span>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                  Top 3 Rankers
                </span>
              </div>

              {approvedEntries
                .filter((e) => e.ageGroup === 'sub-junior' && !!e.juryScore)
                .sort((a, b) => (b.juryScore?.total || 0) - (a.juryScore?.total || 0))
                .slice(0, 3)
                .map((entry, idx) => (
                  <div key={entry.id} className="p-3 bg-slate-50 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-xs">
                        {idx === 0 ? '🥇 Gold: ' : idx === 1 ? '🥈 Silver: ' : '🥉 Bronze: '}
                        {entry.childName}
                      </div>
                      <div className="text-[11px] text-slate-500">{entry.branch}</div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700">
                      {entry.juryScore?.total}/30
                    </span>
                  </div>
                ))}
            </div>

            {/* Junior Winners */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-extrabold text-slate-900 text-sm">
                  🌿 Juniors (10–14 yrs)
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Top 3 Rankers
                </span>
              </div>

              {approvedEntries
                .filter((e) => e.ageGroup === 'junior' && !!e.juryScore)
                .sort((a, b) => (b.juryScore?.total || 0) - (a.juryScore?.total || 0))
                .slice(0, 3)
                .map((entry, idx) => (
                  <div key={entry.id} className="p-3 bg-slate-50 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-xs">
                        {idx === 0 ? '🥇 Gold: ' : idx === 1 ? '🥈 Silver: ' : '🥉 Bronze: '}
                        {entry.childName}
                      </div>
                      <div className="text-[11px] text-slate-500">{entry.branch}</div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700">
                      {entry.juryScore?.total}/30
                    </span>
                  </div>
                ))}
            </div>

            {/* Teen Winners */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-extrabold text-slate-900 text-sm">
                  🌳 Teens (15–18 yrs)
                </span>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  Top 3 Rankers
                </span>
              </div>

              {approvedEntries
                .filter((e) => e.ageGroup === 'teen' && !!e.juryScore)
                .sort((a, b) => (b.juryScore?.total || 0) - (a.juryScore?.total || 0))
                .slice(0, 3)
                .map((entry, idx) => (
                  <div key={entry.id} className="p-3 bg-slate-50 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-xs">
                        {idx === 0 ? '🥇 Gold: ' : idx === 1 ? '🥈 Silver: ' : '🥉 Bronze: '}
                        {entry.childName}
                      </div>
                      <div className="text-[11px] text-slate-500">{entry.branch}</div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700">
                      {entry.juryScore?.total}/30
                    </span>
                  </div>
                ))}
            </div>

          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs shadow-md hover:from-emerald-700 hover:to-teal-700 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Prize Distribution Manifest (CSV)</span>
            </button>
          </div>

        </div>
      )}

      {/* Jury Scoring Modal */}
      {scoringEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 border border-slate-100 shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Bank of Baroda Jury Evaluation
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                  {scoringEntry.title}
                </h3>
                <p className="text-xs text-slate-500">
                  By {scoringEntry.childName} (Age {scoringEntry.childAge}) • {scoringEntry.branch}
                </p>
              </div>
              <button
                onClick={() => setScoringEntry(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveScore} className="space-y-4">
              
              {/* Creativity Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-700">1. Originality & Artistic Creativity</span>
                  <span className="text-orange-600">{creativityScore} / 10 Pts</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={creativityScore}
                  onChange={(e) => setCreativityScore(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
              </div>

              {/* ESG Relevance Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-700">2. Climate Risk & ESG Relevance</span>
                  <span className="text-emerald-600">{esgScore} / 10 Pts</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={esgScore}
                  onChange={(e) => setEsgScore(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>

              {/* Presentation Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-700">3. Presentation & Effort</span>
                  <span className="text-blue-600">{presentationScore} / 10 Pts</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={presentationScore}
                  onChange={(e) => setPresentationScore(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              {/* Total Display */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between font-extrabold text-sm">
                <span>Total Score:</span>
                <span className="text-lg text-emerald-700">
                  {creativityScore + esgScore + presentationScore} / 30 Pts
                </span>
              </div>

              {/* Preset Remarks Quick Buttons */}
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">
                  Quick Preset Remarks:
                </label>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {presetRemarks.map((pr, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setJuryRemarks(pr)}
                      className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-1 rounded-md text-left truncate max-w-xs"
                    >
                      {pr}
                    </button>
                  ))}
                </div>

                <textarea
                  rows={2}
                  placeholder="Custom jury feedback..."
                  value={juryRemarks}
                  onChange={(e) => setJuryRemarks(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500/20 focus:outline-hidden"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setScoringEntry(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm"
                >
                  Save Assessment
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {rejectId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 border border-slate-100 shadow-xl">
            <h3 className="font-extrabold text-slate-900 text-lg">Reject Entry</h3>
            <p className="text-xs text-slate-500">
              Please provide a reason for the Bank of Baroda employee parent.
            </p>
            <textarea
              rows={3}
              placeholder="e.g. Ineligible media format, non-employee EC number, duplicate entry..."
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-red-500/20 focus:outline-hidden"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setRejectId(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onReject(rejectId, rejectReason);
                  setRejectId(null);
                  setRejectReason('');
                }}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-sm"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
