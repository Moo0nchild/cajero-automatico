import { useEffect, useState } from 'react'

export function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/users.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar los datos')
        }
        return response.json()
      })
      .then((data) => setUsuarios(data))
      .catch((error) => setError(error.message))
  }, [])

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {usuarios.length > 0 ? (
          usuarios.map((user, index) => (
            <li key={index}>
              {`Nombre: ${user.nombre} - `}
              {`Tipo: ${user.tipo} - `}
              {`Numero: ${user.numero} - `}
              {`Clave: ${user.clave}`}
            </li>
          ))
        ) : (
          <p>Cargando usuarios...</p>
        )}
      </ul>
    </div>
  )
}
