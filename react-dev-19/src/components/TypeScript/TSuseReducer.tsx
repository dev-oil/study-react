import { useReducer } from 'react';

// reducer state의 모양을 설명
interface State {
  count: number;
}

// reducer에 dispatch 할 수 있는 다양한 액션 설명
type CounterAction =
  | { type: 'reset' }
  | { type: 'setCount'; value: State['count'] };

const initialState: State = { count: 0 }; // 초기 state의 타입을 제공하고, 기본적으로 useReducer에서 사용하는 타입도 제공

// reducer 함수의 인수와 반환 값의 타입을 설정함
const stateReducer = (state: State, action: CounterAction): State => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'setCount':
      return { ...state, count: action.value };
    default:
      throw new Error('Unknown action');
  }
};

export const TSuseReducer = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: 'setCount', value: state.count + 5 });
  const reset = () => dispatch({ type: 'reset' });

  return (
    <div className='article'>
      <h2>Welcome to my counter</h2>

      <p>Count: {state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
