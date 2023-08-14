import { api } from "./api";

export const lista_clientes = () => {
	return api.get('/clientes');
};