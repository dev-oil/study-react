export const Forth = () => {
  return (
    <article className='article'>
      <h3 className='article-title'>네 번째: 불필요한 state 변수를 제거하기</h3>
      <p className='mb-3'>
        state의 중복은 피하고 필수적인 state만 남겨두고 싶을 겁니다. state
        구조를 리팩토링하는 데 시간을 조금만 투자하면 컴포넌트는 더 이해하기
        쉬워질 것이고 불필요한 중복은 줄어들 것이며 의도하지 않은 의미를 피할
        수도 있을 것입니다. 리팩토링의 목표는 state가 사용자에게 유효한 UI를
        보여주지 않는 경우를 방지하는 것입니다. 예를 들면 오류 메시지가
        나타났는데 인풋이 비활성화 돼 있어 유저가 오류를 수정할 수 없는 상황은
        원하지 않을 겁니다!
      </p>
      <ul className='mb-3 list-disc list-inside'>
        <li>
          state가 역설을 일으키지는 않나요? 예를 들면 isTyping과 isSubmitting이
          동시에 true일 수는 없습니다. 이러한 역설은 보통 state가 충분히
          제한되지 않았음을 의미합니다. 여기에는 두 boolean에 대한 네 가지
          조합이 있지만 오직 유효한 state는 세 개뿐입니다. 이러한 “불가능한”
          state를 제거하기 위해 세 가지 값 'typing', 'submitting', 'success'을
          하나의 status로 합칠 수 있습니다.
        </li>
        <li>
          다른 state 변수에 이미 같은 정보가 담겨있진 않나요? isEmpty와
          isTyping은 동시에 true가 될 수 없습니다. 이를 각각의 state 변수로
          분리하면 싱크가 맞지 않거나 버그가 발생할 위험이 있습니다. 이 경우에는
          운이 좋게도 isEmpty를 지우고 answer.length === 0으로 체크할 수
          있습니다.
        </li>
        <li>
          다른 변수를 뒤집었을 때 같은 정보를 얻을 수 있진 않나요? isError는
          error !== null로도 대신 확인할 수 있기 때문에 필요하지 않습니다.
        </li>
      </ul>
      <code>
        const [answer, setAnswer] = useState('');
        <br />
        const [error, setError] = useState(null);
        <br />
        useState(null); const [status, setStatus] = useState('typing'); //
        'typing', 'submitting', or 'success'
        <br />
      </code>
    </article>
  );
};
