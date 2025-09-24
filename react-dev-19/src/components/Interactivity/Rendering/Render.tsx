import React, { useState } from 'react';
import { Gallery } from './Gallery';

/**
 * ==========================================
 * 2단계: 컴포넌트 렌더링 (Component Rendering)
 * ==========================================
 */

/**
 * 🔄 렌더링 과정 이해하기
 *
 * 렌더링을 트리거한 후 React는 컴포넌트를 호출하여
 * 화면에 표시할 내용을 파악합니다.
 *
 * "렌더링" = React에서 컴포넌트를 호출하는 것
 */

/**
 * 📋 렌더링 시나리오
 *
 * 1. 초기 렌더링: React가 루트 컴포넌트를 호출
 * 2. 이후 렌더링: State 업데이트가 일어난 컴포넌트를 호출
 * 3. 재귀적 단계: 컴포넌트가 다른 컴포넌트를 반환하면 계속 렌더링
 */

// 렌더링은 항상 순수한 계산:

// 동일한 입력에는 동일한 출력을 해야합니다. 동일한 입력이 주어지면 컴포넌트는 항상 동일한 JSX를 반환해야 합니다. (누군가 토마토 샐러드를 주문하면 그들은 양파가 있는 샐러드를 받으면 안 됩니다!)
// 이전의 state를 변경해서는 안됩니다. 렌더링 전에 존재했던 객체나 변수를 변경해서는 안 됩니다. (누군가의 주문이 다른 사람의 주문을 변경해서는 안 됩니다.)
// 그렇지 않으면 코드베이스가 복잡해짐에 따라 혼란스러운 버그와 예측할 수 없는 동작이 발생할 수 있습니다. “Strict Mode”에서 개발할 때 React는 각 컴포넌트의 함수를 두 번 호출하여 순수하지 않은 함수로 인한 실수를 표면화하는데 도움을 받을 수 있습니다.

// 렌더링 과정을 시각화하는 예제 컴포넌트들
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  console.log('🔄 ParentComponent 렌더링됨');

  return (
    <div className='border-2 border-blue-300 p-4 m-2 rounded'>
      <h4 className='font-bold text-blue-600'>부모 컴포넌트</h4>
      <p>카운트: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className='bg-blue-500 px-3 py-1 rounded mt-2'
      >
        증가 (재렌더링 트리거)
      </button>
      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  console.log('🔄 ChildComponent 렌더링됨');

  return (
    <div className='border-2 border-green-300 p-3 m-2 rounded'>
      <h5 className='font-bold text-green-600'>자식 컴포넌트</h5>
      <p>이 컴포넌트도 함께 렌더링됩니다!</p>
      <GrandChildComponent />
    </div>
  );
};

const GrandChildComponent = () => {
  console.log('🔄 GrandChildComponent 렌더링됨');

  return (
    <div className='border-2 border-purple-300 p-2 m-2 rounded'>
      <h6 className='font-bold text-purple-600'>손자 컴포넌트</h6>
      <p>가장 깊은 레벨까지 렌더링됩니다!</p>
    </div>
  );
};

export const Render = () => {
  return (
    <article className='article'>
      <h3 className='article-title'>2단계: 컴포넌트 렌더링</h3>

      <div className='mb-4'>
        <h4 className='font-semibold mb-2'>렌더링 과정:</h4>
        <ol className='list-decimal pl-6 space-y-1'>
          <li>
            <strong>트리거:</strong> 초기 렌더링 또는 State 업데이트
          </li>
          <li>
            <strong>호출:</strong> React가 컴포넌트를 호출
          </li>
          <li>
            <strong>재귀:</strong> 반환된 컴포넌트들을 계속 렌더링
          </li>
          <li>
            <strong>완료:</strong> 모든 중첩 컴포넌트가 렌더링될 때까지
          </li>
        </ol>
      </div>

      <div className='mb-4'>
        <h4 className='font-semibold mb-2'>실제 렌더링 예제:</h4>
        <p className='text-sm text-gray-600 mb-2'>
          버튼을 클릭하면 부모 컴포넌트의 State가 변경되어 모든 하위 컴포넌트가
          재렌더링됩니다. 콘솔을 확인해보세요!
        </p>
        <ParentComponent />
      </div>

      <div className='mb-4'>
        <h4 className='font-semibold mb-2'>Gallery 예제:</h4>
        <p className='text-sm text-gray-600 mb-2'>
          Gallery 컴포넌트가 3개의 Image 컴포넌트를 렌더링합니다.
        </p>
        <Gallery />
      </div>

      <div className='text-sm text-gray-600'>
        <p>
          💡 <strong>핵심:</strong> React는 컴포넌트 트리를 따라 재귀적으로 모든
          컴포넌트를 렌더링하여 최종 UI를 구성합니다.
        </p>
      </div>
    </article>
  );
};
