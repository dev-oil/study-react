import { TSuseCallback } from '../components/TypeScript/TSuseCallback';
import { TSuseContext } from '../components/TypeScript/TSuseContext';
import { TSuseContextNull } from '../components/TypeScript/TSuseContextNull';
import { TSuseReducer } from '../components/TypeScript/TSuseReducer';
import { TSuseState } from '../components/TypeScript/TSuseState';

// ts 적용 예제들

export const TypeScript = () => {
  return (
    <div className='p-10 bg-white'>
      <TSuseState />
      <TSuseReducer />
      <TSuseContext />
      <TSuseContextNull />
      <TSuseCallback />
    </div>
  );
};
