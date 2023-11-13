import React, { useState } from 'react'
import './sesion.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Header from '../../components/Header';

export default function Registro () {

    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [correo, setEmail] = useState('');
    const [correoTouched, setEmailTouched] = useState(false);

    const isPasswordValid = password.trim() !== '';
    const isValidEmail = correo.trim() !== '';
      
    const handleLogin = () => {
        login(correo, password).then(({ status, data }) => {
            if (status === 200 && data.access) {
                navigate('/home/');
            } 
            // Si hay otros códigos de estado que quieras manejar en el caso de éxito, puedes agregarlos aquí
        }).catch(error => {
            console.error("Error durante el login:", error);
    
            // Acceder al campo 'status' dentro del error
            if (error.response.status === 401) {
                toast.error('Usuario o Contraseña Incorrectos', {
                    position: 'bottom-center',
                    autoClose: 3000,
                    hideProgressBar: true,
                });
            } else {
                // Manejar otros errores de la manera que necesites
                toast.error('Ocurrió un error inesperado', {
                    position: 'bottom-center',
                    autoClose: 3000,
                    hideProgressBar: true,
                });
            }
        });
    };    

    function isEmailValid(email) {
        // Validating email using regular expression
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(email);
    }

    const isFormValid = isPasswordValid && isEmailValid(correo) && isValidEmail;

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordTouched(true);
    };

    const handleCorreoChange = (event) => {
        setEmail(event.target.value);
        setEmailTouched(true);    
    };

    const isEmailFieldValid = correoTouched && isEmailValid(correo) && isValidEmail;

    return(
        <div className="container_sesion">
            <ToastContainer />
            <Header redirectLink={'/'} />
            <div class="wrapper">
                <div class="container_sesion_title">
                    <p class="title">Inicia sesión</p>
                    <div class="inputs">
                        <Input className="inputs_sesion" placeholder="Correo Empresarial" type="email" value={correo} onChange={handleCorreoChange}/>
                        {/* {correoTouched && !isEmailFieldValid && (<span className="error-message">Ingrese un correo valido</span>)} */}
                        <Input className="inputs_sesion" placeholder="Contraseña" type="password" value={password} onChange={handlePasswordChange}/>
                        {passwordTouched && !isPasswordValid && <span className="error-message">Ingrese una contraseña</span>}
                    </div>
                    <div class="container_forgot">
                        <Link to="/" className="forgotpass">Olvide mi contraseña</Link>
                    </div>
                    <div class="container_sesion">
                        <Button className="btn_sesion" title="Inicia sesión" onClick={handleLogin}/>
                    </div>
                </div>
            </div>
        </div>
    )
}