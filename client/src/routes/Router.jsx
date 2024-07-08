import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Reigster";
import Docs from "../pages/Docs/Docs";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import DocsDetails from "../pages/Docs/DocsDetails";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/docs",
        element: (
          <PrivateRoute>
            <Docs />
          </PrivateRoute>
        ),
      },
      {
        path: "docsDetails/:email",
        element: <DocsDetails />,
        loader: ({ params }) =>
          axios.get(`http://localhost:5000/user?email=${params.email}`),
      },
    ],
  },
]);

export default router;
