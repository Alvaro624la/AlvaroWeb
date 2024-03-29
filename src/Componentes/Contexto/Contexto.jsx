import React, { useState } from 'react';
import fotoProyectoVallulis from '../../img/proyecto-vallulis.jpg';
import fotoProyectoMetJS from '../../img/proyecto-metjs.jpg';
import fotoProyectoDD from '../../img/proyecto-dd.jpg';
import fotoProyectoPhotographer from '../../img/proyecto-photographer.jpg';
import fotoProyectoVoice from '../../img/proyecto-voice.jpg'
import fotoProyectoPortfolio from '../../img/proyecto-portfolio.jpg';
import { FaGitAlt, FaJs, FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaSass } from "react-icons/fa";
import { SiWebpack, SiBabel, SiVite } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const ContextoADPC = React.createContext();

const Contexto = (props) => {
    
    const [ADPC] = useState({
        nombrecompleto: 'Álvaro de Prado Calle',
        lugar: 'Santa Perpetua de Mogoda',
        telefono: '628 25 17 20',
        email: 'alvarodepradotrabajo@gmail.com',
        linkedin: 'https://www.linkedin.com/in/alvaro-de-prado/',
        github: 'https://github.com/Alvaro624la',
    });

    const [Conocimientos] = useState({
        1: {
            foto: <FaHtml5/>,
            texto: 'HTML 5',
        },
        2: {
            foto: <FaCss3Alt/>,
            texto: 'CSS 3',
        },
        9: {
            foto: <FaSass/>,
            texto: 'Sass',
        },
        3: {
            foto: <FaJs/>,
            texto: 'JS',
        },
        8: {
            foto: <SiBabel/>,
            texto: 'Babel',
        },
        7: {
            foto: <SiWebpack/>,
            texto: 'Webpack',
        },
        4: {
            foto: <FaReact/>,
            texto: 'REACT',
        },
        5: {
            foto: <FaGitAlt/>,
            texto: 'GIT',
        },
        11: {
            foto: <FaWordpress/>,
            texto: 'Wordpress',
        },
        6: {
            foto: <SiVite/>,
            texto: 'Vite',GrMysql
        },
        10: {
            foto: <GrMysql/>,
            texto: 'MySQL',
        },
    });

    const [Proyectos] = useState({
        vallulis: {
            url: 'https://miguelangeldevallulis.com',
            img: `${fotoProyectoVallulis}`,
            nombre: 'Miguel Angel de Vallulis',
            subnombre: 'Página web oficial de artista/cantante profesional',
            descripcion: 'Creación de una página web profesional desde 0, y gestionando no solo la parte como desarrollador, sino también, la creación del dominio, el hosting y demás cosas necesarias para su correcto funcionamiento y puesta en marcha.',
            lenguaje: 'React + Vite'
        },
        metjs: {
            url: 'https://alvaro624la.github.io/MetJS/',
            img: `${fotoProyectoMetJS}`,
            nombre: 'MetJS',
            subnombre: 'Juego interactivo para resolver problemas JavaScript',
            descripcion: 'Consta de distintos niveles con problemas variados de JavaScript, de menor a mayor dificultad, con indicaciones si la respuesta es correcta o incorrecta.',
            lenguaje: 'JavaScript'
        },
        dangerousroad: {
            url: 'https://alvaro624la.github.io/DangerousRoad/',
            img: `${fotoProyectoDD}`,
            nombre: 'Dangerous Road',
            subnombre: 'Juego básico de esquivar coches y motos mientras andas por una carretera.',
            descripcion: 'Es un juego básico donde tratarás de esquivar coches y motos mientras andas por una carretera infinita. Éstos, se acercarán más rápidamente a medida que vayas esquivandolos.',
            lenguaje: 'JavaScript'
        },
        photographerpage: {
            url: 'https://alvaro624la.github.io/Artist_website/',
            img: `${fotoProyectoPhotographer}`,
            nombre: 'Photographer Page',
            subnombre: 'Página web de una fotógrafa ficticia.',
            descripcion: 'És un página de prueba para una artista dedicada a la fotografia, que quiere usar la web para mostrar sus trabajos y su información de contacto. Y que en un futuro va a tener una tienda funcional donde los clientes puedan comprar su obras.',
            lenguaje: 'JavaScript'
        },
        // voicecolorchanger: {
        //     url: 'https://alvaro624la.github.io/Voice-ColorChanger/',
        //     img: `${fotoProyectoVoice}`,
        //     nombre: 'Funny Voice Color Changer',
        //     subnombre: 'App de reconocimiento de voz y texto',
        //     descripcion: 'Utilizando el hook SpeechRecognition sumado a unas cuantas funciones en JavaScript, he aquí una app de detección de voz y texto en inglés, para cambiar el color del fondo. Tiene ciertas características que lo hace dinámico y entretenido. ¡Puedes clicar al link y probarlas tú mismo! (No abrir en navegador Opera)',
        //     lenguaje: 'React + Vite'
        // },
        antiguoportfolio: {
            url: 'https://alvaro624la.github.io/Portfolio/',
            img: `${fotoProyectoPortfolio}`,
            nombre: 'AdP Portfolio',
            subnombre: 'Antiguo portfolio personal',
            descripcion: 'Mi antiguo y primer portfolio. Está desactualizado y no sirve, pero me gusta tenerlo para el recuerdo',
            lenguaje: 'JavaScript'
        },
    });

    const [Certificaciones] = useState({
        htmlCss:{
            fcc: 'https://freecodecamp.org/certification/Alvaro624la/responsive-web-design',
            ob: 'https://storage.googleapis.com/openvitae-prod/diplomas%2Fe33fec29-18b7-41ad-bcbe-f694288e9153.pdf',
        },
        js:{
            fcc: 'https://www.freecodecamp.org/certification/Alvaro624la/javascript-algorithms-and-data-structures',
            ob: 'https://storage.googleapis.com/openvitae-prod/diplomas%2Fdb862ba3-0cf1-4491-b4a1-8b1890a53716.pdf',
        },
        git: 'https://storage.googleapis.com/openvitae-prod/diplomas%2F6f66f0bb-7dc5-42f9-a27f-163171661226.pdf'
    });

    return (
        <>
        <ContextoADPC.Provider value={{ADPC, Conocimientos, Proyectos, Certificaciones}}>
            {props.children}
        </ContextoADPC.Provider>
        </>
    )
}

export default Contexto