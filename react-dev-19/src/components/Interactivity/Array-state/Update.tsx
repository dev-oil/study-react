import React from 'react';
import { useState } from 'react';

type InitialList = {
  id: number;
  title: string;
  seen: boolean;
};

const initialList: InitialList[] = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: false },
];

export const Update = () => {
  const [myList, setMyList] = useState<InitialList[]>(initialList);
  const [yourList, setYourList] = useState<InitialList[]>(initialList);

  const handleToggleMyList = (artworkId: number, nextSeen: boolean) => {
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) return { ...artwork, seen: nextSeen };
        return artwork;
      })
    );
  };

  const handleToggleYourList = (artworkId: number, nextSeen: boolean) => {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) return { ...artwork, seen: nextSeen };
        return artwork;
      })
    );
  };

  return (
    <article className='article'>
      <h3 className='article-title'>배열 내 항목 업데이트하기</h3>
      <h4>Art Bucket List</h4>
      <h5>My list of art to see:</h5>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </article>
  );
};

function ItemList({
  artworks,
  onToggle,
}: {
  artworks: InitialList[];
  onToggle: (artworkId: number, nextSeen: boolean) => void;
}) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type='checkbox'
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
