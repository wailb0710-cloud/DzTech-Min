import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  User, 
  RefreshCw, 
  HelpCircle, 
  GraduationCap,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEducationLevel?: string;
  userGrade?: string;
  onSelectSpecializationFilter?: (term: string) => void;
}

const QUICK_PROMPTS = [
  '💡 ما هو التخصص الأنسب لمستواي الدراسي وسوق العمل؟',
  '💰 ما هي التخصصات المهنية الأعلى أبراً وفرصاً في الجزائر؟',
  '⚡ كيف أسجل في دورة أكتوبر 2026 عبر بوابة takwin.dz؟',
  '🛠️ أريد تخصصاً تقنياً يتيح لي تأسيس ورشة أو EURL خاصة'
];

export default function AIChatModal({
  isOpen,
  onClose,
  userEducationLevel,
  userGrade
}: AIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `أهلاً بك! أنا **مساعد DzTech الذكي**، مستشارك الشخصي المتخصص في التوجيه التكويني والجامعي وسوق العمل الجزائري. 🇩🇿\n\n${
        userEducationLevel 
          ? `لقد لاحظت أنك اخترت: **"${userEducationLevel}"**.` 
          : 'اختر مستواك الدراسي أو حدد مهاراتك واهتماماتك، وسأقترح عليك التخصصات الأنسب المتاحة في التطبيق مع تحليل الرواتب وفرص التوظيف!'
      }\n\nكيف يمكنني مساعدتك اليوم؟`,
      timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleSend = async (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText || loading) return;

    setError(null);

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: queryText,
      timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          userEducationLevel: userEducationLevel || 'غير محدد',
          userGrade: userGrade || 'غير محدد'
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'تعذر الاتصال بخادم مساعد DzTech الذكي.');
      }

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.text,
        timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error('AIChat error:', err);
      setError(err?.message || 'حدث خطأ أثناء التواصل مع مساعد DzTech. يرجى التأكد من الاتصال بالإنترنت وإعادة المحاولة.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: 'assistant',
        content: `مرحباً بك مجدداً! تم فتح جلسة استشارة جديدة معك. ما هو المسار المهني أو التخصص الذي تريد الاستفسار عنه في الجزائر؟`,
        timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setError(null);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[9999] w-full h-full h-[100dvh] bg-slate-950 flex flex-col overflow-hidden rtl"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100dvh', zIndex: 9999 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          className="bg-slate-900 w-full h-full flex flex-col overflow-hidden text-slate-100"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 p-3.5 sm:p-5 border-b border-slate-700/60 flex items-center justify-between shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-inner">
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full animate-pulse" />
              </div>

              <div>
                <h3 className="text-base sm:text-xl font-black text-white flex items-center gap-1.5">
                  مساعد DzTech الذكي 🇩🇿
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 font-medium">
                  المستشار الشخصي للتوجيه والوظائف في الجزائر
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                title="إعادة بدء المحادثة"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all"
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 border border-slate-700 shadow-sm"
              >
                <span className="hidden sm:inline">إغلاق والعودة للتطبيق</span>
                <span className="sm:hidden">إغلاق</span>
                <X className="w-4 h-4 text-emerald-400 shrink-0" />
              </button>
            </div>
          </div>

          {/* User Active Context Banner */}
          {(userEducationLevel || userGrade) && (
            <div className="bg-emerald-950/60 border-b border-emerald-800/40 px-4 py-2 flex flex-wrap items-center justify-between text-xs text-emerald-300 font-medium gap-2 shrink-0">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>سياق البحث النشط:</span>
                {userEducationLevel && (
                  <span className="bg-emerald-900/80 text-emerald-200 border border-emerald-700/50 px-2.5 py-0.5 rounded-lg font-bold">
                    {userEducationLevel}
                  </span>
                )}
                {userGrade && (
                  <span className="bg-emerald-900/80 text-emerald-200 border border-emerald-700/50 px-2.5 py-0.5 rounded-lg font-bold">
                    معدل البكالوريا: {userGrade}
                  </span>
                )}
              </div>
              <span className="text-[11px] text-emerald-400/80">Gemini 3.6-Flash powered</span>
            </div>
          )}

          {/* Chat Messages Container */}
          <div className="flex-1 overflow-y-auto min-h-0 p-4 sm:p-6 space-y-4 bg-slate-950/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center shrink-0 text-xs font-bold ${
                    msg.role === 'user'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-800 text-emerald-400 border border-slate-700'
                  }`}
                >
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Content Bubble */}
                <div
                  className={`max-w-[90%] sm:max-w-[80%] rounded-2xl p-4 sm:p-5 text-sm sm:text-base leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-tr-none font-medium'
                      : 'bg-slate-800/95 text-slate-100 border border-slate-700/80 rounded-tl-none font-normal'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <div className="whitespace-pre-wrap break-words font-medium text-sm sm:text-base">
                      {msg.content}
                    </div>
                  ) : (
                    <div className="space-y-2 text-sm sm:text-base leading-relaxed break-words">
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-2 leading-relaxed font-medium">{children}</p>,
                          strong: ({ children }) => (
                            <strong className="font-black text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-700/50">
                              {children}
                            </strong>
                          ),
                          ul: ({ children }) => <ul className="list-disc list-inside space-y-1.5 my-2.5 text-slate-200 font-medium">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside space-y-1.5 my-2.5 text-slate-200 font-medium">{children}</ol>,
                          li: ({ children }) => <li className="text-slate-200 leading-relaxed font-medium">{children}</li>,
                          h1: ({ children }) => <h1 className="text-lg font-black text-emerald-400 mt-3 mb-1">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-base font-black text-emerald-400 mt-2.5 mb-1">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-sm font-black text-emerald-300 mt-2 mb-1">{children}</h3>,
                          hr: () => <hr className="border-slate-700 my-3" />,
                          blockquote: ({ children }) => <blockquote className="border-r-4 border-emerald-500 pr-3 py-1 my-2 text-slate-300 italic bg-slate-900/50 rounded-l-lg">{children}</blockquote>,
                          code: ({ children }) => <code className="bg-slate-950 text-emerald-300 px-1.5 py-0.5 rounded text-xs font-mono border border-slate-800">{children}</code>
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  )}
                  
                  <span
                    className={`block text-[10px] sm:text-xs mt-2.5 font-mono ${
                      msg.role === 'user' ? 'text-emerald-200 text-left' : 'text-slate-400 text-right'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {loading && (
              <div className="flex gap-3 items-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-bounce" />
                </div>
                <div className="bg-slate-800/90 border border-slate-700/70 rounded-2xl rounded-tl-none px-4 py-3 text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-medium text-slate-300">مساعد DzTech يقوم بالتحليل وصياغة النصيحة...</span>
                </div>
              </div>
            )}

            {/* Error Banner */}
            {error && (
              <div className="bg-red-950/80 border border-red-800/60 p-3.5 rounded-2xl text-xs text-red-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-bold text-red-300">تعذر استلام الرد:</p>
                  <p className="mt-0.5 leading-relaxed text-red-200">{error}</p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          {messages.length <= 2 && !loading && (
            <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800/80 overflow-x-auto shrink-0">
              <p className="text-[11px] text-slate-400 font-bold mb-1.5 flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
                أسئلة مقترحة سريعة:
              </p>
              <div className="flex gap-2 pb-1">
                {QUICK_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="bg-slate-800 hover:bg-emerald-950/80 border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 text-xs px-3 py-2 rounded-xl transition-all shrink-0 text-right whitespace-nowrap font-medium"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
              placeholder="اكتب استفسارك هنا (مثال: ما هو أفضل تخصص لمستوى 4 متوسط؟)..."
              disabled={loading}
              className="flex-1 bg-slate-950 border border-slate-700 focus:border-emerald-500 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 font-black px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl transition-all shadow-lg flex items-center justify-center shrink-0"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 rtl:rotate-180" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
