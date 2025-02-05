// useMemo는 리렌더링과 재계산을 줄이기 위해 쓰고
// 💡 useCallback은 리렌더링만 줄이기 위해 쓴다

import React, { useState, useCallback } from 'react';

// 자식 컴포넌트
const Child = React.memo(({ onClick }) => {
  console.log('👶 Child 컴포넌트 렌더링!');
  return <button onClick={onClick}>자식 버튼</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // useCallback 사용 (의존성 배열이 없으면 최초 1회만 생성)
  const handleClick = useCallback(() => {
    console.log('버튼 클릭!');
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count 증가</button>
      <button onClick={() => setOther(other + 1)}>Other 증가</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;
