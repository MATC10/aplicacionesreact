import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <NavLink className={({isActive})=> (isActive ?'activado' : null)} to='/'>Home</NavLink>
        <NavLink className={({isActive})=> (isActive ?'activado' : null)} to='/atanagildo'>Atanagildo</NavLink>
        <NavLink className={({isActive})=> (isActive ?'activado' : null)} to='/ataulfo'>Ataúlfo</NavLink>
        <NavLink className={({isActive})=> (isActive ?'activado' : null)} to='/ervigio'>Ervigio</NavLink>
        <NavLink className={({isActive})=> (isActive ?'activado' : null)} to='/leovigildo'>Leovigildo</NavLink>
        <NavLink className={({isActive})=> (isActive ?'activado' : null)} to='/recesvinto'>Recesvinto</NavLink>
        <NavLink className={({isActive})=> (isActive ?'activado' : null)} to='/sisebuto'>Sisebuto</NavLink>
        <NavLink className={({isActive})=> (isActive ?'activado' : null)} to='/rey/Hola'>Rey</NavLink>
    </nav>
  )
}