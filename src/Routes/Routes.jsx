import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/Components/About";
import Blog from "../Pages/Components/Blog";
import Services from "../Pages/Components/Services";
import Contact from "../Pages/Components/Contact";
import Careers from "../Pages/Components/Careers.jsx";
import Artisst from "../Pages/Components/Artisst.jsx";
import Events from "../Pages/Components/Events.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />, // Home Page
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/blog",
        element: <Blog/>, 
      },
      {
        path: "/services",
        element: <Services/>, 
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/artist",
        element: <Artisst/>,
      },
      {
        path: "/events",
        element: <Events/>,
      }
    ],
  },
]);