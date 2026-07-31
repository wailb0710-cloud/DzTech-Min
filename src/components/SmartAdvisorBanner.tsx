import React from 'react';
import { motion } from 'motion/react';
import { Pencil, Sparkles, Bot, CheckCircle2, TrendingUp, ArrowLeft, GraduationCap, BookOpen } from 'lucide-react';
import robotAvatar from '../assets/images/smart_advisor_robot_avatar_1785511489572.jpg';

interface SmartAdvisorBannerProps {
  mode?: 'university' | 'vocational';
  // University props
  userGrade?: string;
  onGradeChange?: (grade: string) => void;
  // Vocational props
  selectedEducationLevel?: string;
  onEducationLevelChange?: (level: string) => void;
  educationLevelOptions?: string[];
  searchQuery?: string;
  onSearchQueryChange?: (query: string) => void;
  // Common props
  onOpenAIChat?: () => void;
  adviceMessage?: string;
  welcomeQuote?: string;
}

export const SmartAdvisorBanner: React.FC<SmartAdvisorBannerProps> = ({
  mode = 'university',
  userGrade = '',
  onGradeChange,
  selectedEducationLevel = 'الجميع',
  onEducationLevelChange,
  educationLevelOptions = [],
  searchQuery = '',
  onSearchQueryChange,
  onOpenAIChat,
  adviceMessage,
  welcomeQuote
}) => {
  const isUniversity = mode === 'university';
  const gradeNum = parseFloat(userGrade);
  const isValidGrade = isUniversity && !isNaN(gradeNum) && gradeNum >= 0 && gradeNum <= 20;

  const defaultQuote = isUniversity
    ? '"يا خويا/ختي، دخل المعدل تاعك باش نقدر نعاونك!"'
    : '"يا خويا/ختي، اختر مستواك الدراسي ولا المهارة باش نقدر نعاونك في التكوين المهني!"';

  const currentQuote = welcomeQuote || defaultQuote;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-slate-900/80 border border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.18)] text-white my-6"
      dir="rtl"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      
      {/* Top Thin Glowing Golden Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        
        {/* Right Side: Text & Smart Input (RTL Layout) */}
        <div className="flex-1 text-right w-full">
          {/* Badge & Title */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="p-2 bg-amber-500/20 border border-amber-500/40 rounded-xl text-amber-400 shadow-inner flex items-center justify-center">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              <span className="bg-gradient-to-l from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                المستشار الذكي {isUniversity ? '(الجامعي)' : '(التكوين المهني)'}
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold">
                تفاعلي ⚡
              </span>
            </h3>
          </div>

          {/* Welcoming Quote */}
          <div className="relative mb-5 pr-4 border-r-4 border-amber-400/80 bg-slate-950/40 p-3.5 rounded-2xl border border-white/5 backdrop-blur-md">
            <p className="text-lg sm:text-xl font-bold text-amber-100/95 leading-relaxed">
              {currentQuote}
            </p>
            {adviceMessage && (
              <p className="text-xs sm:text-sm text-emerald-300 mt-2 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                {adviceMessage}
              </p>
            )}
          </div>

          {/* Glassmorphism Input / Selector Field with Pencil Icon */}
          <div className="space-y-2 max-w-lg">
            {isUniversity ? (
              <>
                <label className="block text-xs font-bold text-amber-200/90 mr-1 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                  أدخل المعدل المتوقع (من 0 إلى 20):
                </label>
                
                <div className="relative flex items-center group">
                  {/* Pencil Icon Inside Input */}
                  <div className="absolute right-3.5 text-amber-400/90 group-focus-within:text-amber-300 transition-colors pointer-events-none">
                    <Pencil className="w-5 h-5" />
                  </div>
                  
                  <input
                    type="text"
                    inputMode="decimal"
                    value={userGrade}
                    onChange={(e) => onGradeChange && onGradeChange(e.target.value)}
                    placeholder="مثال: 15.40"
                    className="w-full pr-12 pl-4 py-3.5 bg-slate-950/60 border border-amber-500/30 rounded-2xl text-white placeholder-slate-500 font-black text-lg sm:text-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all shadow-inner backdrop-blur-md"
                  />

                  {isValidGrade && (
                    <div className="absolute left-3.5 flex items-center gap-1 bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-1 rounded-xl border border-emerald-500/40 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      مُدخل {userGrade}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <label className="block text-xs font-bold text-amber-200/90 mr-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  حدد مستواك الدراسي للتوجيه المباشر:
                </label>

                <div className="relative flex items-center group">
                  {/* Pencil Icon Inside Selector */}
                  <div className="absolute right-3.5 text-amber-400/90 group-focus-within:text-amber-300 transition-colors pointer-events-none z-10">
                    <Pencil className="w-5 h-5" />
                  </div>

                  {educationLevelOptions.length > 0 && onEducationLevelChange ? (
                    <select
                      value={selectedEducationLevel}
                      onChange={(e) => onEducationLevelChange(e.target.value)}
                      className="w-full pr-12 pl-4 py-3.5 bg-slate-950/80 border border-amber-500/30 rounded-2xl text-white font-bold text-sm sm:text-base focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all shadow-inner backdrop-blur-md appearance-none cursor-pointer"
                    >
                      {educationLevelOptions.map((level) => (
                        <option key={level} value={level} className="bg-slate-900 text-white py-2">
                          {level === 'الجميع' ? 'جميع المستويات الدراسية' : level}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => onSearchQueryChange && onSearchQueryChange(e.target.value)}
                      placeholder="ابحث عن مهارة أو تخصص مهني..."
                      className="w-full pr-12 pl-4 py-3.5 bg-slate-950/60 border border-amber-500/30 rounded-2xl text-white placeholder-slate-500 font-bold text-sm sm:text-base focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all shadow-inner backdrop-blur-md"
                    />
                  )}
                </div>
              </>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <p className="text-[11px] text-slate-400">
                {isUniversity
                  ? '* يتم تحديث وتصفية التخصصات المتاحة فورياً حسب معدلك.'
                  : '* يتم توجيهك فورياً للتخصصات التأهيلية المعترف بها حسب المستوى المحدد.'}
              </p>
              
              {onOpenAIChat && (
                <button
                  type="button"
                  onClick={onOpenAIChat}
                  className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 transition-colors hover:underline"
                >
                  استشر الذكاء الاصطناعي
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Left Side: 3D Robot Avatar with Glowing Face Screen */}
        <div className="flex flex-col items-center justify-center flex-shrink-0">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative group cursor-pointer"
            onClick={onOpenAIChat}
            title="انقر للتحدث مع المستشار الذكي"
          >
            {/* Glowing Ring around Avatar */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-emerald-400 to-amber-300 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-slate-950 border-2 border-amber-400/60 shadow-2xl overflow-hidden flex items-center justify-center">
              <img
                src={robotAvatar}
                alt="المستشار الذكي - روبوت التوجيه"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Glowing face screen shine highlight overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent pointer-events-none" />
            </div>

            {/* Online Status Badge */}
            <div className="absolute bottom-1 right-2 bg-slate-950 border border-emerald-500/60 px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 text-[11px] font-bold text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>جاهز لمساعدتك</span>
            </div>
          </motion.div>

          {onOpenAIChat && (
            <button
              onClick={onOpenAIChat}
              className="mt-3 px-4 py-1.5 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-xs font-black rounded-full hover:brightness-110 transition-all shadow-md flex items-center gap-1.5"
            >
              <Bot className="w-3.5 h-3.5 text-slate-950" />
              محادثة سريعة
            </button>
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default SmartAdvisorBanner;
