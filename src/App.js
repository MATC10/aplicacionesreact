import './assets/css/miCss.css';
import sisebuto from './assets/images/rey_sisebuto.png';
import leogivildo from './assets/images/rey_leogivildo.png';
import atanagildo from './assets/images/rey_atanagildo.png';
import incognito from './assets/images/rey_incognito.png';
function App() {
let reyes = ["Sisebuto", "Leogivildo", "Atanagildo", "Visto"];

const cambiarImagen=(e)=>{
  if(e.target.src.includes("incognito")){
    e.target.style.visibility = "hidden"
  }
  e.target.src=incognito;
  e.target.parentNode.style.backgroundColor = "white";
}

const cambiarTexto=(e)=>{
  if(e.target.innerHTML == reyes[3]){
    e.target.style.visibility = "hidden"
  }
  e.target.innerHTML = reyes[3];
}

  return (
    <div className="contenedor">
      <div className='rey sisebuto'>
        <img onClick={cambiarImagen} src={sisebuto} alt="Rey Sisebuto"/>
        <div onClick={cambiarTexto} className='sisebutoNombre'>{reyes[0]}</div>
      </div>
      <div className='rey leogivildo'>
        <img onClick={cambiarImagen}  src={leogivildo} alt="Rey Leogivildo"/>
        <div onClick={cambiarTexto} className='leogivildoNombre'>{reyes[1]}</div>
      </div>
      <div className='rey atanagildo'>
        <img onClick={cambiarImagen}  src={atanagildo} alt="Rey Atanagildo"/>
        <div onClick={cambiarTexto} className='atanagildoNombre'>{reyes[2]}</div>
      </div>
    </div>
  );
}

export default App;
