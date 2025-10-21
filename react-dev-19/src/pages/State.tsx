import { First } from '../components/State/Input/First';
import { Forth } from '../components/State/Input/Forth';
import { Fifth } from '../components/State/Input/Fifth';
import { Second } from '../components/State/Input/Second';
import { Third } from '../components/State/Input/Third';

export const State = () => {
  return (
    <>
      <div className='p-10 bg-white'>
        <h1 className='mb-5 text-4xl font-bold'>State 관리하기</h1>
        <section>
          <h2 className='mb-5 text-2xl font-bold'>선언형 UI와 명령형 UI</h2>
          <p>react는 선언적으로 생각함</p>
        </section>
        <section>
          <h2 className='mb-5 text-2xl font-bold'>
            1. state를 사용해 Input 다루기
          </h2>
          <First />
          <Second />
          <Third />
          <Forth />
          <Fifth />
        </section>
      </div>
    </>
  );
};
