import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';

/**
 * ==========================================
 * 1단계: 렌더링 트리거 (Rendering Trigger)
 * ==========================================
 */

/**
 * 🎯 렌더링이 일어나는 두 가지 이유
 *
 * 1. 초기 렌더링 (Initial Render)
 *    - 앱이 시작될 때 컴포넌트를 처음 렌더링
 *    - createRoot()와 render() 메서드로 트리거
 *
 * 2. State 업데이트 (State Update)
 *    - 컴포넌트의 state가 변경될 때
 *    - setState 함수 호출로 트리거
 */

// 초기 렌더링 예제 (일반적으로 main.tsx에서 실행)
// const initializeApp = () => {
//   const rootElement = document.getElementById('root');
//   if (rootElement) {
//     const root = createRoot(rootElement);
//     root.render(<CounterApp />);
//   }
// };

// State 업데이트로 인한 재렌더링 예제
const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        증가 (State 업데이트 → 재렌더링 트리거)
      </button>
    </div>
  );
};

export const Trigger = () => {
  return (
    <article className='article'>
      <h3 className='article-title'>1단계: 렌더링 트리거</h3>

      <div className='mb-4'>
        <h4 className='font-semibold mb-2'>렌더링이 일어나는 두 가지 이유:</h4>
        <ul className='list-disc pl-6 space-y-1'>
          <li>
            <strong>초기 렌더링:</strong> 앱 시작 시 컴포넌트를 처음 렌더링
          </li>
          <li>
            <strong>State 업데이트:</strong> 컴포넌트의 state가 변경될 때
          </li>
        </ul>
      </div>

      <div className='mb-4'>
        <h4 className='font-semibold mb-2'>
          초기 렌더링 예제(일반적으로 main.tsx에서 실행):
        </h4>
        <pre className='bg-gray-100 p-3 rounded text-sm'>
          {`const root = createRoot(document.getElementById('root'));
root.render(<App />);`}
        </pre>
      </div>

      <div className='mb-4'>
        <h4 className='font-semibold mb-2'>State 업데이트 예제:</h4>
        <CounterApp />
      </div>

      <div className='text-sm text-gray-600'>
        <p>
          💡 <strong>참고:</strong> 프레임워크는 때때로 초기 렌더링 코드를
          숨기지만, 실제로는 createRoot와 render 메서드를 사용합니다.
        </p>
      </div>
    </article>
  );
};
