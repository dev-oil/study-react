import { useState } from 'react';
import { sculptureList, type Sculpture } from './data';

// 이 예시에서 index와 showMore처럼 서로 연관이 없는 경우 여러 개의 state 변수를 가지는 것이 좋습니다. 하지만 두 state 변수를 자주 함께 변경하는 경우에는 두 변수를 하나로 합치는 것이 더 좋을 수 있습니다. 예를 들어, 필드가 많은 폼의 경우 필드별로 state 변수를 사용하는 것보다 하나의 객체 state 변수를 사용하는 것이 더 편리합니다.

export const StateMultiple = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture: Sculpture = sculptureList[index];
  return (
    <article className='article'>
      <h3 className='article-title'>컴포넌트에 여러 state 변수 지정하기</h3>
      <p className='mb-3'>
        index와 showMore처럼 서로 연관이 없는 경우 여러 개의 state 변수를 가지는
        것이 좋음
      </p>
      <p className='mb-3'>
        하지만 두 state 변수를 자주 함께 변경하는 경우에는 두 변수를 하나로
        합치는 것이 더 좋음
      </p>
      <button onClick={handleNextClick}>Next</button>
      <h4>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h4>
      <h5>
        ({index + 1} of {sculptureList.length})
      </h5>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </article>
  );
};
