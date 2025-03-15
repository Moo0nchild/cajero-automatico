import { useNavigate } from 'react-router-dom'
import { BankIcon } from '../../components/bankimage/BankIcon'
import './ProcesoExitoso.css'
import { useEffect, useState } from 'react'
import { Procesando } from './Procesando'
import { userStore } from '../../store/userStore'
import diezmil from '../../assets/billetes/10000.jpg'
import veintemil from '../../assets/billetes/20000.jpg'
import cincuentamil from '../../assets/billetes/50000.jpg'
import cienmil from '../../assets/billetes/100000.jpg'

export function ProcesoExitoso() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const { billetesStructure } = userStore()

  function calcularImagenBilletes(valor) {
    switch (valor) {
      case '10000':
        return diezmil
      case '20000':
        return veintemil
      case '50000':
        return cincuentamil
      case '100000':
        return cienmil
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  })
  return (
    <div>
      {loading ? (
        <Procesando />
      ) : (
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
              <p className='atm-sucessful-advertencia'>
                Proceso Completado con Exito
              </p>

              <div className='option-tarjeta'>Volver</div>
              <div className={`option-tarjeta `}>Imprimir Recibo</div>
            </div>

            <div className='billetes-container'>
              {Object.entries(billetesStructure).map(([valor, cantidad]) =>
                cantidad > 0 ? (
                  <div key={valor} className='billete-item'>
                    <img
                      src={calcularImagenBilletes(valor)}
                      alt={`Billete de ${valor}`}
                      className='billete-imagen'
                    />
                    <p className='billete-cantidad'>
                      {' '}
                      {cantidad === 1
                        ? `${cantidad} billete`
                        : `${cantidad} billetes`}
                    </p>
                  </div>
                ) : null
              )}
            </div>

            <div className='atm-buttons'>
              <div className='atm-tapa-derecha'></div>
              <div className='atm-button-right-arriba-1'></div>
              <div
                className='atm-button-right-arriba-2'
                onClick={() => navigate('/recibo')}
              ></div>
              <div className='atm-tapa-izquierda'></div>
              <div className='atm-button-left-arriba-1'></div>
              <div
                className='atm-button-left-arriba-2'
                onClick={() => navigate('/saldo')}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
