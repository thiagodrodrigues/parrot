import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/index'
import './index.css'
//bootsrap 5 => documentação em https://react-bootstrap.github.io/
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <section className='estilo_principal'>
    <RouterProvider router={router} />

    </section>
  </React.StrictMode>
)
