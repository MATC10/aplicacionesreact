import React from 'react'

function App52({reyes}) {


    const borrar=(e)=>{
        e.target.parentNode.remove();
    }

  return ( 
    <>
 {reyes.filter(e => !e.nombre.includes("g")).map( e =>
        <div key={e.nombre}>
        {e.nombre.toUpperCase()} 
        <button onClick={borrar}>Borrar</button>
        </div>
        )}
    </>
  )
}

export default App52