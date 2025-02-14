import React, {useState, useEffect} from 'react';

function Cambiodecolor() {
    const [fondo, setfondo] = useState('red');

    useEffect(() => {
        document.body.style.backgroundColor = fondo;
    }, [fondo]);

    const Cambiarcolor = () => {
        setfondo(prevFondo => (prevFondo === 'red' ? 'blue' : 'red'));
    };

    return (
        <div>
            <button onClick={Cambiarcolor}>Cambio de color!</button>
        </div>
    );
}

export default Cambiodecolor;