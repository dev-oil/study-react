import { Pure } from '../components/UI/Pure';
import { SideEffect } from '../components/UI/SideEffect';
import { Location } from '../components/UI/Location';
import { TreeHome } from '../components/UI/Tree/TreeHome';

export const UI = () => {
  return (
    <>
      <section className='p-10'>
        <h1 className='mb-5 text-4xl font-bold'>UI</h1>
        <Pure />
        <SideEffect />
        <Location />
        <TreeHome />
      </section>
    </>
  );
};
