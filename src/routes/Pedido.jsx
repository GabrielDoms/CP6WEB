import {} from 'react';
import { Link } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import { GrFormEdit as EditarPedido } from 'react-icons/gr';
import { RiDeleteBin2Fill as ExcluirPedido } from 'react-icons/ri';
import { FaPlus as InserirPedido } from 'react-icons/fa';



function Pedido() {
  return (
    <section>
      <h1>LISTA DE PEDIDO</h1>
        {/*Link para chamar a tela de editar produtos */}
        <h4 style={{ display: 'flex', alignItems: 'center' }}>
  <span>Cadastrar Pedido</span>
  <Link to={`/cadastrar/pedido`} style={{ marginLeft: '5px' }}>
    <InserirPedido />
  </Link>
      </h4>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {/* ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array */}
            {ListaPedidos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.valor}</td>
                <td>
                  {' '}
                  {/*Link para chamar a tela de editar produtos */}
                  <Link to={`/editar/pedido/${item.id}`}>
                    <EditarPedido />
                  </Link>{' '}
                  | {/*Link para chamar a tela de excluir produtos */}
                  <Link to={`/excluir/pedido/${item.id}`}>
                    <ExcluirPedido />
                    {/*espaço entre os links '' */}
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
export default Pedido;
