import React from 'react'

function App54({reyes}) {



    const sumar=(e)=>{
      ++e.target.innerHTML;
    }


    
  return ( 
    <>
    {
    reyes.filter(e=> e.vacasComidas > 10 && e.reinado > 10).map(e=>
        <div key={e.nombre}>
        <div>{e.nombre}</div>
        <div onClick={sumar}>0</div>
    
        </div>

    )
    }
    </>
  )
}

export default App54