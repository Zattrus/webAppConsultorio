import { ListGroup } from 'react-bootstrap';
import './styles/Agenda.css'; // Supondo que você tenha um arquivo CSS para estilização

export default function Agenda() {
  // Defina os horários de 08:00 até 17:30
  const times = [
    "08:00", "08:30", "09:00", "09:30",
    "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30",
  ];

  return (
    <div className="schedule-container container mt-4">
      <h5 className="mb-3 text-muted">20/Feb 2022</h5>
      <div className='list-agendas'>
        <ListGroup variant="flush">
          {times.map((time, index) => (
            <li key={index} className="d-flex align-items-center mb-2 schedule-item">
              <div className="time">{time}</div>
              <div className="flex-grow-1 content-box"></div>
              <div className="icons ms-2">
                <button className="btn btn-primary me-2">Editar</button>
                <button className="btn btn-danger me-2">Excluir</button>
                <button className="btn btn-success">Agendar</button>
              </div>
            </li>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}