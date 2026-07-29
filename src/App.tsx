import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'sans-serif', direction: 'rtl', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '15px', marginBottom: '20px' }}>
        <h1 style={{ color: '#34d399', fontSize: '24px', fontWeight: 'bold' }}>DzTech Mind 🇩🇿</h1>
        <div>
          <button 
            onClick={() => setActiveTab('home')} 
            style={{ background: activeTab === 'home' ? '#34d399' : '#1e293b', color: activeTab === 'home' ? '#0f172a' : '#f8fafc', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', marginLeft: '10px', fontWeight: 'bold' }}>
            الرئيسية
          </button>
          <button 
            onClick={() => setActiveTab('guide')} 
            style={{ background: activeTab === 'guide' ? '#34d399' : '#1e293b', color: activeTab === 'guide' ? '#0f172a' : '#f8fafc', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            دليل التوجيه
          </button>
        </div>
      </header>

      <main style={{ textAlign: 'center', marginTop: '50px' }}>
        {activeTab === 'home' ? (
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>مرحباً بك في منصة التوجيه الذكي</h2>
            <p style={{ color: '#94a3b8', fontSize: '16px' }}>منصتك الأولى لاختيار تخصصك الجامعي والمهني في الجزائر بكل سهولة.</p>
          </div>
        ) : (
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>قسم التوجيه والدراسة</h2>
            <p style={{ color: '#94a3b8', fontSize: '16px' }}>قريباً سيتم عرض قائمة التخصصات والمعدلات هنا.</p>
          </div>
        )}
      </main>
    </div>
  );
}

