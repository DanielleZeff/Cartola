import React from "react";
import '../login/style.css';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg_login login template d-flex justify-content-center align-items-center vh-100 ">
      <div className="form_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Sign In</h3>
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
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label m-2">
              Lembrar-me
            </label>
          </div>
          <div style={{marginLeft: "22%"}}>
            <button style={{color: "white"}} className="btn_color">Entrar</button>
          </div>
          <p style={{marginLeft: "30%", marginTop:"1rem"}} className="text-right">
            <Link to="signup">Não tenho cadastro</Link>
           
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
