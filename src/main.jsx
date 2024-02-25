import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Aboutpage from './Pages/Aboutpage.jsx';
import Contactpage from './Pages/Contactpage.jsx';
import Homepage from './Pages/Homepage.jsx';
import Errorpage from './Pages/Errorpage.jsx';
import Followerpage from './Pages/Follower.jsx'
import Messagepage from './Pages/Messagepage.jsx';
import Sendpage from './Pages/Sendpage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Homepage/>
      },
      {
        path: 'Aboutpage',
        element: <Aboutpage/>
      },
      {
        path: 'Aboutpage/:name',
        element: <Aboutpage/>
      },
      {
        path: 'Contactpage',
        element: <Contactpage/>
      },
      {
        path: 'Follower',
        element: <Followerpage/>
      },
      {
        path: 'Messagepage',
        element: <Messagepage />
      },
      {
        path: "Sendpage",
        element: <Sendpage />
      }
    ],
    errorElement: <Errorpage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
