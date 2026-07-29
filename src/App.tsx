import React, { useState } from 'react';

export default function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0f172a', 
      color: '#ffffff', 
      fontFamily: 'Arial, sans-serif', 
      direction: 'rtl', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#34d399', fontSize: '32px', marginBottom: '20px' }}>
        منصة DzTech Mind تعمل بنجاح 🚀
      </h1>
      <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', lineHeight: '1.6' }}>
        تم تخطي مشكلة الشاشة البيضاء بنجاح، التطبيق يعمل الآن بكفاءة وجاهز لتطويره خطوة بخطوة.
      </p>
    </div>
  );
}


