import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './Components/Header.jsx'
import About from "./Components/About.jsx"
import Contact from './Components/Contact.jsx'
import Services from './Components/Services.jsx'

const router = createBrowserRouter([
{
  path : "/",
  element: <Layout/>,
  children : [
    // {
    //   path: "",
    //   element: <Header/>
    // },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/services",
      element:<Services/>
    }
  ]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
