import { Event } from '../components/Interactivity/Event';
import { PassingEvent } from '../components/Interactivity/PassingEvent';
import { EventHandleProp } from '../components/Interactivity/EventHandleProp';
import { EventBubbling } from '../components/Interactivity/EventBubbling';
import { EventBubblingStopPropagation } from '../components/Interactivity/EventBubblingStopPropagation';
import { DefaultBehavior } from '../components/Interactivity/DefaultBehavior';

export const Interactivity = () => {
  return (
    <>
      <Event />
      <PassingEvent />
      <EventHandleProp />
      <EventBubbling />
      <EventBubblingStopPropagation />
      <DefaultBehavior />
    </>
  );
};
