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

export const Delete = () => {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <article className='article'>
      <h3 className='article-title'>배열에 항목 제거하기</h3>
      <h4>inspiring sculptors: </h4>
      <ul>
        {artists.map((artist: InitialArtists) => (
          <li key={artist.id}>
            {artist.name}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};
