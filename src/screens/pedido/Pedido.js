import React, {useState, useEffect, useRef} from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '../../components/Button';
import './pedido.css';
import Input from '../../components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Pedido() {

  const location = useLocation();
  const { showElement, selectedOption } = location.state;

  const options = ['Debanado', 'Armado', 'Suaje'];

  const [pedidos, setPedidos] = useState([{}]);
  const [mostrarBoton, setMostrarBoton] = useState(true);

  const [selectedComponent, setSelectedComponent] = useState('Componente');

  const [showDropdown, setShowDropdown] = useState(false);
  const [isValid, setIsValid] = useState(false);
  
  const [producto, setProducto] = useState('');
  const [description, setDes] = useState('');
  const [numid, setId] = useState('');
  const [sales, setSales] = useState('');
  const [obs, setObs] = useState('');
  const [hasValue, setHasValue] = useState(false);
  const [showElement1, setShowElement1] = useState(showElement);
  const [showElement2, setShowElement2] = useState(false);
  const [showElement3, setShowElement3] = useState(false);
  const [showElement7, setShowElement7] = useState(false);

  const [checkElement, setcheckElement] = useState(false)
  
  const ref = useRef(null);

  const handleTable = () => {
    setShowElement7(true)
  };

  const handleDuplicateClick = () => {
    setPedidos([...pedidos, {}]);
    setMostrarBoton(false);
  };


  const handleProduct = (event) => {
    setProducto(event.target.value);
    setHasValue(!!event.target.value);
  };

  const handleDes = (event) => {
    setDes(event.target.value);
    setIsValid(!!event.target.value && sales && numid);
  };

  const handleSales = (event) => {
    setSales(event.target.value);
    setIsValid(!!event.target.value && description && numid);
  };

  const handleId = (event) => {
    setId(event.target.value);
    setIsValid(!!event.target.value && description && sales);
  };

  const handleObs = (event) => {
    setObs(event.target.value);
  };

  const handleItem = () => {
    setShowElement1(true);
    setShowElement3(true);
  };

  const handleItemflow = () => {
    if (isValid) {
      setShowElement1(false);
      setShowElement3(false);
      setShowElement2(true);
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownItemClick = (option) => {
    setSelectedComponent(option);
    setcheckElement(true);
    setShowDropdown(false);
  };

  const handleDropdownClickProceso = (index) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            showDropdownProceso: !pedido.showDropdownProceso,
          };
        }
        return pedido;
      })
    );
  };

  const handleDropdownItemClickProceso = (index, option) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            selectedProceso: option,
            showDropdownProceso: false,
          };
        }
        return pedido;
      })
    );
  };

  const handleDropdownClickCantidad = (index) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            showDropdownCantidad: !pedido.showDropdownCantidad,
          };
        }
        return pedido;
      })
    );
  };

  const handleDropdownItemClickCantidad = (index, option) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            selectedCantidad: option,
            showDropdownCantidad: false,
          };
        }
        return pedido;
      })
    );
  };

  const handleDropdownClickMaterial = (index) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            showDropdownMaterial: !pedido.showDropdownMaterial,
          };
        }
        return pedido;
      })
    );
  };

  const handleDropdownItemClickMaterial = (index, option) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            selectedMaterial: option,
            showDropdownMaterial: false,
          };
        }
        return pedido;
      })
    );
  };

  const handleDropdownClickGramaje = (index) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            showDropdownGramaje: !pedido.showDropdownGramaje,
          };
        }
        return pedido;
      })
    );
  };

  const handleDropdownItemClickGramaje = (index, option) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            selectedGramaje: option,
            showDropdownGramaje: false,
          };
        }
        return pedido;
      })
    );
  };


  const handleDropdownClickAncho = (index) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            showDropdownAncho: !pedido.showDropdownAncho,
          };
        }
        return pedido;
      })
    );
  };

  const handleDropdownItemClickAncho = (index, option) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            selectedAncho: option,
            showDropdownAncho: false,
          };
        }
        return pedido;
      })
    );
  };


  const handleDropdownClickLargo = (index) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            showDropdownLargo: !pedido.showDropdownLargo,
          };
        }
        return pedido;
      })
    );
  };

  const handleDropdownItemClickLargo = (index, option) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            selectedLargo: option,
            showDropdownLargo: false,
          };
        }
        return pedido;
      })
    );
  };


  const handleDropdownClickImpresion = (index) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            showDropdownImpresion: !pedido.showDropdownImpresion,
          };
        }
        return pedido;
      })
    );
  };

  const handleDropdownItemClickImpresion = (index, option) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            selectedImpresion: option,
            showDropdownImpresion: false,
          };
        }
        return pedido;
      })
    );
  };

  const handleDropdownClickAcabado = (index) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            showDropdownAcabado: !pedido.showDropdownAcabado,
          };
        }
        return pedido;
      })
    );
  };

  const handleDropdownItemClickAcabado = (index, option) => {
    setPedidos((prevState) =>
      prevState.map((pedido, i) => {
        if (i === index) {
          return {
            ...pedido,
            selectedAcabado: option,
            showDropdownAcabado: false,
          };
        }
        return pedido;
      })
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !event.target.classList.contains("dropdown-item")
      ) {
        setPedidos((prevState) =>
          prevState.map((pedido) => ({
            ...pedido,
            showDropdownImpresion: false,
            showDropdownAcabado: false,
            showDropdownLargo: false,
            showDropdownAncho: false,
            showDropdownGramaje: false,
            showDropdownMaterial: false,
            showDropdownCantidad: false,
            showDropdownProceso: false,
          }))
        );
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  const buttonClassName = hasValue ? 'btn_checkpedidos_true' : 'btn_checkpedidos';
  const secondbuttonClassName = isValid ? 'btn_agregar_2' : 'btn_agregar';


  return (
  <div className="container_pedidos">
      <div className='contain_pedidos'>
        <div className='item1'>
          <Link to="/">
            <img className="img_pedidos_lit" src={require('../../assets/Logo-LG-2.png')} alt="logo_lit_home" />
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
            <Button className="btn_module_pedido" title="BOM (Bill of Materials)" />
          </div>
        </div>
        {showElement1 && 
        <div className='item2'>
          <div className='contain_row'>
            <h4 className='text_cliente'>REGISTRO DE PEDIDO</h4>
            <h5 className='text_cliente_2'>{selectedOption}</h5>
            <img className="img_client" src={require('../../assets/logo_mattel.png')} alt="client_img"/>
          </div>
          <div className='contain_column'>
            <p className="select_pedidos">NUEVO PEDIDO</p>
            <div className='contain_row' style={{paddingTop:'0px', marginTop:'0px'}}>
              <Input className="inputs_pedido" placeholder="Producto" type="text" value={producto} onChange={handleProduct} />
              <button className={buttonClassName} onClick={handleItem}>
                <BsCheckLg className='icon_checkpedidos'/>
              </button>
            </div>
            {showElement3 &&
            <div style={{marginTop: '5%'}}>
              <div style={{marginBottom: '2%'}}>
                <p className="select_pedidos">Descripción</p>
                <div className='contain_row'>
                  <Input className="inputs_pedido" placeholder="Description" type="text" value={description} onChange={handleDes} />
                </div>
              </div>
              <div style={{marginBottom: '2%'}}>
                <p className="select_pedidos">Num. ID</p>
                <div className='contain_row'>
                  <Input className="inputs_pedido" placeholder="ID" type="text" value={numid} onChange={handleId} />
                </div>
              </div>
              <div>
                <p className="select_pedidos">Sales</p>
                <div className='contain_row'>
                  <Input className="inputs_pedido" placeholder="Sales" type="text" value={sales} onChange={handleSales} />
                </div>
              </div>
            </div>
            }
            <div className={showElement3 ? 'btn_pedidos_position' : 'btn_pedidos_position_check' }>
              <Button className={secondbuttonClassName} title="Agregar" onClick={handleItemflow}/>
            </div>
          </div>
        </div>}
        {showElement2 && 
        <div className='item2'>
          <div className='contain_row'>
            <h4 className='text_cliente'>REGISTRO DE PEDIDO</h4>
            <h5 className='text_cliente_2'>{selectedOption}</h5>
            <img className="img_client" src={require('../../assets/logo_mattel.png')} alt="client_img"/>
          </div>
          <div className='contain_column'>
            <div className='contain_row'>
              <p className="select_pedidos">PEDIDO</p>
              <p className='select_pedidos_2'>{producto}</p>
              <p className="select_pedidos" style={{ marginLeft: '15%'}}>ID</p>
              <p className='select_pedidos_2'>{numid}</p>
            </div>
            <div className='contain_column' ref={ref}>
              <p className='select_pedidos'>COMPONENTE</p>
              <div className='contain_row'>
                <div className="dropdown">
                  <button className="style_select_pedidos" onClick={handleDropdownClick}>
                    {selectedComponent}
                  </button>
                  <div className={showDropdown ? "dropdown-content_pedidos" : "dropdown-content_pedidos hidden"}>
                    {options.map((option, index) => (
                      <div className="dropdown-item" key={index} onClick={() => handleDropdownItemClick(option)}>
                        {option}
                      </div>
                    ))}
                  </div>
                  <svg className='sprites_pedidos' viewBox="0 0 10 6">
                    <symbol id="select-arrow-down" viewBox="0 0 10 6">
                      <polyline points="1 1 5 5 9 1"/>
                    </symbol>
                    <use xlinkHref="#select-arrow-down" style={{fill: '#0e67ab'}}/>
                  </svg>
                </div>
                <div>
                  <button className='btn_pluspedidos'>
                    <AiOutlinePlus className='icon_pluspedidos'/>
                  </button>
                </div>
              </div>
              {checkElement &&
                <div>
                  {pedidos.map((pedido, index) => (
                    <div key={index}>
                      <div className='contain_column'>
                        <div className='dropdown_pedidos'>
                          <div className='contain_row'>
                            <p className='select_pedidos_3'>PROCESO</p>
                            {mostrarBoton && (
                              <button className='btn_pluspedidos_3' onClick={handleDuplicateClick}>
                                <AiOutlinePlus className='icon_pluspedidos_1'/>
                              </button>
                            )}
                          </div> 
                        </div>
                        <div className='contain_row' style={{marginLeft: '13px'}}>
                          <div>
                            <button className="style_select_pedidos" onClick={() => handleDropdownClickProceso(index)}>
                              {pedido.selectedProceso ? pedido.selectedProceso : "Seleccionar Proceso"}
                            </button>
                            <div className={pedido.showDropdownProceso ? "dropdown-content_pedidos" : "dropdown-content_pedidos hidden"}>
                              {[
                                "", // Opción por defecto
                                ...options.map((option, idx) => (
                                  <div
                                    className="dropdown-item"
                                    key={idx}
                                    onClick={() => handleDropdownItemClickProceso(index, option)}
                                  >
                                    {option}
                                  </div>
                                ))
                              ]}
                            </div>
                            <svg className='sprites_pedidos' viewBox="0 0 10 6">
                              <symbol id="select-arrow-down" viewBox="0 0 10 6">
                                <polyline points="1 1 5 5 9 1"/>
                              </symbol>
                              <use xlinkHref="#select-arrow-down" style={{fill: '#0e67ab'}}/>
                            </svg>
                          </div>
                          <div >
                            <button className="style_select_pedidos" onClick={() => handleDropdownClickCantidad(index)}>
                              {pedido.selectedCantidad ? pedido.selectedCantidad : "Seleccionar Cantidad"}
                            </button>
                            <div className={pedido.showDropdownCantidad ? "dropdown-content_pedidos" : "dropdown-content_pedidos hidden"}>
                              {[
                                "", // Opción por defecto
                                ...options.map((option, idx) => (
                                  <div
                                    className="dropdown-item"
                                    key={idx}
                                    onClick={() => handleDropdownItemClickCantidad(index, option)}
                                  >
                                    {option}
                                  </div>
                                ))
                              ]}
                            </div>
                            <svg className='sprites_pedidos' viewBox="0 0 10 6">
                              <symbol id="select-arrow-down" viewBox="0 0 10 6">
                                <polyline points="1 1 5 5 9 1"/>
                              </symbol>
                              <use xlinkHref="#select-arrow-down" style={{fill: '#0e67ab'}}/>
                            </svg>
                          </div>
                          <div>
                            <button className='btn_pluspedidos_2'>
                              <AiOutlinePlus className='icon_pluspedidos'/>
                            </button>
                          </div>
                        </div>
                        <div className='contain_row' style={{marginLeft: '13px', marginTop: '2%'}}>
                          <div>
                            <button className="style_select_pedidos" onClick={() => handleDropdownClickMaterial(index)}>
                              {pedido.selectedMaterial ? pedido.selectedMaterial : "Seleccionar Material"}
                            </button>
                            <div className={pedido.showDropdownMaterial ? "dropdown-content_pedidos" : "dropdown-content_pedidos hidden"}>
                              {[
                                "", // Opción por defecto
                                ...options.map((option, idx) => (
                                  <div
                                    className="dropdown-item"
                                    key={idx}
                                    onClick={() => handleDropdownItemClickMaterial(index, option)}
                                  >
                                    {option}
                                  </div>
                                ))
                              ]}
                            </div>
                            <svg className='sprites_pedidos' viewBox="0 0 10 6">
                              <symbol id="select-arrow-down" viewBox="0 0 10 6">
                                <polyline points="1 1 5 5 9 1"/>
                              </symbol>
                              <use xlinkHref="#select-arrow-down" style={{fill: '#0e67ab'}}/>
                            </svg>
                          </div>
                          <div >
                            <button className="style_select_pedidos" onClick={() => handleDropdownClickGramaje(index)}>
                             {pedido.selectedGramaje ? pedido.selectedGramaje : "Seleccionar Gramaje"}
                            </button>
                            <div className={pedido.showDropdownGramaje ? "dropdown-content_pedidos" : "dropdown-content_pedidos hidden"}>
                              {[
                                "", // Opción por defecto
                                ...options.map((option, idx) => (
                                  <div
                                    className="dropdown-item"
                                    key={idx}
                                    onClick={() => handleDropdownItemClickGramaje(index, option)}
                                  >
                                    {option}
                                  </div>
                                ))
                              ]}
                            </div>
                            <svg className='sprites_pedidos' viewBox="0 0 10 6">
                              <symbol id="select-arrow-down" viewBox="0 0 10 6">
                                <polyline points="1 1 5 5 9 1"/>
                              </symbol>
                              <use xlinkHref="#select-arrow-down" style={{fill: '#0e67ab'}}/>
                            </svg>
                          </div>
                          <div>
                            <button className='btn_pluspedidos_2'>
                              <AiOutlinePlus className='icon_pluspedidos'/>
                            </button>
                          </div>
                        </div>
                        <div className='contain_row' style={{marginLeft: '13px', marginTop: '2%'}}>
                          <div>
                            <button className="style_select_pedidos" onClick={() => handleDropdownClickAncho(index)}>
                              {pedido.selectedAncho ? pedido.selectedAncho : "Seleccionar Ancho"}
                            </button>
                            <div className={pedido.showDropdownAncho ? "dropdown-content_pedidos" : "dropdown-content_pedidos hidden"}>
                              {[
                                "", // Opción por defecto
                                ...options.map((option, idx) => (
                                  <div
                                    className="dropdown-item"
                                    key={idx}
                                    onClick={() => handleDropdownItemClickAncho(index, option)}
                                  >
                                    {option}
                                  </div>
                                ))
                              ]}
                            </div>
                            <svg className='sprites_pedidos' viewBox="0 0 10 6">
                              <symbol id="select-arrow-down" viewBox="0 0 10 6">
                                <polyline points="1 1 5 5 9 1"/>
                              </symbol>
                              <use xlinkHref="#select-arrow-down" style={{fill: '#0e67ab'}}/>
                            </svg>
                          </div>
                          <div >
                            <button className="style_select_pedidos" onClick={() => handleDropdownClickLargo(index)}>
                              {pedido.selectedLargo ? pedido.selectedLargo : "Seleccionar Largo"}
                            </button>
                            <div className={pedido.showDropdownLargo ? "dropdown-content_pedidos" : "dropdown-content_pedidos hidden"}>
                              {[
                                "", // Opción por defecto
                                ...options.map((option, idx) => (
                                  <div
                                    className="dropdown-item"
                                    key={idx}
                                    onClick={() => handleDropdownItemClickLargo(index, option)}
                                  >
                                    {option}
                                  </div>
                                ))
                              ]}
                            </div>
                            <svg className='sprites_pedidos' viewBox="0 0 10 6">
                              <symbol id="select-arrow-down" viewBox="0 0 10 6">
                                <polyline points="1 1 5 5 9 1"/>
                              </symbol>
                              <use xlinkHref="#select-arrow-down" style={{fill: '#0e67ab'}}/>
                            </svg>
                          </div>
                        </div>
                        <div className='contain_row' style={{marginLeft: '13px', marginTop: '2%'}}>
                          <div>
                            <button className="style_select_pedidos" onClick={() => handleDropdownClickImpresion(index)}>
                              {pedido.selectedImpresion ? pedido.selectedImpresion : "Seleccionar impresión"}
                            </button>
                            <div className={pedido.showDropdownImpresion ? "dropdown-content_pedidos" : "dropdown-content_pedidos hidden"}>
                              {[
                                "", // Opción por defecto
                                ...options.map((option, idx) => (
                                  <div
                                    className="dropdown-item"
                                    key={idx}
                                    onClick={() => handleDropdownItemClickImpresion(index, option)}
                                  >
                                    {option}
                                  </div>
                                ))
                              ]}
                            </div>
                            <svg className='sprites_pedidos' viewBox="0 0 10 6">
                              <symbol id="select-arrow-down" viewBox="0 0 10 6">
                                <polyline points="1 1 5 5 9 1"/>
                              </symbol>
                              <use xlinkHref="#select-arrow-down" style={{fill: '#0e67ab'}}/>
                            </svg>
                          </div>
                          <div >
                            <button className="style_select_pedidos" onClick={() => handleDropdownClickAcabado(index)}>
                              {pedido.selectedAcabado ? pedido.selectedAcabado : "Seleccionar acabado"}
                            </button>
                            <div className={pedido.showDropdownAcabado ? "dropdown-content_pedidos" : "dropdown-content_pedidos hidden"}>
                              {[
                                "", // Opción por defecto
                                ...options.map((option, idx) => (
                                  <div
                                    className="dropdown-item"
                                    key={idx}
                                    onClick={() => handleDropdownItemClickAcabado(index, option)}
                                  >
                                    {option}
                                  </div>
                                ))
                              ]}
                            </div>
                            <svg className='sprites_pedidos' viewBox="0 0 10 6">
                              <symbol id="select-arrow-down" viewBox="0 0 10 6">
                                <polyline points="1 1 5 5 9 1"/>
                              </symbol>
                              <use xlinkHref="#select-arrow-down" style={{fill: '#0e67ab'}}/>
                            </svg>
                          </div>
                        </div>
                        <div style={{marginLeft: '13px', marginTop: '2%'}}>
                          <Input className="inputs_pedido_obs" placeholder="Observaciones" type="text" value={obs} onChange={handleObs} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              }
            </div>
            {!checkElement && 
              <div className='contain_row'>
                <div className='btn_pedidos_position_1'>
                    <Button className="btn_nuevo" title="Nuevo Proceso"/>
                </div>
                <div className='btn_pedidos_position_2'>
                    <Button className="btn_agregar" title="Agregar"/>
                </div>
              </div>
            }
            {checkElement && 
              <div className='contain_row'>
                <div className={mostrarBoton ? "btn_pedidos_position_3" : "btn_pedidos_position_5"}>
                    <Button className="btn_nuevo" title="Nuevo Proceso"/>
                </div>
                <div className={mostrarBoton ? "btn_pedidos_position_4" : "btn_pedidos_position_6"}>
                    <Button className="btn_agregar" title="Agregar" onClick={handleTable}/>
                </div>
              </div>
            }
          </div>
        </div>}
        {showElement7 &&
          <div className='item7'>
            <div className='tabla_position'>
            <table class="table table-dark">
              <thead>
                ...
              </thead>
              <tbody>
                <tr class="table-active">
                  ...
                </tr>
                <tr>
                  ...
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2" class="table-active">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        }
        <div className='item5'>
          <img className="img_zion_pedidos" src={require('../../assets/PoweredByZion.png')} alt="logo_zion" />
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
