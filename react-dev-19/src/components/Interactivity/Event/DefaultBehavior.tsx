export const DefaultBehavior = () => {
  // 일례로 <form>의 제출 이벤트는 그 내부의 버튼을 클릭 시 페이지 전체를 리로드하는 것이 기본 동작임.
  // e.stopPropagation()은 이벤트 핸들러가 상위 태그에서 실행되지 않도록 멈춤
  // e.preventDefault() 는 기본 브라우저 동작을 가진 일부 이벤트가 해당 기본 동작을 실행하지 않도록 방지함

  return (
    <article className='article'>
      <strong>
        기본 동작 막기 <code>e.preventDefault()</code>
      </strong>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Submitting!');
        }}
      >
        <input />
        <button>Send</button>
      </form>
    </article>
  );
};
