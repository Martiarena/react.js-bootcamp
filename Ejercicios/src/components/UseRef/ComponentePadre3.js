import React, { useRef } from "react";
import ComponenteHijo3 from "./ComponenteHijo3";

export default function ComponentePadre3() {
  const inputRef = useRef(); // 👉 Debes enviar este ref al hijo

  function clickHandler(){
    inputRef.current.focus()
  }

  return (
    <div>
      <h2>Ejercicio: Enfocar el input desde el padre</h2>
      {/* 👇 Cuando hagas clic, el input en el hijo debe recibir el foco */}
      <button onClick={clickHandler}>Enfocar Input</button>
      
      {/* Pasar ref al ComponenteHijo */}
      <ComponenteHijo3 ref={inputRef} />
    </div>
  );
}
