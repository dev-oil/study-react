import { useState } from 'react';
import { sculptureList, type Sculpture } from './data';

/**
 * ==========================================
 * React State 기본 개념 학습
 * ==========================================
 */

/**
 * 🤔 왜 지역 변수로는 상태를 관리할 수 없을까?
 *
 * 지역 변수는 렌더링 간에 유지되지 않습니다.
 * React는 컴포넌트를 다시 렌더링할 때 지역 변수의 변경사항을 고려하지 않고
 * 처음부터 새로 렌더링합니다.
 *
 * 또한 지역 변수를 변경해도 React가 새로운 데이터로 컴포넌트를
 * 다시 렌더링해야 한다는 것을 인식하지 못합니다.
 */

/**
 * ✅ State가 필요한 이유
 *
 * 1. 렌더링 사이에 데이터를 유지
 * 2. React가 새로운 데이터로 컴포넌트를 다시 렌더링하도록 유발
 *
 * useState는 이 두 가지를 모두 제공합니다:
 * - 렌더링 간에 데이터를 유지하는 state 변수
 * - 변수를 업데이트하고 React가 컴포넌트를 다시 렌더링하도록 유발하는 setter 함수
 */

/**
 * 🎣 첫 번째 훅(Hook) 만나기
 *
 * React에서 useState와 같이 "use"로 시작하는 모든 함수를 훅이라고 합니다.
 *
 * 훅은 React가 오직 렌더링 중일 때만 사용할 수 있는 특별한 함수입니다.
 * 이를 통해 다양한 React 기능을 "연결"할 수 있습니다.
 *
 * State는 이러한 기능 중 하나일 뿐이며, 나중에 다른 훅들을 만나게 됩니다.
 *
 * ⚠️ 주의사항:
 * 훅(use로 시작하는 함수들)은 컴포넌트의 최상위 수준 또는 커스텀 훅에서만 호출할 수 있습니다.
 * 조건문, 반복문 또는 기타 중첩 함수 내부에서는 훅을 호출할 수 없습니다.
 *
 * 훅은 함수이지만 컴포넌트의 필요에 대한 무조건적인 선언으로 생각하면 도움이 됩니다.
 * 파일 상단에서 모듈을 "import"하는 것과 유사하게 컴포넌트 상단에서 React 기능을 "사용"합니다.
 */

/**
 * 🔍 useState 해부하기
 *
 * useState를 호출하는 것은, React에 이 컴포넌트가 무언가를 기억하기를 원한다고 말하는 것입니다.
 *
 * const [index, setIndex] = useState(0);
 * 이 경우 React가 index를 기억하기를 원합니다.
 *
 * 📝 네이밍 규칙:
 * 이 쌍의 이름은 const [something, setSomething]과 같이 지정하는 것이 규칙입니다.
 * 원하는 대로 이름을 지을 수 있지만, 규칙을 사용하면 프로젝트 전반에 걸쳐 상황을 더 쉽게 이해할 수 있습니다.
 *
 * useState의 유일한 인수는 state 변수의 초깃값입니다.
 * 이 예시에서 index의 초깃값은 useState(0)에 의해 0으로 설정됩니다.
 *
 * 컴포넌트가 렌더링될 때마다, useState는 다음 두 개의 값을 포함하는 배열을 제공합니다:
 * 1. 저장한 값을 가진 state 변수 (index)
 * 2. state 변수를 업데이트하고 React에 컴포넌트를 다시 렌더링하도록 유발하는 state setter 함수 (setIndex)
 */

/**
 * 🔄 실제 작동 방식
 *
 * 1. 컴포넌트가 처음 렌더링됩니다.
 *    index의 초깃값으로 useState를 사용해 0을 전달했으므로 [0, setIndex]를 반환합니다.
 *    React는 0을 최신 state 값으로 기억합니다.
 *
 * 2. state를 업데이트합니다.
 *    사용자가 버튼을 클릭하면 setIndex(index + 1)를 호출합니다.
 *    index는 0이므로 setIndex(1)입니다.
 *    이는 React에 index는 1임을 기억하게 하고 또 다른 렌더링을 유발합니다.
 *
 * 3. 컴포넌트가 두 번째로 렌더링됩니다.
 *    React는 여전히 useState(0)를 보지만, index를 1로 설정한 것을 기억하고 있기 때문에,
 *    이번에는 [1, setIndex]를 반환합니다.
 *
 * 이런 식으로 계속됩니다!
 */

export const StateBasic = () => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex(index + 1);
  };

  const sculpture: Sculpture = sculptureList[index];
  return (
    <article className='article'>
      <h3 className='article-title'>state 변수</h3>
      <p className='mb-3'>
        State가 필요한 이유
        <br />
        1. 렌더링 사이에 데이터를 유지
        <br />
        2. React가 새로운 데이터로 컴포넌트를 다시 렌더링하도록 유발
      </p>
      <p className='mb-3'>
        useState는 이 두 가지를 모두 제공합니다
        <br />
        1. 렌더링 간에 데이터를 유지하는 state 변수
        <br />
        2. 변수를 업데이트하고 React가 컴포넌트를 다시 렌더링하도록 유발하는
        setter 함수
      </p>
      <button onClick={handleClick}>Next</button>
      <h4>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h4>
      <h5>
        ({index + 1} of {sculptureList.length})
      </h5>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </article>
  );
};
