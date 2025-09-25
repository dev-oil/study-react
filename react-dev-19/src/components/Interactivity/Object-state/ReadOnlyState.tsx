import { useState } from 'react';

/**
 * State를 읽기 전용인 것처럼 다루기 예제
 *
 * 문제: 마우스 포인터를 따라 움직이는 원을 만들어보세요
 *
 * 핵심: position state를 직접 수정하지 말고 새로운 객체로 교체
 */

export const ReadOnlyState = () => {
  const [position, setPosition] = useState({
    x: 200, // 초기 위치를 컨테이너 중앙으로 설정 (더 안전한 위치)
    y: 200,
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 컨테이너 안에 있을 때만 업데이트
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      setPosition({ x, y }); // ✅ 새 객체로 교체하는 올바른 방법!
    }
  };

  return (
    <article className='article'>
      <h3 className='article-title'>State를 읽기 전용인 것처럼 다루기</h3>

      <div className='mb-4'>
        <p className='text-sm text-gray-600 mb-4'>
          마우스를 움직여보세요! 원이 마우스를 따라 움직입니다.
        </p>
        <div className='text-sm text-gray-500'>
          현재 위치: x: {position.x}, y: {position.y}
        </div>
      </div>

      <div
        onPointerMove={handlePointerMove}
        className='relative w-full h-80 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg cursor-crosshair overflow-hidden'
      >
        <div
          className='absolute w-10 h-10 bg-red-500 rounded-full shadow-lg shadow-red-500/30 transition-all duration-100 ease-out'
          style={{
            left: `${position.x - 20}px`,
            top: `${position.y - 20}px`,
          }}
        />
      </div>

      <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
        <h5 className='font-semibold text-blue-800 mb-2'>💡 핵심 원칙</h5>
        <ul className='text-sm text-blue-700 space-y-1'>
          <li>• State 객체를 직접 수정하지 마세요</li>
          <li>• 새로운 객체를 만들어서 교체하세요</li>
          <li>• React는 참조 비교로 변경을 감지합니다</li>
        </ul>
      </div>

      <div className='mt-4 p-4 bg-yellow-50 rounded-lg'>
        <h5 className='font-semibold text-yellow-800 mb-2'>📝 코드 예시</h5>
        <div className='text-sm text-yellow-700'>
          <pre className='bg-gray-100 p-3 rounded text-xs'>
            {`// ❌ 잘못된 방법 (직접 수정)
position.x = e.clientX;
position.y = e.clientY;
setPosition(position);

// ✅ 올바른 방법 (새 객체로 교체)
setPosition({
  x: e.clientX - offsetLeft,
  y: e.clientY - offsetTop,
});`}
          </pre>
        </div>
      </div>
    </article>
  );
};
