import { useState } from 'react';

/**
 * 함수형 업데이트 (Updater Function) 예제
 *
 * 문제: 같은 state를 여러 번 업데이트할 때 어떻게 해야 할까?
 *
 * 해결: setNumber(n => n + 1) 같은 함수형 업데이트 사용
 */

export const BeforeRenderStateUpdate = () => {
  const [number, setNumber] = useState(0);

  const handleIncorrectUpdate = () => {
    // ❌ 잘못된 방법: 각 호출이 같은 스냅샷을 참조
    setNumber(number + 1); // number = 0, 결과: 1
    setNumber(number + 1); // number = 0, 결과: 1
    setNumber(number + 1); // number = 0, 결과: 1
    // 최종: 1 (마지막 업데이트만 적용)
  };

  const handleCorrectUpdate = () => {
    // ✅ 올바른 방법: 함수형 업데이트로 이전 값 참조
    setNumber((n) => n + 1); // n = 0, 결과: 1
    setNumber((n) => n + 1); // n = 1, 결과: 2
    setNumber((n) => n + 1); // n = 2, 결과: 3
    // 최종: 3
  };

  return (
    <article className='article'>
      <h3 className='article-title'>함수형 업데이트 (Updater Function)</h3>

      <div className='mb-4'>
        <h4 className='text-xl font-bold mb-2'>현재 값: {number}</h4>
        <p className='text-sm text-gray-600 mb-4'>
          같은 state를 여러 번 업데이트할 때는 함수형 업데이트를 사용하세요!
        </p>
      </div>

      <div className='space-y-4'>
        <div>
          <button
            onClick={handleIncorrectUpdate}
            className='px-4 py-2 bg-red-500 rounded hover:bg-red-600 mr-2'
          >
            ❌ 잘못된 방법 (+1만 증가)
          </button>
          <span className='text-sm text-gray-500'>
            setNumber(number + 1) x 3번 호출
          </span>
        </div>

        <div>
          <button
            onClick={handleCorrectUpdate}
            className='px-4 py-2 bg-green-500 rounded hover:bg-green-600 mr-2'
          >
            ✅ 올바른 방법 (+3 증가)
          </button>
          <span className='text-sm text-gray-500'>
            setNumber(n =&gt; n + 1) × 3번 호출
          </span>
        </div>

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
        <h5 className='font-semibold text-blue-800 mb-2'>
          💡 함수형 업데이트 작동 원리
        </h5>
        <ol className='text-sm text-blue-700 space-y-2'>
          <li>
            <strong>1단계:</strong> React가 이벤트 핸들러의 모든 코드 실행
            완료까지 대기
          </li>
          <li>
            <strong>2단계:</strong> 함수형 업데이트들을 큐에 저장
          </li>
          <li>
            <strong>3단계:</strong> 다음 렌더링에서 큐를 순회하며 최종 state
            계산
          </li>
        </ol>
      </div>

      <div className='mt-4 p-4 bg-yellow-50 rounded-lg'>
        <h5 className='font-semibold text-yellow-800 mb-2'>📝 코드 예시</h5>
        <div className='text-sm text-yellow-700 space-y-2'>
          <div>
            <strong>❌ 잘못된 방법:</strong>
            <pre className='bg-gray-100 p-2 rounded mt-1 text-xs'>
              {`setNumber(number + 1);
setNumber(number + 1);
setNumber(number + 1);`}
            </pre>
          </div>
          <div>
            <strong>✅ 올바른 방법:</strong>
            <pre className='bg-gray-100 p-2 rounded mt-1 text-xs'>
              {`setNumber(n => n + 1);
setNumber(n => n + 1);
setNumber(n => n + 1);`}
            </pre>
          </div>
        </div>
      </div>
    </article>
  );
};
