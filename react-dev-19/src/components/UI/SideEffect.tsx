let guest: number = 0;

const Cup = () => {
  // 나쁜 지점: 이미 존재했던 변수를 변경하고 있습니다!
  guest = guest + 1;

  return <h2>Tea cup for guest #{guest}</h2>;
};

export const SideEffect = () => {
  return (
    <section className='section'>
      <Cup />
      <Cup />
      <Cup />
    </section>
  );
};
