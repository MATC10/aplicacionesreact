import React from 'react'
import './assets/css/miCss08.css';
import App81 from './App81'
import App82 from './App82'
import App83 from './App83'
import App84 from './App84'
import App85 from './App85'
import App86 from './App86'
import App87 from './App87'
import App88 from './App88'
import Error404 from './Error404'
import Nav from './Nav'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import {useState} from 'react'

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

function App08() {

 const [reyesGodos, setreyesGodos] = useState(reyes)


  return (


    <BrowserRouter>
        <Nav/>
        <Routes>

            <Route path='/' element={<App81/>}/>
            <Route path='/home' element={<Navigate to='/'/>}/>
 {/*           
            <Route path='/leogivildo' element={<Navigate to='/leovigildo'/>}/>
            <Route path='/atanagildo' element={<App82/>}/>
            <Route path='/ataulfo' element={<App83/>}/>
            <Route path='/ervigio' element={<App84/>}/>
            <Route path='/leovigildo' element={<App85/>}/>
            <Route path='/recesvinto' element={<App86/>}/>
            <Route path='/sisebuto' element={<App87/>}/>
            */}
            
            <Route path='/:letra' element={<App88 reyesGodos={reyesGodos}/>}/>
            <Route path='*' element={<Error404/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App08