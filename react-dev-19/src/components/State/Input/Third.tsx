export const Third = () => {
  return (
    <article className='article'>
      <h3 className='article-title'>
        세 번째: 메모리의 state를 useState로 표현하기
      </h3>
      <p className='mb-3'>
        다음으로 useState를 사용하여 컴포넌트의 시각적 state를 표현해야 합니다.
        이 과정은 단순함이 핵심입니다. 각각의 state는 “움직이는 조각”입니다.
        그리고 “움직이는 조각”은 적을수록 좋습니다. 복잡한 건 버그를 일으키기
        마련입니다! 먼저 반드시 필요한 state를 가지고 시작해봅시다. 예를 들면
        인풋의 answer은 반드시 저장해야 할 것입니다. 그리고 "존재한다면" 가장
        최근에 발생한 error도 저장해야 할 겁니다.
      </p>
      <code>
        const [isEmpty, setIsEmpty] = useState(true);
        <br />
        const [isTyping, setIsTyping] = useState(false);
        <br />
        const [isSubmitting, setIsSubmitting] = useState(false);
        <br />
        const [isSuccess, setIsSuccess] = useState(false);
        <br />
        const [isError, setIsError] = useState(false);
      </code>
    </article>
  );
};
