import React from 'react'
import './assets/css/miCss05.css';
import App51 from './App51';
import App52 from './App52';
import App53 from './App53';
import App54 from './App54';

function App05() {
    const reyes=[
        {
            nombre:"Atanagildo",
            reinado:15,
            vacasComidas:9,
            imagen:"https://html6.es/img/rey_atanagildo.png",
        },{
            nombre:"Ervigio",
            reinado:7,
            vacasComidas:3,
            imagen:"https://html6.es/img/rey_ervigio.png",
        },{
            nombre:"Ataúlfo",
            reinado:5,
            vacasComidas:16,
            imagen:"https://html6.es/img/rey_ataulfo.png",
        },{
            nombre:"Leovigildo",
            reinado:18,
            vacasComidas:3,
            imagen:"https://html6.es/img/rey_leovigildo.png",
        },{
            nombre:"Sisebuto",
            reinado:9,
            vacasComidas:13,
            imagen:"https://html6.es/img/rey_sisebuto.png",
        },{
            nombre:"Recesvinto",
            reinado:19,
            vacasComidas:11,
            imagen:"https://html6.es/img/rey_recesvinto.png",
        },{
            nombre:"Teodorico",
            reinado:33,
            vacasComidas:12,
            imagen:"https://html6.es/img/rey_teodorico.png",
        }
      ]


  return (
    <>
   <h1>Actividad 1:</h1>
   <App51 reyes={reyes}/>
   
   <h2>Actividad 2:</h2>
   <App52 reyes={reyes}/>

   <h2>Actividad 3:</h2>
   <App53 reyes={reyes}/>

   <h2>Actividad 4:</h2>
   <App54 reyes={reyes}/>

    </>
  )
}

export default App05