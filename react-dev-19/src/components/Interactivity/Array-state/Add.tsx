import { useState } from 'react';

const nextId = 0;

export const Add = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState<{ id: number; name: string }[]>([]);

  return (
    <article className='article'>
      <h3 className='article-title'>배열에 항목 추가하기</h3>

      <h4>Inspiring sculptors:</h4>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId + 1, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </article>
  );
};
