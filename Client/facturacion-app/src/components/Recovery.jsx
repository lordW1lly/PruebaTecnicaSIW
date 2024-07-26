

export function Recovery() {
    const handleSubmit = () => {

    }
    return(
        <div className=" row container mt-5 justify-content-md-center">
        <div className="col-md-6 text-center ">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
            </div>
            
            {/* Resto de los campos del formulario */}
            <button type="submit" className="btn btn-primary">
             Restablecer
            </button>
          </form>
    
        </div>
        </div>  
    )
        
}