import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from  '@hookform/resolvers/yup';
import * as yup from 'yup'
import './style.css';


function Cliente(){
 /*Hook useState */
 const[listaCliente, setListaCliente]= useState([]);

/*biblioteca de validação de campos */
 const scheme = yup.object({
  nome:yup.string().required("O campo nome obrigatório"),
  email:yup.string().email("Digite um email valido").required("O Campo email obrigatório"),
  cpf:yup.string().min(11, "CPF deve conter pelo menos 11 digitos").required("Campo CPF obrigátório"),
})
.required();

/*função que cria os metodos register e handleSubimit para chamar o form e validar */
 const {register,handleSubmit,formState:{errors},setValue, setFocus,} = useForm({
  resolver:yupResolver(scheme)
})


/*função  inserir cliente  */
function inserirCliente(cliente){
  setListaCliente([...listaCliente,cliente]);
}

/*criando a API para ser consumida */

function buscarCep(e){
  const cep = e.target.value.replace(/\D/g,'');
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=> res.json())
    .then((dados)=> {
      setValue('rua', dados.logradouro);
      setValue('bairro', dados.bairro);
      setValue('cidade', dados.localidade);
      setFocus('numero');
    });
}

  return(
    <>
    <form className="form" onSubmit={handleSubmit(inserirCliente)}>
  <fieldset className="fieldset">
    <legend>Dados Pessoais:</legend>
    <label className="form-label">
      Nome:
      <input className="form-input" type="text" {...register('nome')}/>
      <span className="error-message">{errors.nome?.message}</span>
    </label>
    <label className="form-label">
      Email:
      <input className="form-input" type="text" {...register('email')}/>
      <span className="error-message">{errors.email?.message}</span>
    </label>
    <label className="form-label">
      CPF:
      <input className="form-input" type="text" {...register('cpf')}/>
      <span className="error-message">{errors.cpf?.message}</span>
    </label>
  </fieldset>

  <fieldset className="fieldset">
    <legend>Endereço:</legend>
    <label className="form-label">
      CEP:
      <input className="form-input" type="text" {...register('cep')} onBlur={buscarCep}/>
    </label>
    <label className="form-label">
      RUA:
      <input className="form-input" type="text" {...register('rua')}/>
    </label>
    <label className="form-label">
      BAIRRO:
      <input className="form-input" type="text" {...register('bairro')}/>
    </label>
    <label className="form-label">
      CIDADE:
      <input className="form-input" type="text" {...register('cidade')}/>
    </label>
    <label className="form-label">
      NUMERO:
      <input className="form-input" type="text" {...register('numero')}/>
    </label>
    <div className="button-container">
      <button className="form-button" type="submit">CADASTRAR</button>
      <button className="form-button" type="reset">Limpar</button>
    </div>
  </fieldset>
</form>

    </>
  )
}
export default Cliente