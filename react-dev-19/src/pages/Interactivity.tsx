import { Event } from '../components/Interactivity/Event/Event';
import { PassingEvent } from '../components/Interactivity/Event/PassingEvent';
import { EventHandleProp } from '../components/Interactivity/Event/EventHandleProp';
import { EventBubbling } from '../components/Interactivity/Event/EventBubbling';
import { EventBubblingStopPropagation } from '../components/Interactivity/Event/EventBubblingStopPropagation';
import { DefaultBehavior } from '../components/Interactivity/Event/DefaultBehavior';

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
