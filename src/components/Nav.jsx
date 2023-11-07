import {} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../routes/style.css';

function Nav() {
/*Hook- useNavgite*/
  const navigate = useNavigate();

  /*criando a função para limpar a sessão e voltar para o home */
  const handleLogout = async ()=>{
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("saindo da sessão");
    navigate('/');
  }

  return (
    <>
      <header>
        <h2 className='Pagina titulo'> Code Crafter </h2>
        <nav className='navegacao'>
          <ul>
            <li>
              <Link to="/"className='tlink'>Home</Link>
            </li>
            <li>
              <Link to="/produtos"className='tlink'>Produtos</Link>
            </li>
            <li>
              <Link to="sobre"className='tlink'>Sobre</Link>
            </li>
            <li>
              <Link to="/login"className='tlink'>LOGIN</Link>
            </li>
            <li>
            <Link to="/cliente" className="tlink">Cliente</Link>
            </li>
            <button onClick={handleLogout} >Logout</button>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
