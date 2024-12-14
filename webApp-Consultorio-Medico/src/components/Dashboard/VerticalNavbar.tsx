import { Nav } from 'react-bootstrap';
import { FaCalendarAlt, FaClipboardList, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles/VerticalNavbar.css';

export default function VerticalNavbar() {
  return (
    <div className="vertical-navbar">
      <Nav className="flex-column">
        <Link to="/" className="nav-item">
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link to="/agendamentos" className="nav-item">
          <FaClipboardList /> Agendamento de Consultas
        </Link>
        <Link to="/consulta" className="nav-item">
          <FaCalendarAlt /> Consulta de Agendamentos
        </Link>
        <Link to="#" className="nav-item logout">
          <FaSignOutAlt /> Sair
        </Link>
      </Nav>
    </div>
  );
};