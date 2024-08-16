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
import AdminLogin from './AdminPages/AdminLogin.jsx'
import AdminReg from './AdminPages/AdminReg.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import AdminPrivateRoutes from './PrivateRoutes/AdminPrivateRoutes.jsx'
import AdminAddCar from './AdminPages/AdminAddCar.jsx'
import CarDetails from './Components/CarDetails.jsx'

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
    element:<AdminPrivateRoutes><Admin/></AdminPrivateRoutes>,
    loader:async()=>await fetch('http://localhost:5001/addcar'),
  },
  {
    path:'/admin/login',
    element:<AdminLogin/>,
  },
  {
    path:'/admin/register',
    element:<AdminReg/>
  },
  {
    path:'/admin/add-car',
    element:<AdminPrivateRoutes><AdminAddCar/></AdminPrivateRoutes>
  },
  {
    path:`/car/:id`,
    element:<AdminPrivateRoutes><CarDetails/></AdminPrivateRoutes>,
    loader: async({params})=>await fetch(`http://localhost:5001/car/${params.id}`)
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router}/>
    </AuthProviders>
  </StrictMode>,
)
