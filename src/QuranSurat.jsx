import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function QuranSurat() {
  const [Surat, setSurat] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredSurat, setFilterSurat] = useState([]);

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/quran/quran-uthmani')
      .then((res) => res.json())
      .then((json) => {
        setSurat(json.data.surahs);
        setFilterSurat(json.data.surahs);
      })
      .catch((er) => console.log('error! :', er));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = Surat.filter(
      (s) =>
        s.name.includes(value) ||
        s.englishName.toLowerCase().includes(value.toLowerCase())
    );

    setFilterSurat(filtered);
  };

  return (
    <div>
      {Surat.length === 0 && <p>Loading...</p>}

      <input
        type='search'
        placeholder='Search Surah'
        value={search}
        onChange={handleSearch}
      />

      <ul>
        {filteredSurat.map((s) => (
          <Link className='link' key={s.number} to={`/Quran/${s.number}`}>
            <li>
              {s.number}. {s.name} , {s.englishName}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default QuranSurat;
