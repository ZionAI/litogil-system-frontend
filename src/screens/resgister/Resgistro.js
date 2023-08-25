import React, {useState} from 'react'
import './registro.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom';

export default function Registro () {

    const navigate = useNavigate();

    const [nombre, setName] = useState('');
    const [nombreTouched, setNameTouched] = useState(false);
    const [apellido, setLastName] = useState('');
    const [apellidoTouched, setLastNameTouched] = useState(false);
    const [correo, setEmail] = useState('');
    const [correoTouched, setEmailTouched] = useState(false);

    const handleSuccessClick = () => {
      navigate('/registro/success/');
    };

    const isNameValid = nombre.trim() !== '';
    const isLastNameValid = apellido.trim() !== '';
    const isValidEmail = correo.trim() !== '';
    
    function isEmailValid(email) {
        console.log()
        // Validating email using regular expression
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(email);
    }
  
    const isFormValid = isNameValid && isLastNameValid && isEmailValid(correo) && isValidEmail;

    const handleNombreChange = (event) => {
        setName(event.target.value);
        setNameTouched(true);
    };

    const handleApellidoChange = (event) => {
        setLastName(event.target.value);
        setLastNameTouched(true);
    };

    const handleCorreoChange = (event) => {
        setEmail(event.target.value);
        setEmailTouched(true);    
    };

    console.log(isEmailValid)
    const isEmailFieldValid = correoTouched && isEmailValid(correo) && isValidEmail;


    return(
        <div className="container_registro">
            <div>
                <Link to="/">
                    <img className="img_logo_lit" src={require('../../assets/logo_gil.jfif')} alt="logo_lit" />
                </Link>
            </div>
            <div className="wrapper">
                <div className="container-register">
                    <p className="title">Registro</p>
                    <div className="inputs">
                        <Input className="inputs_registro" placeholder="Nombre" type="text" value={nombre} onChange={handleNombreChange} />
                        {nombreTouched && !isNameValid && <span className="error-message">Ingrese un nombre</span>}
                        <Input className="inputs_registro" placeholder="Apellido" type="text" value={apellido} onChange={handleApellidoChange} />
                        {apellidoTouched && !isLastNameValid && <span className="error-message">Ingrese un apellido</span>}
                        <Input className="inputs_registro" placeholder="Correo Empresarial" type="email" value={correo} onChange={handleCorreoChange} />
                        {correoTouched && !isEmailFieldValid && (<span className="error-message">Ingrese un correo valido</span>)}
                    </div>
                    <div className="container-button">
                        <Button className="btn-resgister" title="Registro" onClick={handleSuccessClick} disabled={!isFormValid}  />
                    </div>
                </div>
            </div>
        </div>
    )
}