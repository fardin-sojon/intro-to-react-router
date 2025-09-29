import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Home/Home.jsx';
import Mobile from './Components/Mobiles/Mobiles.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobile},
      {path: 'laptops', Component: Laptops}
    ]
  },
  {
    path: 'about',
    element: <div>About Me Here</div>
  },
  {
    path: 'blogs',
    element: <div>All blogs here</div>
  },
  {
    path: 'app',
    Component: App
  },
  {
    path: '/app2',
    // element: <App></App>
    Component: App
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
