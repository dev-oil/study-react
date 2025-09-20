import React, { useEffect, useState } from 'react';
import { Clock } from './Clock';

/**
 * ==========================================
 * 3단계: DOM 커밋 (DOM Commit)
 * ==========================================
 */

/**
 * 🎯 React의 똑똑한 DOM 업데이트
 *
 * 컴포넌트를 렌더링한 후, React는 실제 화면(DOM)을 업데이트합니다.
 * 하지만 React는 매우 똑똑해서 필요한 부분만 바꿉니다!
 */

/**
 * 📝 DOM 업데이트 과정
 *
 * 1. 초기 렌더링: 모든 DOM 요소를 새로 생성
 * 2. 리렌더링: 바뀐 부분만 찾아서 업데이트
 * 3. 효율성: 변경되지 않은 부분은 건드리지 않음
 */

/**
 * 🔍 실제 예제로 이해하기
 *
 * 아래 시계 예제에서:
 * - 시간(h1)은 매초 바뀜 → React가 업데이트
 * - 입력창(input)은 바뀌지 않음 → React가 건드리지 않음
 *
 * 따라서 입력창에 텍스트를 입력해도 사라지지 않습니다!
 */

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export const DomCommit = () => {
  const time = useTime();

  return (
    <article className='article'>
      <h3 className='article-title'>3단계: React가 DOM에 변경사항을 커밋</h3>

      <div className='mb-4'>
        <h4 className='font-semibold mb-2'>React의 똑똑한 DOM 업데이트:</h4>
        <div className='bg-blue-50 p-4 rounded mb-3'>
          <p className='text-sm mb-2'>
            <strong>🎯 핵심:</strong> React는 바뀐 부분만 찾아서 업데이트합니다!
          </p>
          <ul className='text-sm space-y-1'>
            <li>• 시간(h1): 매초 바뀜 → React가 업데이트</li>
            <li>• 입력창(input): 바뀌지 않음 → React가 건드리지 않음</li>
            <li>• 결과: 입력창에 텍스트를 입력해도 사라지지 않음!</li>
          </ul>
        </div>
      </div>

      <div className='mb-4'>
        <h4 className='font-semibold mb-2'>실제 예제 - 시계:</h4>
        <p className='text-sm text-gray-600 mb-2'>
          아래 시계가 매초 업데이트되지만, 입력창의 텍스트는 사라지지 않습니다.
          이는 React가 시간 부분만 업데이트하고 입력창은 건드리지 않기
          때문입니다.
        </p>
        <div className='border-2 border-green-300 p-4 rounded'>
          <Clock time={time.toLocaleTimeString()} />
        </div>
      </div>

      <div className='mb-4'>
        <h4 className='font-semibold mb-2'>DOM 업데이트 과정:</h4>
        <ol className='list-decimal pl-6 space-y-1 text-sm'>
          <li>
            <strong>초기 렌더링:</strong> 모든 DOM 요소를 새로 생성
          </li>
          <li>
            <strong>리렌더링:</strong> 바뀐 부분만 찾아서 업데이트
          </li>
          <li>
            <strong>효율성:</strong> 변경되지 않은 부분은 건드리지 않음
          </li>
        </ol>
      </div>

      <div className='text-sm text-gray-600'>
        <p>
          💡 <strong>이것이 React가 빠른 이유:</strong>
          Virtual DOM을 사용해서 필요한 부분만 실제 DOM에 반영하기 때문입니다!
        </p>
      </div>
    </article>
  );
};
