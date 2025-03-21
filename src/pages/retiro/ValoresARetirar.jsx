import { useNavigate } from 'react-router-dom'
import { BankIcon } from '../../components/bankimage/BankIcon'
import { DineroARetirar } from '../../models/acarreo'
import { userStore } from '../../store/userStore'

export function ValoresARetirar() {
  const navigate = useNavigate()
  const amounts = ['$50.000', '$100.000', '$200.000', 'Otros']
  const { setValorTransaccion, realizarRetiro, setBilletesStructure } =
    userStore()

  async function valorClic(valor) {
    const value = Number(valor)
    const montoValido = await DineroARetirar(value)
    setBilletesStructure(montoValido)
    if (montoValido) {
      console.log('Dinero a retirar:', value)
      realizarRetiro(value)
      setValorTransaccion(value)
      navigate('/successful')
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
          <div
            className='atm-button-right-arriba-2'
            onClick={() => navigate('/advertencia')}
          ></div>{' '}
          <div className='atm-tapa-izquierda'></div>
          <div
            className='atm-button-left-arriba-1'
            onClick={() => valorClic('50000')}
          ></div>{' '}
          <div
            className='atm-button-left-arriba-2'
            onClick={() => valorClic('200000')}
          ></div>{' '}
        </div>
      </div>
    </div>
  )
}
