import React from 'react'
import ListaNombres from './ListaNombres'

export default function Nombres() {

    const NombresRegistrados = [
        {
            id: 1, 
            nombre: 'CrimsonDeath', 
            edad: 35, 
            oficio: 'Desarrollador de Videojuegos'
        },
        {
            id: 2, 
            nombre: 'CrimsonNeko', 
            edad: 33, 
            oficio: 'Game Tester y Redactora'
        },
        {
            id: 3, 
            nombre: 'GreyMcKnight', 
            edad: 33, 
            oficio: 'Game Tester'
        }
    ]
    
    return (
        <ListaNombres nombres={NombresRegistrados} />
    )
}
