import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Instagram, 
  Video, 
  FileText, 
  Music, 
  Volume2, 
  Smartphone, 
  Tv, 
  Sparkles, 
  Heart, 
  GraduationCap, 
  TrendingUp, 
  Briefcase 
} from 'lucide-react';

interface PromoCreatorProps {
  onBack: () => void;
}

export default function PromoCreator({ onBack }: PromoCreatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [simulatedGrade, setSimulatedGrade] = useState('');
  const [showAdvisor, setShowAdvisor] = useState(false);
  const [activeTab, setActiveTab] = useState<'visual' | 'script'>('visual');

  // Steps for the video animation simulator
  const steps = [
    {
      title: "البداية: إدخال المعدل",
      duration: 3000,
      action: () => {
        setSimulatedGrade('');
        setShowAdvisor(false);
        // Typewriter effect for grade 15.34
        let current = '';
        const target = '15.34';
        let i = 0;
        const interval = setInterval(() => {
          if (i < target.length) {
            current += target[i];
            setSimulatedGrade(current);
            i++;
          } else {
            clearInterval(interval);
          }
        }, 300);
        return () => clearInterval(interval);
      }
    },
    {
      title: "استشارة المستشار الذكي",
      duration: 4000,
      action: () => {
        setShowAdvisor(true);
      }
    },
    {
      title: "عرض تخصصات المستقبل (التكنولوجيا)",
      duration: 4000,
      action: () => {}
    },
    {
      title: "استكشاف فرص التوظيف الكبرى (سوناطراك)",
      duration: 4000,
      action: () => {}
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let cleanup: (() => void) | undefined | void;

    if (isPlaying) {
      // Execute the current step action
      if (steps[currentStep].action) {
        cleanup = steps[currentStep].action();
      }

      timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setIsPlaying(false);
          setCurrentStep(0);
        }
      }, steps[currentStep].duration);
    }

    return () => {
      clearTimeout(timer);
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, [isPlaying, currentStep]);

  const startSimulation = () => {
    setCurrentStep(0);
    setSimulatedGrade('');
    setShowAdvisor(false);
    setIsPlaying(true);
  };

  const stopSimulation = () => {
    setIsPlaying(false);
  };

  const resetSimulation = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setSimulatedGrade('');
    setShowAdvisor(false);
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-10 border border-gray-100 max-w-5xl mx-auto my-6 text-right" dir="rtl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-100 pb-8 mb-8">
        <div>
          <span className="bg-green-50 text-[#004d00] px-4 py-1.5 rounded-full text-xs font-black border border-green-100 mb-2 inline-block">
            صانع الفيديوهات الترويجية 🎬
          </span>
          <h2 className="text-3xl font-black text-gray-800">اصنع فيديو ترويجي لصفحاتك مجاناً وبأعلى جودة!</h2>
          <p className="text-gray-500 mt-2 text-sm">
            لقد صممنا لك أداة تفاعلية فريدة ومجانية. يمكنك تشغيل "المحاكي المتحرك" وتسجيل شاشة هاتفك مع السيناريو المكتوب بالدارجة لإنتاج فيديو احترافي لـ Instagram Reels أو TikTok أو Facebook!
          </p>
        </div>
        <button 
          onClick={onBack}
          className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-sm transition-all"
        >
          العودة للتطبيق الرئيسي
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 bg-gray-50 p-1.5 rounded-2xl w-fit">
        <button
          onClick={() => setActiveTab('visual')}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
            activeTab === 'visual' ? 'bg-white text-[#004d00] shadow-md' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <Smartphone className="w-4 h-4" />
          مُحاكي الفيديو المتحرك (سجّل شاشتك)
        </button>
        <button
          onClick={() => setActiveTab('script')}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
            activeTab === 'script' ? 'bg-white text-[#004d00] shadow-md' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          السيناريو والتعليق الصوتي (Voiceover)
        </button>
      </div>

      {activeTab === 'visual' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Simulation Display Area */}
          <div className="lg:col-span-7 bg-slate-900 rounded-[2.5rem] p-6 text-white overflow-hidden shadow-2xl border-4 border-slate-800 relative min-h-[550px] flex flex-col justify-between">
            {/* Top Bar simulating a phone */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6 text-xs text-white/40 font-mono">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>REC LIVE</span>
              </div>
              <div className="bg-white/5 px-3 py-1 rounded-full text-[10px] text-white/60">
                1080x1920 (Reels Mode)
              </div>
              <span>12:00 PM</span>
            </div>

            {/* Simulated App View */}
            <div className="flex-1 flex flex-col justify-center items-center py-4">
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div 
                    key="step0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center space-y-6 w-full max-w-md"
                  >
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-white/5 border border-white/20">
                      <GraduationCap className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-black">دخل معدل الباك تاعك...</h3>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                      <div className="text-xs text-white/40 mb-2 font-mono">Simulated Input</div>
                      <div className="text-4xl font-black text-green-400 font-mono tracking-wider min-h-[48px]">
                        {simulatedGrade || <span className="text-white/20">00.00</span>}
                      </div>
                    </div>
                    <p className="text-sm text-white/60">التطبيق يحلل المعدل ويقترح عليك تخصصات المستقبل تلقائياً!</p>
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center space-y-6 w-full max-w-md"
                  >
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto border border-green-500/30">
                      <Sparkles className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-black text-green-400">نصيحة المستشار الذكي 🤖</h3>
                    
                    <AnimatePresence>
                      {showAdvisor && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-white/5 p-6 rounded-3xl border border-white/10 text-right leading-relaxed text-sm md:text-base"
                        >
                          "معدل <span className="text-green-400 font-black">15.34</span> بزاف هايل ويفتحلك بيبان لتخصصات ممتازة في الجزائر! ننصحك بـ <span className="text-green-400 font-black">هندسة الإعلام الآلي</span> راهو مطلوب بزاف وسوق العمل راهو يستنى فيك!"
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-md space-y-6"
                  >
                    <div className="text-center">
                      <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-bold">تخصصات مقترحة لمعدلك</span>
                      <h3 className="text-2xl font-black mt-3">تكنولوجيا وإعلام آلي</h3>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 text-right relative overflow-hidden">
                      <div className="absolute top-4 left-4 flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-black">
                        طلب 10/10
                      </div>
                      <span className="text-xs text-green-400 font-bold">التكنولوجيا</span>
                      <h4 className="text-xl font-black mt-1">هندسة الإعلام الآلي (Computer Science)</h4>
                      
                      <div className="my-4 h-px bg-white/10" />
                      
                      <div className="flex gap-4">
                        <div>
                          <span className="text-[10px] text-white/40 block">معدل القبول</span>
                          <span className="text-lg font-black text-green-400">15,00</span>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div>
                          <span className="text-[10px] text-white/40 block">المستقبل</span>
                          <span className="text-sm font-bold text-white/80">مضمون وواعد</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="w-full max-w-md space-y-6 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto border border-blue-500/30">
                      <Briefcase className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-black text-blue-400">فرص التوظيف الكبرى بالجزائر 🇩🇿</h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-sm font-bold">
                        شركة سوناطراك ⛽
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-sm font-bold">
                        شركات الاتصالات 📞
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-sm font-bold">
                        البنوك الكبرى 🏦
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-sm font-bold">
                        الشركات الناشئة 🚀
                      </div>
                    </div>
                    
                    <p className="text-xs text-white/40 italic mt-4">DzTech Mind - Dz-Orientation 2026</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Timeline Progress Bar */}
            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="flex justify-between items-center text-[10px] text-white/40 mb-2">
                <span>الخطوة الحالية: {steps[currentStep].title}</span>
                <span>{currentStep + 1} / {steps.length}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-green-500"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>

          {/* Control Panel Area */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
              <h4 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
                <Video className="w-5 h-5 text-green-700" />
                لوحة التحكم في التصوير
              </h4>

              <div className="space-y-4">
                <div className="flex gap-2">
                  {!isPlaying ? (
                    <button 
                      onClick={startSimulation}
                      className="flex-1 py-3 bg-[#004d00] hover:bg-green-800 text-white rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-100"
                    >
                      <Play className="w-4 h-4" />
                      ابدأ العرض للتسجيل
                    </button>
                  ) : (
                    <button 
                      onClick={stopSimulation}
                      className="flex-1 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Pause className="w-4 h-4" />
                      إيقاف مؤقت
                    </button>
                  )}
                  <button 
                    onClick={resetSimulation}
                    className="p-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-2xl transition-all"
                    title="إعادة ضبط"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-4 bg-yellow-50 text-yellow-800 rounded-2xl border border-yellow-100 text-xs leading-relaxed font-bold">
                  📌 **كيفية الاستخدام:**
                  <ol className="list-decimal mr-4 mt-2 space-y-1">
                    <li>شغّل برنامج "مسجل الشاشة" (Screen Recorder) المدمج في هاتفك أو حاسوبك.</li>
                    <li>اضغط على زر **"ابدأ العرض للتسجيل"** بالأعلى.</li>
                    <li>سيبدأ المحاكي بعرض الخطوات بتأثيرات متحركة ممتازة.</li>
                    <li>بعد انتهاء العرض، احفظ الفيديو وقصه ليصبح جاهزاً للرفع!</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-4">
              <h4 className="text-lg font-black text-gray-800 flex items-center gap-2">
                <Music className="w-5 h-5 text-green-700" />
                الموسيقى المقترحة 🎵
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                لتحقيق انتشار واسع وتفاعل كبير على انستغرام وتيك توك، ننصحك باستخدام المقاطع الصوتية الأكثر رواجاً (Trending Audio) في الجزائر حالياً.
              </p>
              <div className="space-y-2">
                <div className="p-3 bg-white rounded-xl border border-gray-100 text-xs font-bold flex justify-between items-center">
                  <span>أغاني راب جزائرية هادئة (Lofi/Chill)</span>
                  <span className="text-[#004d00] bg-green-50 px-2 py-1 rounded-lg">رائج جداً 🔥</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-gray-100 text-xs font-bold flex justify-between items-center">
                  <span>موسيقى حماسية محفزة للنجاح والجامعة</span>
                  <span className="text-[#004d00] bg-green-50 px-2 py-1 rounded-lg">موصى به ⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Detailed Script Sections */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-[2rem] border border-gray-100 space-y-6">
            <div className="flex items-center gap-3 text-[#004d00]">
              <Instagram className="w-8 h-8" />
              <h3 className="text-2xl font-black">سيناريو فيديو ريلز/تيك توك احترافي 🎬</h3>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              إليك نص التعليق الصوتي المكتوب بالدارجة الجزائرية المفهومة والمؤثرة، مقسم بالثواني ليتطابق مع تصوير الشاشة:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-2">
                <div className="flex justify-between items-center text-xs font-black text-[#004d00] mb-2">
                  <span>المشهد الأول (0:00 - 0:03)</span>
                  <span>جذب الانتباه (Hook)</span>
                </div>
                <div className="text-sm font-bold text-gray-400 italic">"تصور الشاشة وهي تظهر شعار التطبيق Dz-Orientation"</div>
                <p className="text-lg font-extrabold text-gray-800 leading-relaxed">
                  "جبت الباك وماراكش عارف واش تخير تخصص؟ الحيرة هادي كامل فوتنا عليها!"
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-2">
                <div className="flex justify-between items-center text-xs font-black text-[#004d00] mb-2">
                  <span>المشهد الثاني (0:03 - 0:08)</span>
                  <span>الحل السحري (Problem/Solution)</span>
                </div>
                <div className="text-sm font-bold text-gray-400 italic">"تبدأ كتابة المعدل 15.34 وتظهر تخصصات المستقبل"</div>
                <p className="text-lg font-extrabold text-gray-800 leading-relaxed">
                  "دخل معدلك هنا في تطبيق Dz-Orientation، وهو راح يقترح عليك تخصصات المستقبل اللي مطلوبة في الجزائر!"
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-2">
                <div className="flex justify-between items-center text-xs font-black text-[#004d00] mb-2">
                  <span>المشهد الثالث (0:08 - 0:12)</span>
                  <span>المستشار الذكي وسوق العمل</span>
                </div>
                <div className="text-sm font-bold text-gray-400 italic">"يظهر المستشار الذكي وهو يقترح هندسة الإعلام الآلي والعمل في سوناطراك"</div>
                <p className="text-lg font-extrabold text-gray-800 leading-relaxed">
                  "المستشار الذكي يعطيك نصيحة ذهبية ومكتوبة بالدارجة، ويقولك وين تقدر تخدم، مثل سوناطراك، جازي، والبنوك!"
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-2">
                <div className="flex justify-between items-center text-xs font-black text-[#004d00] mb-2">
                  <span>المشهد الرابع (0:12 - 0:15)</span>
                  <span>دعوة للتفاعل (CTA)</span>
                </div>
                <div className="text-sm font-bold text-gray-400 italic">"تظهر الشاشة النهائية مع الرابط والـ QR Code"</div>
                <p className="text-lg font-extrabold text-[#004d00] leading-relaxed">
                  "التطبيق مجاني 100% ويخدم بالذكاء الاصطناعي. الرابط راهو في البيو (Bio) والا في أول تعليق، أدخل وجرب حظك الآن!"
                </p>
              </div>
            </div>

            <div className="p-4 bg-green-50 text-[#004d00] rounded-2xl border border-green-100 text-xs font-bold flex items-center gap-2">
              <Volume2 className="w-5 h-5" />
              💡 **نصيحة إضافية:** استخدم نبرة صوت حماسية وودية أثناء تسجيل التعليق الصوتي لضمان انتشار الفيديو بشكل فيروسي (Viral)!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
