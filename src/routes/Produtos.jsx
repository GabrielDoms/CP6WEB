import {} from 'react';
import { Link } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { GrFormEdit as EditarProduto } from 'react-icons/gr';
import { RiDeleteBin2Fill as ExcluirProduto } from 'react-icons/ri';
import { FaPlus as InserirProduto } from 'react-icons/fa';
import './style.css';


function Produtos() {
  return (
    <section>
      <h1>LISTA DE PRODUTOS</h1>
        {/*Link para chamar a tela de editar produtos */}
        <h4 style={{ display: 'flex', alignItems: 'center' }}>
  <span>Cadastrar Produto</span>
  <Link to={`/cadastrar/produto`} style={{ marginLeft: '5px' }}>
    <InserirProduto />
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
            {ListaProdutos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.valor}</td>
                <td>
                  {' '}
                  {/*Link para chamar a tela de editar produtos */}
                  <Link to={`/editar/produtos/${item.id}`}>
                    <EditarProduto />
                  </Link>{' '}
                  | {/*Link para chamar a tela de excluir produtos */}
                  <Link to={`/excluir/produtos/${item.id}`}>
                    <ExcluirProduto />
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
export default Produtos;
