import React, { useContext } from 'react'
import {Contexto} from './context/Contexto'


function App72() {

    const { info, idioma, lugar, profe, setLugar, setProfe } = useContext(Contexto)

  return (
<>
      <h1>{info[idioma].titulo}</h1>
      <h2>{info[idioma].texto}</h2>
      <div className='botones'>
        <button onClick={()=> {setLugar('none'); setProfe('block'); (profe === 'block')&&setProfe('none')}}>{info[idioma].boton1}</button>
        <button onClick={()=> {setLugar('block'); setProfe('none'); (lugar === 'block')&&setLugar('none')}} >{info[idioma].boton2}</button>
      </div>
</>
  )
}

export default App72