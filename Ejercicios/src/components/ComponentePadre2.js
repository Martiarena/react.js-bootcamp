import React, { useState } from 'react'
import ComponenteHijo2 from './ComponenteHijo2'

export default function ComponentePadre2({Saludo, Nombre}) {

    const [mensaje, setMensaje] = useState("");
    
    function handleRevelarMensaje(mensaje) {
        setMensaje(mensaje);
    }

  return (
    <div>
        <ComponenteHijo2 Saludin={Saludo} NombreChido={Nombre} revelar={handleRevelarMensaje} />
        <p>{mensaje}</p>
    </div>
  )
}