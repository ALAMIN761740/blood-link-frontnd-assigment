import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/home/Home.jsx";
import About from "../pages/about.jsx";
import NotFound from "../pages/NotFound.jsx";
import Contact from "../pages/Contact.jsx";
import Donors from "../pages/Donors.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import RequestBlood from "../pages/RequestBlood.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: "about",
            Component: About,
        },
        {
          path: "contact",
          Component: Contact,
        },
        {
          path: "donors",
          Component: Donors,
        },
        {
          path: "login",
          Component: Login,
        },
        {
          path: "register", 
          Component: Register,
        },
        {
          path: "request-blood",
          Component: RequestBlood,
        }
    ]
  },
  {
    path: "*",
    Component: NotFound,
  }
]);

export default router;