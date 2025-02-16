import React, { useState } from 'react';
import Mensaje from './Mensaje';

export default function CondicionalYY() {
    const [mensaje, setMensaje] = useState(false);

    return (
        <div className="App">
            <button onClick={() => setMensaje(!mensaje)}>{mensaje ? 'Ocultar Mensaje' : 'Mostrar Mensaje'}</button>
            {mensaje && <Mensaje mostrar={true} />}
            <p>Nota "&&" solo renderiza el booleano "true"</p>
        </div>
    )
}
