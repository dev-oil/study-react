import React, { useState } from 'react';

export default function Counter({ totalCount }) {
  const [count, setCount] = useState(0);
  // count -> 값을 가리키고 있는 변수
  // setCount -> 값을 업데이트 할 수 있는 함수

  return (
    <>
      <div className='counter'>
        <span className='number'>{count}</span>
        <button
          className='button'
          onClick={() => {
            totalCount();

            // 호출 될 때 전달되는 이 콜백함수는, 호출 될 때 snapshot 함 (찰칵 하고 저장)
            // 캡쳐된 모든 환경이 렉시컬 environment

            // 이건 한번에 ~
            // 왜?
            // 내부에서 외부로 참조하고있는게 하나도 없음, 내부에 있는 이전 상태 값을 콜백 인자로 전달 받는데, 0 + 1 > 1 + 1 > 2 ....
            // 외부에서 어떻게 변경되었을 지 모르는 값 보다는, 현재 setCount 에서 전달되는 이전 state 를 사용하는 것이 안전하다!
            setCount((prev) => prev + 1);
            // setCount((prev) => prev + 1);
            // setCount((prev) => prev + 1);
            // setCount((prev) => prev + 1);
            // setCount((prev) => prev + 1);

            // 이건 안돼
            // setCount(count + 1);
            // setCount(count + 1);
            // setCount(count + 1);
            // setCount(count + 1);
          }}
        >
          Add +
        </button>
      </div>
    </>
  );
}
