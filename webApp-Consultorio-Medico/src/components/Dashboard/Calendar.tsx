import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { FaUser } from 'react-icons/fa';
import './styles/Calendar.css';

export default function Calendar() {
  const [month, setMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

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

  const contacts = [
    { name: 'João Silva', phone: '123-456-7890', doctor: 'Dr. Pedrosa' },
    { name: 'Maria Souza', phone: '987-654-3210', doctor: 'Dr. Maria' },
    { name: 'José da Silva', phone: '555-555-5555', doctor: 'Dr. José' },
    { name: 'Ana Silva', phone: '222-222-2222', doctor: 'Dr. Ana' },
    { name: 'Luís da Silva', phone: '333-333-3333', doctor: 'Dr. Luís' },
    { name: 'Júlia Silva', phone: '444-444-4444', doctor: 'Dr. Júlia' },
    { name: 'Paulo Silva', phone: '666-666-6666', doctor: 'Dr. Paulo' },
    { name: 'Maria Silva', phone: '777-777-7777', doctor: 'Dr. Maria' },
    { name: 'João Silva', phone: '888-888-8888', doctor: 'Dr. João' },
    { name: 'Maria Silva', phone: '999-999-9999', doctor: 'Dr. Maria' },
    { name: 'João Silva', phone: '101-101-1010', doctor: 'Dr. João' },
    { name: 'Maria Silva', phone: '111-111-1111', doctor: 'Dr. Maria' },
    { name: 'João Silva', phone: '123-456-7890', doctor: 'Dr. João' },
  ];

  return (
    <div className="calendar container">
      <div className="d-flex justify-content-between align-items-center my-3">
        <button className="btn btn-primary" onClick={handlePrevMonth}>&lt;</button>
        <h5 className="text-center">{months[month]}</h5>
        <button className="btn btn-primary" onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="d-flex flex-wrap border p-2">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="text-center p-2 border"
            style={{ width: '14.28%' }}
          >
            {day}
          </div>
        ))}
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className={`text-center p-2 border ${index + 1 === selectedDay ? 'bg-primary text-white' : ''}`}
            style={{ width: '14.28%' }}
            onClick={() => handleDayClick(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="contacts mt-4">
        <h5>Agenda do Dia</h5>
        <div className="contacts-list">
          <ListGroup variant="flush">
            {contacts.map((contact, index) => (
              <ListGroup.Item key={index} className="d-flex align-items-center">
                <FaUser className="me-2" />
                {contact.name} - {contact.phone} - {contact.doctor}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
}