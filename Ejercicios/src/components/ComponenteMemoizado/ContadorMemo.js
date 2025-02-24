import React, { useState } from "react";
import MensajeMemo from "./MensajeMemo";

export default function ContadorMemo() {
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState("Hola, soy un mensaje fijo");

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <MensajeMemo texto={mensaje} />
        </div>
    );
}
