import './styles/Dashboard.css';
export default function Dashboard() {
  return (
    <div className="dashboard">
      <h5 className='dashboard-title'>Dashboard</h5>
      <div className="dashboard-item large">
        <h5>Faturamento</h5>
        <p>R$ 1000,00</p>
      </div>
      <div className="dashboard-item small">
        <h5>Agendamentos</h5>
        <p>10</p>
      </div>
      <div className="dashboard-item small">
        <h5>Pacientes Atendidos</h5>
        <p>50</p>
      </div>
    </div>
  );
};