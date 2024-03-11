import React, {useState} from 'react';
import './assets/css/miCss31.css';

const App31 = () => {


    let reyes = 
    [
        {
        nombre: "Ataúlfo",
        aficion: "Comer toros sin pelar",
        },
        {
        nombre: "Recesvinto",
        aficion: "Leer a Hegel",
        },
        {
        nombre: "Teodorico",
        aficion: "Ver documentales de la tele",
        }
    ];
    
    const [mensaje, setMensaje] = useState();
    const [contador, setContador] = useState(0);


    const cambio=()=>{
        setContador(contador+1)
        if(contador+1 >= reyes.length) setContador(0)

        setMensaje(<h2>La afición principal de <span className="nombreSpan">{reyes[contador].nombre}</span> es <span  className="aficionSpan">{reyes[contador].aficion}</span> </h2>)
    }


  return (
    <>
    
    <button onClick={cambio} >Ver siguiente</button>
    <div>{mensaje}</div>
    
    </>
  )
}

export default App31