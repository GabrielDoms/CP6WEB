import { useRef } from 'react';
import Pedido from './Pedido';
import '../routes/style.css';


function Login() {
  /*hook useref ele retorna uma referencia a um elemento ou componente sem ter que ser renderizado novamente e também permite acesso ao DOM */
  const user = useRef();
  const password = useRef();
  /* pegando o usuario e adcionando ao sessionStorage */
  const getUser = sessionStorage.getItem('userData');
  /* pegando o senha e adcionando ao sessionStorage */
  const getSenha = sessionStorage.getItem('senhaData');

  /*função que verifica se o usuario e senha são validos e grava na sessão */
  const handleSubmit = () => {
    if (user.current.value === 'Gabriel' && password.current.value === '1234567') {

      //Criando a autenticação usando token
      let token =
      Math.random().toString(16).substring(2)+
      Math.random().toString(16).substring(2);

      sessionStorage.setItem('userData', 'admin');
      sessionStorage.setItem('senhaData', token);
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };

  return (
    <section className="login-container">
  <h1 className="login-heading">Login</h1>
  {getUser && getSenha ? (
    <Pedido />
  ) : (
    <form onSubmit={handleSubmit} className="login-form">
  <div className="input-group">
    <label htmlFor="usuario" className="form-label">USUÁRIO:</label>
    <input type="text" id="usuario" className="form-input" ref={user} />
  </div>
  <div className="input-group">
    <label htmlFor="senha" className="form-label">SENHA:</label>
    <input type="password" id="senha" className="form-input" ref={password} />
  </div>
  <input type="submit" value="Login" className="form-button login-button" />
  </form>
  )}
</section>
  );
}

export default Login;
