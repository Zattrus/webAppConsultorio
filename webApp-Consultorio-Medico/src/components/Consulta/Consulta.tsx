import Sidebar from '../Dashboard/SiderBar';
import '../Dashboard/styles/VerticalNavbar.css';
import VerticalNavbar from '../Dashboard/VerticalNavbar';
import ListaAgendamentos from './ListaAgendamentos';

export default function Consulta() {
  return (
    <>
      <Sidebar />
      <div className="agendamento-page">
        <VerticalNavbar />
        <div className="content-container" style={{ marginLeft: '200px', padding: '20px' }}>
          <div className="row mt-3">
            <div className="col-md-12">
              <ListaAgendamentos />
            </div>
          </div>
        </div>
      </div>


    </>
  );
}