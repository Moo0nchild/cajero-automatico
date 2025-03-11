import { useNavigate } from 'react-router-dom'
import { BankIcon } from '../../components/bankimage/BankIcon'
import './Advertencia.css'

export function Advertencia() {
  const navigate = useNavigate()

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
          <p className='atm-title-advertencia'>
            Por favor siga las siguientes recomendaciones:
          </p>
          <p className='atm-title-advertencia-1'>
            1. El monto maximo a retirar es $3.000.000
          </p>
          <p className='atm-title-advertencia-2'>
            2. Recuerde que solo se acepta valores multiplos de 10
          </p>
          <p className='atm-title-advertencia-3'>
            3. Digite el valor sin puntos ni comas
          </p>

          {/* Botones de navegación */}
          <div className='option-tarjeta'>Atrás</div>
          <div className={`option-tarjeta `}>Continuar</div>
        </div>

        {/* Botones del cajero */}
        <div className='atm-buttons'>
          <div className='atm-tapa-derecha'></div>
          <div className='atm-button-right-arriba-1'></div>
          <div
            className='atm-button-right-arriba-2'
            onClick={() => navigate('/otrosvalores')}
          ></div>
          <div className='atm-tapa-izquierda'></div>
          <div className='atm-button-left-arriba-1'></div>
          <div
            className='atm-button-left-arriba-2'
            onClick={() => navigate('/valoraretiro')}
          ></div>
        </div>
      </div>
    </div>
  )
}
