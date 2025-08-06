type CupProps = {
  guest: number;
};

const Cup = ({ guest }: CupProps) => {
  return <li>Tea cup for guest #{guest}</li>;
};

export const Location = () => {
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return (
    <article className='article'>
      <h2>지역 변경(Mutaion)</h2>
      <p className='mb-2'>
        지역 변경은 괜찮음. 컴포넌트 밖(모듈 스코프)의 객체를 렌더중에
        변경하거나, props/state(이전 렌더에서 온거)를 변경하거나 그런게 안됨
      </p>
      <ul>{cups}</ul>
    </article>
  );
};
