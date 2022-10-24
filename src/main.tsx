import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/index'
import './index.css'
//bootsrap => documentação em https://react-bootstrap.github.io/
//bootsrap => documentação em https://getbootstrap.com/docs/4.0/getting-started/introduction/
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <section>
    <RouterProvider router={router} />

    </section>
  </React.StrictMode>
)
