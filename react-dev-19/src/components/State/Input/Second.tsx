export const Second = () => {
  return (
    <article className='article'>
      <h3 className='article-title'>
        두 번째: 무엇이 state 변화를 트리거하는지 알아내기
      </h3>
      <p>
        이와 같은 흐름은 종이에 그려 시각화할 수 있습니다. 종이에 각각의 state를
        라벨링 된 원으로 그리고 각각의 state 변화를 화살표로 이어보세요. 이러한
        과정을 통해 state 변화의 흐름을 파악할 수 있을 뿐 아니라 구현 전에
        버그를 찾을 수도 있습니다.
      </p>
      <div>
        <img
          src={
            'https://ko.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fresponding_to_input_flow.png&w=1920&q=75'
          }
          alt='image'
        />
      </div>
      <p></p>
    </article>
  );
};
