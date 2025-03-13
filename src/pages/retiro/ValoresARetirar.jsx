import { useNavigate } from 'react-router-dom'
import { BankIcon } from '../../components/bankimage/BankIcon'
import { DineroARetirar } from '../../models/acarreo'

export function ValoresARetirar() {
  const navigate = useNavigate()
  const amounts = ['$50.000', '$100.000', '$200.000', 'Otros']

  function valorClic(valor) {
    const value = valor
    switch (value) {
      case '50000':
        console.log('Dinero a retirar:', value)
        DineroARetirar(value)
        break
      case '100000':
        console.log('Dinero a retirar:', value)
        DineroARetirar(value)
        break
      case '200000':
        console.log('Dinero a retirar:', value)
        DineroARetirar(value)
        break
    }
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
          <p className='atm-title'>
            Por favor seleccione la cantidad de su retiro:
          </p>
          {amounts.map((amount, index) => (
            <div key={index} className='option'>
              {amount}
            </div>
          ))}
        </div>

        <div className='atm-buttons'>
          <div className='atm-tapa-derecha'></div>
          <div
            className='atm-button-right-arriba-1'
            onClick={() => valorClic('100000')}
          ></div>{' '}
          {/* 100 */}
          <div
            className='atm-button-right-arriba-2'
            onClick={() => navigate('/advertencia')}
          ></div>{' '}
          {/* otros */}
          <div className='atm-tapa-izquierda'></div>
          <div
            className='atm-button-left-arriba-1'
            onClick={() => valorClic('50000')}
          ></div>{' '}
          {/* 50 */}
          <div
            className='atm-button-left-arriba-2'
            onClick={() => valorClic('200000')}
          ></div>{' '}
          {/* 200 */}
        </div>
      </div>
    </div>
  )
}
