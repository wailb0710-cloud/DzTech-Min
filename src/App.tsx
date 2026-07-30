import React, { useState } from 'react';

export default function App() {
  const roadmap = [
    {
      step: 1,
      title: 'المرحلة 1: بناء الجدران بالآجر والباربان',
      duration: '3 - 1 أشهر',
      description: 'بناء جدران مستقيمة بالميزان والخيط',
      practicalTask: 'بناء 3 أمتار شاقولي متقن ودون ميلان',
      skillsAcquired: ['Truelle & Fil à plomb استخدام']
    },
    {
      step: 2,
      title: 'المرحلة 2: اللياسة والتلبيس (Crépissage)',
      duration: '6 - 3 أشهر',
      description: 'الطبقة الناعمة للتلبيس ومسح السطح بالمسطرة',
      practicalTask: 'الترميم كامل بالأسمنت والملس بالمسطرة الألومنيوم',
      skillsAcquired: ['تطبيق المرشة (Gobetis)']
    },
    {
      step: 3,
      title: 'المرحلة 3: القوالب والخرسانة المسلحة',
      duration: '6 أشهر',
      description: 'الأساطح والأسقف وصب الخرسانة المسلحة',
      practicalTask: 'الأساسي مع التسليح وتفريغ الهواء',
      skillsAcquired: ['صب', 'Coffrage', 'تركيب']
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', direction: 'rtl', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#38bdf8', fontSize: '2.5rem' }}>DzTech Mind</h1>
        <p style={{ color: '#94a3b8' }}>منصة التوجيه التكنولوجي والمهني في الجزائر</p>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ borderBottom: '2px solid #38bdf8', paddingBottom: '10px' }}>مراحل التكوين المهني</h2>
        {roadmap.map((item) => (
          <div key={item.step} style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px', marginBottom: '20px', border: '1px solid #334155' }}>
            <span style={{ backgroundColor: '#38bdf8', color: '#0f172a', padding: '4px 10px', borderRadius: '5px', fontWeight: 'bold' }}>
              المرحلة {item.step}
            </span>
            <h3 style={{ marginTop: '10px', color: '#f1f5f9' }}>{item.title}</h3>
            <p><strong>المدة الزمنية:</strong> {item.duration}</p>
            <p><strong>الوصف:</strong> {item.description}</p>
            <p><strong>التطبيق العملي:</strong> {item.practicalTask}</p>
          </div>
        ))}
      </main>
    </div>
  );
                 }
