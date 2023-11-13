import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Header from '../../components/Header';

export default function Login() {

  const navigate = useNavigate();

  const handleRegistroClick = () => {
    // navigate('/registro/');
    toast.info('Soon', {
      position: 'bottom-center', // Posición de la notificación
      autoClose: 3000, // Duración en milisegundos
      hideProgressBar: true, // Ocultar la barra de progreso
    });
  };

  const handleLoginClick = () => {
    navigate('/inicio-sesion/');
  };

  return (
    <div className="container_login">
      <ToastContainer />
      <Header redirectLink={'/'} />
      <div className="welcome">
        <h1 className="welcome_text">Bienvenido</h1>
        <div className='container_button'>
          <Button className="transparent_button" title="Inicia sesión" onClick={handleLoginClick}/>
          <Button className="transparent_button_regis" title="Registro" onClick={handleRegistroClick}/>
        </div>
      </div>
    </div>
  )
}

