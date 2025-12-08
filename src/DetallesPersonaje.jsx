import React from 'react'
import './ListaPersonajes.css'


function DetallesPersonaje(props) {
    const {personaje, isActive, isHuman} = props; //Obtenemos tanto el personajes, si se muestra o no la descripción y si es un humano o infectado
    return (
        //Dependiendo de si se muestra la descripción o no se indica una clase u otra
        <div className={`extra-info ${isActive ? 'show' : ''}`}>
            <p><span className="info-label">Descripción:</span> {personaje.description}</p>
            {isHuman && <p><span className="info-label">Edad:</span> {personaje.age}</p>}
            {isHuman && <p><span className="info-label">Relaciones:</span> {personaje.relations.join(", ")}</p>}
        </div>
    )
}

export default DetallesPersonaje