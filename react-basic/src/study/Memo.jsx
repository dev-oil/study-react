import React from 'react';

// 자식 컴포넌트 (props 변경되지 않으면 리렌더링 방지)
const Child = React.memo(({ count }) => {
  console.log('👶 Child 컴포넌트 렌더링!');
  return <div>Count: {count}</div>;
});

const Parent = () => {
  const [count, setCount] = React.useState(0);
  const [other, setOther] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count 증가</button>
      <button onClick={() => setOther(other + 1)}>Other 증가</button>
      <Child count={count} />
    </div>
  );
};

export default Parent;
