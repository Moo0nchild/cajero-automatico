import { useNavigate } from 'react-router-dom'
import { BankIcon } from '../../components/bankimage/BankIcon'
import { useState } from 'react'
import './RetirarTarjeta.css'
import Keypad from '../../components/keypad/Keypad'

export function RetirarTarjeta() {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const handleKeyPress = (key) => {
    if (key === 'CLEAR') {
      setValue('') // Borra todo
    } else if (key === 'CANCEL') {
      setValue((prev) => prev.slice(0, -1)) // Borra el último dígito
    } else if (key === 'ENTER') {
      handleSubmit() // Intenta continuar
    } else if (value.length < 11 && /^\d$/.test(key)) {
      setValue((prev) => prev + key) // Agrega el número si aún hay espacio
    }
  }

  const handleChange = (e) => {
    const newValue = e.target.value

    // Validación: Solo números y máximo 11 caracteres
    if (/^\d*$/.test(newValue) && newValue.length <= 11) {
      setValue(newValue)
      setError('') // Elimina el error si la entrada es válida
    }
  }

  const handleSubmit = () => {
    if (value.length !== 11) {
      setError('El número de tarjeta debe tener exactamente 11 dígitos.')
    } else {
      navigate('/tarjetapswd') // Navega a la siguiente pantalla
    }
  }

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
          <p className='atm-title'>Por favor digite su número de tarjeta:</p>

          {/* Input para el número de tarjeta */}
          <input
            type='text'
            value={value}
            onChange={handleChange}
            className='input-tarjeta'
            placeholder='Numero de la tarjeta'
          />

          {/* Mensaje de error */}
          {error && <p className='error-message'>{error}</p>}

          {/* Botones de navegación */}
          <div className='option-tarjeta' onClick={() => navigate('/')}>
            Atrás
          </div>
          <div
            className={`option-tarjeta ${
              value.length !== 11 ? 'disabled' : ''
            }`}
            onClick={handleSubmit}
          >
            Continuar
          </div>
        </div>

        <Keypad onKeyPress={handleKeyPress} />

        {/* Botones del cajero */}
        <div className='atm-buttons'>
          <div className='atm-tapa-derecha'></div>
          <div className='atm-button-right-arriba-1'></div>
          <div
            className='atm-button-right-arriba-2'
            onClick={value.length === 11 ? handleSubmit : null} // Solo permite continuar si hay 11 dígitos
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
