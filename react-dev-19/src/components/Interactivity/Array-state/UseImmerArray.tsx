import { useImmer } from 'use-immer';

// Immer = Proxy로 변경 감지 + Copy-on-Write + 구조적 공유
// 참조 불변성 유지 되게 설계되어있음

type InitialList = {
  id: number;
  title: string;
  seen: boolean;
};

const initialList: InitialList[] = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export const UseImmerArray = () => {
  const [myList, updateMyList] = useImmer(initialList);
  const [yourList, updateYourList] = useImmer(initialList);

  const handleToggleMyList = (id: number, nextSeen: boolean) => {
    updateMyList((draft) => {
      const artwork = draft.find((a) => a.id === id);
      if (artwork) artwork.seen = nextSeen; // immer 사용 시 객체 수정 가능
    });
  };

  const handleToggleYourList = (artworkId: number, nextSeen: boolean) => {
    updateYourList((draft) => {
      const artwork = draft.find((a) => a.id === artworkId);
      if (artwork) artwork.seen = nextSeen; // immer 사용 시 객체 수정 가능
    });
  };

  return (
    <article className='article'>
      <h3 className='article-title'>useImmerArray</h3>
      <h4>Art Bucket List</h4>
      <h5>My list of art to see:</h5>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h5>Your list of art to see:</h5>
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
