type CupProps = {
  guest: number;
};

const Cup = ({ guest }: CupProps) => {
  return <h2>Tea cup for guest #{guest}</h2>;
};

export const Location = () => {
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
};
