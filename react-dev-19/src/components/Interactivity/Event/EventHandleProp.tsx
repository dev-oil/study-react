import type { ReactNode } from 'react';

type ButtonProps<T = ReactNode> = {
  onSmash: () => void;
  children: T;
};

const Button = <T extends ReactNode>({ onSmash, children }: ButtonProps<T>) => {
  return <button onClick={onSmash}>{children}</button>;
};

export const EventHandleProp = () => {
  return (
    // onClick 이벤트 핸들러 prop 의 이름을 내가 지정할 수 있음
    <article className='article'>
      <strong>onClick 이벤트 핸들러 prop 이름 마음대로 명명 가능</strong>
      <div>
        <Button onSmash={() => alert('Playing!')}>Play Movie</Button>
        <Button onSmash={() => alert('Uploading!')}>Upload Image</Button>
      </div>
    </article>
  );
};
