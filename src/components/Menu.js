import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import MenuItems from './MenuItems';
import './../styles/menu.css';

const Menu = () => {
  const navigate = useNavigate();
  const [isX, setIsX] = useState(false);

  const handleNoActiveService = () => {
    // navigate('/registro/');
    toast.info('No disponible por el momento', {
      position: 'bottom-center', // Posición de la notificación
      autoClose: 3000, // Duración en milisegundos
      hideProgressBar: false, // Ocultar la barra de progreso
    });
  };

  const handleClick = () => {
    setIsX(!isX);
  };

  return (
    <>
      <ToastContainer />
      <div className='menuCircle' onClick={handleClick}>
        {!isX ? (
          <div className='lines'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
        ): (
          <div className='linesX'>
            <div className='line'></div>
            <div className='line'></div>
          </div>
        )}
      </div>
      <div className={`content ${isX ? 'content-expanded' : ''}`}>
          <MenuItems />
          <div className='extraElements'>
            <p><RiLogoutBoxRFill/> Juan Velazquez</p>
            <img className='poweredLogo' src={require('./../assets/PoweredByZion.png')} alt="logo_zion" />
          </div>
      </div>
      <img className="img_litografia" src={require('./../assets/Logo-LG-2.png')} alt="logo_lit_home" />
    </>
  );
};

export default Menu;