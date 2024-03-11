import React, { useContext } from 'react'
import {Contexto} from './context/Contexto'

function App73() {
  const { info, idioma, lugar } = useContext(Contexto)

  return (
    <>
    <div className='ubicacion' style={{display:lugar}}>
    <h1>{info[idioma].boton2}</h1>
    <div className='texto'>{info[idioma].direccion}</div>
    </div>
    </>
  )
}

export default App73