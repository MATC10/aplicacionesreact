import React from 'react'
import { useEffect, useState } from 'react'



function App61({ url }) {
    const [datosChistes, setDatosChistes] = useState([]);


    const cambiar = () => {
      const peticion = fetch(url);
        peticion
            .then(datos => datos.json())
            .then(lectura => 
                setDatosChistes(
                        <div key={lectura.id}> {lectura.value}
                            <button onClick={cambiar}>Cambiar chiste</button>
                        </div>)
            )
            .catch(console.log("Se ha producido un error"))
    }

    useEffect(() => {
     cambiar()
    }, [])


    return (
        <>
        {datosChistes}
        </>
    )
}

export default App61