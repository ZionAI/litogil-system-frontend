import { api } from "./api";

export const lista_productos = (id_cliente) => {
	return api.get('/productos/', {params:{
		'id_cliente':id_cliente
	}}, {params:{
		'id_cliente':id_cliente
	}});
};