import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Facility from './Pages/Facility';
import Hotel from './Pages/Hotel';
import Restaurant from './Pages/Restaurant';
import ContactUs from './Pages/ContactUs';
import Register from './Pages/Register';
import Login from './Pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/aboutUs",
    element: <AboutUs/>,
  },
  {
    path: "/facility",
    element: < Facility/>,
  },
  {
    path: "/hotel",
    element: <Hotel/>,
  },
  {
    path: "/restaurant",
    element: <Restaurant/>,
  },
  {
    path: "/contactUs",
    element: <ContactUs/>,
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