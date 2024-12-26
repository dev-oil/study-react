import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  const [count, setCount] = useState(0);

  const handleTotalCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div className='container'>
        <div className='banner'>
          Total Count: {count} {count > 10 ? '🔥' : '🧊'}
        </div>
        <div className='counters'>
          <Counter totalCount={handleTotalCount} />
          <Counter totalCount={handleTotalCount} />
        </div>
      </div>
    </>
  );
}
