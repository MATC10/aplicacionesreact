import React from 'react'
import App41 from './App41';
import './assets/css/miCss04.css';
import { useState } from 'react';

function App04() {
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178,
      imagen:"https://html6.es/img/rey_atanagildo.png",
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169,
      imagen:"https://html6.es/img/rey_ervigio.png",
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81,
      imagen:"https://html6.es/img/rey_ataulfo.png",
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126,
      imagen:"https://html6.es/img/rey_leogivildo.png",
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141,
      imagen:"https://html6.es/img/rey_recesvinto.png",
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69,
      imagen:"https://html6.es/img/rey_sisebuto.png",
    }
  ]

  const [total, setTotal] = useState(0);

  return (
    <>
    <h1> TOTAL A PAGAR: {total}€</h1>
    <div className='cajaCentral'>
    <App41 nombre={reyes[0].nombre} color={reyes[0].color} precio={reyes[0].precio} imagen={reyes[0].imagen} setTotal={setTotal}/>
    <App41 nombre={reyes[1].nombre} color={reyes[1].color} precio={reyes[1].precio} imagen={reyes[1].imagen} setTotal={setTotal}/>
    <App41 nombre={reyes[2].nombre} color={reyes[2].color} precio={reyes[2].precio} imagen={reyes[2].imagen} setTotal={setTotal}/>
    <App41 nombre={reyes[3].nombre} color={reyes[3].color} precio={reyes[3].precio} imagen={reyes[3].imagen} setTotal={setTotal}/>
    <App41 nombre={reyes[4].nombre} color={reyes[4].color} precio={reyes[4].precio} imagen={reyes[4].imagen} setTotal={setTotal}/>
    <App41 nombre={reyes[5].nombre} color={reyes[5].color} precio={reyes[5].precio} imagen={reyes[5].imagen} setTotal={setTotal}/>
    </div>
    </>
  )
}

export default App04