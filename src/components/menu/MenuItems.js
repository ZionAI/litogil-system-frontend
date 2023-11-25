import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const MenuItems = () => {
    const navigate = useNavigate();
    const handleNoActiveService = () => {
        // navigate('/registro/');
        toast.info('No disponible por el momento', {
          position: 'bottom-center', // Posición de la notificación
          autoClose: 3000, // Duración en milisegundos
          hideProgressBar: false, // Ocultar la barra de progreso
        });
      };

  return (
    <ul className='menu'>
        <li onClick={() => navigate('/home/clientes/')}>Clientes</li>
        <li onClick={() => navigate('/home/ordenes-trabajo/')}>Ordenes de trabajo</li>
        <li onClick={handleNoActiveService}>Solicitudes pendientes</li>
        <li onClick={handleNoActiveService}>Historial de pedidos</li>
        <li onClick={handleNoActiveService}>Modificación de Costos</li>
    </ul>
  )
}

export default MenuItems