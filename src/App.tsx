import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Star
} from 'lucide-react';
import { Specialization } from './types';

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
  const [view, setView] = useState<'home' | 'favorites'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [userGrade, setUserGrade] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [selectedStream, setSelectedStream] = useState<string>('الكل');
  const [showAllRegardlessOfGrade, setShowAllRegardlessOfGrade] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showAdvisor, setShowAdvisor] = useState(false);
  const [isDiscovering, setIsDiscovering] = useState(false);

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
    <div className="min-h-screen bg-gray-50 font-sans text-right" dir="rtl">
      {/* Hero Section */}
      <header className="bg-[#004d00] text-white py-12 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center md:text-right"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-black tracking-tight">DzTech Mind</h1>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Dz-Orientation</h2>
            <p className="text-xl text-green-100 max-w-xl">
              دليلك الذكي لاختيار التخصص الجامعي في الجزائر (توقعات 2026) بناءً على معدلك وسوق العمل.
            </p>
            <p className="text-sm text-green-200/70 mt-2 italic">
              * ملاحظة: المعدلات هي توقعات أولية لسنة 2026 بناءً على توجهات السنوات السابقة.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 p-6 rounded-3xl backdrop-blur-md border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4 text-green-100">
              <Sparkles className="w-6 h-6" />
              <span className="font-bold">المستشار الذكي</span>
            </div>
            <p className="text-lg leading-relaxed mb-4 min-h-[80px] max-w-[300px]">
              "{getAdvisorAdvice()}"
            </p>
            <button 
              onClick={() => setShowAdvisor(!showAdvisor)}
              className="w-full py-2 bg-white text-[#004d00] rounded-xl font-bold hover:bg-green-50 transition-colors"
            >
              تحدث مع المستشار
            </button>
          </motion.div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-6xl mx-auto px-4 mt-8 flex justify-center">
          <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-2xl flex gap-2 border border-white/20">
            <button
              onClick={() => setView('home')}
              className={`px-8 py-3 rounded-xl font-black text-sm transition-all flex items-center gap-2 ${
                view === 'home' 
                  ? 'bg-white text-[#004d00] shadow-lg' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              الرئيسية
            </button>
            <button
              onClick={() => setView('favorites')}
              className={`px-8 py-3 rounded-xl font-black text-sm transition-all flex items-center gap-2 relative ${
                view === 'favorites' 
                  ? 'bg-white text-[#004d00] shadow-lg' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Heart className={`w-5 h-5 ${view === 'favorites' ? 'fill-current' : ''}`} />
              المفضلة
              {favorites.length > 0 && (
                <span className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-[#004d00] font-black animate-bounce">
                  {favorites.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 -mt-8 pb-20">
        {/* View Title */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-black text-gray-800 flex items-center gap-3">
            {view === 'favorites' ? (
              <>
                <Heart className="w-8 h-8 text-red-500 fill-current" />
                تخصصاتي المفضلة
              </>
            ) : (
              <>
                <GraduationCap className="w-8 h-8 text-[#004d00]" />
                التخصصات المتاحة
              </>
            )}
          </h2>
          {view === 'favorites' && favorites.length > 0 && (
            <button 
              onClick={() => setFavorites([])}
              className="text-red-500 text-sm font-bold hover:underline"
            >
              مسح الكل
            </button>
          )}
        </div>

        {/* Search & Filter Bar */}
        <section className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 mb-12 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="relative">
              <label className="block text-sm font-bold text-gray-700 mb-2 mr-1">المعدل (بكالوريا)</label>
              <div className="relative">
                <TrendingUp className="absolute right-3 top-1/2 -translate-y-1/2 text-green-700 w-5 h-5" />
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="مثال: 15.40"
                  className="w-full pr-10 pl-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#004d00] transition-all outline-none font-bold text-lg"
                  value={userGrade}
                  onChange={(e) => handleGradeChange(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 mr-1">الشعبة</label>
              <div className="relative">
                <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  className="w-full pr-4 pl-10 py-3 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#004d00] transition-all outline-none appearance-none font-medium"
                  value={selectedStream}
                  onChange={(e) => setSelectedStream(e.target.value)}
                >
                  {streams.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 mr-1">التصنيف</label>
              <div className="relative">
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-green-700 w-5 h-5" />
                <select
                  className="w-full pr-10 pl-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#004d00] transition-all outline-none appearance-none font-medium"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
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
                className="w-full py-3 bg-[#004d00] text-white rounded-2xl font-black text-lg shadow-lg shadow-green-200 hover:bg-green-800 transition-all active:scale-95 flex items-center justify-center gap-2"
              
