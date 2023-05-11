import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Games from './Pages/Games';
import Hardware from './Pages/Hardware';
import Servies from './Pages/Servies';
import Shop from './Pages/Shop';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ErrorPage from "./Pages/error-page";


function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <ContactUs/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
  {
    path: "/games",
    element: <Games/>,
  },
  {
    path: "/hardware",
    element: <Hardware/>,
  },
  {
    path: "/servies",
    element: <Servies/>,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)