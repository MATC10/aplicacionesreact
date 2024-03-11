import React, {useState} from 'react';
import './assets/css/miCss02.css';

const App03 = () => {
    const [numero1,setNumero1] = useState();
    const [numero2,setNumero2] = useState();
    const [resultado,setResultado] = useState();

    const sumar=()=>{
        setResultado(Number(numero1) + Number(numero2));

    }

    const numero1Change =(e)=>{
        setNumero1(e.target.value)
    }

    
    const numero2Change =(e)=>{
        setNumero2(e.target.value)
    }



  return (
    <div className='caja'>
    <input type="number" onChange={numero1Change}/> +
    <input type="number" onChange={numero2Change}/> =
    <input type="number" value={resultado} readOnly/>
    <button onClick={sumar} >Sumar</button>

    </div>
  )
}

export default App03