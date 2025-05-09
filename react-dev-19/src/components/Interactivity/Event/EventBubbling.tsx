export const EventBubbling = () => {
  return (
    <section className='section'>
      <strong>이벤트 버블링</strong>
      <div
        className='Toolbar'
        onClick={() => {
          alert('You clicked on the toolbar!');
        }}
      >
        <button onClick={() => alert('Playing!')}>Play Movie</button>
        <button onClick={() => alert('Uploading!')}>Upload Image</button>
      </div>
    </section>
  );
};
