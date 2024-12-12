import Sidebar from '../Dashboard/SiderBar';
import '../Dashboard/styles/VerticalNavbar.css';
import VerticalNavbar from '../Dashboard/VerticalNavbar';

export default function Consulta() {
  return (
    <div className="agendamento-page">
      <Sidebar />
      <VerticalNavbar />
      <div className="content">
      </div>
    </div>
  );
}