import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/feed",
    element: <Home />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
  {
    path: '/:id',
    element: <Profile />
  },
  {
    path: '/perfil/:id',
    // element: <página de editar perfil aqui>
  }


]);
export default router
