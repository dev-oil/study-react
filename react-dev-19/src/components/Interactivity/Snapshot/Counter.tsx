import React, { useState } from 'react';

/**
 * React의 상태 업데이트 스냅샷 예제
 *
 * 문제: 버튼을 클릭해도 +3이 아니라 +1만 증가하는 이유는?
 *
 * 해결책: 함수형 업데이트를 사용하면 이전 상태값을 참조할 수 있습니다.
 */

export const Counter = () => {
  const [number, setNumber] = useState(0);

  // ❌ 잘못된 방법: 각 setNumber 호출이 같은 스냅샷(number = 0)을 참조
  const handleIncorrectUpdate = () => {
    setNumber(number + 1); // number는 0, 결과: 1
    setNumber(number + 1); // number는 여전히 0, 결과: 1
    setNumber(number + 1); // number는 여전히 0, 결과: 1
    // 최종 결과: 1 (마지막 업데이트만 적용됨)
  };

  // ✅ 올바른 방법: 함수형 업데이트로 이전 상태값 참조
  const handleCorrectUpdate = () => {
    setNumber((prev) => prev + 1); // prev = 0, 결과: 1
    setNumber((prev) => prev + 1); // prev = 1, 결과: 2
    setNumber((prev) => prev + 1); // prev = 2, 결과: 3
    // 최종 결과: 3
  };

  return (
    <article className='article'>
      <h3 className='article-title'>React 상태 업데이트 스냅샷</h3>

      <div className='mb-4'>
        <h4 className='text-xl font-bold mb-2'>현재 값: {number}</h4>
        <p className='text-sm text-gray-600 mb-4'>
          React는 렌더링 시점의 상태값을 "스냅샷"으로 찍어서 사용합니다.
        </p>
      </div>

      <div className='space-y-3'>
        <div>
          <button onClick={handleIncorrectUpdate}>
            ❌ 잘못된 방법 (+1만 증가)
          </button>
          <span className='text-sm text-gray-500'>
            각 setNumber가 같은 스냅샷(number=0)을 참조
          </span>
        </div>

        <div>
          <button onClick={handleCorrectUpdate}>
            ✅ 올바른 방법 (+3 증가)
          </button>
          <span className='text-sm text-gray-500'>
            함수형 업데이트로 이전 상태값 참조
          </span>
        </div>

        <div>
          <button onClick={() => setNumber(0)}>리셋</button>
        </div>
      </div>

      <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
        <h5 className='font-semibold text-blue-800 mb-2'>💡 핵심 포인트</h5>
        <ul className='text-sm text-blue-700 space-y-1'>
          <li>• 이벤트 핸들러 내에서 상태값은 렌더링 시점의 스냅샷입니다</li>
          <li>• 여러 번의 상태 업데이트는 배치(batch) 처리됩니다</li>
          <li>• 함수형 업데이트를 사용하면 이전 상태값에 접근할 수 있습니다</li>
        </ul>
      </div>
    </article>
  );
};
