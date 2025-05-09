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
    // onClick props 의 이름을 내가 지정할 수 있음
    <section className='section'>
      <Button onSmash={() => alert('Playing!')}>Play Movie</Button>
      <Button onSmash={() => alert('Uploading!')}>Upload Image</Button>
    </section>
  );
};
