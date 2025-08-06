type ButtonProps = {
  message: string;
  children: string;
};

const AlertButton = ({ message, children }: ButtonProps) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

export const Event = () => {
  return (
    <article className='article'>
      <h3 className='article-title'>기본 이벤트</h3>
      <div>
        <AlertButton message='Playing!'>Play Movie</AlertButton>
        <AlertButton message='Uploading!'>Upload Image</AlertButton>
      </div>
    </article>
  );
};

// 이벤트 핸들러는 호출이 아니라 전달만 가능!
// onClick={handleClick()}이 아니라 onClick={handleClick}
