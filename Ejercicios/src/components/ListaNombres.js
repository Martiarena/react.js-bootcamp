import React from 'react'

export default function ListaNombres({nombres}) {

    return (
        <div>
            <h2>Lista de Nombres</h2>
            <ul>
                {nombres.map((nombre) => <li key={nombre.id}>Soy {nombre.nombre}. Tengo {nombre.edad} años. Soy {nombre.oficio}.</li>)}
            </ul>
        </div>
    )
}