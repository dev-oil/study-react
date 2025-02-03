import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

// 💡 Memo 를 쓴다면? count2가 안보이겠죵?
let count2 = 0;
export default function AppCounter(props) {
  count2++;
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <>
      <div className='container'>
        <div className='banner'>
          Total Count: {count} {count > 10 ? '🔥' : '🧊'}
          rendering count: {count2}
        </div>
        <div className='counters'>
          <Counter total={count} onClick={handleClick} />
          <Counter total={count} onClick={handleClick} />
        </div>
      </div>
    </>
  );
}
