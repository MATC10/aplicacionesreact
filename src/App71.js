import React,  { useContext } from 'react'
import spain from './assets/images07/spain.jpg'
import uk from './assets/images07/uk.png'
import france from './assets/images07/francia.png'
import { Contexto } from './context/Contexto'


function App71() {
  const { setIdioma } = useContext(Contexto);

  return (
    <div className='idiomas'>
      <div className='bandera'><img onClick={()=>{setIdioma(0)}} src={spain} alt='spain'/></div>
      <div className='bandera'><img onClick={()=>{setIdioma(1)}} src={uk} alt='uk'/></div>
      <div className='bandera'><img onClick={()=>{setIdioma(2)}} src={france} alt='france'/></div>
    </div>

  )
}

export default App71