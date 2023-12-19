import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const MenuItems = () => {
  const [expandedText, setExpandedText] = useState(null);
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
        <li onClick={() => navigate('/home/clientes/')} onMouseEnter={() => setExpandedText('Clientes a espera')} onMouseLeave={() => setExpandedText(null)}>{expandedText === 'Clientes a espera' ? 'Clientes a espera' : 'Clientes'}</li>
        <li onClick={() => navigate('/home/ordenes-trabajo/')} onMouseEnter={() => setExpandedText('Ordenes de trabajo')} onMouseLeave={() => setExpandedText(null)}>{expandedText === 'Ordenes de trabajo' ? 'Ordenes de trabajo' : 'Ordenes'}</li>
        <li onClick={handleNoActiveService} onMouseEnter={() => setExpandedText('Solicitudes pendientes')} onMouseLeave={() => setExpandedText(null)}>{expandedText === 'Solicitudes pendientes' ? 'Solicitudes pendientes' : 'Solicitudes'}</li>
        <li onClick={handleNoActiveService} onMouseEnter={() => setExpandedText('Historial de pedidos')} onMouseLeave={() => setExpandedText(null)}>{expandedText === 'Historial de pedidos' ? 'Historial de pedidos' : 'Historial'}</li>
        <li onClick={handleNoActiveService} onMouseEnter={() => setExpandedText('Modificación de costos')} onMouseLeave={() => setExpandedText(null)}>{expandedText === 'Modificación de costos' ? 'Modificación de costos' : 'Modificación'}</li>
    </ul>
  )
}

export default MenuItems
