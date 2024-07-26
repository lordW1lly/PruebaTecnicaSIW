import React from 'react';
import './App.css'; // Importar archivo CSS para estilos personalizados
import { Login } from './components/Login'
import { Route, Routes } from 'react-router-dom';
import {SignUp} from './components/Signup';

import { Recovery } from './components/Recovery';
import { ViewFacturas } from './components/ViewFacturas';

function App() {
  return(
    <React.StrictMode>
        <Routes>

          <Route exact path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recovery" element={<Recovery />} />
          
          <Route path="/viewFacturas" element={<ViewFacturas/>} />
          <Route path="/" element={<ViewFacturas />} />
        </Routes>
      </React.StrictMode>
  )
}

export default App;
