import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = ({ redirectLink }) => {
  return (
    <div className='header'>
        <Link to={redirectLink}>
            <img className="img_logo_lit" src={require('../assets/logo_lito_noBackground.png')} alt="logo_lit" />
        </Link>
    </div>
  )
}

export default Header