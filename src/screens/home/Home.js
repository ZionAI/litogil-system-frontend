import React, {useState, useRef, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { BsCheckLg } from 'react-icons/bs';
import Button from '../../components/Button';
import './home.css';
import HeaderLogo from '../../components/HeaderLogo';
import Menu from '../../components/Menu';
import MenuItems from '../../components/menu/MenuItems';
import Principal from '../../layout/Principal';

export default function Home() {

  const navigate = useNavigate();

  const options = ['Mattel', 'Spin Master', 'Option 3'];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showElement, setShowElement] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(false);
  const [checkElement, setcheckElement] = useState(false)
  const ref = useRef(null);

  const [showDropdown, setShowDropdown] = useState(false);

  function checkClick(showElement, selectedOption) {
    navigate('/home/registro-pedido/', {
      state: { showElement, selectedOption }
    });
  }

  function handleClickClientes() {
    navigate('/home/clientes/');
  }

  function handleClickOrdenes () {
    navigate('/home/ordenes-trabajo/')
  }

  function handleClick() {
    setShowElement(!showElement);
    setBackgroundColor(false);
    setcheckElement(false);
  }

  const handleDropdownItemClick = (option) => {
    setSelectedOption(option);
    setBackgroundColor(true);
    setcheckElement(true);
    setShowDropdown(false);
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return (
    <Principal>
      {/* <div className='contain_home'>
        <div className='item1_home'>
          <Link to="/">
            <img className="img_homepage_lit" src={require('../../assets/Logo-LG-2.png')} alt="logo_lit_home" />
          </Link>
        </div>
        <div className='item4'>
          <div className='contain_row'>
            <h4 className='text_home'>Juan Velazquez</h4>
            <RiLogoutBoxRFill className='icon_logout_home'/>
          </div>
        </div>
        <div className='item3'>
          <div className='contain_column'>
            <h3 className='text_title_home'>Módulo</h3>
            <Button className="btn_module_home" title="BOM (Bill of Materials)" onClick={handleClick} />
          </div>
        </div>
        {showElement && 
        <div className='item2'>
          <div>
            <h4 className='text_cliente'>SELECCIONA UN CLIENTE</h4>
          </div>
          <div className='contain_column'>
            <div className="dropdown-container" ref={ref}>
              <label for="slct" className="select">CLIENTE</label>
              <div className='contain_row_dropdown' style={{ paddingTop: '2px', marginTop:'2px'}}>
                <div className="dropdown" style={{ paddingTop: '2px', marginTop:'2px'}}>
                  <button className="style_select" onClick={handleDropdownClick}>
                    {selectedOption}
                  </button>
                  <div className={showDropdown ? "dropdown-content" : "dropdown-content hidden"}>
                    {options.map((option, index) => (
                      <div className="dropdown-item" key={index} onClick={() => handleDropdownItemClick(option)}>
                        {option}
                      </div>
                    ))}
                  </div>
                  <svg className='sprites' viewBox="0 0 10 6">
                    <symbol id="select-arrow-down" viewBox="0 0 10 6">
                      <polyline points="1 1 5 5 9 1"/>
                    </symbol>
                    <use xlinkHref="#select-arrow-down" style={{fill: '#0e67ab'}}/>
                  </svg>
                </div>
                <div>
                  <button className={backgroundColor ? 'btn_checkhome_true' : 'btn_checkhome'} onClick={backgroundColor ? () => checkClick(showElement, selectedOption) : null}>
                    <BsCheckLg className='icon_checkhome'/>
                  </button>
                </div>
              </div>
              {checkElement && 
                <div className='contain_row'>
                  <div className='contain_column' style={{paddingRight: '20%', marginTop: '7%'}}>
                    <h5 className='title_infoclient'>INFORMACIÓN FISCAL</h5>
                    <p className='subtitle_infoclient'>Nombre o razón social</p>
                    <p className='response_client'>Mattel</p>
                    <p className='subtitle_infoclient'>NIF</p>
                    <p className='response_client'>XAXX0101101000</p>
                    <p className='subtitle_infoclient'>RFC</p>
                    <p className='response_client'>ABC00101XY1</p>
                  </div>
                  <div className='divide_line'>
                  </div>
                  <div className='contain_column' style={{marginTop: '7%', marginRight: '8%'}}>
                    <h5 className='title_infoclient'>DIRECCIÓN</h5>
                    <p className='subtitle_infoclient'>Calle</p>
                    <p className='response_client'>Toltecas</p>
                    <p class='subtitle_infoclient'>No. Exterior</p>
                    <p className='response_client'>1000</p>
                    <p className='subtitle_infoclient'>No. Interior</p>
                    <p className='response_client'>101</p>
                  </div>
                  <div className='contain_column' style={{marginTop: '12.2%', marginRight: '10%'}}>
                    <p className='subtitle_infoclient'>Colonia</p>
                    <p className='response_client'>San Pedro de los Pinos</p>
                    <p className='subtitle_infoclient'>C.P.</p>
                    <p className='response_client'>52140</p>
                    <p className='subtitle_infoclient'>Delegacion/Municipio</p>
                    <p className='response_client'>Alvaro Obregon</p>
                  </div>
                  <div className='contain_column' style={{marginTop: '12.2%', marginRight: '15%'}}>
                    <p className='subtitle_infoclient'>Estado</p>
                    <p className='response_client'>Ciudad de México</p>
                    <p className='subtitle_infoclient'>Ciudad</p>
                    <p className='response_client'>México</p>
                  </div>
                  <div className='divide_line'>
                  </div>
                  <div className='contain_column' style={{marginTop: '7%'}}>
                    <h5 className='title_infoclient'>CONTACTO</h5>
                    <p className='subtitle_infoclient'>Teléfono</p>
                    <p className='response_client'>55 5555 5555</p>
                    <p className='subtitle_infoclient'>Correo</p>
                    <p className='response_client'>mattel@mattel.com</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>}
        <div className='item5'>
          <img className="img_zion_home" src={require('../../assets/PoweredByZion.png')} alt="logo_zion" />
        </div>
        <div className='item6'>
          <div className='contain_column_btn_home'>
            <Button className="btn_module_details_home" title="Clientes" onClick={handleClickClientes}/>
            <Button className="btn_module_details_home" title="Ordenes de trabajo" onClick={handleClickOrdenes}/>
            <Button className="btn_module_details_home" title="Solicitudes pendientes"/>
            <Button className="btn_module_details_home" title="Historial de pedidos"/>
            <Button className="btn_module_details_home" title="Modificación de Costos"/>
          </div>
        </div>
      </div> */}
      <Menu /> 
    </Principal>
  )
}

