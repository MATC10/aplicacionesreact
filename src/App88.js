import React from 'react'
import { useParams } from 'react-router-dom'

function App88({reyesGodos}) {
    const dato = useParams();

    let primeraLetra = dato.letra.substring(0, 1).toUpperCase();
  return (
    <>

{reyesGodos.filter(e => e.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(dato.letra)).map( e =>
        <div key={e.nombre}>
        <img src={e.imagen}/>
        <span>{primeraLetra + e.nombre.substring(1)} </span>
        
        </div>
        
        )}

    </>

  )
}
export default App88