function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

function createDom(fiber) {
  const dom =
    fiber.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type)

  updateDom(dom, {}, fiber.props)

  return dom
}

const isEvent = key => key.startsWith("on")
const isProperty = key =>
  key !== "children" && !isEvent(key)
const isNew = (prev, next) => key =>
  prev[key] !== next[key]
const isGone = (prev, next) => key => !(key in next)
function updateDom(dom, prevProps, nextProps) {
  //Remove old or changed event listeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter(
      key =>
        !(key in nextProps) ||
        isNew(prevProps, nextProps)(key)
    )
    .forEach(name => {
      const eventType = name
        .toLowerCase()
        .substring(2)
      dom.removeEventListener(
        eventType,
        prevProps[name]
      )
    })

  // Remove old properties
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach(name => {
      dom[name] = ""
    })

  // Set new or changed properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      dom[name] = nextProps[name]
    })

  // Add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      const eventType = name
        .toLowerCase()
        .substring(2)
      dom.addEventListener(
        eventType,
        nextProps[name]
      )
    })
}

function commitRoot() {
  deletions.forEach(commitWork)
  commitWork(wipRoot.child)
  currentRoot = wipRoot
  wipRoot = null
}

function commitWork(fiber) {
  if (!fiber) {
    return
  }

  let domParentFiber = fiber.parent
  while (!domParentFiber.dom) {
    domParentFiber = domParentFiber.parent
  }
  const domParent = domParentFiber.dom

  if (
    fiber.effectTag === "PLACEMENT" &&
    fiber.dom != null
  ) {
    domParent.appendChild(fiber.dom)
  } else if (
    fiber.effectTag === "UPDATE" &&
    fiber.dom != null
  ) {
    updateDom(
      fiber.dom,
      fiber.alternate.props,
      fiber.props
    )
  } else if (fiber.effectTag === "DELETION") {
    commitDeletion(fiber, domParent)
  }

  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

function commitDeletion(fiber, domParent) {
  if (fiber.dom) {
    domParent.removeChild(fiber.dom)
  } else {
    commitDeletion(fiber.child, domParent)
  }
}

function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: currentRoot,
  }
  deletions = []
  nextUnitOfWork = wipRoot
}

let nextUnitOfWork = null
let currentRoot = null
let wipRoot = null
let deletions = null

function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    )
    shouldYield = deadline.timeRemaining() < 1
  }

  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }

  requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)

function performUnitOfWork(fiber) {
  const isFunctionComponent =
    fiber.type instanceof Function
  if (isFunctionComponent) {
    updateFunctionComponent(fiber)
  } else {
    updateHostComponent(fiber)
  }
  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}

let wipFiber = null
let hookIndex = null

function updateFunctionComponent(fiber) {
  wipFiber = fiber
  hookIndex = 0
  wipFiber.hooks = []

  const children = [fiber.type(fiber.props)]
  reconcileChildren(fiber, children)
}

/** 
 * action issue 수정
 * action이 함수가 아니라 값(숫자, 문자열 등)일 경우에 대한 처리를 추가해줘야함
 * */
function useState(initial) {
  const oldHook =
    wipFiber.alternate &&
    wipFiber.alternate.hooks &&
    wipFiber.alternate.hooks[hookIndex]
  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  }

  const actions = oldHook ? oldHook.queue : []
  actions.forEach(action => {
    // action issue => 함수라면 함수로 / 아니라면 값으로 직접 대입
    if (typeof action === "function") {
      hook.state = action(hook.state);
    } else {
      hook.state = action;
    }
  })

  const setState = action => {
    // action issue => 함수가 아니면 함수로 감싸줘서 함수로 만들어주기
    const update = typeof action === "function" ? action : () => action; 
    hook.queue.push(update)
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    }
    nextUnitOfWork = wipRoot
    deletions = []
  }

  wipFiber.hooks.push(hook)
  hookIndex++
  return [hook.state, setState]
}

function updateHostComponent(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }
  reconcileChildren(fiber, fiber.props.children)
}

function reconcileChildren(wipFiber, elements) {
  let index = 0
  let oldFiber =
    wipFiber.alternate && wipFiber.alternate.child
  let prevSibling = null

  while (
    index < elements.length ||
    oldFiber != null
  ) {
    const element = elements[index]
    let newFiber = null

    const sameType =
      oldFiber &&
      element &&
      element.type == oldFiber.type

    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: "UPDATE",
      }
    }
    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: "PLACEMENT",
      }
    }
    if (oldFiber && !sameType) {
      oldFiber.effectTag = "DELETION"
      deletions.push(oldFiber)
    }

    if (oldFiber) {
      oldFiber = oldFiber.sibling
    }

    if (index === 0) {
      wipFiber.child = newFiber
    } else if (element) {
      prevSibling.sibling = newFiber
    }

    prevSibling = newFiber
    index++
  }
}


// memo
function memo(Component, areEqual) {
  function MemoizedComponent(props) {

    // 기존 Fiber 트리 가져오기
    const oldFiber = wipFiber && wipFiber.alternate ? wipFiber.alternate : null;

    if (oldFiber) {
      const prevProps = oldFiber.props;
      if (areEqual(prevProps, props)) {
        wipFiber.child = oldFiber.child;
        return oldFiber.child;
      }
    }
    return Component(props)
  }
  return MemoizedComponent;
}

// useMemo
function useMemo(callback, deps) {
  // oldHook 가져오기
  let oldHook = undefined;

  if (wipFiber.alternate) { 
    if (wipFiber.alternate.hooks) { 
      oldHook = wipFiber.alternate.hooks[hookIndex]; 
    }
  } // const oldHook = wipFiber.alternate?.hooks?.[hookIndex];

  // deps가 변경되었는지 확인
  let hasChanged = false;

  if (!oldHook) {
    hasChanged = true;
  } else {
    if (!oldHook.deps) {
      hasChanged = true;
    } else {
      hasChanged = false;
      for (let i = 0; i < deps.length; i++) {
        if (!Object.is(oldHook.deps[i], deps[i])) {
          hasChanged = true; 
          break;
        }
      }
    }
  }
  // const hasChanged = !oldHook?.deps?.every((d, i) => Object.is(d, deps[i]));

  const hook = {
    memoizedValue: hasChanged ? callback() : oldHook.memoizedValue,
    deps,
  };

  wipFiber.hooks.push(hook);
  hookIndex++;

  return hook.memoizedValue;
}

// useCallback
function useCallback(callback, deps) {
  return useMemo(() => callback, deps);
}


const Didact = {
  createElement,
  render,
  useState,
  memo,
  useMemo,
  useCallback,
}

/** @jsx Didact.createElement */
// ================== Memo 예제 ====================
// function Counter({ value }) {
//   console.log("Counter 렌더링"); // 변화가 없으면 콘솔 출력되지 않음
//   return <h1>Count: {value}</h1>;
// }

// const MemoizedCounter = memo(Counter, (prevProps, nextProps) => {
//   return prevProps.value === nextProps.value;
// });

// function App() {
//   const [count, setCount] = Didact.useState(0);
//   return (
//     <div>
//       {/* memo */}
//       <MemoizedCounter value={count} /> 
//       {/* 그냥 사용했을 때 */}
//       {/* <Counter value={count} /> */}
//       <button onClick={() => setCount(count)}>클릭</button>
//     </div>
//   );
// }

// ================== useMemo 예제 ====================
function ExpensiveComponent({count}) {
  const value = useMemo(() => {
    console.log("계산 중...");
    return count * 102;
  }, [count]);

  return <h1>계산결과: {value}</h1>;
}

function App() {
  const [count, setCount] = Didact.useState(0);
  return (
    <div>
      <ExpensiveComponent count={count} />
      <button onClick={() => setCount(count)}>숫자 그대로</button>
      <button onClick={() => setCount(count + 1)}>하나 업</button>

    </div>
  );
}
// ================== useCallback 예제 ====================

const element = <App />;
const container = document.getElementById("root");
Didact.render(element, container);