import { useState } from 'react';

type InitialList = {
  id: number;
  title: string;
};

const initialList: InitialList[] = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export const Copy = () => {
  const [list, setList] = useState(initialList);

  const handleClick = () => {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  };

  return (
    <article className='article'>
      <h3 className='article-title'>배열 복사하기</h3>
      <button onClick={handleClick}>Reverse</button>
      <ul>
        {list.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </article>
  );
};
