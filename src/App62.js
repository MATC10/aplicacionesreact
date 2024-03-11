import React from 'react'
import { useEffect, useState } from 'react'



function App62({ urlRickAndMorty }) {
    const [rickAndMorty, setRickAndMorty] = useState([]);



    useEffect(() => {
        const peticion = fetch(urlRickAndMorty);
        peticion
            .then(datos => datos.json())
            .then(lectura => {
                lectura.results.map((personajes) => {
                    setRickAndMorty((e) => [...e,
                    <div key={personajes.id}> {personajes.name}
                    </div>])
                })
            })
            .catch(console.log("Se ha producido un error"))
    }, [])


    return (
        <>
            {rickAndMorty}
        </>
    )
}

export default App62