import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BankIcon } from '../../components/bankimage/BankIcon'
import './PasswordTarjeta.css'
import Keypad from '../../components/keypad/Keypad'
import { validarContraseña } from '../../models/validarContraseña'

export function PasswordTarjeta() {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const PIN_LENGTH = 4

  const handleKeyPress = (key) => {
    const actions = {
      CLEAR: () => setValue(''),
      CANCEL: () => setValue((prev) => prev.slice(0, -1)),
      ENTER: handleSubmit,
    }

    if (actions[key]) {
      actions[key]()
    } else if (value.length < PIN_LENGTH && /^\d$/.test(key)) {
      setValue((prev) => prev + key)
    }
  }

  const handleChange = (e) => {
    const newValue = e.target.value
    if (/^\d*$/.test(newValue) && newValue.length <= PIN_LENGTH) {
      setValue(newValue)
      setError('')
    }
  }

  const handleSubmit = async () => {
    if (value.length < PIN_LENGTH) {
      setError(`El PIN debe tener exactamente ${PIN_LENGTH} números.`)
    }

    try {
      const passValid = await validarContraseña(value)
      if (passValid.valido) {
        console.log('El PIN es válido')
        navigate('/saldo')
      } else {
        setError(passValid.mensaje)
      }
    } catch (error) {
      setError('Error al validar el PIN')
      console.error(error)
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
          <p className='atm-title'>Por favor ingrese su PIN de seguridad:</p>
          <input
            placeholder='****'
            type='password'
            value={value}
            onChange={handleChange}
            className='input-tarjeta-password'
          />
          {error && <p className='error-message-tarjeta'>{error}</p>}
          <div className='option-tarjeta'>Atrás</div>
          <div className={'option-tarjeta'}>Continuar</div>
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
            onClick={() => navigate('/tarjeta')}
          ></div>
        </div>
      </div>
    </div>
  )
}
