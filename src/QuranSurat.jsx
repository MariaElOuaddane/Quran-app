import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function QuranSurat() {
  const [Surat, setSurat] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredSurat, setFilterSurat] = useState([]);

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/quran/ar.alafasy')
      .then((res) => res.json())
      .then((json) => {
        setSurat(json.data.surahs);
        setFilterSurat(json.data.surahs); // Initialize filteredSurat
      })
      .catch((er) => console.log('error! :', er));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filtered = Surat.filter((s) =>
      s.name.includes(value) ||  s.englishName.toLowerCase().includes(value.toLowerCase())
    );
    setFilterSurat(filtered);
  };

  return (
    <div>
      {Surat.length === 0 && <p>Loading...</p>}

      <ul>
        <input
          type='search'
          placeholder='search'
          value={search}
          onChange={handleSearch}
        />
        {filteredSurat.map((s, index) => (
          <Link className='link' key={s.number} to={`/Quran/${index}`}>
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
