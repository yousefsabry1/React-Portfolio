import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'   
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Error404 from './components/error404/Error404.jsx'


const router = createBrowserRouter([
  {path:"" , element:<App /> , children: [
    {path:"" , element:<Home />},
    {path:"about" , element:<About />} ,
    {path:"portfolio" , element:<Portfolio />} ,
    {path:"contact" , element:<Contact />},
    {path:"*" , element: <Error404/> }
  ]}

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
)
