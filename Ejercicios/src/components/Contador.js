import React, { useState } from 'react';

function Contador() {
    
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador+1)
    };

    const reiniciar = () => {
        setContador(0)
    };

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button disabled={contador === 0} onClick={reiniciar}>Reiniciar</button>
        </div>
    );
}

export default Contador;
