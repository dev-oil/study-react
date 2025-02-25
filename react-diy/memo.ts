// 수정 필요 <<<<<<<<<<<<<<<<<<<<<
// 얕은 비교 함수 (객체나 배열이 동일한지 검사)
function shallowEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || obj1 === null || obj2 === null) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every((key) => obj1[key] === obj2[key]);
}

// ------------- MEMO ----------------
function memo(Component) {
  let prevProps = null;
  let prevResult = null;

  return function MemoizedComponent(props) {
    // 이전 props와 새로운 props를 비교
    if (prevProps && shallowEqual(prevProps, props)) {
      return prevResult; // 변경되지 않았다면 이전 결과 반환
    }

    // 변경된 경우, 새로운 결과 저장 후 반환
    prevProps = props;
    prevResult = Component(props);
    return prevResult;
  };
}

// 사용 예제
function MyComponent(props) {
  console.log('렌더링됨!');
  return `Hello, ${props.name}!`;
}

const MemoizedComponent = memo(MyComponent);
console.log(MemoizedComponent({ name: 'Alice' })); // "렌더링됨!" 출력
console.log(MemoizedComponent({ name: 'Alice' })); // 캐시된 결과 사용, 렌더링 안됨
console.log(MemoizedComponent({ name: 'Bob' })); // "렌더링됨!" 출력 (props 변경됨)

// ------------- useMemo ----------------
function useMemo(fn, deps) {
  let cache = { value: null, deps: null };

  return function () {
    // 이전 deps와 새로운 deps를 비교하여 변경되었는지 확인
    if (!cache.deps || !shallowEqual(cache.deps, deps)) {
      cache.value = fn(); // 새로운 값 계산
      cache.deps = deps; // deps 저장
    }
    return cache.value;
  };
}

// 사용 예제
let count = 0;
const memoizedValue = useMemo(() => {
  console.log('계산 수행!');
  return count * 2;
}, [count]);

console.log(memoizedValue()); // "계산 수행!" 출력 후 0 반환
console.log(memoizedValue()); // 캐시된 값 반환 (계산 수행 없음)

count = 1; // count 변경
console.log(memoizedValue()); // "계산 수행!" 출력 후 2 반환
