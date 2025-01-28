import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = 'devoil';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}'s react`}</h1>
      <h2>React basic</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ display: 'block', width: '100%' }}
        src='https://images.unsplash.com/photo-1732468170768-4ae7fe38376b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='ribbon'
      />
    </>
  );
}

export default AppJSX;
