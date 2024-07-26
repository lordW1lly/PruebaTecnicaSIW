import { useState } from "react";
import { Link } from "react-router-dom";

export function Login () {
    const [isLoginMode, setIsLoginMode] = useState(true);

  const handleToggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar los datos del formulario al servidor
    console.log('Formulario enviado');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">
            {isLoginMode ? 'Iniciar sesión' : 'Registrarse'}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" />
            </div>
            {/* Resto de los campos del formulario */}
            <button type="submit" className="btn btn-primary">
              {isLoginMode ? 'Iniciar sesión' : 'Registrarse'}
            </button>
          </form>
          <div className="mt-3 text-center">
            <p>
              {isLoginMode ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
              <button onClick={handleToggleMode} className="btn btn-link">
                {isLoginMode ? 'Regístrate' : 'Inicia sesión'}
              </button>
            </p>
          </div>
          <div className="mt-3 text-center">
            <p>
               Olvidaste tu Contraseña?
               <Link to={`/recovery`} class='noDeco' >
               
              <button onClick={handleToggleMode} className="btn btn-link">
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