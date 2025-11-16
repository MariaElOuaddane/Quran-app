import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Surat() {
  const { id } = useParams(); // actual Surah number
  const [surah, setSurah] = useState(null);
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    const translation = lang === 'ar' ? 'quran-uthmani' : 'en.asad';
    
    fetch(`https://api.alquran.cloud/v1/surah/${id}/${translation}`)
      .then(res => res.json())
      .then(json => setSurah(json.data))
      .catch(err => console.log(err));
  }, [id, lang]);

  const revelationTypeLang = {
    Meccan: 'مكية',
    Medinan: 'مدنية'
  };

  if (!surah) return <p>Loading...</p>;

  return (
    <section className='surat-section' style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: 3 }}>
        <h3 className="quran-font">{lang === 'ar' ? surah.name : surah.englishName}</h3>
        <h4>عدد الآيات: <strong>{surah.numberOfAyahs}</strong></h4>
        <p className="quran-font">
          {surah.ayahs.map(a => (
            <span key={a.numberInSurah}>
              {a.text}{" "} <strong>({a.numberInSurah})</strong>{' '} 
            </span>
          ))}
        </p>
      </div>
      
      <aside style={{ flex: 1, padding: '15px', background: 'rgba(138,43,226,0.05)', borderRadius: '10px' }}>
        <h4>{lang === 'ar' ? 'معلومات السورة' : 'Surah Info'}</h4>
        <p><strong>{lang === 'ar' ? 'رقم السورة' : 'Surah Number'}:</strong> {surah.number}</p>
        <p><strong>{lang === 'ar' ? 'عدد الآيات' : 'Number of Ayahs'}:</strong> {surah.numberOfAyahs}</p>
        <p><strong>{lang === 'ar' ? 'مكان النزول' : 'Revelation Type'}:</strong> {lang === 'ar'? revelationTypeLang[surah.revelationType] : surah.revelationType}</p>
        <p>
          <strong>{lang === 'ar' ? 'اللغة' : 'Language'}:</strong> 
          <select value={lang} onChange={(e)=> setLang(e.target.value)}>
            <option value='ar'>Arabic</option>
            <option value='en'>English</option>
          </select>
        </p>
      </aside>
    </section>
  );
}

export default Surat;
