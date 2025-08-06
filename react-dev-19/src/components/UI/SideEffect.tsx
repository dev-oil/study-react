// let guest: number = 0;

// const Cup = () => {
//   // 나쁜 지점: 이미 존재했던 변수를 변경하고 있습니다!
//   guest = guest + 1;

//   return <h2>Tea cup for guest #{guest}</h2>;
// };

// export const SideEffect = () => {
//   return (
//     <article className='article'>
//       <Cup />
//       <Cup />
//       <Cup />
//     </article>
//   );
// };

// 고칠 수 있다면?
type CupProps = {
  guest: number;
};

// 오직 guest 프로퍼티에만 의존하기 때문에 컴포넌트는 순수함
const Cup = ({ guest }: CupProps) => {
  return <li>Tea cup for guest #{guest}</li>;
};

export const SideEffect = () => {
  return (
    <article className='article'>
      <h2>사이드 이펙트</h2>
      <p className='mb-2'>오직 guest 프로퍼티에만 의존, 컴포넌트는 순수</p>
      <ul>
        <Cup guest={1} />
        <Cup guest={7} />
        <Cup guest={0} />
      </ul>
    </article>
  );
};
