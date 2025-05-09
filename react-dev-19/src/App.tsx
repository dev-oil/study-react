import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { TypeScript } from './pages/TypeScript';
import { UI } from './pages/UI';
import { Interactivity } from './pages/Interactivity';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/typescript' element={<TypeScript />} />
        <Route path='/ui' element={<UI />} />
        <Route path='/interactivity' element={<Interactivity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
