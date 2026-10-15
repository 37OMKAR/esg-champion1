'use client';

import React, { useState, useRef } from 'react';
import { 
  Leaf, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  Award, 
  RotateCcw, 
  Download, 
  Printer, 
  Sparkles, 
  Trees, 
  SunMedium, 
  Smartphone, 
  Coins 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ESG_PILLARS, BOB_GREEN_MILESTONES, QUIZ_QUESTIONS } from '../data/esgContent';

import { useLanguage } from '../context/LanguageContext';

export const EsgLearningHub: React.FC = () => {
  const { t } = useLanguage();
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [childCertName, setChildCertName] = useState('');

  const certRef = useRef<HTMLDivElement>(null);

  const activePillar = ESG_PILLARS[activePillarIndex];
  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
    setChildCertName('');
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
          <Leaf className="w-3.5 h-3.5 text-emerald-600" />
          <span>Bank of Baroda • {t.nav.esgCell}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.learn.title}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          {t.learn.subtitle}
        </p>
      </div>

      {/* 2. Interactive E - S - G Pillars Switcher */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        
        {/* Pillar Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {ESG_PILLARS.map((p, idx) => {
            const isActive = activePillarIndex === idx;
            return (
              <button
                key={p.letter}
                onClick={() => setActivePillarIndex(idx)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold bg-gradient-to-br ${p.color} text-white`}>
                  {p.letter}
                </span>
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Content Card */}
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Pillar {activePillar.letter} Explained
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">
              {activePillar.subtitle}
            </h3>
            <p className="text-sm font-semibold text-slate-500">
              {activePillar.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {activePillar.points.map((pt, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {i + 1}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {pt.heading}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-8.5">
                  {pt.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. Bank of Baroda Green Initiatives Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Bank of Baroda in Action</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            How Your Parent’s Bank is Protecting Our Planet
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
            Bank of Baroda’s ESG & Climate Risk Cell leads nationwide initiatives in renewable energy, tree plantation, and paperless digital banking.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {BOB_GREEN_MILESTONES.map((m, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F37021] mb-1">
                {m.stat}
              </div>
              <div className="text-xs font-bold text-white mb-1">
                {m.title}
              </div>
              <div className="text-[11px] text-slate-300">
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Interactive Eco Quiz & Digital Certificate Generator */}
      <div id="eco-quiz" className="bg-gradient-to-b from-orange-50/50 to-amber-50/40 rounded-3xl border border-orange-200/80 p-6 sm:p-10 shadow-sm max-w-3xl mx-auto">
        
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
            Test Your Eco Smartness
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">
            Junior ESG Champion Quiz
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Answer 5 fun questions correctly to earn your downloadable certificate from Bank of Baroda!
          </p>
        </div>

        {!quizFinished ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-xs">
            
            {/* Progress Bar */}
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span>Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</span>
              <span className="text-orange-600">Current Score: {score}</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-orange-500 h-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="pt-2">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-2">
                Pillar: {currentQ.pillar}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {currentQ.question}
              </h4>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = 'border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50/30';
                
                if (selectedOption === idx) {
                  btnStyle = 'border-orange-500 bg-orange-50 text-orange-950 font-bold';
                }

                if (isAnswerSubmitted) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                  } else if (selectedOption === idx) {
                    btnStyle = 'border-red-500 bg-red-50 text-red-950 font-bold';
                  } else {
                    btnStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border-2 text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswerSubmitted && idx === currentQ.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation card after submit */}
            {isAnswerSubmitted && (
              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 animate-in fade-in">
                <strong>Why?</strong> {currentQ.explanation}
              </div>
            )}

            {/* Action buttons */}
            <div className="pt-2 flex justify-end gap-3">
              {!isAnswerSubmitted ? (
                <button
                  disabled={selectedOption === null}
                  onClick={handleSubmitAnswer}
                  className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-40 text-white font-bold text-xs shadow-sm transition-all"
                >
                  Confirm Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
                >
                  {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Results & Certificate'}
                </button>
              )}
            </div>

          </div>
        ) : (
          /* Quiz Results & Certificate Section */
          <div className="space-y-6 animate-in zoom-in-95 duration-200">
            <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">
                Quiz Completed! Score: {score} / {QUIZ_QUESTIONS.length}
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                {score >= 3
                  ? 'Fantastic job! You have demonstrated great awareness of environmental care and sustainable banking.'
                  : 'Good effort! Review the E-S-G tabs above and try again to score a perfect 5/5!'}
              </p>

              {/* Name Input for Certificate */}
              <div className="pt-3 max-w-sm mx-auto">
                <label className="block text-xs font-bold text-slate-700 mb-1 text-left">
                  Enter Child’s Name to print Certificate:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g., Aarav Sharma"
                    value={childCertName}
                    onChange={(e) => setChildCertName(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500/20 focus:outline-hidden"
                  />
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Printable BOB Digital Certificate Card */}
            {childCertName.trim().length > 0 && (
              <div className="space-y-3">
                <div 
                  ref={certRef}
                  className="p-8 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-orange-50 border-8 border-double border-orange-300 shadow-xl text-center space-y-4 relative overflow-hidden"
                >
                  {/* Subtle watermarks */}
                  <div className="absolute top-3 left-4 text-xs font-extrabold text-orange-600/30">
                    BANK OF BARODA
                  </div>
                  <div className="absolute top-3 right-4 text-xs font-extrabold text-emerald-600/30">
                    ESG & CLIMATE RISK CELL
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center font-black text-sm shadow-md">
                      BOB
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-orange-600">
                      Bank of Baroda • ESG & Climate Risk Cell
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Certificate of Green Excellence
                    </h2>
                    <p className="text-xs text-slate-500 italic">
                      This certificate is proudly awarded to:
                    </p>
                  </div>

                  <div className="py-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#F37021] border-b-2 border-orange-400 pb-1 px-6 inline-block">
                      {childCertName}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 max-w-lg mx-auto leading-relaxed">
                    For demonstrating outstanding environmental awareness, scoring in the <strong>Bank of Baroda ESG Champion Quiz 2026</strong>, and pledging to be an active steward for nature, clean energy, and ethical citizenship.
                  </p>

                  <div className="pt-6 border-t border-orange-200/60 flex items-center justify-between text-xs text-slate-600 px-4">
                    <div className="text-left">
                      <div className="font-bold text-slate-900">
                        {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </div>
                      <div className="text-[10px] text-slate-400">Date of Issue</div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border-2 border-dashed border-amber-500 flex items-center justify-center text-amber-600 font-bold text-[9px] uppercase tracking-tighter">
                        BOB SEAL
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-slate-900 font-serif italic">
                        ESG Cell Convenor
                      </div>
                      <div className="text-[10px] text-slate-400">Bank of Baroda</div>
                    </div>
                  </div>
                </div>

                {/* Print button */}
                <div className="flex justify-center">
                  <button
                    onClick={handlePrintCertificate}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print or Save Certificate as PDF</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

    </section>
  );
};
