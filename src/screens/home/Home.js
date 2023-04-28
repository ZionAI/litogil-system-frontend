import React, {useState, useRef, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import Button from '../../components/Button';
import './home.css';

export default function Home() {

  const options = ['Mattel', 'Spin Master', 'Option 3'];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showElement, setShowElement] = useState(false);
  const ref = useRef(null);

  const [showDropdown, setShowDropdown] = useState(false);

  function handleClick() {
    setShowElement(!showElement);
  }

  const handleDropdownItemClick = (option) => {
    setSelectedOption(option);
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
    <div className="container_home">
      <div className='contain_home'>
        <div className='item1'>
          <Link to="/">
            <img className="img_homepage_lit" src={require('../../assets/Logo-LG-2.png')} alt="logo_lit_home" />
          </Link>
        </div>
        <div className='item4'>
          <div className='contain_row'>
            <h4 className='text'>Juan Velazquez</h4>
            <RiLogoutBoxRFill className='icon_logout'/>
          </div>
        </div>
        <div className='item3'>
          <div className='contain_column'>
            <h2 className='text_title'>Módulo</h2>
            <Button className="btn_module" title="BOM (Bill of Materials)" onClick={handleClick} />
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
              <div className="dropdown">
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
            </div>

            {/* <label for="slct" className="select">CLIENTE</label>
              <select id="slct" className="style_select" value={selectedOption} onChange={handleOptionChange} required>
                {options.map((option, index) => (
                  <option className='style_select_option' key={index} value={`option${index + 1}`}>
                    {option}
                  </option>
                ))}
              </select>

              <svg className='sprites' viewBox="0 0 10 6">
                <symbol id="select-arrow-down" viewBox="0 0 10 6">
                  <polyline points="1 1 5 5 9 1"/>
                </symbol>
                <use xlinkHref="#select-arrow-down" style={{fill: '#0e67ab'}}/>
              </svg> */}
          </div>
        </div>}
        <div className='item5'>
          <img className="img_zion" src={require('../../assets/PoweredByZion.png')} alt="logo_zion" />
        </div>
        <div className='item6'>
          <div className='contain_column_btn'>
            <Button className="btn_module_details" title="Clientes"/>
            <Button className="btn_module_details" title="Borradores"/>
            <Button className="btn_module_details" title="Solicitudes pendientes"/>
            <Button className="btn_module_details" title="Historial de pedidos"/>
            <Button className="btn_module_details" title="Modificación de Costos"/>
          </div>
        </div>
      </div>
    </div>
  )
}
