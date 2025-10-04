import { useState } from 'react';

type InitialShapes = {
  id: number;
  type: 'circle' | 'square';
  x: number;
  y: number;
};

const initialShapes: InitialShapes[] = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export const Map = () => {
  const [shapes, setShapes] = useState<InitialShapes[]>(initialShapes);

  const handleClick = () => {
    const nextShapes = shapes.map((shape) => {
      return shape.type === 'square' ? shape : { ...shape, y: shape.y + 50 };
    });

    setShapes(nextShapes);
  };

  return (
    <article className='article'>
      <h3 className='article-title'>배열 변환하기</h3>
      <button onClick={handleClick}>Move circles down!</button>
      <div className='relative w-full h-[200px] overflow-hidden'>
        {shapes.map((shape) => (
          <div
            style={{
              background: 'purple',
              position: 'absolute',
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === 'circle' ? '50%' : '',
              width: 20,
              height: 20,
            }}
          />
        ))}
      </div>
    </article>
  );
};
