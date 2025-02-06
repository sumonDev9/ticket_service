import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/Router'
import { RouterProvider } from 'react-router-dom'
import TicketProvider from './AuthProvider/TicketProvider'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <TicketProvider>
  <RouterProvider router={router} >
  </RouterProvider>
  </TicketProvider>
  </StrictMode>,
)
