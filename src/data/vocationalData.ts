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
  {
    id: 'artistic_blacksmith',
    title: 'الحدادة الفنية والتشكيل المعدني (Ferronnerie d\'Art)',
    category: 'صناعة ميكانيكية ومعدنية',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '45,000 - 125,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى دون دراسي / الطور الابتدائي'],
    levelAdvice: 'حرفة الورشات المعدنية وتصنيع الهياكل والأبواب والشبكات الأمنية المزخرفة.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'تشكيل الحديد الساخن والبارد، تلحيم الأنابيب والصفائح، تصنيع الأبواب والشبكات الأمنية والسلالم المعدنية المزخرفة.',
    keyTools: ['Poste à souder ARC', 'Meuleuse d\'angle', 'Cintreuse fer', 'Enclume & Marteau'],
    fieldEquipment: [
      'جهاز التلحيم الكهربائي (Poste à souder ARC/Inverter)',
      'آلة طحن وقطع الحديد (Meuleuse 230mm & 125mm)',
      'ثناية الحديد والأنبوب (Cintreuse manuelle/hydraulique)'
    ],
    requiredLanguages: ['مصطلحات الحدادة (Soudure, Fer plat, Tube carré, Grille de protection, Motif)'],
    softSkillsAndBusiness: ['ابتكار الزخارف الفنية والدقة في التلحيم', 'تسعير الأبواب والشبكات بالوزن أو المتر المربع'],
    targetJobs: ['حداد فني وصاحب ورشة معدنية', 'لحام هياكل وسرادق معدنية', 'صانع أبواب وشبابيك حماية'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: القطع والتلحيم الكهربائي',
        duration: '1 - 3 أشهر',
        description: 'إتقان التلحيم بـ Electrode وتنعيم الوصلات بالـ Meuleuse.',
        practicalTask: 'تلحيم هيكل مربع من الأنابيب وسد الثقوب بتلحيم نظيف.',
        skillsAcquired: ['استخدام Poste à souder Inverter', 'استخدام Meuleuse بأمان', 'تنظيف وصلات التلحيم']
      },
      {
        step: 2,
        title: 'المرحلة 2: ثني الحديد والزخرفة',
        duration: '3 - 6 أشهر',
        description: 'ثني الحديد البارد والساخن وتشكيل الحلزون والرسومات الحرفية.',
        practicalTask: 'تصنيع شبك حماية نافذة مزخرف بقطاعات حديدية ثنائية.',
        skillsAcquired: ['استخدام Cintreuse', 'تشكيل زخارف Ferronnerie', 'تجميع الإطارات المربعة']
      },
      {
        step: 3,
        title: 'المرحلة 3: الأبواب الكبرى والسلالم',
        duration: '6 - 12 شهراً',
        description: 'تصنيع أبواب المنازل الخارجية والسلالم الحلزونية والطلاء المانع للصدأ.',
        practicalTask: 'تصنيع باب خارجي كبير مع المفصلات والمقبض والطلاء المانع للصدأ.',
        skillsAcquired: ['تجميع الأبواب المعقدة', 'الطلاء المانع للصدأ (Antirouille)', 'حساب أسعار الورشات']
      }
    ]
  },
  {
    id: 'gardening_green_spaces',
    title: 'البستنة وتنسيق الحدائق والمساحات الخضراء (Jardinage)',
    category: 'فلاحة وزراعة',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '35,000 - 90,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى دون دراسي / الطور الابتدائي'],
    levelAdvice: 'العناية بالنباتات والأشجار وتنسيق الحدائق والمساحات الخضراء بالمؤسسات والإقامات.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'غرس وتلقيم الأشجار المثمرة والزينة، تشذيب العشب (Gazon)، تركيب شبكات الري بالتنقيط (Goutte-à-goutte) ومحاربة الآفات.',
    keyTools: ['Tondeuse à gazon', 'Taille-haie', 'Sécateur', 'Système Goutte-à-goutte'],
    fieldEquipment: [
      'آلة قص وتشذيب العشب (Tondeuse à gazon thermique)',
      'مقص الأشجار والأسوار النباتية (Taille-haie & Sécateur)',
      'أنبوب ومعدات الري بالتنقيط (Tuyaux Goutte-à-goutte & Goutteurs)'
    ],
    requiredLanguages: ['مصطلحات البستنة (Taille, Gazon, Goutte-à-goutte, Engrais, Semence, Raccord)'],
    softSkillsAndBusiness: ['العناية الموسمية بالنباتات والدقة في المواعيد', 'عقود الصيانة الشهرية للحدائق والمؤسسات'],
    targetJobs: ['بستاني بمؤسسة أو إقامة سكنية', 'حرفي صيانة حدائق خاصة', 'فني غرس وتنسيق المساحات الخضراء'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: تجهيز التربة والغرس',
        duration: '1 - 3 أشهر',
        description: 'قلب التربة، التسميد العضوي، وغرس الشتلات والزهور الموسمية.',
        practicalTask: 'تحضير مساحة 50 متر مربع وغرس شتلات وتثبيت العشب الطبيعي.',
        skillsAcquired: ['تقليب وتسميد التربة', 'غرس الشتلات دون إتلاف الجذور', 'استخدام أدوات الحفر الأساسية']
      },
      {
        step: 2,
        title: 'المرحلة 2: تشذيب الأشجار وقص العشب',
        duration: '3 - 6 أشهر',
        description: 'استخدام Tondeuse و Taille-haie لتشذيب الأشجار وتنسيق العشب.',
        practicalTask: 'صيانة حديقة كاملة وتشذيب الأسوار النباتية بشكل مستقيم منظم.',
        skillsAcquired: ['تشغيل Tondeuse thermique', 'تقليم الأشجار المثمرة (Taille)', 'التعامل مع السماد المائي']
      },
      {
        step: 3,
        title: 'المرحلة 3: شبكات الري بالتنقيط التلقائي',
        duration: '6 - 12 شهراً',
        description: 'تركيب أنبوب الري بالتنقيط والمنبه الزمني للري الآلي.',
        practicalTask: 'تركيب شبكة ري بالتنقيط لـ 100 شجرة مع مبرمج الري الآلي.',
        skillsAcquired: ['تركيب شبكة Goutte-à-goutte', 'ضبط المبرمج الآلي للري', 'إدارة عقود صيانة الحدائق']
      }
    ]
  },
  {
    id: 'heavy_machinery_driver',
    title: 'قيادة وصيانة آليات الورشات (Conduite et Maintenance d\'Engins)',
    category: 'بناء وتزيين معماري',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '60,000 - 160,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى دون دراسي / الطور الابتدائي'],
    levelAdvice: 'قيادة الجرافات والحفارات الميكانيكية وصيانتها الأولية بالمحاجر والورشات الكبرى.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'قيادة الحفارات الهيدروليكية (Pelle mécanique)، الجرافات (Chargeuse)، الدكات (Compacteur) والصيانة الزيتية والهيدروليكية الميدانية.',
    keyTools: ['Pelle mécanique', 'Chargeuse', 'Manette hydraulique', 'Graisseur'],
    fieldEquipment: [
      'الحفارة الهيدروليكية الميدانية (Pelle hydraulique sur chenilles)',
      'الجرافة وشاحنة الردم (Chargeuse sur pneus)',
      'مكبس الشحم والزيوت الميدانية (Pompe à graisse & Manomètre)'
    ],
    requiredLanguages: ['مصطلحات آليات الورشات (Pelle, Chargeuse, Vidange, Flexibles hydrauliques, Niveau d\'huile)'],
    softSkillsAndBusiness: ['التركيز الشديد والسلامة الميدانية (HSE)', 'فحص الزيوت الهيدروليكية قبل التشغيل'],
    targetJobs: ['سائق آليات ورشات بشركات البناء', 'سائق حفارة بالمحاجر ومؤسسات الأشغال', 'فني صيانة هيدروليكية أولية'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: لوحة التحكم والفحص اليومي',
        duration: '1 - 3 أشهر',
        description: 'التعرف على الذراع الهيدروليكي وفحص مستويات الزيت والماء.',
        practicalTask: 'إجراء الفحص اليومي الشامل للحفارة وتزييت المفصلات بمكبس الشحم.',
        skillsAcquired: ['فحص الزيوت والفلتر', 'استخدام مسدس الشحم', 'التعرف على المقابض الهيدروليكية']
      },
      {
        step: 2,
        title: 'المرحلة 2: الحفر والردم والتحميل',
        duration: '3 - 6 أشهر',
        description: 'حفر الخنادق، تحميل الشاحنات بالرمال، وتوية الأرضية بالجرافة.',
        practicalTask: 'حفر خندق بعمق مترين وطول 10 أمتار وتحميل شاحنة ردم بالكامل.',
        skillsAcquired: ['الحفر المستوي بالحفارة', 'تحميل الشاحنات بدقة', 'العمل على السطوح المائلة']
      },
      {
        step: 3,
        title: 'المرحلة 3: المناورة والصيانة الميدانية',
        duration: '6 - 12 شهراً',
        description: 'تغيير خراطيم الزيت الهيدروليكي (Flexibles) والمناورة في الأماكن الضيقة.',
        practicalTask: 'تغيير خرطوم هيدروليكي تالف وإعادة ملء الزيت وضبط الضغط.',
        skillsAcquired: ['تغيير Flexibles hydrauliques', 'المناورة بالمحاجر والورشات', 'التأهل لقيادة الآليات الكبرى']
      }
    ]
  },
  {
    id: 'waste_sorting_management',
    title: 'تسيير وفرز النفايات وإعادة التدوير (Gestion & Tri des Déchets)',
    category: 'بيئة ونظافة',
    level: 'شهادة تخصص مهني (CS)',
    avgSalary: '40,000 - 95,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى دون دراسي / الطور الابتدائي'],
    levelAdvice: 'تخصص بيئي واقتصادي واعد يركز على فرز المواد القابلة للتدوير وشحنها للمصانع.',
    diplomaType: 'شهادة تخصص مهني (CS)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'فرز البلاستيك (PET, HDPE)، الكرتون والمعادن، تشغيل مكابس البالات (Presse à balle)، وإدارة مراكز الردم التقني للنفايات (CET).',
    keyTools: ['Presse à balle', 'Broyeur plastique', 'Balance industrielle', 'Broyage & Tri'],
    fieldEquipment: [
      'مكبس ضغط البالات الهيدروليكي (Presse à balle carton/plastique)',
      'مطحنة البلاستيك والمواد الصلبة (Broyeur de plastique)',
      'الميزان الجسري الصناعي (Bascule industrielle)'
    ],
    requiredLanguages: ['مصطلحات فرز النفايات (Tri sélectif, PET, HDPE, Presse, Recycleur, Compacteur)'],
    softSkillsAndBusiness: ['معايير الوقاية والسلامة البيئية', 'تسعير الكيلوغرام للمواد القابلة للتدوير وشحنها للمصانع'],
    targetJobs: ['مسير خط فرز بمراكز الردم التقني (CET)', 'صاحب مشروع جمع وفرز البلاستيك والكرتون', 'مشغل مكابس تدوير بالشركات'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: التعرف على المواد والفرز اليدوي',
        duration: '1 - 3 أشهر',
        description: 'تمييز أنواع البلاستيك (PET transparent, HDPE) والكرتون والمعادن.',
        practicalTask: 'فرز طن واحد من النفايات وتصنيفها في حاويات مخصصة.',
        skillsAcquired: ['تمييز أنواع البلاستيك بـ Code', 'الفرز السريع على الحزام', 'ارتداء معدات الوقاية']
      },
      {
        step: 2,
        title: 'المرحلة 2: تشغيل مكابس ضغط البالات',
        duration: '3 - 6 أشهر',
        description: 'كبس الكرتون والبلاستيك المفرز في بالات مضغوطة بربط سلكي محكم.',
        practicalTask: 'إنتاج 5 بالات كرتون مكبوسة جاهزة للشحن وزن كل منها 200 كغ.',
        skillsAcquired: ['تشغيل Presse à balle', 'ربط البالات بالأسلاك الفولاذية', 'تخزين البالات المنظمة']
      },
      {
        step: 3,
        title: 'المرحلة 3: الطحن والتسويق للمصانع',
        duration: '6 - 12 شهراً',
        description: 'تشغيل مطحنة البلاستيك (Broyeur) وبيع الحبيبات أو البالات لمصانع إعادة التدوير.',
        practicalTask: 'طحن دفعة بلاستيك بي إي تي وتعبئتها في أكياس ضخمة (Big-bag) وتسعيرها.',
        skillsAcquired: ['تشغيل وصيانة Broyeur', 'التوزين الشاحن بـ Bascule', 'التسويق لمصانع التدوير']
      }
    ]
  },
  {
    id: 'housewife_sewing',
    title: 'خياطة وتجميع الملابس للمرأة الماكثة بالبيت',
    category: 'نسيج وخياطة',
    level: 'تكوين تأهيلي خاص (3 أشهر)',
    avgSalary: '30,000 - 75,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى دون دراسي / الطور الابتدائي'],
    levelAdvice: 'برنامج تأهيلي سريع وسهل موجه للمرأة الماكثة بالبيت للتمكن من خياطة الملابس المنزلية وتوليد دخل مستقل.',
    diplomaType: 'تكوين تأهيلي خاص',
    trainingDuration: '3 أشهر',
    registrationLink: 'https://erp.takwin.dz',
    description: 'تكوين سريع ومباشر لخياطة الوسائد، دشاديش المنزل (جباب)، وتعديل وتصليح الملابس العائلية والمطلوبة بالمحيط الجواري.',
    keyTools: ['Machine familiale', 'Ciseaux', 'Rubان mesurer', 'Aiguilles'],
    fieldEquipment: [
      'آلة الخياطة المنزلية متعددة الغرز (Machine à coudre familiale)',
      'المكواة البخارية المنزلية وأدوات القياس (Fer à repasser & Mètre)'
    ],
    requiredLanguages: ['مصطلحات الخياطة البسيطة (فصال، سرفلة، كفة، فستان منزل)'],
    softSkillsAndBusiness: ['التواصل مع زبونات الحي والمحيط القريب', 'تسعير خياطة الفساتين والتعديلات البسيطة'],
    targetJobs: ['خياطة منزلية مستقلة', 'صانعة وسائد ومستلزمات البيت', 'معدلة ملابس في صالون جواري'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: تشغيل الآلة المنزلية والقص البسيط',
        duration: '1 شهر',
        description: 'شك الخيط، ضبط الشد، وقص القماش وفق قياسات منزلية بسيطة.',
        practicalTask: 'خياطة طقم وسائد منزلية بأسلوب متقن مع سحاب.',
        skillsAcquired: ['استخدام الآلة المنزلية', 'الخياطة المستقيمة والدائرية', 'تركيب السحاب البسيط']
      },
      {
        step: 2,
        title: 'المرحلة 2: خياطة ألبسة المنزل والفساتين',
        duration: '2 شهر',
        description: 'تفصيل وخياطة فساتين منزلية بسيطة (دشداشة/جبة منزلية).',
        practicalTask: 'إنجاز فستان منزل مكتمل الأكمام والحواف.',
        skillsAcquired: ['قص الفستان المنزلي', 'تركيب المطاط والرقبة', 'التشطيب والمكواة']
      },
      {
        step: 3,
        title: 'المرحلة 3: تعديل الملابس وتسليم الطلبيات الجوارية',
        duration: '3 أشهر',
        description: 'تقصير السراويل، تقضيب الفساتين، واستقبال طلبيات الجيران والحي.',
        practicalTask: 'تعديل وتصلح 5 ملابس مختلفة لزبونات وتسليمها بنجاح.',
        skillsAcquired: ['تعديل الملابس (Retouche)', 'تسعير الخدمات البسيطة', 'تسليم الطلبيات']
      }
    ]
  },

  // ==========================================
  // 2. مستوى الطور المتوسط (الرابعة متوسط)
  // ==========================================
  {
    id: 'catering_collective_cooking',
    title: 'الإطعام والطبخ الجماعي (Restauration / Cuisine Collective)',
    category: 'فندقة وإطعام',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '45,000 - 110,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الطور المتوسط (الرابعة متوسط)'],
    levelAdvice: 'إعداد الوجبات الجماعية للمطاعم المدرسية والجامعية والشركات والمطاعم الكبرى.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'إعداد الأطباق الجزائرية والعالمية بكميات ضخمة، إتقان تقنيات التقطيع، الطهي بالبخار والشواء، وتطبيق شروط النظافة الميدانية.',
    keyTools: ['Marmite industrielle', 'Four mixته', 'Couteaux de chef', 'Cellule de refroidissement'],
    fieldEquipment: [
      'القدور والمقالي الصناعية الكبرى (Marmites basculantes & Sauteuses)',
      'فرن الطهي المزدوج بالبخار (Four mixte professionnel)',
      'طقم سكاكين الشيف الفولاذية (Couteaux de chef & Planches couleur)'
    ],
    requiredLanguages: ['مصطلحات الطبخ والإطعام (Julienne, Émincé, Braiser, Sauter, HACCP, Bain-marie)'],
    softSkillsAndBusiness: ['سرعة الأداء تحت الضغط والعمل في طاقم المطبخ', 'احترام السلسلة الحرارية للحفظ الغذائي (Chaîne du froid)'],
    targetJobs: ['طباخ بمطاعم الشركات والمؤسسات والجامعات', 'طباخ بمطاعم خاصة وفنادق', 'مساعد شيف مطبخ جماعي'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: مهارات التقطيع والنظافة الغذائية',
        duration: '1 - 3 أشهر',
        description: 'تقطيع الخضار واللحوم بأساليب (Julienne, Brunoise) وتطبيق النظافة.',
        practicalTask: 'تقطيع وتجهيز خضار ولحوم وجبة 50 شخصاً بنظافة تامة.',
        skillsAcquired: ['استخدام سكاكين الشيف', 'تطبيق معايير HACCP', 'تنظيف المكان بالتعقيم']
      },
      {
        step: 2,
        title: 'المرحلة 2: طهي الصلصات والأطباق الرئيسية',
        duration: '3 - 6 أشهر',
        description: 'طهي المرق، الأرز، المعكرونة، واللحوم بالقدور والأفران الصناعية.',
        practicalTask: 'طهي طبق رئيسي متكامل لـ 100 شخص في الموعد المحدد.',
        skillsAcquired: ['إتقان الصلصات الأساسية', 'الطهي بـ Marmite basculante', 'ضبط الملح والبهارات']
      },
      {
        step: 3,
        title: 'المرحلة 3: إدارة البوفيه والتوزيع الجماعي',
        duration: '6 - 12 شهراً',
        description: 'تقديم الوجبات على Bain-marie، حفظ الوجبات في غرفة التبريد، وحساب حصة الفرد.',
        practicalTask: 'إدارة خط توزيع الطعام طيلة فترة الغداء لمؤسسة كاملة.',
        skillsAcquired: ['إدارة السلسلة الحرارية', 'تقديم الوجبات على Bain-marie', 'إدارة مخزون المواد الغذائية']
      }
    ]
  },
  {
    id: 'storekeeper_magasinier',
    title: 'أمين مخزن وتسيير المخزونات (Magasinier)',
    category: 'تسيير وإدارة',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '40,000 - 95,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الطور المتوسط (الرابعة متوسط)'],
    levelAdvice: 'ترتيب المخازن، تسجيل دخول وخروج البضائع، ومتابعة الجرد بالشركات والمصانع.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'استلام البضائع، فحص وصل التسليم (Bon de livraison)، ترميز المنتجات (Code-barres)، وتخزينها بالرفوف باستعمال الرافعة الشوكية.',
    keyTools: ['Lecteur code-barres', 'Transpalette manuel', 'Logiciel de stock', 'Bon de réception'],
    fieldEquipment: [
      'قارئ الباركود اللاسلكي (Lecteur code-barres laser)',
      'عربة نقل البضائع اليدوية والهيدروليكية (Transpalette hydraulique)',
      'جهاز الحاسوب وبرنامج تسيير المخزون (Logiciel de gestion de stock)'
    ],
    requiredLanguages: ['مصطلحات تسيير المخزون (Bon de livraison, Inventaire, Stock, FIFO, Colis, Palette)'],
    softSkillsAndBusiness: ['الدقة المتناهية في العد والتنظيم المحكم', 'تنسيق طلبات الشحن والفرق الميدانية'],
    targetJobs: ['أمين مخزن بالشركات والمصانع والمؤسسات', 'مسؤول استلام البضائع بالمحلات الكبرى', 'مساعد لوجستي ومسير مخزون'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: الاستلام والتأكد من وصل التسليم',
        duration: '1 - 3 أشهر',
        description: 'مقارنة البضائع المستلمة بوصل التسليم والبحث عن الأضرار.',
        practicalTask: 'استلام 50 صندوق بضائع وتدوين الفروقات بوصل الاستلام.',
        skillsAcquired: ['مطابقة Bon de livraison', 'استخدام Transpalette', 'فحص سلامة الطرود']
      },
      {
        step: 2,
        title: 'المرحلة 2: الترميز والتخزين الممنهج',
        duration: '3 - 6 أشهر',
        description: 'مسح الباركود، إدخال المنتجات بالنظام، وترتيبها وفق قاعدة FIFO.',
        practicalTask: 'ترتيب مخزن منتجات ورمزه بالكامل على برنامج الحاسوب.',
        skillsAcquired: ['إدخال البيانات بالبرنامج', 'تطبيق قاعدة FIFO', 'تنظيم الرفوف بالترميز']
      },
      {
        step: 3,
        title: 'المرحلة 3: الجرد السنوي وإعداد طلبات الشحن',
        duration: '6 - 12 شهراً',
        description: 'إجراء الجرد الشامل للمخزن وتجهيز طلبات خروج البضائع للفروع.',
        practicalTask: 'إجراء جرد ختامي لمخزن يحتوي 500 صنف وتصحيح الفروقات.',
        skillsAcquired: ['إجراء Inventaire بدقة', 'إعداد Bon de sortie', 'إدارة المخزن بالكامل']
      }
    ]
  },
  {
    id: 'electrical_building_cap',
    title: 'الكهرباء المعمارية وتأسيس المنازل (Électricité Bâtiment)',
    category: 'كهرباء وصيانة منزلية',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '50,000 - 130,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الطور المتوسط (الرابعة متوسط)'],
    levelAdvice: 'تأسيس القنوات الكهربائية، تركيب لوحات التوزيع (Tableau électrique)، والقواطع التفاضلية لحماية المباني.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'تمرير أسلاك الكهرباء بالقنوات، تركيب الإضاءة، المقابس (Prises)، قواطع الذهاب والإياب (Va-et-vient)، ولوحات التوزيع المجهّزة بالقاطع التفاضلي (Disjoncteur différentiel).',
    keyTools: ['Multimètre', 'Pince à dénuder', 'Disjoncteur', 'Tire-fil'],
    fieldEquipment: [
      'جهاز قياس التوتر والكهرباء (Multimètre numérique)',
      'طقم كماشات التجريد والقطع (Pinces à dénuder & à couper isolées 1000V)',
      'سلك سحب الأسلاك الكهربائية (Tire-fil nylon/acier & Rainureuse)'
    ],
    requiredLanguages: ['مصطلحات الكهرباء (Phase, Neutre, Terre, Disjoncteur, Va-et-vient, Interrupteur)'],
    softSkillsAndBusiness: ['معايير الأمان والسلامة الكهربائية ضد الصدمات', 'قراءة مخططات التوزيع وتكلفة المواد'],
    targetJobs: ['كهربائي مباني حر ومقاول شبكات منزلية', 'كهربائي صيانة بالشركات والمؤسسات', 'مركب أنظمة إضاءة وقواطع حماية'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: تمديد الأسلاك وتركيب المفاتيح',
        duration: '1 - 3 أشهر',
        description: 'تمرير الأسلاك بالقنوات وتركيب المقابس ومفاتيح Va-et-vient.',
        practicalTask: 'تأسيس شبكة إضاءة غرفة بمفتاحين ذهاب وإياب مع مقبسين أرضيين.',
        skillsAcquired: ['تعديل وسحب الأسلاك بـ Tire-fil', 'توصيل مفتاح Va-et-vient', 'توصيل المقابس بالأرضي (Terre)']
      },
      {
        step: 2,
        title: 'المرحلة 2: لوحة التوزيع وقواطع الحماية',
        duration: '3 - 6 أشهر',
        description: 'تجميع Tableau électrique وتركيب Disjoncteur différentiel 30mA.',
        practicalTask: 'تركيب وتوصيل لوحة توزيع شقة 3 غرف وتوزيع الأحمال بالتساوي.',
        skillsAcquired: ['تجميع Tableau électrique', 'تركيب Disjoncteur différentiel', 'قياس التوتر بـ Multimètre']
      },
      {
        step: 3,
        title: 'المرحلة 3: تجريب الشبكة والتأريض (Prise de terre)',
        duration: '6 - 12 شهراً',
        description: 'قياس مقوم التأريض بـ Telluromètre واختبار القواطع وتأمين الشقة.',
        practicalTask: 'فحص شقة كاملة والتأكد من اشتغال قطع الأمان عند حدوث شورت.',
        skillsAcquired: ['قياس مقاومة Prise de terre', 'تشخيص الأعطال القاتلة', 'تسعير تأسيس منزل بالكامل']
      }
    ]
  },
  {
    id: 'industrial_electricity_cap',
    title: 'الكهرباء الصناعية وصيانة المحركات (Électricité Industrielle)',
    category: 'كهرباء وإلكترونيك',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '55,000 - 140,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الطور المتوسط (الرابعة متوسط)'],
    levelAdvice: 'تشغيل وصيانة المحركات ثلاثية الأطوار (Triphasé)، لوحات التحكم ومبدلات السرعة في المصانع.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'توصيل المحركات ثلاثية الأطوار (Étoile/Triangle)، تركيب الكونتاكتور (Contacteur)، المكرر الحراري (Relais thermique) وقراءة المخططات الصناعية.',
    keyTools: ['Pince ampèremétrique', 'Contacteur', 'Relais thermique', 'Schéma électrique'],
    fieldEquipment: [
      'كلامب ميتر لقياس التيار ثلاثي الأطوار (Pince ampèremétrique Triphasé)',
      'لوحة تجميع المفاتيح والكونتاكتورات (Contacteurs, Relais thermiques, Boutons poussoirs)',
      'مفك ومعزول فحص المحركات (Testeur de rotation de phase & Multimètre)'
    ],
    requiredLanguages: ['مصطلحات الكهرباء الصناعية (Triphasé, Étoile, Triangle, Contacteur, Relais thermique, Moteur)'],
    softSkillsAndBusiness: ['سرعة البديهة في كشف الأعطال الكهربائية بمناطق الإنتاج', 'السلامة عند التعامل مع التوتر العالي 380V'],
    targetJobs: ['كهربائي صيانة صناعية بالمصانع والورشات', 'فني لوحات تحكم ومحركات ثلاثية الأطوار', 'مركب أنظمة الضخ الصناعي'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: توصيل المحركات ثلاثية الأطوار',
        duration: '1 - 3 أشهر',
        description: 'التوصيل النجمي والمثلثي (Étoile/Triangle) وفحص اتجاه الدوران.',
        practicalTask: 'توصيل محرك ثلاثي الأطوار وعكس اتجاه الدوران بزر ضاغط.',
        skillsAcquired: ['توصيل Étoile & Triangle', 'قياس التيار بـ Pince ampèremétrique', 'فحص الفازات الثلاث']
      },
      {
        step: 2,
        title: 'المرحلة 2: خزانة التحكم والتتابع (Armoire électrique)',
        duration: '3 - 6 أشهر',
        description: 'تركيب Contacteurs و Relais thermique وحماية المحرك من الحمل الزائد.',
        practicalTask: 'تجميع خزانة تحكم تشغيل محركين بالتتابع مع مصابيح التنبيه.',
        skillsAcquired: ['تركيب Contacteur & Relais thermique', 'قراءة المخطط الصناعي', 'تجميع خزانة Armoire']
      },
      {
        step: 3,
        title: 'المرحلة 3: كشف الأعطال وتغيير المكونات',
        duration: '6 - 12 شهراً',
        description: 'تشخيص انقطاع أحد الفازات واحتراق الملفات وصيانة الخزانات.',
        practicalTask: 'إصلاح خزانة مضخة صناعية متوقفة وإعادة تشغيل خط الإنتاج.',
        skillsAcquired: ['تشخيص الأعطال بالقياس', 'استبدال المكونات الصناعية', 'تطبيق إجراءات Consignation']
      }
    ]
  },
  {
    id: 'welding_general_cap',
    title: 'التلحيم وتجميع الهياكل المعدنية (Soudure ARC / MIG)',
    category: 'صناعة ميكانيكية ومعدنية',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '55,000 - 150,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الطور المتوسط (الرابعة متوسط)'],
    levelAdvice: 'تلحيم الأنابيب والهياكل المعدنية الصافية والورشات الاستثمارية باستعمال الألكترود والشعلة.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'التلحيم بـ الألكترود المغلف (Électrode enrobée / ARC)، التلحيم بـ MIG/MAG، تجهيز الوصلات وفحص جودة التلحيم.',
    keyTools: ['Poste à souder Inverter', 'Masque optoélectronique', 'Électrode rutiles', 'Meuleuse d\'angle'],
    fieldEquipment: [
      'جهاز التلحيم الذكي المتطور (Poste à souder Inverter ARC/MIG)',
      'قناع التلحيم الإلكتروني التلقائي (Masque de soudure automatique)',
      'طقم ألكترودات ومطرقة إزالة الجلبة (Électrodes 2.5/3.2mm & Marteau à piquer)'
    ],
    requiredLanguages: ['مصطلحات التلحيم (Soudure ARC, MIG, Électrode, Cordon de soudure, Chanfrein, Laitier)'],
    softSkillsAndBusiness: ['التركيز التام لمنع التشويه الحسابي وسلامة العينين', 'تسعير الهياكل بالعمق أو بالقطعة'],
    targetJobs: ['لحام هياكل معدنية بالشركات والمصانع', 'لحام أنابيب بورشات البترول والأشغال الكبرى', 'حرفي لحام حر'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: التلحيم المسطح بـ Électrode',
        duration: '1 - 3 أشهر',
        description: 'ضبط أرجون أمبيرية الجهاز، تشكيل خيط التلحيم (Cordon) وتنظيف الجلبة.',
        practicalTask: 'تلحيم صفيحتي حديد بسمك 4 مم بخيط تلحيم مستقيم متصل.',
        skillsAcquired: ['ضبط شدة التيار بالـ Ampère', 'إشعال الألكترود بثبات', 'إزالة Laitier بـ Marteau']
      },
      {
        step: 2,
        title: 'المرحلة 2: التلحيم العمودي والأفقية (Positions PA, PB, PF)',
        duration: '3 - 6 أشهر',
        description: 'التلحيم بأوضاع مختلفة وتجهيز حواف الصفائح (Chanfrein).',
        practicalTask: 'تلحيم زاوي عمودي لقطاعين معدنيين باختبار قوة الكسر.',
        skillsAcquired: ['التلحيم بالوضع العمودي PF', 'تجهيز الحواف Chanfrein', 'منع ثقوب الصفائح']
      },
      {
        step: 3,
        title: 'المرحلة 3: التلحيم بـ MIG/MAG وفحص الوصلات',
        duration: '6 - 12 شهراً',
        description: 'استخدام سلك التلحيم المستمر والغاز الواقي وحس الكسر.',
        practicalTask: 'تلحيم خزان هواء تحت الضغط باختبار منع التسرب.',
        skillsAcquired: ['استخدام جهاز MIG/MAG', 'الفحص البصري للجودة', 'إنجاز وصلات خالية من العيوب']
      }
    ]
  },
  {
    id: 'auto_electricity_cap',
    title: 'كهرباء وتوصيلات السيارات (Électricité Automobile)',
    category: 'ميكانيك وسيارات',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '50,000 - 135,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الطور المتوسط (الرابعة متوسط)'],
    levelAdvice: 'تشخيص أعطال بطاريات السيارات، المولدات (Alternateur)، البادئ (Démarreur) وضفائر الكهرباء.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'فك واختبار المولد (Alternateur)، المحرك البادئ (Démarreur)، فحص المصهرات (Fusibles)، وتتبع ضفيرة السلوك في مختلف السيارات.',
    keyTools: ['Scanner auto OBD2', 'Multimètre auto', 'Testeur d\'alternateur', 'Pinces à sertir'],
    fieldEquipment: [
      'جهاز الفحص والتشخيص الإلكتروني للسيارات (Scanner OBD2 multimarque)',
      'جهاز قياس البطارية والمولد (Testeur de batterie & Alternateur)',
      'طقم مفاتيح فك المولدات والبادئ (Boîte à douilles & Pinces d’électricien auto)'
    ],
    requiredLanguages: ['مصطلحات كهرباء السيارات (Alternateur, Démarreur, Batterie, Fusible, Faisceau, Relais)'],
    softSkillsAndBusiness: ['الدقة في تتبع الأسلاك لتفادي ماس كهربائي', 'تسعير الفحص وتصلح الضفيرة بوضوح للزبون'],
    targetJobs: ['كهربائي سيارات بالورشات ومحطات الصيانة', 'فني فحص وتشخيص أعطال ضفيرة السيارات', 'صاحب ورشة كهرباء سيارات الخاصة'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: البطارية والمصهرات والأنوار',
        duration: '1 - 3 أشهر',
        description: 'قياس شحن البطارية، تغيير المصهرات، وتعديل إشارات المصابيح.',
        practicalTask: 'فحص بطارية سيارة متوقفة وتغيير مصهر احترق وإصلاح الإشارات.',
        skillsAcquired: ['قياس البطارية بالـ Volt', 'قراءة علبة المصهرات', 'إصلاح أنوار الإشارة والفرامل']
      },
      {
        step: 2,
        title: 'المرحلة 2: المولد (Alternateur) والبادئ (Démarreur)',
        duration: '3 - 6 أشهر',
        description: 'فك وإصلاح وتغيير الفحمات (Charbons) والموزع للمولد والبادئ.',
        practicalTask: 'فك مولد سيارة متوقف، تغيير الفحمات، واختباره على المنصة.',
        skillsAcquired: ['تفكيك وتجميع Alternateur', 'استبدال Charbons & Roulements', 'فحص الدينامو والمحرك البادئ']
      },
      {
        step: 3,
        title: 'المرحلة 3: الفحص بالـ Scanner والضفيرة',
        duration: '6 - 12 شهراً',
        description: 'قراءة أعطال الحساسات بـ Scanner OBD2 وإصلاح انقطاع ضفيرة الأسلاك.',
        practicalTask: 'قراءة أعطال سيارة بـ Scanner وإصلاح سلك قطع بضفيرة المحرك.',
        skillsAcquired: ['تشغيل Scanner OBD2', 'قراءة رموز الأعطال DTC', 'إصلاح ضفيرة Faisceau auto']
      }
    ]
  },
  {
    id: 'plumbing_gas_cap',
    title: 'التركيب الصحي وتوصيلات الغاز (Plomberie Sanitaire & Gaz)',
    category: 'كهرباء وصيانة منزلية',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '50,000 - 130,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الطور المتوسط (الرابعة متوسط)'],
    levelAdvice: 'تركيب أنابيب النحاس والغاز الطبيعي PEX/PPR مع الالتزام الصارم بمعايير الأمان والسلامة ضد تسرب الغاز.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'تلحيم أنابيب النحاس بالأوكسيجين، توصيل أنبوب الغاز الفولاذي والنحاسي، تركيب السخانات والغسالات، وفحص التسرب بالرغوة والمكبس.',
    keyTools: ['Polyfuseuse PPR', 'Chalumeau oxy-acétylénique', 'Pince à sertir PEX', 'Détecteur de fuite gaz'],
    fieldEquipment: [
      'مشعل التلحيم الأوكسيجيني للنحاس (Chalumeau oxy-acétylénique portable)',
      'آلة تلحيم أنابيب PPR ومكبس PEX (Polyfuseuse & Pince à sertir)',
      'جهاز ومحس كشف تسربات الغاز (Détecteur électronique de fuite gaz)'
    ],
    requiredLanguages: ['مصطلحات السباكة والغاز (Cuivre, Brazing, Gaz naturel, Chauffe-eau, Détendeur, PEX)'],
    softSkillsAndBusiness: ['احترام قواعد الأمان الصارمة لتفادي تسرب الغاز القاتل', 'حساب تكاليف مستلزمات الشقة وإتقان الورشات'],
    targetJobs: ['سباك صحي ومركب شبكات غاز طبيعي معتمد', 'مركب سخانات غازية ومعدات حمامات', 'فني صيانة شبكات مياه وشبكات غاز'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: تلحيم النحاس وأنابيب PEX/PPR',
        duration: '1 - 3 أشهر',
        description: 'تلحيم وصلات النحاس بـ Chalumeau وتجميع أنابيب المياه الحارة.',
        practicalTask: 'تجميع لوحة توزيع مياه حمام بالنحاس والـ PPR بضغط عالي.',
        skillsAcquired: ['تلحيم النحاس بـ Brasure', 'تلحيم أنابيب PPR حرارياً', 'كبس PEX & Multicouche']
      },
      {
        step: 2,
        title: 'المرحلة 2: توصيل شبكة الغاز الطبيعي والسخانات',
        duration: '3 - 6 أشهر',
        description: 'تركيب أنبوب الغاز الفولاذي بالنحاس وتوصيل السخان والمدخنة.',
        practicalTask: 'تركيب سخان غازي وتوصيله بمدخنة تصريف الغاز واختبار الأمان.',
        skillsAcquired: ['توصيل أنابيب الغاز بآمان', 'تركيب Chauffe-eau والمدخنة', 'فحص التسرب بالرغوة والكترونياً']
      },
      {
        step: 3,
        title: 'المرحلة 3: استلام الشبكات والمطابقة',
        duration: '6 - 12 شهراً',
        description: 'إجراء الفحص بالضغط لشبكات الغاز والمياه واعتمادها رسمياً.',
        practicalTask: 'تأسيس شبكة مياه وغاز كاملة لشقة جديدة واختبار الأمان النهائي.',
        skillsAcquired: ['فحص الضغط بـ Pompe d\'épreuve', 'الالتزام بمعايير سونلغاز', 'تسعير الورشة بالكامل']
      }
    ]
  },
  {
    id: 'women_hairdressing_cap',
    title: 'حلاقة النساء والتجميل (Coiffure Dame)',
    category: 'خدمات وتجميل',
    level: 'شهادة الكفاءة المهنية (CAP)',
    avgSalary: '45,000 - 120,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الطور المتوسط (الرابعة متوسط)'],
    levelAdvice: 'قص الشعر، الصبغات، التسريحات العصرية وتصفيف الشعر في صالونات التجميل.',
    diplomaType: 'شهادة الكفاءة المهنية (CAP)',
    trainingDuration: '12 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'إتقان قص الشعر بمختلف الموديلات، الكيراتين والبروتين، مزج الصبغات وسحب اللون، والتسريحات الخاصة بالأعراس والمناسبات.',
    keyTools: ['Ciseaux sculptants', 'Sèche-cheveux pro', 'Lisseur vapeur', 'Pinceaux coloration'],
    fieldEquipment: [
      'مجفف الشعر الاحترافي عالي القوة (Sèche-cheveux professionnel 2400W)',
      'مكواة الشعر بالبخار والكيراتين (Lisseur vapeur & Fer à boucler)',
      'طقم مقاص التثقيف والقص ومستلزمات الصباغة (Ciseaux de coupe & Pinceaux)'
    ],
    requiredLanguages: ['مصطلحات حلاقة النساء (Brushing, Coloration, Mèches, Décoloration, Keratine, Chignon)'],
    softSkillsAndBusiness: ['حسن الاستقبال والذوق التجميلي الرفيع', 'تسعير التسريحات والصبغات بحسب طول الشعر والمواد'],
    targetJobs: ['حلاقة ومصففة شعر بصالون تجميل', 'صاحبة صالون حلاقة وتجميل نسائي', 'أخصائية عناية بالشعر والبروتين'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: الغسيل و Brushing وقص الأطراف',
        duration: '1 - 3 أشهر',
        description: 'تعلم غسيل الشعر بالبلسم، إتقان Brushing السريع، وقص الأطراف.',
        practicalTask: 'إنجاز Brushing أملس وموج لزبونة في وقت زمني قياسي.',
        skillsAcquired: ['إتقان Brushing بفرشاة دائرية', 'غسيل وتنشيف الشعر الصحيح', 'قص الأطراف المتقصفة']
      },
      {
        step: 2,
        title: 'المرحلة 2: الصبغات وسحب اللون (Coloration & Mèches)',
        duration: '3 - 6 أشهر',
        description: 'مزج الألوان بحسب كتالوج الصبغات، سحب اللون بالأكسجين، وخصلات الميش.',
        practicalTask: 'تطبيق صبغة موحدة مع ميش ذهبي متناسق دون إتلاف الشعر.',
        skillsAcquired: ['خلط الصبغات والمطور Oxidant', 'تطبيق Mèches بالورق القصديري', 'سحب اللون الآمن']
      },
      {
        step: 3,
        title: 'المرحلة 3: الكيراتين والتسريحات المعقدة (Chignon)',
        duration: '6 - 12 شهراً',
        description: 'تطبيق علاجات البروتين والكيراتين، وإنجاز تسريحات العرائس (Chignon).',
        practicalTask: 'إنجاز تسريحة عروس كاملة (Chignon) متماسكة ومزينة بالأكسسوارات.',
        skillsAcquired: ['تطبيق الكيراتين والبروتين', 'إنجاز Chignon عالي ومنخفض', 'إدارة وتسيير صالون تجميل']
      }
    ]
  },
  {
    id: 'micro_computer_operator_cmp',
    title: 'عامل في الميكرومعلوماتية (Opérateur en Micro-informatique)',
    category: 'إعلام آلي ورقمنة',
    level: 'شهادة التحكم المهني (CMP)',
    avgSalary: '45,000 - 90,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الطور المتوسط (الرابعة متوسط)'],
    levelAdvice: 'استخدام البرامج المكتبية Word, Excel, PowerPoint، معالجة النصوص، إدخال البيانات، وصيانة الحاسوب البسيطة.',
    diplomaType: 'شهادة التحكم المهني (CMP)',
    trainingDuration: '18 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'معالجة النصوص الاحترافية بـ Word، الجداول والصيغ بـ Excel، العروض التقديمية، تثبيت أنظمة Windows وصيانة العتاد المكتبي.',
    keyTools: ['Microsoft Word', 'Microsoft Excel', 'Windows 11', 'Imprimante multifonction'],
    fieldEquipment: [
      'حاسوب مكتبي مجهز بحزمة أوفيس كاملة (PC Bureau Intel i5 & Pack Office)',
      'طابعة ماسحة ضوئية متعددة الوظائف (Imprimante multifonction réseau)',
      'طقم أدوات صيانة العتاد وحفظ البيانات (Clé USB, Tournevis précision)'
    ],
    requiredLanguages: ['مصطلحات الإعلام الآلي (Traitement de texte, Tableur, Excel, Formule, Saisie, Impression)'],
    softSkillsAndBusiness: ['السرعة في الكتابة على لوحة المفاتيح (Dactylographie)', 'التنظيم والأرشفة الرقمية للوثائق الإدارية'],
    targetJobs: ['عامل إدخال بيانات بكتّاب ومؤسسات عمومية وخاصة', 'كاتب عمومي أو مسير كشك إعلام آلي (Cyber/Bureautique)', 'مساعد إداري ومسير وثائق'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: الكتابة السريعة بـ Word وتنسيق الوثائق',
        duration: '1 - 4 أشهر',
        description: 'الكتابة بجميع الأصابع على لوحة المفاتيح وتنسيق الرسائل الإدارية والجداول.',
        practicalTask: 'تحرير وتنسيق رسالة إدارية رسمية مع جدول وطباعتها بنظافة.',
        skillsAcquired: ['سرعة الكتابة Dactylographie', 'تنسيق الخطوط والفقرات بـ Word', 'استخدام Imprimante & Scanner']
      },
      {
        step: 2,
        title: 'المرحلة 2: الجداول والحسابات بـ Excel',
        duration: '4 - 10 أشهر',
        description: 'إنشاء الجداول، استخدام الدوال الحسابية (SOMME, MOYENNE)، ورسم المخططات البيانية.',
        practicalTask: 'إنشاء جدول كشف أجور أو فواتير بـ Excel يحسب التكاليف تلقائياً.',
        skillsAcquired: ['استخدام صيغ ودوال Excel', 'إنشاء المخططات البيانية Graphiques', 'تنسيق وتأمين الجداول']
      },
      {
        step: 3,
        title: 'المرحلة 3: صيانة النظم والأرشفة الرقمية',
        duration: '10 - 18 شهراً',
        description: 'تثبيت نظام Windows، التعريفات (Pilotes)، ومكافح الفيروسات وتنظيم الملفات.',
        practicalTask: 'تثبيت نظام Windows 11 على حاسوب مفرغ وتجهيزه بالبرامج والتعريفات.',
        skillsAcquired: ['تثبيت Windows & Drivers', 'حماية البيانات وأخذ النسخ الاحتياطية', 'إدارة وتسيير مكتب رقمي']
      }
    ]
  },
  {
    id: 'refrigeration_hvac_cmp',
    title: 'تركيب وصيانة أجهزة التبريد والتكييف (Froid & Climatisation)',
    category: 'تبريد وتكييف',
    level: 'شهادة التحكم المهني (CMP)',
    avgSalary: '60,000 - 150,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الطور المتوسط (الرابعة متوسط)'],
    levelAdvice: 'تركيب المكيفات المنزلية (Split)، غرف التبريد التجارية، شحن غاز الفريون، وتصليح تسربات الضاغط.',
    diplomaType: 'شهادة التحكم المهني (CMP)',
    trainingDuration: '18 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'تركيب مكيف الهواء Split، شحن وتدفق غازات التبريد (R410A, R32, R134a)، فحص الضواغط، وتأسيس صيانة غرف التبريد.',
    keyTools: ['Manomètre froid', 'Pompe à vide', 'Station de charge gaz', 'Dudgeonnière'],
    fieldEquipment: [
      'مانوميتر قياس ضغط الغاز المزدوج (Manomètre de charge R410A/R32)',
      'مضخة تفريغ الهواء والسائل (Pompe à vide double étage)',
      'طقم توسيع الأنابيب وشحن الفريون (Dudgeonnière & Bouteille de gaz)'
    ],
    requiredLanguages: ['مصطلحات التبريد (Climatiseur, Gaz R410A/R32, Compresseur, Evaporateur, Tirage au vide)'],
    softSkillsAndBusiness: ['الحذر والتأكد من التفريغ (Tirage au vide) لمنع تلف الضاغط', 'تسعير التركيب والشحن بوضوح في فصل الصيف'],
    targetJobs: ['فني تركيب وصيانة مكيفات الهواء والتبريد', 'صاحب ورشة صيانة ثلاجات وغرف تبريد', 'فني صيانة بمؤسسات التبريد التجاري'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: تركيب مكيفات Split المنزلية',
        duration: '1 - 4 أشهر',
        description: 'تثبيت الوحدة الداخلية والخارجية، عمل الـ Dudgeon للأنابيب النحاسية.',
        practicalTask: 'تركيب مكيف Split 12000 BTU متكامل مع الأنابيب وتمرير الكابلات.',
        skillsAcquired: ['عمل Dudgeon على أنبوب النحاس', 'تثبيت الوحدات بميزان الماء', 'توصيل كابلات الكهرباء للمكيف']
      },
      {
        step: 2,
        title: 'المرحلة 2: تفريغ الهواء وشحن غاز الفريون',
        duration: '4 - 10 أشهر',
        description: 'استخدام Pompe à vide للتفريغ، شحن غاز R410A/R32 بالوزن والضغط.',
        practicalTask: 'تفريغ هواء مكيف بـ Pompe à vide وشحنه بغاز R32 بوزن مضبوط بالمركب.',
        skillsAcquired: ['استخدام Pompe à vide', 'شحن الغاز بالميزان والمانوميتر', 'كشف تسربات النحاس']
      },
      {
        step: 3,
        title: 'المرحلة 3: صيانة الثلاجات وغرف التبريد التجاري',
        duration: '10 - 18 شهراً',
        description: 'تغيير الضواغط (Compresseurs)، الترموستات، وتفريغ السدود الشعرية (Capillaire).',
        practicalTask: 'إصلاح تسرب غاز بثلاجة تجارية وتغيير فلتر المجفف وإعادة الشحن.',
        skillsAcquired: ['استبدال Compresseur & Filtre déshydrateur', 'صيانة غرف التبريد Chambre froide', 'إدارة ورشة تبريد وتكييف']
      }
    ]
  },

  // ==========================================
  // 3. مستوى الثانية ثانوي (2 ثانوي)
  // ==========================================
  {
    id: 'secretariat_bureautique_tech',
    title: 'الأمانة المكتبية والتسيير الإداري (Secrétariat Bureautique)',
    category: 'تسيير وإدارة',
    level: 'شهادة تقني (Technicien)',
    avgSalary: '50,000 - 110,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الثانية ثانوي (2 ثانوي)'],
    levelAdvice: 'المستوى المناسب لنيل شهادة تقني (24 شهراً) لإدارة المكالمات، تحرير الرسائل الإدارية وتنظيم المواعيد بالمؤسسات.',
    diplomaType: 'شهادة تقني (Technicien)',
    trainingDuration: '24 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'تحرير المراسلات الرسمية باللغتين العربية والفرنسية، تنظيم الأرشيف، إدارة أجندة المواعيد، وإتقان المعاملات الإدارية البريدية.',
    keyTools: ['Microsoft Office Advanced', 'Outlook', 'Gestion documentaire', 'Standard téléphonique'],
    fieldEquipment: [
      'حاسوب إداري مجهز بنظام أرشفة الوثائق البرمجية (PC Bureau & GED)',
      'موزع المكالمات الهاتفية والفاكس الشبكي (Standard téléphonique & Scanner pro)',
      'طقم تنظيم المراسلات والملفات الرسمية (Classeurs, Chemises & Registres)'
    ],
    requiredLanguages: ['مصطلحات الإدارة (Courrier, Procès-verbal, Ordre du jour, Classement, Archivage, Compte-rendu)'],
    softSkillsAndBusiness: ['اللباقة وحسن التواصل الشفهي والكتابي', 'سرية المعاملات والوثائق الإدارية (Confidentialité)'],
    targetJobs: ['أمينة سر / سكرتير تنفيذي بمؤسسة عمومية أو خاصة', 'مساعد إداري بمكاتب الموثقين والمحامين والشركات', 'مسؤول استقبال وأرشفة رقمية'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: تحرير المراسلات والرسائل الرسمية',
        duration: '1 - 6 أشهر',
        description: 'إتقان صيغ التحرير الإداري باللغة العربية والفرنسية وطلب المعلومات.',
        practicalTask: 'تحرير رسالة إدارية رسمية واستدعاء اجتماع مع جدول الأعمال.',
        skillsAcquired: ['تحرير Courrier administratif', 'إتقان قواعد اللغة الإدارية', 'التنسيق القياسي للمراسلات']
      },
      {
        step: 2,
        title: 'المرحلة 2: تنظيم الأرشيف وأجندة الاجتماعات',
        duration: '6 - 15 شهراً',
        description: 'تصنيف الملفات ورقمية الوثائق وإدارة المواعيد عبر Google Calendar / Outlook.',
        practicalTask: 'تنظيم أرشيف كامل لشركة وتصنيفه أبجدياً وزمنياً برمز رقمي.',
        skillsAcquired: ['تصنيف الأرشيف Classement', 'إدارة المواعيد عبر Outlook', 'تحرير محاضر الاجتماعات PV']
      },
      {
        step: 3,
        title: 'المرحلة 3: الأمانة التنفيذية وإدارة المكاتب',
        duration: '15 - 24 شهراً',
        description: 'استقبال الوفود، إعداد عروض PowerPoint التنفيذية، وتنسيق مهام الإدارة العامة.',
        practicalTask: 'إدارة المكتب التنفيذي لمدة شهر واستقبال 50 مراجعاً وتنظيم ملفاتهم.',
        skillsAcquired: ['إدارة الأمانة التنفيذية', 'عرض التقارير بـ PowerPoint', 'التنسيق الشامل للمكتب الإداري']
      }
    ]
  },

  // ==========================================
  // 4. مستوى الثالثة ثانوي وخريجون (3 ثانوي)
  // ==========================================
  {
    id: 'landscape_designer_bts',
    title: 'مصمم البساتين وتنسيق الحدائق (Paysagiste / Concepteur de Jardins)',
    category: 'فلاحة وزراعة',
    level: 'شهادة تقني سامي (BTS / ش.ت.س)',
    avgSalary: '60,000 - 150,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الثالثة ثانوي وخريجون (3 ثانوي)'],
    levelAdvice: 'المستوى المؤهل لدخول المعاهد المتخصصة (INSFP) لنيل شهادة تقني سامي (30 شهراً) لتصميم المخططات الهندسية للمساحات الخضراء.',
    diplomaType: 'شهادة تقني سامي (BTS / ش.ت.س)',
    trainingDuration: '30 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'رسم المخططات الهندسية 2D/3D للحدائق، اختيار الأشجار والنباتات المناسبة للمناخ، تصميم أنظمة الري الذكية والإضاءة الخارجية.',
    keyTools: ['AutoCAD', 'Sketchup', 'Realtime Landscaping', 'Système d\'irrigation'],
    fieldEquipment: [
      'حاسوب بمواصفات عالية لبرامج التصميم المعماري (PC Portable RTX & AutoCAD)',
      'محطة قياس المساحات والمسح الطبوغرافي (Télémètre laser & Mètre ruban 50m)',
      'طقم أجهزة فحص حموضة ورطوبة التربة (Ph-mètre & Humidimètre sol)'
    ],
    requiredLanguages: ['مصطلحات تصميم الحدائق (Paysage, Plan 2D/3D, Irrigation, Palette végétale, Drainage)'],
    softSkillsAndBusiness: ['اللمسة الجمالية الهندسية والابتكار البيئي', 'إعداد دفاتر الشروط (Cahier des charges) وتكلفة المشاتل'],
    targetJobs: ['تقني سامي مصمم حدائق بمكاتب الدراسات', 'مستشار تنسيق مساحات خضراء بلديات وفنادق', 'صاحب مؤسسة مصغرة لتنسيق وتجهيز الحدائق'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: رسم المخططات وبرامج 2D/3D',
        duration: '1 - 8 أشهر',
        description: 'رسم المخططات على AutoCAD و SketchUp واختيار النباتات.',
        practicalTask: 'تصميم مخطط 3D لحديقة إقامة سكنية بمساحة 500 متر مربع.',
        skillsAcquired: ['الرسم بـ AutoCAD & SketchUp', 'معرفة الكتالوج النباتي', 'حساب المساحات والزوايا']
      },
      {
        step: 2,
        title: 'المرحلة 2: دراسة التربة وشبكات الري الذكي',
        duration: '8 - 20 شهراً',
        description: 'تحليل حموضة التربة، تصريف المياه (Drainage)، وتصميم شبكة الري التلقائي.',
        practicalTask: 'دراسة وتصميم شبكة ري تلقائية مبرمجة لمشروع حديقة عمومية.',
        skillsAcquired: ['تحليل خصب التربة', 'حساب ضغط وتدفق المياه', 'تصميم شبكات الري الذكي']
      },
      {
        step: 3,
        title: 'المرحلة 3: الإشراف الميداني ودفتر الشروط',
        duration: '20 - 30 شهراً',
        description: 'إعداد دفتر الشروط، الإشراف على غرس المشاتل، وتسليم المشروع للزبون.',
        practicalTask: 'إدارة ورشة إنجاز حديقة فندق كاملة وتسليمها مطابقة للمخطط.',
        skillsAcquired: ['صياغة Cahier des charges', 'الإشراف على العمال والمشاتل', 'تسليم المشاريع الهندسية']
      }
    ]
  },
  {
    id: 'food_quality_control_bts',
    title: 'مراقبة النوعية في الصناعات الغذائية (Contrôle de Qualité Agroalimentaire)',
    category: 'صناعات غذائية',
    level: 'شهادة تقني سامي (BTS / ش.ت.س)',
    avgSalary: '65,000 - 160,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الثالثة ثانوي وخريجون (3 ثانوي)'],
    levelAdvice: 'التحليل البكتيريولوجي والكيميائي للمواد الغذائية بمصانع الحليب والمشروبات وتطبيق معايير ISO & HACCP.',
    diplomaType: 'شهادة تقني سامي (BTS / ش.ت.س)',
    trainingDuration: '30 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'أخذ العينات بالمخبر، الفحص الميكروبيولوجي، معايرة الحموضة والسكريات، وتطبيق معايير سلامة الأغذية ISO 22000.',
    keyTools: ['Microscope', 'Autoclave', 'pH-mètre', 'Réfractomètre'],
    fieldEquipment: [
      'مجهر مخبري وشرائح الفحص الميكروبيولوجي (Microscope binoculaire & Boîtes de Pétri)',
      'جهاز التعقيم المخبري والميزان الدقيق (Autoclave & Balance d’analyse 0.001g)',
      'جهاز قياس الحموضة والسكريات (pH-mètre étalonné & Réfractomètre)'
    ],
    requiredLanguages: ['مصطلحات الجودة الغذائية (Microbiologie, HACCP, ISO 22000, Analyse physico-chimique, Prélèvement)'],
    softSkillsAndBusiness: ['الصرامة الشديدة في تطبيق بروتوكولات السلامة والصحة', 'تحرير تقارير مطابقة جودة المواد الغذائية للمقاييس'],
    targetJobs: ['تقني سامي بمخبر مراقبة الجودة بمصانع الحليب والمشروبات', 'مراقب جودة بمصانع المصبرات والمواد الغذائية', 'مفتش سلامة أغذية بالفنادق والمؤسسات'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: التحاليل الفيزيو-كيميائية والحموضة',
        duration: '1 - 8 أشهر',
        description: 'قياس pH، نسبة السكر بـ Réfractomètre، ونسبة الدسم بالحليب.',
        practicalTask: 'إجراء تحليل فيزيو-كيميائي لعينات حليب ومشروبات وتدوين النتائج.',
        skillsAcquired: ['استخدام pH-mètre & Réfractomètre', 'معايرة الأحماض والسكريات', 'أخذ العينات المعقمة']
      },
      {
        step: 2,
        title: 'المرحلة 2: التحاليل الميكروبيولوجية والزرس',
        duration: '8 - 20 شهراً',
        description: 'زرع البكتيريا بـ Boîtes de Pétri، الحضن بـ Étuve، والكشف عن المستعمرات.',
        practicalTask: 'فحص ميكروبيولوجي لدفعة عصائر للتأكد من خلوها من البكتيريا الضارة.',
        skillsAcquired: ['الزرع المعقم بـ Boîte de Pétri', 'استخدام Autoclave & Étuve', 'التعرف على المستعمرات البكتيرية']
      },
      {
        step: 3,
        title: 'المرحلة 3: تطبيق نظام HACCP & ISO 22000',
        duration: '20 - 30 شهراً',
        description: 'تحديد نقاط التحكم الحرجة (CCP) بمراحل الإنتاج وإدارة نظام الجودة.',
        practicalTask: 'إعداد خطة HACCP كاملة لخط إنتاج مصنع أجبان أو مصبرات.',
        skillsAcquired: ['تطبيق نظام HACCP', 'تحرير شهادات المطابقة', 'تدقيق جودة خطوط الإنتاج']
      }
    ]
  },
  {
    id: 'strategic_crops_bts',
    title: 'زراعة المحاصيل الإستراتيجية كالحبوب والزيتيات (Agriculture)',
    category: 'فلاحة وزراعة',
    level: 'شهادة تقني سامي (BTS / ش.ت.س)',
    avgSalary: '70,000 - 180,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الثالثة ثانوي وخريجون (3 ثانوي)'],
    levelAdvice: 'إدارة المزارع الصحراوية الكبرى (القمح، الذرة، عباد الشمس)، تشغيل مرشات المحور الذكية، والتسميد العقلاني.',
    diplomaType: 'شهادة تقني سامي (BTS / ش.ت.س)',
    trainingDuration: '30 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'إدارة المسارات التقنية لزراعة القمح الصلب واللين، عباد الشمس والذرة، تشغيل المحاور الكبرى (Pivot d\'irrigation) والتسميد.',
    keyTools: ['Pivot d\'irrigation', 'Tracteur agricole', 'Moissonneuse-batteuse', 'Analyse du sol'],
    fieldEquipment: [
      'محور الري الزراعي الذكي (Pivot d’irrigation à commande à distance)',
      'الجرار الزراعي وآلات البذر والتسميد (Tracteur & Semoir de précision)',
      'أجهزة تحليل رطوبة وتسميد الحبوب الميدانية (Humidimètre à grain & GPS agricole)'
    ],
    requiredLanguages: ['مصطلحات زراعة المحاصيل (Céréaliculture, Pivot, Semence certifiée, Engrais NPK, Phytosanitaire)'],
    softSkillsAndBusiness: ['التخطيط الزراعي الموسمي والتأقلم مع المناخ', 'حساب مردود الهكتار بالظنطحة والربحية الاقتصادية'],
    targetJobs: ['تقني سامي سير المزارع الكبرى بالجنوب والمهضاب', 'مسؤول تشغيل محاور الري بالمحيطات الفلاحية', 'مستشار فلاحي لزراعة الحبوب والمستلزمات'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: تحضير التربة والبذر الدقيق',
        duration: '1 - 8 أشهر',
        description: 'حرث الأرض بـ Tracteur، ضبط عمق البذر بالسموار، وتحديد كمية البذور.',
        practicalTask: 'بذر 50 هكتار قمح صلب بـ Semoir de précision وفق المعايير.',
        skillsAcquired: ['تشغيل الجرار والسموار', 'حساب كمية البذور للهكتار', 'معالجة البذور المعتمدة']
      },
      {
        step: 2,
        title: 'المرحلة 2: إدارة الري المحوري والتسميد',
        duration: '8 - 20 شهراً',
        description: 'تشغيل محاور Pivot، حساب الاحتياجات المائية، وتطبيق التسميد NPK.',
        practicalTask: 'إدارة دورة ري وتسميد محوري لـ 80 هكتار قمح طيلة موسم النمو.',
        skillsAcquired: ['صيانة وتشغيل Pivot d\'irrigation', 'تطبيق التسميد بالماء (Fertigation)', 'مكافحة الأعشاب الضارة']
      },
      {
        step: 3,
        title: 'المرحلة 3: الحصاد والتخزين بـ السيلو',
        duration: '20 - 30 شهراً',
        description: 'ضبط الحاصدة الدراسة (Moissonneuse)، قياس رطوبة الحبوب والشحن.',
        practicalTask: 'الإشراف على حملة حصاد 100 هكتار وشحن الحبوب إلى السيلو بنجاح.',
        skillsAcquired: ['ضبط Moissonneuse-batteuse', 'قياس رطوبة الحصاد', 'حساب مردودية القنطار/هكتار']
      }
    ]
  },
  {
    id: 'database_admin_bts',
    title: 'إعلام آلي - قاعدة المعطيات (Informatique / Base de Données)',
    category: 'إعلام آلي ورقمنة',
    level: 'شهادة تقني سامي (BTS / ش.ت.س)',
    avgSalary: '70,000 - 190,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الثالثة ثانوي وخريجون (3 ثانوي)'],
    levelAdvice: 'تطوير وإدارة قواعد البيانات SQL Server, Oracle, MySQL، تأمين البيانات وصيانة الشبكات بالمؤسسات والبنوك.',
    diplomaType: 'شهادة تقني سامي (BTS / ش.ت.س)',
    trainingDuration: '30 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'تصميم قواعد البيانات بـ Merise/UML، كتابة استعلامات SQL المعقدة، إدارة الأذونات، والنسخ الاحتياطي (Backup & Recovery).',
    keyTools: ['SQL Server', 'Oracle Database', 'MySQL', 'MERISE / PowerAMC'],
    fieldEquipment: [
      'حاسوب متطور مجهز بسيرفرات وهمية (PC i7/i9 32GB RAM & VMware Server)',
      'أجهزة وموزعات الشبكات المحلية (Switch administrable & Serveur NAS)'
    ],
    requiredLanguages: ['مصطلحات قواعد البيانات (SQL, Query, Index, Primary Key, Backup, Trigger, Stored Procedure)'],
    softSkillsAndBusiness: ['التحليل المنطقي للهياكل وحماية البيانات الشديدة', 'القدرة على حل مشاكل بطء الاستعلامات بالسيرفرات'],
    targetJobs: ['مدير قواعد بيانات (DBA) بالبنوك والشركات والمؤسسات', 'مطور تطبيقات ونظم معلومات بقواعد البيانات', 'مسؤول النسخ الاحتياطي والرقميات'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: النمذجة بـ MERISE ولغة SQL',
        duration: '1 - 8 أشهر',
        description: 'رسم MCD/MLD وكتابة استعلامات (SELECT, INSERT, UPDATE, JOIN).',
        practicalTask: 'تصميم وإنشاء قاعدة بيانات لمستشفى أو مكتبة باستعلامات SQL متكاملة.',
        skillsAcquired: ['النمذجة بـ MERISE/UML', 'كتابة استعلامات SQL بدقة', 'ربط الجداول بـ Foreign Keys']
      },
      {
        step: 2,
        title: 'المرحلة 2: الإجراءات المخزنة والـ Triggers',
        duration: '8 - 20 شهراً',
        description: 'برمجة Stored Procedures, Functions, والـ Triggers لتأمين منطق البيانات.',
        practicalTask: 'برمجة Trigger يسجل جميع التغييرات المالية في جدول أرشفة آلي.',
        skillsAcquired: ['برمجة Stored Procedures', 'إنشاء Triggers أوتوماتيكية', 'تحسين أداء الفهارس Indexing']
      },
      {
        step: 3,
        title: 'المرحلة 3: إدارة السيرفرات والنسخ الاحتياطي',
        duration: '20 - 30 شهراً',
        description: 'إدارة أذونات المستخدمين، ضبط النسخ الاحتياطي الأوتوماتيكي وحمايتها.',
        practicalTask: 'إعداد خطة استرجاع بيانات (Disaster Recovery) لسيرفر SQL Server بالكامل.',
        skillsAcquired: ['إدارة أذونات المستخدمين', 'ضبط Backup & Recovery الآلي', 'تأمين وقواعد بيانات السيرفر']
      }
    ]
  },
  {
    id: 'accounting_management_bts',
    title: 'المحاسبة والتسيير المالي (Comptabilité & Gestion)',
    category: 'تسيير وإدارة',
    level: 'شهادة تقني سامي (BTS / ش.ت.س)',
    avgSalary: '65,000 - 170,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الثالثة ثانوي وخريجون (3 ثانوي)'],
    levelAdvice: 'مسك الدفاتر المحاسبية (SCF)، الميزانية الجبائية، التصريحات الضريبية (G50)، والرواتب على البرامج المحاسبية.',
    diplomaType: 'شهادة تقني سامي (BTS / ش.ت.س)',
    trainingDuration: '30 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'تسجيل الفواتير، تطبيق النظام المحاسبي المالي (SCF)، إعداد التصريح الضريبي G50، وحساب أجور العمال ببرنامج PC Paie.',
    keyTools: ['PC Comptabilité', 'PC Paie', 'Excel Avancé', 'Déclaration G50'],
    fieldEquipment: [
      'حاسوب إداري مجهز ببرمجيات المحاسبة الجزائرية (PC Bureau & PC Comptabilité / PC Paie)',
      'طابعة الميزانيات والوثائق الجبائية الرسمية (Imprimante laser rapide)'
    ],
    requiredLanguages: ['مصطلحات المحاسبة (SCF, Bilan, Journal, G50, TVA, Fiche de paie, Amortissement)'],
    softSkillsAndBusiness: ['الدقة الحسابية المطلقة والالتزام بمواعيد الضرائب', 'متابعة التشريعات الجبائية والمالية الجزائرية'],
    targetJobs: ['محاسب رئيسي بالشركات والمؤسسات الاقتصادية', 'مساعد خبير محاسب بمكاتب المحاسبة والتدقيق', 'مسؤول الرواتب والتصريحات الجبائية (G50)'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: مسك الدفاتر والنظام المحاسبي (SCF)',
        duration: '1 - 8 أشهر',
        description: 'تسجيل الشراء، البيع، والبنك بـ Journal المحاسبي وفق مدونة الحسابات.',
        practicalTask: 'تسجيل شهر كامل من الفواتير والعمليات البنكية لشركة بشرائح SCF.',
        skillsAcquired: ['فهم مدونة الحسابات SCF', 'تسجيل الفواتير بالدفتر اليومي', 'إعداد Grand livre & Balance']
      },
      {
        step: 2,
        title: 'المرحلة 2: التصريح الجبائي G50 والرواتب (PC Paie)',
        duration: '8 - 20 شهراً',
        description: 'حساب TVA، اقتطاع IRG، ملء استمارة G50، وإعداد كشوف الأجور.',
        practicalTask: 'حساب وإعداد التصريح الضريبي G50 وكشوف أجور 20 عاملاً ببرنامج PC Paie.',
        skillsAcquired: ['ملء استمارة التصريح G50', 'حساب الأجور بـ PC Paie', 'التصريح الاجتماعي CNAS']
      },
      {
        step: 3,
        title: 'المرحلة 3: الميزانية الختامية (Bilan comptable)',
        duration: '20 - 30 شهراً',
        description: 'إجراء عمليات جرد نهاية السنة، الإهتلاكات، وإعداد الميزانية المالية.',
        practicalTask: 'إعداد الميزانية المالية الختامية (Bilan de fin d\'année) لشركة مكتملة.',
        skillsAcquired: ['إجراء الإهتلاكات Amortissements', 'إعداد Bilan & TCR', 'مناقشة الميزانية مع الجباية']
      }
    ]
  },
  {
    id: 'roads_bridges_bts',
    title: 'الطرق والمنشآت الفنية والجسور (Routes & Ouvrages d\'Art)',
    category: 'بناء وتزيين معماري',
    level: 'شهادة تقني سامي (BTS / ش.ت.س)',
    avgSalary: '75,000 - 190,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الثالثة ثانوي وخريجون (3 ثانوي)'],
    levelAdvice: 'متابعة ورشات الطرق السريعة، تعبيد الإسفلت، قراءة المخططات الهندسية وإجراء مسوحات الطبوغرافيا.',
    diplomaType: 'شهادة تقني سامي (BTS / ش.ت.س)',
    trainingDuration: '30 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'متابعة أشغال حفر وتعبيد الطرق، صب خرسانة الجسور والمنشآت الفنية، قراءة المخططات واستخدام Station Totale.',
    keyTools: ['Autodesk Covadis', 'Station Totale', 'AutoCAD Civil 3D', 'Niveau chantier'],
    fieldEquipment: [
      'جهاز المسح الطبوغرافي المتطور (Station Totale & GPS Différentiel)',
      'ميزان القامة الميداني (Niveau optique de chantier & Mire 5m)',
      'حاسوب بمواصفات عالية لبرامج Covadis & Civil 3D'
    ],
    requiredLanguages: ['مصطلحات الطرق (Terrassement, Asphalte, Covadis, Ouvrage d\'art, Chaussée, Topographie)'],
    softSkillsAndBusiness: ['الصرامة الميدانية وحسن قيادة عمال الورشات الكبرى', 'قراءة مخططات حفر وتعبيد الطرق بالمتر المكعب'],
    targetJobs: ['تقني سامي بمشاريع الطرق والجسور (COSIDER, ALTRO...)', 'مراقب ورشات منشآت فنية وأشغال عمومية', 'طبوغرافي ومسير مسارات الطرق'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: المسح الطبوغرافي بـ Station Totale',
        duration: '1 - 8 أشهر',
        description: 'أخذ النقاط الأرضية، ميزان القامة، وحساب الإحداثيات XYZ.',
        practicalTask: 'مسح طبوغرافي لقطعة أرض طولها 1 كلم وتحديد مستويات الارتفاع.',
        skillsAcquired: ['استخدام Station Totale', 'العمل بـ Niveau optique', 'تصدير النقاط للحاسوب']
      },
      {
        step: 2,
        title: 'المرحلة 2: الحسابات والهندسة بـ Covadis',
        duration: '8 - 20 شهراً',
        description: 'رسم المقاطع الطولية والعرضية (Profil en long/travers) وحساب الحفر والردم.',
        practicalTask: 'تصميم مسار طريق مسفلت بطول 2 كلم ببرنامج Covadis وحساب الحجم.',
        skillsAcquired: ['الرسم بـ Covadis & Civil 3D', 'حساب كميات الحفر والردم', 'إعداد ملفات التنفيذ']
      },
      {
        step: 3,
        title: 'المرحلة 3: الإشراف على التعبيد والمنشآت الفنية',
        duration: '20 - 30 شهراً',
        description: 'متابعة دك طبقات الطريق، وضع الإسفلت (Enrobé)، وصب أساسات الجسور.',
        practicalTask: 'الإشراف على تعبيد مقطع طريق سيار واختبار كثافة الإسفلت.',
        skillsAcquired: ['متابعة وضع Enrobé', 'الإشراف على أساسات الجسور', 'استلام ورشات الأشغال الكبرى']
      }
    ]
  },
  {
    id: 'interior_architecture_bts',
    title: 'الهندسة المعمارية الداخلية وتصميم المساحات (Architecture d\'Intérieur)',
    category: 'بناء وتزيين معماري',
    level: 'شهادة تقني سامي (BTS / ش.ت.س)',
    avgSalary: '70,000 - 180,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الثالثة ثانوي وخريجون (3 ثانوي)'],
    levelAdvice: 'تصميم المخططات ثلاثية الأبعاد 3D ببرامج AutoCAD & 3ds Max، توزيع الإضاءة، واختيار الخامات الراقية.',
    diplomaType: 'شهادة تقني سامي (BTS / ش.ت.س)',
    trainingDuration: '30 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'تنسيق المساحات الداخلية للمنازل والمحلات، توزيع الإضاءة، تصميم الأسقف المعلقة (Placo plâtre)، وإخراج الصور 3D الواقعية.',
    keyTools: ['AutoCAD', '3ds Max', 'V-Ray / Corona', 'Photoshop'],
    fieldEquipment: [
      'حاسوب متطور مخصص للإخراج الهندسي 3D (PC Workstation RTX 4070/4080)',
      'شاشة عرض ألوان دقيقة ومقياس الإضاءة (Écran IPS & Luxmètre)',
      'عينة الخامات والمواد الديكورية (Mallette d\'échantillons matériaux)'
    ],
    requiredLanguages: ['مصطلحات الهندسة الداخلية (Aménagement, Rendu 3D, Éclairage, Matériaux, Placoplâtre, Zonnage)'],
    softSkillsAndBusiness: ['الذوق التجميلي الرفيع والقدرة على إقناع الزبون بالصور 3D', 'إعداد الميزانيات الدقيقة واختيار المواد الفاخرة'],
    targetJobs: ['مصمم معماري داخلي بمكاتب الدراسات والمهندسين', 'مستشار ديكور وتنسيق مساحات بالمحلات الكبرى', 'صاحب مكتب تصميم هندسي حر'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: رسم المخططات والتوزيع الفضائي',
        duration: '1 - 8 أشهر',
        description: 'رسم مخططات 2D بـ AutoCAD، توزيع الأثاث ومنافذ الكهرباء والإضاءة.',
        practicalTask: 'رسم مخطط 2D لشقة F4 مع توزيع الأثاث والإضاءة الدقيقة.',
        skillsAcquired: ['إتقان الرسم الهندسي بـ AutoCAD', 'دراسة مقاييس الأثاث Ergonomie', 'توزيع شبكة الإضاءة']
      },
      {
        step: 2,
        title: 'المرحلة 2: النمذجة 3D والإخراج الواقعي (Rendu)',
        duration: '8 - 20 شهراً',
        description: 'بناء النموذج 3D بـ 3ds Max / SketchUp، وضع المواد والإضاءة بـ V-Ray.',
        practicalTask: 'إخراج صور 3D واقعية لصالون عصري بمواد خشبية وإضاءة مخفية.',
        skillsAcquired: ['النمذجة 3D بـ 3ds Max', 'تطبيق الإضاءة بـ V-Ray/Corona', 'إخراج الصور الواقعية Rendu']
      },
      {
        step: 3,
        title: 'المرحلة 3: الإشراف الميداني وتنسيق الورشة',
        duration: '20 - 30 شهراً',
        description: 'متابعة عمال البلاط والطلاء والـ Placo في الميدان لتطابق التصميم.',
        practicalTask: 'الإشراف الميداني على تجهيز مطعم أو محل تجاري حتى التسليم.',
        skillsAcquired: ['متابعة الحرفيين بالورشة', 'مطابقة الواقع مع الـ 3D', 'تسليم المشاريع المعمارية']
      }
    ]
  },
  {
    id: 'industrial_chemistry_bts',
    title: 'الكيمياء الصناعية والتسامي التحويلي (Chimie Industrielle)',
    category: 'صناعة ميكانيكية ومعدنية',
    level: 'شهادة تقني سامي (BTS / ش.ت.س)',
    avgSalary: '70,000 - 185,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الثالثة ثانوي وخريجون (3 ثانوي)'],
    levelAdvice: 'متابعة التفاعلات الكيميائية في مصانع البلاستيك، المنظفات، الدهانات، ومصافي البترول والغاز.',
    diplomaType: 'شهادة تقني سامي (BTS / ش.ت.س)',
    trainingDuration: '30 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'متابعة مفاعلات التقطير والتسامي، ضبط تركيز المحاليل، مراقبة أنظمة التصفية، والتحكم في جودة المنتجات الكيميائية.',
    keyTools: ['Réacteur chimique', 'Spectrophotomètre', 'Colonne de distillation', 'Chromatographie'],
    fieldEquipment: [
      'جهاز قياس الأطياف الضوئية والتركيز (Spectrophotomètre UV-Visible)',
      'عمود التقطير المكتبي والمفاعلات (Colonne de distillation & Réacteur)',
      'طقم أجهزة الوقاية والأقنعة الكيميائية (Masque cartouche & Équipement sécurité)'
    ],
    requiredLanguages: ['مصطلحات الكيمياء (Distillation, Réacteur, pH, Titrage, Polymère, Solution, Viscosité)'],
    softSkillsAndBusiness: ['الالتزام الصارم بشروط السلامة الكيميائية لمنع الحوادث', 'تحليل النتائج المخبرية وضبط خطوط الإنتاج'],
    targetJobs: ['تقني سامي في الكيمياء بمصافي البترول والغاز (SONATRACH)', 'مراقب خطوط إنتاج بمصانع البلاستيك والدهانات والمنظفات', 'مخبري تحاليل كيميائية صناعية'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: تحضير المحاليل والمعايرة المخبرية',
        duration: '1 - 8 أشهر',
        description: 'تحضير المحاليل ذات التراكيز المضبوطة وإجراء المعايرة (Titrage).',
        practicalTask: 'تحضير ومعايرة محلول كيميائي صناعي بدقة متناهية بالمخبر.',
        skillsAcquired: ['حساب التراكيز والمولارية', 'إجراء التجميع والمعايرة Titrage', 'الوقاية من المواد الكيميائية']
      },
      {
        step: 2,
        title: 'المرحلة 2: تشغيل مفاعلات التقطير والتسامي',
        duration: '8 - 20 شهراً',
        description: 'متابعة مفاعلات التفاعل والتقطير التجزيئي (Distillation) وضغط الغازات.',
        practicalTask: 'تشغيل عمود تقطير يفصل مركبين كيميائيين بنسبة نقاوة 95%.',
        skillsAcquired: ['تشغيل أعمدة التقطير', 'متابعة الحرارة والضغط بالـ Réacteur', 'أخذ عينات الإنتاج']
      },
      {
        step: 3,
        title: 'المرحلة 3: ضبط الجودة والسلامة الكيميائية',
        duration: '20 - 30 شهراً',
        description: 'قياس اللزوجة والنقاوة بـ Spectrophotomètre وإدارة السلامة بالمصنع.',
        practicalTask: 'إدارة مخبر تحليل دفعة إنتاج دهانات وإعتماد جاهزيتها للتسويق.',
        skillsAcquired: ['استخدام Spectrophotomètre', 'إدارة السلامة الكيميائية HSE', 'مراقبة خطوط الإنتاج الكبرى']
      }
    ]
  },
  {
    id: 'automation_regulation_bts',
    title: 'التحكم الآلي والضبط الصناعي (Automatisme & Régulation)',
    category: 'كهرباء وإلكترونيك',
    level: 'شهادة تقني سامي (BTS / ش.ت.س)',
    avgSalary: '80,000 - 210,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الثالثة ثانوي وخريجون (3 ثانوي)'],
    levelAdvice: 'برمجة الممتلكات الآلية PLC (Siemens S7-1200/1500)، الحساسات والمحركات الصناعية وأنظمة الشاشات SCADA.',
    diplomaType: 'شهادة تقني سامي (BTS / ش.ت.س)',
    trainingDuration: '30 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'برمجة المتحكمات الآلية (PLC Siemens / Schneider)، توصيل الحساسات والمشغلات الآلية، وبناء شاشات المراقبة HMI/SCADA.',
    keyTools: ['Siemens TIA Portal', 'PLC S7-1200', 'WinCC SCADA', 'Variateur de vitesse'],
    fieldEquipment: [
      'حقيبة التجارب البرمجية للمتحكم الآلي (Malle didactique PLC Siemens S7-1200)',
      'شاشة التفاعل الصناعية والـ Variateur (Écran HMI KTP700 & Variateur Schneider)',
      'جهاز معايرة الحساسات التماثلية (Générateur de signal 4-20mA / 0-10V)'
    ],
    requiredLanguages: ['مصطلحات الأتمتة (PLC, LADDER, TIA Portal, HMI, SCADA, Capteur, Actionneur, PID)'],
    softSkillsAndBusiness: ['التحليل البرمجي والمنطقي واستكشاف عيوب الأتمتة', 'تحديث الأسطول الآلي بالمصانع لتوفير الطاقة والوقت'],
    targetJobs: ['تقني سامي في الأتمتة والضبط بمصانع سوناطراك والشركات الكبرى', 'مطور برامج PLC وشاشات HMI بالخطوط الإنتاجية', 'فني صيانة الأنظمة الآلية والروبوتات'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: برمجة PLC بلغة LADDER بـ TIA Portal',
        duration: '1 - 8 أشهر',
        description: 'برمجة المتحكم الآلي Siemens S7-1200 وتوصيل الحساسات الرقمية.',
        practicalTask: 'برمجة خط نقل علب آلي يحتوي 3 حساسات ومحرك بشرائح LADDER.',
        skillsAcquired: ['البرمجة بـ TIA Portal (LADDER)', 'توصيل Capteurs & Actionneurs', 'اختبار البرامج بـ PLCSIM']
      },
      {
        step: 2,
        title: 'المرحلة 2: الإشارات التماثلية ومبدلات السرعة',
        duration: '8 - 20 شهراً',
        description: 'معالجة إشارات 4-20mA (حرارة، ضغط)، وتوصيل مبدل السرعة (Variateur).',
        practicalTask: 'برمجة نظام ضبط مستوى سائل بخزان باستعمال حساس تماثلي ومبدل سرعة.',
        skillsAcquired: ['معالجة الإشارات التماثلية Analogique', 'ضبط Variateur de vitesse', 'تطبيق تنظيم PID']
      },
      {
        step: 3,
        title: 'المرحلة 3: تصميم شاشات HMI ونظام SCADA',
        duration: '20 - 30 شهراً',
        description: 'بناء واجهات التحكم الملموسة HMI ونظام المراقبة عن بعد SCADA.',
        practicalTask: 'تصميم نظام مراقبة SCADA متكامل لمصنع يعرض الإنتاج والأعطال حياً.',
        skillsAcquired: ['تصميم واجهات HMI بـ WinCC', 'ربط شبكات الصناعة PROFINET', 'صيانة وأتمتة خطوط المصانع']
      }
    ]
  },
  {
    id: 'hotellerie_management_bts',
    title: 'الفندقة وتسيير المؤسسات الفندقية (Hôtellerie)',
    category: 'فندقة وإطعام',
    level: 'شهادة تقني سامي (BTS / ش.ت.س)',
    avgSalary: '65,000 - 165,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الثالثة ثانوي وخريجون (3 ثانوي)'],
    levelAdvice: 'إدارة الاستقبال، الحجوزات الفندقية، العلاقات العامة، وتسيير الأطقم بالفنادق والمركبات السياحية.',
    diplomaType: 'شهادة تقني سامي (BTS / ش.ت.س)',
    trainingDuration: '30 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'إدارة نظام الحجوزات الفندقية (PMS)، تنظيم قسم الاستقبال والغرف، إدارة علاقات الزبائن والتسويق الفندقي.',
    keyTools: ['Software PMS Opera', 'Gestion hôtelière', 'Réservation en ligne', 'Excel Hôtellerie'],
    fieldEquipment: [
      'حاسوب إداري مجهز بنظام الحجوزات الفندقية العالمي (PC Bureau & PMS Opera/Fidelio)',
      'موزع البطاقات المغناطيسية للغرف (Encodeur de cartes magnétiques hôtelières)'
    ],
    requiredLanguages: ['مصطلحات الفندقة (Check-in, Check-out, PMS, Rooming list, Housekeeping, Yield management)'],
    softSkillsAndBusiness: ['اللباقة العالية والدبلوماسية وحسن حل المشكلات', 'إدارة الحجوزات وتعظيم إيرادات الغرف (Yield Management)'],
    targetJobs: ['مدير استقبال (Chef de réception) بالفنادق والمركبات السياحية', 'مسؤول حجوزات وعلاقات زبائن بالمركبات', 'مسير فندق أو إقامة سياحية'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: إجراءات الاستقبال والحجز بـ PMS',
        duration: '1 - 8 أشهر',
        description: 'إجراءات Check-in / Check-out وتأكيد الحجوزات على نظام PMS.',
        practicalTask: 'إجراء استقبال تسجيل 20 نزيلاً وتوزيع الغرف وطباعة الفواتير.',
        skillsAcquired: ['إتقان العمل بـ PMS Opera', 'إجراءات Check-in & Check-out', 'إدارة صندوق الاستقبال']
      },
      {
        step: 2,
        title: 'المرحلة 2: إشراف الغرف والمطاعم الفندقية',
        duration: '8 - 20 شهراً',
        description: 'التنسيق مع قسم النظافة (Housekeeping) وقسم الإطعام والمشتريات.',
        practicalTask: 'مراقبة وتجهيز 30 غرفة فندقية لاستقبال وفد رسمي.',
        skillsAcquired: ['إدارة قسم Housekeeping', 'التنسيق مع المطعم الفندقي', 'حل شكاوى النزلاء']
      },
      {
        step: 3,
        title: 'المرحلة 3: الإدارة وتسويق الفندق',
        duration: '20 - 30 شهراً',
        description: 'حساب نسبة الإشغال (Taux d\'occupation)، التسويق الرقمي، وإدارة الفريق.',
        practicalTask: 'إعداد خطة تسويق موسمية لرفع إشغال الفندق في فصل الصيف.',
        skillsAcquired: ['حساب Taux d\'occupation', 'إدارة التسويق الفندقي', 'تسيير المؤسسات السياحية']
      }
    ]
  },
  {
    id: 'culinary_art_gastronomy_bts',
    title: 'فن الطبخ والطهي الرفيع (Art Culinaire & Gastronomie)',
    category: 'فندقة وإطعام',
    level: 'شهادة تقني سامي (BTS / ش.ت.س)',
    avgSalary: '70,000 - 190,000 دج/شهرياً',
    suitableEducationLevels: ['مستوى الثالثة ثانوي وخريجون (3 ثانوي)'],
    levelAdvice: 'إتقان المطبخ الجزائري والعالمي، ابتكار الوصفات، إدارة طاقم المطبخ (Chef de Cuisine) وحساب التكاليف.',
    diplomaType: 'شهادة تقني سامي (BTS / ش.ت.س)',
    trainingDuration: '30 شهراً',
    registrationLink: 'https://erp.takwin.dz',
    description: 'إعداد الأطباق الراقية، ابتكار قائمة الطعام (Menu)، التقديم الجمالي للأطباق (Dressage)، وحساب التكلفة المباشرة (Food Cost).',
    keyTools: ['Four à vapeur pro', 'Thermo-plongeur sous-vide', 'Couteaux de précision', 'Fiche technique'],
    fieldEquipment: [
      'جهاز الطهي البطيء تحت التفريغ (Thermo-plongeur Sous-vide & Machine sous-vide)',
      'طقم سكاكين الطهي الاحترافي الياباني (Couteaux de précision japonais)',
      'أفران ومواقد الطهي الراقية (Four à vapeur mixte & Plaques induction)'
    ],
    requiredLanguages: ['مصطلحات الطهي الرفيع (Gastronomie, Sous-vide, Dressage, Food cost, Fiche technique, Brigades)'],
    softSkillsAndBusiness: ['القيادة العالية لطاقم المطبخ والابتكار الذوقي', 'حساب التكلفة الفردية للأطباق (Food Cost Optimization)'],
    targetJobs: ['رئيس مطبخ (Chef de cuisine) بالفنادق الفخمة والمطاعم الراقية', 'مستشار وابتكار قوائم طعام بالمؤسسات السياحية', 'صاحب مطعم راقي وخبير طهي'],
    roadmap: [
      {
        step: 1,
        title: 'المرحلة 1: تقنيات الطهي والتقديم الرفيع (Dressage)',
        duration: '1 - 8 أشهر',
        description: 'إتقان الطهي بالبخار والشواء والتقديم الجمالي الحديث في الصحون.',
        practicalTask: 'إعداد وتقديم 5 أطباق راقية بتقنيات سكب وتنسيق ألوان احترافية.',
        skillsAcquired: ['إتقان تقنيات الطهي المختلفة', 'التقديم الجمالي Dressage', 'إعداد البطاقات التقنية Fiche technique']
      },
      {
        step: 2,
        title: 'المرحلة 2: الطهي الحديث تحت التفريغ (Sous-vide)',
        duration: '8 - 20 شهراً',
        description: 'استخدام Thermo-plongeur للطهي المنخفض الحرارة للمأكولات البحرية واللحوم.',
        practicalTask: 'طهي قطعة لحم بـ Sous-vide لمدة 12 ساعة بنتيجة طراوة مثالية.',
        skillsAcquired: ['الطهي تحت التفريغ Sous-vide', 'حفظ النكهات الطبيعية', 'إتقان الأطباق العالمية']
      },
      {
        step: 3,
        title: 'المرحلة 3: قيادة الطاقم وحساب التكاليف (Food Cost)',
        duration: '20 - 30 شهراً',
        description: 'إدارة فريق المطبخ (Brigade)، صياغة القوائم، وتخفيض الهدر المالي.',
        practicalTask: 'إدارة مطبخ فندق كامل لإنجاز مأدبة عشاء لـ 200 شخص بحساب ربحي.',
        skillsAcquired: ['قيادة طاقم المطبخ Brigade', 'حساب Food Cost بدقة', 'إدارة قائمة الطعام Menu']
      }
    ]
  }
];
