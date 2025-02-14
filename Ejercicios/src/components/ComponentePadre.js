import React from 'react'
import ComponenteHijo from './ComponenteHijo'

export default function ComponentePadre({Saludo, Nombre}) {
  
  return (
    <div>
      <ComponenteHijo Saludin={Saludo} NombreChido={Nombre} />
    </div>
  )
}