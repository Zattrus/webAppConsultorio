import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Agendamentos from '../components/Agendamento/Agendamento';
import Consulta from '../components/Consulta/Consulta.tsx';
import Home from '../components/home.tsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/consulta" element={<Consulta />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;