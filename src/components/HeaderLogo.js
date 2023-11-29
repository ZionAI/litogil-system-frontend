import { Link } from 'react-router-dom'
import '../styles/headerLogo.css'

const Header = ({ redirectLink }) => {
  return (
    <div className='headerLogo'>
        <Link to={redirectLink}>
            <img className="img_logo_lit" src={require('../assets/Logo-LG-2.png')} alt="logo_lit" />
        </Link>
    </div>
  )
}

export default Header