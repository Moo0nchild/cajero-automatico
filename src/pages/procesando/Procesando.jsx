import './Procesando.css'
import { BankIcon } from '../../components/bankimage/BankIcon'

export function Procesando() {
  return (
    <div className='page-atmoverview'>
      <div className='atm-container'>
        {/* Ícono del banco */}
        <BankIcon
          width='40px'
          height='20px'
          marginTop='-170px'
          marginLeft='-130px'
        />

        <div className='container-atmoverview'>
          <h1 className='atm-procesando-advertencia'>Procesando Transacción</h1>
          <span className='loader'></span>
        </div>

        <div className='atm-buttons'>
          <div className='atm-tapa-derecha'></div>
          <div className='atm-button-right-arriba-1'></div>
          <div className='atm-button-right-arriba-2'></div>
          <div className='atm-tapa-izquierda'></div>
          <div className='atm-button-left-arriba-1'></div>
          <div className='atm-button-left-arriba-2'></div>
        </div>
      </div>
    </div>
  )
}
