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
  }
];

const CATEGORIES = ['الكل', 'العلوم الطبية', 'التكنولوجيا', 'الهندسة', 'الاقتصاد', 'اللغات', 'العلوم الإنسانية', 'العلوم الطبيعية', 'العلوم الأساسية'];
const STREAMS = ['الكل', 'علوم تجريبية', 'رياضيات', 'تقني رياضي', 'تسيير واقتصاد', 'آداب وفلسفة', 'لغات أجنبية'];

function VocationalGuidance() {
  return (
    <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/50 space-y-6 text-center">
      <h2 className="text-2xl font-black text-emerald-400 mb-2">دليل التكوين المهني والمهارات المطلوبة</h2>
      <p className="text-slate-300 text-sm">مسارات بديلة وسريعة لدخول سوق العمل وبناء مشروعك الخاص.</p>
    </div>
  );
}

function PromoCreator() {
  const [title, setTitle] = useState('تطبيق DzTech Mind - دليل التوجيه');
  return (
    <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/50 max-w-2xl mx-auto space-y-6 text-center">
      <h2 className="text-xl font-bold text-emerald-400">صانع بطاقات الترويج</h2>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
      />
    </div>
  );
}

function AIChatModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-lg p-6 rounded-3xl text-center space-y-4">
        <h3 className="font-bold text-white text-lg">مساعد DzTech الذكي</h3>
        <p className="text-slate-300 text-sm">أهلاً بك! كيف يمكنني مساعدتك اليوم؟</p>
        <button onClick={onClose} className="px-4 py-2 bg-emerald-500 text-slate-950 rounded-xl font-bold">إغلاق</button>
      </div>
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

  const filteredSpecializations = useMemo(() => {
    return INITIAL_DATA;
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-12" dir="rtl">
      <header className="bg-slate-800 border-b border-slate-700 p-4 text-center">
        <h1 className="text-2xl font-black text-emerald-400">DzTech Mind</h1>
        <p className="text-xs text-slate-400">منصة التوجيه الذكي للمستقبل 🇩🇿</p>
      </header>
      <div className="max-w-4xl mx-auto p-6 text-center space-y-4">
        <p className="text-emerald-300">التطبيق يعمل بنجاح تام!</p>
        <button onClick={() => setShowAIChatModal(true)} className="px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-xl">
          فتح المساعد الذكي
        </button>
      </div>
      {showAIChatModal && <AIChatModal onClose={() => setShowAIChatModal(false)} />}
    </div>
  );
        }
