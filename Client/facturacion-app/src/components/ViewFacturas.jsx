import React, { useState, useEffect } from 'react';
import { getAllFacturas } from '../Service/Service';
import { useNavigate } from 'react-router-dom';

export function ViewFacturas() {
  const navigate = useNavigate()
  const [facturas, setFacturas] = useState([]);
  const user = JSON.parse(localStorage.getItem('username'))

  useEffect(() => {
    if(!localStorage.getItem('username')) {
      navigate('/login')
    }
    const fetchData = async () => {
      try {
        
        const allFacturas = await getAllFacturas();
        setFacturas(allFacturas);

      } catch (error) {
        console.error('Error al obtener las facturas:', error);
        
      }
    };

    fetchData();
  }, []);

  function close() {
    localStorage.clear()
    navigate('/login')
  }

  return (

    <div className="container">
      <nav class="navbar navbar-light bg-light">
      <p className="navbar-brand">Usuario: {user.username}</p>
    <button onClick={close} class="btn btn-outline-danger me-2" type="button">Cerrar Sesion</button>
    

</nav>
      <h1>Lista de Facturas</h1>
      <table class='table table-striped'>
        <thead>
          <tr>
            <th scope="col">ID Factura</th>
            <th scope="col">Cliente</th>
            <th scope="col"> Total</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map((factura) => (
            <tr key={factura.idFactura}>
              <td>{factura.idFactura}</td>
              <td>{factura.cliente}</td>
              <td>${factura.total}</td>
              <td>{new Date(factura.fecha).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
