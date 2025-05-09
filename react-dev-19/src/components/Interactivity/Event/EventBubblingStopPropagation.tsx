import type { ReactNode } from 'react';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export const EventBubblingStopPropagation = () => {
  return (
    <section className='section'>
      <strong>버블링 멈춰!</strong>
      <div
        onClick={() => {
          alert('You clicked on the toolbar!');
        }}
      >
        <Button onClick={() => alert('Playing!')}>Play Movie</Button>
        <Button onClick={() => alert('Uploading!')}>Upload Image</Button>
      </div>
    </section>
  );
};
