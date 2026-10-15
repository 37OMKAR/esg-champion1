export type AgeGroup = 'sub-junior' | 'junior' | 'teen';
export type MediaCategory = 'art' | 'reel';
export type ESGTheme = 
  | 'water'
  | 'energy'
  | 'waste'
  | 'green-branch';

export type SubmissionStatus = 'pending' | 'approved' | 'rejected';

export interface Entry {
  id: string;
  referenceId: string;
  title: string;
  childName: string;
  childAge: number;
  ageGroup: AgeGroup;
  category: MediaCategory;
  theme: ESGTheme;
  greenMessage: string;
  mediaUrl: string;
  thumbnailUrl: string;
  employeeName: string;
  employeeId: string; // EC Number
  employeeEmail: string;
  employeePhone: string;
  zone: string;
  branch: string;
  status: SubmissionStatus;
  likes: number;
  hasLiked?: boolean;
  submittedAt: string;
  juryScore?: {
    creativity: number;
    esgRelevance: number;
    presentation: number;
    total: number;
    remarks?: string;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  pillar: 'Environment' | 'Social' | 'Governance';
}
