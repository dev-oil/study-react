import './App.css';
import { useState } from 'react';

function App() {
  let [blogTitle, setBlogTitle] = useState([
    '맨유 올드 트래포드 직관 후기',
    '울버햄튼 몰리뉴 스타디움 홈구장 직관 후기',
    '아스날 에미레이트 스타디움 직관 후기',
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [inputValue, setInputValue] = useState('');

  function titleHandler() {
    let copy = [...blogTitle];
    copy[0] = '토트넘 홋스퍼 스타디움 직관 후기';
    setBlogTitle(copy);
  }

  function sortHandler() {
    let copy = [...blogTitle];
    copy = copy.sort();
    setBlogTitle(copy);
  }

  function toggleModalHandler() {
    setModal(!modal);
  }

  return (
    <div className='App'>
      <header className='header'>
        <h1>⚽️</h1>
      </header>

      <div className='blog_area'>
        <div className='blog_btn_box'>
          <button className='btn btn_name_change' onClick={titleHandler}>
            change first title
          </button>
          <button className='btn btn_name_change' onClick={sortHandler}>
            sort
          </button>
        </div>
        <ul className='blog_list'>
          {blogTitle.map(function (a, i) {
            return (
              <li className='blog_item' key={i}>
                <button
                  type='button'
                  className='btn_blog'
                  onClick={toggleModalHandler}
                >
                  <h2 className='title'>{blogTitle[i]}</h2>
                  <span className='date'>5월 20일 발행</span>
                </button>
                <button
                  className='btn_like'
                  onClick={() => {
                    let copy = [...like];
                    copy[i] += 1;
                    setLike(copy);
                  }}
                >
                  🖤
                  <span className='number'>{like[i]}</span>
                </button>
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
              </li>
            );
          })}
        </ul>

        <div className='blog_input_box'>
          <input
            type='text'
            className='blog_input'
            onChange={(e) => {
              setInputValue(e.target.value);
              console.log(inputValue);
            }}
          ></input>
          <button
            type='button'
            className='btn_publish'
            onClick={() => {
              let copy = [...blogTitle];
              copy.unshift(inputValue);
              setBlogTitle(copy);
              setInputValue(''); // 발행 후 입력창 비우기
            }}
          >
            발행하기
          </button>
        </div>

        {modal == true ? <Modal /> : null}
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className='blog_content'>
      <h3 className='title'>제목</h3>
      <span className='date'>5월 21일 발행</span>
      <p className='desc'>
        컨텐츠 내용 컨텐츠 내용 컨텐츠 내용 재미있는 축구 이야기
      </p>
    </div>
  );
}

export default App;
