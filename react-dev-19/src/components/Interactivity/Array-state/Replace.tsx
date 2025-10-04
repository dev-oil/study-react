import { useState } from 'react';

const initialCounters: number[] = [0, 0, 0];

export const Replace = () => {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrementClick = (index: number) => {
    const nextCounters = counters.map((c, i) => {
      return i === index ? c + 1 : c;
    });
    setCounters(nextCounters);
  };

  return (
    <article className='article'>
      <h3 className='article-title'>배열 내 항목 교체하기</h3>
      <ul>
        {counters.map((counter, i) => (
          <li key={i} className='mb-3'>
            {counter}
            <button
              onClick={() => {
                handleIncrementClick(i);
              }}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};
