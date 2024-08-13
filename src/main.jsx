import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from './AdminPages/Admin.jsx'
import Home from './ClientPages/Home.jsx'
import Cars from './ClientPages/Cars.jsx'
import Shop from './ClientPages/Shop.jsx'
import About from './ClientPages/About.jsx'
import Contact from './ClientPages/Contact.jsx'
import Login from './ClientPages/Login.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/cars',
        element:<Cars/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
  },
  {
    path:'/admin',
    element:<Admin/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
