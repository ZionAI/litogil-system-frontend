import React from 'react'
import './registro.css'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';

export default function Success() {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/inicio-sesion/');
  };

  return (
    <div className="container_registro">
        <Header redirectLink={'/'} />
        <div class="wrap-success">
          <h1 className="success-text">¡Todo listo!</h1>
          <p className='text-normal'>Por seguridad te hemos generado una contraseña.<br />Guárdala para poder ingresar al portal.</p>
          <h1 className="success-text">0FASj54SD</h1>
          <Button className="btn-success" title="Inicia sesión" onClick={handleLoginClick}/>
        </div>
    </div>
  )
}
