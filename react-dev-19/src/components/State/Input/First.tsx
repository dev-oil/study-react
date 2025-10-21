const statuses = ['empty', 'typing', 'submitting', 'success', 'error'];

export const First = () => {
  return (
    <article className='article'>
      <h3 className='article-title'>
        첫 번째: 컴포넌트의 다양한 시각적 state 확인하기
      </h3>
      <p>
        컴포넌트가 많은 시각적 state를 가지고 있다면 한 페이지에서 모두 보여주는
        것도 편하게 할 수 있습니다.
      </p>
      {statuses.map((status) => (
        <section key={status}>
          <h4 className='font-bold'>Form ({status}):</h4>
          <Form status={status} />
        </section>
      ))}
    </article>
  );
};

const Form = ({ status }: { status: string }) => {
  if (status === 'success') {
    return <h1>That's right!</h1>;
  }
  return (
    <form>
      <textarea disabled={status === 'submitting'} />
      <br />
      <button disabled={status === 'empty' || status === 'submitting'}>
        Submit
      </button>
      {status === 'error' && (
        <p className='Error'>Good guess but a wrong answer. Try again!</p>
      )}
    </form>
  );
};
