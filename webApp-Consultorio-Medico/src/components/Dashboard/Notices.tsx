import './styles/Notices.css';

export default function Notices() {
  return (
    <div className="notices">
      <h5 className="notices-title">Avisos/Lembretes</h5>
      <table className="notices-table">
        <thead>
          <tr>
            <th>Coluna 1</th>
            <th>Coluna 2</th>
            <th>Coluna 3</th>
            <th>Coluna 4</th>
            <th>Coluna 5</th>
            <th>Coluna 6</th>
            <th>Coluna 7</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
              <td>
                {
                  <input type="checkbox" />
                }
              </td>
              <td>Texto 2</td>
              <td>Texto 3</td>
              <td>Texto 4</td>
              <td>Texto 5</td>
              <td>Texto 6</td>
              <td>Texto 7</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};