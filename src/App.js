import './App.scss';
// import Nav from './Componentes/Nav';
import Inicio from './Componentes/Inicio';
import Conocimientos from './Componentes/Conocimientos';
import Proyectos from './Componentes/Proyectos';
import Footer from './Componentes/Footer';
import ContextoADPC from './Componentes/Contexto/Contexto';

function App() {
  return (
    <>
      <ContextoADPC>
        {/* <Nav/> */}
        <Inicio/>
        <Conocimientos/>
        <Proyectos/>
        <Footer/>
      </ContextoADPC>
    </>
  );
}

export default App;