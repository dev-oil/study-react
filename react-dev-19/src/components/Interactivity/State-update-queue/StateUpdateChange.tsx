import { useState } from 'react';

/**
 * 복합 상태 업데이트 예제
 *
 * 문제: 상태 교체 → 함수형 업데이트 → 다시 교체를 하면 어떻게 될까?
 *
 * 결과: 마지막 교체 값이 최종 결과가 됩니다 (42)
 */

export const StateUpdateChange = () => {
  const [number, setNumber] = useState(0);

  const handleComplexUpdate = () => {
    // 1단계: 상태를 5로 교체
    setNumber(number + 5); // number = 0, 결과: 5

    // 2단계: 함수형 업데이트 (5에서 시작)
    setNumber((n) => n + 1); // n = 5, 결과: 6

    // 3단계: 다시 42로 교체 (함수형 업데이트 결과 무시)
    setNumber(42); // 최종: 42
  };

  return (
    <article className='article'>
      <h3 className='article-title'>복합 상태 업데이트 (최종 교체 우선)</h3>

      <div className='mb-4'>
        <h4 className='text-xl font-bold mb-2'>현재 값: {number}</h4>
        <p className='text-sm text-gray-600 mb-4'>
          마지막에 교체한 값이 최종 결과가 됩니다!
        </p>
      </div>

      <div className='space-y-4'>
        <button
          onClick={handleComplexUpdate}
          className='px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 font-medium'
        >
          42 (최종 교체값)
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
            <strong>3단계:</strong> setNumber(42) → 큐에 "42로 바꾸기" 추가
          </li>
          <li>
            <strong>4단계:</strong> 렌더링 시 큐 처리 → 마지막 "42로 바꾸기"가
            최종
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
setNumber(42);            // 큐: "42로 바꾸기"

// 렌더링 시 큐 처리:
// 1. 5로 바꾸기 → number = 5
// 2. n + 1 함수 실행 (n = 5) → number = 6
// 3. 42로 바꾸기 → number = 42
// 최종 결과: 42`}
          </pre>
        </div>
      </div>

      <div className='mt-4 p-4 bg-red-50 rounded-lg'>
        <h5 className='font-semibold text-red-800 mb-2'>⚠️ 주의사항</h5>
        <ul className='text-sm text-red-700 space-y-1'>
          <li>• 업데이터 함수는 순수해야 합니다 (사이드 이펙트 금지)</li>
          <li>• Strict 모드에서 업데이터 함수는 두 번 실행됩니다</li>
          <li>• 마지막 교체 값이 최종 결과가 됩니다</li>
        </ul>
      </div>
    </article>
  );
};
