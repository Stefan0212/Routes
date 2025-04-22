
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Abertura from './pages/Abertura';
import Palpite from './pages/Palpite';
import Historico from './pages/Historico';
import { PalpiteProvider } from './context/PalpiteContext';

const App = () => {
  return (
    <PalpiteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Abertura />} />
          <Route path="/palpite" element={<Palpite />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </PalpiteProvider>
  );
};

export default App;
