function useCallback(fn, deps) {
  let cache = { callback: null, deps: null };

  return function () {
    // 의존성이 처음이거나 변경되었을 때만 새로운 함수 저장
    if (!cache.deps || !shallowEqual(cache.deps, deps)) {
      console.log('🔄 새로운 함수 저장!');
      cache.callback = fn;
      cache.deps = deps;
    } else {
      console.log('♻ 기존 함수 재사용!');
    }
    return cache.callback;
  };
}

// 얕은 비교
function shallowEqual(oldDeps, newDeps) {
  return (
    oldDeps.length === newDeps.length &&
    oldDeps.every((dep, i) => dep === newDeps[i])
  );
}

// 사용 예제
let dependency = 0;

const memoizedCallback = useCallback(() => {
  console.log('🎯 함수 실행~');
}, [dependency]);

const run = memoizedCallback();
run(); // 🔄 새로운 함수 저장! 🎯 함수 실행~

const runAgain = memoizedCallback();
runAgain(); // ♻ 기존 함수 재사용! 🎯 함수 실행~

dependency = 1; // 의존성 변경

const newRun = memoizedCallback();
newRun(); // 🔄 새로운 함수 저장 이 나와야하는데.... ... 기존 함수 재사용..
