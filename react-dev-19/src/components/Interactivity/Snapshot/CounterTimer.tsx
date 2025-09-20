import { useState } from 'react';

/**
 * React 상태 스냅샷과 비동기 함수 예제
 *
 * 문제: 3초 후 alert에서 보여지는 number 값은?
 * - 예상: 현재 화면에 보이는 업데이트된 값 (예: 5, 10, 15...)
 * - 실제: 클릭 시점의 스냅샷 값 (0, 5, 10...)
 *
 * 이유: setTimeout 콜백은 클릭 시점의 스냅샷을 "캡처"합니다.
 */

export const CounterTimer = () => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    console.log('클릭 시점의 number:', number); // 스냅샷 값

    setNumber(number + 5);

    // 3초 후 실행되는 콜백은 클릭 시점의 스냅샷을 사용
    setTimeout(() => {
      alert(`3초 전 클릭 시점의 number: ${number}`);
      console.log('setTimeout 내부의 number:', number); // 여전히 스냅샷 값
    }, 3000);
  };

  return (
    <article className='article'>
      <h3 className='article-title'>시간 경과에 따른 상태 스냅샷</h3>

      <div className='mb-4'>
        <h4 className='text-xl font-bold mb-2'>현재 값: {number}</h4>
        <p className='text-sm text-gray-600 mb-4'>
          버튼을 클릭하고 3초 후 나타나는 alert를 확인해보세요!
        </p>
      </div>

      <div className='space-y-4'>
        <button onClick={handleClick}>+5 (3초 후 alert 확인)</button>

        <div className='p-4 bg-yellow-50 rounded-lg'>
          <h5 className='font-semibold text-yellow-800 mb-2'>🔍 실험해보기</h5>
          <ol className='text-sm text-yellow-700 space-y-1'>
            <li>1. 버튼을 여러 번 빠르게 클릭해보세요</li>
            <li>2. 각 alert에서 어떤 값이 나오는지 확인해보세요</li>
            <li>3. 개발자 도구 콘솔도 함께 확인해보세요</li>
          </ol>
        </div>

        <div className='p-4 bg-red-50 rounded-lg'>
          <h5 className='font-semibold text-red-800 mb-2'>❌ 예상 vs 실제</h5>
          <div className='text-sm text-red-700 space-y-1'>
            <p>
              <strong>예상:</strong> alert에서 현재 화면의 업데이트된 값 (5, 10,
              15...)
            </p>
            <p>
              <strong>실제:</strong> 클릭 시점의 스냅샷 값 (0, 5, 10...)
            </p>
          </div>
        </div>

        <div className='p-4 bg-green-50 rounded-lg'>
          <h5 className='font-semibold text-green-800 mb-2'>✅ 해결 방법</h5>
          <ul className='text-sm text-green-700 space-y-1'>
            <li>• useRef로 최신 값 참조</li>
            <li>• 상태를 직접 사용하지 말고 함수형 업데이트 활용</li>
            <li>• useEffect로 상태 변화 감지</li>
          </ul>
        </div>
      </div>

      <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
        <h5 className='font-semibold text-blue-800 mb-2'>💡 핵심 개념</h5>
        <ul className='text-sm text-blue-700 space-y-1'>
          <li>• 이벤트 핸들러는 렌더링 시점의 상태 스냅샷을 "캡처"합니다</li>
          <li>
            • 비동기 함수(setTimeout, Promise 등)도 같은 스냅샷을 사용합니다
          </li>
          <li>
            • 상태가 변경되어도 이미 생성된 콜백의 스냅샷은 변하지 않습니다
          </li>
        </ul>
      </div>
    </article>
  );
};
