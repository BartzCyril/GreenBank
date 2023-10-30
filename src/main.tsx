import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./pages/App.tsx";
import "bootstrap/dist/css/bootstrap.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Contexte} from "./pages/Contexte.tsx";
import {Error} from "./pages/Error.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error/>,
    },
    {
        path: '/GreenBank/',
        element: <App />,
    },
    {
        path: '/GreenBank/contexte',
        element: <Contexte/>
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
