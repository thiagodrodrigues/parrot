import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/:id',
    element: <Profile />
  }

]);
export default router
