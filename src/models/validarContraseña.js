export async function validarContraseña(pin) {
    try {
      const response = await fetch('/users.json')
      if (!response.ok) throw new Error('Error al cargar los datos')
  
      const usuarios = await response.json()
  
      console.log('Pin ingresado:', pin)
  
      const usuarioValido = usuarios.find((user) => {
        const numeroJSON = String(user.clave.codigo).trim()
        const numeroIngresado = String(pin).trim()
  
        // console.log(`Comparando: ${numeroJSON} === ${numeroIngresado}`);
  
        return user.tipo === 'tarjeta' && numeroJSON === numeroIngresado
      })
  
      if (!usuarioValido) {
        return { valido: false, mensaje: 'Pin incorrecto' }
      }
  
      if (usuarioValido.clave.bloqueada) {
        return { valido: false, mensaje: 'La tarjeta está bloqueada' }
      }
  
      return { valido: true, usuario: usuarioValido }
    } catch (error) {
      console.error('Error en la validación:', error)
      return { valido: false, mensaje: error.message }
    }
  }
  