import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const reyes = [
  {
    nombre: "atanagildo",
    imagen: "https://html6.es/img/rey_atanagildo.png",
  }, {
    nombre: "ataúlfo",
    imagen: "https://html6.es/img/rey_ataulfo.png",
  }, {
    nombre: "ervigio",
    imagen: "https://html6.es/img/rey_ervigio.png",
  }, {
    nombre: "leovigildo",
    imagen: "https://html6.es/img/rey_leovigildo.png",
  }, {
    nombre: "recesvinto",
    imagen: "https://html6.es/img/rey_recesvinto.png",
  }, {
    nombre: "sisebuto",
    imagen: "https://html6.es/img/rey_sisebuto.png",
  }
];

function App81() {


  return (
    <div className='reyes'>

    {    reyes.map(personaje => 
    
        <Link to={`/${personaje.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}>
        <img src={personaje.imagen} alt={personaje.nombre} />
        </Link>)
    }
    
    </div>
    
  );
}

export default App81;
