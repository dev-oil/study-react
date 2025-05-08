import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { TypeScript } from './pages/TypeScript';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/typescript' element={<TypeScript />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
