import React, {useState, useRef, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import { BsCheckLg } from 'react-icons/bs';
import Button from '../../components/Button';
import './home.css';
import Menu from '../../components/Menu';
import Principal from '../../layout/Principal';

export default function Home() {
  const options = ['Mattel', 'Spin Master', 'Gamesa'];

  const mockupData = {
    'Mattel': {
      fiscalInfo: {
        name: 'Mattel™',
        NIF: 'XAXX0101101000',
        RFC: 'ABC00101XY1'
      },
      address: {
        street: 'Av. Juguetes Felices',
        exteriorNumber: '123',
        interiorNumber: '10',
        colony: 'Centro',
        postalCode: '11111',
        municipality: 'Cuauhtémoc',
        state: 'Ciudad de México',
        city: 'México'
      },
      contactInfo: {
        phone: '55 1111 1111',
        email: 'contacto@mattel.com'
      }
    },
    'Spin Master': {
      fiscalInfo: {
        name: 'Spin Master™',
        NIF: 'XAXX0202202000',
        RFC: 'DEF00202ZW2'
      },
      address: {
        street: 'Calle de los Juegos Divertidos',
        exteriorNumber: '456',
        interiorNumber: '20A',
        colony: 'Reforma',
        postalCode: '22222',
        municipality: 'Benito Juárez',
        state: 'Ciudad de México',
        city: 'México'
      },
      contactInfo: {
        phone: '55 2222 2222',
        email: 'info@spinmaster.com'
      }
    },
    'Gamesa': {
      fiscalInfo: {
        name: 'Gamesa™',
        NIF: 'XAXX0303303000',
        RFC: 'GHI00303UV3'
      },
      address: {
        street: 'Av. de los Juegos Educativos',
        exteriorNumber: '789',
        interiorNumber: '30B',
        colony: 'Polanco',
        postalCode: '33333',
        municipality: 'Miguel Hidalgo',
        state: 'Ciudad de México',
        city: 'México'
      },
      contactInfo: {
        phone: '55 3333 3333',
        email: 'info@gamesa.com'
      }
    }
  };
  
  
  
  const [selectedOption, setSelectedOption] = useState('');
  const [companyInfo, setCompanyInfo] = useState({});
  const [displayInfo, setDisplayInfo] = useState(false);

  const navigate = useNavigate();


  const handleSelectOption = (e) => {
    if(e.target.value === 'Selecciona una opción'){
      setSelectedOption('Selecciona una opción');
      setCompanyInfo({})
      setDisplayInfo(false);
    } else {
      setSelectedOption(e.target.value);
      setCompanyInfo(mockupData[e.target.value])
      setDisplayInfo(true);
    }
  };

  return (
    <Principal text={'BOM(Bill of materials)'}> 
      <div className='principalElement'>
        <h2 className='title'>Selecciona un cliente</h2>
        <h2 className='subtitle'>Cliente</h2>
        <div className='optionContainer'>
          <select value={selectedOption} onChange={handleSelectOption} className='selector'>
                <option>
                  Selecciona una opción
                </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
          <button className='button' onClick={ selectedOption !== '' ? () => navigate('/home/clientes/') : null}><FaCheck className="icon"/></button>
        </div>
        {displayInfo &&  companyInfo && (
          <div className='data'>
              <div className='info'>
                <h3 className='title'>Información fiscal</h3>
                <h3 className='subtitle'>Nombre o razón social</h3>
                <p>{companyInfo.fiscalInfo.name}&trade;</p>
                <h3 className='subtitle'>NIF</h3>
                <p>{companyInfo.fiscalInfo.NIF}</p>
                <h3 className='subtitle'>RFC</h3>
                <p>{companyInfo.fiscalInfo.RFC}</p>
              </div>
              <div className='separator'></div>
              <div className='info'>
                <h3 className='title'>Dirección</h3>
                <div className='columns'>
                 <div>
                    <h3 className='subtitle'>Calle</h3>
                    <p>{companyInfo.address.street}</p>
                    <h3 className='subtitle'>No. Exterior</h3>
                    <p>{companyInfo.address.exteriorNumber}</p>
                    <h3 className='subtitle'>No. Interior</h3>
                    <p>{companyInfo.address.interiorNumber}</p>
                 </div> 
                 <div>
                    <h3 className='subtitle'>Colonia</h3>
                    <p>{companyInfo.address.colony}</p>
                    <h3 className='subtitle'>C.P.</h3>
                    <p>{companyInfo.address.postalCode}</p>
                    <h3 className='subtitle'>Delegacion/Municipio</h3>
                    <p>{companyInfo.address.municipality}</p>
                 </div> 
                 <div>
                    <h3 className='subtitle'>Estado</h3>
                    <p>{companyInfo.address.state}</p>
                    <h3 className='subtitle'>Ciudad</h3>
                    <p>{companyInfo.address.city}</p>
                 </div> 
                </div>
              </div>
              <div className='separator'></div>
              <div className='info'>
                <h3 className='title'>Información fiscal</h3>
                <h3 className='subtitle'>Teléfono</h3>
                <p>{companyInfo.contactInfo.phone}</p>
                <h3 className='subtitle'>Correo</h3>
                <p>{companyInfo.contactInfo.email}</p>
              </div>
          </div>
        )}
      </div>
      <Menu /> 
    </Principal>
  )
}

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

