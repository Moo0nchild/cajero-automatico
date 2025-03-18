import { useNavigate } from 'react-router-dom'
import './RetirarAhorroALaMano.css'
import { useState } from 'react'
import { userStore } from '../../store/userStore'
import { validarUsuarioAhorro } from '../../models/validarUsuarioAhorro'
import { BankIcon } from '../../components/bankimage/BankIcon'
import Keypad from '../../components/keypad/Keypad'

export function RetirarAhorroALaMano() {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const maxDigits = 11

  const handleKeyPress = (key) => {
    const actions = {
      CLEAR: () => setValue(''),
      CANCEL: () => setValue((prev) => prev.slice(0, -1)),
      ENTER: () => handleSubmit(),
    }

    if (actions[key]) {
      actions[key]()
    } else if (/^\d$/.test(key) && value.length < maxDigits) {
      setValue((prev) => prev + key)
    }
  }

  const handleChange = (e) => {
    const newValue = e.target.value
    if (/^\d*$/.test(newValue) && newValue.length <= maxDigits) {
      setValue(newValue)
      setError('')
    }
  }

  const { setNombre, setSaldoTotal } = userStore()
  const handleSubmit = async () => {
    if (value.length !== maxDigits) {
      setError(
        `El número de cuenta debe tener exactamente ${maxDigits} dígitos.`
      )
      return
    }

    if (!/^([01])3/.test(value)) {
      setError('Error: Verifique su cuenta.')
      return
    }

    try {
      const resultado = await validarUsuarioAhorro(value)

      if (resultado.valido) {
        console.log('El usuario es válido')
        setNombre(resultado.nombreUsuario)
        setSaldoTotal(resultado.saldoTotal)

        navigate('/ahorropswd')
      } else {
        setError(resultado.mensaje)
      }
    } catch (error) {
      setError('Error al validar el usuario')
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
          <p className='atm-title'>Por favor digite su número de cuenta:</p>
          <input
            type='text'
            value={value}
            onChange={handleChange}
            className='input-tarjeta'
            placeholder='Número de la cuenta'
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
            className={`atm-button-right-arriba-2 ${
              value.length !== maxDigits ? 'disabled' : ''
            }`}
            onClick={handleSubmit}
          ></div>
          <div className='atm-tapa-izquierda'></div>
          <div className='atm-button-left-arriba-1'></div>
          <div
            className='atm-button-left-arriba-2'
            onClick={() => navigate('/')}
          ></div>
        </div>
      </div>
    </div>
  )
}
