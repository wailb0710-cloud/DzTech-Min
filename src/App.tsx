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
  }
];

const CATEGORIES = ['الكل', 'العلوم الطبية', 'التكنولوجيا', 'الهندسة', 'الاقتصاد', 'اللغات', 'العلوم الإنسانية'];
const STREAMS = ['الكل', 'علوم تجريبية', 'رياضيات', 'تقني رياضي', 'تسيير واقتصاد', 'آداب وفلسفة', 'لغات أجنبية'];

function VocationalGuidance() {
  const vocationalFields = [
    { name: 'برمجة وتطوير المواقع', demand: 'عالي جداً', duration: '6 أشهر - سنة', type: 'تكوين خاص' },
    { name: 'التصميم والغرافيك', demand: 'عالي', duration: '3 - 6 أشهر', type: 'تكوين مهني' },
    { name: 'صيانة الأجهزة الإلكترونية', demand: 'ممتاز', duration: '18 شهر', type: 'معهد التكوين المهني' }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/50 space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-black text-emerald-400 mb-2">دليل التكوين المهني والمهارات المطلوبة</h2>
        <p className="text-slate-300 text-sm">مسارات بديلة وسريعة لدخول سوق العمل وبناء مشروعك الخاص.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {vocationalFields.map((field, idx) => (
          <div key={idx} className="bg-slate-900/80 border border-slate-700/70 rounded-2xl p-5 space-y-3">
            <h3 className="text-lg font-bold text-white">{field.name}</h3>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p><span className="text-slate-400">الطلب:</span> <span className="text-emerald-400 font-bold">{field.demand}</span></p>
              <p><span className="text-slate-400">المدة:</span> {field.duration}</p>
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
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
      />
      <div className="p-6 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-2xl text-slate-950 font-bold text-center shadow-2xl">
        <GraduationCap className="w-12 h-12 mx-auto mb-2 text-slate-950" />
        <h3 className="text-2xl font-black mb-1">DzTech Mind</h3>
        <p className="text-slate-900 text-sm font-medium">{title}</p>
      </div>
      <button onClick={handleCopy} className="w-full py-3 bg-emerald-500 text-slate-950 rounded-xl font-bold flex items-center justify-center gap-2">
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
      setMessages(prev => [...prev, { sender: 'bot', text: `شكراً لسؤالك! بناءً على "${userMsg}", ننصحك بالتركيز على التخصصات ذات الطلب العالي.` }]);
    }, 800);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl shadow-2xl flex flex-col h-[450px]">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-emerald-400" />
            <h3 className="font-bold text-white text-sm">مساعد DzTech الذكي</h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${m.sender === 'user' ? 'bg-emerald-500 text-slate-950 font-medium' : 'bg-slate-800 text-slate-200 border border-slate-700'}`}>
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
            className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-none"
          />
          <button onClick={handleSend} className="p-2 bg-emerald-500 text-slate-950 rounded-xl"><Send className="w-4 h-4" /></button>
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
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
    return text.toString().replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').trim().toLowerCase();
  };

  const filteredSpecializations = useMemo(() => {
    const normalizedQuery = normalizeArabic(searchQuery);
    const queryWords = normalizedQuery.split(' ').filter(w => w.length > 0);
    const gradeValue = userGrade.replace(',', '.');
    const normalizedGrade = gradeValue === '' ? '' : Number(gradeValue);
    
    let baseData = INITIAL_DATA;
    if (view === 'favorites') {
      baseData = INITIAL_DATA.filter(spec => favorites.includes(spec.id));
    }

    return baseData.filter(spec => {
      const fullContent = `${normalizeArabic(spec.name)} ${spec.jobs.map(j => normalizeArabic(j)).join(' ')} ${normalizeArabic(spec.description)}`;
      const matchesSearch = queryWords.length === 0 || queryWords.every(word => fullContent.includes(word));
      const matchesGrade = showAllRegardlessOfGrade || normalizedGrade === '' || normalizedGrade >= spec.minGrade;
      const matchesCategory = selectedCategory === 'الكل' || spec.category === selectedCategory;
      const matchesStream = selectedStream === 'الكل' || spec.streams.includes(selectedStream);
      return matchesSearch && matchesGrade && matchesCategory && matchesStream;
    });
  }, [view, favorites, searchQuery, userGrade, selectedCategory, selectedStream, showAllRegardlessOfGrade]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-12 border-t-4 border-emerald-500" dir="rtl">
      <header className="bg-slate-800/85 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-2xl shadow-lg">
              <GraduationCap className="w-8 h-8 text-slate-950" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-emerald-400">DzTech Mind</h1>
              <p className="text-xs text-slate-400 font-medium">منصة التوجيه الذكي للمستقبل 🇩🇿</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-700/50">
            <button onClick={() => { setMainSection('university'); setView('home'); }} className={`px-4 py-2 rounded-xl text-sm font-bold ${mainSection === 'university' && view !== 'promo' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}>التوجيه الجامعي</button>
            <button onClick={() => { setMainSection('vocational'); setView('home'); }} className={`px-4 py-2 rounded-xl text-sm font-bold ${mainSection === 'vocational' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}>التوجيه المهني</button>
            <button onClick={() => setView('promo')} className={`px-4 py-2 rounded-xl text-sm font-bold ${view === 'promo' ? 'bg-purple-500 text-white' : 'text-slate-400'}`}>صانع البطاقات</button>
          </div>
          <button onClick={() => setView(view === 'favorites' ? 'home' : 'favorites')} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-slate-800 border border-slate-700 text-slate-300">
            <Heart className={`w-4 h-4 ${view === 'favorites' ? 'fill-current text-rose-500' : ''}`} /> المفضلة ({favorites.length})
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 mt-6">
        {view === 'promo' ? <PromoCreator /> : mainSection === 'vocational' ? <VocationalGuidance /> : (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-900/40 via-teal-900/30 to-slate-800 p-6 rounded-3xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold text-emerald-300 mb-1">المستشار الذكي (DzTech Advisor)</h2>
                <p className="text-slate-300 text-sm">أدخل معدلك واكتشف التخصصات الأنسب لك في السوق الجزائري.</p>
              </div>
              <button onClick={() => setShowAIChatModal(true)} className="px-6 py-3 bg-emerald-400 text-slate-950 font-black rounded-2xl flex items-center gap-2">
                <Bot className="w-5 h-5" /> تحدث مع المساعد الذكي 🤖
              </button>
            </div>

            <div className="bg-slate-800/60 p-6 rounded-3xl border border-slate-700/50 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute right-3.5 top-3.5 text-slate-400" />
                <input type="text" placeholder="ابحث عن تخصص..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-2xl pr-11 pl-4 py-3 text-sm text-white focus:outline-none" />
              </div>
              <div className="relative">
                <Award className="w-5 h-5 absolute right-3.5 top-3.5 text-slate-400" />
                <input type="text" placeholder="معدلك في الباك (مثال: 14.50)..." value={userGrade} onChange={(e) => setUserGrade(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-2xl pr-11 pl-4 py-3 text-sm text-white focus:outline-none" />
              </div>
              <div className="relative">
                <Filter className="w-5 h-5 absolute right-3.5 top-3.5 text-slate-400" />
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-2xl pr-11 pl-4 py-3 text-sm text-white focus:outline-none">
                  {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredSpecializations.map((spec) => (
                <div key={spec.id} className="bg-slate-800/80 border border-slate-700/70 rounded-3xl p-6 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">{spec.category}</span>
                      <button onClick={() => toggleFavorite(spec.id)} className="p-2 text-slate-400 hover:text-rose-400">
                        <Heart className={`w-5 h-5 ${favorites.includes(spec.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </button>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{spec.name}</h3>
                    <p className="text-slate-300 text-sm mb-4">{spec.description}</p>
                    <div className="py-2 px-3 bg-slate-900/60 rounded-xl text-xs mb-3 flex justify-between">
                      <span className="text-slate-400">المعدل الأدنى:</span>
                      <span className="text-emerald-400 font-black">{spec.minGrade}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                    <span>طلب السوق:</span>
                    <span className="font-bold text-emerald-400">{spec.marketDemand}/10</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showAIChatModal && <AIChatModal onClose={() => setShowAIChatModal(false)} />}
    </div>
  );
     }
                                                                                                                                            
