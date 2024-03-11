import "./App.css";
import { useState } from "react";

const App = () => {

  const [conversion, setConversion] = useState({
    euro:"",
    argentino:"",
    colombiano:"",
    mexicano:"",
    dolar:""
  });

  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]

  const convertir=(e)=>{
    const euroConvertir = e.target.value;
    setConversion({
      euro: euroConvertir,
      argentino: (euroConvertir * cambios[1].cambio).toFixed(3),
      colombiano: (euroConvertir * cambios[2].cambio).toFixed(3),
      mexicano: (euroConvertir * cambios[3].cambio).toFixed(3),
      dolar: (euroConvertir * cambios[4].cambio).toFixed(3),
  })
  }

  return (
    <>
    <div>
        <label htmlFor="euro">{cambios[0].moneda}</label>
        <input value={conversion.euro} onChange={convertir} id="euro" type="number"/> 
    </div>
    <div>
        <label htmlFor="argentino">{cambios[1].moneda}</label>
        <input value={conversion.argentino} id="argentino" type="number" readOnly/> 
    </div>
    <div>
        <label htmlFor="colombiano">{cambios[2].moneda}</label>
        <input value={conversion.colombiano} id="colombiano" type="number" readOnly/> 
    </div>
        <label htmlFor="mexicano">{cambios[3].moneda}</label>
        <input value={conversion.mexicano} id="mexicano" type="number" readOnly/> 
    <div>
    </div>
    <div>
        <label htmlFor="dolar">{cambios[4].moneda}</label>
        <input value={conversion.dolar} id="dolar" type="number" readOnly/> 
    </div>


    </>
  )
}

export default App;