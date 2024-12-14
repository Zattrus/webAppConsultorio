import { ListGroup } from 'react-bootstrap';
import { FaFilter, FaPencilAlt, FaSearch, FaSearchPlus } from 'react-icons/fa'; // Ícones
import './styles/ListaAgendamento.css'; // Para customizações adicionais do CSS

export default function ListaAgendamentos() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-25">
          <input type="text" className="form-control" placeholder="Busca rápida" />
          <div className="input-group-append">
            <span className="input-group-text">
              <FaSearch />
            </span>
          </div>
        </div>
        <div>
          <button className="btn btn-light">
            <FaFilter className="mr-2" /> Filtros Avançados
          </button>
        </div>
      </div>

      <div className='list-colunas'>
        <ListGroup variant="flush">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Coluna 1</th>
                <th>Coluna 2</th>
                <th>Coluna 3</th>
                <th>Coluna 4</th>
                <th>Coluna 5</th>
                <th>Coluna 6</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 100 }).map((_, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Linha 1</td>
                  <td>Linha 2</td>
                  <td>Linha 3</td>
                  <td>Linha 4</td>
                  <td>Linha 5</td>

                  <td>Linha 6</td>
                  <td>
                    <FaPencilAlt style={{ cursor: 'pointer', marginRight: '10px' }} />
                    <FaSearchPlus className="mr-2" style={{ cursor: 'pointer', marginLeft: '10px' }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ListGroup>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-primary custom-btn mr-2">Salvar</button>
        <button className="btn btn-danger custom-btn">Excluir</button>
      </div>
    </div>
  );
}
