import Sidebar from '../Dashboard/SiderBar';
import '../Dashboard/styles/VerticalNavbar.css';
import VerticalNavbar from '../Dashboard/VerticalNavbar';
import Agenda from './Agenda';
import Medicos from './Medicos';

export default function Agendamento() {
  return (
    <>
      <Sidebar />
      <div className="agendamento-page">
        <VerticalNavbar />
        <div className="content-container" style={{ marginLeft: '200px', padding: '20px' }}>
          <div className="row mt-3">
            <div className="col-md-4">
              <Medicos />
            </div>
            <div className="col-md-8">
              <Agenda />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}