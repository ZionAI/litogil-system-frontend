import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import Registro from "../screens/resgister/Resgistro";
import Success from "../screens/resgister/Success";
import Sesion from "../screens/sesion/Sesion";

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
  // Otras rutas
];

export default routes;