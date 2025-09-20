import { Event } from '../components/Interactivity/Event/Event';
import { PassingEvent } from '../components/Interactivity/Event/PassingEvent';
import { EventHandleProp } from '../components/Interactivity/Event/EventHandleProp';
import { EventBubbling } from '../components/Interactivity/Event/EventBubbling';
import { EventBubblingStopPropagation } from '../components/Interactivity/Event/EventBubblingStopPropagation';
import { DefaultBehavior } from '../components/Interactivity/Event/DefaultBehavior';
import { StateBasic } from '../components/Interactivity/State/StateBasic';
import { StateMultiple } from '../components/Interactivity/State/StateMultiple';
import { StateIndependent } from '../components/Interactivity/State/StateIndependent';

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
      </div>
    </>
  );
};
