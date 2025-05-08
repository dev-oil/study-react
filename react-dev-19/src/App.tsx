import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { TypeScript } from './pages/TypeScript';
import { UI } from './pages/UI';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/typescript' element={<TypeScript />} />
        <Route path='/ui' element={<UI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
