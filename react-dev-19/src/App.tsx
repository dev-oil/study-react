import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { TypeScript } from './pages/TypeScript';
import { UI } from './pages/UI';
import { Interactivity } from './pages/Interactivity';
import { State } from './pages/State';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/typescript' element={<TypeScript />} />
        <Route path='/ui' element={<UI />} />
        <Route path='/interactivity' element={<Interactivity />} />
        <Route path='/state' element={<State />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
