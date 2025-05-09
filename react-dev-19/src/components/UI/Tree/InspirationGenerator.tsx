import * as React from 'react';
import inspirations from './inspirations';
import { FancyText } from './FancyText';
import { Color } from './Color';

type InspirationGeneratorProps = {
  children?: React.ReactNode;
};

export const InspirationGenerator = ({
  children,
}: InspirationGeneratorProps) => {
  const [index, setIndex] = React.useState<number>(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <>
      <p>Your inspirational {inspiration.type} is:</p>
      {inspiration.type === 'quote' ? (
        <FancyText text={inspiration.value} />
      ) : (
        <Color value={inspiration.value} />
      )}

      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
};
