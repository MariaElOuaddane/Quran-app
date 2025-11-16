import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function QuranMain() {
  const [lang, setLang] = useState('ar');

  return (
    <section className="quran-main-container">
      <h1 className="quran-main-title">
        {lang === 'ar' ? 'بسم الله الرحمن الرحيم, مرحبًا بك في تطبيق القرآن الكريم' : 'In the name of Allah, the Most Merciful, the Most Compassionate, Welcome to the Quran App'}
      </h1>

      <p className="quran-main-text">
        {lang === 'ar'
          ? 'هذا التطبيق صُمم ليكون وسيلتك لقراءة القرآن الكريم بسهولة وراحة، ولتقربك من كلام الله عز وجل يوميًا. يمكنك تصفح سور القرآن الكريم واختيار أي سورة لعرض جميع آياتها باللغة العربية مع أرقامها لتسهيل التلاوة والتدبر'
          : 'This app is designed to help you read the Holy Quran easily and comfortably, bringing you closer to the words of Allah every day. You can browse the Surahs of the Quran and select any Surah to view all its verses in Arabic with numbers, making recitation and reflection simple'}
      </p>

      <p className="quran-main-text">
        {lang === 'ar'
          ? 'نسأل الله أن يجعل هذا التطبيق سببًا في زيادة علمك، وتثبيت قلبك على القرآن، وأن يضاعف لك الأجر والثواب على كل حرف تقرأه. اجعل التلاوة عادة يومية، واغتنم كل لحظة للاقتراب من الله تعالى'
          : 'We ask Allah to make this app a means of increasing your knowledge, strengthening your heart upon the Quran, and multiplying the reward for every letter you read. Make recitation a daily habit, and seize every moment to draw closer to Allah'}
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
