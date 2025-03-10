import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AtmOverview } from './pages/cajeroOverview/AtmOverview'
import { RetirarTarjeta } from './pages/tarjeta/RetirarTarjeta'
import { RetirarNequi } from './pages/nequi/RetirarNequi'
import { RetirarAhorroALaMano } from './pages/ahorroALaMano/RetirarAhorroALaMano'
import { Usuarios } from './pages/usuarios/Usuarios'
// import { Prueba } from './components/prueba/Prueba'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AtmOverview />} />
        <Route path='/tarjeta' element={<RetirarTarjeta />} />
        <Route path='/nequi' element={<RetirarNequi />} />
        <Route path='/ahorro' element={<RetirarAhorroALaMano />} />
        <Route path='/usuarios' element={<Usuarios />} />
      </Routes>
    </>
  )
}

export default App
