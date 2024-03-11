import React from 'react'

function App53({reyes}) {

    const reyesGodos = reyes.find(e => e.nombre[0].includes("e") || e.nombre[0].includes("E"))
    
 
        

  return ( 
    <>
    {reyesGodos === undefined ? "No se ha encontrado" : reyesGodos.nombre}
    </>
  )
}

export default App53