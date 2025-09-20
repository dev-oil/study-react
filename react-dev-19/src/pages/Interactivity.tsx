import { Event } from '../components/Interactivity/Event/Event';
import { PassingEvent } from '../components/Interactivity/Event/PassingEvent';
import { EventHandleProp } from '../components/Interactivity/Event/EventHandleProp';
import { EventBubbling } from '../components/Interactivity/Event/EventBubbling';
import { EventBubblingStopPropagation } from '../components/Interactivity/Event/EventBubblingStopPropagation';
import { DefaultBehavior } from '../components/Interactivity/Event/DefaultBehavior';
import { StateBasic } from '../components/Interactivity/State/StateBasic';
import { StateMultiple } from '../components/Interactivity/State/StateMultiple';
import { StateIndependent } from '../components/Interactivity/State/StateIndependent';
import { Trigger } from '../components/Interactivity/Rendering/Trigger';
import { Render } from '../components/Interactivity/Rendering/Render';
import { DomCommit } from '../components/Interactivity/Rendering/DomCommit';
import { Counter } from '../components/Interactivity/Snapshot/Counter';
import { CounterTimer } from '../components/Interactivity/Snapshot/CounterTimer';

export const Interactivity = () => {
  return (
    <>
      <div className='p-10'>
        <h1 className='mb-5 text-4xl font-bold'>상호작용</h1>
        <section>
          <h2 className='mb-5 text-2xl font-bold'>1. 이벤트에 응답하기</h2>
          <Event />
          <PassingEvent />
          <EventHandleProp />
          <EventBubbling />
          <EventBubblingStopPropagation />
          <DefaultBehavior />
        </section>
        <section className='mt-20'>
          <h2 className='mb-5 text-2xl font-bold'>
            2. State: 컴포넌트의 기억 저장소
          </h2>
          <StateBasic />
          <StateMultiple />
          <StateIndependent />
        </section>
        <section className='mt-20'>
          <h2 className='mb-5 text-2xl font-bold'>3. 렌더링 그리고 커밋</h2>
          <p className='mb-5'>
            주방에서 요리사가 컴포넌트를 재료로 맛있는 요리를 한다고
            상상해보세요. 이 시나리오에서 React는 고객들의 요청을 받고 주문을
            가져오는 웨이터입니다. 이 과정에는 UI를 요청하고 제공하는 세 가지
            단계가 있습니다.
            <br />
            1. 렌더링 트리거 (손님의 주문을 주방으로 전달)
            <br />
            2. 컴포넌트 렌더링 (주방에서 주문 준비하기)
            <br />
            3. DOM에 커밋 (테이블에 주문한 요리 내놓기)
          </p>
          <Trigger />
          <Render />
          <DomCommit />
        </section>
        <section className='mt-20'>
          <h2 className='mb-5 text-2xl font-bold'>4. 스냅샷으로서의 State</h2>
          <Counter />
          <CounterTimer />
        </section>
      </div>
    </>
  );
};
