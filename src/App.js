import { useState } from 'react';
import './App.scss';
// import Nav from './Componentes/Nav';
import Inicio from './Componentes/Inicio';
import Conocimientos from './Componentes/Conocimientos';
import Proyectos from './Componentes/Proyectos';
import ContextoADPC from './Componentes/Contexto/Contexto';

function App() {

    const [claseBtnUpScroll, setClaseBtnUpScroll] = useState('scroll-up');

    window.addEventListener('scroll', ()=>{
      window.scrollY > 1000 
      ? setClaseBtnUpScroll('scroll-up scroll-up-in')
      : setClaseBtnUpScroll('scroll-up');
    });

  return (
    <>
      <ContextoADPC>
        {/* <Nav/> */}
        <Inicio/>
        <Conocimientos/>
        <Proyectos/>
      </ContextoADPC>
      <aside id="scroll-up-btn" className={claseBtnUpScroll} onClick={()=>window.scroll(0, 0)}>
        <div className="scroll-up__stick"></div>
        <div className="scroll-up__arrow"></div>
      </aside>
    </>
  );
}

export default App;