import { QuizQuestion } from '../types';

export const ESG_PILLARS = [
  {
    letter: 'E',
    title: 'Environment',
    subtitle: 'Caring for Mother Earth',
    tagline: 'Climate Action, Clean Energy & Nature Conservation',
    color: 'from-emerald-500 to-green-600',
    lightBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    iconName: 'Leaf',
    points: [
      {
        heading: 'Renewable Power',
        text: 'Switching from coal and fossil fuels to unlimited clean sunshine (Solar) and gentle breeze (Wind) energy.'
      },
      {
        heading: 'Water Stewardship',
        text: 'Fixing leaking taps, harvesting rooftop rainwater, and keeping our rivers and oceans plastic-free.'
      },
      {
        heading: 'Circular Economy (3 Rs)',
        text: 'Reduce unnecessary buying, Reuse old materials for school crafts, and Recycle paper, glass, and metals.'
      },
      {
        heading: 'Afforestation & Biodiversity',
        text: 'Planting indigenous trees that clean the air, produce sweet fruits, and give birds a safe nesting haven.'
      }
    ]
  },
  {
    letter: 'S',
    title: 'Social',
    subtitle: 'Nurturing Our Communities',
    tagline: 'Health, Equality, Safety & Empowering Everyone',
    color: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50 text-blue-800 border-blue-200',
    iconName: 'Users',
    points: [
      {
        heading: 'Financial Inclusion',
        text: 'Ensuring farmers, small shopkeepers, women entrepreneurs, and rural families can easily open bank accounts and build a secure life.'
      },
      {
        heading: 'Education & Child Well-being',
        text: 'Supporting school libraries, clean drinking water in classrooms, and scholarships for talented students.'
      },
      {
        heading: 'Community Care & Diversity',
        text: 'Treating all people with kindness, fairness, and dignity irrespective of their background or identity.'
      },
      {
        heading: 'Health & Safety First',
        text: 'Promoting healthy work habits, mental wellbeing, clean green workspaces, and outdoor sports for youth.'
      }
    ]
  },
  {
    letter: 'G',
    title: 'Governance',
    subtitle: 'Doing the Right Thing, Always',
    tagline: 'Ethics, Honesty, Responsibility & Trust',
    color: 'from-amber-500 to-orange-600',
    lightBg: 'bg-amber-50 text-amber-800 border-amber-200',
    iconName: 'ShieldCheck',
    points: [
      {
        heading: 'Absolute Honesty & Trust',
        text: 'Being truthful in every transaction. In banking and life, trust is the most precious currency!'
      },
      {
        heading: 'Zero Waste & Green Audits',
        text: 'Regularly checking that Bank of Baroda branches conserve electricity and minimize paper usage.'
      },
      {
        heading: 'Data Privacy & Cyber Safety',
        text: 'Protecting customers’ sensitive savings and information with state-of-the-art secure digital vaults.'
      },
      {
        heading: 'Fair Play & Leadership',
        text: 'Standing up against bullying or unfair practices, and making decisions that benefit the whole country.'
      }
    ]
  }
];

export const BOB_GREEN_MILESTONES = [
  {
    icon: 'Trees',
    stat: '100,000+',
    title: 'Trees Planted by Baroda Family',
    desc: 'Across 12 zones through nationwide employee plantation drives.'
  },
  {
    icon: 'SunMedium',
    stat: '2,500+',
    title: 'Solar Powered ATMs & Branches',
    desc: 'Harnessing rooftop solar energy to power clean banking daily.'
  },
  {
    icon: 'Smartphone',
    stat: '90%+',
    title: 'Paperless Digital Banking',
    desc: 'bob World app empowers millions of customers without printing slips.'
  },
  {
    icon: 'Coins',
    stat: '₹5,000 Cr+',
    title: 'Green Financing Portfolio',
    desc: 'Supporting Electric Vehicles (EVs), renewable energy and eco-housing projects.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    pillar: 'Environment',
    question: 'Which of the following helps to reduce our carbon footprint the most at home?',
    options: [
      'Keeping the lights and TV switched on when leaving the room',
      'Turning off appliances at the plug and using LED energy-saving bulbs',
      'Using single-use plastic water bottles every day',
      'Running the tap continuously while brushing teeth'
    ],
    correctIndex: 1,
    explanation: 'LED bulbs use up to 80% less energy than old incandescent bulbs and turning off unused appliances stops vampire power consumption!'
  },
  {
    id: 2,
    pillar: 'Environment',
    question: 'What is the correct bin color universally used for organic and kitchen wet compost waste?',
    options: [
      'Green Bin (Organic / Wet waste)',
      'Blue Bin (Dry recyclable plastic & paper)',
      'Red Bin (Hazardous batteries & glass)',
      'Black Bin'
    ],
    correctIndex: 0,
    explanation: 'Green bins are designated for biodegradable wet waste like fruit peels, tea leaves, and food scraps which decompose into rich soil compost!'
  },
  {
    id: 3,
    pillar: 'Social',
    question: 'How does Bank of Baroda practice "Social" responsibility in ESG?',
    options: [
      'By only serving wealthy customers in big cities',
      'By providing banking, loans, and education support to farmers, small artisans, and rural families',
      'By throwing away unused office supplies',
      'By stopping all community initiatives'
    ],
    correctIndex: 1,
    explanation: 'Social responsibility means uplifting all members of society, fostering inclusive growth and empowering rural communities across India.'
  },
  {
    id: 4,
    pillar: 'Governance',
    question: 'What does "Governance" (the G in ESG) mean for a young champion like you?',
    options: [
      'Breaking rules when nobody is looking',
      'Following rules, being honest in exams/games, and treating everyone fairly',
      'Ignoring safety warnings in the playground',
      'Keeping secrets that might hurt others'
    ],
    correctIndex: 1,
    explanation: 'Good governance begins with personal integrity: playing fairly, telling the truth, and being accountable for your actions!'
  },
  {
    id: 5,
    pillar: 'Environment',
    question: 'Why is digital banking (like the bob World app) good for the environment?',
    options: [
      'It looks colorful on mobile screens',
      'It eliminates the need for paper slips, physical travel, and vehicle carbon emissions',
      'It requires cutting down more trees',
      'It makes phones heavier'
    ],
    correctIndex: 1,
    explanation: 'Digital banking saves millions of paper pages, avoids vehicle trips to branches, and drastically lowers greenhouse gas emissions!'
  }
];
