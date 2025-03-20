import { useNavigate } from 'react-router-dom'
import { userStore } from '../../store/userStore'
import './SaldoUsuario.css'
import { BankIcon } from '../../components/bankimage/BankIcon'

export function SaldoUsuario() {
  const navigate = useNavigate()
  const { saldoTotal, nombre, setBilletesStructure } = userStore()

  function handleCerrarSesion() {
    sessionStorage.removeItem('userStore')
    setBilletesStructure({})
    console.log('cerrando sesion')
    navigate('/')
  }

  return (
    <div className='page-atmoverview'>
      <div className='atm-container'>
        <BankIcon
          width='40px'
          height='20px'
          marginTop='-170px'
          marginLeft='-130px'
        />

        <div className='container-atmoverview'>
          <p className='atm-saldo-nombre'>Buenas, {nombre}</p>
          <p className='atm-saldo-title'>Su saldo disponible es:</p>
          <p className='atm-saldo-saldo'>
            {'$' + Number(saldoTotal).toLocaleString('es-ES')}
          </p>

          <div className='option-tarjeta'>Salir</div>
          <div className='option-tarjeta'>Retirar Dinero</div>
        </div>

        <div className='atm-buttons'>
          <div className='atm-tapa-derecha'></div>
          <div className='atm-button-right-arriba-1'></div>
          <div
            className='atm-button-right-arriba-2'
            onClick={() => navigate('/valoraretiro')}
          ></div>
          <div className='atm-tapa-izquierda'></div>
          <div className='atm-button-left-arriba-1'></div>
          <div
            className='atm-button-left-arriba-2'
            onClick={() => handleCerrarSesion()}
          ></div>
        </div>
      </div>
    </div>
  )
}
