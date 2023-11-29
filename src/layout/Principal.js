import React from 'react'
import { Link } from 'react-router-dom'
import MenuItems from '../components/MenuItems'
import { RiLogoutBoxRFill } from 'react-icons/ri';
import './../styles/principal.css'

const Principal = ({children, text, link}) => {
  return (
    <div className='principalLayout'>
        <div className="top-left">
            <Link to="/">
                <img className="image_logo" src={require('./../assets/Logo-LG-2.png')} alt="logo_lit_home" />
            </Link>
            <h3 className='titulo'>Módulo</h3>
            <h4 className='section'>{text}</h4>
        </div>
        <div className="top-right">
            <div className='contain_row'>
                <h4 className='text_home'>Juan Velazquez</h4>
                <RiLogoutBoxRFill className='icon_logout_home'/>
            </div>
        </div>
        <div className='center'>
            {children}
        </div>
        <div className="bottom-left">
            <MenuItems />
        </div>
        <div className="bottom-right">
            <img className="img_zion_home" src={require('./../assets/PoweredByZion.png')} alt="logo_zion" />
        </div>
    </div>  
  )
}

export default Principal