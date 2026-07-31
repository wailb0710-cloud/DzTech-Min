import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  GraduationCap, 
  User, 
  Award, 
  Briefcase, 
  ArrowLeft,
  X,
  Target
} from 'lucide-react';
import { VOCATIONAL_SKILLS } from '../data/vocationalData';
import { VocationalSkill } from '../types';

interface EligibilityMatcherProps {
  onSelectSkill?: (skill: VocationalSkill) => void;
  onClose?: () => void;
}

export default function EligibilityMatcher({ onSelectSkill, onClose }: EligibilityMatcherProps) {
  const [educationLevel, setEducationLevel] = useState<string>('مستوى الطور المتوسط (الرابعة متوسط)');
  const [age, setAge] = useState<number>(20);
  const [preferredDomain, setPreferredDomain] = useState<string>('الكل');
  const [isCalculated, setIsCalculated] = useState<boolean>(true);

  const levelsOptions = [
    { value: 'مستوى دون دراسي / الطور الابتدائي', label: 'مستوى دون دراسي / الطور الابتدائي', diploma: 'شهادة كفاءة مهنية CAP / تأهيلي (3-12 شهراً)' },
    { value: 'مستوى الطور المتوسط (الرابعة متوسط)', label: 'الطور المتوسط (4 متوسط)', diploma: 'تحكم مهني CMP / كفاءة CAP (12-18 شهراً)' },
    { value: 'مستوى الثانية ثانوي (2 ثانوي)', label: 'الثانية ثانوي (2 ثانوي)', diploma: 'شهادة تقني Technicien (24 شهراً)' },
    { value: 'مستوى الثالثة ثانوي وخريجون (3 ثانوي)', label: 'الثالثة ثانوي والخريجون (3 ثانوي)', diploma: 'شهادة تقني سامي BTS (30 شهراً في INSFP)' },
  ];

  const domains = [
    'الكل',
    'الكهرباء والطاقة Solar',
    'الإلكترونيات والألياف FTTH',
    'البرمجة والأتمتة PLC',
    'البناء والميكانيك',
    'الخدمات والإطعام',
    'المهن والزراعة'
  ];

  // Calculate matching skills
  const matchedSkills = VOCATIONAL_SKILLS.filter(skill => {
    const levelMatch = skill.suitableEducationLevels?.includes(educationLevel);
    const domainMatch = preferredDomain === 'الكل' || skill.category === preferredDomain;
    return levelMatch && domainMatch;
  });

  // Calculate overall eligibility tier
  const getEligibilityAnalysis = () => {
    if (educationLevel === 'مستوى الثالثة ثانوي وخريجون (3 ثانوي)') {
      return {
        matchScore: 98,
        statusTitle: 'مؤهل 100% للتكوين المهني العالي (BTS)',
        statusColor: 'text-emerald-400 bg-emerald-950/80 border-emerald-500/50',
        recommendation: 'يمكنك نيل شهادة تقني سامي (BTS) المعادلة لشهادة جامعية، مع فرص توظيف واعدة بالمصانع، المعاهد والشركات الكبرى.'
      };
    } else if (educationLevel === 'مستوى الثانية ثانوي (2 ثانوي)') {
      return {
        matchScore: 92,
        statusTitle: 'مؤهل لشهادة تقني (Technicien)',
        statusColor: 'text-teal-300 bg-teal-950/80 border-teal-500/50',
        recommendation: 'يمكنك الالتحاق بتخصصات التقني الإداري والتقني الميداني ومواصلة الترقية المهنية.'
      };
    } else if (educationLevel === 'مستوى الطور المتوسط (الرابعة متوسط)') {
      return {
        matchScore: 90,
        statusTitle: 'مؤهل لشهادة التحكم المهني (CMP)',
        statusColor: 'text-blue-300 bg-blue-950/80 border-blue-500/50',
        recommendation: 'مستوى ممتاز يتيح لك نيل شهادة CMP المطلوبة بكثرة في ورش الصيانة، الكهرباء، والخدمات.'
      };
    } else {
      return {
        matchScore: 85,
        statusTitle: 'مؤهل للتكوين التأهيلي والـ CAP الميداني',
        statusColor: 'text-amber-300 bg-amber-950/80 border-amber-500/50',
        recommendation: 'تضمن لك شهادة الكفاءة المباشرة دخول سوق العمل اليدوي واستقلالية المشاريع المصغرة بسرعة.'
      };
    }
  };

  const analysis = getEligibilityAnalysis();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl text-slate-100 space-y-8 rtl" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-slate-800 pb-5">
        <div className="space-y-1">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-emerald-400" />
            حاسبة القبول والتقدير الذكية ⚡
          </span>
          <h3 className="text-2xl font-black text-white">
            حاسبة مطابقة التخصصات المهنية وسوق العمل
          </h3>
          <p className="text-xs text-slate-400 font-medium">
            حدد مستواك الدراسي وعمرك واكتشف نسبة القبول والتخصصات المطابقة لإمكانياتك فوراً
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Input Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-slate-950/60 p-5 rounded-3xl border border-slate-800">
        {/* Education Level Input */}
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-300 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            المستوى الدراسي الحالي:
          </label>
          <select
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 text-white text-xs font-bold rounded-2xl p-3 outline-none transition-all"
          >
            {levelsOptions.map((lvl) => (
              <option key={lvl.value} value={lvl.value}>
                {lvl.label}
              </option>
            ))}
          </select>
        </div>

        {/* Age Input */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-black text-slate-300">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-emerald-400" />
              العمر:
            </span>
            <span className="text-emerald-400 font-bold">{age} سنة</span>
          </div>
          <input
            type="range"
            min={16}
            max={45}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer mt-3"
          />
        </div>

        {/* Preferred Domain */}
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-300 flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            المجال التخصصي المفضل:
          </label>
          <select
            value={preferredDomain}
            onChange={(e) => setPreferredDomain(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 text-white text-xs font-bold rounded-2xl p-3 outline-none transition-all"
          >
            {domains.map((dom) => (
              <option key={dom} value={dom}>
                {dom}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Analysis Result Display */}
      <div className={`p-6 rounded-3xl border ${analysis.statusColor} space-y-4 shadow-lg transition-all`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center font-black text-lg text-emerald-300">
              {analysis.matchScore}%
            </div>
            <div>
              <h4 className="text-lg font-black text-white">{analysis.statusTitle}</h4>
              <p className="text-xs text-slate-300 font-medium">طبيعة نمط التكوين: الإقامي والحضوري والتمهين</p>
            </div>
          </div>

          <span className="bg-emerald-500 text-slate-950 text-xs font-black px-4 py-1.5 rounded-full">
            {matchedSkills.length} تخصص مطابق 100%
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium pt-2 border-t border-slate-700/60">
          💡 <strong className="text-white">تحليل الفرصة:</strong> {analysis.recommendation}
        </p>
      </div>

      {/* Matched Skills List */}
      <div className="space-y-4">
        <h4 className="text-base font-black text-white flex items-center gap-2">
          <Target className="w-5 h-5 text-emerald-400" />
          التخصصات المهنية الأعلى تطابقاً مع مدخلاتك ({matchedSkills.length}):
        </h4>

        {matchedSkills.length === 0 ? (
          <div className="p-8 text-center bg-slate-950/40 rounded-2xl border border-slate-800 text-slate-400 text-xs font-bold">
            لا توجد تخصصات مطابقة تماماً للمجال المحدد مع هذا المستوى. جرب تغيير المجال المفضل إلى "الكل".
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {matchedSkills.slice(0, 6).map((skill) => (
              <div
                key={skill.id}
                className="bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-emerald-500/60 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-lg border border-emerald-800">
                      {skill.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">{skill.diplomaType || skill.level}</span>
                  </div>
                  <h5 className="text-sm font-black text-white group-hover:text-emerald-300 transition-colors">
                    {skill.title}
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] text-emerald-300 font-black">
                    💰 {skill.avgSalary}
                  </span>
                  {onSelectSkill && (
                    <button
                      onClick={() => onSelectSkill(skill)}
                      className="text-xs text-white bg-emerald-600 hover:bg-emerald-500 font-black px-3 py-1.5 rounded-xl transition-all flex items-center gap-1"
                    >
                      <span>التفاصيل</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
