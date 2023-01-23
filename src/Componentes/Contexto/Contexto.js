import React, { useState } from 'react';
import fotoProyectoVallulis from '../../img/proyecto-vallulis.jpg';
import fotoProyectoMetJS from '../../img/proyecto-metjs.jpg';
import fotoProyectoDD from '../../img/proyecto-dd.jpg';
import fotoProyectoPhotographer from '../../img/proyecto-photographer.jpg';
import fotoProyectoPortfolio from '../../img/proyecto-portfolio.jpg';
import { FaGitAlt, FaJs, FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaSass } from "react-icons/fa";
import { SiWebpack, SiBabel } from "react-icons/si";

export const ContextoADPC = React.createContext();

const Contexto = (props) => {
    
    const [ADPC] = useState({
        nombrecompleto: 'Álvaro de Prado Calle',
        lugar: 'Santa Perpetua de Mogoda',
        telefono: '628 25 17 20',
        email: 'alvarodepradotrabajo@gmail.com',
        linkedin: 'https://www.linkedin.com/in/álvaro-de-prado-calle-740062221/',
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
        3: {
            foto: <FaSass/>,
            texto: 'Sass',
        },
        4: {
            foto: <FaJs/>,
            texto: 'JS',
        },
        5: {
            foto: <SiBabel/>,
            texto: 'Babel',
        },
        6: {
            foto: <SiWebpack/>,
            texto: 'Webpack',
        },
        7: {
            foto: <FaReact/>,
            texto: 'REACT',
        },
        8: {
            foto: <FaGitAlt/>,
            texto: 'GIT',
        },
        9: {
            foto: <FaWordpress/>,
            texto: 'Wordpress',
        },
        // 10: {
        //     foto: `${}`,
        //     texto: '',
        // },
    });

    const [Proyectos] = useState({
        vallulis: {
            url: 'https://miguelangeldevallulis.com',
            img: `${fotoProyectoVallulis}`,
            nombre: 'Miguel Angel de Vallulis',
            subnombre: 'Página web oficial de artista/cantante profesional',
            descripcion: 'Creación de una página web profesional desde 0, y gestionando no solo la parte como desarrollador, sino también, la creación del dominio, el hosting y demás cosas necesarias para su correcto funcionamiento y puesta en marcha.',
            lenguaje: 'React'
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
        antiguoportfolio: {
            url: 'https://alvaro624la.github.io/Portfolio/',
            img: `${fotoProyectoPortfolio}`,
            nombre: 'AdP Portfolio',
            subnombre: 'Antiguo portfolio personal',
            descripcion: 'Mi portfolio, anterior a éste donde se encuentra actualmente.',
            lenguaje: 'JavaScript'
        },
    });

    return (
        <>
        <ContextoADPC.Provider value={{ADPC, Conocimientos, Proyectos}}>
            {props.children}
        </ContextoADPC.Provider>
        </>
    )
}

export default Contexto