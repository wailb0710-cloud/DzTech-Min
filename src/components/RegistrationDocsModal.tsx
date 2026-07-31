import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  CheckCircle2, 
  X, 
  Sparkles, 
  ExternalLink, 
  Printer, 
  CheckSquare, 
  AlertCircle,
  Building2,
  Calendar,
  FileBadge,
  Share2,
  Copy,
  Check
} from 'lucide-react';
import { OFFICIAL_REGISTRATION_LINK } from '../data/vocationalData';

interface RegistrationDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  skillTitle?: string;
  skillDiploma?: string;
  skillDuration?: string;
}

export default function RegistrationDocsModal({
  isOpen,
  onClose,
  skillTitle,
  skillDiploma,
  skillDuration
}: RegistrationDocsModalProps) {
  const [copied, setCopied] = useState(false);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedDocs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const requiredDocs = [
    {
      id: 'doc1',
      title: 'استمارة التسجيل الأولية المطبوعة',
      desc: 'يتم استخراجها مباشرة بعد التسجيل عبر البوابة الوطنية (takwin.dz)',
      important: true
    },
    {
      id: 'doc2',
      title: 'الشهادة المدرسية الأصلية أو شهادة النجاح',
      desc: 'تثبت المستوى الدراسي المطلوب للتخصص (مثلاً 4 متوسط، 2 ثانوي، أو 3 ثانوي)',
      important: true
    },
    {
      id: 'doc3',
      title: 'شهادة الميلاد (رقم 12 الأصلي)',
      desc: 'نسخة حديثة من شهادة الميلاد رقم 12 الخاصة بالمتربص',
      important: false
    },
    {
      id: 'doc4',
      title: 'صورتان شمسيتان حديثتان (2)',
      desc: 'صورة خلفية بيضاء مع تدوين الاسم واللقب خلف الصورة',
      important: false
    },
    {
      id: 'doc5',
      title: 'شهادتان طبيتان (طب عام + الأمراض الصدرية)',
      desc: 'تثبت اللياقة البدنية والسلامة من الأمراض المعدية الصدرية الصادرة من ممارس صحي عمومي',
      important: true
    },
    {
      id: 'doc6',
      title: 'وصل سداد حقوق التسجيل الإدارية',
      desc: 'يُدفع لدى مصلحة المقتصدية بالمركز/المعهد (مبلغ رمزي بين 500 - 800 دج)',
      important: false
    },
    {
      id: 'doc7',
      title: 'عقد التمهين الإجباري (خاص بنمط التمهين Apprentissage)',
      desc: 'يُبرم بين المتربص والمستثمر/المقاول أو المؤسسة المستقبلة معتمد من طرف المركز',
      important: false
    }
  ];

  const handleCopySummary = () => {
    const text = `📄 ملف التسجيل الإداري الرسمي للتكوين المهني في الجزائر (دورة أكتوبر 2026):
${skillTitle ? `التخصص: ${skillTitle}\n` : ''}
1. استمارة التسجيل الأولية من منصة takwin.dz
2. الشهادة المدرسية الأصلية تثبت المستوى
3. شهادة الميلاد (رقم 12)
4. صوران شمسيتان (2)
5. شهادتان طبيتان (طب عام + صدرية)
6. وصل حقوق التسجيل
7. عقد تمهين (في حال نمط التمهين)

رابط التسجيل الرسمي: ${OFFICIAL_REGISTRATION_LINK}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto rtl" dir="rtl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-slate-900 border border-slate-700 rounded-[2.5rem] shadow-2xl max-w-2xl w-full text-slate-100 overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 p-6 border-b border-slate-800 flex justify-between items-start">
            <div className="space-y-1">
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-black px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                الدليل الإداري الرسمي 🇩🇿
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                ملف التسجيل الإداري والوثائق المطلوبة
              </h3>
              {skillTitle && (
                <p className="text-xs text-emerald-300 font-bold">
                  التخصص المستهدف: {skillTitle} {skillDiploma ? `(${skillDiploma})` : ''}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Registration Alert Info */}
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-emerald-900/90 to-slate-900 p-4 rounded-2xl border border-emerald-700/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="space-y-1 text-xs">
                <span className="font-black text-emerald-300 flex items-center gap-1.5 text-sm">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  دورة تسجيل أكتوبر 2026 مفتوحة الآن!
                </span>
                <p className="text-slate-200">
                  سجل مبدئياً عبر بوابة takwin.dz ثم اودع هذا الملف بمركز التكوين المهني الأقرب إليك.
                </p>
              </div>
              <a
                href={OFFICIAL_REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black px-4 py-2 rounded-xl text-xs transition-all shadow-md flex items-center gap-1.5 shrink-0"
              >
                <span>الدخول إلى takwin.dz</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-black text-slate-300 border-b border-slate-800 pb-2">
                <span>قائمة الوثائق الإدارية المطلوبة (انقر للتعليم):</span>
                <span className="text-emerald-400">
                  تم تجهيز {Object.values(checkedDocs).filter(Boolean).length} من {requiredDocs.length}
                </span>
              </div>

              {requiredDocs.map((doc) => {
                const isChecked = checkedDocs[doc.id];
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleCheck(doc.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'bg-emerald-950/40 border-emerald-600/60 text-emerald-100'
                        : 'bg-slate-950/60 border-slate-800 text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className={`mt-0.5 w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 transition-all ${
                      isChecked
                        ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                        : 'border-slate-600 bg-slate-900'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>

                    <div className="flex-1 space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-black ${isChecked ? 'line-through opacity-80' : 'text-white'}`}>
                          {doc.title}
                        </span>
                        {doc.important && (
                          <span className="bg-red-500/20 text-red-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-red-500/30">
                            إجباري
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {doc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Important Note Box */}
            <div className="bg-amber-950/50 border border-amber-800/50 p-4 rounded-2xl text-xs text-amber-200 space-y-1">
              <span className="font-black text-amber-300 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                نصيحة هامة لإيداع الملف:
              </span>
              <p className="text-[11px] leading-relaxed text-amber-200/90">
                احتفظ دائماً بنسخ مصورة من جميع الوثائق والشهادات الطبية في ملفك الشخصي. عند الإيداع احرص على أخذ وصل استلام الملف المسلم من مصلحة التوجيه والامتحانات.
              </p>
            </div>
          </div>

          {/* Footer Action buttons */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap gap-2 justify-between items-center">
            <button
              onClick={handleCopySummary}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-black px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 border border-slate-700"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'تم نسخ قائمة الوثائق!' : 'نسخ قائمة الوثائق'}</span>
            </button>

            <button
              onClick={onClose}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black px-6 py-2.5 rounded-xl transition-all"
            >
              حسناً، فهمت
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
