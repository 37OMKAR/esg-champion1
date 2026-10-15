import { LanguageCode } from './languages';

export interface TranslationDictionary {
  nav: {
    brand: string;
    esgCell: string;
    portalName: string;
    gallery: string;
    submit: string;
    learn: string;
    arcade: string;
    admin: string;
    submitCta: string;
    gamesBadge: string;
    language: string;
  };
  hero: {
    bankName: string;
    cellInitiative: string;
    internalPortal: string;
    titlePart1: string;
    titlePart2: string;
    titlePart3: string;
    subtitle: string;
    ctaSubmit: string;
    ctaGames: string;
    ctaQuiz: string;
    statLiveEntries: string;
    statLikes: string;
    statZones: string;
    statZonesDesc: string;
    statDaysLeft: string;
    statDaysLeftDesc: string;
    themesTitle: string;
  };
  themes: {
    water_label: string;
    water_desc: string;
    energy_label: string;
    energy_desc: string;
    waste_label: string;
    waste_desc: string;
    green_branch_label: string;
    green_branch_desc: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allThemes: string;
    allAges: string;
    allCategories: string;
    artOnly: string;
    reelsOnly: string;
    subJunior: string;
    junior: string;
    teen: string;
    sortBy: string;
    mostLiked: string;
    newest: string;
    juryPicks: string;
    showing: string;
    ofEntries: string;
    noEntries: string;
    encourage: string;
    encouraged: string;
    viewEntry: string;
    shareWhatsApp: string;
    copied: string;
    employeeStaffId: string;
  };
  submission: {
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    empName: string;
    empId: string;
    empEmail: string;
    empPhone: string;
    zone: string;
    branch: string;
    childName: string;
    childAge: string;
    ageGroup: string;
    category: string;
    theme: string;
    entryTitle: string;
    greenMessage: string;
    uploadMedia: string;
    uploadHintArt: string;
    uploadHintReel: string;
    terms: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successMsg: string;
    guidelines: string;
    cancel: string;
  };
  learn: {
    title: string;
    subtitle: string;
    envTitle: string;
    envDesc: string;
    socTitle: string;
    socDesc: string;
    govTitle: string;
    govDesc: string;
    quizTitle: string;
    question: string;
    of: string;
    score: string;
    retake: string;
  };
  arcade: {
    title: string;
    subtitle: string;
    wasteTitle: string;
    wasteDesc: string;
    energyTitle: string;
    energyDesc: string;
    footprintTitle: string;
    footprintDesc: string;
    scoreLabel: string;
    playAgain: string;
  };
  footer: {
    aboutTitle: string;
    aboutDesc: string;
    quickLinks: string;
    helpline: string;
    address: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  // 1. English
  en: {
    nav: {
      brand: 'Bank of Baroda',
      esgCell: 'ESG & Climate Risk Cell',
      portalName: 'Young Champions Portal',
      gallery: 'Gallery & Entries',
      submit: 'Submit Child’s Entry',
      learn: 'ESG Kids Hub',
      arcade: 'Eco Arcade',
      admin: 'Jury & Admin',
      submitCta: 'Submit Entry',
      gamesBadge: 'Games',
      language: 'Language'
    },
    hero: {
      bankName: 'Bank of Baroda',
      cellInitiative: 'ESG & Climate Risk Cell Initiative',
      internalPortal: 'Internal Bank Portal',
      titlePart1: 'Young Minds,',
      titlePart2: 'Green Future:',
      titlePart3: 'BOB ESG Champion 2026',
      subtitle: 'The exclusive stage for the talented children & teens of Bank of Baroda employees across all zones. Share creative art & inspiring reels, spread the message on WhatsApp, and learn sustainability!',
      ctaSubmit: 'Submit Child’s Entry',
      ctaGames: 'Play Eco Games',
      ctaQuiz: 'Take Eco Quiz',
      statLiveEntries: 'Live Approved Entries',
      statLikes: 'Family Encouragements',
      statZones: '12 Zones',
      statZonesDesc: 'Pan-India Participation',
      statDaysLeft: '14 Days',
      statDaysLeftDesc: 'Left for Submissions',
      themesTitle: 'Official Competition Themes (Choose Any)'
    },
    themes: {
      water_label: 'Jal Shakti (Water Conservation)',
      water_desc: 'Rainwater harvesting, river rejuvenation, mindful water saving',
      energy_label: 'Urja Kranti (Clean Energy)',
      energy_desc: 'Solar rooftops, green branch initiatives, LED transition',
      waste_label: 'Swachh Baroda (Waste to Wealth)',
      waste_desc: 'Segregation at source, plastic-free living, upcycling',
      green_branch_label: 'Green BOB Branch',
      green_branch_desc: 'Paperless digital banking, tree plantation drives, eco lifestyle'
    },
    gallery: {
      title: 'Creative Showcase & Community Voting',
      subtitle: 'Explore inspiring paintings, sketches & video reels by BOB family members. Tap the heart to vote and encourage!',
      searchPlaceholder: 'Search by child name, title, branch, or EC number...',
      allThemes: 'All ESG Themes',
      allAges: 'All Age Groups',
      allCategories: 'All Media',
      artOnly: 'Paintings & Art',
      reelsOnly: 'Eco Video Reels',
      subJunior: 'Sub-Junior (Age 4-8)',
      junior: 'Junior (Age 9-13)',
      teen: 'Teen (Age 14-18)',
      sortBy: 'Sort By',
      mostLiked: 'Most Encouraged (Likes)',
      newest: 'Newest First',
      juryPicks: 'Jury Recommendations',
      showing: 'Showing',
      ofEntries: 'entries',
      noEntries: 'No entries found matching your filters. Try adjusting your search or theme filter!',
      encourage: 'Encourage',
      encouraged: 'Encouraged!',
      viewEntry: 'View Entry',
      shareWhatsApp: 'Share on WhatsApp',
      copied: 'Link Copied!',
      employeeStaffId: 'EC No.'
    },
    submission: {
      title: 'Submit Child’s Creative ESG Entry',
      subtitle: 'Celebrate your child’s creativity and inspire sustainability across the entire Bank of Baroda family!',
      step1: 'Step 1: Employee & Branch Verification',
      step2: 'Step 2: Young Champion & Entry Details',
      step3: 'Step 3: Upload Artwork / Reel & Message',
      empName: 'Employee Name',
      empId: 'EC Number (Staff ID)',
      empEmail: 'Official Bank Email',
      empPhone: 'Mobile Number (WhatsApp)',
      zone: 'Bank Zone',
      branch: 'Branch / Office Name',
      childName: 'Child’s Full Name',
      childAge: 'Child’s Age',
      ageGroup: 'Age Category',
      category: 'Competition Category',
      theme: 'ESG Competition Theme',
      entryTitle: 'Title of Artwork / Reel',
      greenMessage: 'Child’s Green Message / Eco Pledge',
      uploadMedia: 'Upload Media File',
      uploadHintArt: 'Supported: JPG, PNG, WEBP (Max 15MB)',
      uploadHintReel: 'Supported: MP4, MOV (Max 60 sec, Max 50MB)',
      terms: 'I confirm that I am a Bank of Baroda employee and this is the original creative work of my child.',
      submitBtn: 'Submit Competition Entry',
      submitting: 'Submitting Entry...',
      successTitle: 'Entry Submitted Successfully!',
      successMsg: 'Your entry has been forwarded to the ESG Cell Jury for moderation.',
      guidelines: 'Official Guidelines & Eligibility',
      cancel: 'Cancel'
    },
    learn: {
      title: 'ESG Learning Hub for Kids & Teens',
      subtitle: 'Explore climate action, social harmony, and clean governance in simple stories & quizzes',
      envTitle: 'Environmental (E)',
      envDesc: 'Protecting Earth, saving water, clean air and renewable power.',
      socTitle: 'Social (S)',
      socDesc: 'Community empowerment, financial literacy, equality and kindness.',
      govTitle: 'Governance (G)',
      govDesc: 'Truthfulness, ethical banking, transparency and trust.',
      quizTitle: 'Young Champion Eco Quiz',
      question: 'Question',
      of: 'of',
      score: 'Your Score',
      retake: 'Play Quiz Again'
    },
    arcade: {
      title: 'BOB Eco Arcade',
      subtitle: 'Learn sustainability habits through playful green games',
      wasteTitle: 'Swachh Segregation Challenge',
      wasteDesc: 'Sort wet, dry and e-waste into correct bins before time runs out!',
      energyTitle: 'Clean Energy Dynamo',
      energyDesc: 'Harness solar and wind power to light up the green branch.',
      footprintTitle: 'Kids Carbon Footprint Calculator',
      footprintDesc: 'Calculate your daily eco score and earn a Green Champion Badge.',
      scoreLabel: 'Eco Points',
      playAgain: 'Play Again'
    },
    footer: {
      aboutTitle: 'Bank of Baroda ESG Portal',
      aboutDesc: 'An initiative by ESG & Climate Risk Cell, Corporate Office, Bandra Kurla Complex (BKC), Mumbai.',
      quickLinks: 'Quick Links',
      helpline: 'Support & Helpline',
      address: 'Corporate Centre: C-26, G-Block, BKC, Bandra (E), Mumbai 400051',
      copyright: '© 2026 Bank of Baroda. All rights reserved. For internal bank use only.'
    }
  },

  // 2. Hindi (हिन्दी)
  hi: {
    nav: {
      brand: 'बैंक ऑफ़ बड़ौदा',
      esgCell: 'ईएसजी एवं जलवायु जोखिम प्रकोष्ठ',
      portalName: 'यंग चैंपियंस पोर्टल',
      gallery: 'गैलरी एवं प्रविष्टियां',
      submit: 'बच्चे की प्रविष्टि भेजें',
      learn: 'ईएसजी किड्स हब',
      arcade: 'इको आर्केड',
      admin: 'निर्णायक एवं एडमिन',
      submitCta: 'प्रविष्टि दर्ज करें',
      gamesBadge: 'गेम्स',
      language: 'भाषा'
    },
    hero: {
      bankName: 'बैंक ऑफ़ बड़ौदा',
      cellInitiative: 'ईएसजी एवं जलवायु जोखिम प्रकोष्ठ की पहल',
      internalPortal: 'आंतरिक बैंक पोर्टल',
      titlePart1: 'युवा सोच,',
      titlePart2: 'हरित भविष्य:',
      titlePart3: 'बॉब ईएसजी चैंपियन 2026',
      subtitle: 'सभी अंचलों के बैंक ऑफ़ बड़ौदा कर्मचारियों के प्रतिभाशाली बच्चों और किशोरों का विशेष मंच। रचनात्मक कला व प्रेरक रील्स साझा करें, व्हाट्सएप पर संदेश फैलाएं और पर्यावरण संरक्षण सीखें!',
      ctaSubmit: 'बच्चे की प्रविष्टि भेजें',
      ctaGames: 'इको गेम्स खेलें',
      ctaQuiz: 'इको क्विज़ में भाग लें',
      statLiveEntries: 'स्वीकृत प्रविष्टियां',
      statLikes: 'पारिवारिक प्रोत्साहन',
      statZones: '12 अंचल',
      statZonesDesc: 'अखिल भारतीय सहभागिता',
      statDaysLeft: '14 दिन शेष',
      statDaysLeftDesc: 'प्रविष्टि भेजने की अंतिम तिथि',
      themesTitle: 'प्रतियोगिता के आधिकारिक विषय (कोई एक चुनें)'
    },
    themes: {
      water_label: 'जल शक्ति (जल संरक्षण)',
      water_desc: 'वर्षा जल संचयन, नदी पुनर्जीवन और जल की एक-एक बूंद की बचत',
      energy_label: 'ऊर्जा क्रांति (स्वच्छ ऊर्जा)',
      energy_desc: 'सौर ऊर्जा छतें, हरित शाखाएं और एलईडी प्रकाश व्यवस्था',
      waste_label: 'स्वच्छ बड़ौदा (कचरे से कंचन)',
      waste_desc: 'स्रोत पर पृथक्करण, प्लास्टिक-मुक्त जीवन और पुनर्चक्रण',
      green_branch_label: 'हरित बॉब शाखा',
      green_branch_desc: 'कागजरहित डिजिटल बैंकिंग, वृक्षारोपण अभियान और पर्यावरण-अनुकूल जीवन'
    },
    gallery: {
      title: 'रचनात्मक प्रदर्शनी एवं सामुदायिक मतदान',
      subtitle: 'बॉब परिवार के बच्चों की प्रेरक पेंटिंग्स, रेखाचित्र और वीडियो रील्स देखें। दिल के निशान को छूकर प्रोत्साहित करें!',
      searchPlaceholder: 'बच्चे के नाम, शीर्षक, शाखा या ईसी नंबर से खोजें...',
      allThemes: 'सभी ईएसजी विषय',
      allAges: 'सभी आयु वर्ग',
      allCategories: 'सभी माध्यम',
      artOnly: 'चित्रकला एवं कला',
      reelsOnly: 'इको वीडियो रील्स',
      subJunior: 'सब-जूनियर (आयु 4-8)',
      junior: 'जूनियर (आयु 9-13)',
      teen: 'टीन (आयु 14-18)',
      sortBy: 'क्रमबद्ध करें',
      mostLiked: 'सर्वाधिक पसंदीदा (लाइक्स)',
      newest: 'नवीनतम पहले',
      juryPicks: 'ज्यूरी की पसंद',
      showing: 'प्रदर्शित',
      ofEntries: 'प्रविष्टियां',
      noEntries: 'फ़िल्टर के अनुसार कोई प्रविष्टि नहीं मिली। कृपया खोज शब्द बदलें!',
      encourage: 'उत्साहवर्धन करें',
      encouraged: 'उत्साहवर्धन किया!',
      viewEntry: 'प्रविष्टि देखें',
      shareWhatsApp: 'व्हाट्सएप पर साझा करें',
      copied: 'लिंक कॉपी हो गया!',
      employeeStaffId: 'ईसी सं.'
    },
    submission: {
      title: 'बच्चे की ईएसजी प्रविष्टि जमा करें',
      subtitle: 'अपने बच्चे की प्रतिभा का जश्न मनाएं और संपूर्ण बैंक ऑफ़ बड़ौदा परिवार में स्थिरता का संदेश फैलाएं!',
      step1: 'चरण 1: कर्मचारी व शाखा सत्यापन',
      step2: 'चरण 2: बाल चैंपियन व प्रविष्टि विवरण',
      step3: 'चरण 3: कलाकृति / रील और हरित संदेश अपलोड',
      empName: 'कर्मचारी का नाम',
      empId: 'ईसी नंबर (स्टाफ आईडी)',
      empEmail: 'आधिकारिक बैंक ईमेल',
      empPhone: 'मोबाइल नंबर (व्हाट्सएप)',
      zone: 'बैंक अंचल (ज़ोन)',
      branch: 'शाखा / कार्यालय का नाम',
      childName: 'बच्चे का पूरा नाम',
      childAge: 'बच्चे की आयु',
      ageGroup: 'आयु वर्ग',
      category: 'प्रतियोगिता श्रेणी',
      theme: 'ईएसजी प्रतियोगिता विषय',
      entryTitle: 'कलाकृति / रील का शीर्षक',
      greenMessage: 'बच्चे का हरित संदेश / पर्यावरण संकल्प',
      uploadMedia: 'मीडिया फ़ाइल अपलोड करें',
      uploadHintArt: 'स्वीकार्य: JPG, PNG, WEBP (अधिकतम 15MB)',
      uploadHintReel: 'स्वीकार्य: MP4, MOV (अधिकतम 60 सेकंड, 50MB)',
      terms: 'मैं पुष्टि करता/करती हूँ कि मैं बैंक ऑफ़ बड़ौदा का कर्मचारी हूँ और यह मेरे बच्चे की मौलिक रचना है।',
      submitBtn: 'प्रतियोगिता प्रविष्टि जमा करें',
      submitting: 'प्रविष्टि जमा हो रही है...',
      successTitle: 'प्रविष्टि सफलतापूर्वक जमा हो गई!',
      successMsg: 'आपकी प्रविष्टि ईएसजी सेल ज्यूरी को मूल्यांकन हेतु भेज दी गई है।',
      guidelines: 'आधिकारिक दिशानिर्देश एवं नियम',
      cancel: 'रद्द करें'
    },
    learn: {
      title: 'बच्चों और किशोरों के लिए ईएसजी लर्निंग हब',
      subtitle: 'जलवायु संरक्षण, सामाजिक समरसता और सुशासन को सरल कहानियों और क्विज़ के माध्यम से समझें',
      envTitle: 'पर्यावरण (E)',
      envDesc: 'धरती की सुरक्षा, जल संचयन, स्वच्छ वायु और नवीकरणीय ऊर्जा।',
      socTitle: 'सामाजिक (S)',
      socDesc: 'समुदाय कल्याण, वित्तीय साक्षरता, समानता और संवेदनशीलता।',
      govTitle: 'सुशासन (G)',
      govDesc: 'सत्यनिष्ठा, नैतिक बैंकिंग, पारदर्शिता और अटूट विश्वास।',
      quizTitle: 'यंग चैंपियन इको क्विज़',
      question: 'प्रश्न',
      of: 'का',
      score: 'आपका स्कोर',
      retake: 'पुनः क्विज़ खेलें'
    },
    arcade: {
      title: 'बॉब इको आर्केड',
      subtitle: 'रोमांचक हरित खेलों के साथ पर्यावरण अनुकूल आदतें सीखें',
      wasteTitle: 'स्वच्छ कचरा पृथक्करण खेल',
      wasteDesc: 'गीले, सूखे और ई-कचरे को सही डिब्बे में समय समाप्त होने से पहले डालें!',
      energyTitle: 'स्वच्छ ऊर्जा चैलेंज',
      energyDesc: 'सौर और पवन ऊर्जा का उपयोग करके हरित शाखा को रोशन करें।',
      footprintTitle: 'बाल कार्बन फुटप्रिंट कैलकुलेटर',
      footprintDesc: 'अपने दैनिक पर्यावरण स्कोर की गणना करें और ग्रीन बैज पाएं।',
      scoreLabel: 'इको अंक',
      playAgain: 'दोबारा खेलें'
    },
    footer: {
      aboutTitle: 'बैंक ऑफ़ बड़ौदा ईएसजी पोर्टल',
      aboutDesc: 'ईएसजी एवं जलवायु जोखिम प्रकोष्ठ, कॉर्पोरेट कार्यालय, बांद्रा कुर्ला कॉम्प्लेक्स (बीकेसी), मुंबई की एक पहल।',
      quickLinks: 'त्वरित लिंक',
      helpline: 'सहायता एवं हेल्पलाइन',
      address: 'कॉर्पोरेट कार्यालय: सी-26, जी-ब्लॉक, बीकेसी, बांद्रा (पूर्व), मुंबई 400051',
      copyright: '© 2026 बैंक ऑफ़ बड़ौदा। सर्वाधिकार सुरक्षित। केवल आंतरिक बैंक उपयोग के लिए।'
    }
  },

  // 3. Gujarati (ગુજરાતી) - Bank of Baroda Heritage
  gu: {
    nav: {
      brand: 'બેંક ઑફ બરોડા',
      esgCell: 'ઇએસજી અને ક્લાઇમેટ રિસ્ક સેલ',
      portalName: 'યંગ ચેમ્પિયન્સ પોર્ટલ',
      gallery: 'ગેલેરી અને કૃતિઓ',
      submit: 'બાળકની કૃતિ મોકલો',
      learn: 'ઇએસજી કિડ્સ હબ',
      arcade: 'ઇકો આર્કેડ',
      admin: 'જ્યુરી અને એડમિન',
      submitCta: 'એન્ટ્રી સબમિટ કરો',
      gamesBadge: 'રમતો',
      language: 'ભાષા'
    },
    hero: {
      bankName: 'બેંક ઑફ બરોડા',
      cellInitiative: 'ઇએસજી અને ક્લાઇમેટ રિસ્ક સેલની પહેલ',
      internalPortal: 'આંતરિક બેંક પોર્ટલ',
      titlePart1: 'યુવા વિચારો,',
      titlePart2: 'હરિયાળું ભવિષ્ય:',
      titlePart3: 'બીઓબી ઇએસજી ચેમ્પિયન 2026',
      subtitle: 'તમામ ઝોનના બેંક ઑફ બરોડા કર્મચારીઓના તેજસ્વી બાળકો અને કિશોરો માટે વિશેષ મંચ. ચિત્રકળા અને રીલ્સ શેર કરો, વ્હોટ્સએપ પર ફેલાવો અને ટકાઉ જીવનશૈલી શીખો!',
      ctaSubmit: 'બાળકની કૃતિ મોકલો',
      ctaGames: 'ઇકો ગેમ્સ રમો',
      ctaQuiz: 'ઇકો ક્વિઝ રમો',
      statLiveEntries: 'મંજૂર થયેલી કૃતિઓ',
      statLikes: 'કૌટુંબિક પ્રોત્સાહન',
      statZones: '12 ઝોન',
      statZonesDesc: 'સમગ્ર ભારતમાંથી સહભાગિતા',
      statDaysLeft: '14 દિવસ બાકી',
      statDaysLeftDesc: 'કૃતિ સબમિટ કરવાનો સમય',
      themesTitle: 'સ્પર્ધાના સત્તાવાર વિષયો (કોઈપણ એક પસંદ કરો)'
    },
    themes: {
      water_label: 'જળ શક્તિ (જળ સંરક્ષણ)',
      water_desc: 'વરસાદી પાણીનો સંગ્રહ, નદી પુનર્જીવન અને પાણીની બચત',
      energy_label: 'ઊર્જા ક્રાંતિ (સ્વચ્છ ઊર્જા)',
      energy_desc: 'સોલાર રૂફટોપ, ગ્રીન બ્રાન્ચ પહેલ અને એલઇડી લાઈટ્સ',
      waste_label: 'સ્વચ્છ બરોડા (કચરામાંથી કંચન)',
      waste_desc: 'કચરાનું વર્ગીકરણ, પ્લાસ્ટિક મુક્ત જીવન અને રિસાયક્લિંગ',
      green_branch_label: 'ગ્રીન બીઓબી શાખા',
      green_branch_desc: 'પેપરલેસ ડિજિટલ બેંકિંગ, વૃક્ષારોપણ અને ઇકો-ફ્રેન્ડલી જીવન'
    },
    gallery: {
      title: 'સર્જનાત્મક પ્રદર્શન અને સામુદાયિક વોટિંગ',
      subtitle: 'બીઓબી પરિવારના બાળકોના ચિત્રો અને વિડિયો રીલ્સ જુઓ. દિલ પર ટેપ કરીને પ્રોત્સાહિત કરો!',
      searchPlaceholder: 'બાળકનું નામ, શીર્ષક, શાખા અથવા EC નંબરથી શોધો...',
      allThemes: 'બધા ઇએસજી વિષયો',
      allAges: 'બધા વયજૂથ',
      allCategories: 'બધા માધ્યમ',
      artOnly: 'ચિત્રકળા અને આર્ટ',
      reelsOnly: 'ઇકો વિડિયો રીલ્સ',
      subJunior: 'સબ-જુનિયર (વય 4-8)',
      junior: 'જુનિયર (વય 9-13)',
      teen: 'ટીન (વય 14-18)',
      sortBy: 'ક્રમબદ્ધ કરો',
      mostLiked: 'સૌથી વધુ પસંદ કરાયેલ',
      newest: 'નવીનતમ પ્રથમ',
      juryPicks: 'જ્યુરી પસંદગી',
      showing: 'દર્શાવી રહ્યા છીએ',
      ofEntries: 'કૃતિઓ',
      noEntries: 'તમારા ફિલ્ટર્સ સાથે મેળ ખાતી કોઈ એન્ટ્રી નથી મળી. શોધ માપદંડ બદલી જુઓ!',
      encourage: 'પ્રોત્સાહિત કરો',
      encouraged: 'પ્રોત્સાહિત કર્યું!',
      viewEntry: 'કૃતિ જુઓ',
      shareWhatsApp: 'વ્હોટ્સએપ પર શેર કરો',
      copied: 'લિંક કોપી થઈ ગઈ!',
      employeeStaffId: 'EC નં.'
    },
    submission: {
      title: 'બાળકની સર્જનાત્મક કૃતિ સબમિટ કરો',
      subtitle: 'તમારા બાળકની સર્જનાત્મકતા ઉજવો અને બેંક ઑફ બરોડા પરિવારમાં પર્યાવરણ જાગૃતિ લાવો!',
      step1: 'પગલું 1: કર્મચારી અને શાખા ચકાસણી',
      step2: 'પગલું 2: યંગ ચેમ્પિયન અને કૃતિ વિગત',
      step3: 'પગલું 3: ચિત્ર/રીલ અને ગ્રીન સંદેશ અપલોડ',
      empName: 'કર્મચારીનું નામ',
      empId: 'EC નંબર (સ્ટાફ આઈડી)',
      empEmail: 'સત્તાવાર બેંક ઇમેઇલ',
      empPhone: 'મોબાઇલ નંબર (વ્હોટ્સએપ)',
      zone: 'બેંક ઝોન',
      branch: 'શાખા / ઓફિસનું નામ',
      childName: 'બાળકનું પૂરું નામ',
      childAge: 'બાળકની ઉંમર',
      ageGroup: 'વય શ્રેણી',
      category: 'સ્પર્ધા કેટેગરી',
      theme: 'ઇએસજી સ્પર્ધા થીમ',
      entryTitle: 'કૃતિ / રીલનું શીર્ષક',
      greenMessage: 'બાળકનો હરિત સંદેશ / પર્યાવરણ સંકલ્પ',
      uploadMedia: 'મીડિયા ફાઇલ અપલોડ કરો',
      uploadHintArt: 'માન્ય ફોર્મેટ: JPG, PNG, WEBP (મહત્તમ 15MB)',
      uploadHintReel: 'માન્ય ફોર્મેટ: MP4, MOV (મહત્તમ 60 સેકન્ડ, 50MB)',
      terms: 'હું ખાતરી આપું છું કે હું બેંક ઑફ બરોડાનો કર્મચારી છું અને આ મારા બાળકની મૂળ કૃતિ છે.',
      submitBtn: 'સ્પર્ધા એન્ટ્રી સબમિટ કરો',
      submitting: 'સબમિટ થઈ રહ્યું છે...',
      successTitle: 'કૃતિ સફળતાપૂર્વક સબમિટ થઈ!',
      successMsg: 'તમારી એન્ટ્રી ઇએસજી સેલ જ્યુરી સમીક્ષા માટે મોકલી દેવામાં આવી છે.',
      guidelines: 'સત્તાવાર નિયમો અને માર્ગદર્શિકા',
      cancel: 'રદ કરો'
    },
    learn: {
      title: 'બાળકો માટે ઇએસજી લર્નિંગ હબ',
      subtitle: 'સરળ વાર્તાઓ અને ક્વિઝ દ્વારા ક્લાઇમેટ એક્શન અને સુશાસન સમજો',
      envTitle: 'પર્યાવરણ (E)',
      envDesc: 'પૃથ્વીનું રક્ષણ, જળ સંરક્ષણ, સ્વચ્છ હવા અને પુનઃપ્રાપ્ય ઊર્જા.',
      socTitle: 'સામાજિક (S)',
      socDesc: 'સમુદાય સેવા, નાણાકીય સાક્ષરતા, સમાનતા અને પરસ્પર સહયોગ.',
      govTitle: 'સુશાસન (G)',
      govDesc: 'પ્રામાણિકતા, નૈતિક બેંકિંગ, પારદર્શિતા અને વિશ્વાસ.',
      quizTitle: 'યંગ ચેમ્પિયન ઇકો ક્વિઝ',
      question: 'પ્રશ્ન',
      of: 'માંથી',
      score: 'તમારો સ્કોર',
      retake: 'ફરી ક્વિઝ રમો'
    },
    arcade: {
      title: 'બીઓબી ઇકો આર્કેડ',
      subtitle: 'રમત-રમતમાં પર્યાવરણ રક્ષણની નવી ટેવો શીખો',
      wasteTitle: 'સ્વચ્છ કચરો વર્ગીકરણ રમત',
      wasteDesc: 'સમય પૂરો થાય તે પહેલાં ભીનો, સૂકો અને ઈ-કચરો યોગ્ય કચરાપેટીમાં નાખો!',
      energyTitle: 'ક્લીન એનર્જી ડાયનેમો',
      energyDesc: 'સૂર્ય અને પવન ઊર્જાથી હરિયાળી શાખાને રોશન કરો.',
      footprintTitle: 'કાર્બન ફૂટપ્રિન્ટ કેલ્ક્યુલેટર',
      footprintDesc: 'તમારો દૈનિક ઇકો સ્કોર ગણો અને ગ્રીન ચેમ્પિયન બેજ મેળવો.',
      scoreLabel: 'ઇકો પોઈન્ટ્સ',
      playAgain: 'ફરી રમો'
    },
    footer: {
      aboutTitle: 'બેંક ઑફ બરોડા ઇએસજી પોર્ટલ',
      aboutDesc: 'ઇએસજી અને ક્લાઇમેટ રિસ્ક સેલ, કોર્પોરેટ ઓફિસ, બાંદ્રા કુર્લા કોમ્પ્લેક્સ (BKC), મુંબઈની વિશેષ પહેલ.',
      quickLinks: 'ઝડપી લિંક્સ',
      helpline: 'સહાયતા અને હેલ્પલાઇન',
      address: 'કોર્પોરેટ સેન્ટર: C-26, G-બ્લોક, BKC, બાંદ્રા (પૂર્વ), મુંબઈ 400051',
      copyright: '© 2026 બેંક ઑફ બરોડા. સર્વાધિકાર સુરક્ષિત. આંતરિક બેંક ઉપયોગ માટે.'
    }
  },

  // 4. Marathi (मराठी) - Mumbai Corporate HQ
  mr: {
    nav: {
      brand: 'बँक ऑफ बडोदा',
      esgCell: 'ईएसजी आणि हवामान जोखीम कक्ष',
      portalName: 'यंग चॅम्पियन्स पोर्टल',
      gallery: 'गॅलरी आणि प्रवेशिका',
      submit: 'पाल्याची प्रवेशिका पाठवा',
      learn: 'ईएसजी किड्स हब',
      arcade: 'इको आर्केड',
      admin: 'परीक्षक आणि ॲडमिन',
      submitCta: 'नोंदणी करा',
      gamesBadge: 'खेळ',
      language: 'भाषा'
    },
    hero: {
      bankName: 'बँक ऑफ बडोदा',
      cellInitiative: 'ईएसजी आणि हवामान जोखीम कक्षाचा उपक्रम',
      internalPortal: 'अंतर्गत बँक पोर्टल',
      titlePart1: 'तरुण विचार,',
      titlePart2: 'हरित भविष्य:',
      titlePart3: 'बीओबी ईएसजी चॅम्पियन 2026',
      subtitle: 'सर्व विभागांतील बँक ऑफ बडोदा कर्मचाऱ्यांच्या गुणी मुला-मुलींसाठी खास व्यासपीठ. चित्रे आणि व्हिडीओ रील्स सादर करा, व्हॉट्सॲपवर संदेश पाठवा आणि पर्यावरण संवर्धन शिका!',
      ctaSubmit: 'पाल्याची प्रवेशिका पाठवा',
      ctaGames: 'इको गेम्स खेळा',
      ctaQuiz: 'इको क्विझ सोडवा',
      statLiveEntries: 'मंजूर प्रवेशिका',
      statLikes: 'कौटुंबिक प्रोत्साहन',
      statZones: '12 विभाग',
      statZonesDesc: 'अखिल भारतीय सहभाग',
      statDaysLeft: '14 दिवस शिल्लक',
      statDaysLeftDesc: 'प्रवेशिका सादर करण्याची मुदत',
      themesTitle: 'स्पर्धेचे अधिकृत विषय (कोणताही एक निवडा)'
    },
    themes: {
      water_label: 'जल शक्ती (जल संवर्धन)',
      water_desc: 'पावसाच्या पाण्याचे संकलन, नदी संवर्धन आणि पाण्याचा थेंब न् थेंब वाचवणे',
      energy_label: 'ऊर्जा क्रांती (स्वच्छ ऊर्जा)',
      energy_desc: 'सौर ऊर्जा, हरित शाखा उपक्रम आणि ऊर्जा बचतीचे दिवे',
      waste_label: 'स्वच्छ बडोदा (कचऱ्यातून संपत्ती)',
      waste_desc: 'कचऱ्याचे वर्गीकरण, प्लास्टिकमुक्त जीवन आणि पुनर्वापर',
      green_branch_label: 'हरित बीओबी शाखा',
      green_branch_desc: 'कागदरहित डिजिटल बँकिंग, वृक्षारोपण मोहीम आणि पर्यावरणपूरक जीवनशैली'
    },
    gallery: {
      title: 'सृजनशील प्रदर्शन आणि मतनोंदणी',
      subtitle: 'बीओबी परिवारातील मुलांची सुंदर चित्रे आणि रील्स पहा. मनापासून कौतुक करण्यासाठी लाईक करा!',
      searchPlaceholder: 'मुलाचे नाव, शीर्षक, शाखा किंवा EC क्रमांकाने शोधा...',
      allThemes: 'सर्व ईएसजी विषय',
      allAges: 'सर्व वयोगट',
      allCategories: 'सर्व माध्यमे',
      artOnly: 'चित्रकला व कलाकृती',
      reelsOnly: 'इको व्हिडीओ रील्स',
      subJunior: 'सब-ज्युनियर (वय 4-8)',
      junior: 'ज्युनियर (वय 9-13)',
      teen: 'टीन (वय 14-18)',
      sortBy: 'क्रमवारी लावा',
      mostLiked: 'सर्वाधिक पसंती (लाइक्स)',
      newest: 'नवीनतम प्रथम',
      juryPicks: 'परीक्षकांची निवड',
      showing: 'दाखवत आहोत',
      ofEntries: 'प्रवेशिका',
      noEntries: 'निवडलेल्या निकषांनुसार कोणतीही प्रवेशिका आढळली नाही. कृपया पुन्हा शोधा!',
      encourage: 'प्रोत्साहन द्या',
      encouraged: 'प्रोत्साहित केले!',
      viewEntry: 'प्रवेशिका पहा',
      shareWhatsApp: 'व्हॉट्सॲपवर पाठवा',
      copied: 'लिंक कॉपी केली!',
      employeeStaffId: 'EC क्र.'
    },
    submission: {
      title: 'मुलाची ईएसजी कलाकृती सादर करा',
      subtitle: 'आपल्या मुलाच्या प्रतिभेचा सन्मान करा आणि संपूर्ण बँक ऑफ बडोदामध्ये पर्यावरणाचा संदेश पोहोचवा!',
      step1: 'टप्पा 1: कर्मचारी व शाखा पडताळणी',
      step2: 'टप्पा 2: बाल चॅम्पियन व प्रवेशिका तपशील',
      step3: 'टप्पा 3: कलाकृती/रील व हरित संदेश अपलोड',
      empName: 'कर्मचाऱ्याचे नाव',
      empId: 'EC क्रमांक (कर्मचारी आयडी)',
      empEmail: 'अधिकृत बँक ईमेल',
      empPhone: 'मोबाईल क्रमांक (व्हॉट्सॲप)',
      zone: 'बँक विभाग (झोन)',
      branch: 'शाखा / कार्यालयाचे नाव',
      childName: 'मुलाचे संपूर्ण नाव',
      childAge: 'मुलाचे वय',
      ageGroup: 'वयोगट श्रेणी',
      category: 'स्पर्धा श्रेणी',
      theme: 'ईएसजी स्पर्धा विषय',
      entryTitle: 'कलाकृती / रीलचे शीर्षक',
      greenMessage: 'मुलाचा हरित संदेश / पर्यावरण संकल्प',
      uploadMedia: 'मीडिया फाइल अपलोड करा',
      uploadHintArt: 'मान्य स्वरूप: JPG, PNG, WEBP (कमाल 15MB)',
      uploadHintReel: 'मान्य स्वरूप: MP4, MOV (कमाल 60 सेकंद, 50MB)',
      terms: 'मी खात्री देतो/देते की मी बँक ऑफ बडोदाचा कर्मचारी असून ही माझ्या पाल्याची मूळ कलाकृती आहे.',
      submitBtn: 'स्पर्धा प्रवेशिका सादर करा',
      submitting: 'सादर होत आहे...',
      successTitle: 'प्रवेशिका यशस्वीरीत्या सादर झाली!',
      successMsg: 'आपली प्रवेशिका ईएसजी सेल परीक्षकांकडे तपासणीसाठी पाठवण्यात आली आहे.',
      guidelines: 'अधिकृत नियम व अटी',
      cancel: 'रद्द करा'
    },
    learn: {
      title: 'मुलांसाठी ईएसजी लर्निंग हब',
      subtitle: 'हवामान बदल, सामाजिक बांधिलकी आणि पारदर्शक कारभार सोप्या गोष्टींमधून जाणून घ्या',
      envTitle: 'पर्यावरण (E)',
      envDesc: 'वसुंधरेचे रक्षण, पाणी बचत, शुद्ध हवा आणि नूतनीकरणक्षम ऊर्जा.',
      socTitle: 'सामाजिक (S)',
      socDesc: 'समाज विकास, आर्थिक साक्षरता, समानता आणि आपुलकी.',
      govTitle: 'सुप्रशासन (G)',
      govDesc: 'प्रामाणिकपणा, नैतिक बँकिंग, पारदर्शकता आणि अतूट विश्वास.',
      quizTitle: 'यंग चॅम्पियन इको क्विझ',
      question: 'प्रश्न',
      of: 'पैकी',
      score: 'तुमचे गुण',
      retake: 'पुन्हा क्विझ खेळा'
    },
    arcade: {
      title: 'बीओबी इको आर्केड',
      subtitle: 'खेळता खेळता पर्यावरणाचे भान जागवणारे मनोरंजक खेळ',
      wasteTitle: 'कचरा वर्गीकरण चॅलेंज',
      wasteDesc: 'वेळ संपण्यापूर्वी ओला, सुका आणि ई-कचरा योग्य डब्यात टाका!',
      energyTitle: 'स्वच्छ ऊर्जा आव्हान',
      energyDesc: 'सौर आणि पवन ऊर्जेने हरित शाखा उजळवून टाका.',
      footprintTitle: 'कार्बन फूटप्रिंट कॅल्क्युलेटर',
      footprintDesc: 'आपल्या दैनंदिन सवयींचे गुण मोजा आणि ग्रीन चॅम्पियन बना.',
      scoreLabel: 'इको गुण',
      playAgain: 'पुन्हा खेळा'
    },
    footer: {
      aboutTitle: 'बँक ऑफ बडोदा ईएसजी पोर्टल',
      aboutDesc: 'ईएसजी आणि हवामान जोखीम कक्ष, कॉर्पोरेट कार्यालय, वांद्रे कुर्ला संकुल (BKC), मुंबई यांचा उपक्रम.',
      quickLinks: 'महत्त्वाचे दुवे',
      helpline: 'मदत व संपर्क',
      address: 'कॉर्पोरेट सेंटर: C-26, G-ब्लॉक, BKC, वांद्रे (पूर्व), मुंबई 400051',
      copyright: '© 2026 बँक ऑफ बडोदा. सर्व हक्क राखीव. केवळ अंतर्गत वापरासाठी.'
    }
  },

  // 5. Bengali (বাংলা)
  bn: {
    nav: {
      brand: 'ব্যাংক অফ বরোদা',
      esgCell: 'ইএসজি ও জলবায়ু ঝুঁকি সেল',
      portalName: 'ইয়াং চ্যাম্পিয়ন্স পোর্টাল',
      gallery: 'গ্যালারি ও এন্ট্রি',
      submit: 'সন্তানের এন্ট্রি জমা দিন',
      learn: 'ইএসজি কিডস হাব',
      arcade: 'ইকো আর্কেড',
      admin: 'জুরি ও অ্যাডমিন',
      submitCta: 'এন্ট্রি পাঠান',
      gamesBadge: 'গেমস',
      language: 'ভাষা'
    },
    hero: {
      bankName: 'ব্যাংক অফ বরোদা',
      cellInitiative: 'ইএসজি ও জলবায়ু ঝুঁকি সেল উদ্যোগ',
      internalPortal: 'অভ্যন্তরীণ ব্যাংক পোর্টাল',
      titlePart1: 'নবীন ভাবনা,',
      titlePart2: 'সবুজ ভবিষ্যৎ:',
      titlePart3: 'বিওবি ইএসজি চ্যাম্পিয়ন ২০২৬',
      subtitle: 'ব্যাংক অফ বরোদার সকল অঞ্চলের কর্মীদের সন্তানদের অনন্য প্রতিভা প্রকাশের মঞ্চ। চিত্রকলা ও অনুপ্রেরণামূলক রিল শেয়ার করুন এবং পরিবেশ সচেতনতা বাড়ান!',
      ctaSubmit: 'সন্তানের এন্ট্রি জমা দিন',
      ctaGames: 'ইকো গেম খেলুন',
      ctaQuiz: 'ইকো কুইজে অংশ নিন',
      statLiveEntries: 'অনুমোদিত এন্ট্রি',
      statLikes: 'পারিবারিক উৎসাহ',
      statZones: '১২টি জোন',
      statZonesDesc: 'সর্বভারতীয় অংশগ্রহণ',
      statDaysLeft: '১৪ দিন বাকি',
      statDaysLeftDesc: 'এন্ট্রি জমা দেওয়ার সময়',
      themesTitle: 'প্রতিযোগিতার বিষয়সমূহ (যেকোনো একটি বেছে নিন)'
    },
    themes: {
      water_label: 'জল শক্তি (জল সংরক্ষণ)',
      water_desc: 'বৃষ্টির জল সংরক্ষণ, নদী রক্ষা এবং অপচয় রোধ',
      energy_label: 'শক্তি বিপ্লব (পরিচ্ছন্ন শক্তি)',
      energy_desc: 'সৌর বিদ্যুৎ, সবুজ শাখা উদ্যোগ এবং বিদ্যুৎ সাশ্রয়',
      waste_label: 'স্বচ্ছ বরোদা (বর্জ্য ব্যবস্থাপনা)',
      waste_desc: 'বর্জ্য পৃথকীকরণ, প্লাস্টিক বর্জন এবং পুনর্ব্যবহার',
      green_branch_label: 'সবুজ বিওবি শাখা',
      green_branch_desc: 'কাগজবিহীন ডিজিটাল ব্যাংকিং, বৃক্ষরোপণ এবং পরিবেশবান্ধব জীবন'
    },
    gallery: {
      title: 'সৃজনশীল প্রদর্শনী ও ভোট',
      subtitle: 'বিওবি পরিবারের সন্তানদের আঁকা ছবি ও ভিডিও রিল দেখুন। পছন্দ করে উৎসাহ দিন!',
      searchPlaceholder: 'সন্তানের নাম, শিরোনাম, শাখা বা EC নম্বর দিয়ে খুঁজুন...',
      allThemes: 'সকল ইএসজি বিষয়',
      allAges: 'সকল বয়সশ্রেণী',
      allCategories: 'সকল মাধ্যম',
      artOnly: 'চিত্রকলা ও আর্ট',
      reelsOnly: 'ইকো ভিডিও রিল',
      subJunior: 'সাব-জুনিয়র (বয়স ৪-৮)',
      junior: 'জুনিয়র (বয়স ৯-১৩)',
      teen: 'টিন (বয়স ১৪-১৮)',
      sortBy: 'সাজান',
      mostLiked: 'সর্বাধিক লাইক',
      newest: 'নতুন এন্ট্রি আগে',
      juryPicks: 'জুরি পছন্দ',
      showing: 'প্রদর্শিত',
      ofEntries: 'টি এন্ট্রি',
      noEntries: 'কোনো এন্ট্রি পাওয়া যায়নি। অনুসন্ধান পরিবর্তন করে দেখুন!',
      encourage: 'উৎসাহ দিন',
      encouraged: 'উৎসাহিত করেছেন!',
      viewEntry: 'এন্ট্রি দেখুন',
      shareWhatsApp: 'হোয়াটসঅ্যাপে শেয়ার করুন',
      copied: 'লিঙ্ক কপি হয়েছে!',
      employeeStaffId: 'EC নং'
    },
    submission: {
      title: 'সন্তানের ইএসজি এন্ট্রি জমা দিন',
      subtitle: 'আপনার সন্তানের সৃজনশীলতাকে উদযাপন করুন এবং টেকসই উন্নয়নের বার্তা ছড়িয়ে দিন!',
      step1: 'ধাপ ১: কর্মী ও শাখা যাচাইকরণ',
      step2: 'ধাপ ২: প্রতিযোগী ও এন্ট্রি বিবরণ',
      step3: 'ধাপ ৩: ছবি/রিল ও সবুজ বার্তা আপলোড',
      empName: 'কর্মীর নাম',
      empId: 'EC নম্বর (স্টাফ আইডি)',
      empEmail: 'অফিসিয়াল ব্যাংক ইমেইল',
      empPhone: 'মোবাইল নম্বর (হোয়াটসঅ্যাপ)',
      zone: 'ব্যাংক জোন',
      branch: 'শাখা / অফিসের নাম',
      childName: 'সন্তানের পুরো নাম',
      childAge: 'সন্তানের বয়স',
      ageGroup: 'বয়সের বিভাগ',
      category: 'প্রতিযোগিতার বিভাগ',
      theme: 'ইএসজি প্রতিযোগিতার বিষয়',
      entryTitle: 'আর্ট / রিলের শিরোনাম',
      greenMessage: 'সন্তানের সবুজ বার্তা / পরিবেশ শপথ',
      uploadMedia: 'মিডিয়া ফাইল আপলোড করুন',
      uploadHintArt: 'সমর্থিত: JPG, PNG, WEBP (সর্বোচ্চ ১৫MB)',
      uploadHintReel: 'সমর্থিত: MP4, MOV (সর্বোচ্চ ৬০ সেকেন্ড, ৫০MB)',
      terms: 'আমি নিশ্চিত করছি যে আমি ব্যাংক অফ বরোদার কর্মী এবং এটি আমার সন্তানের মৌলিক কাজ।',
      submitBtn: 'প্রতিযোগিতার এন্ট্রি জমা দিন',
      submitting: 'জমা দেওয়া হচ্ছে...',
      successTitle: 'এন্ট্রি সফলভাবে জমা হয়েছে!',
      successMsg: 'আপনার এন্ট্রি জুরি পর্যালোচনার জন্য পাঠানো হয়েছে।',
      guidelines: 'অফিসিয়াল নির্দেশিকা ও নিয়মাবলী',
      cancel: 'বাতিল'
    },
    learn: {
      title: 'বাচ্চাদের জন্য ইএসজি লার্নিং হাব',
      subtitle: 'গল্প ও মজার কুইজের মাধ্যমে পরিবেশ, সমাজ ও সুশাসন জানুন',
      envTitle: 'পরিবেশ (E)',
      envDesc: 'পৃথিবী রক্ষা, জল সংরক্ষণ, নির্মল বাতাস ও পুনর্নবীকরণযোগ্য শক্তি।',
      socTitle: 'সমাজ (S)',
      socDesc: 'সামাজিক কল্যাণ, আর্থিক সচেতনতা ও সমতা।',
      govTitle: 'সুশাসন (G)',
      govDesc: 'সততা, নৈতিক ব্যাংকিং, স্বচ্ছতা ও বিশ্বাস।',
      quizTitle: 'ইয়াং চ্যাম্পিয়ন ইকো কুইজ',
      question: 'প্রশ্ন',
      of: 'এর মধ্যে',
      score: 'আপনার স্কোর',
      retake: 'আবার কুইজ খেলুন'
    },
    arcade: {
      title: 'বিওবি ইকো আর্কেড',
      subtitle: 'খেলার মাধ্যমে পরিবেশবান্ধব অভ্যাস গড়ে তুলুন',
      wasteTitle: 'বর্জ্য পৃথকীকরণ খেলা',
      wasteDesc: 'সময় শেষের আগেই ভেজা, শুকনো ও ই-বর্জ্য সঠিক পাত্রে ফেলুন!',
      energyTitle: 'সবুজ শক্তি চ্যালেঞ্জ',
      energyDesc: 'সৌর ও বায়ু শক্তি দিয়ে ব্যাংক শাখাকে আলোকিত করুন।',
      footprintTitle: 'কার্বন ফুটপ্রিন্ট ক্যালকুলেটর',
      footprintDesc: 'আপনার পরিবেশ স্কোর জানুন ও গ্রিন ব্যাজ অর্জন করুন।',
      scoreLabel: 'ইকো পয়েন্ট',
      playAgain: 'আবার খেলুন'
    },
    footer: {
      aboutTitle: 'ব্যাংক অফ বরোদা ইএসজি পোর্টাল',
      aboutDesc: 'ইএসজি ও জলবায়ু ঝুঁকি সেল, কর্পোরেট অফিস, বান্দ্রা কুরলা কমপ্লেক্স (BKC), মুম্বাই এর একটি উদ্যোগ।',
      quickLinks: 'প্রয়োজনীয় লিঙ্ক',
      helpline: 'হেল্পলাইন ও সহায়তা',
      address: 'কর্পোরেট সেন্টার: C-26, G-ব্লক, BKC, বান্দ্রা (পূর্ব), মুম্বাই 400051',
      copyright: '© ২০২৬ ব্যাংক অফ বরোদা। সর্বস্বত্ব সংরক্ষিত। শুধুমাত্র অভ্যন্তরীণ ব্যবহারের জন্য।'
    }
  },

  // 6. Tamil (தமிழ்)
  ta: {
    nav: {
      brand: 'பேங்க் ஆஃப் பரோடா',
      esgCell: 'இஎஸ்ஜி மற்றும் காலநிலை இடர் பிரிவு',
      portalName: 'யங் சாம்பியன்ஸ் போர்ட்டல்',
      gallery: 'படத்தொகுப்பு & பதிவுகள்',
      submit: 'குழந்தையின் பதிவைச் சமர்ப்பிக்கவும்',
      learn: 'இஎஸ்ஜி கிட்ஸ் ஹப்',
      arcade: 'ஈகோ ஆர்கேட்',
      admin: 'நடுவர் & நிர்வாகம்',
      submitCta: 'பதிவு செய்க',
      gamesBadge: 'விளையாட்டு',
      language: 'மொழி'
    },
    hero: {
      bankName: 'பேங்க் ஆஃப் பரோடா',
      cellInitiative: 'இஎஸ்ஜி மற்றும் காலநிலை இடர் பிரிவின் முயற்சி',
      internalPortal: 'வங்கி உள் போர்ட்டல்',
      titlePart1: 'இளம் சிந்தனை,',
      titlePart2: 'பசுமை எதிர்காலம்:',
      titlePart3: 'BOB இஎஸ்ஜி சாம்பியன் 2026',
      subtitle: 'அனைத்து மண்டலங்களிலும் உள்ள பேங்க் ஆஃப் பரோடா ஊழியர்களின் திறமைமிக்க குழந்தைகள் மற்றும் இளைஞர்களுக்கான பிரத்யேக களம். கலை மற்றும் ரீல்ஸ்களைப் பகிருங்கள், வாட்ஸ்அப்பில் பரப்புங்கள்!',
      ctaSubmit: 'குழந்தையின் பதிவைச் சமர்ப்பிக்கவும்',
      ctaGames: 'பசுமை விளையாட்டுகள்',
      ctaQuiz: 'ஈகோ வினாடி வினா',
      statLiveEntries: 'அங்கீகரிக்கப்பட்ட பதிவுகள்',
      statLikes: 'குடும்ப ஆதரவு',
      statZones: '12 மண்டலங்கள்',
      statZonesDesc: 'அகில இந்திய பங்கேற்பு',
      statDaysLeft: '14 நாட்கள் மீதம்',
      statDaysLeftDesc: 'சமர்ப்பிக்க கடைசி நாட்கள்',
      themesTitle: 'போட்டியின் அதிகாரப்பூர்வ கருப்பொருள்கள்'
    },
    themes: {
      water_label: 'ஜல் சக்தி (நீர் சேமிப்பு)',
      water_desc: 'மழைநீர் சேகரிப்பு, நதி பாதுகாப்பு மற்றும் நீர் மேலாண்மை',
      energy_label: 'சுத்தமான ஆற்றல் புரட்சி',
      energy_desc: 'சூரிய மின்சக்தி, பசுமை கிளைகள் மற்றும் எல்இடி விளக்குகள்',
      waste_label: 'தூய்மை பரோடா (கழிவிலிருந்து வளம்)',
      waste_desc: 'கழிவு பிரிப்பு, பிளாஸ்டிக் இல்லா வாழ்வு மற்றும் மறுசுழற்சி',
      green_branch_label: 'பசுமை BOB கிளை',
      green_branch_desc: 'காகிதமில்லா டிஜிட்டல் வங்கி, மரம் நடுதல் மற்றும் சுற்றுச்சூழல் பாதுகாப்பு'
    },
    gallery: {
      title: 'படைப்பு கண்காட்சி & வாக்களிப்பு',
      subtitle: 'BOB குடும்ப குழந்தைகளின் அற்புதமான ஓவியங்கள் மற்றும் வீடியோ ரீல்ஸ்களைக் கண்டு களியுங்கள். இதயக்குறியீட்டைத் தட்டி உற்சாகப்படுத்துங்கள்!',
      searchPlaceholder: 'பெயர், தலைப்பு, கிளை அல்லது EC எண் மூலம் தேடுக...',
      allThemes: 'அனைத்து தலைப்புகள்',
      allAges: 'அனைத்து வயதினர்',
      allCategories: 'அனைத்து வகை',
      artOnly: 'ஓவியங்கள் & கலை',
      reelsOnly: 'ஈகோ ரீல்ஸ்',
      subJunior: 'சப்-ஜூனியர் (வயது 4-8)',
      junior: 'ஜூனியர் (வயது 9-13)',
      teen: 'டீன் (வயது 14-18)',
      sortBy: 'வரிசைப்படுத்துக',
      mostLiked: 'அதிக விருப்பங்கள்',
      newest: 'புதியவை முதலில்',
      juryPicks: 'நடுவர் தேர்வு',
      showing: 'காண்பிக்கப்படுகிறது',
      ofEntries: 'பதிவுகள்',
      noEntries: 'பொருத்தமான பதிவுகள் எதுவும் இல்லை. தேடலை மாற்றி முயற்சிக்கவும்!',
      encourage: 'ஊக்கப்படுத்துங்கள்',
      encouraged: 'ஊக்கப்படுத்தப்பட்டது!',
      viewEntry: 'பதிவைக் காண்க',
      shareWhatsApp: 'வாட்ஸ்அப்பில் பகிரவும்',
      copied: 'இணைப்பு நகலெடுக்கப்பட்டது!',
      employeeStaffId: 'EC எண்'
    },
    submission: {
      title: 'குழந்தையின் படைப்பைச் சமர்ப்பிக்கவும்',
      subtitle: 'உங்கள் குழந்தையின் படைப்பாற்றலைக் கொண்டாடுங்கள் மற்றும் சுற்றுச்சூழல் விழிப்புணர்வை பரப்புங்கள்!',
      step1: 'படி 1: ஊழியர் & கிளை சரிபார்ப்பு',
      step2: 'படி 2: குழந்தை & பதிவு விவரங்கள்',
      step3: 'படி 3: கலை/ரீல் மற்றும் பசுமைச் செய்தி பதிவேற்றம்',
      empName: 'ஊழியர் பெயர்',
      empId: 'EC எண் (பணியாளர் எண்)',
      empEmail: 'அலுவலக வங்கி மின்னஞ்சல்',
      empPhone: 'மொபைல் எண் (வாட்ஸ்அப்)',
      zone: 'வங்கி மண்டலம்',
      branch: 'கிளை / அலுவலகப் பெயர்',
      childName: 'குழந்தையின் முழுப் பெயர்',
      childAge: 'குழந்தையின் வயது',
      ageGroup: 'வயதுப் பிரிவு',
      category: 'போட்டிப் பிரிவு',
      theme: 'இஎஸ்ஜி தலைப்பு',
      entryTitle: 'படைப்பின் தலைப்பு',
      greenMessage: 'குழந்தையின் பசுமைச் செய்தி / உறுதிமொழி',
      uploadMedia: 'கோப்பை பதிவேற்றவும்',
      uploadHintArt: 'JPG, PNG, WEBP (அதிகபட்சம் 15MB)',
      uploadHintReel: 'MP4, MOV (அதிகபட்சம் 60 வினாடி, 50MB)',
      terms: 'நான் பேங்க் ஆஃப் பரோடா ஊழியர் என்பதையும், இது என் குழந்தையின் சொந்தப் படைப்பு என்பதையும் உறுதிப்படுத்துகிறேன்.',
      submitBtn: 'பதிவைச் சமர்ப்பிக்கவும்',
      submitting: 'சமர்ப்பிக்கப்படுகிறது...',
      successTitle: 'வெற்றிகரமாகச் சமர்ப்பிக்கப்பட்டது!',
      successMsg: 'உங்கள் பதிவு நடுவர் குழுவின் ஆய்வுக்கு அனுப்பப்பட்டுள்ளது.',
      guidelines: 'விதிமுறைகள் மற்றும் வழிகாட்டுதல்கள்',
      cancel: 'ரத்து செய்'
    },
    learn: {
      title: 'குழந்தைகளுக்கான இஎஸ்ஜி மையம்',
      subtitle: 'எளிய கதைகள் மற்றும் வினாடி வினாக்கள் மூலம் இயற்கையையும் சமூகத்தையும் அறியலாம்',
      envTitle: 'சுற்றுச்சூழல் (E)',
      envDesc: 'பூமி பாதுகாப்பு, நீர் சேமிப்பு, தூய காற்று மற்றும் புதுப்பிக்கத்தக்க ஆற்றல்.',
      socTitle: 'சமூக நலம் (S)',
      socDesc: 'சமூக மேம்பாடு, நிதி விழிப்புணர்வு மற்றும் சமத்துவம்.',
      govTitle: 'நல் ஆளுமை (G)',
      govDesc: 'நேர்மை, நெறிமுறை வங்கிச் சேவை, வெளிப்படைத்தன்மை மற்றும் நம்பிக்கை.',
      quizTitle: 'யங் சாம்பியன் ஈகோ வினாடி வினா',
      question: 'கேள்வி',
      of: 'இல்',
      score: 'உங்கள் மதிப்பெண்',
      retake: 'மீண்டும் வினாடி வினா விளையாடு'
    },
    arcade: {
      title: 'BOB ஈகோ ஆர்கேட்',
      subtitle: 'சுற்றுச்சூழல் பழக்கங்களை விளையாட்டுகள் மூலம் கற்றுக்கொள்ளுங்கள்',
      wasteTitle: 'கழிவு பிரிப்பு சவால்',
      wasteDesc: 'நேரம் முடிவதற்குள் ஈர, உலர் மற்றும் மின்னணுக் கழிவுகளைச் சரியான தொட்டியில் போடுங்கள்!',
      energyTitle: 'பசுமை ஆற்றல் சவால்',
      energyDesc: 'சூரிய மற்றும் காற்று ஆற்றலால் பசுமைக் கிளையை ஒளிரச் செய்யுங்கள்.',
      footprintTitle: 'கார்பன் தடம் கால்குலேட்டர்',
      footprintDesc: 'உங்கள் சுற்றுச்சூழல் மதிப்பெண்ணை அறிந்து பசுமை சாம்பியன் பேட்ஜ் பெறுங்கள்.',
      scoreLabel: 'புள்ளிகள்',
      playAgain: 'மீண்டும் விளையாடு'
    },
    footer: {
      aboutTitle: 'பேங்க் ஆஃப் பரோடா இஎஸ்ஜி தளம்',
      aboutDesc: 'இஎஸ்ஜி மற்றும் காலநிலை இடர் பிரிவு, கார்ப்பரேட் அலுவலகம், பாந்த்ரா குர்லா வளாகம் (BKC), மும்பையின் முயற்சி.',
      quickLinks: 'முக்கிய இணைப்புகள்',
      helpline: 'உதவி எண்',
      address: 'கார்ப்பரேட் மையம்: C-26, G-பிளாக், BKC, பாந்த்ரா (கிழக்கு), மும்பை 400051',
      copyright: '© 2026 பேங்க் ஆஃப் பரோடா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
    }
  },

  // 7. Telugu (తెలుగు)
  te: {
    nav: {
      brand: 'బ్యాంక్ ఆఫ్ బరోడా',
      esgCell: 'ESG మరియు క్లైమేట్ రిస్క్ సెల్',
      portalName: 'యంగ్ ఛాంపియన్స్ పోర్టల్',
      gallery: 'గ్యాలరీ & ఎంట్రీలు',
      submit: 'పిల్లల ఎంట్రీని సమర్పించండి',
      learn: 'ESG కిడ్స్ హబ్',
      arcade: 'ఎకో ఆర్కేడ్',
      admin: 'జ్యూరీ & అడ్మిన్',
      submitCta: 'సమర్పించండి',
      gamesBadge: 'గేమ్స్',
      language: 'భాష'
    },
    hero: {
      bankName: 'బ్యాంక్ ఆఫ్ బరోడా',
      cellInitiative: 'ESG మరియు క్లైమేట్ రిస్క్ సెల్ చొరవ',
      internalPortal: 'అంతర్గత బ్యాంక్ పోర్టల్',
      titlePart1: 'యువ ఆలోచనలు,',
      titlePart2: 'హరిత భవిష్యత్తు:',
      titlePart3: 'BOB ESG ఛాంపియన్ 2026',
      subtitle: 'అన్ని జోన్లలోని బ్యాంక్ ఆఫ్ బరోడా ఉద్యోగుల ప్రతిభావంతులైన పిల్లల కోసం ప్రత్యేక వేదిక. చిత్రాలు & రీల్స్ షేర్ చేయండి, వాట్సాప్‌లో ప్రచారం చేయండి!',
      ctaSubmit: 'పిల్లల ఎంట్రీని సమర్పించండి',
      ctaGames: 'ఎకో గేమ్స్ ఆడండి',
      ctaQuiz: 'ఎకో క్విజ్ రాయండి',
      statLiveEntries: 'ఆమోదించబడిన ఎంట్రీలు',
      statLikes: 'కుటుంబ ప్రోత్సాహం',
      statZones: '12 జోన్లు',
      statZonesDesc: 'అఖిల భారత భాగస్వామ్యం',
      statDaysLeft: '14 రోజులు మిగిలి ఉన్నాయి',
      statDaysLeftDesc: 'ఎంట్రీల సమర్పణకు గడువు',
      themesTitle: 'పోటీ అధికారిక థీమ్‌లు (ఏదైనా ఒకటి ఎంచుకోండి)'
    },
    themes: {
      water_label: 'జల శక్తి (నీటి సంరక్షణ)',
      water_desc: 'వర్షపు నీటి సంరక్షణ, నదుల పునరుజ్జీవనం మరియు నీటి పొదుపు',
      energy_label: 'స్వచ్ఛ ఇంధన విప్లవం',
      energy_desc: 'సౌర విద్యుత్, గ్రీన్ బ్రాంచ్ కార్యక్రమాలు మరియు విద్యుత్ ఆదా',
      waste_label: 'స్వచ్ఛ బరోడా (వ్యర్థాల నిర్వహణ)',
      waste_desc: 'వ్యర్థాల వేరుచేత, ప్లాస్టిక్ రహిత జీవనం మరియు రీసైక్లింగ్',
      green_branch_label: 'గ్రీన్ BOB బ్రాంచ్',
      green_branch_desc: 'పేపర్‌లెస్ డిజిటల్ బ్యాంకింగ్, మొక్కలు నాటడం మరియు పర్యావరణ జీవనశైలి'
    },
    gallery: {
      title: 'సృజనాత్మక ప్రదర్శన & ఓటింగ్',
      subtitle: 'BOB కుటుంబ పిల్లల అద్భుతమైన పెయింటింగ్స్ మరియు రీల్స్ వీక్షించండి. లైక్ చేసి ప్రోత్సహించండి!',
      searchPlaceholder: 'పేరు, శీర్షిక, బ్రాంచ్ లేదా EC నంబర్ ద్వారా శోధించండి...',
      allThemes: 'అన్ని థీమ్‌లు',
      allAges: 'అన్ని వయసుల వారు',
      allCategories: 'అన్ని రకాలు',
      artOnly: 'చిత్రకళ & ఆర్ట్',
      reelsOnly: 'ఎకో రీల్స్',
      subJunior: 'సబ్-జూనియర్ (వయస్సు 4-8)',
      junior: 'జూనియర్ (వయస్సు 9-13)',
      teen: 'టీన్ (వయస్సు 14-18)',
      sortBy: 'క్రమబద్ధీకరించండి',
      mostLiked: 'ఎక్కువగా ఇష్టపడినవి',
      newest: 'కొత్తవి మొదట',
      juryPicks: 'జ్యూరీ ఎంపికలు',
      showing: 'చూపిస్తున్నాం',
      ofEntries: 'ఎంట్రీలు',
      noEntries: 'ఫిల్టర్‌లకు సరిపోలే ఎంట్రీలు ఏవీ కనుగొనబడలేదు!',
      encourage: 'ప్రోత్సహించండి',
      encouraged: 'ప్రోత్సహించారు!',
      viewEntry: 'ఎంట్రీని చూడండి',
      shareWhatsApp: 'వాట్సాప్‌లో షేర్ చేయండి',
      copied: 'లింక్ కాపీ అయింది!',
      employeeStaffId: 'EC నెం.'
    },
    submission: {
      title: 'పిల్లల సృజనాత్మక ఎంట్రీని సమర్పించండి',
      subtitle: 'మీ పిల్లల ప్రతిభను ప్రోత్సహించండి మరియు బ్యాంక్ ఆఫ్ బరోడా అంతటా పర్యావరణ సందేశాన్ని వ్యాపింపజేయండి!',
      step1: 'దశ 1: ఉద్యోగి & బ్రాంచ్ ధృవీకరణ',
      step2: 'దశ 2: చాంపియన్ & ఎంట్రీ వివరాలు',
      step3: 'దశ 3: ఆర్ట్/రీల్ & గ్రీన్ సందేశం అప్‌లోడ్',
      empName: 'ఉద్యోగి పేరు',
      empId: 'EC నంబర్ (స్టాఫ్ ఐడీ)',
      empEmail: 'అధికారిక బ్యాంక్ ఈమెయిల్',
      empPhone: 'మొబైల్ నంబర్ (వాట్సాప్)',
      zone: 'బ్యాంక్ జోన్',
      branch: 'బ్రాంచ్ / కార్యాలయం పేరు',
      childName: 'పిల్లల పూర్తి పేరు',
      childAge: 'పిల్లల వయస్సు',
      ageGroup: 'వయోవర్గం',
      category: 'పోటీ విభాగం',
      theme: 'ESG పోటీ థీమ్',
      entryTitle: 'ఆర్ట్ / రీల్ శీర్షిక',
      greenMessage: 'పిల్లల పర్యావరణ సందేశం / ప్రతిజ్ఞ',
      uploadMedia: 'మీడియా ఫైల్ అప్‌లోడ్ చేయండి',
      uploadHintArt: 'JPG, PNG, WEBP (గరిష్టంగా 15MB)',
      uploadHintReel: 'MP4, MOV (గరిష్టంగా 60 సెకన్లు, 50MB)',
      terms: 'నేను బ్యాంక్ ఆఫ్ బరోడా ఉద్యోగినని మరియు ఇది నా పిల్లల అసలు సృజనాత్మక రచన అని ధృవీకరిస్తున్నాను.',
      submitBtn: 'పోటీ ఎంట్రీని సమర్పించండి',
      submitting: 'సమర్పిస్తున్నాము...',
      successTitle: 'ఎంట్రీ విజయవంతంగా సమర్పించబడింది!',
      successMsg: 'మీ ఎంట్రీ జ్యూరీ పరిశీలనకు పంపబడింది.',
      guidelines: 'అధికారిక మార్గదర్శకాలు మరియు నిబంధనలు',
      cancel: 'రద్దు చేయి'
    },
    learn: {
      title: 'పిల్లల కోసం ESG లెర్నింగ్ హబ్',
      subtitle: 'సరళమైన కథలు మరియు క్విజ్‌ల ద్వారా పర్యావరణం, సమాజం మరియు సుపరిపాలన గురించి తెలుసుకోండి',
      envTitle: 'పర్యావరణం (E)',
      envDesc: 'భూమి రక్షణ, నీటి ఆదా, స్వచ్ఛమైన గాలి మరియు పునరుత్పాదక శక్తి.',
      socTitle: 'సామాజికం (S)',
      socDesc: 'సామాజిక సంక్షేమం, ఆర్థిక అవగాహన మరియు సమానత్వం.',
      govTitle: 'సుపరిపాలన (G)',
      govDesc: 'నిజాయితీ, నైతిక బ్యాంకింగ్, పారదర్శకత మరియు నమ్మకం.',
      quizTitle: 'యంగ్ ఛాంపియన్ ఎకో క్విజ్',
      question: 'ప్రశ్న',
      of: 'లో',
      score: 'మీ స్కోర్',
      retake: 'మళ్లీ క్విజ్ ఆడండి'
    },
    arcade: {
      title: 'BOB ఎకో ఆర్కేడ్',
      subtitle: 'ఆటల ద్వారా పర్యావరణ పరిరక్షణ అలవాట్లను నేర్చుకోండి',
      wasteTitle: 'చెత్త వేరుచేసే ఆట',
      wasteDesc: 'సమయం ముగిసేలోపు తడి, పొడి మరియు ఇ-వ్యర్థాలను సరైన డబ్బాలో వేయండి!',
      energyTitle: 'స్వచ్ఛ ఇంధన సవాలు',
      energyDesc: 'సౌర మరియు పవన శక్తితో గ్రీన్ బ్రాంచ్‌ను వెలిగించండి.',
      footprintTitle: 'కార్బన్ పాదముద్ర కాలిక్యులేటర్',
      footprintDesc: 'మీ రోజువారీ పర్యావరణ స్కోర్‌ను లెక్కించి గ్రీన్ బ్యాడ్జ్ పొందండి.',
      scoreLabel: 'ఎకో పాయింట్లు',
      playAgain: 'మళ్లీ ఆడండి'
    },
    footer: {
      aboutTitle: 'బ్యాంక్ ఆఫ్ బరోడా ESG పోర్టల్',
      aboutDesc: 'ESG మరియు క్లైమేట్ రిస్క్ సెల్, కార్పొరేట్ కార్యాలయం, బాంద్రా కుర్లా కాంప్లెక్స్ (BKC), ముంబై చొరవ.',
      quickLinks: 'త్వరిత లింకులు',
      helpline: 'హెల్ప్‌లైన్ & మద్దతు',
      address: 'కార్పొరేట్ సెంటర్: C-26, G-బ్లాక్, BKC, బాంద్రా (ఈస్ట్), ముంబై 400051',
      copyright: '© 2026 బ్యాంక్ ఆఫ్ బరోడా. సర్వ హక్కులూ ప్రత్యేకించబడ్డాయి.'
    }
  },

  // 8. Kannada (ಕನ್ನಡ)
  kn: {
    nav: {
      brand: 'ಬ್ಯಾಂಕ್ ಆಫ್ ಬರೋಡಾ',
      esgCell: 'ESG ಮತ್ತು ಹವಾಮಾನ ಅಪಾಯ ಕೋಶ',
      portalName: 'ಯಂಗ್ ಚಾಂಪಿಯನ್ಸ್ ಪೋರ್ಟಲ್',
      gallery: 'ಗ್ಯಾಲರಿ & ಕೃತಿಗಳು',
      submit: 'ಮಗುವಿನ ಕೃತಿ ಸಲ್ಲಿಸಿ',
      learn: 'ESG ಕಿಡ್ಸ್ ಹಬ್',
      arcade: 'ಇಕೋ ಆರ್ಕೇಡ್',
      admin: 'ತೀರ್ಪುಗಾರರು & ಆಡಳಿತ',
      submitCta: 'ಸಲ್ಲಿಸಿ',
      gamesBadge: 'ಆಟಗಳು',
      language: 'ಭಾಷೆ'
    },
    hero: {
      bankName: 'ಬ್ಯಾಂಕ್ ಆಫ್ ಬರೋಡಾ',
      cellInitiative: 'ESG ಮತ್ತು ಹವಾಮಾನ ಅಪಾಯ ಕೋಶದ ಉಪಕ್ರಮ',
      internalPortal: 'ಆಂತರಿಕ ಬ್ಯಾಂಕ್ ಪೋರ್ಟಲ್',
      titlePart1: 'ಯುವ ಮನಸ್ಸುಗಳು,',
      titlePart2: 'ಹಸಿರು ಭವಿಷ್ಯ:',
      titlePart3: 'BOB ESG ಚಾಂಪಿಯನ್ 2026',
      subtitle: 'ಎಲ್ಲಾ ವಲಯಗಳ ಬ್ಯಾಂಕ್ ಆಫ್ ಬರೋಡಾ ಉದ್ಯೋಗಿಗಳ ಪ್ರತಿಭಾವಂತ ಮಕ್ಕಳಿಗೆ ವಿಶೇಷ ವೇದಿಕೆ. ಕಲೆ & ರೀಲ್ಸ್‌ಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ, ಪರಿಸರ ಸಂರಕ್ಷಣೆ ಕಲಿಯಿರಿ!',
      ctaSubmit: 'ಮಗುವಿನ ಕೃತಿ ಸಲ್ಲಿಸಿ',
      ctaGames: 'ಇಕೋ ಆಟಗಳನ್ನು ಆಡಿ',
      ctaQuiz: 'ಇಕೋ ರಸಪ್ರಶ್ನೆ ಉತ್ತರಿಸಿ',
      statLiveEntries: 'ಅನುಮೋದಿತ ಕೃತಿಗಳು',
      statLikes: 'ಕುಟುಂಬದ ಪ್ರೋತ್ಸಾಹ',
      statZones: '12 ವಲಯಗಳು',
      statZonesDesc: 'ಅಖಿಲ ಭಾರತ ಸಹಭಾಗಿತ್ವ',
      statDaysLeft: '14 ದಿನಗಳು ಬಾಕಿ',
      statDaysLeftDesc: 'ಕೃತಿ ಸಲ್ಲಿಸಲು ಕಡೆಯ ದಿನಗಳು',
      themesTitle: 'ಸ್ಪರ್ಧೆಯ ಅಧಿಕೃತ ವಿಷಯಗಳು (ಯಾವುದಾದರೂ ಒಂದನ್ನು ಆಯ್ಕೆಮಾಡಿ)'
    },
    themes: {
      water_label: 'ಜಲ ಶಕ್ತಿ (ನೀರು ಸಂರಕ್ಷಣೆ)',
      water_desc: 'ಮಳೆನೀರು ಕೊಯ್ಲು, ನದಿ ಸಂರಕ್ಷಣೆ ಮತ್ತು ನೀರಿನ ಮಿತವ್ಯಯ',
      energy_label: 'ಸ್ವಚ್ಛ ಇಂಧನ ಕ್ರಾಂತಿ',
      energy_desc: 'ಸೌರಶಕ್ತಿ, ಹಸಿರು ಶಾಖಾ ಉಪಕ್ರಮಗಳು ಮತ್ತು ಎಲ್‌ಇಡಿ ಬಳಕೆ',
      waste_label: 'ಸ್ವಚ್ಛ ಬರೋಡಾ (ತ್ಯಾಜ್ಯದಿಂದ ಸಂಪತ್ತು)',
      waste_desc: 'ಕಸ ವಿಂಗಡಣೆ, ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜೀವನ ಮತ್ತು ಮರುಬಳಕೆ',
      green_branch_label: 'ಹಸಿರು BOB ಶಾಖೆ',
      green_branch_desc: 'ಕಾಗದರಹಿತ ಡಿಜಿಟಲ್ ಬ್ಯಾಂಕಿಂಗ್, ಗಿಡ ನೆಡುವಿಕೆ ಮತ್ತು ಪರಿಸರ ಸ್ನೇಹಿ ಜೀವನ'
    },
    gallery: {
      title: 'ಸೃಜನಶೀಲ ಪ್ರದರ್ಶನ & ಮತದಾನ',
      subtitle: 'BOB ಕುಟುಂಬದ ಮಕ್ಕಳ ಸುಂದರ ಕಲಾಕೃತಿಗಳು ಮತ್ತು ರೀಲ್ಸ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ. ಲೈಕ್ ಮಾಡುವ ಮೂಲಕ ಪ್ರೋತ್ಸಾಹಿಸಿ!',
      searchPlaceholder: 'ಹೆಸರು, ಶೀರ್ಷಿಕೆ, ಶಾಖೆ ಅಥವಾ EC ಸಂಖ್ಯೆಯಿಂದ ಹುಡುಕಿ...',
      allThemes: 'ಎಲ್ಲಾ ವಿಷಯಗಳು',
      allAges: 'ಎಲ್ಲಾ ವಯೋಮಾನ',
      allCategories: 'ಎಲ್ಲಾ ವಿಭಾಗ',
      artOnly: 'ಚಿತ್ರಕಲೆ & ಕಲೆ',
      reelsOnly: 'ಇಕೋ ರೀಲ್ಸ್',
      subJunior: 'ಸಬ್-ಜೂನಿಯರ್ (ವಯಸ್ಸು 4-8)',
      junior: 'ಜೂನಿಯರ್ (ವಯಸ್ಸು 9-13)',
      teen: 'ಟೀನ್ (ವಯಸ್ಸು 14-18)',
      sortBy: 'ವಿಂಗಡಿಸಿ',
      mostLiked: 'ಹೆಚ್ಚು ಇಷ್ಟಪಟ್ಟವು',
      newest: 'ಹೊಸದು ಮೊದಲು',
      juryPicks: 'ತೀರ್ಪುಗಾರರ ಆಯ್ಕೆ',
      showing: 'ತೋರಿಸಲಾಗುತ್ತಿದೆ',
      ofEntries: 'ಕೃತಿಗಳು',
      noEntries: 'ಯಾವುದೇ ಕೃತಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ಹುಡುಕಾಟವನ್ನು ಬದಲಾಯಿಸಿ!',
      encourage: 'ಪ್ರೋತ್ಸಾಹಿಸಿ',
      encouraged: 'ಪ್ರೋತ್ಸಾಹಿಸಲಾಗಿದೆ!',
      viewEntry: 'ಕೃತಿ ವೀಕ್ಷಿಸಿ',
      shareWhatsApp: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ',
      copied: 'ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ!',
      employeeStaffId: 'EC ಸಂ.'
    },
    submission: {
      title: 'ಮಗುವಿನ ಸೃಜನಶೀಲ ಕೃತಿ ಸಲ್ಲಿಸಿ',
      subtitle: 'ನಿಮ್ಮ ಮಗುವಿನ ಪ್ರತಿಭೆಯನ್ನು ಬೆಂಬಲಿಸಿ ಮತ್ತು ಪರಿಸರ ಸಂರಕ್ಷಣೆಯ ಸಂದೇಶವನ್ನು ಹರಡಿ!',
      step1: 'ಹಂತ 1: ಉದ್ಯೋಗಿ & ಶಾಖಾ ಪರಿಶೀಲನೆ',
      step2: 'ಹಂತ 2: ಚಾಂಪಿಯನ್ & ಕೃತಿ ವಿವರ',
      step3: 'ಹಂತ 3: ಕಲಾಕೃತಿ/ರೀಲ್ ಮತ್ತು ಹಸಿರು ಸಂದೇಶ ಅಪ್‌ಲೋಡ್',
      empName: 'ಉದ್ಯೋಗಿಯ ಹೆಸರು',
      empId: 'EC ಸಂಖ್ಯೆ (ಸಿಬ್ಬಂದಿ ಐಡಿ)',
      empEmail: 'ಅಧಿಕೃತ ಬ್ಯಾಂಕ್ ಇಮೇಲ್',
      empPhone: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (ವಾಟ್ಸಾಪ್)',
      zone: 'ಬ್ಯಾಂಕ್ ವಲಯ',
      branch: 'ಶಾಖೆ / ಕಚೇರಿಯ ಹೆಸರು',
      childName: 'ಮಗುವಿನ ಪೂರ್ಣ ಹೆಸರು',
      childAge: 'ಮಗುವಿನ ವಯಸ್ಸು',
      ageGroup: 'ವಯಸ್ಸಿನ ವರ್ಗ',
      category: 'ಸ್ಪರ್ಧೆಯ ವರ್ಗ',
      theme: 'ESG ಸ್ಪರ್ಧೆಯ ವಿಷಯ',
      entryTitle: 'ಕಲೆಯ / ರೀಲ್‌ನ ಶೀರ್ಷಿಕೆ',
      greenMessage: 'ಮಗುವಿನ ಹಸಿರು ಸಂದೇಶ / ಪರಿಸರ ಪ್ರತಿಜ್ಞೆ',
      uploadMedia: 'ಮಾಧ್ಯಮ ಫೈಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
      uploadHintArt: 'JPG, PNG, WEBP (ಗರಿಷ್ಠ 15MB)',
      uploadHintReel: 'MP4, MOV (ಗರಿಷ್ಠ 60 ಸೆಕೆಂಡ್, 50MB)',
      terms: 'ನಾನು ಬ್ಯಾಂಕ್ ಆಫ್ ಬರೋಡಾ ಉದ್ಯೋಗಿಯಾಗಿದ್ದೇನೆ ಮತ್ತು ಇದು ನನ್ನ ಮಗುವಿನ ಮೂಲ ಕೃತಿಯಾಗಿದೆ ಎಂದು ದೃಢೀಕರಿಸುತ್ತೇನೆ.',
      submitBtn: 'ಸ್ಪರ್ಧೆಯ ಕೃತಿ ಸಲ್ಲಿಸಿ',
      submitting: 'ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...',
      successTitle: 'ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!',
      successMsg: 'ನಿಮ್ಮ ಕೃತಿಯನ್ನು ತೀರ್ಪುಗಾರರ ಪರಿಶೀಲನೆಗೆ ಕಳುಹಿಸಲಾಗಿದೆ.',
      guidelines: 'ಅಧಿಕೃತ ನಿಯಮಗಳು ಮತ್ತು ಮಾರ್ಗಸೂಚಿಗಳು',
      cancel: 'ರದ್ದುಮಾಡಿ'
    },
    learn: {
      title: 'ಮಕ್ಕಳಿಗಾಗಿ ESG ಕಲಿಕಾ ಕೇಂದ್ರ',
      subtitle: 'ಸರಳ ಕಥೆಗಳು ಮತ್ತು ರಸಪ್ರಶ್ನೆಗಳ ಮೂಲಕ ಪರಿಸರ, ಸಮಾಜ ಮತ್ತು ಸುಶಾಸನವನ್ನು ತಿಳಿಯಿರಿ',
      envTitle: 'ಪರಿಸರ (E)',
      envDesc: 'ಭೂಮಿ ಸಂರಕ್ಷಣೆ, ನೀರು ಉಳಿತಾಯ, ಶುದ್ಧ ಗಾಳಿ ಮತ್ತು ನವೀಕರಿಸಬಹುದಾದ ಶಕ್ತಿ.',
      socTitle: 'ಸಾಮಾಜಿಕ (S)',
      socDesc: 'ಸಮುದಾಯ ಕಲ್ಯಾಣ, ಆರ್ಥಿಕ ಸಾಕ್ಷರತೆ ಮತ್ತು ಸಮಾನತೆ.',
      govTitle: 'ಸುಶಾಸನ (G)',
      govDesc: 'ಪ್ರಾಮಾಣಿಕತೆ, ನೈತಿಕ ಬ್ಯಾಂಕಿಂಗ್, ಪಾರದರ್ಶಕತೆ ಮತ್ತು ನಂಬಿಕೆ.',
      quizTitle: 'ಯಂಗ್ ಚಾಂಪಿಯನ್ ಇಕೋ ರಸಪ್ರಶ್ನೆ',
      question: 'ಪ್ರಶ್ನೆ',
      of: 'ರಲ್ಲಿ',
      score: 'ನಿಮ್ಮ ಅಂಕಗಳು',
      retake: 'ಮತ್ತೆ ರಸಪ್ರಶ್ನೆ ಆಡಿ'
    },
    arcade: {
      title: 'BOB ಇಕೋ ಆರ್ಕೇಡ್',
      subtitle: 'ಆಟಗಳ ಮೂಲಕ ಪರಿಸರಸ್ನೇಹಿ ಅಭ್ಯಾಸಗಳನ್ನು ಕಲಿಯಿರಿ',
      wasteTitle: 'ಕಸ ವಿಂಗಡಣಾ ಸವಾಲು',
      wasteDesc: 'ಸಮಯ ಮುಗಿಯುವ ಮುನ್ನ ಹಸಿ, ಒಣ ಮತ್ತು ಇ-ತ್ಯಾಜ್ಯವನ್ನು ಸರಿಯಾದ ಬುಟ್ಟಿಗೆ ಹಾಕಿ!',
      energyTitle: 'ಸ್ವಚ್ಛ ಇಂಧನ ಸವಾಲು',
      energyDesc: 'ಸೌರ ಮತ್ತು ಪವನ ಶಕ್ತಿಯಿಂದ ಶಾಖೆಯನ್ನು ಬೆಳಗಿಸಿ.',
      footprintTitle: 'ಕಾರ್ಬನ್ ಹೆಜ್ಜೆಗುರುತು ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      footprintDesc: 'ನಿಮ್ಮ ಪರಿಸರ ಸ್ಕೋರ್ ಲೆಕ್ಕಹಾಕಿ ಮತ್ತು ಗ್ರೀನ್ ಬ್ಯಾಡ್ಜ್ ಪಡೆಯಿರಿ.',
      scoreLabel: 'ಇಕೋ ಅಂಕಗಳು',
      playAgain: 'ಮತ್ತೆ ಆಡಿ'
    },
    footer: {
      aboutTitle: 'ಬ್ಯಾಂಕ್ ಆಫ್ ಬರೋಡಾ ESG ಪೋರ್ಟಲ್',
      aboutDesc: 'ESG ಮತ್ತು ಹವಾಮಾನ ಅಪಾಯ ಕೋಶ, ಕಾರ್ಪೊರೇಟ್ ಕಚೇರಿ, ಬಾಂದ್ರಾ ಕುರ್ಲಾ ಕಾಂಪ್ಲೆಕ್ಸ್ (BKC), ಮುಂಬೈ ಉಪಕ್ರಮ.',
      quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
      helpline: 'ಸಹಾಯವಾಣಿ',
      address: 'ಕಾರ್ಪೊರೇಟ್ ಕೇಂದ್ರ: C-26, G-ಬ್ಲಾಕ್, BKC, ಬಾಂದ್ರಾ (ಪೂರ್ವ), ಮುಂಬೈ 400051',
      copyright: '© 2026 ಬ್ಯಾಂಕ್ ಆಫ್ ಬರೋಡಾ. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.'
    }
  },

  // 9. Malayalam (മലയാളം)
  ml: {
    nav: {
      brand: 'ബാങ്ക് ഓഫ് ബറോഡ',
      esgCell: 'ഇഎസ്ജി & ക്ലൈമറ്റ് റിസ്ക് സെൽ',
      portalName: 'യങ് ചാമ്പ്യൻസ് പോർട്ടൽ',
      gallery: 'ഗ്യാലറി & എന്‍ട്രികള്‍',
      submit: 'കുട്ടിയുടെ സൃഷ്ടി സമർപ്പിക്കുക',
      learn: 'ഇഎസ്ജി കിഡ്സ് ഹബ്',
      arcade: 'ഇക്കോ ആർക്കേഡ്',
      admin: 'ജൂറി & അഡ്മിൻ',
      submitCta: 'സമർപ്പിക്കുക',
      gamesBadge: 'ഗെയിമുകൾ',
      language: 'ഭാഷ'
    },
    hero: {
      bankName: 'ബാങ്ക് ഓഫ് ബറോഡ',
      cellInitiative: 'ഇഎസ്ജി & ക്ലൈമറ്റ് റിസ്ക് സെൽ സംരംഭം',
      internalPortal: 'ആന്തരിക ബാങ്ക് പോർട്ടൽ',
      titlePart1: 'യുവ ചിന്തകൾ,',
      titlePart2: 'ഹരിത ഭാവി:',
      titlePart3: 'BOB ഇഎസ്ജി ചാമ്പ്യൻ 2026',
      subtitle: 'എല്ലാ സോണുകളിലെയും ബാങ്ക് ഓഫ് ബറോഡ ജീവനക്കാരുടെ കഴിവുറ്റ കുട്ടികൾക്കായുള്ള വേദി. ചിത്രങ്ങളും റീലുകളും പങ്കിടൂ, പ്രകൃതിസംരക്ഷണം പഠിക്കൂ!',
      ctaSubmit: 'കുട്ടിയുടെ സൃഷ്ടി സമർപ്പിക്കുക',
      ctaGames: 'ഇക്കോ ഗെയിംസ് കളിക്കൂ',
      ctaQuiz: 'ഇക്കോ ക്വിസ് പങ്കെടുക്കൂ',
      statLiveEntries: 'അംഗീകൃത സൃഷ്ടികൾ',
      statLikes: 'കുടുംബ പിന്തുണ',
      statZones: '12 സോണുകൾ',
      statZonesDesc: 'അഖിലേന്ത്യാ പങ്കാളിത്തം',
      statDaysLeft: '14 ദിവസങ്ങൾ ബാക്കി',
      statDaysLeftDesc: 'സമർപ്പിക്കാനുള്ള അവസാന തീയതി',
      themesTitle: 'മത്സരത്തിന്റെ ഔദ്യോഗിക വിഷയങ്ങൾ'
    },
    themes: {
      water_label: 'ജൽ ശക്തി (ജല സംരക്ഷണം)',
      water_desc: 'മഴവെള്ള സംഭരണം, പുഴ സംരക്ഷണം, തുള്ളി വെള്ളവും പാഴാക്കാതിരിക്കൽ',
      energy_label: 'ശുദ്ധ ഊർജ്ജ വിപ്ലവം',
      energy_desc: 'സൗരോർജ്ജം, ഗ്രീൻ ബ്രാഞ്ച് സംരംഭങ്ങൾ, എൽഇഡി ഉപയോഗം',
      waste_label: 'സ്വച്ഛ് ബറോഡ (മാലിന്യ സംസ്കരണം)',
      waste_desc: 'മാലിന്യ വേർതിരിക്കൽ, പ്ലാസ്റ്റിക് രഹിത ജീവിതം, പുനരുപയോഗം',
      green_branch_label: 'ഹരിത BOB ശാഖ',
      green_branch_desc: 'പേപ്പർ രഹിത ഡിജിറ്റൽ ബാങ്കിംഗ്, വൃക്ഷത്തൈ നടീൽ, ഹരിത ജീവിതശൈലി'
    },
    gallery: {
      title: 'സൃഷ്ടികളുടെ പ്രദർശനം & വോട്ടിംഗ്',
      subtitle: 'BOB കുടുംബത്തിലെ കുട്ടികളുടെ മനോഹര ചിത്രങ്ങളും വീഡിയോകളും കാണൂ. ലൈക്ക് ചെയ്ത് പ്രോത്സാഹിപ്പിക്കൂ!',
      searchPlaceholder: 'പേര്, ശീർഷകം, ശാഖ അല്ലെങ്കിൽ EC നമ്പർ ഉപയോഗിച്ച് തിരയൂ...',
      allThemes: 'എല്ലാ വിഷയങ്ങളും',
      allAges: 'എല്ലാ പ്രായക്കാരും',
      allCategories: 'എല്ലാ മാധ്യമങ്ങളും',
      artOnly: 'ചിത്രകല & ആർട്ട്',
      reelsOnly: 'ഇക്കോ റീലുകൾ',
      subJunior: 'സബ്-ജൂനിയർ (പ്രായം 4-8)',
      junior: 'ജൂനിയർ (പ്രായം 9-13)',
      teen: 'ടീൻ (പ്രായം 14-18)',
      sortBy: 'ക്രമീകരിക്കുക',
      mostLiked: 'ഏറ്റവും കൂടുതൽ ലൈക്കുകൾ',
      newest: 'പുതിയവ ആദ്യം',
      juryPicks: 'ജൂറി തെരഞ്ഞെടുപ്പുകൾ',
      showing: 'കാണിക്കുന്നത്',
      ofEntries: 'എൻട്രികൾ',
      noEntries: 'അനുയോജ്യമായ എൻട്രികൾ കണ്ടെത്തിയില്ല. വീണ്ടും തിരയുക!',
      encourage: 'പ്രോത്സാഹിപ്പിക്കൂ',
      encouraged: 'പ്രോത്സാഹിപ്പിച്ചു!',
      viewEntry: 'കാണുക',
      shareWhatsApp: 'വാട്സാപ്പിൽ പങ്കിടൂ',
      copied: 'ലിങ്ക് കോപ്പി ചെയ്തു!',
      employeeStaffId: 'EC നമ്പർ'
    },
    submission: {
      title: 'കുട്ടിയുടെ സൃഷ്ടി സമർപ്പിക്കുക',
      subtitle: 'നിങ്ങളുടെ കുട്ടിയുടെ സർഗ്ഗാത്മകതയെ അഭിനന്ദിക്കൂ, ഹരിത സന്ദേശം പകരൂ!',
      step1: 'ഘട്ടം 1: ജീവനക്കാരന്റെയും ശാഖയുടെയും വിവരങ്ങൾ',
      step2: 'ഘട്ടം 2: കുട്ടി & സൃഷ്ടിയുടെ വിവരങ്ങൾ',
      step3: 'ഘട്ടം 3: ചിത്രം/റീൽ & ഹരിത സന്ദേശം അപ്‌ലോഡ്',
      empName: 'ജീവനക്കാരന്റെ പേര്',
      empId: 'EC നമ്പർ (സ്റ്റാഫ് ഐഡി)',
      empEmail: 'ഔദ്യോഗിക ബാങ്ക് ഇമെയിൽ',
      empPhone: 'മൊബൈൽ നമ്പർ (വാട്സാപ്പ്)',
      zone: 'ബാങ്ക് സോൺ',
      branch: 'ശാഖ / ഓഫീസിന്റെ പേര്',
      childName: 'കുട്ടിയുടെ പൂർണ്ണ പേര്',
      childAge: 'കുട്ടിയുടെ പ്രായം',
      ageGroup: 'പ്രായ വിഭാഗം',
      category: 'മത്സര വിഭാഗം',
      theme: 'മത്സര വിഷയം',
      entryTitle: 'സൃഷ്ടിയുടെ ശീർഷകം',
      greenMessage: 'കുട്ടിയുടെ ഹരിത സന്ദേശം / പ്രതിജ്ഞ',
      uploadMedia: 'ഫയൽ അപ്‌ലോഡ് ചെയ്യുക',
      uploadHintArt: 'JPG, PNG, WEBP (പരമാവധി 15MB)',
      uploadHintReel: 'MP4, MOV (പരമാവധി 60 സെക്കൻഡ്, 50MB)',
      terms: 'ഞാൻ ബാങ്ക് ഓഫ് ബറോഡ ജീവനക്കാരനാണെന്നും ഇത് എന്റെ കുട്ടിയുടെ സ്വന്തം സൃഷ്ടിയാണെന്നും സാക്ഷ്യപ്പെടുത്തുന്നു.',
      submitBtn: 'സൃഷ്ടി സമർപ്പിക്കുക',
      submitting: 'സമർപ്പിക്കുന്നു...',
      successTitle: 'വിജയകരമായി സമർപ്പിച്ചു!',
      successMsg: 'നിങ്ങളുടെ സൃഷ്ടി ജൂറിയുടെ പരിശോധനയ്ക്കായി അയച്ചു.',
      guidelines: 'ഔദ്യോഗിക മാർഗ്ഗനിർദ്ദേശങ്ങളും നിയമങ്ങളും',
      cancel: 'റദ്ദാക്കുക'
    },
    learn: {
      title: 'കുട്ടികൾക്കായുള്ള ഇഎസ്ജി ലേണിംഗ് ഹബ്',
      subtitle: 'ലളിതമായ കഥകളിലൂടെയും ക്വിസുകളിലൂടെയും പ്രകൃതിയെയും സുഭരണത്തെയും അറിയാം',
      envTitle: 'പരിസ്ഥിതി (E)',
      envDesc: 'ഭൂമിയുടെ സംരക്ഷണം, ജലസംരക്ഷണം, ശുദ്ധവായു, സൗരോർജ്ജം.',
      socTitle: 'സാമൂഹികം (S)',
      socDesc: 'സാമൂഹ്യക്ഷേമം, സാമ്പത്തിക അറിവ്, സമത്വം.',
      govTitle: 'സുഭരണം (G)',
      govDesc: 'സത്യസന്ധത, സുതാര്യത, ധാർമ്മിക ബാങ്കിംഗ്, വിശ്വാസ്യത.',
      quizTitle: 'യങ് ചാമ്പ്യൻ ഇക്കോ ക്വിസ്',
      question: 'ചോദ്യം',
      of: 'ൽ',
      score: 'നിങ്ങളുടെ സ്കോർ',
      retake: 'വീണ്ടും കളിക്കുക'
    },
    arcade: {
      title: 'BOB ഇക്കോ ആർക്കേഡ്',
      subtitle: 'കളികളിലൂടെ ഹരിത ശീലങ്ങൾ വളർത്തിയെടുക്കാം',
      wasteTitle: 'മാലിന്യ വേർതിരിക്കൽ ഗെയിം',
      wasteDesc: 'സമയം തീരുന്നതിന് മുൻപ് നനഞ്ഞതും ഉണങ്ങിയതുമായ മാലിന്യങ്ങൾ ശരിയായ കുട്ടയിൽ ഇടുക!',
      energyTitle: 'ശുദ്ധ ഊർജ്ജ ചലഞ്ച്',
      energyDesc: 'സൗരോർജ്ജവും കാറ്റാടിയും ഉപയോഗിച്ച് ബാങ്ക് ശാഖയെ പ്രകാശിപ്പിക്കൂ.',
      footprintTitle: 'കാർബൺ ഫൂട്ട്പ്രിന്റ് കാൽക്കുലേറ്റർ',
      footprintDesc: 'നിങ്ങളുടെ പരിസ്ഥിതി സ്കോർ കണക്കാക്കി ഗ്രീൻ ബാഡ്ജ് നേടൂ.',
      scoreLabel: 'പോയിന്റുകൾ',
      playAgain: 'വീണ്ടും കളിക്കുക'
    },
    footer: {
      aboutTitle: 'ബാങ്ക് ഓഫ് ബറോഡ ഇഎസ്ജി പോർട്ടൽ',
      aboutDesc: 'ഇഎസ്ജി & ക്ലൈമറ്റ് റിസ്ക് സെൽ, കോർപ്പറേറ്റ് ഓഫീസ്, ബാന്ദ്ര കുർള കോംപ്ലക്സ് (BKC), മുംബൈ.',
      quickLinks: 'പ്രധാന ലിങ്കുകൾ',
      helpline: 'ഹെൽപ്പ്‌ലൈൻ',
      address: 'കോർപ്പറേറ്റ് സെന്റർ: C-26, G-ബ്ലോക്ക്, BKC, ബാന്ദ്ര (ഈസ്റ്റ്), മുംബൈ 400051',
      copyright: '© 2026 ബാങ്ക് ഓഫ് ബറോഡ. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.'
    }
  },

  // 10. Punjabi (ਪੰਜਾਬੀ)
  pa: {
    nav: {
      brand: 'ਬੈਂਕ ਆਫ਼ ਬੜੌਦਾ',
      esgCell: 'ਈਐਸਜੀ ਅਤੇ ਜਲਵਾਯੂ ਜੋਖਮ ਸੈੱਲ',
      portalName: 'ਯੰਗ ਚੈਂਪੀਅਨਜ਼ ਪੋਰਟਲ',
      gallery: 'ਗੈਲਰੀ ਅਤੇ ਐਂਟਰੀਆਂ',
      submit: 'ਬੱਚੇ ਦੀ ਐਂਟਰੀ ਭੇਜੋ',
      learn: 'ਈਐਸਜੀ ਕਿਡਜ਼ ਹੱਬ',
      arcade: 'ਈਕੋ ਆਰਕੇਡ',
      admin: 'ਜਿਊਰੀ ਅਤੇ ਐਡਮਿਨ',
      submitCta: 'ਐਂਟਰੀ ਦਰਜ ਕਰੋ',
      gamesBadge: 'ਖੇਡਾਂ',
      language: 'ਭਾਸ਼ਾ'
    },
    hero: {
      bankName: 'ਬੈਂਕ ਆਫ਼ ਬੜੌਦਾ',
      cellInitiative: 'ਈਐਸਜੀ ਅਤੇ ਜਲਵਾਯੂ ਜੋਖਮ ਸੈੱਲ ਦੀ ਪਹਿਲ',
      internalPortal: 'ਅੰਦਰੂਨੀ ਬੈਂਕ ਪੋਰਟਲ',
      titlePart1: 'ਨਵੀਂ ਸੋਚ,',
      titlePart2: 'ਹਰਿਆਵਲ ਭਵਿੱਖ:',
      titlePart3: 'BOB ਈਐਸਜੀ ਚੈਂਪੀਅਨ 2026',
      subtitle: 'ਬੈਂਕ ਆਫ਼ ਬੜੌਦਾ ਦੇ ਸਾਰੇ ਜ਼ੋਨਾਂ ਦੇ ਕਰਮਚਾਰੀਆਂ ਦੇ ਪ੍ਰਤਿਭਾਸ਼ਾਲੀ ਬੱਚਿਆਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਮੰਚ। ਕਲਾ ਅਤੇ ਰੀਲਾਂ ਸਾਂਝੀਆਂ ਕਰੋ, ਵਟਸਐਪ ਤੇ ਸੁਨੇਹਾ ਫੈਲਾਓ!',
      ctaSubmit: 'ਬੱਚੇ ਦੀ ਐਂਟਰੀ ਭੇਜੋ',
      ctaGames: 'ਈਕੋ ਗੇਮਾਂ ਖੇਡੋ',
      ctaQuiz: 'ਈਕੋ ਕੁਇਜ਼ ਵਿੱਚ ਭਾਗ ਲਵੋ',
      statLiveEntries: 'ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਐਂਟਰੀਆਂ',
      statLikes: 'ਪਰਿਵਾਰਕ ਉਤਸ਼ਾਹ',
      statZones: '12 ਜ਼ੋਨ',
      statZonesDesc: 'ਸਰਬ ਭਾਰਤੀ ਭਾਗੀਦਾਰੀ',
      statDaysLeft: '14 ਦਿਨ ਬਾਕੀ',
      statDaysLeftDesc: 'ਐਂਟਰੀਆਂ ਭੇਜਣ ਦੀ ਆਖ਼ਰੀ ਮਿਤੀ',
      themesTitle: 'ਮੁਕਾਬਲੇ ਦੇ ਅਧਿਕਾਰਤ ਵਿਸ਼ੇ (ਕੋਈ ਇੱਕ ਚੁਣੋ)'
    },
    themes: {
      water_label: 'ਜਲ ਸ਼ਕਤੀ (ਪਾਣੀ ਦੀ ਸੰਭਾਲ)',
      water_desc: 'ਮੀਂਹ ਦੇ ਪਾਣੀ ਦੀ ਸੰਭਾਲ, ਨਦੀਆਂ ਦੀ ਸੁਰੱਖਿਆ ਅਤੇ ਪਾਣੀ ਦੀ ਬੱਚਤ',
      energy_label: 'ਸਵੱਛ ਊਰਜਾ ਕ੍ਰਾਂਤੀ',
      energy_desc: 'ਸੌਰ ਊਰਜਾ, ਗ੍ਰੀਨ ਬ੍ਰਾਂਚ ਪਹਿਲਕਦਮੀਆਂ ਅਤੇ ਐਲਈਡੀ ਰੋਸ਼ਨੀ',
      waste_label: 'ਸਵੱਛ ਬੜੌਦਾ (ਕੂੜੇ ਦਾ ਨਿਪਟਾਰਾ)',
      waste_desc: 'ਕੂੜੇ ਦੀ ਵੰਡ, ਪਲਾਸਟਿਕ ਮੁਕਤ ਜੀਵਨ ਅਤੇ ਮੁੜ ਵਰਤੋਂ',
      green_branch_label: 'ਹਰੀ BOB ਬ੍ਰਾਂਚ',
      green_branch_desc: 'ਕਾਗਜ਼ ਰਹਿਤ ਡਿਜੀਟਲ ਬੈਂਕਿੰਗ, ਰੁੱਖ ਲਗਾਉਣ ਦੀ ਮੁਹਿੰਮ ਅਤੇ ਵਾਤਾਵਰਣ ਅਨੁਕੂਲ ਜੀਵਨ'
    },
    gallery: {
      title: 'ਰਚਨਾਤਮਕ ਪ੍ਰਦਰਸ਼ਨੀ ਅਤੇ ਵੋਟਿੰਗ',
      subtitle: 'BOB ਪਰਿਵਾਰ ਦੇ ਬੱਚਿਆਂ ਦੀਆਂ ਸੁੰਦਰ ਪੇਂਟਿੰਗਾਂ ਅਤੇ ਵੀਡੀਓਜ਼ ਦੇਖੋ। ਦਿਲ ਨੂੰ ਛੂਹ ਕੇ ਉਤਸ਼ਾਹਿਤ ਕਰੋ!',
      searchPlaceholder: 'ਨਾਮ, ਸਿਰਲੇਖ, ਬ੍ਰਾਂਚ ਜਾਂ EC ਨੰਬਰ ਨਾਲ ਖੋਜੋ...',
      allThemes: 'ਸਾਰੇ ਈਐਸਜੀ ਵਿਸ਼ੇ',
      allAges: 'ਸਾਰੇ ਉਮਰ ਵਰਗ',
      allCategories: 'ਸਾਰੇ ਮਾਧਿਅਮ',
      artOnly: 'ਚਿੱਤਰਕਾਰੀ ਅਤੇ ਕਲਾ',
      reelsOnly: 'ਈਕੋ ਵੀਡੀਓ ਰੀਲਜ਼',
      subJunior: 'ਸਬ-ਜੂਨੀਅਰ (ਉਮਰ 4-8)',
      junior: 'ਜੂਨੀਅਰ (ਉਮਰ 9-13)',
      teen: 'ਟੀਨ (ਉਮਰ 14-18)',
      sortBy: 'ਤਰਤੀਬ ਦਿਓ',
      mostLiked: 'ਸਭ ਤੋਂ ਵੱਧ ਪਸੰਦ',
      newest: 'ਨਵੀਨਤਮ ਪਹਿਲਾਂ',
      juryPicks: 'ਜਿਊਰੀ ਦੀ ਪਸੰਦ',
      showing: 'ਦਿਖਾ ਰਹੇ ਹਾਂ',
      ofEntries: 'ਐਂਟਰੀਆਂ',
      noEntries: 'ਕੋਈ ਐਂਟਰੀ ਨਹੀਂ ਮਿਲੀ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਖੋਜੋ!',
      encourage: 'ਹੌਸਲਾ ਵਧਾਓ',
      encouraged: 'ਹੌਸਲਾ ਵਧਾਇਆ!',
      viewEntry: 'ਐਂਟਰੀ ਦੇਖੋ',
      shareWhatsApp: 'ਵਟਸਐਪ ਤੇ ਸਾਂਝਾ ਕਰੋ',
      copied: 'ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ!',
      employeeStaffId: 'EC ਨੰ.'
    },
    submission: {
      title: 'ਬੱਚੇ ਦੀ ਐਂਟਰੀ ਜਮ੍ਹਾਂ ਕਰੋ',
      subtitle: 'ਆਪਣੇ ਬੱਚੇ ਦੀ ਪ੍ਰਤਿਭਾ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰੋ ਅਤੇ ਵਾਤਾਵਰਣ ਸੰਭਾਲ ਦਾ ਸੰਦੇਸ਼ ਫੈਲਾਓ!',
      step1: 'ਕਦਮ 1: ਕਰਮਚਾਰੀ ਅਤੇ ਬ੍ਰਾਂਚ ਤਸਦੀਕ',
      step2: 'ਕਦਮ 2: ਚੈਂਪੀਅਨ ਅਤੇ ਐਂਟਰੀ ਵੇਰਵੇ',
      step3: 'ਕਦਮ 3: ਕਲਾਕ੍ਰਿਤੀ/ਰੀਲ ਅਤੇ ਹਰਾ ਸੰਦੇਸ਼ ਅਪਲੋਡ',
      empName: 'ਕਰਮਚਾਰੀ ਦਾ ਨਾਮ',
      empId: 'EC ਨੰਬਰ (ਸਟਾਫ ਆਈਡੀ)',
      empEmail: 'ਅਧਿਕਾਰਤ ਬੈਂਕ ਈਮੇਲ',
      empPhone: 'ਮੋਬਾਈਲ ਨੰਬਰ (ਵਟਸਐਪ)',
      zone: 'ਬੈਂਕ ਜ਼ੋਨ',
      branch: 'ਬ੍ਰਾਂਚ / ਦਫ਼ਤਰ ਦਾ ਨਾਮ',
      childName: 'ਬੱਚੇ ਦਾ ਪੂਰਾ ਨਾਮ',
      childAge: 'ਬੱਚੇ ਦੀ ਉਮਰ',
      ageGroup: 'ਉਮਰ ਸ਼੍ਰੇਣੀ',
      category: 'ਮੁਕਾਬਲਾ ਸ਼੍ਰੇਣੀ',
      theme: 'ਈਐਸਜੀ ਵਿਸ਼ਾ',
      entryTitle: 'ਕਲਾ / ਰੀਲ ਦਾ ਸਿਰਲੇਖ',
      greenMessage: 'ਬੱਚੇ ਦਾ ਹਰਾ ਸੁਨੇਹਾ / ਵਾਤਾਵਰਣ ਪ੍ਰਣ',
      uploadMedia: 'ਮੀਡੀਆ ਫ਼ਾਈਲ ਅਪਲੋਡ ਕਰੋ',
      uploadHintArt: 'ਮੰਨਣਯੋਗ: JPG, PNG, WEBP (ਵੱਧ ਤੋਂ ਵੱਧ 15MB)',
      uploadHintReel: 'ਮੰਨਣਯੋਗ: MP4, MOV (ਵੱਧ ਤੋਂ ਵੱਧ 60 ਸਕਿੰਟ, 50MB)',
      terms: 'ਮੈਂ ਪੁਸ਼ਟੀ ਕਰਦਾ/ਕਰਦੀ ਹਾਂ ਕਿ ਮੈਂ ਬੈਂਕ ਆਫ਼ ਬੜੌਦਾ ਦਾ ਕਰਮਚਾਰੀ ਹਾਂ ਅਤੇ ਇਹ ਮੇਰੇ ਬੱਚੇ ਦੀ ਮੌਲਿਕ ਰਚਨਾ ਹੈ।',
      submitBtn: 'ਮੁਕਾਬਲੇ ਦੀ ਐਂਟਰੀ ਭੇਜੋ',
      submitting: 'ਜਮ੍ਹਾਂ ਹੋ ਰਿਹਾ ਹੈ...',
      successTitle: 'ਐਂਟਰੀ ਸਫ਼ਲਤਾਪੂਰਵਕ ਜਮ੍ਹਾਂ ਹੋ ਗਈ!',
      successMsg: 'ਤੁਹਾਡੀ ਐਂਟਰੀ ਜਿਊਰੀ ਸਮੀਖਿਆ ਲਈ ਭੇਜ ਦਿੱਤੀ ਗਈ ਹੈ।',
      guidelines: 'ਅਧਿਕਾਰਤ ਨਿਯਮ ਅਤੇ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼',
      cancel: 'ਰੱਦ ਕਰੋ'
    },
    learn: {
      title: 'ਬੱਚਿਆਂ ਲਈ ਈਐਸਜੀ ਲਰਨਿੰਗ ਹੱਬ',
      subtitle: 'ਕਹਾਣੀਆਂ ਅਤੇ ਕੁਇਜ਼ਾਂ ਰਾਹੀਂ ਵਾਤਾਵਰਣ, ਸਮਾਜ ਅਤੇ ਨੇਕ ਪ੍ਰਸ਼ਾਸਨ ਬਾਰੇ ਜਾਣੋ',
      envTitle: 'ਵਾਤਾਵਰਣ (E)',
      envDesc: 'ਧਰਤੀ ਦੀ ਰੱਖਿਆ, ਪਾਣੀ ਦੀ ਬੱਚਤ, ਸਾਫ਼ ਹਵਾ ਅਤੇ ਸਵੱਛ ਊਰਜਾ।',
      socTitle: 'ਸਮਾਜਿਕ (S)',
      socDesc: 'ਸਮਾਜ ਭਲਾਈ, ਵਿੱਤੀ ਸਾਖਰਤਾ ਅਤੇ ਬਰਾਬਰੀ।',
      govTitle: 'ਚੰਗਾ ਪ੍ਰਸ਼ਾਸਨ (G)',
      govDesc: 'ਇਮਾਨਦਾਰੀ, ਨੈਤਿਕ ਬੈਂਕਿੰਗ, ਪਾਰਦਰਸ਼ਤਾ ਅਤੇ ਭਰੋਸਾ।',
      quizTitle: 'ਯੰਗ ਚੈਂਪੀਅਨ ਈਕੋ ਕੁਇਜ਼',
      question: 'ਸਵਾਲ',
      of: 'ਵਿੱਚੋਂ',
      score: 'ਤੁਹਾਡਾ ਸਕੋਰ',
      retake: 'ਦੁਬਾਰਾ ਕੁਇਜ਼ ਖੇਡੋ'
    },
    arcade: {
      title: 'BOB ਈਕੋ ਆਰਕੇਡ',
      subtitle: 'ਖੇਡਾਂ ਰਾਹੀਂ ਵਾਤਾਵਰਣ ਪੱਖੀ ਆਦਤਾਂ ਸਿੱਖੋ',
      wasteTitle: 'ਕੂੜਾ ਵੰਡ ਚੁਣੌਤੀ',
      wasteDesc: 'ਸਮਾਂ ਖਤਮ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਗਿੱਲਾ, ਸੁੱਕਾ ਅਤੇ ਈ-ਕੂੜਾ ਸਹੀ ਡੱਬੇ ਵਿੱਚ ਪਾਓ!',
      energyTitle: 'ਸਵੱਛ ਊਰਜਾ ਚੈਲੇਂਜ',
      energyDesc: 'ਸੂਰਜੀ ਅਤੇ ਪੌਣ ਊਰਜਾ ਨਾਲ ਬ੍ਰਾਂਚ ਨੂੰ ਰੌਸ਼ਨ ਕਰੋ।',
      footprintTitle: 'ਕਾਰਬਨ ਫੁੱਟਪ੍ਰਿੰਟ ਕੈਲਕੁਲੇਟਰ',
      footprintDesc: 'ਆਪਣਾ ਈਕੋ ਸਕੋਰ ਜਾਣੋ ਅਤੇ ਗ੍ਰੀਨ ਬੈਜ ਪ੍ਰਾਪਤ ਕਰੋ।',
      scoreLabel: 'ਈਕੋ ਅੰਕ',
      playAgain: 'ਦੁਬਾਰਾ ਖੇਡੋ'
    },
    footer: {
      aboutTitle: 'ਬੈਂਕ ਆਫ਼ ਬੜੌਦਾ ਈਐਸਜੀ ਪੋਰਟਲ',
      aboutDesc: 'ਈਐਸਜੀ ਅਤੇ ਜਲਵਾਯੂ ਜੋਖਮ ਸੈੱਲ, ਕਾਰਪੋਰੇਟ ਦਫ਼ਤਰ, ਬਾਂਦਰਾ ਕੁਰਲਾ ਕੰਪਲੈਕਸ (BKC), ਮੁੰਬਈ ਦੀ ਇੱਕ ਪਹਿਲ।',
      quickLinks: 'ਜ਼ਰੂਰੀ ਲਿੰਕ',
      helpline: 'ਹੈਲਪਲਾਈਨ',
      address: 'ਕਾਰਪੋਰੇਟ ਸੈਂਟਰ: C-26, G-ਬਲਾਕ, BKC, ਬਾਂਦਰਾ (ਪੂਰਬ), ਮੁੰਬਈ 400051',
      copyright: '© 2026 ਬੈਂਕ ਆਫ਼ ਬੜੌਦਾ। ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।'
    }
  },

  // 11. Odia (ଓଡ଼ିଆ)
  or: {
    nav: {
      brand: 'ବ୍ୟାଙ୍କ ଅଫ ବରୋଦା',
      esgCell: 'ESG ଏବଂ ଜଳବାୟୁ ବିପଦ ସେଲ୍',
      portalName: 'ୟଙ୍ଗ ଚାମ୍ପିଅନ୍ସ ପୋର୍ଟାଲ୍',
      gallery: 'ଗ୍ୟାଲେରୀ ଓ ଏଣ୍ଟ୍ରିଗୁଡ଼ିକ',
      submit: 'ଶିଶୁର ଏଣ୍ଟ୍ରି ଦାଖଲ କରନ୍ତୁ',
      learn: 'ESG କିଡ୍ସ ହବ୍',
      arcade: 'ଇକୋ ଆର୍କେଡ୍',
      admin: 'ଜୁରୀ ଓ ଆଡମିନ୍',
      submitCta: 'ଦାଖଲ କରନ୍ତୁ',
      gamesBadge: 'ଖେଳ',
      language: 'ଭାଷା'
    },
    hero: {
      bankName: 'ବ୍ୟାଙ୍କ ଅଫ ବରୋଦା',
      cellInitiative: 'ESG ଏବଂ ଜଳବାୟୁ ବିପଦ ସେଲ୍ ପଦକ୍ଷେପ',
      internalPortal: 'ଆଭ୍ୟନ୍ତରୀଣ ବ୍ୟାଙ୍କ ପୋର୍ଟାଲ୍',
      titlePart1: 'ଯୁବ ଚିନ୍ତାଧାରା,',
      titlePart2: 'ସବୁଜ ଭବିଷ୍ୟତ:',
      titlePart3: 'BOB ESG ଚାମ୍ପିଅନ୍ ୨୦୨୬',
      subtitle: 'ସମସ୍ତ ଜୋନର ବ୍ୟାଙ୍କ ଅଫ ବରୋଦା କର୍ମଚାରୀଙ୍କ ପ୍ରତିଭାଶାଳୀ ପିଲାମାନଙ୍କ ପାଇଁ ସ୍ୱତନ୍ତ୍ର ମଞ୍ଚ। କଳା ଓ ରିଲ୍ସ ସେୟାର କରନ୍ତୁ ଏବଂ ପରିବେଶ ସୁରକ୍ଷା ଶିଖନ୍ତୁ!',
      ctaSubmit: 'ଶିଶୁର ଏଣ୍ଟ୍ରି ଦାଖଲ କରନ୍ତୁ',
      ctaGames: 'ଇକୋ ଗେମ୍ସ ଖେଳନ୍ତୁ',
      ctaQuiz: 'ଇକୋ କୁଇଜ୍ ଦିଅନ୍ତୁ',
      statLiveEntries: 'ଅନୁମୋଦିତ ଏଣ୍ଟ୍ରି',
      statLikes: 'ପାରିବାରିକ ଉତ୍ସାହ',
      statZones: '୧୨ଟି ଜୋନ୍',
      statZonesDesc: 'ସର୍ବଭାରତୀୟ ଅଂଶଗ୍ରହଣ',
      statDaysLeft: '୧୪ ଦିନ ବାକି',
      statDaysLeftDesc: 'ଦାଖଲ କରିବାର ଶେଷ ସମୟ',
      themesTitle: 'ପ୍ରତିଯୋଗିତାର ମୁଖ୍ୟ ବିଷୟବସ୍ତୁ (ଯେକୌଣସି ଗୋଟିଏ ବାଛନ୍ତୁ)'
    },
    themes: {
      water_label: 'ଜଳ ଶକ୍ତି (ଜଳ ସଂରକ୍ଷଣ)',
      water_desc: 'ବର୍ଷା ଜଳ ଅମଳ, ନଦୀ ସୁରକ୍ଷା ଏବଂ ଜଳର ସଦୁପଯୋଗ',
      energy_label: 'ସ୍ୱଚ୍ଛ ଶକ୍ତି ବିପ୍ଳବ',
      energy_desc: 'ସୌର ଶକ୍ତି, ସବୁଜ ଶାଖା ପଦକ୍ଷେପ ଏବଂ ବିଦ୍ୟୁତ୍ ସଞ୍ଚୟ',
      waste_label: 'ସ୍ୱଚ୍ଛ ବରୋଦା (ବର୍ଜ୍ୟବସ୍ତୁରୁ ସମ୍ପଦ)',
      waste_desc: 'ଆବର୍ଜନା ପୃଥକୀକରଣ, ପ୍ଲାଷ୍ଟିକ୍ ମୁକ୍ତ ଜୀବନ ଏବଂ ପୁନଃବ୍ୟବହାର',
      green_branch_label: 'ସବୁଜ BOB ଶାଖା',
      green_branch_desc: 'କାଗଜବିହୀନ ଡିଜିଟାଲ୍ ବ୍ୟାଙ୍କିଙ୍ଗ୍, ବୃକ୍ଷରୋପଣ ଏବଂ ପରିବେଶ ଅନୁକୂଳ ଜୀବନଶୈଳୀ'
    },
    gallery: {
      title: 'ସୃଜନଶୀଳ ପ୍ରଦର୍ଶନୀ ଓ ଭୋଟିଂ',
      subtitle: 'BOB ପରିବାରର ପିଲାମାନଙ୍କ ଆକର୍ଷଣୀୟ ଚିତ୍ରକଳା ଓ ଭିଡିଓ ରିଲ୍ସ ଦେଖନ୍ତୁ। ଲାଇକ୍ କରି ଉତ୍ସାହିତ କରନ୍ତୁ!',
      searchPlaceholder: 'ନାମ, ଶୀର୍ଷକ, ଶାଖା କିମ୍ବା EC ନମ୍ବର ଦ୍ୱାରା ଖୋଜନ୍ତୁ...',
      allThemes: 'ସମସ୍ତ ESG ବିଷୟ',
      allAges: 'ସମସ୍ତ ବୟସ ବର୍ଗ',
      allCategories: 'ସମସ୍ତ ମାଧ୍ୟମ',
      artOnly: 'ଚିତ୍ରକଳା ଓ ଆର୍ଟ',
      reelsOnly: 'ଇକୋ ଭିଡିଓ ରିଲ୍ସ',
      subJunior: 'ସବ୍-ଜୁନିଅର୍ (ବୟସ ୪-୮)',
      junior: 'ଜୁନିଅର୍ (ବୟସ ୯-୧୩)',
      teen: 'ଟିନ୍ (ବୟସ ୧୪-୧୮)',
      sortBy: 'କ୍ରମାନ୍ୱୟରେ ରଖନ୍ତୁ',
      mostLiked: 'ସର୍ବାଧିକ ପସନ୍ଦ',
      newest: 'ନୂତନ ପ୍ରଥମେ',
      juryPicks: 'ଜୁରୀ ପସନ୍ଦ',
      showing: 'ଦେଖାଉଛି',
      ofEntries: 'ଟି ଏଣ୍ଟ୍ରି',
      noEntries: 'କୌଣସି ଏଣ୍ଟ୍ରି ମିଳିଲା ନାହିଁ। ଦୟାକରି ପୁଣି ଖୋଜନ୍ତୁ!',
      encourage: 'ଉତ୍ସାହିତ କରନ୍ତୁ',
      encouraged: 'ଉତ୍ସାହିତ କଲେ!',
      viewEntry: 'ଏଣ୍ଟ୍ରି ଦେଖନ୍ତୁ',
      shareWhatsApp: 'ହ୍ୱାଟ୍ସଆପ୍‌ରେ ସେୟାର କରନ୍ତୁ',
      copied: 'ଲିଙ୍କ୍ କପି ହେଲା!',
      employeeStaffId: 'EC ନଂ'
    },
    submission: {
      title: 'ଶିଶୁର କଳାକୃତି ଦାଖଲ କରନ୍ତୁ',
      subtitle: 'ଆପଣଙ୍କ ପିଲାର ପ୍ରତିଭାକୁ ସମ୍ମାନ ଦିଅନ୍ତୁ ଏବଂ ସବୁଜ ଭାରତର ବାର୍ତ୍ତା ବାଣ୍ଟନ୍ତୁ!',
      step1: 'ପର୍ଯ୍ୟାୟ ୧: କର୍ମଚାରୀ ଓ ଶାଖା ଯାଞ୍ଚ',
      step2: 'ପର୍ଯ୍ୟାୟ ୨: ପ୍ରତିଯୋଗୀ ଓ ଏଣ୍ଟ୍ରି ବିବରଣୀ',
      step3: 'ପର୍ଯ୍ୟାୟ ୩: ଚିତ୍ର/ରିଲ୍ ଏବଂ ସବୁଜ ବାର୍ତ୍ତା ଅପଲୋଡ୍',
      empName: 'କର୍ମଚାରୀଙ୍କ ନାମ',
      empId: 'EC ନମ୍ବର (ଷ୍ଟାଫ୍ ଆଇଡି)',
      empEmail: 'ସରକାରୀ ବ୍ୟାଙ୍କ ଇମେଲ୍',
      empPhone: 'ମୋବାଇଲ୍ ନମ୍ବର (ହ୍ୱାଟ୍ସଆପ୍)',
      zone: 'ବ୍ୟାଙ୍କ ଜୋନ୍',
      branch: 'ଶାଖା / କାର୍ଯ୍ୟାଳୟର ନାମ',
      childName: 'ଶିଶୁର ସମ୍ପୂର୍ଣ୍ଣ ନାମ',
      childAge: 'ଶିଶୁର ବୟସ',
      ageGroup: 'ବୟସ ବର୍ଗ',
      category: 'ପ୍ରତିଯୋଗିତା ବର୍ଗ',
      theme: 'ESG ବିଷୟବସ୍ତୁ',
      entryTitle: 'ଚିତ୍ରକଳା / ରିଲ୍ ର ଶୀର୍ଷକ',
      greenMessage: 'ଶିଶୁର ସବୁଜ ବାର୍ତ୍ତା / ପରିବେଶ ସଂକଳ୍ପ',
      uploadMedia: 'ମିଡିଆ ଫାଇଲ୍ ଅପଲୋଡ୍ କରନ୍ତୁ',
      uploadHintArt: 'JPG, PNG, WEBP (ସର୍ବାଧିକ ୧୫MB)',
      uploadHintReel: 'MP4, MOV (ସର୍ବାଧିକ ୬୦ ସେକେଣ୍ଡ, ୫୦MB)',
      terms: 'ମୁଁ ନିଶ୍ଚିତ କରୁଛି ଯେ ମୁଁ ବ୍ୟାଙ୍କ ଅଫ ବରୋଦାର କର୍ମଚାରୀ ଏବଂ ଏହା ମୋ ଶିଶୁର ମୌଳିକ କୃତି।',
      submitBtn: 'ପ୍ରତିଯୋଗିତା ଏଣ୍ଟ୍ରି ଦାଖଲ କରନ୍ତୁ',
      submitting: 'ଦାଖଲ ହେଉଛି...',
      successTitle: 'ସଫଳତାର ସହ ଦାଖଲ ହେଲା!',
      successMsg: 'ଆପଣଙ୍କ ଏଣ୍ଟ୍ରି ଜୁରୀ ସମୀକ୍ଷା ପାଇଁ ପଠାଯାଇଛି।',
      guidelines: 'ନିୟମାବଳୀ ଓ ନିର୍ଦ୍ଦେଶିକା',
      cancel: 'ବାତିଲ କରନ୍ତୁ'
    },
    learn: {
      title: 'ପିଲାମାନଙ୍କ ପାଇଁ ESG ଶିକ୍ଷା କେନ୍ଦ୍ର',
      subtitle: 'ସରଳ କାହାଣୀ ଓ କୁଇଜ୍ ମାଧ୍ୟମରେ ପରିବେଶ ଓ ସୁଶାସନ ବିଷୟରେ ଜାଣନ୍ତୁ',
      envTitle: 'ପରିବେଶ (E)',
      envDesc: 'ପୃଥିବୀ ସୁରକ୍ଷା, ଜଳ ସଞ୍ଚୟ, ସ୍ୱଚ୍ଛ ବାୟୁ ଏବଂ ନବୀକରଣୀୟ ଶକ୍ତି।',
      socTitle: 'ସାମାଜିକ (S)',
      socDesc: 'ସାମାଜିକ କଲ୍ୟାଣ, ଆର୍ଥିକ ସାକ୍ଷରତା ଏବଂ ସମାନତା।',
      govTitle: 'ସୁଶାସନ (G)',
      govDesc: 'ସଚ୍ଚୋଟତା, ନୈତିକ ବ୍ୟାଙ୍କିଙ୍ଗ୍, ସ୍ୱଚ୍ଛତା ଏବଂ ବିଶ୍ୱାସ।',
      quizTitle: 'ୟଙ୍ଗ ଚାମ୍ପିଅନ୍ ଇକୋ କୁଇଜ୍',
      question: 'ପ୍ରଶ୍ନ',
      of: 'ରୁ',
      score: 'ଆପଣଙ୍କ ସ୍କୋର',
      retake: 'ପୁନର୍ବାର କୁଇଜ୍ ଖେଳନ୍ତୁ'
    },
    arcade: {
      title: 'BOB ଇକୋ ଆର୍କେଡ୍',
      subtitle: 'ଖେଳ ମାଧ୍ୟମରେ ପରିବେଶ ଅନୁକୂଳ ଅଭ୍ୟାସ ଶିଖନ୍ତୁ',
      wasteTitle: 'ବର୍ଜ୍ୟବସ୍ତୁ ପୃଥକୀକରଣ ଖେଳ',
      wasteDesc: 'ସମୟ ସରିବା ପୂର୍ବରୁ ଓଦା, ଶୁଖିଲା ଓ ଇ-ବର୍ଜ୍ୟକୁ ସଠିକ୍ ଡଷ୍ଟବିନ୍‌ରେ ପକାନ୍ତୁ!',
      energyTitle: 'ସ୍ୱଚ୍ଛ ଶକ୍ତି ଚ୍ୟାଲେଞ୍ଜ୍',
      energyDesc: 'ସୌର ଓ ପବନ ଶକ୍ତି ବ୍ୟବହାର କରି ବ୍ୟାଙ୍କ ଶାଖାକୁ ଆଲୋକିତ କରନ୍ତୁ।',
      footprintTitle: 'କାର୍ବନ ଫୁଟପ୍ରିଣ୍ଟ କାଲକୁଲେଟର୍',
      footprintDesc: 'ଆପଣଙ୍କ ପରିବେଶ ସ୍କୋର ଜାଣନ୍ତୁ ଏବଂ ଗ୍ରୀନ୍ ବ୍ୟାଜ୍ ହାସଲ କରନ୍ତୁ।',
      scoreLabel: 'ଇକୋ ପଏଣ୍ଟସ୍',
      playAgain: 'ପୁଣି ଖେଳନ୍ତୁ'
    },
    footer: {
      aboutTitle: 'ବ୍ୟାଙ୍କ ଅଫ ବରୋଦା ESG ପୋର୍ଟାଲ୍',
      aboutDesc: 'ESG ଏବଂ ଜଳବାୟୁ ବିପଦ ସେଲ୍, କର୍ପୋରେଟ୍ କାର୍ଯ୍ୟାଳୟ, ବାନ୍ଦ୍ରା କୁର୍ଲା କମ୍ପ୍ଲେକ୍ସ (BKC), ମୁମ୍ବାଇର ଏକ ପଦକ୍ଷେପ।',
      quickLinks: 'ଜରୁରୀ ଲିଙ୍କ୍',
      helpline: 'ହେଲ୍ପଲାଇନ୍',
      address: 'କର୍ପୋରେଟ୍ ସେଣ୍ଟର୍: C-26, G-ବ୍ଲକ୍, BKC, ବାନ୍ଦ୍ରା (ପୂର୍ବ), ମୁମ୍ବାଇ 400051',
      copyright: '© ୨୦୨୬ ବ୍ୟାଙ୍କ ଅଫ ବରୋଦା। ସର୍ବସ୍ୱତ୍ୱ ସଂରକ୍ଷିତ।'
    }
  },

  // 12. Assamese (অসমীয়া)
  as: {
    nav: {
      brand: 'বেংক অৱ বৰোদা',
      esgCell: 'ইএছজি আৰু জলবায়ু সংকট কোষ',
      portalName: 'ইয়ং চেম্পিয়নছ প’ৰ্টেল',
      gallery: 'গেলেৰী আৰু প্ৰবিষ্টিসমূহ',
      submit: 'সন্তানৰ প্ৰবিষ্টি জমা দিয়ক',
      learn: 'ইএছজি কিডছ হাব',
      arcade: 'ইকো আৰ্কেড',
      admin: 'বিচাৰক আৰু এডমিন',
      submitCta: 'জমা কৰক',
      gamesBadge: 'খেল',
      language: 'ভাষা'
    },
    hero: {
      bankName: 'বেংক অৱ বৰোদা',
      cellInitiative: 'ইএছজি আৰু জলবায়ু সংকট কোষৰ পদক্ষেপ',
      internalPortal: 'অভ্যন্তরীণ বেংক প’ৰ্টেল',
      titlePart1: 'তৰুণ চিন্তা,',
      titlePart2: 'সেউজ ভৱিষ্যত:',
      titlePart3: 'BOB ইএছজি চেম্পিয়ন ২০২৬',
      subtitle: 'বেংক অৱ বৰোদাৰ সকলো মণ্ডলৰ কৰ্মচাৰীসকলৰ প্ৰতিভাশালী সন্তানসকলৰ বাবে বিশেষ মঞ্চ। চিত্ৰকলা আৰু ৰিলসমূহ শ্বেয়াৰ কৰক আৰু পৰিৱেশ সচেতনতা শিকক!',
      ctaSubmit: 'সন্তানৰ প্ৰবিষ্টি জমা দিয়ক',
      ctaGames: 'ইকো খেল খেলক',
      ctaQuiz: 'ইকো কুইজ দিয়ক',
      statLiveEntries: 'অনুমোদিত এন্ট্ৰিসমূহ',
      statLikes: 'পৰিয়ালৰ উৎসাহ',
      statZones: '১২ টা মণ্ডল',
      statZonesDesc: 'সৰ্বভাৰতীয় অংশগ্ৰহণ',
      statDaysLeft: '১৪ দিন বাকী',
      statDaysLeftDesc: 'জমা দিয়াৰ অন্তিম সময়',
      themesTitle: 'প্ৰতিযোগিতাৰ আনুষ্ঠানিক বিষয়সমূহ (যিকোনো এটা বাছক)'
    },
    themes: {
      water_label: 'জল শক্তি (পানী সংৰক্ষণ)',
      water_desc: 'বৰষুণৰ পানী সংৰক্ষণ, নদীৰ সুৰক্ষা আৰু পানীৰ অপচয় ৰোধ',
      energy_label: 'সেউজ শক্তি বিপ্লৱ',
      energy_desc: 'সৌৰ শক্তি, সেউজ শাখা পদক্ষেপ আৰু শক্তি সঞ্চয়',
      waste_label: 'স্বচ্ছ বৰোদা (আৱৰ্জনাৰ পৰা সম্পদ)',
      waste_desc: 'আৱৰ্জনা পৃথকীকৰণ, প্লাষ্টিক মুক্ত জীৱন আৰু পুনৰ্ব্যৱহাৰ',
      green_branch_label: 'সেউজ BOB শাখা',
      green_branch_desc: 'কাগজবিহীন ডিজিটেল বেংকিং, বৃক্ষৰোপণ আৰু পৰিৱেশ অনুকূল জীৱনশৈলী'
    },
    gallery: {
      title: 'সৃজনশীল প্ৰদৰ্শনী আৰু ভোটদান',
      subtitle: 'BOB পৰিয়ালৰ সন্তানসকলৰ অনুপ্ৰেৰণাদায়ী চিত্ৰকলা আৰু ৰিলসমূহ চাওক। লাইক কৰি উৎসাহ জনাওক!',
      searchPlaceholder: 'নাম, শীৰ্ষক, শাখা বা EC নম্বৰেৰে সন্ধান কৰক...',
      allThemes: 'সকলো ইএছজি বিষয়',
      allAges: 'সকলো বয়সৰ গোট',
      allCategories: 'সকলো মাধ্যম',
      artOnly: 'চিত্ৰকলা আৰু আৰ্ট',
      reelsOnly: 'ইকো ভিডিঅ’ ৰিলছ',
      subJunior: 'ছাব-জুনিয়ৰ (বয়স ৪-৮)',
      junior: 'জুনিয়ৰ (বয়স ৯-১৩)',
      teen: 'টিন (বয়স ১৪-১৮)',
      sortBy: 'ক্ৰম অনুসাৰে সজাওক',
      mostLiked: 'সৰ্বাধিক পছন্দ',
      newest: 'নতুন প্ৰথমে',
      juryPicks: 'বিচাৰকৰ পছন্দ',
      showing: 'দেখুওৱা হৈছে',
      ofEntries: 'টা এন্ট্ৰি',
      noEntries: 'কোনো এন্ট্ৰি পোৱা নগ’ল। অনুগ্ৰহ কৰি পুনৰ সন্ধান কৰক!',
      encourage: 'উৎসাহ দিয়ক',
      encouraged: 'উৎসাহিত কৰিলে!',
      viewEntry: 'এন্ট্ৰি চাওক',
      shareWhatsApp: 'হোৱাটছএপত শ্বেয়াৰ কৰক',
      copied: 'লিংক কপি হ’ল!',
      employeeStaffId: 'EC নং'
    },
    submission: {
      title: 'সন্তানৰ সৃজনশীল এন্ট্ৰি জমা দিয়ক',
      subtitle: 'আপোনাৰ সন্তানৰ প্ৰতিভাক উদযাপন কৰক আৰু সেউজ ধৰিত্ৰীৰ বাৰ্তা বিয়পাওক!',
      step1: 'স্তৰ ১: কৰ্মচাৰী আৰু শাখা প্ৰমাণীকৰণ',
      step2: 'স্তৰ ২: প্ৰতিযোগী আৰু এন্ট্ৰিৰ বিৱৰণ',
      step3: 'স্তৰ ৩: চিত্ৰ/ৰিল আৰু সেউজ বাৰ্তা আপল’ড',
      empName: 'কৰ্মচাৰীৰ নাম',
      empId: 'EC নম্বৰ (ষ্টাফ আইডি)',
      empEmail: 'চৰকাৰী বেংক ইমেইল',
      empPhone: 'মোবাইল নম্বৰ (হোৱাটছএপ)',
      zone: 'বেংক মণ্ডল',
      branch: 'শাখা / কাৰ্যালয়ৰ নাম',
      childName: 'সন্তানৰ সম্পূৰ্ণ নাম',
      childAge: 'সন্তানৰ বয়স',
      ageGroup: 'বয়সৰ শ্ৰেণী',
      category: 'প্ৰতিযোগিতাৰ শ্ৰেণী',
      theme: 'ইএছজি বিষয়বস্তু',
      entryTitle: 'চিত্ৰকলা / ৰিলৰ শীৰ্ষক',
      greenMessage: 'সন্তানৰ সেউজ বাৰ্তা / পৰিৱেশ সংকল্প',
      uploadMedia: 'মিডিয়া ফাইল আপল’ড কৰক',
      uploadHintArt: 'JPG, PNG, WEBP (সৰ্বোচ্চ ১৫MB)',
      uploadHintReel: 'MP4, MOV (সৰ্বোচ্চ ৬০ ছেকেণ্ড, ৫০MB)',
      terms: 'মই নিশ্চিত কৰিছোঁ যে মই বেংক অৱ বৰোদাৰ কৰ্মচাৰী আৰু এইটো মোৰ সন্তানৰ মৌলিক কাম।',
      submitBtn: 'প্ৰতিযোগিতাৰ এন্ট্ৰি জমা দিয়ক',
      submitting: 'জমা হৈ আছে...',
      successTitle: 'সফলভাৱେ জমা হ’ল!',
      successMsg: 'আপোনাৰ এন্ট্ৰি বিচাৰক সমিতিৰ পৰ্যালোচনাৰ বাবে প্ৰেৰণ কৰা হৈছে।',
      guidelines: 'আনুষ্ঠানিক নীতি-নিয়ম আৰু নিৰ্দেশনা',
      cancel: 'বাতিল কৰক'
    },
    learn: {
      title: 'শিশুসকলৰ বাবে ইএছজি শিক্ষা কেন্দ্ৰ',
      subtitle: 'সাধুকথা আৰু কুইজৰ জৰিয়তে পৰিৱেশ, সমাজ আৰু সুশাসন সম্পৰ্কে জানক',
      envTitle: 'পৰিৱেশ (E)',
      envDesc: 'ধৰিত্ৰী ৰক্ষা, পানী সঞ্চয়, বিশুদ্ধ বায়ু আৰু নৱীকৰণযোগ্য শক্তি।',
      socTitle: 'সামাজিক (S)',
      socDesc: 'সামাজিক কল্যাণ, বিত্তীয় সাক্ষৰতা আৰু সমতা।',
      govTitle: 'সুশাসন (G)',
      govDesc: 'সততা, নৈতিক বেংকিং, স্বচ্ছতা আৰু বিশ্বাস।',
      quizTitle: 'ইয়ং চেম্পিয়ন ইকো কুইজ',
      question: 'প্ৰশ্ন',
      of: 'ৰ ভিতৰত',
      score: 'আপোনাৰ নম্বৰ',
      retake: 'পুনৰ কুইজ খেলক'
    },
    arcade: {
      title: 'BOB ইকো আৰ্কেড',
      subtitle: 'খেলৰ মাজেৰে পৰিৱেশ অনুকূল অভ্যাস শিকক',
      wasteTitle: 'আৱৰ্জনা পৃথকীকৰণ খেল',
      wasteDesc: 'সময় শেষ হোৱাৰ আগতে তিতা, শুকান আৰু ই-আৱৰ্জনা সঠিক ড্ৰামত পেলাওক!',
      energyTitle: 'সেউজ শক্তি প্ৰত্যাহ্বান',
      energyDesc: 'সৌৰ আৰু বায়ু শক্তিৰে বেংক শাখাটোক আলোকিত কৰক।',
      footprintTitle: 'কাৰ্বন ফুটপ্ৰিণ্ট কেলকুলেটৰ',
      footprintDesc: 'আপোনাৰ পৰিৱেশ নম্বৰ গণনা কৰক আৰু গ্ৰীণ বেজ লাভ কৰক।',
      scoreLabel: 'ইকো পইণ্ট',
      playAgain: 'পুনৰ খেলক'
    },
    footer: {
      aboutTitle: 'বেংক অৱ বৰোদা ইএছজি প’ৰ্টেল',
      aboutDesc: 'ইএছজি আৰু জলবায়ু সংকট কোষ, কৰ্প’ৰেট কাৰ্যালয়, বান্দ্ৰা কুৰ্লা কমপ্লেক্স (BKC), মুম্বাইৰ এক উদ্যোগ।',
      quickLinks: 'প্ৰয়োজনীয় লিংকসমূহ',
      helpline: 'হেল্পলাইন',
      address: 'কৰ্প’ৰেট চেন্টাৰ: C-26, G-ব্লক, BKC, বান্দ্ৰা (পূব), মুম্বাই 400051',
      copyright: '© ২০২৬ বেংক অৱ বৰোদা। সৰ্বস্বত্ব সংৰক্ষিত।'
    }
  }
};
