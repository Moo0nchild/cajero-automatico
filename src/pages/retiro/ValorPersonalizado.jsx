import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { BankIcon } from '../../components/bankimage/BankIcon'
import Keypad from '../../components/keypad/Keypad'
import './ValorPersonalizado.css'
import { DineroARetirar } from '../../models/acarreo'

export function ValorPersonalizado() {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const MAX_DIGITS = 7

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
    const newValue = e.target.value
    if (/^\d*$/.test(newValue) && newValue.length <= MAX_DIGITS) {
      setValue(newValue)
      setError('')
    }
  }

  const handleSubmit = async () => {
    const montoValido = await DineroARetirar(value)
    if (value === '') {
      setError('Por favor ingrese un monto')
    } else if (montoValido) {
        console.log('Monto a retirar:', value)
        console.log('Dinero a retirar:', montoValido)
        navigate('/')
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

          <div className='option-tarjeta'>
            Atrás
          </div>
          <div
            className='option-tarjeta'
          >
            Continuar
          </div>
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
            onClick={() => navigate('/valoraretiro')}
          ></div>
        </div>
      </div>
    </div>
  )
}
