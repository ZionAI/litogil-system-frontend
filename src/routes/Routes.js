import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import Pedido from "../screens/pedido/Pedido";
import Registro from "../screens/resgister/Resgistro";
import Success from "../screens/resgister/Success";
import Sesion from "../screens/sesion/Sesion";
import Clientes from "../screens/clientes/Clientes";

import FormExampleWithGrid from "../screens/orden_trabajo/form_post_orden_trabajo";

const routes = [
  {
    path: "/",
    exact: true,
    component: Login,
  },
  {
    path: "/registro/",
    exact: true,
    component: Registro,
  },
  {
    path: "/registro/success/",
    exact: true,
    component: Success,
  },
  {
    path: "/inicio-sesion/",
    exact: true,
    component: Sesion,
  },
  {
    path: "/home/",
    exact: true,
    component: Home,
  },
  {
    path: "/home/registro-pedido/",
    exact: true,
    component: Pedido,
  },
  {
    path: "/home/clientes/",
    exact: true,
    component: Clientes,
  },
  // Otras rutas
  {
    path: "/ordenes-trabajo/",
    exact:true,
    component: FormExampleWithGrid,
  }
];

export default routes;