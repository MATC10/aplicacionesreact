import React from 'react'



function App51({reyes}) {
    
 

      const valorReyes = reyes.map( e =>
        <div key={e.nombre}  className='cajaCentral'>
        <span className='red'>{e.nombre.toUpperCase()}</span> ha comido {e.vacasComidas * e.reinado} vacas en sus {e.reinado} años de reinado
        
        <img  src={e.imagen} alt='reyesimagenes'></img>
        
        </div>
        );

 

  return (
    <>
    <div className='caja'>
    {valorReyes}
    </div>
    </>
  )
}

export default App51