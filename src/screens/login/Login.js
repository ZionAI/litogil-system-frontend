import React from 'react';
import Button from '../../components/Button';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

export default function Login() {

  const navigate = useNavigate();

  const handleRegistroClick = () => {
    navigate('/registro/');
  };

  const handleLoginClick = () => {
    navigate('/inicio-sesion/');
  };

  return (
    <div className="container_login">
      <div>
          <Link to="/">
            <img className="img_logo_lit" src={require('../../assets/logo_gil.jfif')} alt="logo_lit" />
          </Link>
      </div>
      <div className="welcome">
        <h1 className="welcome-text">Bienvenido</h1>
        <div>
          <Button className="transparent-button" title="Inicia sesión" onClick={handleLoginClick}/>
          <Button className="transparent-button-regis" title="Registro" onClick={handleRegistroClick}/>
        </div>
      </div>
    </div>
  )
}

