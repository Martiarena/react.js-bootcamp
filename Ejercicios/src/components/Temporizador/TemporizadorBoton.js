import React, { useState } from "react";
import Temporizador from "./Temporizador";

export default function TemporizadorBoton() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Temporizador" : "Mostrar Temporizador"}
      </button>
      {mostrar && <Temporizador />}
    </div>
  );
}
