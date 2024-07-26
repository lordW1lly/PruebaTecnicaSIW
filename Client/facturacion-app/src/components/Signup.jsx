import { Link } from 'react-router-dom'
import { register } from '../Service/Service';
import { useNavigate } from 'react-router-dom';

export  function SignUp () {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        const name = e.target.name.value;
        const username = e.target.username.value;
        const password = e.target.password.value
        register(username, password,name ).then((res) => {
          console.log(res)
           localStorage.setItem('username', JSON.stringify({username, token: res.data.user.token, idUsuario: res.data.user.idUsuario}))
          navigate('/viewFacturas');
         })
          
        
        // Aquí iría la lógica para enviar los datos del formulario al servidor
        console.log('Formulario enviado');
      };
    
    return(
        <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">
            Registrate
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Nombre de Usuario</label>
              <input type="text" className="form-control" id="username" placeholder="Ingrese su nombre de usuario" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" />
            </div>
            {/* Resto de los campos del formulario */}
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
            <Link to="/" className='ms-2' >
            <button className="btn btn-danger">
              Cancelar
            </button>
            </Link>
          </form>
          <div className="mt-3 text-center">
            <Link to={`/login`} class='noDeco' >
            <p>
               ¿Ya tienes una cuenta?
              <button className="btn btn-link">
                 Inicia sesión
              </button>
            </p>
            </Link>
          </div>
          <div className="mt-3 text-center">
            <p>
               Olvidaste tu Contraseña?
               <Link to={`/recovery`} class='noDeco' >
               
              <button  className="btn btn-link">
                Restablecer Contraseña
              </button>
              </Link>
            </p>
          </div>
          
        </div>
      </div>
    </div>
    )
}