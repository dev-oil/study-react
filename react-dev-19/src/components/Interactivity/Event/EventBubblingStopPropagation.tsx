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
      <strong>
        이벤트 버블링 멈춰! <code>e.stopPropagation()</code>
      </strong>
      <div
        className='Toolbar'
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
