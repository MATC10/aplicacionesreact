import React, { useContext } from 'react'
import {Contexto} from './context/Contexto'
import marta from './assets/images07/marta.PNG'
import grace from './assets/images07/grace.PNG'
import aimee from './assets/images07/aimee.PNG'

function App73() {
  const { info, idioma, profe } = useContext(Contexto)
  let srcImagen;
  if(info[idioma].foto === "marta.PNG"){
    srcImagen = marta;
  }else if (info[idioma].foto === "grace.PNG"){
    srcImagen = grace;
  }else{
    srcImagen = aimee;
  }
  return (
    <>
    <div className='profesora' style={{display:profe}}>
    <h1>{info[idioma].boton1}</h1>
    <div className='foto'><img src={srcImagen} alt='imagen'></img></div>
    <div className='nombre'>{info[idioma].nombre}</div>
    </div>
    </>
  )
}

export default App73