import { VocationalSkill } from '../types';

export const OFFICIAL_REGISTRATION_LINK = 'https://erp.takwin.dz';

export const VOCATIONAL_SKILLS: VocationalSkill[] = [
  // ==========================================
  // 1. مستوى دون دراسي / الطور الابتدائي
  // ==========================================
  {
    id: 'couture_basic',
    title: 'الخياطة وتفصيل الملابس (Couture)',
    category: 'نسيج وخياطة',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '35,000 - 85,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى دون دراسي / الطور الابتدائي'],
    levelAdvice: 'تخصص يدوي ممتاز ومطلوب بكثرة في الورشات وصالونات الخياطة، مناسب للجميع دون أي شرط دراسي سابق.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'تعلم أخذ المقاسات، رسم الباترون، قص الأقمشة، وخياطة الملابس التقليدية والعصرية باستعمال آلات الخياطة السريعة والصنع المتقن.',
    keyTools: ['Machine à coudre', 'Surjeteuse', 'Mètre ruban', 'Ciseaux de coupe'],
    fieldEquipment: [
      'آلة الخياطة الصناعية السريعة (Piqueuse industrielle)',
      'آلة السرفلة وتثبيت الحواف (Surjeteuse 4 fils)',
      'طاولة الفصال والمكواة البخارية (Table de coupe & Fer à vapeur)'
    ],
    requiredLanguages: ['مصطلحات الخياطة بالدارجة والفرنسية (Patron, Piquage, Surjet, Emmanchure, Ourlet)'],
    softSkillsAndBusiness: ['الدقة في التفصيل وتناسق الألوان', 'تسعير خدمات الخياطة والتفصيل بحسب القماش والوقت'],
    targetJobs: ['خياطة في ورشة ملابس ألبسة جاهزة', 'صاحبة ورشة خياطة وتفصيل خاصة', 'فني تشطيب وتطريز أقمشة'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: تعلم الغرزات وآلات الخياطة',
        duration: '1 - 3 أشهر',
        description: 'التعرف على أنواع الأقمشة وشك الخيوط والتحكم في سرعة آلة الخياطة.',
        practicalTask: 'خياطة وسائد وأغطية بسيطة مع عمل السرفلة المستقيم والدائري.',
        skillsAcquired: ['التحكم في آلة Piqueuse', 'عمل السرفلة بـ Surjeteuse', 'صيانة الآلة والتزييت']
      },
      {
        step: 2,
        title: 'المرحلة 2: الباترون والفصال والتجميع',
        duration: '3 - 6 أشهر',
        description: 'رسم الباترون على الورق، نقله على القماش وقصه وتجميعه.',
        practicalTask: 'تفصيل وخياطة فستان أو قميص عصري مكتمل بالرقبة والأكمام.',
        skillsAcquired: ['رسم الباترون الأساسي', 'قص القماش بدقة دون هدر', 'تركيب السحّاب والأزرار']
      },
      {
        step: 3,
        title: 'المرحلة 3: الملابس التقليدية واللمسات الأخيرة',
        duration: '6 - 12 شهراً',
        description: 'إتقان الألبسة الجزائرية التقليدية وتنسيق الفساتين المعقدة.',
        practicalTask: 'إنجاز زبون كامل (جبة أو كراكو) وتسليمه بلمسة احترافية.',
        skillsAcquired: ['إتقان الخياطة التقليدية', 'التشطيب والمكواة البخارية', 'تسعير وإدارة الطلبيات']
      }
    ]
  },
  {
    id: 'patisserie_basic',
    title: 'صناعة الحلويات التقليدية والعصرية (Pâtisserie)',
    category: 'فندقة وإطعام',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '40,000 - 110,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى دون دراسي / الطور الابتدائي'],
    levelAdvice: 'حرفة مربحة ومطلوبة في المخابز والملاقم والمشاريع المنزلية، لا تتطلب شهادة دراسية سابقة.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'إعداد العجائن الأساسية، الحلويات التقليدية الجزائرية (بقلاوة، مقروط، عرايش) والحلويات الغربية (Tarlet, Mille-feuille, Gâteaux d’anniversaire).',
    keyTools: ['Batteur mélangeur', 'Four ventilé', 'Poche à douille', 'Moules en silicone'],
    fieldEquipment: [
      'عجانة وخلاط الحلويات الضخم (Batteur mélangeur industriel)',
      'فرن التحلية المهوي (Four à convection pâtissier)',
      'طاولة الفولاذ المعقمة والأقماع (Poches & Douilles varieés)'
    ],
    requiredLanguages: ['مصطلحات المخبزة والحلويات (Pâte feuilletée, Ganache, Meringue, Crème pâtissière)'],
    softSkillsAndBusiness: ['معايير النظافة والحفظ الغذائي (HACCP)', 'حساب تكلفة المواد الأولية وتحديد سعر حبة الحلوى'],
    targetJobs: ['صانع حلويات في مخبزة أو فندق', 'صاحب مشروع حلويات منزلية أو محلات مناسبات', 'مساعد شيف حلواني'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: العجائن والكريمات الأساسية',
        duration: '1 - 3 أشهر',
        description: 'تحضير العجين المكسر (Pâte brisée)، العجين المورق، وكريمة الباتيسيار.',
        practicalTask: 'تحضير 20 قطعة تارت الفواكه و تارت الليمون بكريمة متماسكة.',
        skillsAcquired: ['إتقان Pâte Sablée & Feuilletée', 'تحضير الكريمات المتنوعة', 'استخدام Poche à douille']
      },
      {
        step: 2,
        title: 'المرحلة 2: الحلويات التقليدية الجزائرية',
        duration: '3 - 6 أشهر',
        description: 'إتقان حشو وتحمير وقرش الحلويات التقليدية وتزيينها بالنقاء والحشو الرزين.',
        practicalTask: 'إعداد صينية بقلاوة وشك البقلاوة والعرايش باللوز أو الكاوكاو بطلاء لامع.',
        skillsAcquired: ['صنع الحشو وتطبيق العقدة', 'النقش والتزيين التراثي', 'الطهي المثالي والتسلية بالمعسل']
      },
      {
        step: 3,
        title: 'المرحلة 3: كعكات المناسبات والديزاين',
        duration: '6 - 12 شهراً',
        description: 'إعداد Cake Design، التزيين بعجينة السكر والشيقولاطة والماسربان.',
        practicalTask: 'تحضير كعكة طبقات (Layer Cake) مع التزيين الاحترافي والتغليف.',
        skillsAcquired: ['تغليف عجين السكر Ganache', 'تشكيل الورود والزينة', 'حساب تكاليف الحفلات']
      }
    ]
  },
  {
    id: 'wood_carpentry_building',
    title: 'النجارة المعمارية وصناعة الأثاث (Menuiserie Bâtiment)',
    category: 'بناء وتزيين معماري',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '45,000 - 120,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى دون دراسي / الطور الابتدائي'],
    levelAdvice: 'مهنة تطبيقية تعتمد على قص وتجميع الأخشاب وتركيب الأبواب والنوافذ والأثاث في المباني.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'قص الأخشاب الطبيعية والصناعية (MDF, Melaminé)، تركيب المفصلات، تصنيع المطابخ والأبواب وإتقان الآلات الكلاسيكية.',
    keyTools: ['Scie circulaire', 'Toupie bois', 'Raboteuse', 'Perceuse visseuse'],
    fieldEquipment: [
      'منشار التقطيع الدائري (Scie circulaire sur table)',
      'آلة مسح وصقل الخشب (Raboteuse & Dégauchisseuse)',
      'مفصلات وآلات ثقب التجميع (Toupie & Perceuse à colonne)'
    ],
    requiredLanguages: ['مصطلحات نجارة الخشب (MDF, Melaminé, Charnière, Tenon, Mortaise, Vernis)'],
    softSkillsAndBusiness: ['أخذ القياسات بالملم (Prise de cote)', 'التسعير بالمتر الطولي والمربع للمطابخ والأثاث'],
    targetJobs: ['نجار مباني وأثاث بالورشات', 'صاحب ورشة نجارة ومطابخ MDF', 'فني تركيب أثاث مجمع'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: القطع والصقل والقياسات',
        duration: '1 - 3 أشهر',
        description: 'استخدام منشار طاولة ومسح الخشب وإتقان القياس بالملم.',
        practicalTask: 'صناعة صندوق خشبي متين بتقنية التجميع المباشر Tenon-Mortaise.',
        skillsAcquired: ['استخدام Scie & Raboteuse', 'قراءة القياسات بدقة', 'السلامة عند التعامل مع الشفرات']
      },
      {
        step: 2,
        title: 'المرحلة 2: المطابخ والخزانات العصريّة بـ MDF',
        duration: '3 - 6 أشهر',
        description: 'قص ألواح MDF وتغطية الحواف (Chant) وتجميع الخزانات والمطابخ.',
        practicalTask: 'تجميع عنصر مطبخ عصري بباب هيدروليكي وشريط حواف مطاطي.',
        skillsAcquired: ['تجميع ألواح MDF & Melaminé', 'تركيب المفصلات الهيدروليكية', 'تركيب الشريط البلاستيكي للشرائح']
      },
      {
        step: 3,
        title: 'المرحلة 3: تركيب الأبواب المعمارية والدهان',
        duration: '6 - 12 شهراً',
        description: 'ثقوب المفاتيح وإطارات الأبواب والصبغ والورنيش الخشبي.',
        practicalTask: 'تركيب باب شقة رئيسي بالإطار والمقبض والمجاري المسحوبة.',
        skillsAcquired: ['موازنة الباب بميزان الماء', 'الصبغ بـ Vernis & Laque', 'تسعير ورشة نجارة متكاملة']
      }
    ]
  },
  {
    id: 'alu_pvc_carpentry',
    title: 'نجارة الألمنيوم وPVC (Menuiserie Aluminium & PVC)',
    category: 'بناء وتزيين معماري',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '50,000 - 130,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى دون دراسي / الطور الابتدائي'],
    levelAdvice: 'تخصص مطلوب بقوة في ورشات البناء المعماري والمحلات، يعتمد على التجميع المباشر للبروفيلات.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'قص البروفيلات بأزاوية 45 و 90 درجة، تثبيت الزجاج، تركيب النوافذ المنزلقة والأبواب والواجهات العصرية.',
    keyTools: ['Tronçonneuse à alu', 'Sertisseuse pneumatique', 'Perceuse à fraiser', 'Pistolet silicone'],
    fieldEquipment: [
      'منشار قطع الألمنيوم الزاوي (Tronçonneuse d’angle 45°/90°)',
      'مكبس التجميع الهيدروليكي (Sertisseuse pneumatique)',
      'مثقاب بروفيلات ومسدس السيليكون (Pistolet silicone & Fraiseuse)'
    ],
    requiredLanguages: ['مصطلحات الألمنيوم وPVC (Profilé alu, Double vitrage, Coulissant, Frappe, Joint epdm)'],
    softSkillsAndBusiness: ['تفادي الهدر في البروفيلات (Optimisation de coupe)', 'حساب أسعار النوافذ بالمتر المربع'],
    targetJobs: ['حرفي تركيب ألمنيوم وPVC', 'صاحب ورشة تصنيع نوافذ وأبواب', 'مركب واجهات زجاجية معمارية'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: قص وتجميع البروفيلات',
        duration: '1 - 3 أشهر',
        description: 'تعلم منشار زوايا 45 درجة وتجميع الزوايا بـ Équerre de montage.',
        practicalTask: 'تجميع إطار نافذة ألمنيوم منزلقة مع سد الفواصل بجوان EPDM.',
        skillsAcquired: ['قص البروفيلات بدقة زوايا', 'تثبيت الإكير والمكبس', 'تركيب العجلات المنزلقة Roulettes']
      },
      {
        step: 2,
        title: 'المرحلة 2: تثبيت الزجاج والستائر المتحركة',
        duration: '3 - 6 أشهر',
        description: 'تركيب الزجاج العادي والمزدوج (Double vitrage) وصناديق Volet roulant.',
        practicalTask: 'تركيب نافذة مكتملة بزجاج مزدوج وستارة كهربائية Volet roulant.',
        skillsAcquired: ['تركيب Double Vitrage', 'تجميع الستائر الكهربائية', 'العزل بـ Silicone & Mousse PU']
      },
      {
        step: 3,
        title: 'المرحلة 3: تركيب ورشات البناء والواجهات',
        duration: '6 - 12 شهراً',
        description: 'تثبيت النوافذ بورشات المباني بالبراغي الفولاذية والسيليكون المقاوم للماء.',
        practicalTask: 'تركيب واجهة محل تجاري كاملة أو نوافذ شقة سكنية على الواقع.',
        skillsAcquired: ['تثبيت النوافذ في البناء', 'العزل التام ضد الماء والريح', 'إدارة ورشة ألمنيوم']
      }
    ]
  },
  {
    id: 'masonry_general',
    title: 'البناء العام وأعمال الخرسانة (Maçonnerie)',
    category: 'بناء وتزيين معماري',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '50,000 - 140,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى دون دراسي / الطور الابتدائي'],
    levelAdvice: 'أساس ورشات البناء والتأهيل الميداني المباشر لبناء الجدران والهياكل الخرسانية.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'بناء الجدران الآجرية (Brique, Parpaing)، تحضير الملاط والخرسانة، لياسة الجدران (Crépissage)، وتركيب القوالب الخشبية.',
    keyTools: ['Truelle', 'Niveau à bulle', 'Fil à plomb', 'Bétonnière'],
    fieldEquipment: [
      'خلاطة الخرسانة الميدانية (Bétonnière thermique/électrique)',
      'ميزان الماء الشاقولي والخيط (Fil à plomb & Niveau à bulle)',
      'طقم المسطرين والأخشاب القالبية (Truelles, Taloches, Coffrage)'
    ],
    requiredLanguages: ['مصطلحات البناء (Mortier, Béton armé, Crépissage, Parpaing, Coffrage, Dalle)'],
    softSkillsAndBusiness: ['العمل الجماعي بالورشة والالتزام بالخيط والميزان', 'حساب أكياس الأسمنت والآجر للورشة'],
    targetJobs: ['بناء مباني بالورشات والمشاريع', 'مقاول أشغال بناء صغرى وحرفي حر', 'فني تركيب القوالب الخرسانية'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: بناء الجدران بالآجر والباربان',
        duration: '1 - 3 أشهر',
        description: 'خلط الملاط بنسب صحيحة وبناء جدران مستقيمة بالميزان والخيط.',
        practicalTask: 'بناء جدار آجر طوله 3 أمتار بميزان شاقولي متقن ودون ميلان.',
        skillsAcquired: ['استخدام Truelle & Fil à plomb', 'خلط الملاط الميداني', 'ترتيب الآجر والباربان']
      },
      {
        step: 2,
        title: 'المرحلة 2: اللياسة والتلبيس (Crépissage)',
        duration: '3 - 6 أشهر',
        description: 'تطبيق الطبقة الأولى والطبقة الناعمة للتلبيس ومسح السطح بالمسطرة.',
        practicalTask: 'تلبيس جدار كامل بالأسمنت والملس بالمسطرة الألومنيوم.',
        skillsAcquired: ['تطبيق المرشة (Gobetis)', 'التلبيس بالمسطرة الألومنيوم', 'التنعيم بـ Taloche']
      },
      {
        step: 3,
        title: 'المرحلة 3: القوالب والخرسانة المسلحة',
        duration: '6 - 12 شهراً',
        description: 'تركيب القوالب الخشبية للأعمدة والأسقف وصب الخرسانة المسلحة.',
        practicalTask: 'صب عمود خرساني وقالب أساسي مع التسليح وتفريغ الهواء.',
        skillsAcquired: ['تركيب Coffrage خشبي', 'صب Béton armé', 'قراءة مخطط بناء بسيط']
      }
    ]
  },
  
  
