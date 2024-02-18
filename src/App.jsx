import './App.css'
import { useState } from 'react';
import { Nav } from './components/Nav/Nav'
import { About } from './components/About/About'
import { Educacion } from './components/Educacion/Educacion'
import { Conocimientos } from './components/Conocimientos/Conocimientos'
import { Proyectos } from './components/Proyectos/Proyectos'
import { Contacto } from './components/Contacto/Contacto'



function App() {
  const [modoClaro, setModoClaro] = useState(true);

  const toggleModoClaro = ()=>{
    setModoClaro(!modoClaro)
  }

  return (
    <div className='app-container'>
      <Nav toggleModoClaro={toggleModoClaro} modoClaro={modoClaro} setModoClaro={setModoClaro}/>
      <main className='hero-div'>
        <About modoClaro={modoClaro}/>
        <Proyectos modoClaro={modoClaro}/>
        <Educacion modoClaro={modoClaro}/>
        <Conocimientos modoClaro={modoClaro}/>
        <Contacto modoClaro={modoClaro}/>
      </main>
    </div>
  )
}

export default App
