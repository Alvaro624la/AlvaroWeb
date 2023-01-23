import React, { useContext, useState } from 'react';
import { ContextoADPC } from './Contexto/Contexto';
import fotoPerfil from '../img/fotoperfil.jpg';
import { FaLinkedin, FaGithubSquare, FaHome, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
function Inicio() {
  const {ADPC} = useContext(ContextoADPC);

  const [claseContactar, setClaseContactar] = useState('contactar-off');
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
    </div>
    </>
  )
}

export default Inicio 