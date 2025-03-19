export async function validarUsuarioNequi(numero) {
  try {
    const response = await fetch('/users.json')
    if (!response.ok) throw new Error('Error al cargar los datos')

    const usuarios = await response.json()

    console.log('Número ingresado:', numero)

    const usuarioValido = usuarios.find((user) => {
      const numeroJSON = String(user.numero).trim()
      const numeroIngresado = String(numero).trim()
      return user.tipo === 'nequi' && numeroJSON === numeroIngresado
    })

    if (!usuarioValido) {
      return { valido: false, mensaje: 'Número de telefono incorrecto' }
    }
    return {
      valido: true,
      usuario: usuarioValido,
      nombreUsuario: usuarioValido.nombre,
      saldoTotal: usuarioValido.saldo,
    }
  } catch (error) {
    console.error('Error en la validación:', error)
    return { valido: false, mensaje: error.message }
  }
}
