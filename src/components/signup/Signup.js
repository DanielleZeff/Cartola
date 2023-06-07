import React from 'react'
import { Link } from 'react-router-dom'
import '../signup/style.css';

function Signup() {
  return (
    <div className="bg_signup signup template d-flex justify-content-center align-items-center vh-200 ">
    <div className="form_container_signup p-5 rounded bg-white">
      <form >
        <h3 className="text-center">Sign up</h3>
        <div className="mb-2">
          <label htmlFor="uname">Nome de Usuário</label>
          <input
            style={{width:"50%"}}
            type="uname"
            placeholder="Digite seu nome de usuário"
            className="form-control"
          />
        </div>
        <div>
        <label htmlFor="email">Nome</label>
          <input
            style={{width:"50%"}}
            type="name"
            placeholder="Digite seu primeiro nome"
            className="form-control"
          />
       </div>
        <div className="mb-2 col-md-7">
          <label htmlFor="email">Sobrenome</label>
          <input
            style={{width:"50%"}}
            type="surname"
            placeholder="Digite seu sobrenome"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="mobile">Celular</label>
          <input
            style={{width:"50%"}}
            type="text"
            placeholder="Digite seu telefone"
            className="form-control"
            
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Digite seu Email"
            className="form-control"
            
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite sua Senha"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="scholl">Escola</label>
          <input
            style={{width:"50%"}}
            type="scholl"
            placeholder="backend"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="zipcode">CEP</label>
          <input
            style={{width:"50%"}}
            type="zipcode"
            placeholder="Digite seu CEP"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="address">Endereço</label>
          <input
            type="address"
            placeholder="Digite seu Endereço"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email">Bairro</label>
          <input
            style={{width:"50%"}}
            type="neighborhood"
            placeholder="Digite seu Bairro"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email">Complemento</label>
          <input
            style={{width:"50%"}}
            type="complement"
            placeholder="Digite o complemento."
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="city">Cidade</label>
          <input
            style={{width:"50%"}}
            type="city"
            placeholder="Digite sua cidade"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="state">Estado</label>
          <input
            style={{width:"50%"}}
            type="state"
            placeholder="Digite seu estado"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email">País</label>
          <input
            style={{width:"50%"}}
            type="country"
            placeholder="País"
            className="form-control"
          />
        </div>
       
        <div style={{marginLeft: "35%", marginTop: "1rem"}}>
          <button style={{color: "white"}} className="btn_color_signup">Cadastrar</button>
        </div>
      
      </form>
    </div>
  </div>
  

  )
}

export default Signup