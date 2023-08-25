import { api } from "./api";

export const status_orden_trabajo = () => {
	return api.get('/ordenes-trabajo/status/');
};

export const lista_ordenes_trabajo = () => {
	return api.get('/ordenes-trabajo/');
}

export const agregar_orden_trabajo = (data) => {
	return api.post(
		'/ordenes-trabajo/',
		data
		);
};