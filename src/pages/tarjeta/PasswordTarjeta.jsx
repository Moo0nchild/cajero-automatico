import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BankIcon } from '../../components/bankimage/BankIcon'
import './PasswordTarjeta.css'

export function PasswordTarjeta() {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [error, setError] = useState('') // Estado para manejar errores

  const handleChange = (e) => {
    const newValue = e.target.value

    // Permitir solo números y máximo 4 caracteres
    if (/^\d*$/.test(newValue) && newValue.length <= 4) {
      setValue(newValue)
      setError('') // Borra el error si la entrada es válida
    }
  }

  const handleSubmit = () => {
    if (value.length < 4) {
      setError('El PIN debe tener exactamente 4 números.')
    } else {
      navigate('/') // Cambia la ruta según tu flujo
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
          <p className='atm-title'>Por favor ingrese su PIN de seguridad</p>

          {/* Input de PIN */}
          <input
            type='text'
            value={value}
            onChange={handleChange}
            className='input-tarjeta'
          />

          {/* Mensaje de error */}
          {error && <p className='error-message-tarjeta'>{error}</p>}

          {/* Botones */}
          <div className='option-tarjeta' onClick={() => navigate('/atras')}>
            Atrás
          </div>
          <div className='option-tarjeta'>Continuar</div>
        </div>

        {/* Botones del cajero */}
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
