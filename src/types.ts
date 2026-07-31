export interface Specialization {
  id: string;
  name: string;
  minGrade: number;
  jobs: string[];
  description: string;
  category: string;
  streams: string[];
  marketDemand: number; // 1 to 10
}

export interface RoadmapStage {
  step: number;
  title: string;
  duration: string;
  description: string;
  practicalTask: string; // المهمة الميدانية الحقيقية
  skillsAcquired: string[];
}

export interface VocationalSkill {
  id: string;
  title: string;
  category: string;
  level: string;
  avgSalary: string;
  description: string;
  roadmap: RoadmapStage[];
  targetJobs: string[];
  keyTools: string[];
  requiredLanguages: string[]; // اللغات والمصطلحات التقنية المطلوبة
  fieldEquipment: string[]; // التجهيزات والأدوات الميدانية الملموسة
  softSkillsAndBusiness: string[]; // المهارات الذاتية، تسعير الخدمات والسلامة
  suitableEducationLevels: string[]; // المستوى الدراسي المناسب (دون دراسي/ابتدائي، متوسط، 2 ثانوي، 3 ثانوي/جامعي)
  levelAdvice?: string; // نصيحة مخصصة لهذا المستوى
  diplomaType?: string; // نوع الشهادة (شهادة الكفاءة المهنية، التحكم المهني، تقني، تقني سامي، إلخ)
  trainingDuration?: string; // مدة التكوين (12 شهراً، 18 شهراً، 24 شهراً، 30 شهراً، 3 أشهر)
  registrationLink?: string; // رابط التسجيل الرسمي (takwin.dz)
}

