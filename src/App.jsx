import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LineaA from './pages/torrevieja/LineaA';
import LineaA2 from './pages/torrevieja/LineaA2';
import LineaB from './pages/torrevieja/LineaB';
import LineaC from './pages/torrevieja/LineaC';
import LineaDF from './pages/torrevieja/LineaD-F';
import LineaE from './pages/torrevieja/LineaE';
import LineaG from './pages/torrevieja/LineaG';
import LineaH from './pages/torrevieja/LineaH';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linea-a" element={<LineaA />} />
        <Route path="/linea-a2" element={<LineaA2 />} />
        <Route path="/linea-b" element={<LineaB />} />
        <Route path="/linea-c" element={<LineaC />} />
        <Route path="/linea-d-f" element={<LineaDF />} />
        <Route path="/linea-e" element={<LineaE />} />
        <Route path="/linea-g" element={<LineaG />} />
        <Route path="/linea-h" element={<LineaH />} />
      </Routes>
    </Router>
  );
};

export default App;
