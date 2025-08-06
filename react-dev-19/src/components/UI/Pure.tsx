// React는 작성되는 모든 컴포넌트가 순수 함수일 거라 가정한다.
// 이러한 가정은 작성되는 React 컴포넌트에 같은 입력이 주어진다면 반드시 같은 JSX를 반환한다는 것을 의미하기 때문이다.

type RecipeProps = {
  drinkers: number;
};

const Recipe = ({ drinkers }: RecipeProps) => {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
};

export const Pure = () => {
  return (
    <article className='article'>
      <h2>컴포넌트 순수하게 유지하기 (순수성)</h2>
      <p className='mb-3'>
        같은 출력. 같은 입력이 주어졌다면 순수함수는 같은 결과를 반환합니다.
        <br />
        Recipe에 drinkers={2}를 넘기면 항상 2 cups of water를 포함한 JSX
        반환합니다. drinkers={4}를 넘기면 항상 4 cups of water를 포함한 JSX를
        반환합니다.
      </p>
      <h3 className='font-bold'>Spiced Chai Recipe</h3>
      <h4 className='font-bold'>For two</h4>
      <Recipe drinkers={2} />
      <h4 className='font-bold'>For a gathering</h4>
      <Recipe drinkers={4} />
    </article>
  );
};
