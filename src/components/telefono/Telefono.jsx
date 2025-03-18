import { useState, useEffect } from 'react'
import './Telefono.css'
import celular from '../../assets/images/telefono-prueba.png'
import nequiIcono from '../../assets/images/prueba-nequi.jpg'
import dineroNequi from '../../assets/images/dinero-nequi.jpg'
import flechaNequi from '../../assets/images/nequi-flecha.png'
import escudoNequi from '../../assets/images/escudo-nequi.png'
import { userStore } from '../../store/userStore'

export function Telefono() {
  const [mostrarContenido, setMostrarContenido] = useState(false)
  const [contador, setContador] = useState(60)
  const [codigo, setCodigo] = useState(null)
  const [verCodigo, setVerCodigo] = useState(false)

  const generarCodigo = () => Math.floor(100000 + Math.random() * 900000)

  const { setCuentaDinamica, setContraseñaDinamica, cuentaDinamica } =
    userStore()

  const handleClick = () => {
    setMostrarContenido(true)
    setCuentaDinamica(cuentaDinamica + 1)
    setContador(60)
    setVerCodigo(false) // Restablecer la visibilidad del código

    const nuevoCodigo = generarCodigo()
    setCodigo(nuevoCodigo)
    setContraseñaDinamica(nuevoCodigo) // Ahora se asigna correctamente
  }

  useEffect(() => {
    if (!mostrarContenido || contador <= 0) return

    const interval = setInterval(() => {
      setContador((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [mostrarContenido, contador])

  // Cuando el código cambie, actualiza `setContraseñaDinamica`
  useEffect(() => {
    if (codigo !== null) {
      setContraseñaDinamica(codigo)
    }
  }, [codigo, setContraseñaDinamica])

  useEffect(() => {
    if (contador === 0) {
      setMostrarContenido(false)
    }
  }, [contador])

  return (
    <div>
      {!mostrarContenido && (
        <div className='telefono-container'>
          <img
            src={nequiIcono}
            alt=''
            className='nequi-icono'
            onClick={handleClick}
          />
          <p className='nequi-text'>Nequi</p>
          <img src={celular} alt='' className='celular' />
        </div>
      )}

      {mostrarContenido && (
        <div className='telefono-container-clicked'>
          <div className='telefono-nequi-container'>
            <div className='telefono-nequi-header'>
              <img src={flechaNequi} />
              <p>Tu código</p>
            </div>
            <div className='telefono-nequi-content'>
              <img src={dineroNequi} />
              <div className='telefono-nequi-content-text'>
                <p>Has sacado</p>
                <div className='telefono-nequi-content-text-1'>
                  {cuentaDinamica}
                </div>
                <p>vez este mes por todos nuestros canales</p>
              </div>
            </div>
            <p className='telefono-nequi-content-2'>
              Confírmale este código a la persona encargada del Corresponsal
              Nequi
            </p>
            <div className='telefono-nequi-footer-1'>
              <div className='telefono-nequi-footer-1-1'>
                <div className='telefono-nequi-footer-1-1-1'>
                  {verCodigo ? codigo : '*** ***'}
                </div>
                <ion-icon
                  id='icon'
                  onClick={() => setVerCodigo(!verCodigo)}
                  name={verCodigo ? 'eye-outline' : 'eye-off-outline'}
                ></ion-icon>
              </div>
              <p>Tu código vence en: {contador} segundos</p>
            </div>

            <div className='telefono-nequi-footer-2'>
              <img src={escudoNequi} />
              <p>Evita compartir este código con otras personas</p>
            </div>

            <div
              className='telefono-nequi-cancelar'
              onClick={() => setMostrarContenido(false)}
            >
              Cancelar
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
