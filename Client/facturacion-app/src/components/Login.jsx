import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLogged } from "../Service/Service";

export function Login() {
  const navigate = useNavigate();
  const [isEmptyFields, setIsEmptyFields] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (!username || !password) {
      setIsEmptyFields(true);
      return;
    }
    console.log('Formulario enviado');
    
    isLogged(username, password).then((res) => {
      console.log(res);
      localStorage.setItem('username', JSON.stringify({ username, token: res.data.token, idUsuario: res.data.idUsuario }));
      navigate('/viewFacturas');
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Iniciar sesión</h1>
          {isEmptyFields && (
            <div className="alert alert-danger" role="alert">
              Por favor, completa todos los campos.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre de Usuario</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Ingrese su nombre de usuario"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Ingrese su contraseña"
              />
            </div>
           
            <button type="submit" className="btn btn-primary">
              Iniciar sesión
            </button>
          </form>
          <div className="mt-3 text-center">
            ¿No tienes una cuenta?
            <Link to={`/signup`}>
              <p>Registrate</p>
            </Link>
          </div>
          <div className="mt-3 text-center">
            <p>
              ¿Olvidaste tu Contraseña?
              <Link to={`/recovery`} className="noDeco">
                <button  className="btn btn-link">
                  Restablecer Contraseña
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
