import { useNavigate } from 'react-router-dom'
import { BankIcon } from '../../components/bankimage/BankIcon'

export function ValoresARetirar() {
  const navigate = useNavigate()
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
          <p className='atm-title'>Por favor seleccione la cantidad de su retiro:</p>
          <div className='option'>$50.000</div>
          <div className='option'>$100.000</div>
          <div className='option'>$200.000</div>
          {/* <div className='option'>600.000</div> */}
          <div className='option'>Otros</div>
        </div>
        <div className='atm-buttons'>
          <div className='atm-tapa-derecha'></div>
          <div
            className='atm-button-right-arriba-1'
            // onClick={() => navigate('/nequi')}
          ></div>
          <div
            className='atm-button-right-arriba-2'
            onClick={() => navigate('/advertencia')}
          ></div>
          <div className='atm-tapa-izquierda'></div>
          <div
            className='atm-button-left-arriba-1'
            // onClick={() => navigate('/tarjeta')}
          ></div>
          <div
            className='atm-button-left-arriba-2'
            // onClick={() => navigate('/ahorro')}
          ></div>
        </div>
      </div>
    </div>
  )
}
