import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '../../components/Button';
import './clientes.css';
import Input from '../../components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Clientes() {

    const ref = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(false);

    const [allClientesData, setAllClientesData] = useState(true)

    const [selectedClient, setSelectedClient] = useState('');
    const [clienteElegido, setClienteElegido] = useState(false);

    const [showAddCliente, setShowAddCliente] = useState(false)
    const [showAddProductos, setShowAddProductos] = useState(false)
    const [showAddComponents, setShowAddComponents] = useState(false)

    const [showClientes, setShowCliente] = useState(true)
    const [showProductos, setShowProductos] = useState(false)
    const [showComponents, setShowComponents] = useState(false)

    const [oneClienteData, setOneClienteData] = useState(false)

    //Edit
    const [showEditarCliente, setShowEditarCliente] = useState(false)

    //GET Clientes
    const [clientesFromBack, setClientesFromBack] = useState([])
    //GET Cliente
    const [cliente1FromBack, setCliente1FromBack] = useState([])
    //GET Producto
    const [productosFromBack, setProductosFromBack] = useState([])
    //GET Component
    const [componentsFromBack, setComponentsFromBack] = useState([])

    const [razonSocial, setRazonSocial] = useState('')
    const [nif, setNIF] = useState('')
    const [rfc, setRFC] = useState('')
    const [street, setStreet] = useState('')
    const [noextern, setNoextern] = useState('')
    const [noint, setNoint] = useState('')
    const [colony, setColony] = useState('')
    const [cp, setCP] = useState('')
    const [district, setDistrict] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [alias, setAlias] = useState('')
    const [nombreCliente, setNombreCliente] = useState('')
    const [desProduct, setDesProduct] = useState('')
    const [salesNumber, setSalesNumber] = useState('')
    const [nameComponent, setNameComponent] = useState('')
    const [desComponent, setDesComponent] = useState('')
    const [nameProduct, setNameProduct] = useState('')
    const [cantidadComponent, setCantidadComponent] = useState('')
    const [espesorComponent, setEspesorComponent] = useState('')
    const [altoComponent, setAltoComponent] = useState('')
    const [anchoComponent, setAnchoComponent] = useState('')
    const [productComponent, setProductComponent] = useState('')
    const [unitDimComponent, setUnitDimComponent] = useState('')
    const [unitEspComponent, setUnitEspComponent] = useState('')
    const [esNacional, setEsNacional] = useState(false)

    const checkClick_Clientes = () => {
        setClienteElegido(true)
        get_clientid();
    }

    const handleDropdownItemClick = (clientId, clientName) => {
        setSelectedClient({ id: clientId, name: clientName });
        setBackgroundColor(true);
        setShowDropdown(false);
    };

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
      };

    const handleEditarCliente = () => {
        setShowAddProductos(false)
        setShowAddComponents(false)
        setShowAddCliente(false)
        setShowEditarCliente(prevState => !prevState);
    }

    const handleAddCliente = () => {
        setShowAddProductos(false)
        setShowAddComponents(false)
        setShowAddCliente(prevState => !prevState);
    }

    const handleAddProductos = () => {
        setShowAddCliente(false)
        setShowAddComponents(false)
        setShowAddProductos(prevState => !prevState);
    }

    const handleAddComponents = () => {
        setShowAddCliente(false)
        setShowAddProductos(false)
        setShowAddComponents(prevState => !prevState);
    }

    const handleComponents = () => {
        setShowCliente(false)
        setShowProductos(false)
        setShowAddProductos(false)
        setShowAddCliente(false)
        setShowComponents(true)
        get_componenteid();
    }

    const handleProductos = () => {
        setShowCliente(false)
        setShowComponents(false)
        setShowAddComponents(false)
        setShowAddCliente(false)
        setShowProductos(true)
        get_productoid();
    }

    const handleClientes = () => {
        setShowProductos(false)
        setShowComponents(false)
        setShowAddComponents(false)
        setShowAddProductos(false)
        setShowCliente(true)
    }

    const handleEsNacional = (event) => {
        const value = event.target.value;
        setEsNacional(value);
    };

    const handleEspesorComponent = (event) => {
        const value = event.target.value;
        setEspesorComponent(value);
    };

    const handleAltoComponent = (event) => {
        const value = event.target.value;
        setAltoComponent(value);
    };

    const handleAnchoComponent = (event) => {
        const value = event.target.value;
        setAnchoComponent(value);
    };

    const handleProductComponent = (event) => {
        const value = event.target.value;
        setProductComponent(value);
    };

    const handleUnitDimComponent = (event) => {
        const value = event.target.value;
        setUnitDimComponent(value);
    };

    const handleUnitEspComponent = (event) => {
        const value = event.target.value;
        setUnitEspComponent(value);
    };

    const handleDesProduct = (event) => {
        const value = event.target.value;
        setDesProduct(value);
    };
    
    const handleSalesNumber = (event) => {
        const value = event.target.value;
        setSalesNumber(value);
    };

    const handleNameComponent = (event) => {
        const value = event.target.value;
        setNameComponent(value);
    };

    const handleDesComponent = (event) => {
        const value = event.target.value;
        setDesComponent(value);
    };

    const handleCantidadComponent = (event) => {
        const value = event.target.value;
        setCantidadComponent(value);
    };
 
    const handleNameProduct = (event) => {
        const value = event.target.value;
        setNameProduct(value);
    };

    const handleNombreCliente = (event) => {
        const value = event.target.value;
        setNombreCliente(value);
    }

    const handleAlias = (event) => {
        const value = event.target.value;
        setAlias(value);
    };

    const handleRazonSocial = (event) => {
        const value = event.target.value;
        setRazonSocial(value);
    };

    const handleNIF = (event) => {
        const value = event.target.value;
        setNIF(value);
    };

    const handleRFC = (event) => {
        const value = event.target.value;
        setRFC(value);
    };


    const handleStreet = (event) => {
        const value = event.target.value;
        setStreet(value);
    };

    const handleNoextern = (event) => {
        const value = event.target.value;
        setNoextern(value);
    };

    const handleNoint = (event) => {
        const value = event.target.value;
        setNoint(value);
    };

    const handleColony = (event) => {
        const value = event.target.value;
        setColony(value);
    };

    const handleCP = (event) => {
        const value = event.target.value;
        setCP(value);
    };

    const handleDistrict = (event) => {
        const value = event.target.value;
        setDistrict(value);
    };

    const handleState = (event) => {
        const value = event.target.value;
        setState(value);
    };

    const handleCity = (event) => {
        const value = event.target.value;
        setCity(value);
    };

    const handlePhoneNumber = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
    };

    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    };

    useEffect(() => {
        axios.get('http://161.35.48.220:8000/api/v1/clientes/')
        .then(response => {
            console.log(response.data)
            setClientesFromBack(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])


    const get_clientid = () => {
        axios.get(`http://161.35.48.220:8000/api/v1/clientes/${selectedClient.id}`)
        .then(response => {
            // Manejar la respuesta de éxito si es necesario
            setCliente1FromBack(response.data)
            setAllClientesData(false)
            setOneClienteData(true)
            console.log('respuesta 1 cliente',response.data);
        })
        .catch(error => {
          // Manejar el error si la solicitud falla
          console.error(error);
          toast.error('Hubo un problema al encontrar al cliente');
        });
    }

    const get_productoid = () => {
        axios.get(`http://161.35.48.220:8000/api/v1/productos/?id_cliente=${selectedClient.id}`)
        .then(response => {
            // Manejar la respuesta de éxito si es necesario
            setProductosFromBack(response.data)
            console.log('respuesta productos',response.data);
        })
        .catch(error => {
          // Manejar el error si la solicitud falla
          console.error(error);
          toast.error('Hubo un problema al encontrar el producto');
        });
    }

    const get_componenteid = () => {
        axios.get(`http://161.35.48.220:8000/api/v1/componentes/?id_producto=${productosFromBack.id}`)
        .then(response => {
            // Manejar la respuesta de éxito si es necesario
            setComponentsFromBack(response.data)
            console.log('respuesta componentes',response.data);
        })
        .catch(error => {
            // Manejar el error si la solicitud falla
            console.error(error);
            toast.error('Hubo un problema al encontrar el componente');
        });
    }

    const handleSubmitAddClient = () => {
        const data = {
            nombre_cliente: alias,
            alias: alias,
            clave_cliente:'7451',
            es_nacional: esNacional,
            razon_social: razonSocial,
            ein: nif,
            rfc: rfc,
            calle: street,
            no_ext: noextern,
            no_int: noint,
            colonia: colony,
            cp_zip: cp,
            ciudad: city,
            distrito: district,
            tel: phone_number,
            mail: email
         };
      
         axios.post('http://161.35.48.220:8000/api/v1/clientes/', data)
         .then(response => {
           // Manejar la respuesta de éxito si es necesario
           console.log(response.data);
           toast.success('Se ha añadido el cliente con éxito');
           setAlias('');
           setRazonSocial('');
           setEsNacional(false)
           setNIF('');
           setRFC('');
           setStreet('');
           setNoextern('');
           setNoint('');
           setColony('');
           setCP('');
           setCity('');
           setDistrict('');
           setState('');
           setPhoneNumber('');
           setEmail('');
         })
         .catch(error => {
           // Manejar el error si la solicitud falla
           console.error(error);
           toast.error('Hubo un problema al añadir al cliente');
         });
      };
    
    const originalData = {
        ...cliente1FromBack
    };

    const handleSubmitEditClient = () => {

        const updatedFields = {};

        if (alias === '') {
            updatedFields.alias = originalData.alias;
        } else if (alias !== originalData.alias) {
          updatedFields.alias = alias;
        }

        if (nombreCliente === '') {
            updatedFields.nombre_cliente = originalData.nombre_cliente;
        } else if (nombreCliente !== originalData.nombre_cliente) {
          updatedFields.nombre_cliente = nombreCliente;
        }

        if (razonSocial === '') {
            updatedFields.razon_social = originalData.razon_social;
        } else if  (razonSocial !== originalData.razon_social) {
            updatedFields.razon_social = razonSocial;
        }

        if (nif === '') {
            updatedFields.ein = originalData.ein;
        } else if (nif !== originalData.ein) {
            updatedFields.ein = nif;
        }

        if (rfc === '') {
            updatedFields.rfc = originalData.rfc;
        } else if (rfc !== originalData.rfc) {
            updatedFields.rfc = rfc;
        }

        if (street === '') {
            updatedFields.calle = originalData.calle;
        } else if (street !== originalData.calle) {
            updatedFields.calle = street;
        }

        if (noextern === '') {
            updatedFields.no_ext = originalData.no_ext;
        } else if (noextern !== originalData.no_ext) {
            updatedFields.no_ext = noextern;
        }

        if (noint === '') {
            updatedFields.no_int = originalData.no_int;
        } else if (noint !== originalData.no_int) {
            updatedFields.no_int = noint;
        }

        if (colony === '') {
            updatedFields.colonia = originalData.colonia;
        } else if (colony !== originalData.colonia) {
            updatedFields.colonia = colony;
        }

        if (cp === '') {
            updatedFields.cp_zip = originalData.cp_zip;
        } else if (cp !== originalData.cp_zip) {
            updatedFields.cp_zip = cp;
        }

        if (city === '') {
            updatedFields.ciudad = originalData.ciudad;
        } else if (city !== originalData.ciudad) {
            updatedFields.ciudad = city;
        }

        if (district === '') {
            updatedFields.distrito = originalData.distrito;
        } else if (district !== originalData.distrito) {
            updatedFields.distrito = district;
        }

        if (phone_number === '') {
            updatedFields.tel = originalData.tel;
        } else if (phone_number !== originalData.tel) {
            updatedFields.tel = phone_number;
        }

        if (email === '') {
            updatedFields.mail = originalData.mail;
        } else if (email !== originalData.mail) {
            updatedFields.mail = email;
        }

        console.log("boolean", esNacional)

        if (esNacional === false) {
            updatedFields.es_nacional = originalData.es_nacional;
        } else if (esNacional !== originalData.es_nacional) {
            updatedFields.es_nacional = esNacional;
        }

        const data = {
            ...updatedFields,
            clave_cliente:'7451',
        };
        
        axios.patch(`http://161.35.48.220:8000/api/v1/clientes/${selectedClient.id}`, data)
            .then(response => {
            // Manejar la respuesta de éxito si es necesario
            console.log(response.data);
            toast.success('Se ha actualizado el cliente con éxito');
            setShowEditarCliente(false)
        })
            .catch(error => {
            // Manejar el error si la solicitud falla
            console.error(error);
            toast.error('Hubo un problema al añadir al cliente');
        });
    };
    
    const handleSubmitAddProducto = () => {
        const data = {
            nombre: nameProduct,
            descripcion: desProduct,
            sales_number: salesNumber,
            cliente: selectedClient.id
         };
      
         axios.post('http://161.35.48.220:8000/api/v1/productos/', data)
         .then(response => {
           // Manejar la respuesta de éxito si es necesario
           console.log(response.data);
           toast.success('Se ha añadido el cliente con éxito');
           setNameProduct('');
           setDesProduct('');
           setSalesNumber('')
         })
         .catch(error => {
           // Manejar el error si la solicitud falla
           console.error(error);
           toast.error('Hubo un problema al añadir al cliente');
         });
      };
    
    const handleSubmitAddComponent = () => {
        const data = {
            es_externo: true,
            nombre: nameComponent,
            descripcion: desComponent,
            cantidad: parseInt(cantidadComponent),
            alto: parseInt(altoComponent),
            ancho: parseInt(anchoComponent),
            espesor: parseInt(espesorComponent),
            producto: parseInt(productComponent),
            unidad_dimension: parseInt(unitDimComponent),
            unidad_espesor: parseInt(unitEspComponent)
        };
        console.log(data)
        axios.post('http://161.35.48.220:8000/api/v1/componentes/', data)
        .then(response => {
            // Manejar la respuesta de éxito si es necesario
            console.log(response.data);
            toast.success('Se ha añadido el cliente con éxito');
            setNameComponent('');
            setDesComponent('');
            setCantidadComponent('')
            setAltoComponent('');
            setAnchoComponent('');
            setEspesorComponent('')
            setProductComponent('');
            setUnitDimComponent('');
            setUnitEspComponent('')
          })
          .catch(error => {
            // Manejar el error si la solicitud falla
            console.error(error);
            toast.error('Hubo un problema al añadir al cliente');
          });
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

      console.log("alias",cliente1FromBack.alias)
      console.log("data",cliente1FromBack)

    return (
        <div className="container_clientes">
            <ToastContainer />
            <div className='contain_clientes'>
                <div className='item1_clientes'>
                <Link to="/home">
                    <img className="img_clientes_lit" src={require('../../assets/Logo-LG-2.png')} alt="logo_lit_home" />
                </Link>
                </div>
                <div className='item4_clientes'>
                <div className='contain_row'>
                    <h4 className='text_clientes'>Juan Velazquez</h4>
                    <Link to="/">
                        <RiLogoutBoxRFill className='icon_logout_clientes'/>
                    </Link>
                </div>
                </div>
                <div className='item3_clientes'>
                <div className='contain_column'>
                    <h3 className='text_title_clientes'>Módulo</h3>
                    <Link to="/home">
                        <Button className="btn_module_clientes" title="Home" />
                    </Link>
                </div>
                </div> 
                <div className='item2_clientes'>
                    <div className='contain_row'>
                        <button className='btn_plusclientes' onClick={handleClientes}>
                            <p className='title_clientes_add'>Clientes</p>
                        </button>
                        <button className='btn_plusclientes' onClick={handleProductos} disabled={!clienteElegido}>
                            <p className='title_clientes_add'>Productos</p>
                        </button>
                        <button className='btn_plusclientes' onClick={handleComponents} disabled={!clienteElegido}>
                            <p className='title_clientes_add'>Componentes</p>
                        </button>
                    </div>
                    {showClientes &&
                    <div className='contain_column'>
                        <div className="dropdown-container" ref={ref}>
                            <label for="slct" className="select">CLIENTE</label>
                            <div className='contain_row_dropdown' style={{ paddingTop: '2px', marginTop:'2px'}}>
                                <div className="dropdown" style={{ paddingTop: '2px', marginTop:'2px'}}>
                                <button className="style_select" onClick={handleDropdownClick}>
                                    {selectedClient.name || "Select a client"}
                                </button>
                                <div className={showDropdown ? "dropdown-content" : "dropdown-content hidden"}>
                                    {clientesFromBack.map((clientes, index) => (
                                    <div className="dropdown-item" key={index} onClick={() => handleDropdownItemClick(clientes?.id_cliente, clientes?.nombre_cliente)}>
                                        {clientes?.nombre_cliente}
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
                                    <button className={backgroundColor ? 'btn_checkhome_true' : 'btn_checkhome'} onClick={backgroundColor ? () => checkClick_Clientes() : null}>
                                        <BsCheckLg className='icon_checkhome'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {oneClienteData &&
                        <div>
                            <div className='table_data_clientes contain_row'>
                                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className='filter_headers'>Cliente</th>
                                            <th className='filter_headers'>Fecha de Registro</th>
                                            <th className='filter_headers'>Productos</th>
                                            <th className='filter_headers'>No. de Pedidos</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {cliente1FromBack &&
                                            <tr>
                                            <td className='filter_celtas'>{cliente1FromBack.nombre_cliente}</td>
                                            <td className='filter_celtas'>{cliente1FromBack.calle}</td>
                                            <td className='filter_celtas'>{cliente1FromBack.colonia}</td>
                                            <td className='filter_celtas'>{cliente1FromBack.distrito}</td>
                                            </tr>
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        }
                        {allClientesData &&
                        <div>
                            <div className='table_data_clientes contain_row'>
                                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className='filter_headers'>Cliente</th>
                                            <th className='filter_headers'>Fecha de Registro</th>
                                            <th className='filter_headers'>Productos</th>
                                            <th className='filter_headers'>No. de Pedidos</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {clientesFromBack.map((item, index) => (
                                            <tr key={index}>
                                            <td className='filter_celtas'>{item.nombre_cliente}</td>
                                            <td className='filter_celtas'>{item.calle}</td>
                                            <td className='filter_celtas'>{item.colonia}</td>
                                            <td className='filter_celtas'>{item.distrito}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        }
                        { clienteElegido &&
                        <div style={{ position: 'absolute', top: '90%', left: '36%' }}>
                            <Button className='btn_editar' title="Editar" onClick={handleEditarCliente}/>
                        </div>
                        }
                        <div style={{ position: 'absolute', top: '90%', left: '43%' }}>
                            <Button className='btn_agregar' title="Agregar" onClick={handleAddCliente}/>
                        </div>
                    </div>
                    }
                    {showProductos &&
                    <div>
                        <div>
                            <div className='table_data_clientes contain_row'>
                                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className='filter_headers'>Cliente</th>
                                            <th className='filter_headers'>Fecha de Registro</th>
                                            <th className='filter_headers'>Productos</th>
                                            <th className='filter_headers'>No. de Pedidos</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {productosFromBack.map((item, index) => (
                                            <tr key={index}>
                                            <td className='filter_celtas'>{item.cliente}</td>
                                            <td className='filter_celtas'>{item.created_at}</td>
                                            <td className='filter_celtas'>{item.nombre}</td>
                                            <td className='filter_celtas'>{item.sales_number}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', top: '90%', left: '43%' }}>
                            <Button className='btn_agregar' title="Agregar" onClick={handleAddProductos}/>
                        </div>
                    </div>
                    }
                    {showComponents &&
                    <div>
                        <div>
                            <div className='table_data_clientes contain_row'>
                                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className='filter_headers'>Cliente</th>
                                            <th className='filter_headers'>Nombre</th>
                                            <th className='filter_headers'>Cantidad</th>
                                            <th className='filter_headers'>Unidad</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {/* TODO */}
                                        {componentsFromBack.map((item, index) => (
                                            <tr key={index}>
                                            <td className='filter_celtas'>{item.nombre_cliente}</td>
                                            <td className='filter_celtas'>{item.calle}</td>
                                            <td className='filter_celtas'>{item.colonia}</td>
                                            <td className='filter_celtas'>{item.distrito}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', top: '90%', left: '43%' }}>
                            <Button className='btn_agregar' title="Agregar" onClick={handleAddComponents}/>
                        </div>
                    </div>
                    }
                </div>
                { showEditarCliente &&
                <div className='item7_clientes'>
                    <div>
                        <div className='contain_row'>
                            <p className='title_item7_clientes'>EDITAR CLIENTE</p>
                            <button className='btn_checkpedidos_clientesadd' onClick={handleSubmitEditClient}>
                                <BsCheckLg className='icon_checkpedidos'/>
                            </button>
                        </div>
                        <div className='contain_column' style={{justifyContent:"center"}}>
                            <div className='contain_column' style={{marginLeft:'20%'}}>
                                <p className='title_addnew_cliente'>INFORMACIÓN FISCAL</p>
                                <Input className="inputs_clientes" placeholder={cliente1FromBack.alias} type="text" value={alias} onChange={handleAlias} />
                                <Input className="inputs_clientes" placeholder={cliente1FromBack.nombre_cliente} type="text" value={nombreCliente} onChange={handleNombreCliente} />
                                <Input className="inputs_clientes" placeholder={cliente1FromBack.razon_social} type="text" value={razonSocial} onChange={handleRazonSocial} />
                                <Input className="inputs_clientes" placeholder={cliente1FromBack.ein} type="text" value={nif} onChange={handleNIF} />
                                <Input className="inputs_clientes" placeholder={cliente1FromBack.rfc} type="text" value={rfc} onChange={handleRFC} />
                                <p className='title_addnew_cliente' style={{marginTop:'5%'}}>DIRECCIÓN</p>
                                <Input className="inputs_clientes" placeholder={cliente1FromBack.calle} type="text" value={street} onChange={handleStreet} />
                                <div className='contain_row'>
                                    <Input className="inputs_clientes_2" style={{marginRight:'20px'}} placeholder={cliente1FromBack.no_ext} type="text" value={noextern} onChange={handleNoextern} />
                                    <Input className="inputs_clientes_2" placeholder={cliente1FromBack.no_int} type="text" value={noint} onChange={handleNoint} />
                                </div>
                                <Input className="inputs_clientes" placeholder={cliente1FromBack.colonia} type="text" value={colony} onChange={handleColony} />
                                <div className='contain_row'>
                                    <Input className="inputs_clientes_2" style={{marginRight:'20px'}} placeholder={cliente1FromBack.cp_zip} type="text" value={cp} onChange={handleCP} />
                                    <Input className="inputs_clientes_2" placeholder={cliente1FromBack.distrito} type="text" value={district} onChange={handleDistrict} />
                                </div>
                                <Input className="inputs_clientes" placeholder={cliente1FromBack.estado} type="text" value={state} onChange={handleState} />
                                <Input className="inputs_clientes" placeholder={cliente1FromBack.ciudad} type="text" value={city} onChange={handleCity} />
                                <p className='title_addnew_cliente' style={{marginTop:'5%'}}>CONTACTO</p>
                                <Input className="inputs_clientes" placeholder={cliente1FromBack.tel} type="number" value={phone_number} onChange={handlePhoneNumber} />
                                <Input className="inputs_clientes" placeholder={cliente1FromBack.mail} type="email" value={email} onChange={handleEmail} />
                                <div className='contain_row'>
                                    <input type="checkbox" style={{marginRight:'10px', marginTop:'10px'}}  checked={esNacional} onChange={handleEsNacional}/>
                                    <p className='title_addnew_cliente'>Es Nacional</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                }
                { showAddCliente &&
                <div className='item7_clientes'>
                    <div>
                        <div className='contain_row'>
                            <p className='title_item7_clientes'>NUEVO CLIENTE</p>
                            <button className='btn_checkpedidos_clientesadd' onClick={handleSubmitAddClient}>
                                <BsCheckLg className='icon_checkpedidos'/>
                            </button>
                        </div>
                        <div className='contain_column' style={{justifyContent:"center"}}>
                            <div className='contain_column' style={{marginLeft:'20%'}}>
                                <p className='title_addnew_cliente'>INFORMACIÓN FISCAL</p>
                                <Input className="inputs_clientes" placeholder="Alias" type="text" value={alias} onChange={handleAlias} />
                                <Input className="inputs_clientes" placeholder="Nombre" type="text" value={nombreCliente} onChange={handleNombreCliente} />
                                <Input className="inputs_clientes" placeholder="Razon social" type="text" value={razonSocial} onChange={handleRazonSocial} />
                                <Input className="inputs_clientes" placeholder="NIF" type="text" value={nif} onChange={handleNIF} />
                                <Input className="inputs_clientes" placeholder="RFC" type="text" value={rfc} onChange={handleRFC} />
                                <p className='title_addnew_cliente' style={{marginTop:'5%'}}>DIRECCIÓN</p>
                                <Input className="inputs_clientes" placeholder="Calle" type="text" value={street} onChange={handleStreet} />
                                <div className='contain_row'>
                                    <Input className="inputs_clientes_2" style={{marginRight:'20px'}} placeholder="No. Exterior" type="text" value={noextern} onChange={handleNoextern} />
                                    <Input className="inputs_clientes_2" placeholder="No. Interior" type="text" value={noint} onChange={handleNoint} />
                                </div>
                                <Input className="inputs_clientes" placeholder="Colonia" type="text" value={colony} onChange={handleColony} />
                                <div className='contain_row'>
                                    <Input className="inputs_clientes_2" style={{marginRight:'20px'}} placeholder="C.P." type="text" value={cp} onChange={handleCP} />
                                    <Input className="inputs_clientes_2" placeholder="Distrito" type="text" value={district} onChange={handleDistrict} />
                                </div>
                                <Input className="inputs_clientes" placeholder="Estado" type="text" value={state} onChange={handleState} />
                                <Input className="inputs_clientes" placeholder="Ciudad" type="text" value={city} onChange={handleCity} />
                                <p className='title_addnew_cliente' style={{marginTop:'5%'}}>CONTACTO</p>
                                <Input className="inputs_clientes" placeholder="Teléfono" type="number" value={phone_number} onChange={handlePhoneNumber} />
                                <Input className="inputs_clientes" placeholder="Correo Electrónico" type="email" value={email} onChange={handleEmail} />
                                <div className='contain_row'>
                                    <input type="checkbox" style={{marginRight:'10px', marginTop:'10px'}}  checked={esNacional} onChange={handleEsNacional}/>
                                    <p className='title_addnew_cliente'>Es Nacional</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                }
                { showAddProductos &&
                <div className='item7_clientes'>
                    <div>
                        <div className='contain_row'>
                            <p className='title_item7_clientes'>NUEVO PRODUCTO</p>
                            <button className='btn_checkpedidos_components' onClick={handleSubmitAddProducto}>
                                <BsCheckLg className='icon_checkpedidos'/>
                            </button>
                        </div>
                        <div className='contain_column' style={{justifyContent:"center"}}>
                            <div className='contain_column' style={{marginLeft:'20%'}}>
                                <p className='title_addnew_cliente'>CARACTERISTICAS</p>
                                <Input className="inputs_clientes" style={{marginTop:'12px'}} placeholder="Nombre" type="text" value={nameProduct} onChange={handleNameProduct} />
                                <Input className="inputs_clientes_3" style={{marginTop:'6px'}} placeholder="Descripcion" type="text" value={desProduct} onChange={handleDesProduct} />
                                <Input className="inputs_clientes" style={{marginTop:'6px'}} placeholder="Sales Number" type="text" value={salesNumber} onChange={handleSalesNumber} />
                            </div>
                        </div>  
                    </div>
                </div>
                }
                {showAddComponents &&
                <div className='item7_clientes'>
                    <div>
                        <div className='contain_row'>
                            <p className='title_item7_clientes'>NUEVO COMPONENTE</p>
                            <button className='btn_checkpedidos_components' onClick={handleSubmitAddComponent}>
                                <BsCheckLg className='icon_checkpedidos'/>
                            </button>
                        </div>
                        <div className='contain_column' style={{justifyContent:"center"}}>
                            <div className='contain_column' style={{marginLeft:'20%'}}>
                                <p className='title_addnew_cliente'>CARACTERISTICAS</p>
                                <Input className="inputs_clientes" style={{marginTop:'12px'}} placeholder="Nombre" type="text" value={nameComponent} onChange={handleNameComponent} />
                                <Input className="inputs_clientes_3" style={{marginTop:'6px'}} placeholder="Descripcion" type="text" value={desComponent} onChange={handleDesComponent} />
                                <div className='contain_row' style={{marginTop:'6px'}}>
                                    <Input className="inputs_clientes_2" style={{marginRight:'20px'}} placeholder="Cantidad" type="number" value={cantidadComponent} onChange={handleCantidadComponent} />
                                    <Input className="inputs_clientes_2" placeholder="Espesor" type="number" value={espesorComponent} onChange={handleEspesorComponent} />
                                </div>
                                <div className='contain_row' style={{marginTop:'6px'}}>
                                    <Input className="inputs_clientes_2" style={{marginRight:'20px'}} placeholder="Alto" type="number" value={altoComponent} onChange={handleAltoComponent} />
                                    <Input className="inputs_clientes_2" placeholder="Ancho" type="number" value={anchoComponent} onChange={handleAnchoComponent} />
                                </div>
                                <Input className="inputs_clientes" style={{marginTop:'6px'}} placeholder="Producto" type="number" value={productComponent} onChange={handleProductComponent} />
                                <div className='contain_row' style={{marginTop:'6px'}}>
                                    <Input className="inputs_clientes_2" style={{marginRight:'20px'}} placeholder="Unidad de Dimension" type="number" value={unitDimComponent} onChange={handleUnitDimComponent} />
                                    <Input className="inputs_clientes_2" placeholder="Unidad de Espesor" type="number" value={unitEspComponent} onChange={handleUnitEspComponent} />
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                }
                <div className='item5_clientes'>
                <img className="img_zion_clientes" src={require('../../assets/PoweredByZion.png')} alt="logo_zion" />
                </div>
                <div className='item6_clientes'>
                <div className='contain_column_btn'>
                    <Button className="btn_module_details_clientes" title="Clientes"/>
                    <Button className="btn_module_details" title="Borradores"/>
                    <Button className="btn_module_details" title="Solicitudes pendientes"/>
                    <Button className="btn_module_details" title="Historial de pedidos"/>
                    <Button className="btn_module_details" title="Modificación de Costos"/>
                </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

