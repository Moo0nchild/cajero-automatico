import { useNavigate } from 'react-router-dom'
import { BankIcon } from '../../components/bankimage/BankIcon'
import { userStore } from '../../store/userStore'
import './Recibo.css'

export function Recibo() {
  const navigate = useNavigate()
  const { saldoTotal, nombre, valorTransaccion, setBilletesStructure } =
    userStore()
  const fechaHoraActual = new Date().toLocaleString()

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
          <p className='atm-recibo-title'>Titular de la cuenta:</p>
          <p className='atm-recibo-nombre'>{nombre}</p>
          <p className='atm-recibo-transaccion'>Valor Transaccion:</p>
          <p className='atm-recibo-valorTransaccion'>
            {'$' + Number(valorTransaccion).toLocaleString('es-ES')}
          </p>
          <p className='atm-recibo-saldo'>Saldo Restante:</p>
          <p className='atm-recibo-valorSaldo'>
            {'$' + Number(saldoTotal).toLocaleString('es-ES')}
          </p>
          <p className='atm-recibo-fecha'>Fecha:</p>
          <p className='atm-recibo-fechaValor'>{fechaHoraActual}</p>
          <p className='atm-recibo-retirosrest'>Retiros Restantes:</p>
          <p className='atm-recibo-valorretirosrest'>{saldoTotal / 10000}</p>

          <div className='option-tarjeta'>Salir</div>
          <div className='option-tarjeta'>Ver Cuenta</div>
        </div>

        <div className='atm-buttons'>
          <div className='atm-tapa-derecha'></div>
          <div className='atm-button-right-arriba-1'></div>
          <div
            className='atm-button-right-arriba-2'
            onClick={() => navigate('/saldo')}
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
