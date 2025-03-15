export async function validarContraseñaAhorro(pin) {
  try {
    const response = await fetch('/users.json')
    if (!response.ok) throw new Error('Error al cargar los datos')

    const usuarios = await response.json()

    console.log('Pin ingresado:', pin)

    const usuarioValido = usuarios.find((user) => {
      const numeroJSON = String(user.clave).trim()
      const numeroIngresado = String(pin).trim()
      return user.tipo === 'ahorro' && numeroJSON === numeroIngresado
    })

    if (!usuarioValido) {
      return { valido: false, mensaje: 'Pin incorrecto' }
    }

    return { valido: true, usuario: usuarioValido }
  } catch (error) {
    console.error('Error en la validación:', error)
    return { valido: false, mensaje: error.message }
  }
}
