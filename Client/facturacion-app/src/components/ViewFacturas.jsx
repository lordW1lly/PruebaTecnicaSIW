import React, { useState, useEffect } from 'react';
import { getAllFacturas } from '../Service/Service';

export function ViewFacturas() {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allFacturas = await getAllFacturas();
        setFacturas(allFacturas);
      } catch (error) {
        console.error('Error al obtener las facturas:', error);
        // Aquí puedes manejar el error según tus necesidades (por ejemplo, mostrar un mensaje de error al usuario)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Facturas</h1>
      <table class='table'>
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
              <td>${factura.total.toFixed(2)}</td>
              <td>{new Date(factura.fecha).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
