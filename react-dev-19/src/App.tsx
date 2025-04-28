import { useState } from 'react';

type MyButtonProps = {
  count: number;
  onClick: () => void;
};

const MyButton = ({ count, onClick }: MyButtonProps) => {
  return <button onClick={onClick}>Clicked {count} times</button>;
};

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
};
