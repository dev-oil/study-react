## 1. JSX

### class

- html 내에 class 를 넣고싶다면 className 으로

```jsx
<div className="is-on">
```

### 변수 넣기

- html 내에 변수를 넣고싶다면 (데이터 바인딩) {} (중괄호)

```jsx
<div>{post}</div>
```

### style

- html 내에 style 속성을 넣고싶다면 style={} 안에 {}자료형으로

```jsx
<div style={{ color: 'blue', fontSize: '30px' }}>글씨</div>
```

## 2. state

- 자주 변경될 것 같은 데이터들은 state에 저장
- 굳이 html에 표기가 필요 없는 데이터들은 그냥 변수에 저장

### state 만드는 법

- `import {useState} from 'react'` 상단 추가
- 원하는 곳에서 useState(’보관할 자료’) 사용해서 자료 저장
- 나중에 쓰고 싶으면 destructuring 문법 사용해서 저장

```jsx
let [a, b] = useState('보관할 자료');
```

→ useState()를 사용하면 그 자리에 [데이터1, 데이터2] 이런 array 가 남음

→ 데이터1 자리엔 ‘남자 코트 추천’같은 자료 존재 / 데이터2 자리엔 state 변경을 도와주는 함수 존재

### 변수 말고 state 인 이유

- state는 변동사항이 생기면 state 쓰는 html도 자동으로 렌더링 진행

## 3. 버튼 기능개발 & state 변경

### Lint

```jsx
/* eslint-disable */
```

- warning message 지우고 싶다면 해당 주석 App.js 최상단에 작성하여 Lint 끄기

### onClick

[JavaScript]

```jsx
onclick = '실행할자바스크립트';
```

[JSX]

```jsx
onClick = { 실행할함수 };
```

1. Click 이 대문자
2. {} 중괄호 사용
3. 그냥 코드가 아니라 함수를 넣어야 잘 동작한다

### state 변경

```jsx
function App() {
  let [like, setLike] = useState(0);
}
```

- state 생성 시 2개까지 작명할 수 있는데, 두번째 작명한 부분이 state 변경을 도와주는 함수이다.

```jsx
setLike(새로운state);
```

- 이렇게 사용하면 된다.
- 주의할점은 (like = setLike + 1) 이렇게는 안된다 → 깔끔하게 값만 넣어주기

## 4. array, object state 변경하는 법

### state 변경 함수 특징

- 기존 state == 신규 state 의 경우 변경해주지 않음

### array/object 특징

- array/object를 담은 변수엔 화살표만 저장 (reference)

```jsx
// no...
let copy = blogTitle; // 동일한 화살표가 저장
copy[0] = 'IT Cloud';
setTitle(copy); // 동일하니까 안바꿔줘 돌아가

// yes
let copy = [...blogTitle]; // 동일하지만 새로운 array 생성
copy[0] = 'IT Cloud';
setTitle(copy); // 새롭군... 바꿔주마
```

### 요약

- state가 array/object면 독립적 카피본(shallow copy)을 만들어서 수정해야 함!

## 5. Component

### component 만드는 법

1. function 만들고 (만드는 위치는 app() 함수 바깥에)
2. return() 안에 html 담기
   - 내부 가장 상위 태그 `<></>` 로 감싸기 가능 → 병렬로 작성하고 싶을 때… : )
3. `<함수명></함수명>` 쓰기
   - `<함수명 />` 으로 가능

### 어떤걸 component로 만들면 좋은가

1. 반복적인 html 축약할 때
2. 큰 페이지들 (페이지 전환 시)
3. 자주 변경되는 것들

### component의 단점

1. state 가져다 쓸 때 문제 생김
   - A 함수에 있던 변수는 B 함수에서 마음대로 가져다 쓸 수 없음

### component 만드는 문법2

```jsx
const Modal = () => {
	컴포넌트~
}
```

- const 로 선언하여 중복 방지의 이점이 있음

## 6. React 내에서 동적인 UI 만들기

### 동적인 UI 만드는 순서

1. html css로 미리 디자인완성
2. UI의 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성

→ 스위치와 전등 만들기로 생각하면 편합니다요

1. 일단 전등 이쁘게 달아놓고
2. 스위치랑 연결하고
3. 스위치를 on 으로 놓으면 불이 켜지고 off로 놓으면 불이 꺼지도록
4. 스위치는 ? state / 전등은? <Modal />

### 삼항연산자 (tenary operator)

- if 문 대신 사용

```jsx
{
	조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
}
```

### JS로 동작하던 사람들아

- 리액트 → 버튼 누르면 모달창 스위치(state)만 건드림
- 자바스크립트 → 버튼 누르면 모달창 html 을 직접 건드림

## 7. map

### map?

- 많은 div 들을 반복문으로 줄이고 싶은 충동이 들 때 사용

### map 기능

1. array 자료 갯수만큼 함수 안의 코드를 실행해준다

   ```jsx
   [1, 2, 3].map(function () {
     console.log(1); // (3) 1
   });
   ```

2. map 내부 함수의 파라미터는 array 안에 있던 자료다 (첫번째 파라미터 → item / 두번째 → index)

   ```jsx
   [1, 2, 3].map(function (a) {
     console.log(a); // 1 2 3
   });
   ```

3. return에 뭐 적으면 array로 담아준다

   ```jsx
   [1, 2, 3].map(function (a) {
     return '12'; // ['12', '12', '12']
   });
   ```

### 같은 html 반복생성하는 법

```jsx
{
  blogTitle.map(function (a, i) {
    return <li className='blog_list_item' key={i}></li>;
  });
}
```

### 일반 반복문 사용하는 법 (for 문)

```jsx
function App() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(<div>안녕</div>);
  }
  return <div>{arr}</div>;
}
```

## 8. 자식이 부모의 state를 가져다쓰고 싶을 때는 props

### props (부모 → 자식 state 전송하는 법)

- `<자식컴포넌트 작명={state이름}>`
  - 대부분 작명 부분 state 이름과 동일하게 작성해줌
- props 파라미터 등록 후 `{props.작명}` 사용

### props 참고 사항

- props 전송은 부모 → 자식만 가능 (자식 → 부모 [패륜] 안됨 / 옆집 → 옆집 [불륜] 안됨)
- component 가 많아지면 props 쓰는게 귀찮아짐

### props로 modal 색깔 바꾸기

```jsx
function App () {

...

	{modal == true ? <Modal color='skyblue' title={title} /> : null}
	// color={'skyblue'}

...

}

fucntion Modal () {

	<div className='modal' style={{ background: props.color }}>
		...
	<div>

}

```

- `color=’skyblue’` 처럼 일반 문자도 전달 할 수도 있음

## 9. props 를 응용한 상세 페이지 만들기

### 다시 생각해보는 UI 3-step

1. html css로 미리 디자인완성
2. UI의 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성

### 요약

- state가 다양한 컴포넌트에서 쓰인다면? 컴포넌트들 중 최고로 높은 부모에 만들어 놓아야 함 (ex. App 컴포넌트)
- state 는 state를 사용하는 컴포넌트 중 최고 부모에 만들어 놓아야 함

## 10. input 1 : 사용자가 입력한 글 다루기

### react 의 input ,,

- 그냥 `<input>` 만 작성하면 안됩니다. 닫기 태그를 작성해 주어야 합니다.

### input 에 뭔가 입력 시 코드를 실행하고 싶다면???

- onChange / onInput 사용

  ```jsx
  // onChange
  <input type='text' onChange={() => { ??? }>

  // onInput
  <input type='text' onInput={() => { ??? }>
  ```

- onChange / onInput 는 JS에서 다음과 같은 차이가 존재하지만, 리액트에서는 완전히 동일하다. (주로 onChange 를 사용한다고 합니다)
- onChange
  - 요소의 값이 변경되었을 때 발생
  - onInput과의 차이점은 onChange는 내용이 변경된 후 요소가 focus out 될 때 발생
  - 또 다른 차이점은 onChange 이벤트는 select 요소에도 발생
- onInput
  - onInput이벤트는 사용자가 입력을 받을 때 발생
  - onChange 이벤트와 매우 유사하지만, 차이점이 있다면 onInput은 요소의 값이 변경되는 즉시 발생

### input 에 입력한 값 가져오는 법

- `e.target.value`
- e 가 뭡니까 ?
  - 이벤트 객체요,, 지금 발생하는 이벤트에 관련한 여러 기능이 담겨 있음

```jsx
<input type='text' onChange={(e) => {
	console.log(e.target.value);
}>
```

### 상위 html로 퍼지는 이벤트 버블링을 막고 싶다면?

- `e.stopPropagation()`

### input 에 입력한 값 저장하려면?

```jsx
<input
  type='text'
  onChange={(e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  }}
/>
```

- state 변경 함수는 늦게 처리됨
- 상단 코드에서 console.log 먼저 띄워짐 (제쳐두고 빠른거 먼저 쳐내볼까요)

## 11. input 2 : 블로그 글 발행 기능 만들기

### 글 발행 기능

```jsx
<button
  type='button'
  className='btn_publish'
  onClick={() => {
    let copy = [...blogTitle];
    copy.unshift(inputValue);
    setBlogTitle(copy);
  }}
>
  발행하기
</button>
```

- unshift 작업 하는데 `copy = copy.unshift(inputValue)` 해서 자꾸 값이 4가 나오는것이었다 . .
- `unshift()`는 배열의 시작 부분에 요소를 추가하며, 배열의 새로운 길이를 반환 한다고 한다.
- 그래서 `copy = copy.unshift(inputValue);`는 `copy`에 배열이 아니라 새로운 길이를 할당하게 되어, 이로 인해 `setBlogTitle(copy)`가 잘못된 동작을 한 것이었음

### 글 삭제 버튼

```jsx
<button
  className='btn_delete'
  onClick={() => {
    let copy = [...blogTitle];
    copy = copy.filter((e) => e !== copy[i]);
    setBlogTitle(copy);
  }}
>
  삭제
</button>

// 이런 방식도 있다

<button onClick={()=>{
  let copy = [...글제목];
  copy.splice(i, 1);
  글제목변경(copy);
}}>삭제</button>
```

- 나는 filter를 이용하여 작업하였는데, splice 방식도 있었다!
