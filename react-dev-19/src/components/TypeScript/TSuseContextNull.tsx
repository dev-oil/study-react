import { createContext, useContext, useMemo } from 'react';

type ComplexObject = {
  kind: string;
};

// context는 기본값을 정확하게 반영하기 위해 타입에 `| null`을 사용하여 만들어집니다.
const Context = createContext<ComplexObject | null>(null);

// Hook의 검사를 통해 ' | null' 제거
const useGetComplexObject = () => {
  const object = useContext(Context);
  if (!object) {
    throw new Error('useGetComplexObject must be used within a Provider');
  }
  return object;
};

const MyComponent = () => {
  const object = useGetComplexObject();

  return (
    <div>
      <p>Current object: {object.kind}</p>
    </div>
  );
};

export const TSuseContextNull = () => {
  const object = useMemo(() => ({ kind: 'complex' }), []);

  return (
    <Context.Provider value={object}>
      <MyComponent />
    </Context.Provider>
  );
};
