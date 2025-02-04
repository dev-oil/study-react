import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = ({ number }) => {
  // 연산이 오래 걸리는 함수
  const slowFunction = (num) => {
    console.log('🛠️ 계산 중...');
    for (let i = 0; i < 1000000000; i++) {} // 일부러 연산 지연
    return num * 2;
  };

  // useMemo 적용: number 값이 바뀔 때만 계산
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  return <div>결과: {doubleNumber}</div>;
};

const App = () => {
  const [number, setNumber] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>Number 증가</button>
      <button onClick={() => setOther(other + 1)}>Other 증가</button>
      <ExpensiveCalculation number={number} />
    </div>
  );
};

export default App;
