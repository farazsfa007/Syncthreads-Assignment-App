import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import MapView from './components/MapView'
import { useState } from 'react'
import RefreshHandler from './RefreshHandler'

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to='/login' />
  };

  return (
    <div>
      <RefreshHandler setAuthenticated={setAuthenticated} />
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        <Route path='/map' element={<PrivateRoute element={<MapView />} />} />
      </Routes>
    </div>
  )
}

export default App
