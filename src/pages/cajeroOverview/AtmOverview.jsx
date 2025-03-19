import { useNavigate } from 'react-router-dom'
import './AtmOverview.css'
import { BankIcon } from '../../components/bankimage/BankIcon'
import iconoNequi from '../../assets/images/prueba-nequi.jpg'
import iconoAhorro from '../../assets/images/unnamed.png'
import iconoTarjeta from '../../assets/images/visa.png'
import iconoUser from '../../assets/images/user.png'

export function AtmOverview() {
  const navigate = useNavigate()

  const options = [
    { label: 'Retirar Dinero con Tarjeta', img: iconoTarjeta },
    { label: 'Retirar Dinero con Nequi', img: iconoNequi },
    { label: 'Retirar con Ahorro a la Mano', img: iconoAhorro },
    { label: '  Mirar Usuarios ', imagen: iconoUser },
  ]

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
          <p className='atm-title'>Por favor seleccione su transacción:</p>
          {options.map((option, index) => (
            <div
              key={index}
              className='option'
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              {option.img && <img src={option.img} alt={option.label} />}
              {option.imagen && (
                <img
                  src={option.imagen}
                  alt={option.label}
                  style={{ width: '35%', height: '70%' }}
                />
              )}
              {option.label}
            </div>
          ))}
        </div>
        <div className='atm-buttons'>
          <div className='atm-tapa-derecha'></div>
          <div
            className='atm-button-right-arriba-1'
            onClick={() => navigate('/nequi')}
          ></div>
          <div
            className='atm-button-right-arriba-2'
            onClick={() => navigate('/usuarios')}
          ></div>
          <div className='atm-tapa-izquierda'></div>
          <div
            className='atm-button-left-arriba-1'
            onClick={() => navigate('/tarjeta')}
          ></div>
          <div
            className='atm-button-left-arriba-2'
            onClick={() => navigate('/ahorro')}
          ></div>
        </div>
      </div>
    </div>
  )
}
