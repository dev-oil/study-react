import { FancyText } from './FancyText';
import { InspirationGenerator } from './InspirationGenerator';
import { Copyright } from './Copyright';

export const TreeHome = () => {
  return (
    <section className='section'>
      <strong>트리 구조에 대해서 ...</strong>
      <FancyText title text='Get Inspired App' />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </section>
  );
};
