import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function QuranMain() {
  const [lang, setLang] = useState('ar');

  return (
    <section className="quran-main-container">
      <h1 className="quran-main-title">
        {lang === 'ar' ? 'مرحبا بكم في تطبيق القرآن الكريم' : 'Welcome to the Quran App'}
      </h1>

      <p className="quran-main-text">
        {lang === 'ar'
          ? 'هذا التطبيق يتيح لك تصفح سور القرآن الكريم وقراءة كل الآيات بسهولة ووضوح.'
          : 'This app allows you to browse the Surahs of the Quran and read all verses easily and clearly.'}
      </p>

      <p className="quran-main-text">
        {lang === 'ar'
          ? 'يمكنك اختيار أي سورة من قائمة السور لعرض جميع آياتها باللغة العربية مع رقم كل آية.'
          : 'You can select any Surah from the list to display all its verses in Arabic along with each verse number.'}
      </p>

      <p className="quran-main-text">
        {lang === 'ar'
          ? 'الهدف من هذا التطبيق هو تسهيل قراءة القرآن الكريم للجميع سواء كنت طالب علم أو محب للتلاوة اليومية.'
          : 'The goal of this app is to make reading the Quran easier for everyone, whether you are a student of knowledge or a daily recitation enthusiast.'}
      </p>

      <p className="quran-main-text">
        {lang === 'ar'
          ? 'تذكر دائماً أن قراءة القرآن من أفضل العبادات وأن كل حرف له أجر كبير بإذن الله.'
          : 'Always remember that reading the Quran is one of the best acts of worship, and every letter carries great reward, God willing.'}
      </p>

      <Link className="link-main" to="/Quran">
        {lang === 'ar' ? 'اذهب إلى قائمة السور' : 'Go to the Surah List'}
      </Link>

      <p style={{ marginTop: '15px', textAlign: 'center' }}>
        <strong>{lang === 'ar' ? 'اللغة:' : 'Language:'}</strong>{' '}
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="ar">العربية</option>
          <option value="en">English</option>
        </select>
      </p>
    </section>
  );
}

export default QuranMain;
