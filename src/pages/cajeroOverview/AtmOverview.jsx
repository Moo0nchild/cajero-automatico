import { useNavigate } from 'react-router-dom'
import './AtmOverview.css'
import { BankIcon } from '../../components/bankimage/BankIcon'

export function AtmOverview() {
  
  const navigate = useNavigate()



  return (
    <div className='page-atmoverview'>
      <div className='atm-container'>
       <BankIcon width='40px' height='20px' marginTop='-170px' marginLeft='-130px' />
        <div className='container-atmoverview'>
          <p className='atm-title'>Por favor seleccione su transaccion</p>
          <div className='option'>Retirar Dinero con Tarjeta</div>
          <div className='option'>Retirar Dinero con Nequi</div>
          <div className='option'>Retirar con Ahorro a la Mano</div>
          <div className='option'>Mirar Usuarios</div>
        </div>
      <div className='atm-buttons'>
        <div className='atm-tapa-derecha'></div>
        <div className='atm-button-right-arriba-1' onClick={() => navigate('/nequi')}></div>
        <div className='atm-button-right-arriba-2' onClick={() => navigate('/usuarios')}></div>
        <div className='atm-tapa-izquierda'></div>
        <div className='atm-button-left-arriba-1' onClick={() => navigate('/tarjeta')}></div>
        <div className='atm-button-left-arriba-2' onClick={() => navigate('/ahorro')}></div>
      </div>
      </div>
    </div>
  )
}
