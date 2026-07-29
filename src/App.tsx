import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Search, 
  BookOpen, 
  Briefcase, 
  Filter, 
  CheckCircle, 
  XCircle, 
  Award, 
  Heart,
  Megaphone,
  Sparkles,
  Wrench,
  Bot,
  X,
  Send,
  Copy
} from 'lucide-react';

export interface Specialization {
  id: string;
  name: string;
  minGrade: number;
  jobs: string[];
  description: string;
  category: string;
  streams: string[];
  marketDemand: number;
}

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

const CATEGORIES = ['الكل', 'العلوم الطبية', 'التكنولوجيا', 'الهندسة', 'الاقتصاد', 'اللغات', 'العلوم الإنسانية', 'العلوم الطبيعية', 'العلوم الأساسية'];
const STREAMS = ['الكل', 'علوم تجريبية', 'رياضيات', 'تقني رياضي', 'تسيير واقتصاد', 'آداب وفلسفة', 'لغات أجنبية'];

function VocationalGuidance() {
  const vocationalFields = [
    { name: 'برمجة وتطوير المواقع', demand: 'عالي جداً', duration: '6 أشهر - سنة', type: 'تكوين خاص / تعلم ذاتي' },
    { name: 'التصميم والغرافيك', demand: 'عالي', duration: '3 - 6 أشهر', type: 'تكوين مهني / عمل حر' },
    { name: 'صيانة الأجهزة الإلكترونية والآلية', demand: 'ممتاز', duration: '18 شهر', type: 'معهد التكوين المهني' },
    { name: 'التسويق الرقمي وإدارة المحتوى', demand: 'مطلوب بقوة', duration: '3 - 6 أشهر', type: 'تعلم ذاتي / دورات' },
    { name: 'الطاقات المتجددة والكهرباء', demand: 'متزايد', duration: '24 شهر', type: 'تكوين دولتي' }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/50 space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-black text-emerald-400 mb-2">دليل التكوين المهني والمهارات المطلوبة</h2>
        <p className="text-slate-300 text-sm">مسارات بديلة وسريعة لدخول سوق العمل وبناء مشروعك الخاص بدون الحاجة لشهادة جامعية.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vocationalFields.map((field, idx) => (
          <div key={idx} className="bg-slate-900/80 border border-slate-700/70 rounded-2xl p-5 space-y-3">
            <h3 className="text-lg font-bold text-white">{field.name}</h3>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p><span className="text-slate-400">الطلب في السوق:</span> <span className="text-emerald-400 font-bold">{field.demand}</span></p>
              <p><span className="text-slate-400">مدة التعلم:</span> {field.duration}</p>
              <p><span className="text-slate-400">طبيعة المسار:</span> {field.type}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function PromoCreator() {
  const [title, setTitle] = useState('تطبيق DzTech Mind - دليل التوجيه');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`🚀 اكتشف مستقبلك الدراسي والمهني مع DzTech Mind! \n${title}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/50 max-w-2xl mx-auto space-y-6">
      <h2 className="text-xl font-bold text-emerald-400 flex items-center gap-2">
        <Megaphone className="w-5 h-5" /> صانع بطاقات الترويج والمنشورات
      </h2>

      <div className="space-y-3">
        <label className="text-sm text-slate-300">العنوان أو النص الترويجي:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
        />
      </div>

      <div className="p-6 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-2xl text-slate-950 font-bold text-center shadow-2xl">
        <GraduationCap className="w-12 h-12 mx-auto mb-2 text-slate-950" />
        <h3 className="text-2xl font-black mb-1">DzTech Mind</h3>
        <p className="text-slate-900 text-sm font-medium">{title}</p>
      </div>

      <button
        onClick={handleCopy}
        className="w-full py-3 bg-emerald-500 text-slate-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all"
      >
        {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
        {copied ? 'تم نسخ النص!' : 'نسخ نص المنشور'}
      </button>
    </motion.div>
  );
}

function AIChatModal({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'أهلاً بك! أنا مساعد DzTech الذكي. كيف يمكنني مساعدتك في اختيار تخصصك اليوم؟' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { sender: 'bot', text: `شكراً لسؤالك! بناءً على "${userMsg}"، ننصحك بالتركيز على التخصصات ذات الطلب العالي مثل الذكاء الاصطناعي وهندسة البرمجيات.` }
      ]);
    }, 800);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl shadow-2xl flex flex-col h-[500px]">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-emerald-400" />
            <h3 className="font-bold text-white text-sm">مساعد DzTech الذكي</h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                m.sender === 'user' ? 'bg-emerald-500 text-slate-950 font-medium' : 'bg-slate-800 text-slate-200 border border-slate-700'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            placeholder="اكتب سؤالك هنا..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
          />
          <button onClick={handleSend} className="p-2 bg-emerald-500 text-slate-950 rounded-xl">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );export default function App() {
  const [mainSection, setMainSection] = useState<'university' | 'vocational'>('university');
  const [view, setView] = useState<'home' | 'favorites' | 'promo'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [userGrade, setUserGrade] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [selectedStream, setSelectedStream] = useState<string>('الكل');
  const [showAllRegardlessOfGrade, setShowAllRegardlessOfGrade] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showAIChatModal, setShowAIChatModal] = useState(false);

  const normalizeArabic = (text: string | undefined | null) => {
    if (!text) return '';
    return text
      .toString()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/ـ/g, '')
      .replace(/[\u064B-\u0652]/g, '')
      .replace(/\s+/g, ' ')
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
          const specName = normalizeArabic(spec.name);
          const specJobs = spec.jobs.map(j => normalizeArabic(j)).join(' ');
          const specDesc = normalizeArabic(spec.description);
          const specCat = normalizeArabic(spec.category);
          
          const fullContent = `${specName} ${specJobs} ${specDesc} ${specCat}`;
          const matchesSearch = queryWords.length === 0 || queryWords.every(word => fullContent.includes(word));
          const matchesGrade = showAllRegardlessOfGrade || normalizedGrade === '' || normalizedGrade >= spec.minGrade;
          const matchesCategory = selectedCategory === 'الكل' || spec.category === selectedCategory;
          const matchesStream = selectedStream === 'الكل' || spec.streams.includes(selectedStream);
          
          return matchesSearch && matchesGrade && matchesCategory && matchesStream;
        })
        .sort((a, b) => b.marketDemand - a.marketDemand);
    } catch (error) {
      console.error("Search filtering error:", error);
      return INITIAL_DATA;
    }
  }, [view, favorites, searchQuery, userGrade, selectedCategory, selectedStream, showAllRegardlessOfGrade]);

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

    const eligibleSpecs = INITIAL_DATA.filter(s => grade >= s.minGrade)
      .sort((a, b) => b.marketDemand - a.marketDemand);

    const topSpec = eligibleSpecs[0];
    
    let advice = "";
    if (grade >= 16) advice = `تبارك الله! بمعدل ${userGrade} عندك خيارات قوية بزاف. `;
    else if (grade >= 14) advice = `معدل ${userGrade} بزاف هايل، يفتحلك بيبان لتخصصات ممتازة. `;
    else if (grade >= 12) advice = `معدل ${userGrade} مليح، تقدر دير بيه تخصصات عندها مستقبل واعد. `;
    else advice = `مبروك عليك الباك! بمعدل ${userGrade} كاين تخصصات ملاح تقدر تنجح فيهم. `;

    if (topSpec) {
      advice += `ننصحك تشوف "${topSpec.name}"، راهو تخصص مطلوب بزاف في سوق العمل.`;
    }

    return advice;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-12 border-t-4 border-emerald-500" dir="rtl">
      <header className="bg-slate-800/85 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-2xl shadow-lg shadow-emerald-500/20">
                <GraduationCap className="w-8 h-8 text-slate-950" />
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  DzTech Mind
                </h1>
                <p className="text-xs text-slate-400 font-medium">منصة التوجيه الذكي للمستقبل 🇩🇿</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-700/50">
              <button
                onClick={() => { setMainSection('university'); setView('home'); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  mainSection === 'university' && view !== 'promo'
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                التوجيه الجامعي
              </button>

              <button
                onClick={() => { setMainSection('vocational'); setView('home'); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  mainSection === 'vocational'
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Wrench className="w-4 h-4" />
                التوجيه المهني
              </button>

              <button
                onClick={() => setView('promo')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  view === 'promo'
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Megaphone className="w-4 h-4" />
                صانع البطاقات
              </button>
            </div>

            <button
              onClick={() => { setMainSection('university'); setView(view === 'favorites' ? 'home' : 'favorites'); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border transition-all ${
                view === 'favorites'
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${view === 'favorites' ? 'fill-current' : ''}`} />
              المفضلة ({favorites.length})
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 mt-6">
        {view === 'promo' ? (
          <PromoCreator />
        ) : mainSection === 'vocational' ? (
          <VocationalGuidance />
        ) : (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-900/40 via-teal-900/30 to-slate-800 p-6 rounded-3xl border border-emerald-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30 shrink-0">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-emerald-300 mb-1">المستشار الذكي (DzTech Advisor)</h2>
                  <p className="text-slate-300 text-sm leading-relaxed">{getAdvisorAdvice()}</p>
                </div>
              </div>

              <button
                onClick={() => setShowAIChatModal(true)}
                className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-black rounded-2xl hover:brightness-110 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 shrink-0 transition-all"
              >
                <Bot className="w-5 h-5 text-slate-950" />
                تحدث مع المساعد الذكي 🤖
              </button>
            </div>

            <div className="bg-slate-800/60 p-6 rounded-3xl border border-slate-700/50 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative md:col-span-1">
                  <Search className="w-5 h-5 absolute right-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="ابحث عن تخصص، شركة، أو مجال..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-2xl pr-11 pl-4 py-3 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="relative md:col-span-1">
                  <Award className="w-5 h-5 absolute right-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="أدخل معدلك في الباك..."
                    value={userGrade}
                    onChange={(e) => setUserGrade(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-2xl pr-11 pl-4 py-3 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="relative md:col-span-1">
                  <Filter className="w-5 h-5 absolute right-3.5 top-3.5 text-slate-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-2xl pr-11 pl-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                  >
                    {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>

                <div className="relative md:col-span-1">
                  <BookOpen className="w-5 h-5 absolute right-3.5 top-3.5 text-slate-400" />
                  <select
                    value={selectedStream}
                    onChange={(e) => setSelectedStream(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-2xl pr-11 pl-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                  >
                    {STREAMS.map(st => <option key={st} value={st}>{st}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
                <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showAllRegardlessOfGrade}
                    onChange={(e) => setShowAllRegardlessOfGrade(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 text-emerald-500 focus:ring-emerald-500 bg-slate-900"
                  />
                  عرض كل التخصصات بغض النظر عن المعدل
                </label>
                <p className="text-xs text-slate-400">
                  عدد التخصصات المعروضة: <span className="text-emerald-400 font-bold">{filteredSpecializations.length}</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSpecializations.map((spec) => {
                const userGradeNum = Number(userGrade.replace(',', '.'));
                const isEligible = userGrade !== '' && !isNaN(userGradeNum) && userGradeNum >= spec.minGrade;
                const isNotEligible = userGrade !== '' && !isNaN(userGradeNum) && userGradeNum < spec.minGrade;

                return (
                  <div
                    key={spec.id}
                    className="bg-slate-800/80 border border-slate-700/70 rounded-3xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-lg relative group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                          {spec.category}
                        </span>
                        <button
                          onClick={() => toggleFavorite(spec.id)}
                          className="p-2 text-slate-400 hover:text-rose-400 transition-colors"
                        >
                          <Heart className={`w-5 h-5 ${favorites.includes(spec.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                        </button>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{spec.name}</h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">{spec.description}</p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs py-2 px-3 bg-slate-900/60 rounded-xl">
                          <span className="text-slate-400">المعدل الأدنى المطلوب:</span>
                          <span className="text-emerald-400 font-black text-sm">{spec.minGrade}</span>
                        </div>

                        {isEligible && (
                          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                            <CheckCircle className="w-4 h-4 shrink-0" />
                            معدلك يسمح لك بالالتحاق بهذا التخصص!
                          </div>
                        )}
                        {isNotEligible && (
                          <div className="flex items-center gap-2 text-rose-400 text-xs font-bold bg-rose-500/10 p-2.5 rounded-xl border border-rose-500/20">
                            <XCircle className="w-4 h-4 shrink-0" />
                            المعدل ينقصك بـ {(spec.minGrade - userGradeNum).toFixed(2)} نقطة
                          </div>
                        )}

                        <div>
                          <p className="text-xs text-slate-400 mb-1.5 font-medium flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                            فرص العمل ومؤسسات التوظيف:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {spec.jobs.map((job, idx) => (
                              <span key={idx} className="text-[11px] bg-slate-700/60 text-slate-200 px-2.5 py-1 rounded-lg">
                                {job}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                      <span>الطلب في سوق العمل:</span>
                      <div className="flex items-center gap-1">
                        <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"
                            style={{ width: `${(spec.marketDemand / 10) * 100}%` }}
                          />
                        </div>
                        <span className="font-bold text-emerald-400">{spec.marketDemand}/10</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredSpecializations.length === 0 && (
              <div className="text-center py-16 bg-slate-800/40 rounded-3xl border border-slate-700/50">
                <p className="text-slate-400 text-lg mb-2">لم نجد أي تخصص يطابق خياراتك الحالية.</p>
                <p className="text-slate-500 text-sm">جرب تغيير الفلتر أو تفعيل خيار "عرض كل التخصصات".</p>
              </div>
            )}
          </div>
        )}
      </div>

      {showAIChatModal && (
        <AIChatModal onClose={() => setShowAIChatModal(false)} />
      )}
    </div>
  );
   }
           
   }
   
