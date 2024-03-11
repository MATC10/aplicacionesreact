import React from 'react'


function App41({nombre, color, precio, imagen, setTotal}) {
    
    const comprar=(e)=>{
        setTotal((t)=> t + precio) //hago referencia al total hecho en el padre para el setTotal
        e.target.parentNode.parentNode.parentNode.style.display = 'none';
    }

    

  return (
    <div style={{backgroundColor : color}} className='reyes'>
        <h1>{nombre}</h1>
        <div><img src={imagen} alt='Reyes Godos'></img></div>
        <div className='titulo'>Precio:</div>
        <div className='precio'>{precio}€
            <div>
                <button onClick={comprar}>Comprar</button>
            </div>
        </div>
    </div>
  )
}

export default App41