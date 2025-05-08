import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>🧪 React 19 실험실</h1>
      <ul>
        <li>
          <Link to='/typescript'>0. TypeScript</Link>
        </li>
        <li>
          <Link to='/ui'>1. UI</Link>
        </li>
      </ul>
    </div>
  );
};
