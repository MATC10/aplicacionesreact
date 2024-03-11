import React from 'react'
import App61 from './App61';
import App62 from './App62';

function App06() {

const url="https://api.chucknorris.io/jokes/random";
const urlRickAndMorty="https://rickandmortyapi.com/api/character/";

  return (
    <>
   <h1>Actividad 1:</h1>
   <App61 url={url}/>

   <h2>Actividad 2:</h2>
   <App62 urlRickAndMorty={urlRickAndMorty}/>

    </>
  )
}

export default App06