import React, { useState } from 'react'
import characters from "./personajes-tlou.json";
import infectados from "./infectados.json"
import './ListaPersonajes.css'
import DetallesPersonaje from './DetallesPersonaje.jsx';


function ListaPersonajes() {
    const [personaje, setPersonaje] = useState();
    const [personajesSeleccionados, setPersonajesSeleccionados] = useState([]);
    const [humanoSeleccionado, setHumanoSeleccionado] = useState(true)
    
    //Dependiendo en que pestaña haga clic, se pone el humanoSeleccionado a true o false
    const handleOption = (option) => {
        setHumanoSeleccionado(option)
    }

    //Manejamos cuando el usuario hace clic en más información de un personaje
    const handleClick = (p) => {
        setPersonaje(p);
        setPersonajesSeleccionados(prev => {
        if (prev.includes(p)) { //Si el personaje ya estaba seleccionado, lo quitamos del array
            return prev.filter(item => item !== p); // quitar
        }
        return [...prev, p]; //En caso contrario se añade
    });
    }
    //Dependiendo si el humano seleccionado sea true o false, se carga o los humanos o los infectados de la saga de The Last Of Us
    return (
        <div>
            <nav>
                <a id="humanos" onClick={() => handleOption(true)} className={humanoSeleccionado === true ? 'selected' : ''}>Humanos</a>
                <a id="infectados" onClick={() => handleOption(false)} className={humanoSeleccionado === false ? 'selected' : ''}>Infectados</a>
            </nav>
            <br></br>
            <div className='personajes-container'>
                {humanoSeleccionado ? <ul> 
                {characters.map((p) => (
                <li key={p.name} className='personaje-card'>
                    <img src={p.image} alt={p.nombre}/>
                    <div className="character-name">{p.name}</div>
                    <button className="info-btn" onClick={() => handleClick(p)}>Más información</button>
                    <DetallesPersonaje personaje={p} isActive={personajesSeleccionados.includes(p)} isHuman={true}></DetallesPersonaje>
                </li>
            ))}
            </ul> : <ul>
                {infectados.map((p) => (
                <li key={p.nombre} className='personaje-card'>
                    <img src={p.imagen} alt={p.nombre}/>
                    <div className="character-name">{p.nombre}</div>
                    <button className="info-btn" onClick={() => handleClick(p)}>Más información</button>
                    <DetallesPersonaje personaje={p} isActive={personajesSeleccionados.includes(p)} isHuman={false}></DetallesPersonaje>
                </li>
            ))}
            </ul>}
            {}
            </div>
        </div>
    )
}

export default ListaPersonajes