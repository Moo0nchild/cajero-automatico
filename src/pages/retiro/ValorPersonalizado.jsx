import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { BankIcon } from '../../components/bankimage/BankIcon'
import Keypad from '../../components/keypad/Keypad'
import './ValorPersonalizado.css'
import { DineroARetirar } from '../../models/acarreo'
import { userStore } from '../../store/userStore'

export function ValorPersonalizado() {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const MAX_DIGITS = 7
  const {
    setValorTransaccion,
    saldoTotal,
    realizarRetiro,
    setBilletesStructure,
  } = userStore()

  const handleKeyPress = (key) => {
    switch (key) {
      case 'CLEAR':
        setValue('')
        break
      case 'CANCEL':
        setValue((prev) => prev.slice(0, -1))
        break
      case 'ENTER':
        handleSubmit()
        break
      default:
        if (value.length < MAX_DIGITS && /^\d$/.test(key)) {
          setValue((prev) => prev + key)
        }
    }
  }

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, '')

    if (newValue === '' || newValue.length <= MAX_DIGITS) {
      setValue(newValue)
      setError('')
    }
  }

  const handleSubmit = async () => {
    if (!value || value === '0') {
      return setError('Por favor ingrese un monto')
    }

    const montoNumerico = Number(value)

    if (montoNumerico < 10000 || montoNumerico > 3000000) {
      return setError('El monto debe estar entre 10.000 y 3.000.000')
    }

    if (montoNumerico % 10000 !== 0) {
      return setError('El monto debe ser múltiplo de 10')
    }

    if (saldoTotal < montoNumerico) {
      return setError('Saldo insuficiente')
    }

    const montoValido = await DineroARetirar(montoNumerico)
    setBilletesStructure(montoValido)

    if (montoValido) {
      console.log('Monto a retirar:', montoNumerico)
      realizarRetiro(montoNumerico)
      setValorTransaccion(montoNumerico)
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
          <p className='atm-title-personalizado'>
            Por favor digite el monto a retirar (Máximo $3.000.000):
          </p>

          <input
            type='text'
            value={value}
            onChange={handleChange}
            className='input-tarjeta'
            placeholder='Monto a retirar'
            maxLength={MAX_DIGITS}
          />
          {error && <p className='error-message-tarjeta-1'>{error}</p>}

          <div className='option-tarjeta'>Atrás</div>
          <div className='option-tarjeta'>Continuar</div>
        </div>

        <Keypad onKeyPress={handleKeyPress} />

        <div className='atm-buttons'>
          <div className='atm-tapa-derecha'></div>
          <div className='atm-button-right-arriba-1'></div>
          <div
            className='atm-button-right-arriba-2'
            onClick={handleSubmit}
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
  )
}
