import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import dzLogo from './assets/images/dz_orientation_logo_1785510464200.jpg';
import { 
  Search, 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  Filter, 
  ChevronRight,
  BookOpen,
  Heart,
  Sparkles,
  MessageSquare,
  ChevronDown,
  Building2,
  Star,
  Video,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Type,
  Scale,
  MapPin,
  CheckCircle2,
  X,
  Wrench,
  Bot,
  Image as ImageIcon
} from 'lucide-react';
import { Specialization } from './types';
import PromoCreator from './components/PromoCreator';
import VocationalGuidance from './components/VocationalGuidance';
import AIChatModal from './components/AIChatModal';
import SmartAdvisorBanner from './components/SmartAdvisorBanner';

const INITIAL_DATA: Specialization[] = [
  {
    id: '1',
    name: 'الطب العام',
    minGrade: 16.5,
    jobs: ['مستشفيات حكومية', 'عيادات خاصة', 'البحث العلمي'],
    description: 'دراسة شاملة لجسم الإنسان والأمراض وطرق علاجها.',
    category: 'العلوم الطبية',
    streams: ['علوم تجريبية', 'رياضيات', 'تقني رياضي'],
    marketDemand: 9
  },
  {
    id: '2',
    name: 'هندسة الإعلام الآلي',
    minGrade: 15.0,
    jobs: ['سوناطراك', 'جازي', 'أوريدو', 'موبيليس', 'شركات البرمجيات', 'البنوك'],
    description: 'تخصص يركز على تطوير البرمجيات، الشبكات، والذكاء الاصطناعي.',
    category: 'التكنولوجيا',
    streams: ['رياضيات', 'تقني رياضي', 'علوم تجريبية'],
    marketDemand: 10
  },
  {
    id: '3',
    name: 'الحقوق والعلوم القانونية',
    minGrade: 12.0,
    jobs: ['المحاماة', 'القضاء', 'الإدارات العمومية', 'الشركات'],
    description: 'دراسة القوانين والتشريعات والأنظمة القضائية.',
    category: 'العلوم الإنسانية',
    streams: ['آداب وفلسفة', 'لغات أجنبية', 'تسيير واقتصاد'],
    marketDemand: 6
  },
  {
    id: '4',
    name: 'هندسة البترول',
    minGrade: 15.5,
    jobs: ['سوناطراك', 'شركات الطاقة الدولية', 'مراكز البحث'],
    description: 'تخصص تقني يركز على استخراج وتكرير النفط والغاز.',
    category: 'الهندسة',
    streams: ['رياضيات', 'تقني رياضي', 'علوم تجريبية'],
    marketDemand: 9
  },
  {
    id: '5',
    name: 'علوم الطيران',
    minGrade: 16.0,
    jobs: ['الخطوط الجوية الجزائرية', 'المطارات', 'القوات الجوية'],
    description: 'دراسة ميكانيكا الطيران وأنظمة الملاحة الجوية.',
    category: 'الهندسة',
    streams: ['رياضيات', 'تقني رياضي'],
    marketDemand: 8
  },
  {
    id: '6',
    name: 'اللغة الإنجليزية',
    minGrade: 11.5,
    jobs: ['التعليم', 'الترجمة', 'الشركات الأجنبية', 'كوندور'],
    description: 'دراسة اللغة والأدب الإنجليزي ومهارات التواصل.',
    category: 'اللغات',
    streams: ['لغات أجنبية', 'آداب وفلسفة', 'علوم تجريبية'],
    marketDemand: 7
  },
  {
    id: '7',
    name: 'المحاسبة والمالية',
    minGrade: 13.0,
    jobs: ['البنوك', 'سوناطراك', 'المؤسسات الاقتصادية', 'توسياكي'],
    description: 'إدارة الأموال، التدقيق المحاسبي، والتحليل المالي.',
    category: 'الاقتصاد',
    streams: ['تسيير واقتصاد', 'رياضيات', 'علوم تجريبية'],
    marketDemand: 8
  },
  {
    id: '8',
    name: 'الهندسة المعمارية',
    minGrade: 14.5,
    jobs: ['مكاتب الدراسات', 'شركات المقاولات', 'الوزارات'],
    description: 'تصميم المباني والمنشآت العمرانية بلمسة جمالية وتقنية.',
    category: 'الهندسة',
    streams: ['رياضيات', 'تقني رياضي', 'علوم تجريبية'],
    marketDemand: 7
  },
  {
    id: '9',
    name: 'الذكاء الاصطناعي',
    minGrade: 17.0,
    jobs: ['مراكز البحث', 'الشركات الناشئة', 'سوناطراك'],
    description: 'تخصص المستقبل لتطوير أنظمة ذكية تحاكي العقل البشري.',
    category: 'التكنولوجيا',
    streams: ['رياضيات', 'تقني رياضي'],
    marketDemand: 10
  },
  {
    id: '10',
    name: 'العلوم الإنسانية والاجتماعية',
    minGrade: 10.0,
    jobs: ['التعليم', 'الإعلام', 'الإدارات العمومية', 'مراكز الخدمة الاجتماعية'],
    description: 'دراسة المجتمع، السلوك البشري، والتاريخ.',
    category: 'العلوم الإنسانية',
    streams: ['آداب وفلسفة', 'لغات أجنبية', 'علوم تجريبية', 'تسيير واقتصاد'],
    marketDemand: 5
  },
  {
    id: '11',
    name: 'العلوم الفلاحية',
    minGrade: 10.5,
    jobs: ['المزارع الكبرى', 'وزارة الفلاحة', 'شركات الصناعات الغذائية'],
    description: 'دراسة التقنيات الزراعية الحديثة وتطوير الإنتاج الغذائي.',
    category: 'العلوم الطبيعية',
    streams: ['علوم تجريبية', 'رياضيات', 'تقني رياضي'],
    marketDemand: 7
  },
  {
    id: '12',
    name: 'الأدب العربي',
    minGrade: 10.0,
    jobs: ['التعليم', 'الصحافة', 'التدقيق اللغوي', 'دور النشر'],
    description: 'دراسة اللغة العربية، البلاغة، والأدب العربي عبر العصور.',
    category: 'اللغات',
    streams: ['آداب وفلسفة', 'لغات أجنبية'],
    marketDemand: 4
  },
  {
    id: '13',
    name: 'علوم الأرض والكون',
    minGrade: 10.5,
    jobs: ['سوناطراك', 'مراكز الأرصاد الجوية', 'شركات المناجم'],
    description: 'دراسة الجيولوجيا، الموارد الطبيعية، والظواهر الأرضية.',
    category: 'العلوم الطبيعية',
    streams: ['علوم تجريبية', 'رياضيات', 'تقني رياضي'],
    marketDemand: 6
  },
  {
    id: '14',
    name: 'التربية البدنية والرياضية (STAPS)',
    minGrade: 12.0,
    jobs: ['التعليم', 'الأندية الرياضية', 'التدريب الشخصي'],
    description: 'دراسة علوم الرياضة، التدريب، والتربية البدنية.',
    category: 'العلوم الإنسانية',
    streams: ['جميع الشعب'],
    marketDemand: 5
  },
  {
    id: '15',
    name: 'علوم المادة',
    minGrade: 11.0,
    jobs: ['المختبرات الكيميائية', 'الصناعات التحويلية', 'التعليم'],
    description: 'دراسة الفيزياء والكيمياء وخصائص المادة.',
    category: 'العلوم الأساسية',
    streams: ['علوم تجريبية', 'رياضيات', 'تقني رياضي'],
    marketDemand: 6
  }
];

export default function App() {
  const [mainSection, setMainSection] = useState<'university' | 'vocational'>('university');
  const [view, setView] = useState<'home' | 'favorites' | 'promo'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [userGrade, setUserGrade] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [selectedStream, setSelectedStream] = useState<string>('الكل');
  const [showAllRegardlessOfGrade, setShowAllRegardlessOfGrade] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showAdvisor, setShowAdvisor] = useState(false);
  const [isDiscovering, setIsDiscovering] = useState(false);
  const [showAIChatModal, setShowAIChatModal] = useState(false);
  const [aiChatEduLevel, setAiChatEduLevel] = useState<string | undefined>(undefined);

  // ميزات التكبير والمقارنة الجديدة
  const [zoomLevel, setZoomLevel] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [zoomedSpec, setZoomedSpec] = useState<Specialization | null>(null);
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [showLogoModal, setShowLogoModal] = useState(false);

  const toggleComparison = (id: string) => {
    setComparisonList(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const getUniversitiesForCategory = (category: string) => {
    switch(category) {
      case 'العلوم الطبية':
        return ['جامعة الجزائر 1 (بن يوسف بن خدة)', 'جامعة وهران 1 (أحمد بن بلة)', 'جامعة قسنطينة 3', 'جامعة عنابة', 'جامعة سطيف 1', 'جامعة ورقلة'];
      case 'التكنولوجيا':
        return ['المدرسة الوطنية العليا للذكاء الاصطناعي (سيدي عبد الله)', 'المدرسة الوطنية العليا للإعلام الآلي (ESI)', 'جامعة هواري بومدين (USTHB)', 'جامعة قسنطينة 2'];
      case 'الهندسة':
        return ['المدرسة الوطنية متعددة التقنيات (Polytechnique)', 'جامعة بومرداس (M\'Hamed Bougara)', 'جامعة وهران للعلوم والتكنولوجيا (USTO)'];
      case 'الاقتصاد':
        return ['المدرسة العليا للتجارة (ESC القليعة)', 'المدرسة الوطنية العليا للمصرفية', 'جامعة الجزائر 3 (دالي إبراهيم)', 'جامعة سطيف 1'];
      case 'اللغات':
        return ['جامعة الجزائر 2 (بوزريعة)', 'جامعة وهران 2', 'جامعة قسنطينة 1', 'جامعة باتنة 1'];
      default:
        return ['جامعة الجزائر العاصمة', 'جامعة وهران', 'جامعة قسنطينة', 'جامعة سطيف', 'جامعة عنابة', 'جامعة تلمسان', 'جامعة ورقلة'];
    }
  };

  const categories = ['الكل', ...new Set(INITIAL_DATA.map(s => s.category))];
  const streams = ['الكل', 'علوم تجريبية', 'رياضيات', 'تقني رياضي', 'آداب وفلسفة', 'لغات أجنبية', 'تسيير واقتصاد'];

  // تحسين تطبيع النص العربي للبحث بشكل أكثر شمولاً
  const normalizeArabic = (text: string | undefined | null) => {
    if (!text) return '';
    return text
      .toString()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/ـ/g, '') // إزالة التطويل
      .replace(/[\u064B-\u0652]/g, '') // إزالة التشكيل (الفتحة، الضمة، إلخ)
      .replace(/\s+/g, ' ') // توحيد المسافات
      .trim()
      .toLowerCase();
  };

  const filteredSpecializations = useMemo(() => {
    try {
      const normalizedQuery = normalizeArabic(searchQuery);
      const queryWords = normalizedQuery.split(' ').filter(w => w.length > 0);
      const gradeValue = userGrade.replace(',', '.');
      const normalizedGrade = gradeValue === '' ? '' : Number(gradeValue);
      
      let baseData = INITIAL_DATA;
      if (view === 'favorites') {
        baseData = INITIAL_DATA.filter(spec => favorites.includes(spec.id));
      }

      return baseData
        .filter(spec => {
          // 1. شرط البحث النصي
          const specName = normalizeArabic(spec.name);
          const specJobs = spec.jobs.map(j => normalizeArabic(j)).join(' ');
          const specDesc = normalizeArabic(spec.description);
          const specCat = normalizeArabic(spec.category);
          
          const fullContent = `${specName} ${specJobs} ${specDesc} ${specCat}`;
          const matchesSearch = queryWords.length === 0 || queryWords.every(word => fullContent.includes(word));
          
          // 2. شرط المعدل
          const matchesGrade = showAllRegardlessOfGrade || normalizedGrade === '' || normalizedGrade >= spec.minGrade;
          
          // 3. شرط التصنيف
          const matchesCategory = selectedCategory === 'الكل' || spec.category === selectedCategory;

          // 4. شرط الشعبة
          const matchesStream = selectedStream === 'الكل' || spec.streams.includes(selectedStream);
          
          return matchesSearch && matchesGrade && matchesCategory && matchesStream;
        })
        .sort((a, b) => b.marketDemand - a.marketDemand);
    } catch (error) {
      console.error("Search filtering error:", error);
      return INITIAL_DATA;
    }
  }, [view, favorites, searchQuery, userGrade, selectedCategory, selectedStream, showAllRegardlessOfGrade]);

  const handleGradeChange = (val: string) => {
    // السماح بالأرقام، النقطة، والفاصلة فقط
    const sanitized = val.replace(/[^0-9.,]/g, '');
    setUserGrade(sanitized);
  };

  const resultsWithoutGradeFilter = useMemo(() => {
    const normalizedQuery = normalizeArabic(searchQuery);
    const queryWords = normalizedQuery.split(' ').filter(w => w.length > 0);
    
    let baseData = INITIAL_DATA;
    if (view === 'favorites') {
      baseData = INITIAL_DATA.filter(spec => favorites.includes(spec.id));
    }

    return baseData.filter(spec => {
      const fullContent = `${normalizeArabic(spec.name)} ${spec.jobs.map(j => normalizeArabic(j)).join(' ')} ${normalizeArabic(spec.description)} ${normalizeArabic(spec.category)}`;
      const matchesSearch = queryWords.length === 0 || queryWords.every(word => fullContent.includes(word));
      const matchesCategory = selectedCategory === 'الكل' || spec.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [view, favorites, searchQuery, selectedCategory]);

  const resultsWithoutSearchFilter = useMemo(() => {
    const gradeValue = userGrade.replace(',', '.');
    const normalizedGrade = gradeValue === '' ? '' : Number(gradeValue);

    let baseData = INITIAL_DATA;
    if (view === 'favorites') {
      baseData = INITIAL_DATA.filter(spec => favorites.includes(spec.id));
    }

    return baseData.filter(spec => {
      const matchesGrade = showAllRegardlessOfGrade || normalizedGrade === '' || normalizedGrade >= spec.minGrade;
      const matchesCategory = selectedCategory === 'الكل' || spec.category === selectedCategory;
      return matchesGrade && matchesCategory;
    });
  }, [view, favorites, userGrade, selectedCategory, showAllRegardlessOfGrade]);

  const isGradeTheBottleneck = filteredSpecializations.length === 0 && resultsWithoutGradeFilter.length > 0;
  const isSearchTheBottleneck = filteredSpecializations.length === 0 && resultsWithoutSearchFilter.length > 0;

  const isEligible = (minGrade: number) => {
    if (userGrade === '') return true;
    const gradeValue = userGrade.replace(',', '.');
    return Number(gradeValue) >= minGrade;
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const getAdvisorAdvice = () => {
    if (userGrade === '') return "يا خويا/ختي، دخل المعدل تاعك باش نقدر نعاونك!";
    const gradeValue = userGrade.replace(',', '.');
    const grade = Number(gradeValue);
    if (isNaN(grade)) return "يا خويا/ختي، دخل معدل صحيح (مثال: 14.50)";

    // العثور على أفضل تخصص من حيث الطلب في سوق العمل والمناسب للمعدل
    const eligibleSpecs = INITIAL_DATA.filter(s => grade >= s.minGrade)
      .sort((a, b) => b.marketDemand - a.marketDemand);

    const eligibleInCat = eligibleSpecs.filter(s => 
      selectedCategory === 'الكل' || s.category === selectedCategory
    );

    const topSpec = eligibleInCat[0] || eligibleSpecs[0];
    
    let advice = "";
    
    if (grade >= 16) {
      advice = `تبارك الله! بمعدل ${userGrade} عندك خيارات قوية بزاف. `;
    } else if (grade >= 14) {
      advice = `معدل ${userGrade} بزاف هايل، يفتحلك بيبان لتخصصات ممتازة. `;
    } else if (grade >= 12) {
      advice = `معدل ${userGrade} مليح، تقدر دير بيه تخصصات عندها مستقبل واعد. `;
    } else if (grade >= 10) {
      advice = `مبروك عليك الباك! بمعدل ${userGrade} كاين تخصصات ملاح تقدر تنجح فيهم وتطور روحك. `;
    } else {
      advice = "ما تفشلش، الصح في الإرادة والخدمة، كاين تخصصات بزاف تقدر تبدع فيهم. ";
    }

    if (topSpec) {
      if (selectedCategory !== 'الكل' && topSpec.category === selectedCategory) {
        advice += `بما أنك مهتم بـ ${selectedCategory}، ننصحك بـ "${topSpec.name}" راهو مطلوب بزاف (الطلب: ${topSpec.marketDemand}/10). `;
      } else {
        advice += `ننصحك تشوف "${topSpec.name}"، راهو تخصص مطلوب بزاف في سوق العمل حالياً. `;
      }
    }

    if (favorites.length > 0) {
      advice += `راك حفظت ${favorites.length} تخصصات في المفضلة، ركز عليهم وشوف اللي يخرج على طموحك!`;
    } else {
      advice += "ما تنساش تضغط على القلب ❤️ باش تحفظ التخصصات اللي عجبوك.";
    }

    return advice;
  };

  return (
    <div className="min-h-screen bg-[#021a14] font-sans text-right text-emerald-50 selection:bg-amber-500/30 selection:text-amber-200" dir="rtl">
      {/* Hero Section with Deep Emerald Gradient & Gold Accent Border */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[#063327] via-[#032219] to-[#021a14] text-white pt-8 pb-14 px-4 border-b border-amber-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Dual Section Toggle Buttons */}
        <div className="max-w-6xl mx-auto px-4 mb-8 relative z-10">
          <div className="bg-slate-950/70 backdrop-blur-xl p-2 rounded-3xl border border-amber-500/30 flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto shadow-2xl">
            <button
              onClick={() => setMainSection('university')}
              className={`flex-1 py-3.5 px-6 rounded-2xl font-black text-sm md:text-base transition-all flex items-center justify-center gap-2.5 ${
                mainSection === 'university'
                  ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.4)] scale-[1.02]'
                  : 'text-amber-100/80 hover:text-amber-300 hover:bg-slate-900/60'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              التوجيه الجامعي 🎓
            </button>

            <button
              onClick={() => setMainSection('vocational')}
              className={`flex-1 py-3.5 px-6 rounded-2xl font-black text-sm md:text-base transition-all flex items-center justify-center gap-2.5 ${
                mainSection === 'vocational'
                  ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.4)] scale-[1.02]'
                  : 'text-emerald-100/80 hover:text-emerald-300 hover:bg-slate-900/60'
              }`}
            >
              <Wrench className="w-5 h-5" />
              التوجيه المهني والمهارات 🛠️
            </button>
          </div>
        </div>

        {mainSection === 'university' ? (
          <>
            <div className="max-w-6xl mx-auto space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center md:text-right"
              >
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-3">
                  <div 
                    onClick={() => setShowLogoModal(true)}
                    className="relative group cursor-pointer p-1.5 bg-gradient-to-tr from-emerald-600 via-amber-500 to-emerald-400 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
                    title="انقر لنتائج وتفاصيل تصميم الشعار الرسمي"
                  >
                    <img 
                      src={dzLogo} 
                      alt="شعار Dz-Orientation الرسمي" 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shadow-inner" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1 rounded-full text-[10px] font-black shadow-md group-hover:scale-110 transition-transform">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-3xl font-black tracking-tight text-white">DzTech Mind</h1>
                      <span className="text-xs bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full font-bold">
                        الشعار الجديد ✨
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-300 drop-shadow-sm">Dz-Orientation</h2>
                  </div>
                </div>
                <p className="text-lg sm:text-xl text-green-100 max-w-2xl">
                  دليلك الذكي لاختيار التخصص الجامعي في الجزائر (توقعات 2026) بناءً على معدلك وسوق العمل.
                </p>
              </motion.div>
              
              {/* Luxury Glassmorphism Smart Advisor Section */}
              <SmartAdvisorBanner 
                userGrade={userGrade}
                onGradeChange={handleGradeChange}
                onOpenAIChat={() => setShowAIChatModal(true)}
                adviceMessage={getAdvisorAdvice()}
              />
            </div>

            {/* Navigation Tabs for University Subviews */}
            <div className="max-w-6xl mx-auto px-4 mt-8 flex justify-center">
              <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-2xl flex flex-wrap justify-center gap-1.5 sm:gap-2 border border-white/20">
                <button
                  onClick={() => setView('home')}
                  className={`px-3 sm:px-8 py-2.5 sm:py-3 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-1.5 sm:gap-2 ${
                    view === 'home' 
                      ? 'bg-white text-[#004d00] shadow-lg' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                  الرئيسية
                </button>
                <button
                  onClick={() => setView('favorites')}
                  className={`px-3 sm:px-8 py-2.5 sm:py-3 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-1.5 sm:gap-2 relative ${
                    view === 'favorites' 
                      ? 'bg-white text-[#004d00] shadow-lg' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${view === 'favorites' ? 'fill-current' : ''}`} />
                  المفضلة
                  {favorites.length > 0 && (
                    <span className="absolute -top-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-[#004d00] font-black animate-bounce">
                      {favorites.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-6xl mx-auto space-y-4 text-center md:text-right">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <div 
                onClick={() => setShowLogoModal(true)}
                className="relative group cursor-pointer p-1.5 bg-gradient-to-tr from-emerald-600 via-amber-500 to-emerald-400 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
                title="انقر لنتائج وتفاصيل تصميم الشعار الرسمي"
              >
                <img 
                  src={dzLogo} 
                  alt="شعار Dz-Orientation الرسمي" 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shadow-inner" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1 rounded-full text-[10px] font-black shadow-md group-hover:scale-110 transition-transform">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <h1 className="text-3xl font-black tracking-tight text-white">DzTech Mind</h1>
                  <span className="text-xs bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full font-bold">
                    التوجيه المهني 🛠️
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-amber-300 drop-shadow-sm">قسم المهارات والتكوين المهني الميداني</h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-green-100 max-w-2xl">
              طرق سريعة للتمكن من المهن التقنية الأكثر طلباً في سوق العمل مع خرائط طريق من 3 مراحل وتحليلات حسب مستواك الدراسي.
            </p>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 -mt-8 pb-20">
        {mainSection === 'vocational' ? (
          <VocationalGuidance onOpenAIChat={(level) => {
            setAiChatEduLevel(level);
            setShowAIChatModal(true);
          }} />
        ) : view === 'promo' ? (
          <PromoCreator onBack={() => setView('home')} />
        ) : (
          <>
            {/* View Title */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-black text-amber-100 flex items-center gap-3">
                {view === 'favorites' ? (
                  <>
                    <Heart className="w-7 h-7 text-red-400 fill-current" />
                    تخصصاتي المفضلة
                  </>
                ) : (
                  <>
                    <GraduationCap className="w-7 h-7 text-amber-400" />
                    التخصصات الجامعية المتاحة
                  </>
                )}
              </h2>
              {view === 'favorites' && favorites.length > 0 && (
                <button 
                  onClick={() => setFavorites([])}
                  className="text-red-400 text-sm font-bold hover:underline"
                >
                  مسح الكل
                </button>
              )}
            </div>

            {/* Search & Filter Bar with Polished Glassmorphism */}
            <section className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 mb-10 border border-amber-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.5)] text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="relative">
                  <label className="block text-xs font-bold text-amber-200/90 mb-2 mr-1">المعدل (بكالوريا)</label>
                  <div className="relative">
                    <TrendingUp className="absolute right-3.5 top-1/2 -translate-y-1/2 text-amber-400 w-5 h-5" />
                    <input
                      type="text"
                      inputMode="decimal"
                      placeholder="مثال: 15.40"
                      className="w-full pr-11 pl-4 py-3 bg-slate-950/70 border border-amber-500/30 rounded-2xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none font-black text-lg text-white placeholder-slate-500 shadow-inner"
                      value={userGrade}
                      onChange={(e) => handleGradeChange(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-200/90 mb-2 mr-1">الشعبة</label>
                  <div className="relative">
                    <ChevronDown className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400/70 w-5 h-5 pointer-events-none" />
                    <select
                      className="w-full pr-4 pl-10 py-3 bg-slate-950/70 border border-amber-500/30 rounded-2xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none appearance-none font-bold text-slate-100 cursor-pointer"
                      value={selectedStream}
                      onChange={(e) => setSelectedStream(e.target.value)}
                    >
                      {streams.map(s => (
                        <option key={s} value={s} className="bg-slate-900 text-white py-2">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-200/90 mb-2 mr-1">التصنيف</label>
                  <div className="relative">
                    <Filter className="absolute right-3.5 top-1/2 -translate-y-1/2 text-amber-400 w-5 h-5" />
                    <select
                      className="w-full pr-11 pl-4 py-3 bg-slate-950/70 border border-amber-500/30 rounded-2xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none appearance-none font-bold text-slate-100 cursor-pointer"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat} className="bg-slate-900 text-white py-2">{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-end">
                  <button 
                    onClick={() => {
                      setIsDiscovering(true);
                      setTimeout(() => setIsDiscovering(false), 1000);
                    }}
                    className="w-full py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 rounded-2xl font-black text-base shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isDiscovering ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                        <Sparkles className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        اكتشف مستقبلي
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 pt-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="ابحث عن تخصص أو شركة (سوناطراك، جازي...)"
                    className="w-full pr-11 pl-4 py-2.5 bg-slate-950/60 border border-slate-700/80 rounded-xl focus:border-amber-400 outline-none text-sm text-slate-100 placeholder-slate-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  {/* أداة تكبير وتصغير النصوص والبطاقات */}
                  <div className="flex items-center gap-1.5 bg-slate-950/60 p-1 rounded-xl text-xs font-bold text-slate-300 border border-slate-800">
                    <span className="px-2 text-slate-400 flex items-center gap-1">
                      <Type className="w-3.5 h-3.5 text-amber-400" />
                      حجم الخط:
                    </span>
                    <button
                      onClick={() => setZoomLevel('normal')}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        zoomLevel === 'normal' ? 'bg-amber-500/20 text-amber-300 font-black border border-amber-500/30' : 'hover:bg-slate-800 text-slate-400'
                      }`}
                    >
                      عادي
                    </button>
                    <button
                      onClick={() => setZoomLevel('large')}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        zoomLevel === 'large' ? 'bg-amber-500/20 text-amber-300 font-black border border-amber-500/30' : 'hover:bg-slate-800 text-slate-400'
                      }`}
                    >
                      كبير 🔍
                    </button>
                    <button
                      onClick={() => setZoomLevel('xlarge')}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        zoomLevel === 'xlarge' ? 'bg-amber-500/20 text-amber-300 font-black border border-amber-500/30' : 'hover:bg-slate-800 text-slate-400'
                      }`}
                    >
                      ضخم 🔍🔍
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      id="showAll" 
                      className="w-5 h-5 text-amber-500 accent-amber-500 rounded border-slate-700 focus:ring-amber-400 cursor-pointer"
                      checked={showAllRegardlessOfGrade}
                      onChange={(e) => setShowAllRegardlessOfGrade(e.target.checked)}
                    />
                    <label htmlFor="showAll" className="text-xs font-bold text-slate-300 cursor-pointer hover:text-white transition-colors">
                      إظهار التخصصات غير المتاحة لمعدلي
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredSpecializations.map((spec, index) => {
                  const eligible = isEligible(spec.minGrade);
                  const isFavorite = favorites.includes(spec.id);
                  
                  return (
                    <motion.div
                      key={spec.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className={`bg-slate-900/90 backdrop-blur-md rounded-[2rem] border transition-all overflow-hidden group relative flex flex-col justify-between ${
                        !eligible 
                          ? 'opacity-80 border-slate-800 shadow-md' 
                          : 'border-amber-500/30 hover:border-amber-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]'
                      }`}
                    >
                  {/* Market Demand Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-black border border-amber-500/40 backdrop-blur-md shadow-md">
                      <Star className="w-3 h-3 fill-current text-amber-400" />
                      طلب عالٍ
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-amber-400/90 mb-1 uppercase tracking-wider">
                          {spec.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight group-hover:text-amber-300 transition-colors">
                          {spec.name}
                        </h3>
                      </div>
                      <button 
                        onClick={() => toggleFavorite(spec.id)}
                        className={`p-2.5 rounded-2xl transition-all ${
                          isFavorite ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-slate-950/60 text-slate-400 hover:text-red-400 border border-slate-800'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
                      <div className="flex-1">
                        <div className="text-xs text-slate-400 font-bold mb-1">معدل القبول</div>
                        <div className={`text-2xl font-black ${eligible ? 'text-emerald-400' : 'text-red-400'}`}>
                          {spec.minGrade.toString().replace('.', ',')}
                        </div>
                      </div>
                      <div className="w-px h-10 bg-slate-800" />
                      <div className="flex-1">
                        <div className="text-xs text-slate-400 font-bold mb-1">سوق العمل</div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-1.5 flex-1 rounded-full ${i < spec.marketDemand / 2 ? 'bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 'bg-slate-800'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {!eligible && (
                      <div className="mb-6 p-3 bg-red-950/40 text-red-300 text-xs rounded-xl border border-red-800/60 font-bold flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                        معدلك الحالي أقل من الحد الأدنى
                      </div>
                    )}

                    <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-2 font-medium">
                      {spec.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center text-amber-200 font-bold text-xs">
                        <Building2 className="w-4 h-4 ml-1.5 text-amber-400" />
                        فرص التوظيف الكبرى:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {spec.jobs.slice(0, 4).map((job, i) => (
                          <span 
                            key={i} 
                            className="px-2.5 py-1 bg-slate-950/70 text-emerald-200 border border-emerald-500/20 rounded-xl text-xs font-semibold hover:border-amber-400/40 transition-colors cursor-default"
                          >
                            {job}
                          </span>
                        ))}
                        {spec.jobs.length > 4 && (
                          <span className="px-2.5 py-1 bg-slate-950/70 text-slate-400 rounded-xl text-xs font-semibold">
                            +{spec.jobs.length - 4} أخرى
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-7 py-4 bg-slate-950/80 border-t border-slate-800 flex flex-wrap justify-between items-center gap-3 group-hover:bg-slate-950 transition-colors">
                    <button 
                      onClick={() => setZoomedSpec(spec)}
                      className="text-amber-300 text-xs font-black flex items-center gap-1.5 hover:gap-2 transition-all bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-3.5 py-2 rounded-xl"
                    >
                      <Maximize2 className="w-4 h-4 text-amber-400" />
                      عرض مكبّر ومفصل
                    </button>

                    <button 
                      onClick={() => toggleComparison(spec.id)}
                      className={`text-xs font-black flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all ${
                        comparisonList.includes(spec.id)
                          ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                          : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
                      }`}
                    >
                      <Scale className="w-3.5 h-3.5" />
                      {comparisonList.includes(spec.id) ? 'محدد للمقارنة ✓' : 'مقارنة'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredSpecializations.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24 bg-white rounded-[3rem] border-4 border-dashed border-gray-100"
          >
            <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              {view === 'favorites' ? (
                <Heart className="w-12 h-12 text-gray-300" />
              ) : (
                <Search className="w-12 h-12 text-gray-300" />
              )}
            </div>
            <h3 className="text-3xl font-black text-gray-800 mb-4">
              {view === 'favorites' ? 'قائمة المفضلة فارغة' : 'عذراً، لم نجد تخصصات مطابقة'}
            </h3>
            
            <div className="max-w-xl mx-auto space-y-6 px-6">
              <p className="text-gray-500 text-xl leading-relaxed">
                {view === 'favorites' 
                  ? 'لم تقم بإضافة أي تخصص للمفضلة بعد. ابدأ باستكشاف التخصصات واضغط على أيقونة القلب لحفظ ما يعجبك.'
                  : isGradeTheBottleneck 
                    ? 'معدلك الحالي يمنع ظهور بعض التخصصات. جرب تفعيل "إظهار جميع التخصصات" لرؤية ما فاتك.'
                    : isSearchTheBottleneck
                    ? 'لم نجد نتائج تطابق بحثك. جرب كلمات مفتاحية أخرى أو ابحث في تصنيف مختلف.'
                    : 'جرب توسيع نطاق البحث أو تغيير الشعبة. المستشار الذكي ينصحك بمراجعة معدلك أو اختيار "إظهار جميع التخصصات".'}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => {
                    if (view === 'favorites') {
                      setView('home');
                    } else {
                      setSearchQuery('');
                      setUserGrade('');
                      setSelectedCategory('الكل');
                      setSelectedStream('الكل');
                      setShowAllRegardlessOfGrade(false);
                    }
                  }}
                  className="px-10 py-4 bg-[#004d00] text-white rounded-2xl font-black text-lg shadow-xl shadow-green-100 hover:bg-green-800 transition-all active:scale-95"
                >
                  {view === 'favorites' ? 'العودة للرئيسية' : 'إعادة ضبط البحث'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
          </>
        )}

        {/* Zoomed / Enlarge Specialization Modal */}
        <AnimatePresence>
          {zoomedSpec && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
              onClick={() => setZoomedSpec(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[2.5rem] p-6 sm:p-10 max-w-3xl w-full shadow-2xl border border-gray-100 text-right space-y-6 max-h-[90vh] overflow-y-auto my-auto"
                dir="rtl"
              >
                {/* Header */}
                <div className="flex justify-between items-start border-b border-gray-100 pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-50 text-[#004d00] text-xs font-black px-3 py-1 rounded-full border border-green-100">
                        {zoomedSpec.category}
                      </span>
                      <span className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">
                        عرض مكبّر مريح للعين 🔍
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
                      {zoomedSpec.name}
                    </h2>
                  </div>
                  <button 
                    onClick={() => setZoomedSpec(null)}
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl text-gray-600 transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Primary Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-green-50/80 p-5 rounded-2xl border border-green-100">
                    <span className="text-xs text-gray-500 font-bold block mb-1">الحد الأدنى لمعدل القبول</span>
                    <div className="text-3xl font-black text-[#004d00]">
                      {zoomedSpec.minGrade.toString().replace('.', ',')} / 20
                    </div>
                    <p className="text-xs text-green-800 font-bold mt-1">
                      {userGrade && Number(userGrade.replace(',', '.')) >= zoomedSpec.minGrade 
                        ? '✅ معدلك الحالي يسمح لك باختيار هذا التخصص!' 
                        : '⚠️ يتطلب هذا التخصص معدلاً أعلى من معدلك الحسابي الحالي'}
                    </p>
                  </div>

                  <div className="bg-blue-50/80 p-5 rounded-2xl border border-blue-100">
                    <span className="text-xs text-gray-500 font-bold block mb-1">الشعب المسموحة بالبكالوريا</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {zoomedSpec.streams.map((st, i) => (
                        <span key={i} className="bg-white text-blue-900 text-xs font-black px-2.5 py-1 rounded-lg border border-blue-100">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-2">
                  <h4 className="font-black text-gray-800 text-lg flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-green-700" />
                    شرح شامل عن التخصص:
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {zoomedSpec.description}
                  </p>
                </div>

                {/* Top Algerian Universities */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
                  <h4 className="font-black text-gray-800 text-lg flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    أبرز الجامعات والمدارس العليا بالجزائر:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {getUniversitiesForCategory(zoomedSpec.category).map((univ, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-gray-100 text-xs font-bold text-gray-800 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-green-700 shrink-0" />
                        <span>{univ}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Major Employers */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
                  <h4 className="font-black text-gray-800 text-lg flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-green-700" />
                    أين يمكنك العمل مستقبلاً؟ (فرص التوظيف)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {zoomedSpec.jobs.map((j, i) => (
                      <span key={i} className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-xl text-sm font-black shadow-sm">
                        {j} 🏢
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => {
                      toggleFavorite(zoomedSpec.id);
                    }}
                    className={`flex-1 py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all ${
                      favorites.includes(zoomedSpec.id)
                        ? 'bg-red-50 text-red-600 border border-red-200'
                        : 'bg-[#004d00] text-white hover:bg-green-800 shadow-lg'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(zoomedSpec.id) ? 'fill-current' : ''}`} />
                    {favorites.includes(zoomedSpec.id) ? 'حذف من المفضلة' : 'حفظ في المفضلة'}
                  </button>
                  
                  <button
                    onClick={() => setZoomedSpec(null)}
                    className="px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-2xl text-sm transition-all"
                  >
                    إغلاق العرض
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Comparison Bar */}
        <AnimatePresence>
          {comparisonList.length > 0 && (
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900 text-white px-6 py-4 rounded-3xl shadow-2xl border border-slate-700 flex items-center gap-6 max-w-xl w-[90%]"
              dir="rtl"
            >
              <div className="flex-1">
                <span className="text-xs text-slate-400 block font-bold">جدول المقارنة</span>
                <h4 className="text-sm font-black">
                  تم اختيار {comparisonList.length} تخصصات للمقارنة
                </h4>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowComparisonModal(true)}
                  className="px-5 py-2.5 bg-green-500 hover:bg-green-600 text-slate-950 font-black text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5"
                >
                  <Scale className="w-4 h-4" />
                  عرض المقارنة
                </button>
                <button
                  onClick={() => setComparisonList([])}
                  className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all"
                  title="مسح المقارنة"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Comparison Modal */}
        <AnimatePresence>
          {showComparisonModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
              onClick={() => setShowComparisonModal(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[2.5rem] p-6 sm:p-10 max-w-4xl w-full shadow-2xl border border-gray-100 text-right space-y-6 max-h-[90vh] overflow-y-auto my-auto"
                dir="rtl"
              >
                <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                  <div>
                    <span className="bg-amber-50 text-amber-800 text-xs font-black px-3 py-1 rounded-full border border-amber-200 inline-block mb-1">
                      جدول المقارنة المباشر ⚖️
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900">مقارنة التخصصات المختارة</h2>
                  </div>
                  <button 
                    onClick={() => setShowComparisonModal(false)}
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl text-gray-600 transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {INITIAL_DATA.filter(s => comparisonList.includes(s.id)).map(spec => (
                    <div key={spec.id} className="bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-4">
                      <div className="border-b border-gray-200 pb-3">
                        <span className="text-[10px] font-bold text-gray-400 block uppercase">{spec.category}</span>
                        <h3 className="text-xl font-black text-gray-800">{spec.name}</h3>
                      </div>

                      <div>
                        <span className="text-xs text-gray-500 font-bold block">معدل القبول الأدنى</span>
                        <div className="text-2xl font-black text-[#004d00]">{spec.minGrade.toString().replace('.', ',')}</div>
                      </div>

                      <div>
                        <span className="text-xs text-gray-500 font-bold block">الطلب في سوق العمل</span>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-2 flex-1 rounded-full ${i < spec.marketDemand / 2 ? 'bg-green-500' : 'bg-gray-200'}`} 
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs text-gray-500 font-bold block mb-1">فرص التوظيف</span>
                        <div className="flex flex-wrap gap-1">
                          {spec.jobs.map((j, idx) => (
                            <span key={idx} className="bg-white border border-gray-200 text-gray-700 text-[11px] font-bold px-2 py-0.5 rounded-lg">
                              {j}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => toggleComparison(spec.id)}
                        className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold rounded-xl transition-all"
                      >
                        إزالة من المقارنة
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center text-white mb-4">
              <GraduationCap className="w-8 h-8 ml-2 text-blue-400" />
              <span className="text-xl font-bold">دليل التخصصات</span>
            </div>
            <p className="text-sm leading-relaxed">
              منصة تعليمية تهدف لتبسيط عملية اختيار التخصص الجامعي للطلاب الجزائريين من خلال توفير معلومات دقيقة ومحدثة.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">عن المنصة</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">تواصل معنا</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">الأسئلة الشائعة</a></li>
              <li className="pt-1">
                <button
                  onClick={() => {
                    setMainSection('university');
                    setView('promo');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-xs font-medium group"
                >
                  <Video className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>استوديو الترويج الرقمي (Media Studio)</span>
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
            <p className="text-sm">
              لأي استفسار أو اقتراح لتخصصات جديدة، يرجى مراسلتنا عبر البريد الإلكتروني.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-xs">
          جميع الحقوق محفوظة © 2026 دليل التخصصات الجامعية والمهنية
        </div>
      </footer>

      {/* AI Smart Assistant Chat Modal */}
      <AIChatModal
        isOpen={showAIChatModal}
        onClose={() => {
          setShowAIChatModal(false);
          setAiChatEduLevel(undefined);
        }}
        userEducationLevel={aiChatEduLevel}
        userGrade={userGrade}
      />

      {/* Modern Logo Showcase Modal */}
      <AnimatePresence>
        {showLogoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md" dir="rtl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-xl w-full text-white shadow-2xl relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

              <button
                onClick={() => setShowLogoModal(false)}
                className="absolute top-4 left-4 text-slate-400 hover:text-white bg-slate-800/80 p-2 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">الشعار الرسمي المنفّذ لمنصة Dz-Orientation</h3>
                  <p className="text-xs text-slate-400">تصميم بصري دقيق يدمج قبعة التخرج وحرف "د" وحرف "T"</p>
                </div>
              </div>

              {/* Logo Large Preview */}
              <div className="relative group mx-auto mb-6 w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-amber-500/40 p-2 bg-gradient-to-tr from-slate-950 via-emerald-950 to-slate-900 shadow-2xl flex items-center justify-center">
                <img
                  src={dzLogo}
                  alt="شعار Dz-Orientation"
                  className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Design Elements Breakdown */}
              <div className="space-y-3 bg-slate-950/60 border border-slate-800 p-4 rounded-2xl text-xs sm:text-sm mb-6">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                  <p><strong className="text-emerald-300">الرمز الموحد:</strong> دمج هندسي بين قبعة التخرج الأكاديمية وحرف "د" العربي وحرف "T" التكنولوجي.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                  <p><strong className="text-amber-300">الهوية الأيقونية:</strong> يرمز إلى التكامل والانسجام بين التعليم الجامعي والتقني والمستقبل الرقمي بالجزائر.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                  <p><strong className="text-teal-300">الألوان الرسمية:</strong> الأخضر الزمردي الأنيق (الهوية الوطنية والنمو) والذهبي البرونزي (التميز والنجاح الأكاديمي).</p>
                </div>
              </div>

              <button
                onClick={() => setShowLogoModal(false)}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black rounded-xl hover:brightness-110 transition-all text-sm shadow-lg flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-slate-950" />
                حفظ وإغلاق نافذة الشعار
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
