import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import './styles/Medicos.css';

export default function Medicos() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [month, setMonth] = useState<number>(new Date().getMonth());

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const handlePrevMonth = () => {
    setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const handleNextMonth = () => {
    setMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
  };

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const doctors = [
    { name: 'Dr. João Silva', phone: '123-456-7890', doctor: 'Cardiologista' },
    { name: 'Dr. Maria Souza', phone: '987-654-3210', doctor: 'Ortopedista' },
    { name: 'Dr. José da Silva', phone: '555-555-5555', doctor: 'Ginecologista' },
    { name: 'Dr. Pedrosa', phone: '222-222-2222', doctor: 'Pediatra' },
    { name: 'Dr. Maria', phone: '333-333-3333', doctor: 'Enfermeira' },
    { name: 'Dr. Luís', phone: '444-444-4444', doctor: 'Psiquiatra' },
    { name: 'Dr. Júlia Silva', phone: '666-666-6666', doctor: 'Pneumologista' },
    { name: 'Dr. Paulo', phone: '777-777-7777', doctor: 'Neurologista' },
    { name: 'Dr. Maria', phone: '888-888-8888', doctor: 'Gastroenterologista' },
    { name: 'Dr. João', phone: '999-999-9999', doctor: 'Psiquiatra' },
    { name: 'Dr. Maria', phone: '101-101-1010', doctor: 'Cardiologista' },
  ]

  return (
    <div className="container-medicos">
      <div className="doctors-section mb-8">
        <h5 className="text-muted">Medicos</h5>
        <div className="list-medicos">
          <ListGroup variant="flush">
            {doctors.map((contact, index) => (
              <ListGroup.Item key={index} className="d-flex align-items-center">
                <FaUser className="me-2" />
                {contact.name} - {contact.phone} - {contact.doctor}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>

      <div className="calendar-section">
        <div className="calendar-header d-flex justify-content-between align-items-center">
          <button className="btn btn-sm btn-outline-secondary" onClick={handlePrevMonth}>&lt;</button>
          <h5 className="m-0">{months[month]}</h5>
          <button className="btn btn-sm btn-outline-secondary" onClick={handleNextMonth}>&gt;</button>
        </div>
        <table className="table calendar-table text-center mt-3">
          <thead>
            <tr>
              {daysOfWeek.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              [1, 2, 3, 4, 5, 6, 7],
              [8, 9, 10, 11, 12, 13, 14],
              [15, 16, 17, 18, 19, 20, 21],
              [22, 23, 24, 25, 26, 27, 28],
              [29, 30, 31]
            ].map((week, index) => (
              <tr key={index}>
                {week.map((day, i) => (
                  <td
                    key={i}
                    className={day === selectedDay ? 'bg-danger text-light' : ''}
                    onClick={() => handleDayClick(day)}
                  >
                    {day}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}