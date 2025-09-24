import { useState } from 'react';

export const Batches = () => {
  const [number, setNumber] = useState(0);

  return (
    <article className='article'>
      <h3 className='article-title'>배치(batch) 처리</h3>
      <ul>
        <li>
          1. 이전 세션에서 기억할 수 있듯이 각 렌더링의 state 값은 고정되어
          있으므로, 첫 번째 렌더링의 이벤트 핸들러의 number 값은 setNumber(1)을
          몇 번 호출하든 항상 0입니다.
        </li>
        <li>
          2. React는 state 업데이트를 하기 전에 이벤트 핸들러의 모든 코드가
          실행될 때까지 기다립니다. 이 때문에 리렌더링은 모든 setNumber() 호출이
          완료된 이후에만 일어납니다.
        </li>
      </ul>
      <div className='mt-4 flex gap-4 align-center'>
        <span className='text-gray-500 text-xl'>{number}</span>
        <button
          onClick={() => {
            setNumber(number + 1);
            setNumber(number + 1);
            setNumber(number + 1);
          }}
        >
          +3
        </button>
      </div>
    </article>
  );
};
