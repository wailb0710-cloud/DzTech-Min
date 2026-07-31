import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Briefcase, 
  DollarSign, 
  Search, 
  Sparkles, 
  Clock, 
  Award,
  Layers,
  Globe,
  Hammer,
  ShieldCheck,
  Target,
  Zap,
  GraduationCap,
  Lightbulb,
  Filter,
  Check,
  ExternalLink,
  Calendar,
  FileBadge,
  Bot,
  Heart,
  Share2,
  FileText,
  Calculator,
  Copy,
  Send,
  X
} from 'lucide-react';
import { VOCATIONAL_SKILLS, OFFICIAL_REGISTRATION_LINK } from '../data/vocationalData';
import { VocationalSkill } from '../types';
import RegistrationDocsModal from './RegistrationDocsModal';
import EligibilityMatcher from './EligibilityMatcher';
import SmartAdvisorBanner from './SmartAdvisorBanner';

interface VocationalGuidanceProps {
  onOpenAIChat?: (educationLevel?: string) => void;
}

const EDUCATION_LEVELS = [
  'الجميع',
  'مستوى دون دراسي / الطور الابتدائي',
  'مستوى الطور المتوسط (الرابعة متوسط)',
  'مستوى الثانية ثانوي (2 ثانوي)',
  'مستوى الثالثة ثانوي وخريجون (3 ثانوي)'
];

const LEVEL_RECOMMENDATIONS: Record<string, { title: string; analysis: string; advice: string; badge: string }> = {
  'مستوى دون دراسي / الطور الابتدائي': {
    title: '💡 عروض التكوين والتأهيل المهني - مستوى دون دراسي / الطور الابتدائي (دورة أكتوبر 2026)',
    analysis: 'تكوين تطبيقي وميداني مباشر 100% يضمن لك اكتساب حرفة يدوية مطلوبة بكثرة في الورشات والمحلات والمشاريع الميدانية.',
    advice: 'شهادات الكفاءة المهنية (CAP) والتخصص المهني (CS) والتكوين التأهيلي (الخياطة، الحلويات، النجارة، نجارة الألمنيوم وPVC، البناء، الحدادة الفنية، البستنة، قيادة آليات الورشات، فرز النفايات). تمنحك استقلالية عمل وسوقاً مفتوحاً.',
    badge: 'شهادة الكفاءة (CAP) / تخصص مهني / تأهيلي (12 - 3 أشهر)'
  },
  'مستوى الطور المتوسط (الرابعة متوسط)': {
    title: '💡 عروض التكوين المهني - مستوى الطور المتوسط / 4 متوسط (دورة أكتوبر 2026)',
    analysis: 'تخصصات تقنية وميدانية متميزة تفتح لك أبواب شهادة الكفاءة المهنية (CAP) والتحكم المهني (CMP) في قطاعات حيوية.',
    advice: 'يمكنك الالتحاق بتخصصات: الطبخ الجماعي والإطعام، أمين مخزن، الكهرباء المعمارية والصناعية، التلحيم، كهرباء السيارات، التركيب الصحي والغاز، حلاقة النساء، الميكرومعلوماتية، وتركيب وصيانة أجهزة التبريد والتكييف.',
    badge: 'شهادة الكفاءة (CAP) والتحكم المهني CMP (12 - 18 شهراً)'
  },
  'مستوى الثانية ثانوي (2 ثانوي)': {
    title: '💡 عروض التكوين المهني - مستوى الثانية ثانوي / 2 ثانوي (دورة أكتوبر 2026)',
    analysis: 'مسار إداري وتقني متقدم يمنحك شهادة تقني (Technicien) مع إمكانية الترقية والعمل بالشركات العمومية والخاصة.',
    advice: 'تخصص الأمانة المكتبية والتسيير الإداري (Secrétariat Bureautique) يمنحك مهارات تنظيم المكاتب، تحرير المراسلات الإدارية الرسمية، الأرشفة، والتواصل التنفيذي.',
    badge: 'شهادة تقني (Technicien) (24 شهراً)'
  },
  'مستوى الثالثة ثانوي وخريجون (3 ثانوي)': {
    title: '💡 عروض التكوين المهني العالي - مستوى الثالثة ثانوي والخريجون / 3 ثانوي (دورة أكتوبر 2026)',
    analysis: 'المستوى الأعلى بالتكوين المهني لنيل شهادة تقني سامي (BTS) المعترف بها والمعادلة لدبلوم جامعي في المعاهد المتخصصة (INSFP).',
    advice: 'تخصصات كبرى مطلوبة بسوق العمل: تصميم البساتين، مراقبة الجودة الغذائية، الزراعات الإستراتيجية، إعلام آلي (قواعد المعطيات)، المحاسبة والتسيير، الطرق والمنشآت الفنية، الهندسة المعمارية الداخلية، الكيمياء الصناعية، التحكم الآلي والضبط، الفندقة، وفن الطبخ.',
    badge: 'شهادة تقني سامي (BTS / ش.ت.س) (30 شهراً)'
  }
};

export default function VocationalGuidance({ onOpenAIChat }: VocationalGuidanceProps = {}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedEducationLevel, setSelectedEducationLevel] = useState('الجميع');
  const [selectedSkill, setSelectedSkill] = useState<VocationalSkill | null>(null);

  // New Features State: Favorites (Bookmarks), Eligibility Matcher, Registration Dossier Modal & Share Toast
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('vocational_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showEligibilityMatcher, setShowEligibilityMatcher] = useState(false);
  const [showDocsModal, setShowDocsModal] = useState(false);
  const [selectedSkillForDocs, setSelectedSkillForDocs] = useState<VocationalSkill | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleFavorite = (skillId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites(prev => {
      const next = prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId];
      try {
        localStorage.setItem('vocational_favorites', JSON.stringify(next));
      } catch (err) {
        console.error(err);
      }
      return next;
    });
  };

  const handleShareSkill = (skill: VocationalSkill, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const shareText = `🇩🇿 تخصص: ${skill.title} (${skill.category})\n🎓 الشهادة: ${skill.diplomaType || skill.level}\n💰 الأجر المتوقع: ${skill.avgSalary}\n\nاكتشف تفاصيل التوجيه المهني والتسجيل عبر منصة DzTech:\n${window.location.href}`;

    if (navigator.share) {
      navigator.share({
        title: skill.title,
        text: shareText,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
      setToastMessage(`تم نسخ تفاصيل تخصص (${skill.title}) للمشاركة بنجاح! 📋`);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const openDocsModalForSkill = (skill?: VocationalSkill, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedSkillForDocs(skill || null);
    setShowDocsModal(true);
  };

  const categories = ['الكل', ...new Set(VOCATIONAL_SKILLS.map(s => s.category))];

  const filteredSkills = VOCATIONAL_SKILLS.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.keyTools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          skill.fieldEquipment?.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'الكل' || skill.category === selectedCategory;
    
    const matchesLevel = selectedEducationLevel === 'الجميع' || 
                         skill.suitableEducationLevels?.includes(selectedEducationLevel);

    const matchesFavorites = !showFavoritesOnly || favorites.includes(skill.id);

    return matchesSearch && matchesCategory && matchesLevel && matchesFavorites;
  });

  return (
    <div className="space-y-10 text-right" dir="rtl">
      {/* Toast Notification for Quick Share */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-slate-950 font-black px-6 py-3 rounded-2xl shadow-2xl border border-emerald-300 flex items-center gap-2 text-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-slate-950" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Banner for Vocational & Skills Section */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-700/60 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-black border border-emerald-400/30">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              توجيه مهني وميداني واقعي 100% 🛠️
            </span>
            {onOpenAIChat && (
              <button
                onClick={() => onOpenAIChat(selectedEducationLevel !== 'الجميع' ? selectedEducationLevel : undefined)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 px-4 py-1.5 rounded-full text-xs font-black shadow-lg transition-all animate-pulse"
              >
                <Bot className="w-4 h-4" />
                <span>تحدث مع مساعد DzTech الذكي (استشارة مجانية)</span>
              </button>
            )}
          </div>
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              مسارات المهن والمهارات التطبيقية حسب مستواك الدراسي
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              اختر مستواك الدراسي لمشاهدة التخصصات الميدانية الأكثر ملاءمة لإمكانياتك، استخدم حاسبة فرص القبول والتقدير، واطلع على ملف التسجيل الإداري الرسمي.
            </p>
          </div>

          {/* Luxury Glassmorphism Smart Advisor Section for Vocational Guidance */}
          <SmartAdvisorBanner
            mode="vocational"
            selectedEducationLevel={selectedEducationLevel}
            onEducationLevelChange={setSelectedEducationLevel}
            educationLevelOptions={EDUCATION_LEVELS}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
            onOpenAIChat={() => onOpenAIChat && onOpenAIChat(selectedEducationLevel !== 'الجميع' ? selectedEducationLevel : undefined)}
            adviceMessage={selectedEducationLevel !== 'الجميع' ? LEVEL_RECOMMENDATIONS[selectedEducationLevel]?.advice : undefined}
          />

          {/* Quick Action Bar for New Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <button
              onClick={() => setShowEligibilityMatcher(!showEligibilityMatcher)}
              className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black p-4 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2.5 text-xs sm:text-sm"
            >
              <Calculator className="w-5 h-5" />
              <span>حاسبة فرص القبول والتقدير ⚡</span>
            </button>

            <button
              onClick={() => openDocsModalForSkill()}
              className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 text-white font-black p-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              <FileText className="w-5 h-5 text-emerald-400" />
              <span>ملف التسجيل الإداري والوثائق 📄</span>
            </button>

            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`font-black p-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm border ${
                showFavoritesOnly
                  ? 'bg-rose-500 text-white border-rose-400'
                  : 'bg-slate-800/90 hover:bg-slate-800 border-slate-700 text-slate-200'
              }`}
            >
              <Heart className={`w-5 h-5 ${showFavoritesOnly ? 'fill-white text-white' : 'text-rose-400'}`} />
              <span>المفضلة المحفوظة ({favorites.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Eligibility Matcher Calculator Drawer */}
      <AnimatePresence>
        {showEligibilityMatcher && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <EligibilityMatcher
              onClose={() => setShowEligibilityMatcher(false)}
              onSelectSkill={(skill) => {
                setSelectedSkill(skill);
                setShowEligibilityMatcher(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Educational Level Selection Filter Bar */}
      <div className="bg-gradient-to-r from-emerald-900 via-[#004d00] to-slate-900 text-white p-6 sm:p-8 rounded-[2.5rem] shadow-2xl space-y-6 border border-emerald-800/40">
        <div className="flex items-center gap-3 border-b border-emerald-700/50 pb-4">
          <div className="p-3 bg-emerald-500/20 rounded-2xl border border-emerald-400/30 text-emerald-300">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">اختر مستواك الدراسي للاقتراحات الميدانية:</h3>
            <p className="text-xs text-emerald-200 font-medium">سيتم تصفية التخصصات وعرض نصائح توجيهية مطابقة لإمكانياتك وفرصك المتاحة</p>
          </div>
        </div>

        {/* Education Level Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {EDUCATION_LEVELS.map((level) => {
            const isSelected = selectedEducationLevel === level;
            return (
              <button
                key={level}
                onClick={() => setSelectedEducationLevel(level)}
                className={`py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 border ${
                  isSelected
                    ? 'bg-white text-emerald-950 border-white shadow-xl scale-[1.02]'
                    : 'bg-emerald-950/60 text-emerald-100 hover:bg-emerald-900/80 border-emerald-700/50'
                }`}
              >
                {isSelected && <Check className="w-4 h-4 text-emerald-700 shrink-0" />}
                <span>{level}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Recommendation Box Based on Selected Level */}
      <AnimatePresence mode="wait">
        {selectedEducationLevel !== 'الجميع' && LEVEL_RECOMMENDATIONS[selectedEducationLevel] && (
          <motion.div
            key={selectedEducationLevel}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="bg-emerald-50/90 border-2 border-emerald-200 p-6 sm:p-8 rounded-[2rem] shadow-lg space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4 className="text-lg font-black text-emerald-950 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-amber-500 shrink-0" />
                {LEVEL_RECOMMENDATIONS[selectedEducationLevel].title}
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-emerald-800 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-2xs">
                  {LEVEL_RECOMMENDATIONS[selectedEducationLevel].badge}
                </span>
                <span className="bg-emerald-600 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-2xs">
                  {filteredSkills.length} مهن مناسبة لمستواك
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-emerald-900 font-medium leading-relaxed border-t border-emerald-200/80 pt-3">
              <p><strong className="font-black text-emerald-950">📌 التحليل الميداني: </strong>{LEVEL_RECOMMENDATIONS[selectedEducationLevel].analysis}</p>
              <p><strong className="font-black text-emerald-950">🚀 نصيحة الالتحاق الميداني: </strong>{LEVEL_RECOMMENDATIONS[selectedEducationLevel].advice}</p>
              <p className="text-xs text-emerald-800 font-bold bg-white/80 p-2.5 rounded-xl border border-emerald-200/80 mt-2">
                🔒 <strong className="font-black text-emerald-950">التوجيه الميداني المباشر:</strong> تظهر لك الآن المهن الحقيقية والمطابقة تماماً لإمكانية التحصيل والتدريب الميداني المتاح لهذا المستوى فقط.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Filter and Search Bar */}
      <div className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-amber-500/30 text-white space-y-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 text-amber-400 absolute right-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="ابحث بالأداة، الجهاز، أو المهنة (مثلاً: Multimètre, PLC...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 bg-slate-950/70 border border-amber-500/30 rounded-2xl text-sm font-bold text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all shadow-inner"
            />
          </div>

          {/* Category Pills & Favorites Toggle */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border ${
                showFavoritesOnly
                  ? 'bg-rose-500 text-white border-rose-400 shadow-md'
                  : 'bg-slate-950/60 text-rose-300 border-rose-500/30 hover:bg-slate-900'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${showFavoritesOnly ? 'fill-white text-white' : 'text-rose-400'}`} />
              <span>المفضلة ({favorites.length})</span>
            </button>

            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowFavoritesOnly(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all border ${
                  selectedCategory === cat && !showFavoritesOnly
                    ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedEducationLevel !== 'الجميع' || selectedCategory !== 'الكل' || searchQuery || showFavoritesOnly) && (
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-gray-500">
          <Filter className="w-4 h-4 text-emerald-600" />
          <span>التصفية الحالية:</span>
          {showFavoritesOnly && (
            <span className="bg-rose-100 text-rose-900 px-3 py-1 rounded-lg border border-rose-200">
              العرض: المفضلة فقط ({favorites.length})
            </span>
          )}
          {selectedEducationLevel !== 'الجميع' && (
            <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-lg border border-emerald-200">
              المستوى: {selectedEducationLevel}
            </span>
          )}
          {selectedCategory !== 'الكل' && (
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-lg border border-slate-200">
              المجال: {selectedCategory}
            </span>
          )}
          {searchQuery && (
            <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-lg border border-amber-200">
              البحث: "{searchQuery}"
            </span>
          )}
          <button
            onClick={() => {
              setSelectedEducationLevel('الجميع');
              setSelectedCategory('الكل');
              setSearchQuery('');
              setShowFavoritesOnly(false);
            }}
            className="text-red-600 underline font-black mr-2 hover:text-red-800"
          >
            إلغاء جميع الفلاتر
          </button>
        </div>
      )}

      {/* Skills Grid */}
      {filteredSkills.length === 0 ? (
        <div className="bg-slate-900/80 backdrop-blur-xl p-12 rounded-[2.5rem] border border-amber-500/30 text-center space-y-4 shadow-2xl">
          <p className="text-amber-100 font-black text-lg">
            {showFavoritesOnly 
              ? 'لم تقم بإضافة أي تخصصات إلى المفضلة بعد. انقر على رمز القلب في أي تخصص لحفظه هنا!'
              : 'لم يتم العثور على تخصصات تطابق خيارات التصفية الحالية.'}
          </p>
          <button
            onClick={() => {
              setSelectedEducationLevel('الجميع');
              setSelectedCategory('الكل');
              setSearchQuery('');
              setShowFavoritesOnly(false);
            }}
            className="px-6 py-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 rounded-xl text-xs font-black shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:brightness-110"
          >
            إعادة إظهار كل التخصصات الميدانية
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSkills.map((skill) => {
            const isFav = favorites.includes(skill.id);
            return (
              <motion.div 
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-amber-500/30 hover:border-amber-400/70 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group"
              >
                <div className="space-y-5">
                  {/* Top Badges & Action Icons (Bookmark + Share) */}
                  <div className="flex justify-between items-center gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-amber-500/20 text-amber-300 text-xs font-black px-3.5 py-1.5 rounded-full border border-amber-500/40">
                        {skill.category}
                      </span>
                      <span className="bg-emerald-950/80 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        {skill.level}
                      </span>
                    </div>

                    {/* Bookmark & Share Buttons */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => handleShareSkill(skill, e)}
                        title="مشاركة هذا التخصص"
                        className="p-2 text-slate-400 hover:text-emerald-300 hover:bg-slate-800 rounded-xl transition-all"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => toggleFavorite(skill.id, e)}
                        title={isFav ? 'حذف من المفضلة' : 'حفظ في المفضلة'}
                        className={`p-2 rounded-xl transition-all ${
                          isFav
                            ? 'text-rose-400 bg-rose-500/20 border border-rose-500/40 hover:bg-rose-500/30'
                            : 'text-slate-400 hover:text-rose-400 hover:bg-slate-800'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-400' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Title & Salary */}
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-xs font-bold text-emerald-300 mt-1.5 flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                      متوسط الأجر/المردود المتوقع: <span className="font-black text-amber-200">{skill.avgSalary}</span>
                    </p>
                  </div>

                  {/* Duration & Diploma Info Badges */}
                  <div className="flex flex-wrap gap-2 text-xs font-bold">
                    {skill.trainingDuration && (
                      <span className="bg-slate-950/70 text-emerald-200 px-3 py-1.5 rounded-xl border border-emerald-500/30 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <strong>مدة التكوين:</strong> {skill.trainingDuration}
                      </span>
                    )}
                    {skill.diplomaType && (
                      <span className="bg-slate-950/70 text-amber-200 px-3 py-1.5 rounded-xl border border-amber-500/30 flex items-center gap-1.5">
                        <FileBadge className="w-3.5 h-3.5 text-amber-400" />
                        <strong>الشهادة:</strong> {skill.diplomaType}
                      </span>
                    )}
                  </div>

                  {/* Registration Link & Docs Buttons */}
                  <div className="bg-gradient-to-r from-emerald-950 to-slate-950 p-4 rounded-2xl text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border border-emerald-500/30 shadow-inner">
                    <div className="text-xs">
                      <span className="text-emerald-300 font-black block">التسجيل الرسمي - دورة أكتوبر 2026</span>
                      <span className="text-slate-400 text-[11px]">عبر المنصة الوطنية مهنتي (takwin.dz)</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <button
                        onClick={(e) => openDocsModalForSkill(skill, e)}
                        className="bg-slate-900 hover:bg-slate-800 text-slate-100 text-xs font-bold px-3 py-2 rounded-xl transition-all flex items-center gap-1 border border-slate-700"
                      >
                        <FileText className="w-3.5 h-3.5 text-amber-400" />
                        <span>ملف التسجيل 📄</span>
                      </button>

                      <a
                        href={skill.registrationLink || OFFICIAL_REGISTRATION_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:brightness-110 text-slate-950 text-xs font-black px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-md"
                      >
                        <span>تسجل عبر takwin.dz</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {skill.description}
                  </p>

                  {/* Suitable Levels Tags */}
                  {skill.suitableEducationLevels && (
                    <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 space-y-1.5">
                      <span className="text-[11px] font-black text-amber-200 flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                        المستويات الدراسية المناسبة:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.suitableEducationLevels.map((lvl, idx) => (
                          <span 
                            key={idx} 
                            className={`px-2.5 py-0.5 rounded-lg text-[11px] font-black border ${
                              selectedEducationLevel === lvl
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                                : 'bg-slate-900 text-slate-300 border-slate-700'
                            }`}
                          >
                            {lvl}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Level Specific Advice on Card if filtered */}
                  {selectedEducationLevel !== 'الجميع' && skill.levelAdvice && (
                    <div className="bg-emerald-950/50 p-3.5 rounded-2xl border border-emerald-500/30 text-xs text-emerald-200 font-bold space-y-1">
                      <span className="font-black text-amber-300 block text-[11px] flex items-center gap-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        ملاءمة هذا التخصص لمستواك ({selectedEducationLevel}):
                      </span>
                      <p className="text-[11px] leading-relaxed text-emerald-100/90">{skill.levelAdvice}</p>
                    </div>
                  )}

                  {/* Field Equipment Section */}
                  {skill.fieldEquipment && (
                    <div className="bg-slate-950/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
                      <span className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                        <Hammer className="w-4 h-4 text-amber-400" />
                        التجهيزات والأدوات الميدانية الملموسة:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.fieldEquipment.map((eq, idx) => (
                          <span key={idx} className="bg-slate-900 text-emerald-200 border border-emerald-500/20 px-2.5 py-1 rounded-xl text-[11px] font-bold">
                            🛠️ {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Tools */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-xs font-black text-slate-400 block">برامج ومعدات البرمجة والقياس:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.keyTools.map((tool, idx) => (
                        <span key={idx} className="bg-slate-950 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-xl text-xs font-black">
                          ⚡ {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Roadmap Overview (3 Stages) */}
                  <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3 mt-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-black text-amber-200 flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-amber-400" />
                        خريطة الطريق الميدانية (3 مراحل تسلسلية)
                      </h4>
                      <span className="text-[10px] font-extrabold text-emerald-300 bg-emerald-950 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                        مستهدفة للتوظيف
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {skill.roadmap.map((stage) => (
                        <div key={stage.step} className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 text-xs font-bold space-y-1.5">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black shrink-0">
                                {stage.step}
                              </span>
                              <span className="text-slate-100 font-extrabold">{stage.title}</span>
                            </div>
                            <span className="text-[10px] text-emerald-300 font-bold bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-lg flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {stage.duration}
                            </span>
                          </div>
                          
                          {stage.practicalTask && (
                            <div className="bg-emerald-950/60 p-2 rounded-lg border border-emerald-500/30 text-[11px] text-emerald-200 flex items-start gap-1.5 font-bold">
                              <Target className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span><strong className="text-amber-300">المهمة الميدانية:</strong> {stage.practicalTask}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setSelectedSkill(skill)}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 hover:brightness-110 font-black rounded-2xl text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-center gap-2 mt-4"
                >
                  عرض المخطط الميداني والمهارات المكتملة 🗺️
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Detail Modal for Selected Skill */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] p-6 sm:p-10 max-w-4xl w-full shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-amber-500/40 text-right space-y-8 max-h-[90vh] overflow-y-auto my-auto text-white"
            >
              {/* Header */}
              <div className="flex justify-between items-start border-b border-slate-800 pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-amber-500/20 text-amber-300 text-xs font-black px-3 py-1 rounded-full border border-amber-500/40 inline-block">
                      {selectedSkill.category}
                    </span>
                    <button
                      onClick={(e) => toggleFavorite(selectedSkill.id, e)}
                      className={`p-1.5 rounded-xl border transition-all flex items-center gap-1 text-xs font-bold ${
                        favorites.includes(selectedSkill.id)
                          ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${favorites.includes(selectedSkill.id) ? 'fill-rose-400 text-rose-400' : ''}`} />
                      <span>{favorites.includes(selectedSkill.id) ? 'محفوظ' : 'حفظ بالمفضلة'}</span>
                    </button>
                    <button
                      onClick={(e) => handleShareSkill(selectedSkill, e)}
                      className="p-1.5 bg-slate-950/60 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl transition-all flex items-center gap-1 text-xs font-bold"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>مشاركة</span>
                    </button>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-white">{selectedSkill.title}</h2>
                  <p className="text-sm text-emerald-300 mt-1 font-bold">المستوى: {selectedSkill.level}</p>
                  
                  {/* Badges in Modal */}
                  <div className="flex flex-wrap gap-2 text-xs font-bold mt-3">
                    {selectedSkill.trainingDuration && (
                      <span className="bg-slate-950/70 text-emerald-200 px-3 py-1 rounded-xl border border-emerald-500/30 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <strong>مدة التكوين:</strong> {selectedSkill.trainingDuration}
                      </span>
                    )}
                    {selectedSkill.diplomaType && (
                      <span className="bg-slate-950/70 text-amber-200 px-3 py-1 rounded-xl border border-amber-500/30 flex items-center gap-1.5">
                        <FileBadge className="w-3.5 h-3.5 text-amber-400" />
                        <strong>الشهادة:</strong> {selectedSkill.diplomaType}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-xs transition-all border border-slate-700"
                >
                  إغلاق
                </button>
              </div>

              {/* Registration Banner in Modal */}
              <div className="bg-gradient-to-r from-emerald-950 via-slate-950 to-emerald-950 text-white p-5 rounded-2xl shadow-md border border-emerald-500/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-black text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    التسجيل الرسمي للتكوين المهني (دورة أكتوبر 2026)
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">سجل عبر منصة takwin.dz واستخرج قائمة الوثائق الإدارية الخاصة بالتسجيل</p>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  <button
                    onClick={(e) => openDocsModalForSkill(selectedSkill, e)}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-black px-4 py-2.5 rounded-xl text-xs transition-all flex items-center gap-1.5 border border-slate-700"
                  >
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>عرض الوثائق المطلوبة 📄</span>
                  </button>

                  <a
                    href={selectedSkill.registrationLink || OFFICIAL_REGISTRATION_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-amber-500 to-amber-400 hover:brightness-110 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs transition-all shadow-md flex items-center gap-2"
                  >
                    <span>التسجيل في takwin.dz</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Target Jobs */}
              <div className="bg-slate-950/70 p-6 rounded-2xl border border-slate-800 space-y-3">
                <h4 className="font-black text-amber-200 text-base flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-amber-400" />
                  أين يمكنك العمل بهذه المهارة الميدانية في الجزائر؟
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedSkill.targetJobs.map((job, idx) => (
                    <div key={idx} className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs font-black text-emerald-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{job}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages & Soft Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Languages & Technical Jargon */}
                {selectedSkill.requiredLanguages && (
                  <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <h4 className="font-black text-cyan-300 text-sm flex items-center gap-2">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      اللغات والمصطلحات التقنية المطلوبة:
                    </h4>
                    <ul className="space-y-2">
                      {selectedSkill.requiredLanguages.map((lang, idx) => (
                        <li key={idx} className="text-xs text-slate-200 font-bold flex items-start gap-2 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                          <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{lang}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Soft Skills & HSE */}
                {selectedSkill.softSkillsAndBusiness && (
                  <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <h4 className="font-black text-emerald-300 text-sm flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      المهارات الذاتية، تسعير الخدمات، والسلامة (HSE):
                    </h4>
                    <ul className="space-y-2">
                      {selectedSkill.softSkillsAndBusiness.map((sk, idx) => (
                        <li key={idx} className="text-xs text-slate-200 font-bold flex items-start gap-2 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{sk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Detailed 3-Stage Roadmap */}
              <div className="space-y-6">
                <h3 className="text-xl font-black text-amber-200 border-b border-slate-800 pb-2 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-amber-400" />
                  خريطة الطريق الميدانية التسلسلية (3 مراحل للتطبيق العملي المباشر)
                </h3>

                <div className="space-y-6">
                  {selectedSkill.roadmap.map((stage) => (
                    <div key={stage.step} className="bg-slate-950/80 p-6 rounded-3xl border border-slate-800 space-y-4 relative">
                      <div className="flex flex-wrap justify-between items-center gap-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm">
                            {stage.step}
                          </span>
                          <h4 className="text-lg font-black text-white">{stage.title}</h4>
                        </div>
                        <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-xl text-xs font-black flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          المدة المتوقعة: {stage.duration}
                        </span>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed font-medium">
                        {stage.description}
                      </p>

                      {/* Practical Task Highlight Box */}
                      {stage.practicalTask && (
                        <div className="bg-emerald-950/60 p-4 rounded-2xl border border-emerald-500/30 space-y-1">
                          <span className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                            <Target className="w-4 h-4 text-amber-400" />
                            المهمة الميدانية الحقيقية المطلوبة للتأهل:
                          </span>
                          <p className="text-xs text-emerald-100 font-black leading-relaxed">
                            {stage.practicalTask}
                          </p>
                        </div>
                      )}

                      <div className="pt-2">
                        <span className="text-xs font-black text-slate-400 block mb-2">المهارات المكتسبة بنهاية هذه المرحلة:</span>
                        <div className="flex flex-wrap gap-2">
                          {stage.skillsAcquired.map((skillItem, i) => (
                            <span key={i} className="bg-slate-900 text-slate-200 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-bold shadow-2xs flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              {skillItem}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 hover:brightness-110 font-black rounded-2xl text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                حسناً، إغلاق المخطط
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Registration Docs Modal */}
      <RegistrationDocsModal
        isOpen={showDocsModal}
        onClose={() => {
          setShowDocsModal(false);
          setSelectedSkillForDocs(null);
        }}
        skillTitle={selectedSkillForDocs?.title}
        skillDiploma={selectedSkillForDocs?.diplomaType}
        skillDuration={selectedSkillForDocs?.trainingDuration}
      />
    </div>
  );
}
