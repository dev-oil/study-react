// 💡 useMemo는 리렌더링과 재계산을 줄이기 위해 쓰고
// useCallback은 리렌더링만 줄이기 위해 쓴다

import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = ({ number }) => {
  // 연산이 오래 걸리는 함수
  const slowFunction = (num) => {
    console.log('🛠️ 계산 중...');
    for (let i = 0; i < 1000000000; i++) {} // 일부러 연산 지연
    return num * 2;
  };

  // 💡 Q. 해당 f 는 순수 함수인가요?
  // A. 아니다. 어떤 입력 값을 받았을 때 동일한 출력값이 나와야 하는데, 이부분은 입력값이 없으므로 예측할 수 없음.
  // const f = () => slowFunction(number);
  // const doubleNumber = useMemo(() => slowFunction(number), [number]);

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
