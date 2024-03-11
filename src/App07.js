import React from 'react'
import './assets/css/miCss07.css';
import App71 from './App71'
import App72 from './App72'
import App73 from './App73'
import App74 from './App74'
import {Datos} from './context/Contexto'

function App07() {
  return (
    <>
    <Datos>
        <div className='banderas'>
            <App71/>
        </div>
        <div className='contenido'>
            <App72/>
            <App73/>
            <App74/>
        </div>
    </Datos>
    </>
  )
}

export default App07