import React, { useContext, useState } from 'react';
import { ContextoADPC } from './Contexto/Contexto';
import fotoPerfil from '../img/fotoperfilEDIT2.png';
import { FaLinkedin, FaGithubSquare, FaHome, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
// import { VscPinned } from "react-icons/vsc";
import { CgEditBlackPoint } from "react-icons/cg";
import 'animate.css';
function Inicio() {
  const {ADPC} = useContext(ContextoADPC);

  const [claseContactar, setClaseContactar] = useState('contactar-off');
  const [textPoint1, setTextPoint1] = useState();
  const [textPoint2, setTextPoint2] = useState();
  const [textPoint3, setTextPoint3] = useState();

  return (
    <>
    <div className='inicio'>
      <h1 className='inicio__nombrecompleto'>{ADPC.nombrecompleto}</h1>
      <div className='inicio__fotoBnt-cont'>
        <img className='inicio__fotoBnt-cont__fotoperfil' src={fotoPerfil} alt='foto de perfil de Álvaro de Prado'/>
        <button className='inicio__fotoBnt-cont__botoncontacto' onClick={()=> claseContactar === 'contactar-off' ? setClaseContactar('contactar-on') : setClaseContactar('contactar-off')}>Contactar</button>
      </div>
      <div className={claseContactar}>
        <button className='contactar-on__btn-cerrar' onClick={()=>setClaseContactar('contactar-off')}>X</button>
        <div className='contactar-on__redes-container'>
          <div className='contactar-on__redes-container__demas-rows'>
            <a href={'https://goo.gl/maps/7WRQWNHEzcNEqSxCA'} target='_blank' rel="noreferrer nofollow noopener" className='contactar-on__redes-container__demas-rows__icons'><FaHome/></a>
            <a href={'https://goo.gl/maps/7WRQWNHEzcNEqSxCA'} target='_blank' rel="noreferrer nofollow noopener" className='contactar-on__redes-container__demas-rows__p'>{ADPC.lugar}</a>
          </div>
          <div className='contactar-on__redes-container__demas-rows'>
            <a href={`tel: ${ADPC.email}`} className='contactar-on__redes-container__demas-rows__icons'><FaPhoneAlt/></a>
            <a href={`tel: ${ADPC.email}`} className='contactar-on__redes-container__demas-rows__p'>{ADPC.telefono}</a>
          </div>
          <div className='contactar-on__redes-container__demas-rows'>
            <a href={`mailto: ${ADPC.email}`} className='contactar-on__redes-container__demas-rows__icons'><GrMail/></a>
            <a href={`mailto: ${ADPC.email}`} className='contactar-on__redes-container__demas-rows__p'>{ADPC.email}</a>
          </div>
          <div className='contactar-on__redes-container__last-rows'>
            <a className='contactar-on__redes-container__last-rows__links' href={ADPC.linkedin} target='_blank' rel="noreferrer"><FaLinkedin/></a>
            <a className='contactar-on__redes-container__last-rows__links' href={ADPC.github} target='_blank' rel="noreferrer"><FaGithubSquare/></a>
          </div>
        </div>
      </div>
      <CgEditBlackPoint className='infoPoint-1 animate__animated animate__flip animate__delay-1s' 
      onMouseOver={()=>setTextPoint1(<p className='infoPoint-1__text'>+2 años de experiencia</p>)} 
      onMouseLeave={()=>setTextPoint1('')}/>
      {textPoint1}
      <CgEditBlackPoint className='infoPoint-2 animate__animated animate__flip animate__delay-1.5s' 
      onMouseOver={()=>setTextPoint2(<p className='infoPoint-2__text'>React, Git y más</p>)} 
      onMouseLeave={()=>setTextPoint2('')}/>
      {textPoint2}
      <CgEditBlackPoint className='infoPoint-3 animate__animated animate__flip animate__delay-2s' 
      onMouseOver={()=>setTextPoint3(<p className='infoPoint-3__text'>Disponibilidad</p>)} 
      onMouseLeave={()=>setTextPoint3('')}/>
      {textPoint3}
    </div>
    </>
  )
}

export default Inicio 