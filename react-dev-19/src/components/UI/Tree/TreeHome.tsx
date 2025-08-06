import { FancyText } from './FancyText';
import { InspirationGenerator } from './InspirationGenerator';
import { Copyright } from './Copyright';

export const TreeHome = () => {
  return (
    <article className='article'>
      <h2>트리 구조에 대해서 ...</h2>
      <p className='mb-2'>트리구조를 그려보자면</p>
      <div className='mb-10'>
        <img
          src='https://ko.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fconditional_render_tree.png&w=640&q=75'
          alt=''
          className='max-w-[500px]'
        />
      </div>
      <FancyText title text='Get Inspired App' />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </article>
  );
};
