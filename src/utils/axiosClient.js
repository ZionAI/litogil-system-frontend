import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://161.35.48.220:8000/api/v1/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

const getClients = () => {
    return axiosClient.get('/clientes/')
}

const getClientById = (id) => {
    return axiosClient.get(`/clientes/${id}`)
}

const getProductsByClientId = (idCliente) => {
    return axiosClient.get(`/productos/?id_cliente=${idCliente}`)
}

const getComponentsByProductId = (idProducto) => {
    return axiosClient.get(`/componentes/?id_producto=${idProducto}`)
}

const agregarCliente = (nuevoClienteData) => {
    return axiosClient.post('/clientes/', nuevoClienteData) 
}