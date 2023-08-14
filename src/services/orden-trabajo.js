import { api } from "./api";

export const status_orden_trabajo = () => {
	return api.get('/orden-trabajo/status/');
};