import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AtmOverview } from './pages/cajeroOverview/AtmOverview'
import { RetirarTarjeta } from './pages/tarjeta/RetirarTarjeta'
import { RetirarNequi } from './pages/nequi/RetirarNequi'
import { RetirarAhorroALaMano } from './pages/ahorroALaMano/RetirarAhorroALaMano'
import { Usuarios } from './pages/usuarios/Usuarios'
import { BankIcon } from './components/bankimage/BankIcon'
import { PasswordTarjeta } from './pages/tarjeta/PasswordTarjeta'
import { ValoresARetirar } from './pages/retiro/ValoresARetirar'
import { ValorPersonalizado } from './pages/retiro/ValorPersonalizado'
import Keypad from './components/keypad/Keypad'
import { Advertencia } from './pages/advertencia/Advertencia'
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
        <Route path='/icono' element={<BankIcon />} />
        <Route path='/tarjetapswd' element={<PasswordTarjeta />} />
        <Route path='/valoraretiro' element={<ValoresARetirar />} />
        <Route path='/otrosvalores' element={<ValorPersonalizado />} />
        <Route path='/keypad' element={<Keypad />} />
        <Route path='/advertencia' element={<Advertencia />} />
      </Routes>
    </>
  )
}

export default App
