import { useState } from 'react';

type InitialArtists = {
  id: number;
  name: string;
};

const initialArtists: InitialArtists[] = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

let nextId: number = initialArtists.length;

export const Slice = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);

  const handleClick = () => {
    const insertAt = 1; // 모든 인덱스가 될 수 있음.
    const nextArtists = [
      // 삽입 지점 이전 항목
      ...artists.slice(0, insertAt),
      // 새 항목
      { id: nextId++, name: name },
      // 삽입 지점 이후 항목
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName('');
  };

  return (
    <article className='article'>
      <h3 className='article-title'>배열에 항목 삽입하기</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </article>
  );
};
