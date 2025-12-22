import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/home/Home.jsx";
// import About from "../pages/about.jsx";
import NotFound from "../pages/NotFound.jsx";
import Contact from "../pages/Contact.jsx";
import Donors from "../pages/Donors.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import RequestBlood from "../pages/RequestBlood.jsx";
import About from "../pages/About.jsx";


const router = createBrowserRouter([
  {
    home: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "donors",
        element: <Donors />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "request-blood",
        element: <RequestBlood />,
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);
 

export default router;