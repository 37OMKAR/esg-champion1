'use client';

import React, { useState } from 'react';
import { 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Palette, 
  Video, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Leaf,
  ShieldCheck,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Entry, AgeGroup, MediaCategory, ESGTheme } from '../types';
import { ESG_THEMES, BOB_ZONES } from '../data/mockEntries';

interface SubmissionFormProps {
  onSubmitSuccess: (newEntry: Entry) => void;
  onCancel: () => void;
}

export const SubmissionForm: React.FC<SubmissionFormProps> = ({ onSubmitSuccess, onCancel }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeePhone, setEmployeePhone] = useState('');
  const [zone, setZone] = useState(BOB_ZONES[0]);
  const [branch, setBranch] = useState('');

  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState<number>(9);
  const [category, setCategory] = useState<MediaCategory>('art');
  const [theme, setTheme] = useState<ESGTheme>('water');
  const [title, setTitle] = useState('');
  const [greenMessage, setGreenMessage] = useState('');

  // Media upload state
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [uploadError, setUploadError] = useState<string>('');
  const [pledgeChecked, setPledgeChecked] = useState(true);

  // Auto-calculated age group
  const calculatedAgeGroup: AgeGroup = 
    childAge <= 9 ? 'sub-junior' : childAge <= 14 ? 'junior' : 'teen';

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError('');
    const file = e.target.files?.[0];
    if (!file) return;

    if (category === 'art') {
      if (!file.type.startsWith('image/')) {
        setUploadError('Please select a valid image file (JPG, PNG, WEBP) for Art submission.');
        return;
      }
      if (file.size > 15 * 1024 * 1024) {
        setUploadError('Artwork image size must be under 15MB.');
        return;
      }
    } else {
      if (!file.type.startsWith('video/')) {
        setUploadError('Please select a valid video file (MP4, MOV, WEBM) for Eco Reel submission.');
        return;
      }
      if (file.size > 50 * 1024 * 1024) {
        setUploadError('Video reel size must be under 50MB (max 60 seconds).');
        return;
      }
    }

    setMediaFile(file);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };

  // Step Validation
  const canProceedStep1 = 
    employeeName.trim().length >= 2 &&
    employeeId.trim().length >= 4 &&
    employeeEmail.trim().includes('@') &&
    branch.trim().length >= 2;

  const canProceedStep2 = 
    childName.trim().length >= 2 &&
    title.trim().length >= 3 &&
    greenMessage.trim().length >= 5;

  const canProceedStep3 = !!mediaFile || previewUrl.length > 0;

  // Final Submission Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const refId = `BOB-ESG-2026-${randomSuffix}`;

    const newEntry: Entry = {
      id: `entry-${Date.now()}`,
      referenceId: refId,
      title,
      childName,
      childAge,
      ageGroup: calculatedAgeGroup,
      category,
      theme,
      greenMessage,
      mediaUrl: previewUrl || 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1000',
      thumbnailUrl: previewUrl || 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500',
      employeeName,
      employeeId: employeeId.toUpperCase(),
      employeeEmail,
      employeePhone,
      zone,
      branch,
      status: 'pending', // Requires admin review
      likes: 0,
      submittedAt: new Date().toISOString()
    };

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}

    onSubmitSuccess(newEntry);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
      
      {/* Container Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        
        {/* Card Header with Progress */}
        <div className="bg-gradient-to-r from-[#F37021] to-amber-500 p-6 sm:p-8 text-white relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-black/20 px-3 py-1 rounded-full backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>BOB ESG Champion 2026 Submission</span>
            </div>
            <button
              onClick={onCancel}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Submit Your Child’s Art or Reel
          </h2>
          <p className="text-white/90 text-sm mt-1 max-w-xl">
            For the proud children of Bank of Baroda employees. All entries undergo ESG Cell review before going live!
          </p>

          {/* Stepper Dots */}
          <div className="flex items-center gap-2 mt-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex-1 flex items-center">
                <div
                  className={`h-2 w-full rounded-full transition-all duration-300 ${
                    currentStep >= step ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[11px] font-bold text-white/90 mt-2">
            <span>1. Employee Details</span>
            <span>2. Child Details</span>
            <span>3. Upload Media</span>
            <span>4. Review & Pledge</span>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          
          {/* STEP 1: Employee Verification */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-orange-500" />
                  <span>Step 1: Bank of Baroda Employee Details</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Verifies participation is exclusive to Bank of Baroda family members.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Employee Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Rajesh Sharma"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Employee ID (EC Number) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., EC98214"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-mono focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden uppercase"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Official Bank Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@bankofbaroda.com"
                    value={employeeEmail}
                    onChange={(e) => setEmployeeEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Mobile Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98201 12345"
                    value={employeePhone}
                    onChange={(e) => setEmployeePhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Zone / Region *
                  </label>
                  <select
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden"
                  >
                    {BOB_ZONES.map((z) => (
                      <option key={z} value={z}>{z}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Branch Name & Code *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Alkapuri Branch, Vadodara"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  disabled={!canProceedStep1}
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold text-sm transition-all shadow-sm"
                >
                  <span>Next: Child & Entry Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Child Details & Theme */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Palette className="w-5 h-5 text-orange-500" />
                  <span>Step 2: Child Information & Competition Theme</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Select whether you are submitting an Art piece or an Eco Reel.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Child Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Aarav Sharma"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-slate-700">
                      Child Age (5–18) *
                    </label>
                    <span className="text-[11px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                      Category: {calculatedAgeGroup === 'sub-junior' ? 'Sub-Junior (5–9 yrs)' : calculatedAgeGroup === 'junior' ? 'Junior (10–14 yrs)' : 'Teen (15–18 yrs)'}
                    </span>
                  </div>
                  <input
                    type="number"
                    min={5}
                    max={18}
                    required
                    value={childAge}
                    onChange={(e) => setChildAge(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Media Category Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Submission Category *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setCategory('art')}
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                      category === 'art'
                        ? 'border-orange-500 bg-orange-50/60 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Art & Poster</div>
                      <div className="text-xs text-slate-500">Drawings, Paintings, Crafts (max 15MB)</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setCategory('reel')}
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                      category === 'reel'
                        ? 'border-emerald-600 bg-emerald-50/60 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Eco Reel (Video)</div>
                      <div className="text-xs text-slate-500">Up to 60 seconds (max 50MB)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Theme Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Core ESG Theme *
                </label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as ESGTheme)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden"
                >
                  {ESG_THEMES.map((t) => (
                    <option key={t.id} value={t.id}>{t.label}</option>
                  ))}
                </select>
              </div>

              {/* Title & Child Quote */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Entry Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., The Blue Drop: Nature's Most Precious Currency"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Child’s &ldquo;Green Message&rdquo; (in child’s own words) *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g., Why did your child make this? What eco-friendly message do they want to give to the Bank of Baroda family?"
                  value={greenMessage}
                  onChange={(e) => setGreenMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden"
                />
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  disabled={!canProceedStep2}
                  onClick={() => setCurrentStep(3)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold text-sm transition-all shadow-sm"
                >
                  <span>Next: Upload Media</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Media Upload */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Upload className="w-5 h-5 text-orange-500" />
                  <span>Step 3: Upload {category === 'art' ? 'Artwork Photo' : 'Eco Reel Video'}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Secure local & cloud buffer-free streaming ready.
                </p>
              </div>

              {/* Upload Dropzone */}
              <div className="border-2 border-dashed border-slate-300 rounded-3xl p-6 sm:p-8 text-center bg-slate-50 hover:bg-orange-50/30 transition-colors relative">
                <input
                  type="file"
                  id="media-file-input"
                  accept={category === 'art' ? 'image/jpeg,image/png,image/webp' : 'video/mp4,video/quicktime,video/webm'}
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                <div className="flex flex-col items-center pointer-events-none">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                    <Upload className="w-7 h-7" />
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    Click or Drag & Drop your {category === 'art' ? 'artwork picture' : 'reel video'} here
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {category === 'art'
                      ? 'Supported formats: JPG, PNG, WEBP (Max 15MB)'
                      : 'Supported formats: MP4, MOV, WEBM (Max 50MB, up to 60 seconds)'}
                  </div>
                </div>
              </div>

              {uploadError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{uploadError}</span>
                </div>
              )}

              {/* Live Preview */}
              {previewUrl && (
                <div className="mt-4 p-4 bg-slate-100 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Live Client Preview:
                  </div>
                  {category === 'art' ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-h-64 mx-auto rounded-xl shadow-md object-contain"
                    />
                  ) : (
                    <video
                      src={previewUrl}
                      controls
                      className="max-h-64 mx-auto rounded-xl shadow-md"
                    />
                  )}
                  <div className="text-center mt-2 text-xs font-semibold text-emerald-700">
                    ✓ File attached: {mediaFile?.name} ({((mediaFile?.size || 0) / (1024 * 1024)).toFixed(1)} MB)
                  </div>
                </div>
              )}

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  disabled={!canProceedStep3}
                  onClick={() => setCurrentStep(4)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold text-sm transition-all shadow-sm"
                >
                  <span>Next: Review & Submit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Review & Eco Pledge */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                  <span>Step 4: Final Review & Green Pledge</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Confirm details before sending for BOB ESG Cell moderation.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-400 block font-semibold">Child Creator:</span>
                    <span className="font-bold text-slate-900 text-sm">{childName} (Age {childAge})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Category & Age Group:</span>
                    <span className="font-bold text-orange-600 capitalize">{category} • {calculatedAgeGroup}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Parent & EC Number:</span>
                    <span className="font-bold text-slate-900">{employeeName} ({employeeId.toUpperCase()})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Branch & Zone:</span>
                    <span className="font-bold text-slate-900">{branch} • {zone}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-slate-400 block font-semibold">Entry Title:</span>
                  <span className="font-bold text-slate-900">{title}</span>
                </div>
              </div>

              {/* Bank Employee Child Consent & Eco Pledge Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pledgeChecked}
                    onChange={(e) => setPledgeChecked(e.target.checked)}
                    className="w-4 h-4 text-orange-500 rounded border-slate-300 mt-0.5 focus:ring-orange-500"
                  />
                  <span className="text-xs text-slate-700 leading-snug">
                    <strong>Green Family Pledge:</strong> As members of the Bank of Baroda family, our household commits to practicing everyday sustainability (saving water, reducing plastics, and conserving energy).
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    required
                    className="w-4 h-4 text-orange-500 rounded border-slate-300 mt-0.5 focus:ring-orange-500"
                  />
                  <span className="text-xs text-slate-600 leading-snug">
                    I confirm that this is my child’s original work and authorize the Bank of Baroda ESG & Climate Risk Cell to display it on the portal.
                  </span>
                </label>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm transition-all shadow-md active:scale-95"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Submit to ESG Cell</span>
                </button>
              </div>
            </div>
          )}

        </form>

      </div>
    </div>
  );
};
