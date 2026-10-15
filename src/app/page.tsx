'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { GallerySection } from '../components/GallerySection';
import { EntryModal } from '../components/EntryModal';
import { SubmissionForm } from '../components/SubmissionForm';
import { EsgLearningHub } from '../components/EsgLearningHub';
import { EcoArcade } from '../components/EcoArcade';
import { AdminPortal } from '../components/AdminPortal';
import { Footer } from '../components/Footer';
import { INITIAL_ENTRIES } from '../data/mockEntries';
import { Entry } from '../types';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('gallery');
  const [entries, setEntries] = useState<Entry[]>(INITIAL_ENTRIES);
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Initialize and load persisted entries from localStorage
  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem('BOB_ESG_ENTRIES_V1');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setEntries(parsed);
        }
      } catch (err) {
        console.error('Failed to parse saved entries:', err);
      }
    }

    // Check URL parameters for direct WhatsApp status share links (?entry=id)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const entryId = params.get('entry');
      if (entryId) {
        const found = INITIAL_ENTRIES.find((e) => e.id === entryId);
        if (found) {
          setSelectedEntry(found);
          setActiveTab('gallery');
        }
      }
    }
  }, []);

  // Save entries to localStorage on updates
  const updateEntriesState = (newEntries: Entry[]) => {
    setEntries(newEntries);
    if (typeof window !== 'undefined') {
      localStorage.setItem('BOB_ESG_ENTRIES_V1', JSON.stringify(newEntries));
    }
  };

  // Like / Encourage Entry (Frictionless 1-Tap with heart confetti)
  const handleLikeEntry = (entryId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    const updated = entries.map((entry) => {
      if (entry.id === entryId) {
        const hasLiked = !entry.hasLiked;
        const likes = hasLiked ? entry.likes + 1 : Math.max(0, entry.likes - 1);
        
        if (hasLiked) {
          try {
            confetti({
              particleCount: 40,
              spread: 60,
              origin: { y: 0.7 }
            });
          } catch {}
        }

        return { ...entry, likes, hasLiked };
      }
      return entry;
    });

    updateEntriesState(updated);

    if (selectedEntry && selectedEntry.id === entryId) {
      const current = updated.find((item) => item.id === entryId);
      if (current) setSelectedEntry(current);
    }
  };

  // New Submission
  const handleNewSubmission = (newEntry: Entry) => {
    const updated = [newEntry, ...entries];
    updateEntriesState(updated);
    setActiveTab('gallery');
  };

  // Admin Approve Entry
  const handleApproveEntry = (id: string) => {
    const updated = entries.map((e) => (e.id === id ? { ...e, status: 'approved' as const } : e));
    updateEntriesState(updated);
  };

  // Admin Reject Entry
  const handleRejectEntry = (id: string, reason: string) => {
    const updated = entries.map((e) => (e.id === id ? { ...e, status: 'rejected' as const } : e));
    updateEntriesState(updated);
  };

  // Jury Score Entry
  const handleScoreEntry = (
    id: string,
    score: { creativity: number; esgRelevance: number; presentation: number; remarks: string }
  ) => {
    const total = score.creativity + score.esgRelevance + score.presentation;
    const updated = entries.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          juryScore: {
            ...score,
            total
          }
        };
      }
      return e;
    });
    updateEntriesState(updated);
  };

  const approvedEntries = entries.filter((e) => e.status === 'approved');
  const pendingCount = entries.filter((e) => e.status === 'pending').length;
  const totalLikes = approvedEntries.reduce((acc, curr) => acc + curr.likes, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-orange-500 selection:text-white">
      
      {/* 1. Primary Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        pendingCount={pendingCount}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {activeTab === 'gallery' && (
          <>
            <HeroSection
              onNavigate={(tab) => setActiveTab(tab)}
              totalEntries={approvedEntries.length}
              totalLikes={totalLikes}
            />
            <GallerySection
              entries={entries}
              onSelectEntry={(entry) => setSelectedEntry(entry)}
              onLikeEntry={handleLikeEntry}
              onNavigateSubmit={() => setActiveTab('submit')}
            />
          </>
        )}

        {activeTab === 'submit' && (
          <SubmissionForm
            onSubmitSuccess={handleNewSubmission}
            onCancel={() => setActiveTab('gallery')}
          />
        )}

        {activeTab === 'learn' && <EsgLearningHub />}

        {activeTab === 'arcade' && <EcoArcade />}

        {activeTab === 'admin' && (
          <AdminPortal
            entries={entries}
            onApprove={handleApproveEntry}
            onReject={handleRejectEntry}
            onScoreEntry={handleScoreEntry}
            onSelectEntry={(entry) => setSelectedEntry(entry)}
          />
        )}
      </main>

      {/* 2. Lightbox / Video Reel Modal */}
      {selectedEntry && (
        <EntryModal
          entry={selectedEntry}
          onClose={() => setSelectedEntry(null)}
          onLike={(id) => handleLikeEntry(id)}
        />
      )}

      {/* 3. Footer */}
      <Footer onNavigate={(tab) => setActiveTab(tab)} />

    </div>
  );
}
