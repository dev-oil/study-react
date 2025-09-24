import { useState } from 'react';

/**
 * 상태 교체 후 함수형 업데이트 예제
 *
 * 문제: 상태를 교체한 후 함수형 업데이트를 하면 어떻게 될까?
 *
 * 결과: 교체된 값이 함수형 업데이트의 시작점이 됩니다.
 */

export const StateChangeUpdate = () => {
  const [number, setNumber] = useState(0);

  const handleUpdate = () => {
    // 1단계: 상태를 5로 교체
    setNumber(number + 5); // number = 0, 결과: 5

    // 2단계: 함수형 업데이트 (5에서 시작)
    setNumber((n) => n + 1); // n = 5, 결과: 6
    // 최종: 6
  };

  return (
    <article className='article'>
      <h3 className='article-title'>상태 교체 후 함수형 업데이트</h3>

      <div className='mb-4'>
        <h4 className='text-xl font-bold mb-2'>현재 값: {number}</h4>
        <p className='text-sm text-gray-600 mb-4'>
          상태를 교체한 후 함수형 업데이트를 하면 교체된 값이 시작점이 됩니다!
        </p>
      </div>

      <div className='space-y-4'>
        <button
          onClick={handleUpdate}
          className='px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 font-medium'
        >
          +6 (5 + 1)
        </button>

        <div>
          <button
            onClick={() => setNumber(0)}
            className='px-4 py-2 bg-gray-500 rounded hover:bg-gray-600'
          >
            리셋
          </button>
        </div>
      </div>

      <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
        <h5 className='font-semibold text-blue-800 mb-2'>💡 작동 순서</h5>
        <ol className='text-sm text-blue-700 space-y-2'>
          <li>
            <strong>1단계:</strong> setNumber(number + 5) → 큐에 "5로 바꾸기"
            추가
          </li>
          <li>
            <strong>2단계:</strong> setNumber(n =&gt; n + 1) → 큐에 "n + 1 함수"
            추가
          </li>
          <li>
            <strong>3단계:</strong> 렌더링 시 큐 처리 → 5에서 시작해서 +1 = 6
          </li>
        </ol>
      </div>

      <div className='mt-4 p-4 bg-yellow-50 rounded-lg'>
        <h5 className='font-semibold text-yellow-800 mb-2'>📝 코드 예시</h5>
        <div className='text-sm text-yellow-700'>
          <pre className='bg-gray-100 p-3 rounded text-xs'>
            {`// 현재 number = 0
setNumber(number + 5);    // 큐: "5로 바꾸기"
setNumber(n => n + 1);    // 큐: "n + 1 함수"

// 렌더링 시 큐 처리:
// 1. 5로 바꾸기 → number = 5
// 2. n + 1 함수 실행 (n = 5) → number = 6
// 최종 결과: 6`}
          </pre>
        </div>
      </div>
    </article>
  );
};
