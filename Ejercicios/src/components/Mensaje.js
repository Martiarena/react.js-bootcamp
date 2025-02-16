import React from 'react'

export default function Mensaje({mostrar}) {

    return <>{mostrar && <p>Mostrar mensaje</p>}</>;
}