export async function validarContraseñaNequi(pin, contraseñaDinamica) {
  try {
    const response = await fetch('/users.json')
    if (!response.ok) throw new Error('Error al cargar los datos')

    const usuarios = await response.json()

    console.log('Pin ingresado:', pin)
    console.log('Contraseña dinamica:', contraseñaDinamica)

    const usuarioValido = usuarios.find((user) => {
      const dinamica = String(contraseñaDinamica).trim()
      const numeroIngresado = String(pin).trim()
      return user.tipo === 'ahorro' && dinamica === numeroIngresado
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
