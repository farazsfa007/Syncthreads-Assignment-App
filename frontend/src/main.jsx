import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import 'react-toastify/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "leaflet/dist/leaflet.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
