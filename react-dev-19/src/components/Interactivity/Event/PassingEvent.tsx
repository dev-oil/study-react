import type { ReactNode } from 'react';

type PlayButtonProps = {
  movieName: string;
};

type ButtonProps<T = ReactNode> = {
  onClick: () => void;
  children: T;
};

const Button = <T extends ReactNode>({ onClick, children }: ButtonProps<T>) => {
  return <button onClick={onClick}>{children}</button>;
};

const PlayButton = ({ movieName }: PlayButtonProps) => {
  const handlePlayClick = () => {
    alert(`Playing ${movieName!}`);
  };

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
};

const UploadButton = () => {
  return <Button onClick={() => alert('Uploading!')}>Upload Image</Button>;
};

export const PassingEvent = () => {
  return (
    <section className='section'>
      <strong>이벤트 핸들러 prop 전달</strong>
      <div>
        <PlayButton movieName="Kiki's Delivery Service" />
        <UploadButton />
      </div>
    </section>
  );
};
