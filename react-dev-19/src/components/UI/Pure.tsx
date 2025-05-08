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
    <section className='section'>
      <h2>Spiced Chai Recipe</h2>
      <h3>For two</h3>
      <Recipe drinkers={2} />
      <h3>For a gathering</h3>
      <Recipe drinkers={4} />
    </section>
  );
};
