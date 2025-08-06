import { Event } from '../components/Interactivity/Event/Event';
import { PassingEvent } from '../components/Interactivity/Event/PassingEvent';
import { EventHandleProp } from '../components/Interactivity/Event/EventHandleProp';
import { EventBubbling } from '../components/Interactivity/Event/EventBubbling';
import { EventBubblingStopPropagation } from '../components/Interactivity/Event/EventBubblingStopPropagation';
import { DefaultBehavior } from '../components/Interactivity/Event/DefaultBehavior';

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
      </div>
    </>
  );
};
