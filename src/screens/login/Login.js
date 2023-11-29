import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Button from '../../components/Button';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

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
    <div className='login'>
      <ToastContainer />
      <div className='bg_special'>
        <div className='header'>
          <Link to={'/'}>
              <img className="img_logo_lit" src={require('../../assets/logo_lito_noBackground.png')} alt="logo_lit" />
          </Link>
        </div>
        <div className='container'>
          <h2>Bienvenido</h2>
          <div className='button_container'>
            <Button className='transparent_button' title='Inicio de Sesion' onClick={handleLoginClick} />
            <Button className='transparent_button' title='Registro' onClick={handleRegistroClick} />
          </div>
        </div>
      </div>
    </div>  
  )
}