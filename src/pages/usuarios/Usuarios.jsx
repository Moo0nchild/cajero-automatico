import { useEffect, useState } from 'react'
import  users  from '../../users.json'

export function Usuarios() {
  // const [usuarios, setUsuarios] = useState([])
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   fetch('../../users.json') // Ruta relativa a public/
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Error al cargar los datos')
  //       }
  //       return response.json()
  //     })
  //     .then((data) => setUsuarios(data))
  //     .catch((error) => setError(error.message))
  // }, [])

  return (
    <div>
      {/* <h2>Lista de Usuarios</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {usuarios.map((user, index) => (
          <li key={index}>
            {user.nombre} - {user.email}
          </li>
        ))}
      </ul> */}
      <ul>
        <li> {users}</li>
        {/* {usuarios.map((user, index) => (
          <li key={index}>
            {user.nombre} - {user.email}
          </li>
        ))} */}
      </ul>
    </div>
  )
}
