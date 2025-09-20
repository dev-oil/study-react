import { Gallery } from './Gallery';

/**
 * ==========================================
 * State 독립성과 격리 학습
 * ==========================================
 */

/**
 * 🎯 State의 핵심 특징: 컴포넌트별 독립성
 *
 * State는 일반적인 모듈 상단 변수와 완전히 다릅니다:
 *
 * ❌ 일반 변수: 모듈 레벨에서 선언되어 모든 곳에서 공유
 * ✅ State: 컴포넌트 인스턴스별로 독립적으로 관리
 *
 * 같은 컴포넌트를 여러 번 렌더링하면, 각각의 state는 완전히 별개입니다.
 * <Gallery />를 두 번 렌더링하면 → 두 개의 독립적인 state가 생성됩니다.
 */

/**
 * 🔒 State의 비공개성 (Encapsulation)
 *
 * State는 선언한 컴포넌트에만 속합니다:
 *
 * ✅ 부모 컴포넌트는 자식의 state를 볼 수 없음
 * ✅ 부모 컴포넌트는 자식의 state를 변경할 수 없음
 * ✅ 자식 컴포넌트는 부모의 state를 직접 접근할 수 없음
 *
 * Props와의 차이점:
 * - Props: 부모 → 자식으로 데이터 전달 (하향식)
 * - State: 컴포넌트 내부에서만 관리 (캡슐화)
 *
 * 이로 인해 각 컴포넌트는 다른 컴포넌트에 영향을 주지 않고
 * 자유롭게 state를 추가/제거할 수 있습니다.
 */

/**
 * 🔄 State 공유가 필요한 경우
 *
 * 만약 여러 컴포넌트가 같은 state를 공유해야 한다면:
 *
 * 1. 자식 컴포넌트에서 state 제거
 * 2. 가장 가까운 공통 부모 컴포넌트에 state 추가
 * 3. Props를 통해 자식들에게 전달
 *
 * 이는 "State 끌어올리기(Lifting State Up)" 패턴이라고 합니다.
 */

export const StateIndependent = () => {
  return (
    <article className='article'>
      <h3 className='article-title'>State는 격리되고 비공개로 유지된다</h3>
      <p className='mb-3'>
        같은 컴포넌트를 여러 번 렌더링하면, 각각의 state는 완전히 별개
      </p>
      <div className='flex gap-4'>
        <Gallery />
        <Gallery />
      </div>
    </article>
  );
};
